// ArtContent.tsx
export default function AboutContent() {
  return (
    <>
      <div className="flex grow gap-10 w-full box-border p-12 h-[calc(100vh-140px)] pointer-events-auto flex-col md:flex-row">
        <div className="w-[50%] flex place-items-center backdrop-blur-xs backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4">
          <div className="w-full max-h-full overflow-y-auto text-white text-xl flex flex-col p-12">
            {/*abt*/}
            <h3 className=" mb-10 text-5xl font-bold"><span className="highlighter px-6 py-2">Hey there!</span></h3>
            <p className="mb-6">
              Im Josh, a 2026 graduate of SSHS with a passion for art and music
              (and games). You can check out my work in my music and art
              portfolios.
            </p>
            <p className="mb-10">
              I've been learning to code for fun, and made this portfolio by
              myself. I have used some ai as assistance in learning, but
              everything is coded by me.
            </p>

            <p className="mb-6 text-3xl font-bold"><span className="highlighter px-6 py-2">Overview of my interests:</span></p>
            <p className="mb-6">
            Sports - Mainly soccer and baseball
            </p>
            <p className="mb-6">
              Music - Composing, perfoming on the drums (other instruments in the future?)
            </p>
            <p className="mb-6">
              Art - Drawing, character design, designing my own website <i>*cough*</i>
            </p>
            <p className="mb-6">
              Games - Playing them, creating them, everything about them
            </p>
            <p className="text-3xl font-bold underline decoration-pink-500">
              Scroll down for more about my music and art!
            </p>
          </div>
        </div>
        <div className="flex flex-row w-[50%]">
          <img
            className="h-full w-full object-contain object-center"
            src="./src/assets/pluh.png"
          />
        </div>
      </div>
      <div className="flex grow gap-10 w-full box-border p-12 max-h-svh pointer-events-auto snap-y snap-proximity">
        <div className="grid grid-cols-3 gap-10 w-auto">
          <div className=" text-white text-xl w-full flex flex-col backdrop-blur-xs p-12 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-scroll">
            <h3 className="mb-10 text-5xl font-bold underline decoration-pink-500">Music</h3>
            <p className="mb-6">
              I am the biggest drum one trick ever. I've played drums fairly
              regularly since I was 3, and have done weekly lessons (during the
              school term) since I turned 5.
            </p>
            <p className="mb-6">
              It took until yr5 before I started willingly listening to music,
              and only started seeking out music once I started playing rhythm
              games in yr7. In yr10 I transcribed and played Whiplash by Hank
              Levy, as my term project. During this time I experimented with
              noteflight (the website I used to transcribe Whiplash) and trying
              to compose, and it evolved from there.
            </p>
            <p className="mb-6">
              My obession with vgm/osts, drove me to try make my first songs,
              main one being Ror2. Various Yt channels like Cadence Hira and
              8-bit Music Theory serve as inspo and were the first people I
              watched to start learning theory. Since I never learnt any pitched
              intruments I kinda neeed music theory to start doing stuff.
            </p>
            <p>
              I looked at FL because every digicore 808 spamming rapper uses it
              (which also means theres a million tutorials), but found Reapers
              community more appealing and QUALITY tutorials which far outweigh
              the sheer volume of fl ones. Its super customiseable (reapertips
              theme!) and also has Reapack, a huge collection of user made js
              plugins, some of which are SUPER cool. Reaper &gt; Ableton.
            </p>
          </div>
          <div className="text-white text-xl w-full min-h-0 flex flex-col backdrop-blur-xs p-12 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-auto box-border">
            <h3 className="mb-10 text-5xl font-bold underline decoration-pink-500">Art</h3>
            <p className="mb-6">
              I was quite the drawer as a child, doesn't mean I was good though.
              I could draw things and you could recognise that a thing is a
              thing, but good luck at anything remotely 3d.
            </p>
            <p className="mb-6">
              Starting in covid (yr7) I decided to try get better at art, partly
              for enjoyment and partly cause I thought being good at drawing was
              cool. Considering I never learnt 'the right way' im confused how
              my past self managed to get though the awkward phase for me, but
              I'll take it.
            </p>
            <p className="mb-6">
              I did an intro to fine arts via the YES program at TAFE in yr 10,
              very cool. Got to use ink, pastels, and gouache, none of which I
              used before. I tried water soluble paint but im so attrociously
              impatient and bad at them its scarred me for life.
            </p>
            <p>
              Yr 11 I got my <i>Wacom One medium</i> drawing tablet and starting
              using krita, a free and open source drawing software. I really
              wanted to transfer to digital art because it let me draw how I
              wanted to, something about traditional left me wanting more. I can
              confidently say that the change to digital has greatly helped in
              the development of my style.
            </p>
          </div>
          <div className="text-white text-xl w-full min-h-0 flex flex-col backdrop-blur-xs p-12 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-auto box-border">
            <div className="flex flex-col gap-4 mb-10">
              <h3 className="text-5xl font-bold underline decoration-pink-500">Hobbies</h3>
            </div>
            <p className="mb-6">
              Always loved games, but even moreso now that I can truly
              appreciate the art and music. I can list of so many great games
              Oot, Totk, Ultrakill, Ror2, the list goes on. Over the past years
              with my projects where i spend a significant amount of time trying
              to make something, only for it to be 'good enough' it puts these
              games Id describe as masterpieces on a whole new level.
            </p>
            <p className="mb-6">
              I would love to make my own game, but more realistically I'd love
              to compose an ost or do some character/environment design. I
              looked at game dev degrees and a lot of them teach basic design
              principals, but you're really only graded on your code. Maybe I
              could become a one man army :0. Im sure wherever I go I'll be able
              to incorporate my interests into them.
            </p>
            <p className="mb-6">
              Now onto sports, I've played baseball for about 11 years now, and
              8 for soccer. Theres not a whole lot I can really talk about -
              unless you want to talk about baseball technique... Soccer (or
              should I say football) is such a fluid game, the only thing you
              can really discuss is macro, positional theory. Skills are just
              drilled until its second nature, ive never been taught 'the right
              form'.
            </p>
            <p>
              Quick rundown of what I do, I pitch or play centre field in
              baseball, and I've been a left wing one trick for ages in soccer,
              but now I just play the left side in general. Pitching is a whole
              thing, dont get me started, but centre field is fun (just dont
              drop the ball). For soccer im definitely more of a positional
              player than baller. I usually lurk wide as a cross option, or to
              drag defence away - I got hella tuff crosses.
            </p>
          </div>
          <img
            className="w-full h-full object-fill object-center min-w-0 min-h-0 overflow-hidden box-border"
            src="./src/assets/grillem.webp"
            alt="mibombo"
          />
          <img
            className="w-full h-full object-cover object-center min-w-0 min-h-0 overflow-hidden box-border"
            src="./src/assets/disme.webp"
            alt="mibombo"
          />
          <img
            className="w-full h-full object-cover object-center min-w-0 min-h-0 overflow-hidden box-border"
            src="./src/assets/crine.webp"
            alt="mibombo"
          />
        </div>
      </div>
    </>
  );
}
