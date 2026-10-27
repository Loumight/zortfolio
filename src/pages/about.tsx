// ArtContent.tsx
export default function AboutContent() {
  return (
    <>
      <div className="flex grow gap-10 w-full box-border p-12 h-[calc(100vh-123px)] 3xl:h-[calc(100vh-140px)] pointer-events-none flex-col md:flex-row">
        <div className="animate-reveal w-[50%] flex place-items-center backdrop-blur-xs backdrop-opacity-90 border-[hsl(120,20%,5%)]/20 border-4 shadow-xl">
          <div className="w-full max-h-full overflow-y-auto text-white text-xl flex flex-col p-12 pointer-events-auto">
            {/*abt*/}
            <h3 className=" mb-10 text-5xl font-bold">
              <span className="highlighter px-6 py-2">Hey there!</span>
            </h3>
            <p className="mb-6">
              Im Josh, a 2026 graduate of SSHS with a passion for art, music, and game design. You can check out my work in my 
              portfolios.
            </p>
            <p className="mb-10">
There has been minimal AI usage, 99% of this website is coded by me.
            </p>

            <p className="mb-6 text-3xl font-bold">
              <span className="mb-10 text-3xl font-bold underline decoration-pink-500">
                Overview of my interests:
              </span>
            </p>
            <p className="mb-6">Sports - Mainly soccer and baseball</p>
            <p className="mb-6">
              Music - Composing, perfoming on the drums (other instruments in
              the future?)
            </p>
            <p className="mb-6">
              Art - Drawing, character design, designing my own website{" "}
              <i>*cough*</i>
            </p>
            <p className="mb-6">
              Games - everything about them (maybe creating one?)
            </p>
            <p className="text-3xl font-bold underline decoration-pink-500">
              Scroll down for more about my music and art!
            </p>
          </div>
        </div>
        <div className="flex flex-row w-1/2 animate-reveal items-center">
          <div className="h-max w-1/2 flex">
            <img
              className="drop-shadow-xl drop-shadow-black/20"
              src="./assets/pluh.png"
            />
          </div>
          <div className="h-max w-1/2 flex">
            <img
              className="drop-shadow-xl drop-shadow-black/20"
              src="./assets/disme.webp"
            />
          </div>
        </div>
      </div>
      <div className="flex grow gap-10 w-full box-border p-12 max-h-svh pointer-events-none snap-start">
        <div className="grid grid-cols-3 gap-10 w-auto">
          <div className=" text-white text-xl w-full flex flex-col backdrop-blur-xs p-12 backdrop-opacity-90 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-scroll shadow-xl pointer-events-auto">
            <h3 className="mb-10 text-5xl font-bold underline decoration-pink-500">
              Music
            </h3>
            <p className="mb-10">
              - I am the biggest drum one trick ever. I've played drums fairly
              regularly since I was 3, and have done weekly lessons since I
              turned 5. I can <i className="mr-1">kinda</i> play piano, bass and
              guitar... at a very beginner level.
            </p>
            <p className="mb-10">
              - It took until yr5 before I started listening to music, and yr7
              to gain an inkling of taste. I started playing FNF and Osu mania
              in yr8 and it took a year before I started listening to other
              songs. My taste is pretty different now...
            </p>
            <p className="mb-10">
              - My obession with vgm/osts, drove me to try make my first songs,
              the main one being Ror2. Shoutout to Cadence Hira and 8-bit Music
              Theory. They were my main sources of music theory at the time. For
              reference I barely knew what a scale was.
            </p>
            <p>
              - I looked at FL because every digicore 808 spamming rapper uses
              it, but chose Reaper due to the GOAT Kenny Gioia, and the fact it
              was 'free'. Ive grown to love reapertips' theme and Reapack, a
              huge collection of user made js plugins, some of which are SUPER
              cool. Reaper &gt; Ableton.
            </p>
          </div>
          <div className=" text-white text-xl w-full flex flex-col backdrop-blur-xs p-12 backdrop-opacity-90 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-scroll shadow-xl pointer-events-auto">
            <h3 className="mb-10 text-5xl font-bold underline decoration-pink-500">
              Art
            </h3>
            <p className="mb-6">
              - I was quite the drawer as a child, doesn't mean I was good
              though. I could draw things that mostly looked like 'the thing',
              but good luck at anything remotely 3d.
            </p>
            <p className="mb-6">
              - Starting in covid (yr7) I decided to try get better at art,
              partly for enjoyment and partly cause I thought being good at
              drawing was cool. Considering I never learnt 'the right way' im
              confused how my past self managed to get though the awkward phase
              for me, but good for him.
            </p>
            <p className="mb-6">
              - I did an <i>Intro to fine arts</i> course via the YES program at
              TAFE in yr 10, very cool. Got to use ink, pastels, and gouache,
              none of which I used before. I also HATE water soluble paints.
            </p>
            <p>
              - Yr 11 I got my <i>Wacom One medium</i> drawing tablet and
              starting using krita, a free and open source drawing software. I
              really wanted to transfer to digital art because it let me draw
              how I wanted to, something about traditional left me wanting more.
              I can confidently say that the change to digital has greatly
              helped in the development of my style.
            </p>
          </div>
          <div className=" text-white text-xl w-full flex flex-col backdrop-blur-xs p-12 backdrop-opacity-90 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-scroll shadow-xl pointer-events-auto">
            <div className="flex flex-col gap-4 mb-10">
              <h3 className="text-5xl font-bold underline decoration-pink-500">
                Hobbies
              </h3>
            </div>
            <p className="mb-6">
              - SOCCER. Was a one trick left wing player, but have now graduated
              to the left side of the field. I know, fantastic. Im definitely
              more of a team player than a hog cause I've got pretty terrible
              skills.
            </p>
            <p className="mb-6">
              - BASEBALL. I pitch and play center field. Recently moved from
              Senior league to the Adults div 6 team, and they already have
              quite the pitcher so I've been the main center fielder. I don't
              know what makes me good at it, I just am. Theres also a lack of
              options (this is an old team) so Im not surprised either.
            </p>
            <p className="mb-6">
              - GAMES. Oh boy I could talk about games all day. Ive been a Zelda
              fan since I was like 10, and now im starting to love the Resident
              Evil series. Something about games just feel so amazing. 'Duh
              thats their job you dummy.' Yea I get that, but theres just something about the art and music really resonate with me. I will force myself to stop here. <a className="text-sm cursor-target cursor-none hover:text-pink-500" href="https://steamcommunity.com/id/FlaccidPankace">(Check out my steam)</a>
            </p>
            <p>
              - SHOWS. I watch shome shows. Mostly animated since I love art (we know this now). I gotta say I love JJK and JJBA, but I also hold Frieren and Arcane up there. Id watch edgerunners but its too sad, and anyone who loves cool fights watch Promare PLEASE. 
            </p>
          </div>
          <img
            className="w-full h-auto object-cover object-center min-w-0 min-h-0 overflow-hidden box-border"
            src="./assets/me.webp"
            alt="mibombo"
          />
          <img
            className="w-full h-auto object-cover object-center min-w-0 min-h-0 overflow-hidden box-border"
            src="./assets/beachcrop.webp"
            alt="mibombo"
          />
          <img
            className="w-full h-full object-cover object-center min-w-0 min-h-0 overflow-hidden box-border"
            src="./assets/celeste.webp"
            alt="mibombo"
          />
        </div>
      </div>
    </>
  );
}
