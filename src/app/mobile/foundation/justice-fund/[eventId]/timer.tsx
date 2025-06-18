"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function Timer({
  utcTime,
  className,
  format = "YYYY-MM-DD HH:mm",
}: {
  className?: string;
  utcTime: string | number;
  format?: string;
}) {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formattedTime = dayjs.utc(utcTime).tz(userTimezone).format(format);

    setLocalTime(formattedTime);
  }, [utcTime, format]);

  return (
    <div className={className}>
      <span className="text-gray-500">Published: </span>
      <time dateTime={dayjs.utc(utcTime).toISOString()}>
        {localTime}
      </time>
    </div>
  );
}

export default Timer;