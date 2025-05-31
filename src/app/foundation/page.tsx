import Image from "next/image";

import { BackgroundBlur } from "@/shared/background-blur";

export default function FoundationPage() {
  return (
    <div className="flex relative flex-col items-center ">
      <BackgroundBlur top={-525} right={-115} />
      <div
        className={
          "2xl:w-[1440px] text-[#353535] mt-18 font-normal text-[15px]"
        }
      >
        <h1 className={"font-[Kodchasan] font-bold text-[24px]"}>
          Fair3 x Fourmeme: Meme for Justice, Fair for All
        </h1>
        <p className={"mt-5"}>May 2, 2025</p>
        <Image
          className={"mt-12 rounded-[10px]"}
          width={1240}
          height={580}
          src={"/images/foundation/banner.png"}
          alt={"foundation banner"}
        />
        <p className={"mt-9"}>
          We invite @four_meme_ to join as strategic partners to champion
          fairness, empower open-source creators, and co-build a just ecosystem
          on @BNBCHAIN.
        </p>
        <p className="mt-3">
          At Fair3, we believe that technology should be a tool for innovation,
          not a means for monopolies. That's why we've adopted a multi-signature
          wallet (Gnosis Safe) for our fund management, ensuring transparency
          and decentralization. We're now inviting leading Web3 teams, like
          Fourmeme, to join our governance as multi-signers. This means you'll
          have a direct say in how our funds are allocated and how we shape the
          future of our ecosystem.
        </p>
        <p className="mt-3">
          As part of this partnership, Fourmeme will be able to:
          <br />
          Recommend projects you've invested in or incubated to participate in
          our fair fund review process. Engage in technical governance,
          including evaluating funding proposals and participating in AMA
          sessions. Contribute to the overall direction of Fair3 through our
          Snapshot DAO and multi-sig wallet.
        </p>
        <p className="mt-3">
          We commit to:
          <br />
          Full transparency in all project applications and funding reviews.
          <br />
          Equal treatment for all proposals, whether from Fourmeme or other
          community members.
          <br />
          Decentralized governance, with decisions requiring approval from both
          our DAO and multi-sig wallet.
        </p>
        <p className="mt-3">
          This is more than just a partnership; it's a chance to co-create a
          fair and just Web3 ecosystem. Together, we can support the next
          generation of builders who are driven by faith, code, and creativity.
        </p>
        <p className="mt-3">
          If you're ready to join us, please reply to this post. We'll arrange
          the necessary contract setups and permissions to bring you onboard.
        </p>
        <p className="mt-3">Let’s build a fair Web3 future on BNBChain.</p>
      </div>
    </div>
  );
}
