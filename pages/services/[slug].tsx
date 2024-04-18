import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Circles from "@/components/Atoms/Circles";
import Bulb from "@/components/Atoms/Bulb";

const ServicePage = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className=" h-full place-items-center gap-x-8">
          <div className="text-center flex flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="mb-4 mx-auto lg:mx-0 text-justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </motion.p>
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default ServicePage;
