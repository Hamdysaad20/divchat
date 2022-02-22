import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const setting = [
    {
      href: "/settings",
      title: "ico/settings.png",
    },
    {
      href: "/user",
      title: "ico/user.png",
    },
  ];
  const menuItems = [
    {
      href: "/",
      title: "ico/main.png",
    },
    {
      href: "/chat",
      title: "ico/chat.png",
    },
    {
      href: "/cash",
      title: "ico/cash.png",
    },
  ];
  return (
    <div className='h-screen bglol flex flex-col'>
      <header className='z-50 border-slate-300/10  opacity-2 bg-gray-900/60 backdrop-blur-md sticky top-0 h-20 flex justify-center items-center font-semibold uppercase'>
        <div className='hover:bg-gray-800 duration-300 px-4 rounded-xl py-2'>
          <Image
            src='/ico/divlogo.png'
            alt='navigation'
            height='32'
            width='118'
          />
        </div>
      </header>
      <div className='md:flex flex-col hidden  md:flex-row flex-1'>
        <aside className='  overflow-hidden opacity-2 bg-gray-900/30 fixed backdrop-blur-md w-full h-screen md:w-20'>
          <div className=' '>
            <nav className='absolute top-[30%]  ml-3'>
              <ul className='text-center justify-center  inline-block'>
                {menuItems.map(({ href, title }) => (
                  <li className='p-1  mt-5 ' key={title}>
                    <Link href={href}>
                      <a
                        className={`${
                          router.asPath === href &&
                          "bg-red-500/50 text-white duration-300"
                        }flex p-2 m-auto w-[80%]  bg-gray-800 rounded hover:bg-red-700/20 cursor-pointer`}>
                        <Image
                          src={`/${title}`}
                          alt='navigation'
                          height='35'
                          width='35'
                        />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='absolute bottom-[10%] '>
              {setting.map(({ href, title }) => (
                <div className=' m-2 ' key={title}>
                  <Link href={href}>
                    <div className='p-2'>
                      <a
                        className={`${
                          router.asPath === href &&
                          "bg-red-500/50 text-white duration-300"
                        }flex p-2 m-auto w-[80%]  bg-gray-800 rounded-full hover:bg-red-700/20 cursor-pointer`}>
                        <Image
                          src={`/${title}`}
                          alt='navigation'
                          height='40'
                          width='40'
                        />
                      </a>
                    </div>
                  </Link>
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
