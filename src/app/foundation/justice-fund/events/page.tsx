import { ChevronDown } from "lucide-react";

import { BackgroundBlur } from "@/shared/background-blur";
import { titleStyle } from "@/shared/styles";
import { cn } from "@/lib/utils";
import { EventListItem } from "../event-list-item";

export default function EventPage() {
  return (
    <div className="flex flex-col items-center relative overflow-x-hidden">
      <BackgroundBlur
        top={-525}
        right={-115}
        style={{ top: "-525px", right: "-115px" }}
      />
      <div className={"2xl:w-[1440px] w-full"}>
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-2xl mt-16")}>
          Events
        </h1>
        <div className="flex flex-col gap-10 mt-10">
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
        </div>
        <div className="flex flex-col items-center justify-center mt-8 text-center">
          <span
            className={cn(
              titleStyle({ font: "kodchasan" }),
              "flex flex-col items-center cursor-pointer text-[20px]"
            )}
          >
            View More <ChevronDown className="mt-1" size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}
