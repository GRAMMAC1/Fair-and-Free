export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  console.log("Event ID:", eventId);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold">Event Detail Page</h1>
      <p className="mt-4 text-lg">
        This is the event detail page for event ID: {eventId}.
      </p>
    </div>
  );
}
