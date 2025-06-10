"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { titleStyle, normalTextStyle } from "@/shared/styles";
import { EventCard } from "../foundation/justice-fund/event-card";
import { fetcher } from "@/shared/fetcher";

import type { EventResponse } from "@/shared/types";

const iconList = [
  {
    title: "13",
    content: "Foundation Members",
    image: {
      src: "/images/home-icon1.svg",
      width: 21,
      height: 24,
    },
  },
  {
    title: "2.5M+",
    content: "Foundation Balance",
    image: {
      src: "/images/home-icon2.svg",
      width: 25,
      height: 23,
    },
  },
  {
    title: "5",
    content: "Partnership Projects",
    image: {
      src: "/images/home-icon3.svg",
      width: 25,
      height: 20,
    },
  },
  {
    title: "1.2M+",
    content: "Airdrop FAIR3",
    image: {
      src: "/images/home-icon4.svg",
      width: 25,
      height: 25,
    },
  },
] as const;

const companyIconList = [
  {
    src: "/images/bscscan.svg",
    link: "https://bscscan.com/token/0x6952c5408b9822295ba4a7e694d0c5ffdb8fe320",
    alt: "bscscan",
    name: "Bscscan",
  },
  {
    src: "/images/cornmarketcap.svg",
    link: "https://coinmarketcap.com/zh-tw/currencies/fair-and-free/",
    alt: "cornmarketcap",
    name: "Coinmarketcap",
  },
  {
    src: "/images/coingecko.svg",
    link: "https://www.coingecko.com/en/coins/fair-and-free",
    alt: "coingecko",
    name: "Coingecko",
  },
] as const;

export default function MobilePage() {
  const { data } = useSWR<EventResponse>(`/event/gethomeEvents`, fetcher);
  const { data: events = [] } = data || {};

  return (
    <div className="flex flex-col items-center text-[#353535]">
      {/* 移动端主要内容区域 */}
      <div className="w-full bg-gradient-to-b from-white/90 to-white/60 backdrop-blur-sm">
        <div className="px-4 py-8">
          <div className="text-center">
            <h1 className="font-bold font-[Konkhmer Sleokchher] text-[32px] text-[#7c49ff]">
              FAIR AND FREE
            </h1>
            <h2 className="mt-4 font-bold font-[Kodchasan] text-[18px] leading-tight">
              Back Builders. Defend Justice. Own the Future.
            </h2>
            <p className="mt-4 text-black font-normal text-[12px] px-2">
              BNB Chain CA:0x6952c5408b9822295ba4a7e694d0c5ffdb8fe320
            </p>
            <Button
              className="mt-6 font-[Kodchasan] text-[14px] font-bold cursor-pointer bg-[#9871FF] text-white px-6 py-3 rounded-full"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <Link
                href="https://dexscreener.com/bsc/0x701232f46796855b0841df2cbf46595c00667dde"
                target="_blank"
              >
                BUY $FAIR3 ON BSC
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 移动端统计数据 */}
      <div className="w-full px-4 mt-6">
        <div className="grid grid-cols-2 gap-3">
          {iconList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm"
            >
              <Image
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                alt={item.content}
              />
              <div className="text-[18px] font-bold text-[#7c49ff] mt-2">
                {item.title}
              </div>
              <div className="text-[11px] text-center mt-1 text-gray-600">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 最新事件（如果有） */}
      {events.length > 0 && (
        <div className="w-full px-4 mt-8">
          <h3 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px] mb-4")}>
            Latest Events
          </h3>
          <div className="space-y-3">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 移动端购买链接 */}
      <div className="w-full px-4 mt-8">
        <h3 className={cn(titleStyle({ font: "kodchasan" }), "text-[18px] text-center mb-4")}>
          BUY $FAIR3 TODAY
        </h3>
        <div className="space-y-3">
          {companyIconList.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/80 transition-colors"
            >
              <Image src={item.src} width={24} height={24} alt={item.alt} />
              <span className={cn(normalTextStyle(), "text-[14px]")}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 免责声明 */}
      <div className="w-full px-4 mt-8">
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/50">
          <p className="text-[11px] text-gray-600 text-center leading-relaxed">
            LEGAL DISCLAIMER: $FAIR3 is a crypto coin with no intrinsic value or expectation of financial return. 
            This website provides general information only and does not constitute personalized financial, investment, or legal advice.
          </p>
        </div>
      </div>

      {/* 移动端底部空间 */}
      <div className="h-6" />
    </div>
  );
}