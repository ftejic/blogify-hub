"use client"
import { useRouter } from "next/navigation";

interface Props {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
  cat: string | undefined;
}

function Pagination(props : Props) {

  const router = useRouter();

  return (
    <div className="flex justify-between py-10">
      <button 
        className="w-28 py-1 bg-darkBlue disabled:bg-opacity-20 disabled:cursor-not-allowed" 
        disabled={!props.hasPrev}
        onClick={() => {
          props.cat ? 
          router.push(`?cat=${props.cat}&page=${props.page - 1}`) :
          router.push(`?page=${props.page - 1}`)       
        }} 
      >
          Previous
        </button>
      <button 
        className="w-28 py-1 bg-darkBlue disabled:bg-opacity-20 disabled:cursor-not-allowed" 
        disabled={!props.hasNext}
        onClick={() => {
          props.cat ? 
          router.push(`?cat=${props.cat}&page=${props.page + 1}`) :
          router.push(`?page=${props.page + 1}`)       
        }} 
      >
        Next
      </button>
    </div>
  )
}

export default Pagination;