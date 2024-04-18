import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import ProjectsBtn from "@/components/Atoms/ProjectsBtn";
import ParticlesContainer from "@/components/Atoms/ParticlesContainer";
import Avatar from "@/components/Atoms/Avatar";
import ServicesBtn from "@/components/Atoms/ServicesBtn";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col gap-4 justify-center h-full container mx-auto">
          <div>
          <motion.p variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit={"hidden"} className="font-serif pb-8 text-xl">Hey, I&#39;m</motion.p>

          <motion.div variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit={"hidden"} className="flex md:space-x-4 justify-center">
            <hr className="md:w-48 sm:w-6 bg-white md:h-1 sm:mt-3 md:mt-6" />

            <h1 className="typing cursor-default md:text-5xl font-serif font-bold">
              Yvon <span className="text-accent">MUTUYEYEZU</span>
            </h1>
            <hr className="md:w-48 sm:w-6 bg-white md:h-1 sm:mt-3 md:mt-6" />
          </motion.div>
          </div>
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h1"
          >
            Let&apos;s Tranforming Ideas {" "}
            <span className="text-accent">Into Digital Reality</span>
          </motion.h1>
          {/* <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="mx-w-sm mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            lorem ip One subscription. Endless web design. All yours for the
            price of a latte. Heres what the PRO membership offers: Exclusive
            Source Code Access: Delve into coding without clutter. Access the
            source code for each tutorial and build elegant website components
            effortlessly. Take the fast lane to mastery.
          </motion.p> */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <div className="absolute bottom-0"></div>
          <div className="flex justify-between w-full bottom-0">
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="hidden xl:flex"
            >
              <ServicesBtn />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}
        {/* particle  */}
        <ParticlesContainer />
        {/* avatar image
         */}
        <div className="flex justify-center">
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:-bottom-40 "
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
