import Image from "next/image";
import { cva } from "class-variance-authority";
import { Metadata } from "next";

const titleStyles = cva(
  "font-[Kodchasan] font-bold text-[24px] text-center mt-8"
);

const subTitleStyles = cva("font-normal text-[16px] mt-4 text-center text-gray-600");

const cardStyles = cva(
  "bg-white rounded-[20px] p-6 mx-4 my-4 shadow-sm border border-gray-100"
);

export const metadata: Metadata = {
  title: "About FAIR3: Our Journey to Fairness",
  description:
    "Learn about FAIR3's origins, community takeover, and governance. Join our journey to build a fairer world in tech, economy, and society.",
  keywords: [
    "FAIR³",
    "FAIR3",
    "about FAIR3",
    "community takeover",
    "tech fairness",
    "DAO governance",
    "fairness journey",
  ],
};

export default function MobileAboutPage() {
  return (
    <section className="flex flex-col text-[#353535] overflow-x-hidden">
      <h1 className={titleStyles()}>About FAIR3</h1>
      <h2 className={subTitleStyles()}>The Birth of FAIR3</h2>
      
      {/* 第一段文字内容 */}
      <div className="px-4 mt-8">
        <div className="flex flex-col font-normal text-[14px] text-[#353535] leading-relaxed">
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
      </div>
      
      {/* QVOD和Napster Logo卡片 */}
      <div className={cardStyles()}>
        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/images/about/qvod.png"
              width={280}
              height={280}
              alt="QVOD"
              className="mb-2"
            />
          </div>
        </div>
      </div>
      
      {/* CTO接管相关文字 */}
      <div className="px-4 mt-4">
        <p className="font-normal text-[14px] text-[#353535] leading-relaxed">
          In February 2025, FAIR3 was initially launched by developers on the
          Solana blockchain. But its real power comes from the (Community Take
          Over) CTO after developers exit the project. The community CTO
          stepped forward to redefine the project direction. FAIR3 was reborn
          in the hands of the community and became a true portrayal of the
          spirit of decentralization.
        </p>
      </div>
      
      {/* CTO场景插图卡片 */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 16px', margin: '20px auto' }}>
        <Image
          className="w-full rounded-[12px]"
          src="/images/about/about-cto.png"
          width={350}
          height={200}
          alt="about fair3 borns"
        />
      </div>
      
      {/* BNB Chain相关文字 */}
      <div className="px-4 mt-4">
        <p className="font-normal text-[14px] text-[#353535] leading-relaxed">
          In March 2025, guided by a community-wide vote, FAIR3—now fully
          governed by its community—took a decisive step forward: bridging
          from Solana to BNB Chain. Transitioning from Solana's
          high-performance infrastructure to the BNB Chain's lower fees and
          greater liquidity, FAIR3 is expanding its reach, carrying the
          mission of fairness to a broader, more accessible world.
        </p>
      </div>
      
      {/* Binance Smart Chain卡片 */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 16px', margin: '20px auto' }}>
        <Image
          className="w-full rounded-[12px]"
          src="/images/about/about-binance.png"
          width={350}
          height={200}
          alt="about fair3 binance"
        />
      </div>
      
      <h1 className={titleStyles()}>How FAIR3 Works</h1>
      
      {/* FAIR3工作原理卡片 */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 16px', margin: '20px auto' }}>
        <Image
          className="w-full rounded-[12px] mb-4"
          src="/images/about/about-fair3works.png"
          width={350}
          height={200}
          alt="about fair3 works"
        />
        <p className="font-normal text-[14px] text-[#353535] leading-relaxed">
          FAIR3 is community-driven and governed through a DAO (Decentralized
          Autonomous Organization). In the future, users will be able to
          participate in proposals and voting using FAIR Points (coming soon),
          collectively deciding the project's future direction. From
          foundation funding to ecosystem expansion, every decision is made by
          the community to ensure fairness and transparency.
        </p>
      </div>
    </section>
  );
}