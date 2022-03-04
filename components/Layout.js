import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Tooltip } from "@nextui-org/react";

export default function Layout({ children }) {
  const Router = useRouter();
  const setting = [
    {
      href: "/settings",
      title: "ico/settings.png",
      HoverTips:"Settings",

    },
    {
      href: "/user",
      title: "ico/user.png",
      HoverTips:"Profile",

    },
  ];
  const menuItems = [
    {
      href: "/",
      title: "ico/main.png",
      HoverTips:"Main"
    },
    {
      href: "/chat",
      title: "ico/chat.png",
      HoverTips:"Chat"
    },
    {
      href: "/cash",
      title: "ico/cash.png",
      HoverTips:"Payment Records"
    },
  ];
  return (
    <div className='  bglol flex flex-col'>
      <header className='  z-120   opacity-1 bg-gray-900 backdrop-blur-md sticky top-0 h-15 flex justify-center items-center font-semibold uppercase'>

        <div className=' cursor-pointer select-none duration-300 px-4 rounded-xl py-1'>
          <Image
            src='/ico/divlogo.png'
            alt='navigation'
            height='32'
            width='118'
          />
        </div>
      </header>
      <div style={{scrollPaddingBottom:"20px"}} className='md:flex flex-col hidden overflow-hidden  z-100 md:flex-row flex-1'>
        <aside  className=' overflow-y-auto overflow-hidden   opacity-2  z-100 bg-gray-900/30 fixed backdrop-blur-md w-full     
 h-full md:w-20'>
          <div className=' max-h-[100vh] '>
            <nav className='absolute top-[30%]  ml-3'>
              <ul className='text-center justify-center  inline-block'>
                {menuItems.map(({ href, title , HoverTips }) => (

                 <li className='p-1  mt-5 '  key={title}>
                   <Tooltip  placement="right"  content={HoverTips} contentColor="default" rounded color="primary" >

                    <Link href={href} passHref>
                      <a
                        className={`flex p-2 m-auto w-[80%]  bg-gray-800 rounded hover:bg-red-700/20 cursor-pointer ${
                          Router.asPath === href &&
                          "bg-red-500/50 text-white duration-300"
                        }`}>

                        <Image
                          src={`/${title}`}
                          alt='navigation'
                          height='35'
                          width='35'
                        />
                         
                      </a>
                    </Link>
                    </Tooltip>
                  </li>
                  
                ))}
              </ul>
            </nav>
            <div className='hidden-mob absolute bottom-[10%] '>
              {setting.map(({ href, title ,HoverTips}) => (

               <div  key={title} className=' m-2 '>
                    <Tooltip   placement="right"  content={HoverTips} contentColor="default" rounded color="primary" >

                  <Link href={href} passHref>
                    <div className='p-2'>
                      <a
                        className={`flex p-2 m-auto w-[80%] ${
                          Router.asPath === href &&
                          "bg-red-500/50 text-white duration-300"
                        } bg-gray-800 rounded-full hover:bg-red-700/20 cursor-pointer`}>
                        <Image
                          src={`/${title}`}
                          alt='navigation'
                          height='40'
                          width='40'
                        />
                      </a>
                    </div>
                  </Link>
                  </Tooltip>
                </div>
               
              ))}
            </div>
          </div>
        </aside>{" "}
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}
