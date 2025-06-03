import Image from "next/image";
import Link from "next/link";

import { normalTextStyle, titleStyle } from "@/shared/styles";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function EventListItem() {
  return (
    <div
      className={
        "flex py-9 w-[1238px] h-[286px] gap-12 bg-[#F4FFDF] rounded-[10px]"
      }
    >
      <Image
        className="ml-7"
        width={384}
        height={216}
        src={"/images/justice-fund/fund.png"}
        alt="event cover image"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h1 className={cn(titleStyle({ font: "kodchasan" }), "text-[20px]")}>
            Wang Xin's Fairness Incident
          </h1>
          <p className={cn(normalTextStyle(), "mt-5")}>
            From "Technology is Innocent" to "Technology is Fair", Wang Xin uses
            the power of the community to continue his dream of inclusive
            technology!
          </p>
        </div>
        <Button
          variant={"main"}
          className={cn(
            titleStyle({ font: "kodchasan" }),
            "text-[15px] font-normal bg-[#9AE412] w-[140px] h-[50px]"
          )}
        >
          <Link href={"/foundation/justice-fund/1"}>View Details</Link>
        </Button>
      </div>
    </div>
  );
}

export default EventListItem;
