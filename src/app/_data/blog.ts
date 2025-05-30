import { Blogs } from "../_types";

export const blogs: Blogs[] = [
  {
    title: "Building My Blog",
    date: "April 19, 2025",
    desc: "Instead of hardcoding everything or setting up a full CMS, I went with a simple but effective approach: Here is how I built it using Typescript and JSON",
    slug: "building-my-blog-section",
    sections: [
      {
        title: "The Blog Type",
        desc: "Each blog post has a slug (used in the URL), a title, a short description, and an array of sections. Each section can include a heading, paragraph, image, and a link for extra resources. This way, I can break up a blog post into readable chunks and add media or references where needed.",
        link: "https://codefile.io/f/PujHXjc7ys",
        linkText: "Here is the code snippet to the Blog type I defined",
        img: "https://github.com/YashwantHabib/Weather-App/raw/main/BlogType.png",
      },
      {
        title: "The JSON Data",
        desc: "Rather than write my blog content in raw JSX or Markdown, I chose to structure it in JSON for simplicity and reusability. With this structure, I can import or fetch this JSON into my frontend, validate it against the Blog type, and render it dynamically.",
        link: "https://codefile.io/f/SVds43sVyO",
        linkText: "Here is the code snippet to the example Json Data",
        img: "https://github.com/YashwantHabib/Weather-App/raw/main/BlogJson.png",
      },
      {
        title: "Rendering the Blog",
        desc: "It is super flexible—if a section does not have a link or image, it just skips that part. And I get full type safety thanks to TypeScript.",
        link: "https://codefile.io/f/O1L1NKERFa",
        linkText: "Here's the code snippet on how I rendered these sections",
        img: "https://github.com/YashwantHabib/Weather-App/raw/main/BlogreRender.png",
      },
      {
        title: "Final Thoughts",
        desc: "This setup is great for personal projects or blogs that do not need complex CMS features. It is fast, lightweight, and developer-friendly. Plus, having everything typed makes the code way more maintainable in the long run. If you're looking to build a blog without the overhead of a CMS, this might just be your jam.",
      },
    ],
  },
];
