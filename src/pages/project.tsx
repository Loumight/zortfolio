// ArtContent.tsx
export default function ProjectContent() {
  return (
<>
<div className="w-full min-h-0 h-auto pointer-events-none box-border pt-12 pb-12 pr-36 pl-36 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
 <div className="animate-reveal w-full flex backdrop-blur-xs backdrop-opacity-90 border-[hsl(120,20%,5%)]/20 border-4 text-xl text-white shadow-xl flex-col p-12">
       <div className="flex flex-col min-h-0 mb-20 justify-center items-baseline">
        <h3 className="text-5xl font-bold flex justify-center w-full">
          <span className="highlighter px-12 py-4">
           Super cool projects
          </span>
        </h3>
        <div className="font-light text-sm flex justify-center w-full">
          <p>
            Well... project (for now)
          </p>
        </div>
      </div>
 </div>
 </div>
</>
  );
}