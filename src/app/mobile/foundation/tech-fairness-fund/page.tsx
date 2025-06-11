import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { cn } from "@/lib/utils";
import { titleStyle, normalTextStyle } from "@/shared/styles";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Projects } from "../../foundation/tech-fairness-fund/projects";

const imageList = [
  {
    src: "/images/fairness-fund/image1.png",
    alt: "Image 1",
    desc: "Milestone-based grants for open-source and Web3 developers",
  },
  {
    src: "/images/fairness-fund/image2.png",
    alt: "Image 2",
    desc: "Focus on innovation in AI and blockchain",
  },
  {
    src: "/images/fairness-fund/image3.png",
    alt: "Image 3",
    desc: "Encouraging fairness in technology development",
  },
  {
    src: "/images/fairness-fund/image4.png",
    alt: "Image 4",
    desc: "Supporting the creation of transparent, inclusive digital tools",
  },
] as const;

const missionImage = [
  {
    src: "/images/fairness-fund/building.png",
    alt: "building",
    title: "Encourage Innovation for Social Good",
    desc: "We aim to fund projects that bring positive social change through technology.",
  },
  {
    src: "/images/fairness-fund/empower.png",
    alt: "empower",
    title: "Empower the Next Generation of Developers",
    desc: "By supporting these projects, we hope to inspire developers to build technology that benefits all.",
  },
  {
    src: "/images/fairness-fund/mind.png",
    alt: "mind",
    title: "Foster a Fairer, More Inclusive Future",
    desc: "We are committed to building a future where everyone can participate and benefit from technological advancement.",
  },
] as const;

const iconList = [
  {
    src: "/images/fairness-fund/icon1.svg",
    alt: "icon1",
    desc: "Submit Your Idea",
  },
  {
    src: "/images/fairness-fund/icon2.svg",
    alt: "icon2",
    desc: "Milestones & Timeline",
  },
  {
    src: "/images/fairness-fund/icon3.svg",
    alt: "icon3",
    desc: "Review by Foundation Members",
  },
  {
    src: "/images/fairness-fund/icon4.svg",
    alt: "icon4",
    desc: "Community Voting",
  },
  {
    src: "/images/fairness-fund/icon5.svg",
    alt: "icon5",
    desc: "Funding & Support",
  },
] as const;

export const metadata: Metadata = {
  title: "Tech Fairness Fund: Empowering Tech Equity | FAIR3",
  description:
    "The Tech Fairness Fund by FAIR3 empowers developers with open-source and decentralized solutions. Apply for funding to break tech barriers!",
  keywords: [
    "tech fairness fund",
    "FAIR3",
    "tech equity",
    "open-source",
    "decentralized tech",
    "Web3 funding",
    "developer empowerment",
  ],
};

export const runtime = "edge";

