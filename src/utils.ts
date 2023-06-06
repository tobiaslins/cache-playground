export const getTimestampAsync = async () => {
  const ENDPOINT = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api`
    : "http://localhost:3000/api";
  const data = await fetch(ENDPOINT).then((res) => res.json());
  return data.timestamp;
};
