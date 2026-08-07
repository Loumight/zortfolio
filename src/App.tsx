import "./App.css";
import PixelBlast from "./pixel";
import TargetCursor from "./cursor";

function App() {
  return (
    <div className="bg-emerald-950 opacity-100 w-dvw h-dvh absolute -z-10 scrollbar-none overflow-auto  ">
      <div>
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
        <TargetCursor
          spinDuration={3}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.1}
          cursorColor="#ffffff"
          cursorColorOnTarget="#ffffff"
        />
        {/* TITLE */}
        <div className="text-white text-5xl font-bold flex flex-wrap justify-between bg-linear-to-r from-bummers to-emerald-950 p-12 border-white border-b-4 z-10">
          <div className="select-none cursor-target p-2">left</div>
          <div className="flex gap-8 flex-wrap justify-center">
            <a className="hover:text-[hsl(120,47%,27%)] transition-colors duration-300 select-none cursor-target p-2">
              Art
            </a>
            <a className="hover:text-[hsl(120,47%,27%)] transition-colors duration-300 select-none cursor-target p-2">
              Music
            </a>
            <a className="hover:text-[hsl(120,47%,27%)] transition-colors duration-300 select-none cursor-target p-2">
              About
            </a>
            <a className="hover:text-[hsl(120,47%,27%)] transition-colors duration-300 select-none cursor-target p-2">
              Contact
            </a>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-20 p-12 gap-10">
          <div className="bg-purple-600 col-span-14">1</div>
          <div className="bg-yellow-600 col-span-6">2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
