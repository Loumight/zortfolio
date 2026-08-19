// ArtContent.tsx
export default function AboutContent() {
  return (
    <>
      <div className=" text-white text-xl w-[50%] flex flex-col backdrop-blur-xs p-12 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-scroll">
        {/*abt*/}
        <h3 className="mb-10 text-5xl font-bold">Hey there!</h3>
        <p className="mb-6">
          Im Josh, a 2026 graduate of SSHS with a passion for art and music (and
          games). You can check out my work in my music and art portfolios.
        </p>
        <p className="mb-18">
          I've been learning to code for fun, and made this portfolio by myself.
          I have used some ai as assistance in learning, but everything is coded
          by me.
        </p>

        {/*MUSIC*/}
        <h3 className="mb-10 text-5xl font-bold">Music</h3>
        <p className="mb-6">
          I've played drums fairly regularly since I was 3, but it took until
          yr5 before I even started listening to music. In yr10 I transcribed
          and played Whiplash by Hank Levy, then it evolved into making my own
          music.
        </p>
        <p className="mb-18">
          I use reaper daw and a heavy amount of FREE vsts and a midi piano to
          make music. I can play a basic level of piano and even less on bass
          and guitar, but try subsidise it with decent music theory ): Do NOT
          ask me to read sheet music just tell me the scale and I'll probably
          figure it out quicker.
        </p>
        {/*ART*/}
        <h3 className="mb-10 text-5xl font-bold">Art</h3>
        <p className="mb-6">
            
        </p>
        {/*PROJECTS*/}
        <h3 className="mb-10 text-5xl font-bold">Projects</h3>
        <p className="mb-6">
          My current only project is my yr12 website where I attempt to combine
          music with visual arts, with heavy inspiration from vgm.
        </p>
      </div>

      <div className="flex flex-col w-[50%]">
        <img
          className="h-full w-full object-contain object-center"
          src="./src/assets/pluh.png"
        />
      </div>
    </>
  );
}
