import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";

import Link from "./link";

export default function AAboutContent() {
  return (
    <div className="animate-reveal w-full flex backdrop-blur-xs backdrop-opacity-90 border-[hsl(120,20%,5%)]/20 border-4 text-xl text-white shadow-xl flex-col p-12">
      <div className="flex flex-col min-h-0 mb-20 justify-center items-baseline">
        <h3 className="text-5xl font-bold flex justify-center w-full">
          <span className="highlighter px-12 py-4">
            Welcome to my art portfolio!
          </span>
        </h3>
        <div className="font-light text-sm flex justify-center w-full">
          <p>
            You're actually here for <i className="font-semibold">me?</i> Im so
            honoured
          </p>
        </div>
      </div>
      <h3 className="mb-10 text-4xl font-bold underline decoration-pink-500">
        Why do I make art?
      </h3>
      {/*What on earth are these {" "} things bro */}
      <p className="mb-6">
        Its hard to answer, the same way you just 'kinda like sports cause its
        fun'. There are reasons like finding enjoyment in creating things,
        having a way to express yourself or your ideas, but sometimes I just
        draw beacuse I can. The biggest reason I make art is because I want to
        make the thing that makes people go{" "}
        <i>'damn I wish I thought of that'</i>. Getting the reaction the same
        way I look at my favourite games and go{" "}
        <i>'I wish I could make a design as cool as v1'</i>,{" "}
        <i>'I wish I could create a world as amazing as Totk'</i>.
      </p>
      <p className="mb-20 font-bold">
        "The highest praise a creator can give is the quiet frustration of
        wishing they had thought of it first."
      </p>
      <h3 className="mb-10 text-4xl font-bold underline decoration-pink-500">
        Who or what inspires me?
      </h3>
      <p className="mb-6">
        Inspiration comes from so many things, I wish I acted on it more often.
        Those sparkles in a usually mundane moment - might be the evironement, a
        cool perspective, an interesting outfit, etc. As for those constant
        sources that drive me to continue with my art, they include:
      </p>
      <div className="mb-20 grid grid-cols-3 gap-6 h-auto max-h-200">
        <div className="h-auto">
          <p>
            The entire Zelda franchise cause its the best series EVER, but more
            specifically Oot and Botw/Totk. Not a single piece of media has ever
            come close to the impact these games have had on me.
          </p>
        </div>
        <div className="h-auto">
          <p>
            Various media including: JJK, Frieren, Arcane, and OPM. Theres also
            a lot of inspo constantly coming from pinterest and instagram. I
            dont follow any specific artists, I just kinda save any posts of
            interests.
          </p>
        </div>
        <div className="h-auto">
          <p>
            Games such as Ror2, Ultrakill, Pseudoregalia, ZZZ, Neon White, and
            Deltarune. These aren't all of them, but these stand out for their
            unique style/design that I find inspiring.
          </p>
        </div>
        <div className="w-full h-full flex min-h-0 items-end">
          <img
            className="rounded-lg max-w-full max-h-full object-contain"
            src="./assets/linkus.webp"
            alt="pluh"
          />
        </div>
        <div className="w-full h-full flex min-h-0 items-end">
          <img
            className="rounded-lg max-w-full max-h-full object-contain"
            src="./assets/higi.webp"
            alt="pluh"
          />
        </div>
        <div className="w-full h-full flex min-h-0 items-end">
          <img
            className="rounded-lg max-w-full max-h-full object-contain"
            src="./assets/ultrapeak.webp"
            alt="pluh"
          />
        </div>
      </div>
      <h3 className="mb-10 text-4xl font-bold underline decoration-pink-500">
        My Art Timeline
      </h3>
      {/* Timeline 1 */}
      <Timeline orientation="horizontal" className="mb-20" defaultValue={3}>
        {[
          {
            id: 1,
            date: "2014",
            title: "Started drawing",
            description: (
              <div>
                Started drawing, nothing special. I remember constantly drawing
                in after school care, and having a weird obsession with making
                everything symetrical. I enjoyed the occasional KidsArtHub
                tutorial, but they really only teach you to copy, not draw. I
                was good at art for my age, but nothing spectacular.
              </div>
            ),
          },
          {
            id: 2,
            date: "2019",
            title: "The drawing book",
            description: (
              <div>
                In Year 5 we were allowed to stay inside during recess and
                lunch. Bloons TD 6 came out the previous year and I was super
                into it, so I spent my breaks drawing my own towers. Later that
                year, my parents bought me a{" "}
                <i className="mr-1">How to Draw Superheroes</i> booklet, so I
                started drawing superheroes. Honestly they were pretty terrible
                but a start is a start.
              </div>
            ),
          },
          {
            id: 3,
            date: "2021",
            title: "Year 7 x Covid",
            description: (
              <div>
                Having proper art classes (at school not extracurricular), and
                realising I kinda sucked, I wanted to get better. Covid gave us
                a lot of home time, so I decided to <i className="mr-1">try</i>{" "}
                learn to draw. I can't remember what videos I watched, but I
                think there was a fair amount of Proko TV, Draw like a Sir, and
                various 'how to' anime tutorials.
              </div>
            ),
          },
        ].map((item) => (
          <TimelineItem key={item.id} step={item.id}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineIndicator />
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle className="mb-6">{item.title}</TimelineTitle>
            </TimelineHeader>
            <TimelineContent>{item.description}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {/* Timeline 2 this is totally not efficient lol OR MAYBE IT IS idk */}
      <Timeline orientation="horizontal" className="mb-20" defaultValue={5}>
        {[
          { id: 4, date: "2023", title: "Lock IN", description: <div>I've gotten past the awkward phase, and the art is looking kinda niceee, but for the most part Im still lacking a lot in fundamentals. I can copy a drawing but I don't understand the underlying principles.</div> },
          { id: 5, date: "2025", title: "", description: <div>WE HAVE A WACOM TABLET. New motivation has been unlocked blah blah blah idk. - Start going through my art reneisance? Actually learn fundamentals for a bit, start focusing mroe on motion and gesture than anatomical correctness, start developing my own style yea</div> },
          { id: 6, date: "20__?", title: "The FUtuReeEe", description: <div>Who knows man? I'll always continue to improve. As a hobby? As a side hustle? Only time will tell.</div> },
        ].map((item) => (
          <TimelineItem key={item.id} step={item.id}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle className="mb-6">{item.title}</TimelineTitle>
              <TimelineIndicator />
            </TimelineHeader>
            <TimelineContent>{item.description}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <h3 className="mb-10 text-4xl font-bold underline decoration-pink-500">
        What I use:
      </h3>
      <p className="mb-6">
        I use a {" "}
        <Link
          link="https://estore.wacom.com/en-au/one-by-wacom-medium-ctl-672-k0-cx.html?srsltid=AfmBOoobdiNQGG1GH1hvd0ZdFGpv_sKC_I-U-J0-gMNEJJrsMwQfuQps"
          title="One by Wacom - Medium "
        />
        and the software  {" "}
                <Link
          link="https://krita.org/en/"
          title="Krita "
        />
        to create digital art on my PC. 
      </p>
      <div className="flex flex-row gap-6 items-start mb-20">
      <img
      className="max-h-[35vh] w-auto object-contain"
      src="./assets/wacom.webp"
      alt="Wacom Tablet"
      />
            <img
      className="max-h-[35vh] w-auto object-contain"
      src="./assets/krita.png"
      alt="Krita"
      />
      </div>
      <p className="mb-6">
        Brush wise I really dont use a whole lot, you might see some texture in a couple pieces but those are krita default brushes. The ones I use 99% of the time are:
      </p>
      <div className="flex flex-row gap-12 mb-6">
      <p>
                <Link
          link="https://krita-artists.org/t/concept-illustration-v2/112682"
          title="Concept and Illu v3"
        />    
        {" "}- 99% of my colouring{" "}
      </p>
      <p>
            <Link
          link="https://krita-artists.org/t/gege-akutami-line-brushes/82507/25"
          title="Gege FREE ink brush"
        />   
         {" "}- my 'lineart' or fine detail brush {" "}
      </p>
      <p>
             <Link
          link="https://krita-artists.org/t/version-6-0-of-wojtrybs-wont-teach-you-to-draw-brushpack-relased/13299"
          title="Wojtryb 6"
        />
        {" "}- lasso tool but a brush {" "}
      </p>
      </div>
      <img
      className="max-w-[40vw] w-auto object-contain"
      src="./assets/brushes.png"
      alt="Brushes"
      />
    </div>
  );
}
