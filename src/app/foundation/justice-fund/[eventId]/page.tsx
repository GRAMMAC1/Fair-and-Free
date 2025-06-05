import Image from "next/image";
import dayjs from "dayjs";

import { BackgroundBlur } from "@/shared/background-blur";
import { baseUrl } from "@/shared/fetcher";
import { Timer } from "./timer";
import type { Event } from "@/shared/types";

// compat cloudflare worker
export const runtime = "edge";

type EventDetail = {
  data: Event;
  message: string;
  code: number;
  success: boolean;
};

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  const data = await fetch(baseUrl + "/event/getEventDetail/" + eventId);
  const event: EventDetail = await data.json();
  const { title = "", updateTime = Date.now(), content = "" } = event.data;

  return (
    <div className="flex relative flex-col items-center ">
      <BackgroundBlur top={-525} right={-115} />
      <div
        className={
          "2xl:w-[1440px] text-[#353535] mt-18 font-normal text-[15px]"
        }
      >
        <h1 className={"font-[Kodchasan] font-bold text-[24px]"}>{title}</h1>
        <Timer className="mt-5" utcTime={updateTime} />
        <div className="mt-9" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
