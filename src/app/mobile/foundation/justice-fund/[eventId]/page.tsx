import { BackgroundBlur } from "@/shared/background-blur";
import { EventContent } from "./content";

// compat cloudflare worker
export const runtime = "edge";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  return (
    <div className="flex relative flex-col items-center overflow-x-hidden">
      <BackgroundBlur
        top={200}
        right={-50}
        style={{ top: "200px", right: "-50px" }}
      />
      <EventContent eventId={eventId} />
    </div>
  );
}