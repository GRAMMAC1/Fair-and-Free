import Link from "next/link";
import Image from "next/image";

export function ContactLink({ className }: { className?: string }) {
  return (
    <div className={`flex gap-[24px] items-center ${className}`}>
      <Link href={"https://x.com/fair3fund"} target="_blank">
        <Image src={"/images/X.svg"} width={20} height={18} alt={"X Link"} />
      </Link>
      <Link href={"https://t.me/fair3fund"} target="_blank">
        <Image
          src={"/images/telegram.svg"}
          width={20}
          height={18}
          alt={"telegram CN Link"}
        />
      </Link>
      <Link href={"https://t.me/fair3fund_en"} target="_blank">
        <Image
          src={"/images/telegram.svg"}
          width={20}
          height={18}
          alt={"telegram EN Link"}
        />
      </Link>
      <Link href={"https://fair3fund.org"} target="_blank">
        <Image
          src={"/images/github.svg"}
          width={22}
          height={22}
          alt={"github Link"}
        />
      </Link>
    </div>
  );
}

export default ContactLink;
