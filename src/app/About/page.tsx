import React from "react";
import { aboutData } from "../_data/aboutData";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import SwipeWrapper from "../_components/SwipeWrapper";

export default function About() {
  return (
    <SwipeWrapper>
      <section className=" py-20">
        <h2 className="text-lg mb-8 text-stone-100">About Me</h2>

        {/* Intro */}
        <Section title={aboutData.intro.heading}>
          <p>{aboutData.intro.content}</p>
        </Section>

        {/* Tech Stack & Projects */}
        <Section title={aboutData.tech.heading}>
          <div className="mb-4">
            {aboutData.tech.stack.map((item, idx) => (
              <div key={idx} className="mb-2">
                <strong>{item.category}:</strong> {item.tools.join(", ")}
              </div>
            ))}
          </div>
          <ul className="list-disc list-inside mx-4 space-y-1">
            {aboutData.tech.projects.map((proj, idx) => (
              <li key={idx}>{proj}</li>
            ))}
          </ul>
          <Link
            className="text-stone-500 block text-xs text-right hover:text-stone-400"
            href="/Projects"
          >
            View Projects -{">"}
          </Link>
        </Section>

        {/* Creative Side */}
        <Section title={aboutData.creative.heading}>
          <p className="mt-2">{aboutData.creative.note}</p>
          <ul className="list-disc list-inside mx-4 my-2">
            {aboutData.creative.activities.map((act, idx) => (
              <li key={idx}>
                {act}{" "}
                {act.includes("Instagram") ? (
                  <a
                    href={aboutData.creative.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        {/* Goals */}
        <Section title={aboutData.goals.heading}>
          <p>{aboutData.goals.content}</p>
          <ul className="list-disc list-inside mx-4 space-y-1 mt-2">
            {aboutData.goals.interests.map((interest, idx) => (
              <li key={idx}>{interest}</li>
            ))}
          </ul>
        </Section>

        {/* Fun Fact */}
        <Section title={aboutData.funFact.heading}>
          <p>{aboutData.funFact.content}</p>
        </Section>
      </section>
    </SwipeWrapper>
  );

  function Section({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="mb-10">
        <h3 className="text-sm text-stone-100 underline decoration-wavy decoration-stone-600 mb-2 hover:decoration-stone-400">
          {title}
        </h3>
        <div className="text-xs text-stone-500">{children}</div>
      </div>
    );
  }
}
