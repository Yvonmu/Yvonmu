import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { Button } from "../ui/button";
import { HandPlatter } from "lucide-react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
const ServicesBtn = () => {
  return (
    <div className="z-50">
      <button className="btn rounded-full border border-white/50 max-w-full px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
        <span className="group-hover:-translate-y-[120px] group-hover:opacity-0 transition-all duration-500 flex gap-3">
          <HandPlatter className="text-accent" />
          Services
        </span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </button>
    </div>
  );
};

export default ServicesBtn;
