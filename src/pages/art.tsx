import  ArtArtContent from "./artart";
import  AAboutContent from "./artabt";
import { useState } from "react";

export default function ArtContent() {
  const [activeTab, setActiveTab] = useState("art");
  return (
    <>
      <div className="w-full min-h-0 h-auto pointer-events-none box-border pt-12 pb-12 pr-36 pl-36 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className=" flex h-auto pointer-events-none text-white font-bold text-2xl items-center justify-center mb-4 animate-reveal gap-4">
          <a
            onClick={() => setActiveTab("art")}
            className={`hover:text-pink-500 transition-colors duration-300 select-none cursor-target pointer-events-auto p-2 ${activeTab === "art" ? "text-pink-500 border" : ""}`}
          >
            Art
          </a>
          <a
            onClick={() => setActiveTab("about")}
            className={`hover:text-pink-500 transition-colors duration-300 select-none cursor-target pointer-events-auto p-2  ${activeTab === "about" ? "text-pink-500 border" : ""}`}
          >
            About
          </a>
        </div>
        {activeTab === "art" && <ArtArtContent />}
        {activeTab === "about" && <AAboutContent />}
      </div>
    </>
  );
}