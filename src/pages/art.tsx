// ArtContent.tsx
export default function ArtContent() {
  return (
<>
<div className="flex flex-wrap w-full gap-4">
        <div className=" text-white text-center text-3xl flex items-center w-[calc(50%-8px)] justify-center backdrop-blur-xs p-2 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4">
        art go here
        </div>
                <div className="bg-amber-300 text-white text-center text-3xl w-[calc(50%-8px)] flex items-center justify-center backdrop-blur-xs p-2 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4">
        art go here
        </div>
          <div className="bg-amber-300 h-[70vh] text-white text-center text-3xl w-full flex items-center justify-center backdrop-blur-xs p-2 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4">
        art go here
        </div>
        </div>
</>
  );
}