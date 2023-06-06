export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  console.log("fetching new data", params.id);
  const data = await fetch(`https://delay-test.deno.dev`).then((res) =>
    res.json()
  );

  return {
    props: {
      data: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default function Pages({ data }: { data: { timestamp: number } }) {
  const renderTime = Date.now();
  const ts = data?.timestamp || 0;
  return <div>Dynamic ISR {renderTime - ts}</div>;
}
