interface CardInfo {
    image: string
    title: string
    desc: string
}

export default function Card({ image, title, desc }: CardInfo ) {
  return (
      <div className="flex flex-col overflow-hidden rounded-xl shadow-xl/20 cursor-pointer hover:scale-101 transition-transform duration-100 pointer-events-auto">
       <div className="h-100 shrink-0 bg-cover bg-center animate-reveal"
       style={{ backgroundImage: `url(${image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRgxEs21jj0ypis_a-LfBvqZtIeDBeqOzvVIgcKf4Bw&s=10"})` }}
       />
        <div className="flex-1 flex-col text-white text-lg p-4 backdrop-blur-xs backdrop-opacity-90 animate-reveal">
          <p className="mb-6 text-2xl font-bold">
            {title}
          </p>
          <p>
           {desc}
          </p>
        </div>
       </div>
  );
}  