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
      <div className="animate-reveal text-white text-center text-3xl w-full md:w-[30%] justify-center flex flex-col backdrop-blur-xs backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4">
        <p className="mb-6 md:mb-12 p-2">
          Hi, im
          <span className="highlighter px-2">JOSH</span>
          but online I usually go by <i className="underline decoration-pink-500">Lumite</i> (hence the logo)
        </p>
        <p className="p-2 text-2xl">
          Apart of the first Big Picture class at South Sydney HS - with interests in art and music <br></br> <span className="text-lg">(and now learning to code my own
          website)</span>
        </p>
      </div>
    </div>
  );
}
