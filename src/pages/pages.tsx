// get initial props with revalidate
export const getStaticProps = async () => {
  console.log("fetching new data");
  const data = await fetch(`https://delay-test.deno.dev`).then((res) =>
    res.json()
  );

  return {
    props: {
      data: data,
    },
    revalidate: 30, // 24 hours
  };
};

export default function Pages({ data }: { data: { timestamp: number } }) {
  const renderTime = Date.now();
  return <div>Test Response {renderTime - data.timestamp}</div>;
}
