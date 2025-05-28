export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold">Project Detail Page</h1>
      <p className="mt-4 text-lg">
        This is the project detail page of the application. projectId:{" "}
        {projectId}
      </p>
    </div>
  );
}
