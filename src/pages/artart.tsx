import Card from "./artcard"

export default function ArtArtContent() {
    return (
        <div className="pointer-events-auto grid grid-cols-[repeat(auto-fit,minmax(max(20%,400px),1fr))] auto-rows-[minmax(500px,auto)] gap-4">
          <Card
            image="./src/assets/beech.png"
            title="Cool resort"
            desc="One of the first digital drawings I did, never really drew the environment so I wanted to try it out."
          />

          <Card
            image="./src/assets/bobby.webp"
            title="Bob Ross - one brush"
            desc="The gang all had 1 random brush each and we had to follow the same Bob Ross tutorial. This took like 45 mins?"
          />

          <Card
            image="./src/assets/grillem.webp"
            title="A dude"
            desc="Originally a two tone study, I watched a Pikat vid and thought I'd try out something similar to her quick renders."
          />

          <Card
            image="./src/assets/pluh.png"
            title="Cool woman"
            desc="One of my earliest drawings, I started using layers here - though quite ineffectively lol. Entire thing was drawn via colour picking and an opaque square brush."
          />

          <Card
            image="./src/assets/disme.webp"
            title="MI BOMBO CLAT"
            desc="if this works im super cool"
          />

          <Card
            image="./src/assets/crine.webp"
            title="MI BOMBO CLAT"
            desc="if this works im super cool"
          />

          <Card
            image="./src/assets/person.webp"
            title="MI BOMBO CLAT"
            desc="if this works im super cool"
          />
                    <Card
            image="./src/assets/twotone.webp"
            title="MI BOMBO CLAT"
            desc="if this works im super cool"
          />
                    <Card
            image="./src/assets/ogbw.webp"
            title="MI BOMBO CLAT"
            desc="if this works im super cool"
          />
        </div>
    )
}
