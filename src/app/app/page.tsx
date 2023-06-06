import { getTimestampAsync } from "@/utils";

export const revalidate = 10;

export default async function Page() {
  const timestamp = await getTimestampAsync();
  const renderTime = Date.now();
  const ts = timestamp || 0;

  console.log(`APP STATIC`, timestamp, renderTime);

  return <div>Static ISR {renderTime - ts}</div>;
}
