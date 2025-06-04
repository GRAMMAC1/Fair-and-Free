import Link from "next/link";
import Image from "next/image";

export function ContactLink({
  className,
  telegramCNLink,
  telegramENLink,
  githubLink,
  telegramLink,
  Xlink,
}: {
  className?: string;
  Xlink?: string;
  telegramCNLink?: string;
  telegramENLink?: string;
  githubLink?: string;
  telegramLink?: string;
}) {
  const renderXLink = () => {
    if (Xlink) {
      return (
        <Link href={Xlink} target="_blank">
          <Image src={"/images/X.svg"} width={20} height={18} alt={"X Link"} />
        </Link>
      );
    }
  };

  const renderTelegramCNLink = () => {
    if (telegramCNLink) {
      return (
        <Link href={telegramCNLink} target="_blank">
          <Image
            src={"/images/telegram.svg"}
            width={20}
            height={18}
            alt={"telegram CN Link"}
          />
        </Link>
      );
    }
  };

  const renderTelegramENLink = () => {
    if (telegramENLink) {
      return (
        <Link href={telegramENLink} target="_blank">
          <Image
            src={"/images/telegram.svg"}
            width={20}
            height={18}
            alt={"telegram EN Link"}
          />
        </Link>
      );
    }
  };

  const renderTelegramLink = () => {
    if (telegramLink) {
      return (
        <Link href={telegramLink} target="_blank">
          <Image
            src={"/images/telegram.svg"}
            width={20}
            height={18}
            alt={"telegram Link"}
          />
        </Link>
      );
    }
  };

  const renderGithubLink = () => {
    if (githubLink) {
      return (
        <Link href={githubLink} target="_blank">
          <Image
            src={"/images/github.svg"}
            width={22}
            height={22}
            alt={"github Link"}
          />
        </Link>
      );
    }
  };

  return (
    <div className={`flex gap-[24px] items-center ${className}`}>
      {renderXLink()}
      {renderTelegramCNLink()}
      {renderTelegramENLink()}
      {renderTelegramLink()}
      {renderGithubLink()}
    </div>
  );
}

export default ContactLink;
