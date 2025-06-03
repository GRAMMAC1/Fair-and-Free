import Image from "next/image";

export function EventCard() {
  return (
    <div
      style={{
        border: "1px solid #0000001A",
        background: "rgba(205, 255, 113, 0.6)",
      }}
      className="w-[290px] h-[290px] rounded-[10px] p-6 text-[var(--selected-text-color)]"
    >
      <Image
        src={"/images/about/about-cto.png"}
        width={240}
        height={134}
        alt={"event cover pic"}
      />
      <h1 className={"font-[Inter] font-extrabold text-[16px] mt-4"}>
        Wang Xin's Fairness Incident
      </h1>
      <p className={"font-[Inter] font-medium text-[12px] mt-4"}>
        From "Technology is Innocent" to "Technology is Fair", Wang Xin uses the
        power of the community to continue his dream of inclusive technology!
      </p>
    </div>
  );
}

export default EventCard;
