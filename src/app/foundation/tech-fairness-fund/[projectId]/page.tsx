import { cn } from "@/lib/utils";
import { BackgroundBlur } from "@/shared/background-blur";
import { titleStyle } from "@/shared/styles";
import { ContactLink } from "@/shared/contact-link";

const TitleIcon = () => {
  return (
    <div
      style={{
        background: "linear-gradient(87.75deg, #9448FC 9.29%, #19FB9B 98.11%)",
      }}
      className={"w-[18px] h-[18px] rounded-full mr-3"}
    />
  );
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  // @eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { projectId } = await params;

  return (
    <div className="flex flex-col items-center relative overflow-x-hidden">
      <BackgroundBlur
        top={-525}
        right={-115}
        style={{ top: "-525px", right: "-115px" }}
      />
      <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-2xl mt-24")}>
        OpenDAO Toolkit
      </h1>
      <ContactLink className={"mt-8"} />
      <div className="2xl:w-[1440px] w-full">
        <div className="w-full min-h-[500px] mt-20 px-12 pt-14 rounded-[10px] bg-[#F4FFDF]">
          <div className="flex items-center">
            <TitleIcon />
            <h1
              className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}
            >
              Project Overview
            </h1>
          </div>
          <div className="flex items-center mt-14">
            <TitleIcon />
            <h1
              className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}
            >
              Impact & Outcomes
            </h1>
          </div>
          <div className="flex items-center mt-14">
            <TitleIcon />
            <h1
              className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}
            >
              Technical Contribution
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
