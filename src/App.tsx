import "./App.css";
import PixelBlast from "./pixel";
import TargetCursor from "./cursor";

function App() {
  return (
    <div className="bg-emerald-950 opacity-100 w-full min-h-screen relative z-10 overflow-auto">
        <div className="fixed inset-0 -z-1">
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
        </div>
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
        
      <div className="flex gap-10 p-12 h-[calc(100vh-164px)] w-full box-border">
        <div className="w-[70%] bg-purple-600 overflow-hidden flex">
          <img
            className="w-full h-full"
            src="./src/assets/person.webp"
          />
          <img
            className="w-full h-full"
            src="./src/assets/pluh.png"
          />
        </div>
        <div className="w-[30%] bg-yellow-600 flex items-center justify-center text-white text-center text-3xl">
          hey man u should scroll down
        </div>
      </div>
    </div>
  );
}

export default App;

