import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Work from "@/components/Work";
import CoffeeChat from "@/components/CoffeeChat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-safe w-full" style={{ backgroundColor: "#121212", paddingInline: 0 }}>
      {/* Fixed navigation */}
      <Navbar />

      {/* ────────────────────────────────────────────────
          HERO: 500vh scroll section with canvas + overlay
      ──────────────────────────────────────────────── */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl w-full mx-auto space-y-16 md:space-y-24 lg:space-y-28 px-5 sm:px-6 lg:px-8">
        {/* ──────────────────────────────────────────────── */}
        <About />

        {/* ──────────────────────────────────────────────── */}
        <Work />

        {/* ──────────────────────────────────────────────── */}
        <Projects />

        {/* ──────────────────────────────────────────────── */}
        <CoffeeChat />
      </div>

      <Footer />
    </main>
  );
}
