import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { titleStyle, normalTextStyle } from "@/shared/styles";
import { Button } from "@/components/ui/button";
import { BackgroundBlur } from "@/shared/background-blur";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Events } from "./events";

const iconList = [
  {
    image: "/images/justice-fund/lighting.svg",
    alt: "lighting",
    width: 40,
    height: 40,
    content: "Rapid response to social injustice events",
  },
  {
    image: "/images/justice-fund/voice.svg",
    alt: "voice",
    width: 30,
    height: 38,
    content: "Amplifying individual and collective voices",
  },
  {
    image: "/images/justice-fund/web.svg",
    alt: "web",
    width: 36,
    height: 36,
    content: "Community-driven, with transparency and accountability",
  },
] as const;

const justiceFundList = [
  {
    image: "/images/justice-fund/building.png",
    alt: "building",
    title: "Community Action and Organizational Support",
    content:
      "Support decentralized protests, collective proposals, and collaboration among advocacy groups.",
  },
  {
    image: "/images/justice-fund/mini-justice.png",
    alt: "mini-justice",
    title: "Fairness Narrative Content Creation",
    content:
      "Provide funding for documentaries, podcasts, writing, or visual content focused on fairness issues.",
  },
  {
    image: "/images/justice-fund/public.png",
    alt: "public",
    title: "Public Advocacy and Education",
    content:
      "Host online and offline lectures, workshops, and publish materials on fairness-related topics.",
  },
] as const;

export const metadata: Metadata = {
  title: "Goddess of Justice Fund: Social Fairness | FAIR3",
  description:
    "The Goddess of Justice Fund by FAIR3 stands as a voice for the voiceless, championing education equity and cultural diversity. Raise your voice with us to drive impactful social fairness initiatives today!",
  keywords: [
    "goddess of justice fund",
    "FAIR3",
    "voice for justice",
    "education equity advocacy",
    "cultural diversity champion",
    "social fairness movement",
  ],
};

export const runtime = "edge";

export default async function JusticeFundPage() {
  return (
    <div className="flex flex-col items-center relative overflow-x-hidden">
      <BackgroundBlur
        top={500}
        right={-115}
        style={{ top: 500, right: -115 }}
      />
      <div className="flex flex-col items-center justify-center w-full min-h-[400px] px-4 py-16 bg-[url(/images/justice-fund/banner.png)] bg-no-repeat bg-cover bg-center">
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[28px] text-center")}>
          Justice Fund
        </h1>
        <h2 className={cn(normalTextStyle(), "mt-4 text-[14px] text-center leading-relaxed max-w-[300px]")}>
          Supporting collective resistance against injustice, and empowering
          voices for fairness
        </h2>
        <Button
          variant="main"
          className="mt-8 font-[Kodchasan] bg-[#8F4CFB] text-white px-6 py-3"
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfvCN-BRH0mQC84iMXoDjG4xYHIIlfuA_8zQMiTD32mb56X7g/viewform"
            target="_blank"
          >
            I want to speak up
          </Link>
        </Button>
      </div>
      <div className="w-full px-4 mt-8">
        <div className="flex justify-between items-center">
          <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}>
            Featured Events
          </h1>
          <Link
            href="/mobile/foundation/justice-fund/events"
            className="flex gap-1 items-center cursor-pointer text-[14px]"
          >
            <span>View More</span>
            <ChevronRight size={12} />
          </Link>
        </div>
        <ScrollArea>
          <div className="flex gap-4 mt-6">
            <Events />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        
        <div className="flex flex-col mt-16">
          <div className="mb-8">
            <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}>Justice Fund</h1>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              Upholding voices. Defending fairness.
              <br />
              The Justice Goddess Fund is FAIR3's dedicated arm for defending
              those who speak truth to power. Rooted in our belief that fairness
              begins with courage, this fund supports individuals, collectives,
              and projects that challenge injustice, advocate for transparency,
              and protect freedom of expression—especially in environments where
              doing so comes at great personal risk.
              <br />
              We stand with the whistleblowers, the truth-tellers, the forgotten
              voices. Through direct funding, public advocacy, and open
              community support, the Justice Goddess Fund empowers those who
              dare to ask: What if the world could be fairer?
            </p>
          </div>
          <Image
            src="/images/justice-fund.png"
            width={320}
            height={154}
            alt="Justice Fund"
            className="self-center"
          />
        </div>
        
        <div className="flex flex-col gap-8 mt-12">
          {iconList.map((icon) => (
            <div key={icon.alt} className="flex items-center">
              <div className="flex shrink-0 items-center justify-center w-[60px] h-[60px] mr-4 bg-[var(--main-color)] rounded-full">
                <Image
                  src={icon.image}
                  width={icon.width}
                  height={icon.height}
                  alt={icon.alt}
                />
              </div>
              <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
                {icon.content}
              </p>
            </div>
          ))}
        </div>
        
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-16 text-[20px]")}>
          Mission & Directions
        </h1>
        <div className="flex flex-col mt-6">
          <div className="w-full">
            <Image
              src="/images/justice-fund/justice.png"
              width={320}
              height={154}
              alt="justice"
              className="w-full max-w-[320px] mx-auto"
            />
            <p className={cn(normalTextStyle(), "mt-6 text-[14px] leading-relaxed")}>
              The Justice Fund is designed to address real-world injustices
              swiftly and effectively. It responds to social, economic, and
              political issues, empowering individuals and communities who face
              unfair treatment. By launching events, creating tools, and
              developing solutions, this fund aims to promote systemic change
              and evolution through narrative-driven justice initiatives. We
              focus on giving a voice to those who need it most, whether it's a
              personal injustice or a broader societal issue.
            </p>
          </div>
          <div className="mt-12">
            {justiceFundList.map((item) => (
              <div key={item.alt} className="flex flex-col mt-8 first:mt-0">
                <div className="w-full">
                  <Image
                    src={item.image}
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
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-16 text-[20px]")}>
          Speak up for fairness — it starts with you
        </h1>
        <div className="flex flex-col mt-8">
          <div className="mb-8">
            <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
              At FAIR3, we believe that every call for justice holds power.
              Change begins when voices rise — in the conversations we have, the
              actions we take, and by standing with those who are marginalized.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              We actively review and select instances of injustice to amplify,
              offering exposure and support.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              Through the Justice Fund, you can be selected as rewards with
              $FAIR3 for your efforts to raise awareness and drive social
              change.
            </p>
            <Button
              variant="main"
              className="mt-6 text-white bg-[#9971FF] font-[Kodchasan] w-full"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfvCN-BRH0mQC84iMXoDjG4xYHIIlfuA_8zQMiTD32mb56X7g/viewform"
                target="_blank"
              >
                I want to speak up
              </Link>
            </Button>
          </div>
          <Image
            src="/images/justice-fund/speakup.png"
            alt="speak up"
            width={320}
            height={154}
            className="self-center"
          />
        </div>
      </div>
    </div>
  );
}
