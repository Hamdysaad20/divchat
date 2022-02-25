import Link from "next/link";

export default function Custom404() {
  return (
    <div className='   top-[50%] m-0 h-screen relative justify-center'>
<div className='text-center relative'>
<h1 className=' text-4xl mb-5 justify-center items-center object-center content-center  text-blue-50 font-bold'>  404 - Page Not Found</h1>
<Link href="/" passHref >
<button  className='shadow-sm bg-gray-700 font-mono px-5 py-2 active:ring-offset-4 ring-fuchsia-500 rounded-lg active:ring-4 hover:ring-2'>Go Home</button>
</Link>
</div>
     
    </div>
  );
}
    
