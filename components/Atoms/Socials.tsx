import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMailbox,
  BsMailboxFlag,
  BsPhone,
  BsVoicemail,
} from "react-icons/bs";

const Socials = () => {
  const socialData = [
    { name: "GitHub", link: "/", icon: <BsGithub /> },
    { name: "Instagram", link: "/about", icon: <BsInstagram /> },
    { name: "Mail", link: "/services", icon: <AiOutlineMail /> },
    { name: "Phone", link: "/work", icon: <BsPhone /> },
    {
      name: "Linkedin",
      link: "/testimonials",
      icon: <BsLinkedin />,
    },
  ];
  return (
    <div className="flex flex-col absolute z-50 right-[2%] h-screen justify-center items-center gap-5 text-lg">
      {socialData.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.link}
            className={` relative flex items-center group hover:text-accent transition-all duration-300`}
          >
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0  absolute -right-2"></div>
              </div>
            </div>
            <div>{link.icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
