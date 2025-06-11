import Image from "next/image";

import { ContactLink } from "@/shared/contact-link";
import { titleStyle } from "@/shared/styles";
import { cn } from "@/lib/utils";

export function ProjectsCard({
  cover,
  creator,
  oneLiner,
  xLink = "",
  githubLink = "",
  telegramLink = "",
  title,
}: {
  title: string;
  cover: string;
  creator: string;
  oneLiner: string;
  xLink?: string;
  githubLink?: string;
  telegramLink?: string;
}) {
  return (
    <div className="flex flex-col p-12 bg-[#F7F5FF] border-1 border-solid border-[#0000001A] rounded-[40px]">
      <Image
        className="shrink-0"
        src={cover}
        height={272}
        width={485}
        alt="project cover"
      />
      <h1
        className={cn(
          titleStyle({ font: "Inter" }),
          "text-[16px] font-extrabold"
        )}
      >
        {title}
      </h1>
      <p className="mt-8 font-[Inter] font-extrabold text-[16px] text-[var(--selected-text-color)]">
        created by {creator}
      </p>
      <p className="mt-4 font-[Inter] font-medium text-[12px] text-[var(--selected-text-color)]">
        {oneLiner}
      </p>
      <ContactLink
        className="mt-[75px]"
        Xlink={xLink}
        githubLink={githubLink}
        telegramLink={telegramLink}
      />
    </div>
  );
}

export default ProjectsCard;
