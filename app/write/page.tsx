'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.bubble.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/app/utils/firebase'; 
import Select from 'react-select';
import dynamic from 'next/dynamic';


const storage = getStorage(app);
const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});

function WritePage() {

    const { status } = useSession();
    
    const router = useRouter();
    
    const [file, setFile] = useState<File | null>(null);
    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState({value: "Code", label: "Code"});

    useEffect(() => {
        if (status === 'unauthenticated') {
          router.push('/');
        }
      }, [status, router]);

    if(status === "loading") {
        return <div>Loading...</div>
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setFile(e.target.files[0]);
        }
    };     
    
    const handleUploadComplete = async (downloadURL: string | null) => {

        const res = await fetch("/api/posts/", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc,
                img: downloadURL,
                slug: title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]/g, "-").replace(/^-+|-+$/g, ""),
                catSlug: category.value
            })
        });

        setCategory({value: "Code", label: "Code"});
        setDesc("");
        setFile(null);
        setTitle("");
        
    };

    const handleSubmit = async () => {

        const name = new Date().getTime() + (file?.name || "")
        const storageRef = ref(storage, name);
        const uploadTask = file && uploadBytesResumable(storageRef, file);
        
        if(file) {        
            uploadTask?.on('state_changed', 
                (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                    console.log('Upload is paused');
                    break;
                    case 'running':
                    console.log('Upload is running');
                    break;
                }
                }, 
                (error) => {
                    console.log(error);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        handleUploadComplete(downloadURL)
                    });
                }
            );    
        } else {
            handleUploadComplete(null)
        }

    }
    
    const handleSelectChange = (selectedOption: any) => {
        setCategory(selectedOption);
    };
    

  return (
    <div className='pt-10'>
        <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title} className='bg-transparent placeholder:text-gray text-4xl outline-none mb-5'/>
        <Select 
            options={[
                {value: 'Code', label: 'Code'},
                {value: 'Tech', label: 'Tech'},
                {value: 'Security', label: 'Security'},
                {value: 'Gadgets', label: 'Gadgets'},
                {value: 'Insights', label: 'Insights'},
                {value: 'Innovation', label: 'Innovation'},
            ]}
            isClearable={true}
            isSearchable={true}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    background: state.isFocused ? "#eff2f6" : "#eff2f6",
                    color: "#04080b",
                }),
                option: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "#04080b",
                    background: state.isSelected ? "#254160" : state.isFocused ? "#808080" : "eff2f6",
                }),
                input: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "#04080b",
                }),
                placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "#808080",
                }),
                singleValue: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "#254160",
                }),
            }}
            placeholder={"Select category..."}
            className='max-w-xs mb-5'
            value={category}
            onChange={handleSelectChange}
        />
        <div>
            <div className='flex items-center gap-5'>
                <input type="file" id="image" onChange={handleFileChange} className='absolute opacity-0 w-7'/>
                <button className='text-3xl'>
                    <FontAwesomeIcon
                        icon={faSquarePlus}
                        color="#EDF1F6"
                    />
                </button>
            </div>        
            <ReactQuill theme='bubble' value={desc} onChange={setDesc} placeholder='Tell your story...'/>
        </div>
        <button onClick={handleSubmit} className='mt-10 bg-bg text-white outline-none border border-text py-2 px-4'>Publish</button>
    </div>
  )
}

export default WritePage;