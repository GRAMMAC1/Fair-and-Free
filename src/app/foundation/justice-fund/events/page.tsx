"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import useSWR from "swr";
import { toast } from "sonner";

import { BackgroundBlur } from "@/shared/background-blur";
import { titleStyle } from "@/shared/styles";
import { cn } from "@/lib/utils";
import { EventListItem } from "../event-list-item";
import { fetcher } from "@/shared/fetcher";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";

import type { EventResponse } from "@/shared/types";

export default function EventPage() {
  const [count, setCount] = useState(4);
  const { data, isLoading } = useSWR<EventResponse>(
    "/event/getAllEvents",
    fetcher
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center">
        <div className="2xl:w-[1440px] flex w-full mt-16">
          <div className="flex gap-7">
            <Skeleton className="h-[286px] w-[384px] rounded-xl" />
            <div className="space-y-10">
              <Skeleton className="h-12 w-[400px] mt-5" />
              <Skeleton className="h-12 w-[600px]" />
              <Skeleton className="h-12 w-[140px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { data: events = [] } = data || {};

  const viewMore = () => {
    setCount((prev) => {
      if (prev >= events.length) {
        toast.warning("No more events");
        return prev;
      }

      return prev + 4;
    });
  };

  return (
    <div className="flex flex-col items-center relative overflow-x-hidden min-h-[500px]">
      <Toaster position={"top-center"} />
      <BackgroundBlur
        top={-525}
        right={-115}
        style={{ top: "-525px", right: "-115px" }}
      />
      <div className={"2xl:w-[1440px] 2xl:mx-0 mx-24"}>
        <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-2xl mt-16")}>
          Events
        </h1>
        <div className="flex flex-col gap-10 mt-10">
          {events
            .filter((event) => event.enable)
            .slice(0, count)
            .map((event) => (
              <EventListItem
                key={event.id}
                id={event.id}
                src={event.cover}
                title={event.title}
                description={event.description}
              />
            ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-8 text-center">
          {events.length > 0 && (
            <span
              className={cn(
                titleStyle({ font: "kodchasan" }),
                "flex flex-col items-center cursor-pointer text-[20px]"
              )}
              onClick={viewMore}
            >
              View More <ChevronDown className="mt-1" size={14} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
