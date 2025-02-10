import { LightbulbFill } from "react-bootstrap-icons";
import { HorizontalTimeline, timelineItems } from "./_components/partials/Timeline";
import Terminal from "./_components/partials/Terminal";
import VisitorsCount from "./_components/partials/VisitorCount";


export default function Home() {
  return (
    <div className=" lg:px-0 px-4">
      <VisitorsCount />
      <Terminal />

      <div className=" mt-5">
        <h1 className=" font-bold text-3xl">So what am I good at?</h1>
        <p className="text-white/70 text-xl">
          Glad you ask, here is a non-exhaustive list of the things I&apos;ve worked with!
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
