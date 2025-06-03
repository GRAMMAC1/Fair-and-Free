import Image from "next/image";

export function ProjectCard() {
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
      className="w-[290px] h-[307px] p-6 bg-[var(--main-color)]/60 rounded-[10px] backdrop-blur-xs text-[var(--selected-text-color)]"
    >
      <Image
        src={"/images/about/about-cto.png"}
        width={238}
        height={134}
        alt="Project Image"
      />
      <h1 className={"mt-4 font-[Inter] font-extrabold text-[16px]"}>
        OpenDAO Toolkit
      </h1>
      <p className={"mt-4 font-[Inter] font-medium text-[12px]"}>
        No-code governance toolkit
      </p>
      <div className="mt-10 flex gap-5">
        <Image
          className="cursor-pointer"
          src={"/images/X.svg"}
          width={20}
          height={18}
          alt="X"
        />
        <Image
          className="cursor-pointer"
          src={"/images/telegram.svg"}
          width={22}
          height={20}
          alt="telegram"
        />
        <Image
          className="cursor-pointer"
          src={"/images/github.svg"}
          width={22}
          height={22}
          alt="github"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
