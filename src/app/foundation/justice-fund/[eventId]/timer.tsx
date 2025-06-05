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
  format = "YYYY-MM-DD HH:mm:ss",
}: {
  className: string;
  utcTime: string | number;
  format?: string;
}) {
  const [localTime, setLocalTime] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formattedTime = dayjs.utc(utcTime).tz(userTimezone).format(format);

    setLocalTime(formattedTime);
    setIsLoaded(true);
  }, [utcTime, format]);

  // avoid hydration not match
  if (!isLoaded) {
    return <p className={className}>Loading...</p>;
  }

  return <p className={className}>{localTime}</p>;
}

export default Timer;
