// ArtContent.tsx
export default function HomeContent() {
  return (
    <>
          <div className="w-[70%] overflow-hidden flex">
          <img
            className="object-cover"
            src="./src/assets/tuff.webp"
          />
        </div>
        <div className=" text-white text-center text-3xl w-[30%] flex flex-col items-center justify-center backdrop-blur-xs p-2 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4">
        <p className="mb-6">Hi, im Josh but online I usually go by Lumite (hence the logo)</p>
        <p className="mb-6">I love art and music.</p>
        </div>
  </>
  );
}