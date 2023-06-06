import { getTimestampAsync } from "@/utils";

// get initial props with revalidate
export const getStaticProps = async () => {
  console.log("fetching new data");
  const timestamp = await getTimestampAsync();

  return {
    props: {
      data: {
        timestamp,
      },
    },
    revalidate: 30, // 24 hours
  };
};

export default function Pages({ data }: { data: { timestamp: number } }) {
  const renderTime = Date.now();
  return <div>Test Response {renderTime - data.timestamp}</div>;
}
