import Image from "next/image";
import { cva } from "class-variance-authority";

import { BackgroundBlur } from "@/shared/background-blur";

const titleStyles = cva(
  "font-[Kodchasan] font-bold text-[40px] text-center mt-[97px]"
);

const subTitleStyles = cva("font-normal text-[20px] mt-4 text-center");

export default function AboutPage() {
  return (
    <section className="flex relative flex-col text-[#353535] overflow-x-hidden">
      <BackgroundBlur top={-525} right={-115} />
      <h1 className={titleStyles()}>About FAIR3</h1>
      <h2 className={subTitleStyles()}>The Birth of FAIR3</h2>
      <div className="flex justify-center mt-[113px]">
        <div className="flex 2xl:w-[1440px]">
          <div className="flex flex-col font-normal text-[15px] text-[#353535]">
            <p>
              FAIR3 was born from a simple yet profound conviction: the world
              must not be divided by systemic injustice. From entrenched
              technology monopolies to unequal access to economic opportunity
              and the silencing of marginalized voices — we have witnessed too
              many pioneers pay the price for daring to challenge the status
              quo. Visionaries like Wang Xin of QVOD and Shawn Fanning of
              Napster stood for openness and innovation, only to be crushed by
              the very systems they sought to reform.
            </p>
            <p className="mt-4">
              FAIR3 began as a reflection — a collective reckoning with these
              injustices — and grew into a movement grounded in a shared belief:
              fairness must be redefined through technology, and change must
              begin with action. Built by and for the community, FAIR3 is a
              response to past wrongs and a declaration of a new, fairer future.
            </p>
          </div>
          <Image
            className="ml-[90px]"
            src={"/images/about/about-fair3.png"}
            width={392}
            height={221}
            alt="about fair3"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[94px]">
        <div className="flex items-center 2xl:w-[1440px]">
          <Image
            className="mr-[55px]"
            src={"/images/about/about-cto.png"}
            width={392}
            height={221}
            alt="about fair3 borns"
          />
          <p className="font-normal text-[15px] text-[#353535]">
            In February 2025, FAIR3 was initially launched by developers on the
            Solana blockchain. But its real power comes from the (Community Take
            Over) CTO after developers exit the project. The community CTO
            stepped forward to redefine the project direction. FAIR3 was reborn
            in the hands of the community and became a true portrayal of the
            spirit of decentralization.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-[67px]">
        <div className="flex items-center 2xl:w-[1440px]">
          <p className="font-normal text-[15px] text-[#353535]">
            In March 2025, guided by a community-wide vote, FAIR3—now fully
            governed by its community—took a decisive step forward: bridging
            from Solana to BNB Chain. Transitioning from Solana’s
            high-performance infrastructure to the BNB Chain’s lower fees and
            greater liquidity, FAIR3 is expanding its reach, carrying the
            mission of fairness to a broader, more accessible world.
          </p>
          <Image
            className="ml-[114px]"
            src={"/images/about/about-binance.png"}
            width={392}
            height={221}
            alt="about fair3 binance"
          />
        </div>
      </div>
      <h1 className={titleStyles()}>Initiating Team</h1>
      <h2 className={subTitleStyles()}>The Pioneers Behind the Project</h2>
      <div className="flex justify-center mt-[85px] ">
        <div className="flex 2xl:w-[1440px]">
          <div className="flex items-center">
            <Image
              src={"/images/about/about-avatar.png"}
              width={160}
              height={160}
              alt="about fair3 initiating team"
            />
            <div className="ml-6">
              <h3 className="font-bold text-2xl">Projects</h3>
              <p className="mt-3.5 font-normal text-[15px]">
                Community CTO Initiator and Advocate for Technological Fairness.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              className="ml-[150px]"
              src={"/images/about/about-memo.png"}
              width={160}
              height={160}
              alt="about Four.Meme"
            />
            <div className="ml-6">
              <h3 className="font-bold text-2xl">Four.Meme</h3>
              <p className="mt-3.5 font-normal text-[15px]">
                Advocate for Fairness, Giving Voice to Justice.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[65px]">
        <div className="flex 2xl:w-[1440px] flex-wrap gap-24">
          <div className="flex items-center">
            <div className="w-[110px] h-[110px] mr-6 rounded-full bg-[#D9D9D9]" />
            <div>
              <h3 className="font-bold text-2xl">Projects</h3>
              <p className="mt-3.5 font-normal text-[15px]">
                "Dreams in Solidity, speaks in fairness"
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[110px] h-[110px] mr-6 rounded-full bg-[#D9D9D9]" />
            <div>
              <h3 className="font-bold text-2xl">Projects</h3>
              <p className="mt-3.5 font-normal text-[15px]">
                "Dreams in Solidity, speaks in fairness"
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[110px] h-[110px] mr-6 rounded-full bg-[#D9D9D9]" />
            <div>
              <h3 className="font-bold text-2xl">Projects</h3>
              <p className="mt-3.5 font-normal text-[15px]">
                "Dreams in Solidity, speaks in fairness"
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[110px] h-[110px] mr-6 rounded-full bg-[#D9D9D9]" />
            <div>
              <h3 className="font-bold text-2xl">Projects</h3>
              <p className="mt-3.5 font-normal text-[15px]">
                "Dreams in Solidity, speaks in fairness"
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[110px] h-[110px] mr-6 rounded-full bg-[#D9D9D9]" />
            <div>
              <h3 className="font-bold text-2xl">Projects</h3>
              <p className="mt-3.5 font-normal text-[15px]">
                "Dreams in Solidity, speaks in fairness"
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className={titleStyles()}>How FAIR3 Works</h1>
      <div className={"flex justify-center mt-[70px]"}>
        <div className="flex 2xl:w-[1440px]">
          <Image
            className="mr-[68px]"
            src={"/images/about/about-fair3works.png"}
            width={392}
            height={221}
            alt="about fair3 works"
          />
          <p>
            FAIR3 is community-driven and governed through a DAO (Decentralized
            Autonomous Organization). In the future, users will be able to
            participate in proposals and voting using FAIR Points (coming soon),
            collectively deciding the project's future direction. From
            foundation funding to ecosystem expansion, every decision is made by
            the community to ensure fairness and transparency.
          </p>
        </div>
      </div>
    </section>
  );
}
