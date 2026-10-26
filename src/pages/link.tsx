interface linkinfo {
    link: string
    title: string
}

export default function Link({ link, title }: linkinfo ) {
  return (
       <a
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="text-pink-500 pointer-events-auto cursor-target cursor-none whitespace-nowrap font-bold hover:underline decoration-pink-500"
       >
         {title}
       </a>
  );
}  