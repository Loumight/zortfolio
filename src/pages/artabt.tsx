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
      <h3 className="mb-10 text-3xl font-bold underline decoration-pink-500">
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
      <h3 className="mb-10 text-3xl font-bold underline decoration-pink-500">
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
      <h3 className="mb-10 text-3xl font-bold underline decoration-pink-500">
        My Art Timeline
      </h3>
      {/* Timeline 1 */}
      <Timeline orientation="horizontal" className="mb-20" defaultValue={3}>
        {[
          { id: 1, date: "2014", title: "Started Drawing", description: "Yea just started drawing, nothing special. I remember constantly drawing in after school care, and having a weird obsession with making everything symetrical." }, 
          { id: 2, date: "2021", title: "Year 7 x Covid", description: <div>Having proper art classes and realising I kinda sucked, my passion in art reignited. Covid gave us a lot of home time and so I decided to <i>try</i> learn to draw."</div> },
          { id: 3, date: "2024", title: "Current", description: "Continuously creating and evolving" },
        ].map((item) => (
          <TimelineItem key={item.id} step={item.id}>
            <TimelineHeader>
              <TimelineSeparator/>
              <TimelineIndicator/>
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle className="mb-6">{item.title}</TimelineTitle>
            </TimelineHeader>
            <TimelineContent>{item.description}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
            {/* Timeline 2 this is totally not efficient lol */}
      <Timeline orientation="horizontal" className="mb-20" defaultValue={5}>
        {[
          { id: 4, date: "2024", title: "Milestone", description: "Kept pushing my craft" },
          { id: 5, date: "2024", title: "Growth", description: "Never stopped improving" },
          { id: 6, date: "2024", title: "Now", description: "Creating better art every day" },
        ].map((item) => (
          <TimelineItem key={item.id} step={item.id}>
            <TimelineHeader>
              <TimelineSeparator/>
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle className="mb-6">{item.title}</TimelineTitle>
              <TimelineIndicator/>
            </TimelineHeader>
            <TimelineContent>{item.description}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
            <h3 className="mb-10 text-3xl font-bold underline decoration-pink-500">
        My Art Timeline
      </h3>
    </div>
  );
}
