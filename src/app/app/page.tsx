export const revalidate = 10;

export default async function Page() {
  const data = await fetch(`https://delay-test.deno.dev`, {}).then((res) =>
    res.json()
  );
  const renderTime = Date.now();
  const ts = data?.timestamp || 0;

  console.log(`APP STATIC`, data, renderTime);

  return <div>Static ISR {renderTime - ts}</div>;
}
