import "./App.css";
import PixelBlast from "./pixel";
import TargetCursor from "./cursor";
import { useState } from "react";
import ArtContent from "./pages/art";
import HomeContent from "./pages/home";
import ProjectContent from "./pages/project";
import MusicContent from "./pages/music";
import AboutContent from "./pages/about";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="bg-emerald-950 opacity-100 w-full min-h-screen relative z-10 overflow-auto">
      <div className="fixed inset-0 -z-1">
        <PixelBlast
          variant="square"
          pixelSize={2.5}
          color="#2D482D"
          patternScale={3}
          patternDensity={1.1}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={1}
          rippleThickness={0.05}
          rippleIntensityScale={0.8}
          speed={0.5}
          edgeFade={0}
          transparent
        />
      </div>
      <TargetCursor
        spinDuration={3}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.1}
        cursorColor="#ffffff"
        cursorColorOnTarget="#ffffff"
      />
      {/* TITLE */}
      <div className="flex flex-col h-screen">
        <div className="text-white text-5xl font-bold flex flex-wrap justify-between bg-linear-to-r from-bummers to-emerald-950 p-9 border-white border-b-4 z-10">
          <a
            onClick={() => setActiveTab("home")}
            className="select-none cursor-target transition-transform duration-300 hover:scale-110"
          >
            <img
            className="h-16 w-auto"
            src="./src/assets/logo.webp"
            />
          </a>
          <div className="flex gap-8 flex-wrap justify-center">
            <a
              onClick={() => setActiveTab("art")}
              className="hover:text-[hsl(120,47%,27%)] transition-colors duration-300 select-none cursor-target p-2"
            >
              Art
            </a>
            <a
              onClick={() => setActiveTab("music")}
              className="hover:text-[hsl(120,47%,27%)] transition-colors duration-300 select-none cursor-target p-2"
            >
              Music
            </a>
            <a
              onClick={() => setActiveTab("about")}
              className="hover:text-[hsl(120,47%,27%)] transition-colors duration-300 select-none cursor-target p-2"
            >
              About
            </a>
            <a
              onClick={() => setActiveTab("projects")}
              className="hover:text-[hsl(120,47%,27%)] transition-colors duration-300 select-none cursor-target p-2"
            >
              Projects
            </a>
          </div>
        </div>
      

      {/* CONTENT */}
        {activeTab === "home" && <HomeContent />}
        {activeTab === "art" && <ArtContent />}
        {activeTab === "music" && <MusicContent />}
        {activeTab === "about" && <AboutContent />}
        {activeTab === "projects" && <ProjectContent />}
    </div>
    </div>
  );
}

export default App;
