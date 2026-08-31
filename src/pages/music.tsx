import  MusicMusicContent from "./musicmusic";
import  MAboutContent from "./musicabt";
import { useState } from "react";

export default function MusicContent() {
  const [activeTab, setActiveTab] = useState("music");
  return (
    <>
      <div className="w-full min-h-0 h-auto pointer-events-none box-border pt-12 pb-12 pr-36 pl-36 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className=" flex h-auto pointer-events-none text-white font-bold text-2xl items-center justify-center mb-4 animate-reveal gap-4">
          <a
            onClick={() => setActiveTab("music")}
            className={`hover:text-pink-500 transition-colors duration-300 select-none cursor-target pointer-events-auto p-2 ${activeTab === "music" ? "text-pink-500 border" : ""}`}
          >
            Music
          </a>
          <a
            onClick={() => setActiveTab("about")}
            className={`hover:text-pink-500 transition-colors duration-300 select-none cursor-target pointer-events-auto p-2  ${activeTab === "about" ? "text-pink-500 border" : ""}`}
          >
            About
          </a>
        </div>
        {activeTab === "music" && <MusicMusicContent />}
        {activeTab === "about" && <MAboutContent />}
      </div>
    </>
  );
}
