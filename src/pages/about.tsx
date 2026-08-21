// ArtContent.tsx
export default function AboutContent() {
  return (
    <>
      <div className="flex grow gap-10 w-full box-border p-12 h-[calc(100vh-140px)] pointer-events-auto flex-col md:flex-row ">
        <div className=" text-white text-xl w-[50%] flex flex-col justify-center backdrop-blur-xs p-12 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-auto">
          {/*abt*/}
          <h3 className="mb-10 text-5xl font-bold">Hey there!</h3>
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

          <p className="mb-6 text-3xl font-bold">Overview of my interests:</p>
          <p className="mb-6">Sports - Mainly soccer and baseball</p>
          <p className="mb-6">
            Music - Composing, microtonal music, perfoming on the drums
          </p>
          <p className="mb-6">
            Art - Drawing, character design, deisgning my own website
            <i>*cough*</i>
          </p>
          <p className="mb-6">
            Games - Playing them, creating them, everything about them
          </p>
          <p className="text-3xl font-bold">
            Scroll down for more about my music and art!
          </p>
        </div>

        <div className="flex flex-row w-[50%]">
          <img
            className="h-full w-full object-contain object-center"
            src="./src/assets/pluh.png"
          />
        </div>
      </div>
      <div className="flex grow gap-10 w-full box-border p-12 max-h-svh pointer-events-auto">
        <div className="grid grid-cols-3 gap-10 w-auto">
          <div className=" text-white text-xl w-full flex flex-col backdrop-blur-xs p-12 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-scroll">
            <h3 className="mb-10 text-5xl font-bold">Music</h3>
            <p className="mb-6">
              I am the biggest drum one trick ever. I've played drums fairly
              regularly since I was 3, and have done weekly lessons (during the
              school term) since I turned 5.
            </p>
            <p className="mb-6">
              It took until yr5 before I started willingly listening to music,
              and only started seeking out music once I started playing rhythm
              games in yr7. In yr10 I transcribed and played Whiplash by Hank
              Levy, which then became one of my solo perfomances in yr11. During
              this time I experimented with noteflight (the website I used to
              transcribe Whiplash) and trying to compose, and it evolved from
              there.
            </p>
            <p>
              My obession with vgm/osts, specifically I use reaper daw and a
              heavy amount of FREE vsts and a midi piano to make music. I can
              play a basic level of piano and even less on bass and guitar, but
              try subsidise it with decent music theory ):
            </p>
          </div>
          <div className=" text-white text-xl w-full flex flex-col backdrop-blur-xs p-12 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-scroll">
            <h3 className="mb-10 text-5xl font-bold">Art</h3>
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
          <div className=" text-white text-xl w-full flex flex-col backdrop-blur-xs p-12 backdrop-opacity-70 border-[hsl(120,20%,5%)]/20 border-4 overflow-y-scroll">
            <h3 className="mb-10 text-5xl font-bold">General</h3>
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
            <p className="mb-18">
              Yr 11 I got my <i>Wacom One medium</i> drawing tablet and starting
              using krita, a free and open source drawing software. I really
              wanted to transfer to digital art because it let me draw how I
              wanted to, something about traditional left me wanting more. I can
              confidently say that the change to digital has greatly helped in
              the development of my style.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

