import Image from "next/image";

import { BackgroundBlur } from "@/shared/background-blur";
import { cn } from "@/lib/utils";
import { titleStyle, normalTextStyle } from "@/shared/styles";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  console.log("Event ID:", eventId);

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <BackgroundBlur
        top={-525}
        right={-115}
        style={{ top: "-525px", right: "-115px" }}
      />
      <div className={"2xl:w-[1440px] w-full"}>
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-2xl mt-16")}>
          Fair3 x Fourmeme: Meme for Justice, Fair for All
        </h1>
        <p className={cn(normalTextStyle(), "mt-5")}>May 2, 2025</p>
        <Image
          className="mt-12"
          src={"/images/foundation/banner.png"}
          width={1237}
          height={580}
          alt="event cover image"
        />
        <p className={cn(normalTextStyle(), "mt-9")}>
          We invite @four_meme_ to join as strategic partners to champion
          fairness, empower open-source creators, and co-build a just ecosystem
          on @BNBCHAIN.   At Fair3, we believe that technology should be a tool
          for innovation, not a means for monopolies. That's why we've adopted a
          multi-signature wallet (Gnosis Safe) for our fund management, ensuring
          transparency and decentralization. We're now inviting leading Web3
          teams, like Fourmeme, to join our governance as multi-signers. This
          means you'll have a direct say in how our funds are allocated and how
          we shape the future of our ecosystem.   As part of this partnership,
          Fourmeme will be able to: Recommend projects you've invested in or
          incubated to participate in our fair fund review process. Engage in
          technical governance, including evaluating funding proposals and
          participating in AMA sessions. Contribute to the overall direction of
          Fair3 through our Snapshot DAO and multi-sig wallet.   We commit to:
          Full transparency in all project applications and funding reviews.
          Equal treatment for all proposals, whether from Fourmeme or other
          community members. Decentralized governance, with decisions requiring
          approval from both our DAO and multi-sig wallet.   This is more than
          just a partnership; it's a chance to co-create a fair and just Web3
          ecosystem. Together, we can support the next generation of builders
          who are driven by faith, code, and creativity.   If you're ready to
          join us, please reply to this post. We'll arrange the necessary
          contract setups and permissions to bring you onboard.   Let’s build a
          fair Web3 future on BNBChain.
        </p>
      </div>
    </div>
  );
}
