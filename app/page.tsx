import { HeartFill, LightbulbFill } from "react-bootstrap-icons";
import { IconButton } from "./_components/IconButton";
import { Fira_Code } from "next/font/google";
import Link from "next/link";
import { HorizontalTimeline, timelineItems } from "./_components/partials/Timeline";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className=" lg:px-0 px-4">
      <div className="h-96 xl:w-full flex items-center justify-center lg:bg-black rounded-xl lg:border-2 lg:border-purple-500 flex-col">
        <h1 className={` ${firaCode.className} font-bold text-2xl lg:text-3xl mb-3 text-purple-500`}>{'>'} For the love of it<span className=" animate-pulse">_</span></h1>
        <p className=" text-white/70 text-center max-w-md">
          Hi, I&apos;m Teun Wolbert. I&apos;m a software engineer from the Netherlands, I specialize in web development and design
        </p>
        <div className="mt-5 lg:p-0 p-2">
          <Link href="/projects" className="max-w-md">
            <IconButton icon={<HeartFill />}>Sounds cool, show me what you&apos;ve made!</IconButton>
          </Link>
        </div>
      </div>

      <div className=" mt-5">
        <h1 className=" font-bold text-3xl">So what am I good at?</h1>
        <p className="text-white/70 text-xl">
          Glad you ask, here is a non-exhaustive list of the thinsg I&apos;ve worked with!
        </p>
        <div className="mt-2 flex items-center">
          <LightbulbFill className="text-purple-500" />
          <p className="text-white/70 ml-2">You can click the timeline points to get more info on each of them!</p>
        </div>
        <HorizontalTimeline items={timelineItems} />
      </div>
    </div>
  );
}
