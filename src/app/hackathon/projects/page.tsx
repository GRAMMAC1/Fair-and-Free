import { titleStyle } from "@/shared/styles";
import { cn } from "@/lib/utils";
import { fetcher } from "@/shared/fetcher";
import { ProjectsCard } from "./project-card";
import { ProjectsClient } from "./page-client";

import type { ProjectResponse } from "@/shared/types";

export const runtime = "edge";

export default async function ProjectsPage() {
  const res: ProjectResponse = await fetcher("/projects/getAllProjects").catch(
    (err) => {
      console.error("Failed to fetch projects:", err);
    }
  );

  if (!res) {
    return <ProjectsClient />;
  }

  const { data: projectList = [] } = res;

  return (
    <div className="2xl:w-[1440px] 2xl:mx-auto mx-24">
      <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-20 text-2xl")}>
        Projects
      </h1>
      <div className={"w-full mt-8 flex flex-wrap gap-[50px]"}>
        {projectList.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.projectName}
            cover={project.cover}
            creator={project.creator}
            oneLiner={project.oneLiner}
            xLink={project.twitterLink}
            githubLink={project.githubLink}
            telegramLink={project.telegramLink}
          />
        ))}
      </div>
    </div>
  );
}
