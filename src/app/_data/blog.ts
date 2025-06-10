import { Blogs } from "../_types";

export const blogs: Blogs[] = [
  {
    title: "How I Built Inkline: A React Native News App",
    date: "June 10, 2025",
    desc: "Inkline is a sleek, mobile-first news app built with React Native. Here's how I brought it to life—from the tech stack and design decisions to challenges and lessons learned.",
    slug: "building-inkline-react-native",
    sections: [
      {
        title: "Why I Built Inkline",
        desc: "I wanted a personal news app with a clean UI, reliable news sourcing, and offline capability for quick skimming. None of the existing apps gave me exactly what I wanted—so I built it myself using React Native.",
      },
      {
        title: "Tech Stack Overview",
        desc: "The app was built with React Native, using RSS feeds to fetch news, React Navigation for routing, and WebView to render full articles inside the app. I used Gradle to build APKs and test directly on Android devices.",
      },
      {
        title: "Key Features",
        desc: "- News feed UI with clean typography\n- WebView to open full articles in-app\n- Responsive layout with scrollable article cards\n- Custom app icon\n- Fully functional APK build to install and share",
      },
      {
        title: "Challenges I Faced",
        desc: "RSS integration required extra parsing logic. Changing the app icon didn’t reflect immediately due to cache issues. Debugging WebView crashes and optimizing FlatList rendering were also time-consuming.",
      },
      {
        title: "Screenshots & Demo",
        desc: "Here's how the app looks on a real device. You can see the main feed, WebView article, and minimal design focus.",
        img: "https://github.com/YashwantHabib/Inkline/blob/main/screenshots/Inkline_Screenshot.jpg?raw=true",
        link: "https://drive.google.com/file/d/1TU-EROBitjTY70hQqZGHPpgK-TNXiq0K/view?usp=sharing",
        linkText: "Download the APK",
      },
      {
        title: "What I Learned",
        desc: "Building Inkline improved my understanding of React Native's native build process and helped me get comfortable with debugging Android-specific issues. I also refined my design-to-code translation skills.",
      },
      {
        title: "What's Next?",
        desc: "I'm planning to add support for source categories,  and push notifications in the next version.",
      },
      {
        title: "Final Thoughts",
        desc: "Inkline was a passion project that let me explore full-cycle app development—from idea to installable product. It’s a valuable addition to my portfolio and a stepping stone to more complex mobile products.",
      },
    ],
  },
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
