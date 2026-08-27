import Card from "./artcard";

export default function ArtContent() {
  return (
    <>
        <div className="w-full min-h-0 h-auto pointer-events-none box-border pt-12 pb-12 pr-36 pl-36 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        
        <div className="pointer-events-auto grid grid-cols-[repeat(auto-fit,minmax(max(20%,400px),1fr))] auto-rows-[minmax(500px,auto)] gap-4">
          <Card
            image="./src/assets/beech.png"
            title="MI BOMBO CLAT"
            desc="if this works im super cool"
          />

          <Card
            image="./src/assets/bobby.webp"
            title="MI BOMBO CLAT"
            desc="if this works im super cool"
          />

          <Card
            image="./src/assets/grillem.webp"
            title="MI BOMBO CLAT"
            desc="if this works im super cool"
          />

          <Card
            image="./src/assets/pluh.png"
            title="MI BOMBO CLAT"
            desc="if this works im super cool"
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
        </div>

      </div>
    </>
  );
}
