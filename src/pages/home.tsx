export default function HomeContent() {
  return (
    <div className="flex grow gap-10 w-full box-border p-12 h-[calc(100vh-140px)] pointer-events-none flex-row grid-cols-3">
      <div className="w-full  overflow-hidden flex h-auto animate-reveal">
        <img
          className="w-full h-auto object-contain object-center"
          src="./assets/tuff.webp"
          alt="mibombo"
        />
      </div>

      <div className="w-full flex min-h-0 md:self-center animate-reveal text-white text-center text-3xl justify-center flex-col backdrop-blur-xs backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4">
{/* dude whoever looks at this lmao its lowk cooked dont judge pls */}
      <span className="justify-center flex">
        <img
        className="p-12 h-[50vh] object-contain object-center"
        src="./assets/doxxed.png"
        />
        </span>
      <span className="pl-12 pr-12 pb-12">
        <p className="mb-6 3xl:mb-12 text-4xl 3xl:text-6xl font-bold">
          <p className="mb-6">

            Hi, im
            <span className="highlighter px-2">JOSH</span>
            <br></br>
</p>
            <span className="text-2xl 3xl:text-4xl">but online I usually go by{" "}</span>
            <i className="underline decoration-pink-500">Lumite</i>
        </p>
          <p className="text-xl 3xl:text-2xl mb-6">
            Apart of the first Big Picture class at South Sydney HS - with an
            interest in art and music 
          </p>
            <p className="text-sm 3xl:text-lg pointer-events-auto">
              Wanna contact me? <a className="underline decoration-pink-500 cursor-target cursor-none" href="mailto:jdbbilling@gmail.com">jdbbilling@gmail.com</a>
          </p>
          </span>
      </div>

      <div className="w-full overflow-hidden flex h-auto animate-reveal">
        <img
          className="w-full h-auto object-contain object-center"
          src="./assets/tuff.webp"
          alt="mibombo"
        />
      </div>
    </div>
  );
}
