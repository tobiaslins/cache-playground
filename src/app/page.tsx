import Image from "next/image";

export default function Home() {
  return (
    <div>
      <a href="/app">App dir static</a>
      <br />
      <a href="/app/dynamic/1">App dir dynamic</a>
      <br />
      <a href="/pages">Pages dir static</a>
      <br />
      <a href="/dynamic/1">Pages dir dynamic</a>
    </div>
  );
}
