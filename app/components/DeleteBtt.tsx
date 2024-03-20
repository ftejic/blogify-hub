"use client"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    id: string;
}

const handleDelete = async (id: string) => {
  console.log(id)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}:3000/api/delete-post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id})
  });

  if (!res.ok) {
    console.error(`Failed to delete post. Status: ${res.status}, Status Text: ${res.statusText}`);
    throw new Error("Failed!");
  }

}

function DeleteBtt(props: Props) {
  return (
    <FontAwesomeIcon 
        icon={faTrash}
        color="red"
        className="absolute top-2 right-3 cursor-pointer"
        onClick={() => handleDelete(props.id)}
    />
  )
}

export default DeleteBtt;