export default async function MobileTechFairnessFundPage() {
  return (
    <div className="flex flex-col items-center relative overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-full min-h-[400px] px-4 py-16 bg-[url(/images/fairness-fund/banner.png)] bg-no-repeat bg-cover bg-center">
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[28px] text-center")}>
          Tech Fairness Fund
        </h1>
        <h2 className={cn(normalTextStyle(), "mt-4 text-[14px] text-center leading-relaxed max-w-[300px]")}>
          Building inclusive digital futures through open, community-powered
          technologies.
        </h2>
        <Button
          variant="main"
          className="mt-8 font-[Kodchasan] bg-[#8F4CFB] text-white px-6 py-3"
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd46wgcc-JtyupesVH192jmf8XRg28zsfJXUSQMsY1TOXJp6g/viewform"
            target="_blank"
          >
            Submit Your Project
          </Link>
        </Button>
      </div>

      <div className="w-full px-4 mt-8">
        {/* Funded Projects Section */}
        <div className="flex flex-col mt-8">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}>
                Funded Projects
              </h1>
              <p className={cn(normalTextStyle(), "mt-2 text-[14px] leading-relaxed")}>
                Committed to tech fairness, we support innovative initiatives that
                empower developers and make technology accessible to everyone.
              </p>
            </div>
            <Link
              href="/mobile/foundation/tech-fairness-fund/projects"
              className="flex gap-1 items-center cursor-pointer text-[14px] ml-4"
            >
              <span>View More</span>
              <ChevronRight size={12} />
            </Link>
          </div>
          <ScrollArea className="mt-6">
            <div className="flex gap-4">
              <Projects />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Tech Fairness Fund Description */}
        <div className="flex flex-col mt-16">
          <div className="mb-8">
            <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}>
              Tech Fairness Fund
            </h1>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              Technology for all. Innovation for good.
              <br />
              The Tech Fairness Fund is FAIR3's initiative to support
              developers, builders, and projects that advance open, inclusive,
              and equitable technology. We believe technology should not
              reinforce monopolies or marginalization—it should unlock access,
              amplify potential, and serve the public good.
              <br />
              Whether you're optimizing an open protocol, building tools to
              bridge digital divides, or creating infrastructure that empowers
              underserved communities, the Tech Fairness Fund welcomes your
              vision.
            </p>
          </div>
          <Image
            src="/images/fairness-fund.png"
            width={320}
            height={154}
            alt="Tech Fairness Fund"
            className="self-center"
          />
        </div>

        {/* Image List */}
        <div className="flex flex-col gap-8 mt-12">
          {imageList.map((image) => (
            <div key={image.alt} className="flex flex-col items-center">
              <Image src={image.src} width={240} height={139} alt={image.alt} />
              <p className={cn(normalTextStyle(), "mt-3 text-center text-[14px] leading-relaxed")}>
                {image.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Key Objectives */}
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-16 text-[20px]")}>
          Mission & Key Objectives
        </h1>
        <div className="flex flex-col mt-6">
          <div className="w-full">
            <Image
              src="/images/fairness-fund/mission.png"
              width={320}
              height={154}
              alt="mission"
              className="w-full max-w-[320px] mx-auto"
            />
            <p className={cn(normalTextStyle(), "mt-6 text-[14px] leading-relaxed")}>
              The Fair3 Tech Fairness Fund is dedicated to supporting developers
              and innovators working on open-source projects, AI, and Web3
              technologies that prioritize fairness. Through milestone-based
              grants, this fund empowers developers to push the boundaries of
              what's possible in the tech world, while ensuring that their
              innovations are grounded in principles of fairness, transparency,
              and inclusivity. The fund plays a critical role in advancing
              technological solutions that create a more equitable digital
              landscape for everyone.
            </p>
          </div>
          <div className="mt-12">
            {missionImage.map((item) => (
              <div key={item.alt} className="flex flex-col mt-8 first:mt-0">
                <div className="w-full">
                  <Image 
                    src={item.src} 
                    width={160} 
                    height={96} 
                    alt={item.alt}
                    className="mx-auto" 
                  />
                </div>
                <div className="mt-4">
                  <h2 className={cn(titleStyle({ font: "Inter" }), "text-[16px] text-center")}>
                    {item.title}
                  </h2>
                  <p className={cn(normalTextStyle(), "mt-3 text-[14px] leading-relaxed text-center")}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-16 text-[18px]")}>
          Be Part of the Change — Help Build a Fairer Future.
        </h1>
        <div className="flex flex-col gap-6 mt-8">
          {iconList.map((icon) => (
            <div key={icon.alt} className="flex items-center">
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[var(--main-color)] mr-4 shrink-0">
                <Image
                  quality={100}
                  src={icon.src}
                  width={24}
                  height={24}
                  alt={icon.alt}
                />
              </div>
              <p className={cn(normalTextStyle(), "text-[14px]")}>
                {icon.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Submission Process */}
        <h2 className={cn(titleStyle({ font: "Inter" }), "mt-12 text-[18px]")}>
          Submission Process:
        </h2>
        <div className="mt-4 space-y-4">
          <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
            1. Submit Your Idea: Present your product concept, highlighting its
            social impact and how it can contribute to tech fairness. Include a
            clear timeline and milestones, with code submissions for each phase.
          </p>
          <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
            2. Milestones & Timeline: Each project should outline their
            development timeline with specific milestones, ensuring transparency
            and measurable progress. Milestones should reflect significant
            technical achievements or deliverables.
          </p>
          <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
            3. Review by Foundation Members: Once submitted, the project will be
            reviewed by FAIR3's Foundation members, who will evaluate the
            feasibility, impact, and alignment with FAIR3's values of fairness and
            accessibility in technology.
          </p>
          <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
            4. Community Voting: The community of FAIR3 token holders will then
            vote on the projects. Based on the votes and CTO feedback, the best
            proposals will be selected.
          </p>
          <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
            5. Funding & Support: Winning projects will receive funding in the form
            of $FAIR3 tokens to continue their development and contribute to tech
            fairness. This financial support will enable the most impactful
            innovations to take root and grow.
          </p>
        </div>

        {/* Apply Section */}
        <div className="flex flex-col p-6 mt-12 border-solid border-[#000] border-[1px] rounded-[10px]">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/fairness-fund/apply.png"
              width={160}
              height={92}
              alt="apply"
            />
            <div className="mt-4">
              <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[18px]")}>
                Apply for Grants
              </h1>
              <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
                Have a project that advances technological equity, economic
                empowerment, or social inclusion? Apply for foundation funding.
              </p>
            </div>
            <Button
              variant="main"
              className="mt-6 font-[Kodchasan] text-white bg-[#8F4CFB] w-full"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd46wgcc-JtyupesVH192jmf8XRg28zsfJXUSQMsY1TOXJp6g/viewform"
                target="_blank"
              >
                Submit Your Project
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}