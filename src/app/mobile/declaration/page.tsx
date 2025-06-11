import Image from "next/image";
import { cva } from "class-variance-authority";
import { Metadata } from "next";

import { titleStyle, normalTextStyle } from "@/shared/styles";
import { cn } from "@/lib/utils";

const chapterTitleStyle = cva(
  "font-inter text-[18px] font-bold text-[#353535] self-start"
);

const chapterContainerStyle = cva("mt-4 self-start");

const Separator = ({ className }: { className?: string }) => (
  <div className={cn(className, "w-full h-[1px] bg-[#323232]")} />
);

export const metadata: Metadata = {
  title: "FAIR3 Fairness Declaration: Join the Movement",
  description:
    "Discover the FAIR3 Fairness Declaration and join the movement for tech, economic, and social equity. Sign now to become a fairness supporter! ",
  keywords: [
    "FAIR³",
    "FAIR3",
    "fairness",
    "declaration",
    "tech equity",
    "social equity",
    " Web3 movement",
    "community fairness",
    "sign declaration",
  ],
};

export default function MobileDeclarationPage() {
  return (
    <div className="flex flex-col items-center relative overflow-x-hidden">
      <div className="w-full px-4">
        <div className="flex flex-col mt-8">
          <div className={cn(titleStyle({ font: "kodchasan" }), "text-[30px] text-center")}>
            <h1>Redefining</h1>
            <h1>Fairness</h1>
            <h1>from Community</h1>
            <h1>to the World</h1>
          </div>
          <Image
            className="mt-6 self-center"
            src="/images/declaration/cover.png"
            width={320}
            height={154}
            alt="fair3 declaration"
          />
          <div className="mt-6">
            <p className={cn("text-center", normalTextStyle(), "text-[14px]")}>
              Redefining Fairness: From Community to the World.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              We, the CTO members of FAIR3, solemnly commit to building a future
              founded on technological equality, economic empowerment, and
              social inclusion, with fairness as both our belief and our guiding
              principle. Fairness is not merely an ideal; it is the fundamental
              right of every individual to participate, create, and share. Born
              from a deep reflection on injustice and nurtured by the collective
              efforts of the CTO, FAIR3 stands as a beacon for change. With this
              declaration, we pledge to one another and to the world, working
              tirelessly to make fairness a reality for all.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center mt-12 px-4 py-8 border-solid border-[var(--content-border-color)] border-[1px] rounded-[10px] bg-[var(--content-bg-color)]">
          <h1 className={cn("text-[20px] font-extrabold font-inter color-[#353535] text-center")}>
            FAIR3 Fairness Declaration
          </h1>
          <Separator className="mt-6" />
          <Separator className="mt-3" />
          
          <h1 className={cn(chapterTitleStyle(), "mt-8")}>
            Chapter I: Our Beliefs
          </h1>
          <div className={chapterContainerStyle()}>
            <p className={cn(normalTextStyle(), "text-[14px]")}>· Technological Equality</p>
            <p className={cn(normalTextStyle(), "text-[14px] mt-2 leading-relaxed")}>
              Technology should not be a privilege reserved for the few, but a
              shared resource for all of humanity. We are committed to making
              technology universally accessible, allowing everyone to equally
              participate, contribute, and benefit from its advancements.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px]")}>
              · Economic Opportunities
            </p>
            <p className={cn(normalTextStyle(), "text-[14px] mt-2 leading-relaxed")}>
              The economy should not be controlled by a few elites, but should
              serve as a platform for everyone to realize their dreams. We
              pledge to create opportunities for ordinary individuals, ensuring
              that wealth is more fairly distributed.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px]")}>· Social Inclusion</p>
            <p className={cn(normalTextStyle(), "text-[14px] mt-2 leading-relaxed")}>
              Society should not marginalize the disadvantaged but should ensure
              that everyone has the right to be heard. We dedicate ourselves to
              supporting inclusive education and cultural diversity, ensuring
              that all voices are recognized and valued.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px]")}>
              · Governance and Autonomy
            </p>
            <p className={cn(normalTextStyle(), "text-[14px] mt-2 leading-relaxed")}>
              Power should not be concentrated in the hands of a few, but shared
              by the community. We are committed to entrusting all decisions
              regarding FAIR3 to the DAO Foundation, ensuring fair and
              transparent governance where every voice is heard and respected.
            </p>
          </div>
          
          <Separator className="mt-8" />
          <h1 className={cn(chapterTitleStyle(), "mt-4")}>
            Chapter II: Our Commitment
          </h1>
          <div className={chapterContainerStyle()}>
            <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
              From developers to community CTOs, from Solana to BNB Chain, FAIR3
              has consistently remained true to its mission:
              <br />
              redefining fairness through technology and changing the world
              through action. We promise to uphold the following principles:
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px]")}>
              · Adhere to faith, only for fairness
            </p>
            <p className={cn(normalTextStyle(), "text-[14px] mt-2 leading-relaxed")}>
              FAIR3 will integrate fairness into every aspect of technology
              development and community action. All technological achievements
              and community actions will be disclosed to the public in the
              spirit of transparency.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px]")}>
              · Economic empowerment, resource sharing
              <br />
              FAIR3 will support micro-economic initiatives such as ordinary
              individuals, open-source technology, and others through the
              foundation, empowering individuals with tokens and making economic
              opportunities more accessible to all.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px]")}>
              · Social support, inclusive education
              <br />
              FAIR3 will contribute educational resources, support groups
              advocating for educational inclusion, and ensure that knowledge
              becomes a fundamental tool for fairness, nurturing cultural
              diversity within the community.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px]")}>
              · Community governance, transparent and traceable
              <br />
              Every token and expenditure of FAIR3 is traceable on-chain. All
              decisions are made through the voting of the DAO Foundation. The
              community CTO is accountable to all, responsible for ensuring the
              implementation of the concept of fairness.
            </p>
          </div>
          
          <Separator className="mt-6" />
          <h1 className={cn(chapterTitleStyle(), "mt-4")}>
            Chapter III: Our Actions
          </h1>
          <div className={chapterContainerStyle()}>
            <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
              From developers to community CTOs, from Solana to BNB Chain, FAIR3
              has always adhered to its original intention: to redefine fairness
              with technology and change the world with action! We promise:
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px]")}>
              · Adhere to faith, only for fairness
              <br />
              Every technological development and community initiative under
              FAIR3 will reflect the values of fairness. The results of these
              efforts will be disclosed and shared with the community.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px]")}>
              · Social support, inclusive education
              <br />
              FAIR3 will donate educational resources, support
              education-inclusive groups, make knowledge the bridge of fairness,
              and let cultural diversity bloom in the community.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px]")}>
              · Community governance, transparent and traceable
              <br />
              All of FAIR3's tokens and expenditures will be traceable on-chain.
              All decisions will be made through DAO Foundation voting, with the
              community CTOs held accountable to ensure the implementation of
              fairness principles.
            </p>
          </div>
          
          <Separator className="mt-6" />
          <h1 className={cn(chapterTitleStyle(), "mt-4")}>
            Chapter IV: Our Supervision
          </h1>
          <div className={chapterContainerStyle()}>
            <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
              Fairness requires transparency, and transparency demands active
              supervision. We pledge to:
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              · On-Chain Transparency: All financial transactions and technical
              developments will be recorded on-chain, allowing anyone to verify
              them.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              · Community-Driven Governance: The direction of FAIR3 will be
              shaped by the DAO, with tokens and reputation systems ensuring the
              voices of smaller users are heard and respected.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              · Regular Disclosure: The community CTO will regularly disclose
              the foundation's activities to the community, accept inquiries,
              and ensure the fulfillment of our promises.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              We invite you to join the supervision and use proposals and
              actions to protect the fairness of FAIR3.
            </p>
          </div>
          
          <Separator className="mt-6" />
          <h1 className={cn(chapterTitleStyle(), "mt-4")}>
            Chapter V: Our call
          </h1>
          <div className={chapterContainerStyle()}>
            <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
              FAIR3's concept of fairness belongs to you and every member of our
              community. The departure of developers marks the rebirth of FAIR3,
              and the CTO is the foundation of fairness. We call upon you to:
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              · Join the Fair Declaration:  Become a part of the FAIR3
              community, initiate the Fair Declaration, and be a defender of
              fairness.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              · Participate in creation: Use memes to create a fair culture, use
              proposals to define the future, and use actions to change the
              world.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              · Joint protection: Hold FAIR3 accountable at every step. Keep the
              spirit of fairness alive and evolving.
            </p>
          </div>
          
          <Separator className="mt-6" />
          <h1 className={cn(titleStyle({ font: "kodchasan" }), "mt-4 text-[18px] self-start")}>
            Conclusion
          </h1>
          <div className={chapterContainerStyle()}>
            <p className={cn(normalTextStyle(), "text-[14px] leading-relaxed")}>
              FAIR3 is the community's FAIR3, and it is your FAIR3. We swear
              this declaration to ignite hope through technology, protect
              justice through governance, and redefine fairness through action.
            </p>
            <p className={cn(normalTextStyle(), "mt-4 text-[14px] leading-relaxed")}>
              Let's begin, together, now—toward a fairer world.
            </p>
          </div>
          
          <p className="mt-12 self-end font-[Inter] font-normal text-[16px] color-[var(--selected-text-color)]">
            Manifesto Declaration on April 15, 2025
          </p>
          <Image
            src="/images/declaration/cto-sign.svg"
            width={240}
            height={24}
            className="mt-4 self-end"
            alt="cto sign"
          />
          <Separator className="mt-4" />
          <Separator className="mt-3" />
        </div>
      </div>
    </div>
  );
}