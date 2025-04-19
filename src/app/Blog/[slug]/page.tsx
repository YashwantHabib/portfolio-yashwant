import { blogs } from "@/app/_data/blog";
import { notFound } from "next/navigation";
import { Link as LinkIcon } from "lucide-react";

type Props = {
  params: { slug: string };
};

export default function BlogPost({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="py-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-lg text-stone-100 mb-2">{blog.title}</h1>
      <p className="text-xs text-stone-500 mb-6">{blog.date}</p>

      {blog.sections.map((section, index) => (
        <div key={index} className="mb-8">
          {section.title && (
            <h2 className="text-sm text-stone-100 underline decoration-wavy decoration-stone-600 mb-2 hover:decoration-stone-400">
              {section.title}
            </h2>
          )}
          {section.desc && (
            <p className="text-xs text-stone-400 mb-2">{section.desc}</p>
          )}
          {section.link && section.linkText && (
            <a
              href={section.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-xs underline inline-flex items-center gap-1"
            >
              {section.linkText} <LinkIcon className="w-4 h-4" />
            </a>
          )}
          {section.img && (
            <img
              src={section.img}
              alt={section.title}
              className="rounded-md my-4 w-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}
