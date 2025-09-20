import { Project } from "../_types";

export const projects: Project[] = [
  {
    title: "Inkline",
    description:
      "A sleek news app that delivers real-time updates from various RSS feeds.",
    longDesc:
      "This project is a responsive news aggregation app built using RSS feeds. It fetches and displays articles from multiple sources, categorizes news by topic, and provides a clean, user-friendly interface for reading headlines. The app is designed for speed and readability, with a focus on real-time content delivery using public RSS APIs.",
    tech: ["ReactNative", "RSS Feed APIs"],
    year: "2025",
    LiveLink:
      "https://drive.google.com/file/d/1TU-EROBitjTY70hQqZGHPpgK-TNXiq0K/view?usp=sharing",
    GitLink: "https://github.com/YashwantHabib/Inkline",
    image:
      "https://github.com/YashwantHabib/Inkline/blob/main/screenshots/Inkline_Screenshot.jpg?raw=true",
  },

  {
    title: "Climo",
    tech: ["React Native"],
    description:
      "What if you could play the daily weather like you play a song?",
    longDesc:
      "Climo is a unique weather experience — a React Native app that lets users explore live weather data. Use the intuitive slider to visualize weather transitions as you play your favorite tracks.",
    year: "2025",
    GitLink: "https://github.com/YashwantHabib/Climo",
    LiveLink:
      "https://drive.google.com/file/d/1DmuSDh1slrSp1ISgKKKJi5au52DiaFC9/view?usp=sharing",
    image:
      "https://github.com/YashwantHabib/Climo/blob/main/screenshots/Climo_SS.jpg?raw=true",
  },
  {
    title: "Promptify",
    tech: ["React", "Supabase", "Tailwind CSS"],
    description:
      "A full-stack platform where users can create, share, and manage prompts with images, featuring likes, copy tracking, and secure Supabase-based authentication and storage.",
    year: "2025",
    longDesc:
      "An interactive prompt-sharing app where users can upload images, like, and copy prompts, with a clean UI and seamless Supabase integration for authentication and storage.",
    image:
      "https://github.com/YashwantHabib/PromptHub/blob/main/screenshots/Desktop.png?raw=true",
    LiveLink: "https://promptify99.vercel.app/",
    GitLink: "https://github.com/YashwantHabib/Prompt-Hub",
  },
  {
    title: "FarmEase",
    tech: ["React", "MongoDB", "Python", "Machine Learning"],
    description:
      "A web app that helps farmers detect crop diseases using a custom image model, view weather forecasts and more",
    year: "2025",
    longDesc:
      "FarmEase is a full-stack web platform designed to empower farmers with tools, knowledge, and connections. From crop disease detection to accessing government schemes and connecting with suppliers, FarmEase is a digital ally for modern agriculture.",
    image:
      "https://github.com/YashwantHabib/Farm-Ease-Disease-Detection-Web/raw/main/screenshots/FarmEase.png",
    GitLink: "https://github.com/YashwantHabib/Farm-Ease-Disease-Detection-Web",
  },
  {
    title: "Image Editor",
    tech: ["Python", "OpenCV"],
    description:
      "A lightweight, local image editor built using Python and OpenCV.",
    year: "2024",
    GitLink: "https://github.com/YashwantHabib/Image-Editor",
    longDesc:
      "Image Editor is a local Python-based tool that allows users to apply powerful image processing features using an intuitive GUI. Built with OpenCV, it provides a lightweight and fast image editing experience for simple tasks.",
    image:
      "https://github.com/YashwantHabib/Image-Editor/raw/main/image-editor-ss.png",
  },
];
