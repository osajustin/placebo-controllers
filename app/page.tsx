import Hero from "./components/hero";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 min-h-screen  row-start-2 items-center sm:items-start">
        <Hero />
      </main>
  );
}
