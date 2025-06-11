import Image from "next/image";
import Link from "next/link";

import { titleStyle, normalTextStyle } from "@/shared/styles";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Separator = ({ className = "" }: { className?: string }) => (
  <div
    className={cn(
      "w-full h-2.5 bg-[url(/images/hackathon/line.svg)] bg-no-repeat bg-cover",
      className
    )}
  />
);

export default function MobileHackathonPage() {
  return (
    <div className="flex flex-col items-center px-4">
      {/* Hero Section */}
      <div className="flex flex-col mt-8 text-center w-full">
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "font-semibold text-[30px] leading-tight")}>
          Tech Fairness
        </h1>
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "font-semibold text-[30px] leading-tight")}>
          Hackathon
        </h1>
        <h2 className={cn(normalTextStyle({ font: "km" }), "mt-4 text-[14px] font-medium leading-relaxed")}>
          FAIR3 Hackathon: Building tech fairness through transparent
          algorithms, data ownership and sustainable income.
        </h2>
        <Button className="w-[200px] mt-8 rounded-full bg-[#9971FF] mx-auto py-3">
          <Link
            href="https://www.hackquest.io/hackathons/Tech-Fairness-Hackathon"
            target="_blank"
            className={cn(titleStyle({ font: "kodchasan" }), "text-white text-[16px]")}
          >
            JOIN NOW
          </Link>
        </Button>
      </div>

      {/* Cover Image */}
      <div className="flex mt-8 justify-center w-full">
        <Image
          src="/images/hackathon/cover.png"
          alt="Hackathon cover"
          width={350}
          height={175}
          className="object-cover rounded-lg"
        />
      </div>

      {/* FAQ Section */}
      <div className="flex justify-center w-full mt-8">
        <div
          style={{
            backgroundImage: "linear-gradient(#E8E3FF, #E8E3FF)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full bg-no-repeat rounded-[20px]"
        >
          <div className="p-6 rounded-[20px]">
            <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px] text-center")}>
              FAIR3 Hackathon – Frequently Asked Questions (FAQ)
            </h1>
            <Separator className="mt-8" />
            
            <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-6 font-semibold text-[16px]")}>
              1.What is the FAIR3 Hackathon?
            </h1>
            <p className={cn(normalTextStyle(), "text-[#64636A] mt-3 text-[14px] leading-relaxed")}>
              The FAIR3 Hackathon is a global call to developers, designers,
              creators, and rebels to build tools, systems, and narratives that
              champion fairness in technology — across AI, Web3, data,
              governance, and more. It's part movement, part competition, and
              part launchpad for long-term collaboration within the FAIR3
              ecosystem.
            </p>
            
            <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-6 font-semibold text-[16px]")}>
              2.What kinds of projects can I submit?
            </h1>
            <p className={cn(normalTextStyle(), "text-[#64636A] mt-3 text-[14px] leading-relaxed")}>
              Anything that aligns with the idea of "tech fairness." Some
              examples include:
            </p>
            <ul className="flex flex-col gap-2 mt-4 ml-4 list-disc text-[14px]">
              <li>Tools for algorithm transparency or explainability</li>
              <li>Solutions for data sovereignty and self-ownership</li>
              <li>Creator income models in an AI-automated world</li>
              <li>Open infrastructure beyond traditional platforms</li>
              <li>Memetic engines, decentralized identity, etc.</li>
            </ul>
            <p className={cn(normalTextStyle(), "text-[#64636A] mt-3 text-[14px] leading-relaxed")}>
              There are no fixed formats: protocols, dashboards, APIs, UX tools,
              DAOs, memes — all welcome.
            </p>
            
            <h1 className={cn(titleStyle({ font: "kodchasan" }), "font-semibold mt-6 text-[16px]")}>
              3.Who can participate?
            </h1>
            <p className={cn(normalTextStyle(), "text-[#64636A] mt-3 text-[14px] leading-relaxed")}>
              You can join as:
            </p>
            <ul className="flex flex-col gap-2 mt-4 ml-4 list-disc text-[14px]">
              <li>A solo builder</li>
              <li>A team (up to 5 members recommended)</li>
              <li>A collective or DAO subgroup</li>
            </ul>
            <p className={cn(normalTextStyle(), "text-[#64636A] mt-3 text-[14px] leading-relaxed")}>
              We welcome developers, designers, researchers, meme makers,
              storytellers, community managers, economists, cryptographers... or
              anyone deeply curious about a more fair digital future.
            </p>
            
            <h1 className={cn(titleStyle({ font: "kodchasan" }), "font-semibold mt-6 text-[16px]")}>
              4.Do I have to be technical to participate?
            </h1>
            <p className={cn(normalTextStyle(), "text-[#64636A] mt-3 text-[14px] leading-relaxed")}>
              Not necessarily. While coding helps, FAIR3 encourages
              multidisciplinary collaboration. Many winning ideas may benefit
              from design, game theory, research, governance modeling, or
              storytelling. If you have a powerful concept, find collaborators
              in our Telegram.
            </p>
            
            <h1 className={cn(titleStyle({ font: "kodchasan" }), "font-semibold mt-6 text-[16px]")}>
              5.What do I need to submit?
            </h1>
            <ul className="flex flex-col gap-2 mt-4 ml-4 list-disc text-[14px]">
              <li>Project information form</li>
              <li>One-pager or Notion explaining the idea</li>
              <li>Code repo (GitHub preferred)</li>
              <li>Functional MVP + Architecture Diagram</li>
              <li>Demo video (1–2 mins, optional but strongly encouraged)</li>
              <li>Documentation (README with install/run instructions)</li>
            </ul>
            <p className={cn(normalTextStyle(), "text-[#64636A] mt-3 text-[14px] leading-relaxed")}>
              See full submission requirements above.
            </p>
            
            <h1 className={cn(titleStyle({ font: "kodchasan" }), "font-semibold mt-6 text-[16px]")}>
              6. What are the prizes?
            </h1>
            <ul className="flex flex-col gap-2 mt-4 ml-4 list-disc text-[14px]">
              <li>Main Track: 9 winners × $2,000 in FAIR3 tokens = $18,000</li>
              <li>Community Prizes: 4 winners × $2,500 in FAIR3 tokens = $10,000</li>
              <li>UnicornX Special Award: 1 project × $2,000</li>
              <li>Community Voting Pool: ~$1,000 to be shared between top-voted team and voters</li>
            </ul>
            <p className={cn(normalTextStyle(), "text-[#64636A] mt-3 text-[14px] leading-relaxed")}>
              Some prizes can be combined.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}