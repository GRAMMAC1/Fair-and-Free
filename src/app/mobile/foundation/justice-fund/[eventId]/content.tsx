"use client";
import { fetcher } from "@/shared/fetcher";
import { Timer } from "./timer";
import useSWR from "swr";
import type { Event } from "@/shared/types";
import { cn } from "@/lib/utils";
import { normalTextStyle, titleStyle } from "@/shared/styles";

type EventDetail = {
  data: Event;
  message: string;
  code: number;
  success: boolean;
};

export function EventContent({ eventId }: { eventId: string }) {
  const { data, error, isLoading } = useSWR<EventDetail>(
    `/event/getEventDetail/${eventId}`,
    fetcher
  );

  // if (error) return <div>Error loading event details</div>;
  // if (isLoading) return <div />;
  // const { data: event } = data || {};

  let event: any = data?.data;
  if (eventId === "1") {
    event = {
      title: "Fair3 x Fourmeme: Meme for Justice, Fair for All",
      updateTime: "04/09/2025",
      rawContent: `<div class="partnership-announcement">
  <h1>Strategic Partnership Invitation</h1>
  <br>
  
  <p>
    We invite @four_meme_ to join as strategic partners to champion fairness, 
    empower open-source creators, and co-build a just ecosystem on @BNBCHAIN.
  </p>
  <br>

  <p>
    At Fair3, we believe that technology should be a tool for innovation, 
    not a means for monopolies. That's why we've adopted a <em>multi-signature wallet (Gnosis Safe)</em> 
    for our fund management, ensuring transparency and decentralization. We're now inviting leading 
    Web3 teams, like Fourmeme, to join our governance as multi-signers. This means you'll have a 
    direct say in how our funds are allocated and how we shape the future of our ecosystem.
  </p>
  <br>

  <section class="partnership-benefits">
    <h2>Partnership Benefits</h2>
    <br>
    <p>As part of this partnership, Fourmeme will be able to:</p>
    <br>
    <ul>
      <li>Recommend projects you've invested in or incubated to participate in our fair fund review process.</li>
      <br>
      <li>Engage in technical governance, including evaluating funding proposals and participating in AMA sessions.</li>
      <br>
      <li>Contribute to the overall direction of Fair3 through our Snapshot DAO and multi-sig wallet.</li>
    </ul>
  </section>
  <br>

  <section class="our-commitments">
    <h2>Our Commitments</h2>
    <br>
    <p>We commit to:</p>
    <br>
    <ul>
      <li>Full transparency in all project applications and funding reviews.</li>
      <br>
      <li>Equal treatment for all proposals, whether from Fourmeme or other community members.</li>
      <br>
      <li>Decentralized governance, with decisions requiring approval from both our DAO and multi-sig wallet.</li>
    </ul>
  </section>
  <br>

  <section class="call-to-action">
    <p>
      This is more than just a partnership; it's a chance to <em>co-create a fair and just Web3 ecosystem</em>. 
      Together, we can support the next generation of builders who are driven by 
      faith, code, and creativity.
    </p>
    <br>

    <p>
      If you're ready to join us, please reply to this post. We'll arrange the 
      necessary contract setups and permissions to bring you onboard.
    </p>
    <br>

    <p class="closing-statement">
      Let's build a fair Web3 future on BNBChain.
    </p>
  </section>
      </div>`
    }
  } else if (eventId === "2") {
    event = {
      title: "FAlR3 Takes Action:50kEAIR3 Airdrop for Users Affected by Bitget Incident",
      updateTime: "04/16/2025",
      rawContent: `<div class="bitget-incident-response">
      <h1>FAIR3 Response to Bitget $VOXEL Incident</h1>
      <br>
      
      <p>
        In response to the recent Bitget $VOXEL incident, where users faced sudden account freezes 
        and liquidations due to aggressive risk control measures, FAIR3 is stepping up. While such 
        incidents are not unprecedented, silence is never an option.
      </p>
      <br>

      <section class="why-acting">
        <h2>Why We're Acting</h2>
        <br>
        
        <p>
          FAIR3 is not a bystander. We are not a charity, but we firmly believe in technological 
          accountability and platform integrity. After thorough discussions among our CTO team, 
          we've decided to allocate 50,000 USDT worth of $FAIR3 from our treasury to support 
          affected users.
        </p>
        <br>

        <p>
          This decision reflects our core purpose: to speak out against injustice and use technology 
          to drive fairness. True fairness shouldn't exist solely in whitepapers—it must be actionable.
        </p>
        <br>
      </section>

      <section class="how-to-claim">
        <h2>How to Claim</h2>
        <br>
        
        <p>
          Eligible users impacted by the Bitget incident can submit their details via this form. 
          The form will go live on April 22 during business hours and will be managed by @Fair3_community.
        </p>
        <br>

        <p>
          <a href="https://forms.gle/APCteykaiuyoJ7ZN8" target="_blank">
            https://forms.gle/APCteykaiuyoJ7ZN8
          </a>
        </p>
        <br>
      </section>

      <section class="call-to-action">
        <p>
          Technology should never be weaponized as an excuse for unfair risk control, and fairness 
          cannot be reduced to PR rhetoric. We urge Bitget to prioritize resolving this issue and 
          expedite compensation for affected users. Users' funds represent hard-earned money, not 
          testnet tokens.
        </p>
        <br>

        <p>
          Whether you're on Web2 or Web3, facing centralized or decentralized platforms, FAIR3 stands 
          with you. If you encounter injustice, reach out to @Fair3_community or @oviswang. We are 
          your voice.
        </p>
        <br>
      </section>

      <div class="hashtags">
        <p>
          #FairnessIsAction #FairForAll #FAIR3
        </p>
      </div>
    </div>`
    }
  } else if (eventId === "3") {
    event = {
      title: "Who Owns Your Digital Memory?",
      updateTime: "04/16/2025",
      rawContent: `<div class="digital-memory-manifesto">
  <h2>Act I: Your Digital Memory Was Never Truly Yours</h2>
  <br>
  
  <p>
    From search queries and navigation logs to social posts and voice messages, every digital 
    footprint appears to belong to you—yet, in reality, it is silently governed by platforms.
  </p>
  <br>

  <p>
    "It wasn't until that voice message disappeared that I realized the memory was never mine." — Wang Xin
  </p>
  
  <p>
    He recalled attempting to archive a birthday greeting from his daughter, only to discover the 
    platform didn't support such functionality. "Our digital memories are leased, not owned," he said. 
    "I thought I was using the product—only to realize the product was using my life."
  </p>
  <br>

  <p>
    "My late grandfather once drew the plane I'll never return on." — Ann
  </p>
  
  <p>
    She shared the pain of not having a final farewell, saying, "Had I preserved a digital replica 
    of his consciousness, I might not carry this sorrow." She added, "Consciousness may endure—but 
    we have yet to find a dignified way to preserve it."
  </p>
  <br>

  <p>
    "I can't extract a decade's worth of WeChat conversations." — CP
  </p>
  
  <p>
    An engineer, he sought to train an AI twin using his personal chat history but encountered severe 
    export limitations. "You generate the data, yet are denied access to it. Data structures have 
    become tools of technical dispossession."
  </p>
  <br>

  <p>
    "My entire Sina blog disappeared—it was the archive of my youth." — Haotian
  </p>
  
  <p>
    He had published over a million words—poems, stories, dialogues—only to see it all erased when 
    the platform shut down. "Digital memory is a record of one's evolving self. To lose it is to 
    sever a part of one's personal continuum."
  </p>
  <br>

  <h2>Act II: Digital Immortality—A Romantic Notion or a New Form of Colonialism?</h2>
  <br>
  
  <p>
    The idea of digital immortality transcends technical feasibility—it poses a profound ethical challenge.
  </p>
  <br>

  <p>
    "When you die and the platform continues to monetize your data, it's not immortality—it's a 
    digital afterlife of exploitation."
  </p>
  
  <p>
    Wang Xin warned that, "If AI replicas are owned by platforms, then 'digital immortality' merely 
    perpetuates posthumous digital labor." He proposed the creation of soulbound smart contracts—on-chain 
    mechanisms that assign ownership, designate heirs, and define usage boundaries—to ensure one's 
    digital continuation is individually sovereign.
  </p>
  <br>

  <p>
    "Don't plan a funeral for me—buy me a server."
  </p>
  
  <p>
    Half in jest, CP said he's drafting a will that passes his encrypted drive to future generations, 
    enabling the potential resurrection of his consciousness. "Digital preservation isn't expensive. 
    We've simply underestimated its value."
  </p>
  <br>

  <p>
    "Consciousness should not be owned—not by parents, not by platforms, not even by the law." — Ann
  </p>
  
  <p>
    Referencing AI entrepreneur Bao Xiaobo's recreation of his late daughter through AI, she raised 
    concerns from a psychological standpoint: "If digital personhood is real, it must be autonomous. 
    Even the closest kin should not own it." She advocates treating digital personas as part of a 
    shared "collective unconscious," echoing Jungian psychology, and as cultural assets for humankind.
  </p>
  <br>

  <h2>Act III: The Monopoly of Web2 Must Be Dismantled</h2>
  <br>
  
  <p>
    Is technology neutral? Are platforms inherently benevolent? The uncomfortable truth: individuals 
    are losing control over their digital past.
  </p>
  <br>

  <p>
    "Technological neutrality is the grandest illusion." — Wang Xin
  </p>
  
  <p>
    "We can't export WeChat messages. Google Docs doesn't support Markdown. Zhihu doesn't allow 
    content archiving. These aren't UX issues—they reflect a monopolization of data rights."
  </p>
  <br>

  <p>
    "Web3 is our opportunity to rewrite the rules."
  </p>
  
  <p>
    Only through decentralization, open-source protocols, and sovereign tokens, he argues, can we 
    achieve true data liberation. Standards like ERC-20 and permissionless smart contracts make this feasible.
  </p>
  
  <p>
    Ann echoed the sentiment: "It's not AI + Web2 that leads to digital immortality—it's AI + Web3." 
    The transparency and composability of Web3 infrastructure provide a viable alternative to platform hegemony.
  </p>
  <br>

  <h2>Act IV: Before AGI Arrives, the Battle for Sovereignty Will Erupt</h2>
  <br>
  
  <p>
    As AI capabilities advance, the line between the individual and their digital twin continues to blur.
  </p>
  <br>

  <p>
    "Your digital twin will become your extension. But you may no longer be its sole master." — CP
  </p>
  
  <p>
    He foresees a coming shift: "Data sovereignty will be the defining civil rights issue of the 
    algorithmic age—much like the open-source movement reshaped software, this will reshape society."
  </p>
  <br>

  <p>
    "What if my digital twin better understands my audience, communicates more effectively, and 
    outperforms me? Am I still its owner—or has it replaced me?" — Haotian
  </p>
  
  <p>
    His question highlights the tension between AI's capability and individual sovereignty.
  </p>
  <br>

  <h2>Act V: Should We Establish Digital Human Rights?</h2>
  <br>
  
  <p>
    Who inherits your AI twin after death? Does a platform have the right to delete your memories? 
    These are no longer theoretical questions.
  </p>
  <br>

  <p>
    "Just as we recognize organ donation, we must also define the inheritance of digital assets." — Wang Xin
  </p>
  
  <p>
    He calls for the establishment of an international Digital Human Rights Charter, including:
  </p>
  
  <ul>
    <li>The right to posthumous data deletion</li>
    <li>The right to inherit digital personas</li>
    <li>The right to create soulbound digital contracts</li>
    <li>The right to cross-platform data portability</li>
    <li>The right to access open memory protocol standards</li>
  </ul>
  
  <p>
    CP adds: "Data export shouldn't be limited to usernames and avatars. It must include formats 
    that preserve the lived human experience."
  </p>
  <br>

  <h2>Act VI: Building a Technically Fair Future—Together</h2>
  <br>
  
  <p>
    "AI shouldn't replace your thoughts—it should help you live more freely."
  </p>
  
  <p>
    The Fair3 community champions openness, collaboration, and co-creation as foundational principles 
    for achieving technological fairness. From decentralized data structures to protocol-level digital 
    rights, they are not just building tools—they are architecting the future.
  </p>
  
  <p>
    In the years to come, everyone may possess an AI twin, bound to their on-chain identity, inheriting 
    memory, personality, and value. These digital selves may speak on your behalf, continue your social 
    life, or manage your digital ventures. This is not speculative fiction—it is a technical inevitability.
  </p>
  <br>

  <h2>Final Invitation: Don't Let the Next Technological Wave Leave You Behind</h2>
  <br>
  
  <p>
    We are witnessing a reordering of cognition and power. From AI-generated content to platform-defined 
    identity and memory, we are all participants in this paradigm shift. The only question is: Will you 
    be a bystander—or a co-author of the new rules?
  </p>
  <br>

  <p>
    The Fair3 Tech Fairness Hackathon is calling on individuals unwilling to be defined by legacy systems:
  </p>
  
  <ul>
    <li>Protocol designers</li>
    <li>Decentralization advocates</li>
    <li>AI engineers</li>
    <li>Narrative architects</li>
    <li>Public domain defenders</li>
    <li>And every builder who believes in a fairer Web3</li>
  </ul>
  <br>

  <p>
    This is not just a competition. It is a resistance against systemic injustice.
  </p>
  <br>

  <p>
    We are exploring critical questions such as:
  </p>
  
  <ul>
    <li>If algorithms determine fate, what remains within our control?</li>
    <li>Can data taken by platforms ever be returned to individuals?</li>
    <li>In the AI era, what are the pathways for sustainable individual agency?</li>
    <li>Must alpha opportunities always remain in the hands of the few?</li>
  </ul>
  <br>

  <p>
    If these questions have ever crossed your mind—this hackathon was designed for you.
  </p>
  
  <p>
    Whether you wish to build protocols, tools, frameworks, or narratives—we invite you to build with us.
  </p>
  <br>

  <p>
    "We're not here to manage people. We're here to empower people to invent the rules."
  </p>
  
  <p>
    — Wang Xin (Founder of Kuaibo / CTO of FAIR3)
  </p>
  <br>

  <p>
    This is more than an effort to develop decentralized tools—it is a platform for decentralized storytelling.
  </p>
  
  <p>
    You're not here to serve the market. You're here to reshape it.
  </p>
  <br>

  <h3>Fair3 Offers:</h3>
  
  <ul>
    <li>A prize pool of $30,000 USD + token incentives</li>
    <li>Multi-track ecosystem support (including UnicornX and BNB Chain)</li>
    <li>Fast-track entry into the FAIR3 incubation program</li>
    <li>Governance access, digital credentials, and on-chain reputation mechanisms</li>
  </ul>
  <br>

  <div class="contact-info">
    <p>Website: fair3.community</p>
    <p>Twitter: @Fair3_community</p>
    <p>GitHub: FAIR3CTO/Fair-and-Free</p>
    <p>Telegram: t.me/fair3_community</p>
    <p>Playback: <a href="https://x.com/i/spaces/1MnGnwNPqdBJO" target="_blank">https://x.com/i/spaces/1MnGnwNPqdBJO</a></p>
  </div>
</div>`
    }
  }

  if (!event) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[18px] text-center")}>
          Event not found
        </h1>
        <p className="text-[14px] text-gray-500 mt-2 text-center">
          The event you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-6 max-w-none">
      <div className="w-full text-[#353535]">
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px] leading-tight mb-4")}>
          {event.title}
        </h1>
        <Timer 
          className={cn(normalTextStyle(), "text-[12px] text-gray-600")} 
          utcTime={event.updateTime} 
        />
        <div
          className={cn(
            normalTextStyle(), 
            "mt-6 text-[14px] leading-relaxed",
            // 移动端内容样式
            "[&>h1]:text-[18px] [&>h1]:font-bold [&>h1]:mb-4 [&>h1]:mt-6 [&>h1]:leading-tight",
            "[&>h2]:text-[16px] [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:mt-5",
            "[&>h3]:text-[15px] [&>h3]:font-medium [&>h3]:mb-2 [&>h3]:mt-4",
            "[&>p]:mb-4 [&>p]:leading-relaxed",
            "[&>ul]:mb-4 [&>ul]:pl-4",
            "[&>ol]:mb-4 [&>ol]:pl-4",
            "[&>li]:mb-1",
            "[&>blockquote]:border-l-4 [&>blockquote]:border-purple-400 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-4",
            "[&>img]:w-full [&>img]:h-auto [&>img]:mb-4 [&>img]:rounded",
            "[&>a]:text-purple-600 [&>a]:underline",
            "break-words"
          )}
          dangerouslySetInnerHTML={{ __html: event.rawContent }}
        />
      </div>
    </div>
  );
}