export type Project = {
  title: string;
  description: string;
  longDesc: string;
  tech: string[];
  year: string;
  LiveLink?: string;
  GitLink?: string;
  image?: string;
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  description: string;
};

export type Intro = {
  name: string;
  title: string;
  location: string;
  taglineStart: string;
  taglineStrike: string;
  taglineEnd: string;
  stack: string[];
};

export type Blogs = {
  slug: string;
  title: string;
  date: string;
  desc: string;
  sections: {
    title?: string;
    desc?: string;
    link?: string;
    linkText?: string;
    img?: string;
  }[];
};
