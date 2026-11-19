import Link from "./link";

export default function MAboutContent() {
  return (
    <div className="animate-reveal w-full flex backdrop-blur-xs backdrop-opacity-90 border-[hsl(120,20%,5%)]/20 border-4 text-xl text-white shadow-xl flex-col p-12">
      <div className="flex flex-col min-h-0 mb-20 justify-center items-baseline">
        <h3 className="text-5xl font-bold flex justify-center w-full">
          <span className="highlighter px-12 py-4">
            Welcome to my music portfolio! Page not done.
          </span>
        </h3>
        <div className="font-light text-sm flex justify-center w-full">
          <p>My love hate relationship with music is that I'll never be as good as the artists I admire.</p>
        </div>
      </div>
      <h3 className="mb-10 text-3xl font-bold underline decoration-pink-500">
        Why do I make music?
      </h3>
      {/*What on earth are these {" "} things bro */}
      <p className="mb-6">
        Real quick, some of my answers will reference or compare to my art
        portfolio's answers so I DO recommend to read that first, but it's not
        necessary. My answer to this question is very similar to why I make art.
        Wanting to make something that makes people go{" "}
        <i>'Damn I wish I could make that'</i>. I want to leave an impression of
        awe - and a bit of jealousy (In a good way), like how I hold Louis Cole
        or Yoshimasa Terui.
      </p>
      <p className="mb-10 font-bold">
        "A lot of times I’ll sit down at a piano and I’ll just sound really
        stupid. It’s like a mysterious world to me every time. I think it’s
        actually helped me as opposed to hurt me." - Louis Cole
      </p>
      <h3 className="mb-10 text-3xl font-bold underline decoration-pink-500">
        Who or what inspires me?
      </h3>
      <p className="mb-6 pointer-events-auto">
        I'd say im a pretty picky listener. Im quite selective in what I listen to, but whatever I like will never be forgotten. My new 'ideas' are really just ripoffs of things I've heard. Video games are a big part, but my insta is riddled with music so sometimes I'll just hear the craziest ideas. Im also always watching Youtubers like {" "}
        <Link
        link="https://www.youtube.com/cadencehira"
        title="Cadence Hira "
        />
        who talk about the craziest things, but of course I have to mention my favourites like:
      </p>
      <div className="mb-20 grid grid-cols-3 gap-6 h-auto max-h-200">
        <div className="h-auto">
          <p className="mb-6">
            The entire Zelda franchise (once again) cause its the best series
            EVER. OoT and BotW/TotK have some BANGERS, but I also love the music
            from Twilight Princess and Skyward Sword.
          </p>
        </div>
        <div className="h-auto">
          <p className="mb-6">
            My favourite artists like: Louis Cole, Yoshimasa Terui,
            Haisuinonasa, and DM Dokuro. There's also youtubers like Cadence Hira, 8-bit music, and Levi McClain.
          </p>
        </div>
        <div className="h-auto">
          <p className="mb-6">
            Games such as Ror2, Celeste, Pseudoregalia, Neon White, and
            Deltarune. Same deal with the artists, there's too many to list.
            (You'll also find a huge overlap between the games that inspire my
            art and music)
          </p>
        </div>
        <div className="w-full h-full flex min-h-0 items-end">
          <img
            className="rounded-lg max-w-full max-h-full object-contain"
            src="./assets/orchestra.webp"
            alt="pluh"
          />
        </div>
        <div className="w-full h-full flex min-h-0 items-end">
          <img
            className="rounded-lg max-w-full max-h-full object-contain"
            src="./assets/louis.webp"
            alt="pluh"
          />
        </div>
        <div className="w-full h-full flex min-h-0 items-end">
          <img
            className="rounded-lg max-w-full max-h-full object-contain"
            src="./assets/moment.webp"
            alt="pluh"
          />
        </div>
      </div>
      <h3 className="mb-10 text-3xl font-bold underline decoration-pink-500">
        My art timeline
      </h3>
      <p className="mb-6"></p>
      <h3 className="mb-10 text-3xl font-bold underline decoration-pink-500">
        What's the setup?
      </h3>
      <p className="mb-6"></p>
    </div>
  );
}
