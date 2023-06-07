import {
  Hero,
  Newsletter,
  Products,
  Promotion,
  Unique,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotion />
      <Products />
      <Unique />
      <Newsletter />
    </main>
  );
}
