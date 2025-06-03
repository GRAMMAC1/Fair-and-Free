import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { BackgroundBlur } from "@/shared/background-blur";
import { titleStyle } from "@/shared/styles";
import { ProjectCard } from "../project-card";

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center relative overflow-x-hidden">
      <BackgroundBlur
        top={-525}
        right={-115}
        style={{ top: "-525px", right: "-115px" }}
      />
      <div className={"2xl:w-[1440px] w-full"}>
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-2xl mt-16")}>
          Projects
        </h1>
        <div className="flex gap-6 flex-wrap mt-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
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
