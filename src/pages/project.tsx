import Link from "./link";
import Card from "./musicard";
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
              <p>Well... project (for now)</p>
            </div>
          </div>
          <div className="flex flex-row gap-6 mb-12">
            <div className="flex flex-1">
              <p>
                <p className="font-bold text-3xl mb-12 underline decoration-pink-500">
                  Quick instructions on how to navigate the site:
                </p>
                <ul>
                  <li className="mb-6">
                    1. DO NOT QUICKLY CHANGE AREAS. You must wait until the
                    music starts playing before moving to another area,
                    otherwise both songs will play simultaneously. It is a bug.
                  </li>

                  <li className="mb-6">
                    2. You use the departures board at the top to navigate
                    between areas. Click on the area and it will take you to
                    that station.
                  </li>
                  <li className="mb-6">
                    3. You go outside via the exit buttons, both exit buttons
                    take you to the same place.
                  </li>
                  <li className="mb-6">
                    4. You can press space to pause/unpause the music, and you
                    can click on the progress bar to jump to that time.
                  </li>
                  <li className="mb-6">
                    5. The maw is where Im planning to put all ideas that didn't
                    make it to the final product.
                  </li>
                  <li className="mb-6">
                    6. The map at the bottom doesnt have any functionality at
                    the moment, its just there.
                  </li>
                </ul>
                <p className="text-3xl">
                  <Link
                    link="https://loumight.github.io/MAP/"
                    title="Click here to go to my map"
                  />
                </p>
              </p>
            </div>
            <div className="flex flex-1">
              <img className="object-contain" src="./assets/website.png" />
            </div>
          </div>
          <div className="grid grid-cols-3">
            <Card
              link="https://www.youtube.com/embed/xyoGFnaT4Y4"
              title="Video profile"
              desc="I will make another section for awards and stuff but for now its just here."
            />
          </div>
        </div>
      </div>
    </>
  );
}
