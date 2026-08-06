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
        <div className="text-white text-5xl font-bold flex flex-wrap justify-end items-start box-decoration-slice bg-linear-to-r from-bummers to-emerald-950 p-12 gap-x-24 gap-y-6 border-white border-b-4 z-10">
          <div className="hover-green transition-colors duration-300 select-none cursor-target p-2">
            Art
          </div>
          <div className="hover-green transition-colors duration-300 select-none cursor-target p-2">
            Music
          </div>
          <div className="hover-green transition-colors duration-300 select-none cursor-target p-2">
            About Me
          </div>
          <div className="hover-green transition-colors duration-300 select-none cursor-target p-2">
            balls
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full h-full">
          <img
            src="ata:image/webp;base64,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"
            alt="pepe"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
