export const getTimestampAsync = async () => {
  const data = await fetch(
    `https://cache-playground-tobias3.vercel.app/api`
  ).then((res) => res.json());
  return data.timestamp;
};
