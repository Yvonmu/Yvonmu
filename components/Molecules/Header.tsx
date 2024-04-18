import Image from "next/image";
import Link from "next/link";
import Socials from "../Atoms/Socials";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { BsArrowUp } from "react-icons/bs";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt="Logo"
              priority={true}
            />
          </Link>
          <nav className="hidden xl:flex items-center xl:justify-center gap-x-4 fixed h-max top-0 mt-auto xl:right-[2%] z-50 right-0 w-full xl:h-16 xl:max-w-md xl:w-screen">
            <div className="flex w-full items-center justify-between xl:justify-center gap-x-10 py-4 md:px-40 xl:px-0 h-[80px] xl:h-max px-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
              {navData.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.path}
                    className={`${
                      link.path === pathname && "text-accent"
                    } relative flex flex-col items-center group hover:text-accent transition-all duration-300`}
                  >
                    <div>{link.icon}</div>
                    <div className="absolute top-10 hidden xl:group-hover:flex z-50">
                      <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                        <BsArrowUp className="text-[12px]" />
                        <div className="text-[12px] leading-none font-semibold capitalize">
                          {link.name}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
