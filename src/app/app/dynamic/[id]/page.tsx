export const revalidate = 10;

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetch(`https://delay-test.deno.dev`, {}).then((res) =>
    res.json()
  );
  const renderTime = Date.now();
  const ts = data?.timestamp || 0;

  console.log(`APP DYNAMIC `, data, renderTime);

  return (
    <div>
      Dynamic {params.id} ISR {renderTime - ts}
    </div>
  );
}
