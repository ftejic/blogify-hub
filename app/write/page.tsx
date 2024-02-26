'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/app/utils/firebase'; 


const storage = getStorage(app);


function WritePage() {

    const { status } = useSession();
    
    const router = useRouter();
    
    const [file, setFile] = useState<File | null>(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
     

    if(status === "loading") {
        return <div>Loading...</div>
    }
    if(status === "unauthenticated") {
        router.push("/");
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setFile(e.target.files[0]);
        }
    };     
    
    const handleUploadComplete = async (downloadURL: string) => {

        setMedia(downloadURL);

        const res = await fetch("api/posts/", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: downloadURL,
                slug: title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]/g, "-").replace(/^-+|-+$/g, ""),
                catSlug: "Tech"
            })
        });
        
    };

    const handleSubmit = async () => {

        const name = new Date().getTime() + (file?.name || "")
        const storageRef = ref(storage, name);
        const uploadTask = file && uploadBytesResumable(storageRef, file);
        
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
    }
    

  return (
    <div className='pt-10'>
        <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title} className='bg-transparent placeholder:text-gray text-4xl outline-none mb-5'/>
        <div>
            <div className='flex items-center gap-5'>
                <input type="file" id="image" onChange={handleFileChange} className='absolute opacity-0'/>
                <button className='text-3xl'>
                    <FontAwesomeIcon
                        icon={faSquarePlus}
                        color="#EDF1F6"
                    />
                </button>
            </div>        
            <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...'/>
        </div>
        <button onClick={handleSubmit} className='mt-10 bg-bg text-white outline-none border border-text py-2 px-4'>Publish</button>
    </div>
  )
}

export default WritePage;