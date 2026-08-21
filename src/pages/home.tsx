// ArtContent.tsx
export default function HomeContent() {
  return (
    
        <div className="flex grow gap-10 w-full box-border p-12 min-h-0 pointer-events-auto flex-col md:flex-row ">
          <div className="w-full md:w-[70%] overflow-hidden flex h-auto">
          <img
            className="w-full h-auto object-contain object-center min-h-75"
            src="./src/assets/tuff.webp"
            alt="mibombo"
          />
        </div>
        <div className=" text-white text-center text-xl w-full md:w-[30%] flex flex-col items-center justify-center backdrop-blur-xs backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4">
        <p className="mb-6 md:mb-12 p-2">Hi, im Josh but online I usually go by Lumite (hence the logo)</p>
        <p className="mb-6 md:mb-12 p-2">Locked in for art and music in 2023 and now learning to code my own website</p>
        </div>
  </div>
  );
}