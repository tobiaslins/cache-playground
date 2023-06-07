import { getTimestampAsync } from "@/utils";

export const revalidate = 0;

export default async function Page({ params }: { params: { id: string } }) {
  const timestamp = await getTimestampAsync(true);
  const renderTime = Date.now();
  const ts = timestamp || 0;

  console.log(`APP DYNAMIC FETCH `, timestamp, renderTime);

  return (
    <div>
      Dynamic {params.id} FETCH {renderTime - ts}
    </div>
  );
}
