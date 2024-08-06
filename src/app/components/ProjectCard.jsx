import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
    const slug = project.category.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="group border leading-loose p-7">
      <Link href={`/blog/${project.title.split(' ').join('-')}`}>
        <div className="text-center">
          <button className="relative h-auto w-28 text-center rounded-md text-white bg-black">
            {project.category}
          </button>
        </div>
        <div>
          <Image
            src={project.image}
            width={200}
            height={400}
            alt={project.title}
            className="group-hover:scale-110 w-full h-52 transition-transform duration-300 overflow-hidden object-cover"
          />
        </div>
        <div className="text-center mt-2">
          <span>{project.title}</span>
        </div>
      </Link>
    </div>
  );
}
