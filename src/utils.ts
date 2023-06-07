export const getTimestampAsync = async (cached?: boolean) => {
  const data = await fetch(`https://cache-playground-tobias3.vercel.app/api`, {
    next: {
      revalidate: cached ? 10 : false,
    },
  }).then((res) => res.json());
  return data.timestamp;
};
