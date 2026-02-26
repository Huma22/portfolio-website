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
    <main style={{ backgroundColor: "#121212" }}>
      {/* Fixed navigation */}
      <Navbar />

      {/* ────────────────────────────────────────────────
          HERO: 500vh scroll section with canvas + overlay
      ──────────────────────────────────────────────── */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      <div className="space-y-48 md:space-y-56">
        {/* ────────────────────────────────────────────────
            ABOUT
        ──────────────────────────────────────────────── */}
        <About />

        {/* ────────────────────────────────────────────────
            WORK
        ──────────────────────────────────────────────── */}
        <Work />

        {/* ────────────────────────────────────────────────
            PROJECTS
        ──────────────────────────────────────────────── */}
        <Projects />

        {/* ────────────────────────────────────────────────
            COFFEE CHAT
        ──────────────────────────────────────────────── */}
        <CoffeeChat />
      </div>

      <Footer />
    </main>
  );
}
