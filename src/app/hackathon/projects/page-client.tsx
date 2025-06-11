"use client";

import useSWR from "swr";

import { cn } from "@/lib/utils";
import { titleStyle } from "@/shared/styles";
import { ProjectsCard } from "./project-card";
import { fetcher } from "@/shared/fetcher";
import type { ProjectResponse } from "@/shared/types";

export function ProjectsClient() {
  const { data: res, error } = useSWR<ProjectResponse>(
    "/projects/getAllProjects",
    fetcher
  );

  const projectList = res?.data || [];
  if (error) {
    console.error("Failed to fetch projects:", error);
    return <div className="mt-20 mx-24">fetch projects error</div>;
  }

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
