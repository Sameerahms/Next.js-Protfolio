import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";

import ProfilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import ComputersCanvas from "@/components/canvas/ComputersCanvas";
import BallCanvas from "@/components/canvas/Ball";

export default function Home() {
  return (
    <>
      <Head>
        <title>HMS | Home Page</title>
      </Head>
      <TransitionEffect />
      <main className="flex items-center max-h-screen w-full">
        <Layout className="pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 xs:pt-0">
          <div className="flex items-center justify-between w-full">
          <BallCanvas icon={"html"} />
            <div className="w-1/2">
              <Image src={ProfilePic} alt="hms" className=" h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl  md:!text-5xl sm:!text-3xl xs:!text-1xl"
              />
              <p className="my-4 text-base font-medium dark:text-light md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center mt-2 self-start">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent
                hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className="w-6 ml-1 " />
                </Link>
                <Link
                  href="mailto:samee@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium underline text-dark capitalize dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
