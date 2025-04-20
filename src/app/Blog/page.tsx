import React from "react";
import { blogs } from "../_data/blog";
import Link from "next/link";
import BackButton from "../_components/BackButton";

export default function Blog() {
  return (
    <div className="flex-1 py-15 relative">
      <BackButton />
      <p className="text-lg text-stone-100">Blogs</p>
      <p className="text-xs text-stone-500">
        Throughout this year, I have worked with various technologies. I&apos;m
        here to share just that.
      </p>
      <div className=" gap-8 mt-12">
        {blogs
          .slice()
          .reverse()
          .map((blog) => (
            <Link key={blog.slug} href={`/Blog/${blog.slug}`}>
              <div
                key={blog.title}
                className="p-2 rounded-lg cursor-pointer hover:bg-zinc-900"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-stone-100 underline decoration-wavy decoration-stone-600 hover:decoration-stone-400">
                    {blog.title}
                  </span>
                  <div className="flex-1 border-t border-stone-700" />
                  <span className="text-xs text-stone-500">{blog.date}</span>
                </div>

                <p className="text-xs text-stone-500">{blog.desc}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
