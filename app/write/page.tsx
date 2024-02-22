'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage, faFileVideo, faUpload } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function WritePage() {

    const { status } = useSession();
    
    const router = useRouter();
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    if(status === "loading") {
        return <div>Loading...</div>
    }
    if(status === "authenticated") {
        router.push("/");
    }

    

  return (
    <div className='pt-10'>
        <input type="text" placeholder="Title" className='bg-transparent placeholder:text-gray text-4xl outline-none mb-5'/>
        <div>
            <div className='flex items-center gap-5'>
                <button className='text-3xl' onClick={() => setOpen(prevOpen => !prevOpen)}>
                    <FontAwesomeIcon
                        icon={faSquarePlus}
                        color="#EDF1F6"
                    />
                </button>
                {
                    open && <div className='text-2xl flex gap-3'>
                        <button>
                            <FontAwesomeIcon
                                icon={faFileImage}
                                color="#EDF1F6"
                                width="20px"   
                            />
                        </button>
                        <button>
                            <FontAwesomeIcon
                                icon={faUpload}
                                color="#EDF1F6"
                                width="20px"   
                            />
                        </button>
                        <button>
                            <FontAwesomeIcon
                                icon={faFileVideo}
                                color="#EDF1F6"
                                width="20px"   
                            />
                        </button>                       
                    </div>
                }
            </div>        
            <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...'/>
        </div>
        <button className='mt-10 bg-bg text-white outline-none border border-text py-2 px-4'>Publish</button>
    </div>
  )
}

export default WritePage;