import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Atoms/Transition";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition/>
      <Component {...pageProps} />
      </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
