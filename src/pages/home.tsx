export default function HomeContent() {
  return (
    <div className="flex grow gap-10 w-full box-border p-12 h-[calc(100vh-123px)] 3xl:h-[calc(100vh-140px)] pointer-events-none flex-row grid-cols-3">
      <div className="w-full  overflow-hidden flex h-auto animate-reveal">
        <img
          className="w-full h-auto object-contain object-center"
          src="./assets/tuff.webp"
          alt="mibombo"
        />
      </div>

      <div className="w-full h-full pointer-events-auto min-h-0 overflow-y-auto animate-reveal text-white text-center backdrop-blur-xs backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4">
        <div className="min-h-full w-full flex flex-col">
          <div className="my-auto w-full p-12">
          {/* dude whoever looks at this lmao its lowk cooked dont judge pls */}
          <div className="justify-center ml-12 mr-12 mb-12 flex shrink-0">
            <img
              className="w-full h-auto"
              src="./assets/doxxed.png"
              alt="A sigma"
            />
          </div>
            <p className="mb-6 3xl:mb-12 text-3xl 3xl:text-6xl font-bold">
              <p className="mb-6">
                Hi, im
                <span className="highlighter px-2">JOSH</span>
                <br></br>
              </p>
              <span className="text-2xl 3xl:text-3xl">but online I usually go by{" "}</span>
              <i className="underline decoration-pink-500">Lumite</i>
            </p>
            <p className="text-lg 3xl:text-2xl mb-6">
              Apart of the first Big Picture class at South Sydney HS - with an
              interest in art and music
            </p>
            <p className="text-sm 3xl:text-lg pointer-events-auto">
              Wanna contact me? <a className="underline decoration-pink-500 cursor-target cursor-none" href="mailto:jdbbilling@gmail.com">jdbbilling@gmail.com</a>
            </p>
          </div>
        </div>
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
