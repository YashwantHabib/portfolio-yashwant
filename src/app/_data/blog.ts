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
    title: "Why I Chose React Native Over Flutter in 2025",
    date: "June 11, 2025",
    desc: "With both React Native and Flutter evolving fast, choosing between them in 2025 isn’t easy. Here’s why I picked React Native for my latest projects and what I learned in the process.",
    slug: "why-react-native-over-flutter",
    sections: [
      {
        title: "The Context",
        desc: "While starting my mobile development journey, I had two strong options: Flutter and React Native. Both offered cross-platform support, strong community backing, and UI flexibility. But I had to pick one that best aligned with my goals, speed of development, and long-term usability.",
      },
      {
        title: "Why React Native Fit My Needs",
        desc: "I was already comfortable with JavaScript and React, so the learning curve was much shorter. I didn’t need to learn Dart or Flutter’s widget tree concepts from scratch. I could reuse some logic from my React web apps and felt at home working with familiar tools like useState, useEffect, and async/await.",
      },
      {
        title: "Technical Comparisons That Mattered",
        desc: "React Native gave me a faster prototyping cycle thanks to hot reloading and my existing JavaScript knowledge. Integrating third-party packages—especially native modules—was simpler and more documented. One of my key app features involved rendering external articles, and React Native's WebView implementation was smoother and better supported. In contrast, Flutter felt a bit heavier, especially for smaller projects, and its default setup added more friction than I expected. Additionally, debugging native issues in Flutter required deeper Android Studio knowledge, which wasn’t ideal for my use case at the time.",
      },
      {
        title: "Performance Observations",
        desc: "Flutter tends to have the upper hand when it comes to animation-heavy or highly customized UI applications. But for my use case—primarily focused on displaying news articles, fetching RSS feeds, and opening links in-app—React Native provided perfectly smooth performance. Using FlatList efficiently and minimizing re-renders helped maintain responsiveness even on lower-end devices.",
      },
      {
        title: "Ecosystem & Community",
        desc: "React Native’s mature ecosystem played a huge role. The availability of well-maintained libraries like react-navigation, react-native-vector-icons, and react-native-webview saved me time and effort. Most problems I faced had already been asked—and solved—on StackOverflow or GitHub. While Flutter’s ecosystem is growing rapidly, React Native still feels more stable and production-ready for many common use cases in 2025.",
      },
      {
        title: "Problem I Faced: Native Modules",
        desc: "One challenge I encountered was implementing a native Android share sheet. While React Native had multiple pre-built libraries, I still ran into a permission issue that blocked the functionality. I fixed it by updating the AndroidManifest.xml and adjusting runtime permissions. This experience reminded me how valuable it is to work within a mature framework where most edge cases have solid community solutions.",
      },
      {
        title: "Conclusion",
        desc: "Both Flutter and React Native are excellent choices depending on the project scope and developer familiarity. I chose React Native because it aligned with my experience, project requirements, and allowed me to iterate quickly. It’s helped me ship ideas faster without compromising on UX. For future animation-intensive apps or where design consistency across platforms is critical, I may explore Flutter further—but for now, React Native remains my default for cross-platform development.",
      },
    ],
  },
];
