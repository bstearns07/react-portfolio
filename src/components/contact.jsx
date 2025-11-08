import React from "react";
import GlassIcons from "./GlassIcons";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const items = [
    {
      icon: <FiLinkedin />,
      color: "blue",
      label: "LinkedIn",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/ben-stearns-474261283/",
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      icon: <FiGithub />,
      color: "gray",
      label: "GitHub",
      onClick: () =>
        window.open(
          "https://github.com/bstearns07",
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      icon: <FiFacebook />,
      color: "blue",
      label: "Facebook",
      onClick: () =>
        window.open(
          "https://www.facebook.com/?ref=tn_tinyman",
          "_blank",
          "noopener,noreferrer"
        ),
    },
  ];
  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-slate-700 mb-8">
          Interested in working together? Reach out via email:{" "}
          <a href="mailto:bstearns07@gmail.com" className="text-sky-600">
            bstearns07@gmail.com
          </a>
        </p>

        <GlassIcons items={items} className="w-full" />
      </div>
    </section>
  );
}
