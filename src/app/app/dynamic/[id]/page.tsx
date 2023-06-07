import { getTimestampAsync } from "@/utils";

export const revalidate = 10;

// export async function generateStaticParams() {
//   return [];
// }

export default async function Page({ params }: { params: { id: string } }) {
  const timestamp = await getTimestampAsync();
  const renderTime = Date.now();
  const ts = timestamp || 0;

  console.log(`APP DYNAMIC `, timestamp, renderTime);

  return (
    <div>
      Dynamic {params.id} ISR {renderTime - ts} {Date.now()}
    </div>
  );
}

export const dynamic = "force-static";
