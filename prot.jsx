import React from "react";
import { Download, Mail, Linkedin, GitHub, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Single-file React component for an internship application profile page
// Tailwind CSS utility classes are used for styling. This file exports a default React component.

export default function InternshipProfilePage() {
  const data = {
    name: "Hari Krishna Garapati",
    phone: "818-193-4999",
    email: "harikrishnag41045@gmail.com",
    linkedin: "https://linkedin.com/in/hari",
    github: "https://github.com/Hari23499",
    education: [
      {
        institution: "National Institute of Technology Agartala",
        degree: "Bachelor of Science in Electronics and Communication Engineering",
        timeframe: "Aug 2023 – May 2027",
        location: "Agartala, Tripura",
      },
      {
        institution: "Sasi Educational Institutions",
        degree: "Senior Secondary (XII)",
        timeframe: "May 2021 – June 2023",
        location: "Velivennu, Andhra Pradesh",
      },
    ],
    experience: [
      {
        role: "Machine Learning Intern",
        company: "National Institute of Technology, Rourkela",
        timeframe: "May 2025 – Present",
        location: "Rourkela, Odisha",
        bullets: [
          "Collaborated with a research team to develop and optimize ML/DL models for stock market prediction.",
          "Used Python, Pandas, NumPy, scikit-learn, and TensorFlow/PyTorch for preprocessing & model building.",
          "Implemented LSTM, ARIMA, and Random Forest models; improved RMSE via hyperparameter tuning.",
        ],
      },
    ],
    projects: [
      {
        title: "Full Stack Ecommerce Platform | MERN",
        desc: "A full-stack ecommerce platform with product search, cart, and user profiles. Improved page performance by 40% using lazy loading.",
        highlights: [
          "React Lazy Loading & image compression — +40% page performance",
          "JWT/bcrypt authentication and role-based access control",
        ],
      },
      {
        title: "Invoice Genie | Full Stack web application",
        desc: "Billing & invoice management system with GST-based invoices and PDF export.",
        highlights: ["Responsive React UI", "Analytics dashboard for sales insights"],
      },
    ],
    skills: {
      frontend: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      backend: ["Node.js", "Express", "MongoDB", "REST APIs"],
      languages: ["Python", "JavaScript", "C++", "C"],
      ml: ["TensorFlow/Keras", "scikit-learn", "NumPy", "Pandas"],
      tools: ["VS Code", "Postman", "MongoDB Atlas"],
    },
    achievements: [
      "Secured competitive rank in JEE Mains (top percentile among 1M+ candidates).",
      "Consistently solved 5–7 DSA problems weekly, improving speed and problem-solving.",
      "Contributed to Saras AI Chat bot Project to improve PDF-based document Q&A.",
    ],
    resumePath: "/files/Updated2Resume.pdf", // change to real hosting path when deployed
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column: profile card */}
        <motion.aside
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-1 bg-white shadow-lg rounded-2xl p-6 sticky top-6"
        >
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-semibold">
              H
            </div>
            <div>
              <h1 className="text-2xl font-bold">{data.name}</h1>
              <p className="text-sm text-gray-500">Aspiring SDE / ML Intern</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href={data.resumePath}
              download
              className="flex items-center gap-2 w-full justify-center border border-dashed border-gray-200 p-2 rounded-lg hover:bg-gray-50"
            >
              <Download size={16} />
              <span className="text-sm font-medium">Download Resume</span>
            </a>

            <div className="flex flex-col gap-2 mt-3">
              <a className="flex items-center gap-2 text-sm" href={`mailto:${data.email}`}>
                <Mail size={16} /> {data.email}
              </a>
              <a className="flex items-center gap-2 text-sm" href={`tel:${data.phone}`}>
                <Phone size={16} /> {data.phone}
              </a>
              <div className="flex gap-3 mt-2">
                <a href={data.linkedin} className="flex items-center gap-2 text-sm">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href={data.github} className="flex items-center gap-2 text-sm">
                  <GitHub size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-600">Skills</h3>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-700">
              {Object.entries(data.skills).map(([k, v]) => (
                <div key={k} className="bg-gray-50 rounded-md p-2">
                  <div className="font-medium capitalize text-xs">{k}</div>
                  <div className="mt-1 text-xs">{v.join(", ")}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>

        {/* Right column: main content */}
        <motion.main
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6"
        >
          <section>
            <h2 className="text-lg font-bold">Education</h2>
            <div className="mt-3 space-y-3">
              {data.education.map((edu) => (
                <div key={edu.institution} className="border-l-2 border-indigo-100 pl-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{edu.institution}</div>
                      <div className="text-sm text-gray-500">{edu.degree} • {edu.location}</div>
                    </div>
                    <div className="text-sm text-gray-400">{edu.timeframe}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-bold">Experience</h2>
            <div className="mt-3 space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.company} className="p-4 rounded-lg border border-gray-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold">{exp.role} — {exp.company}</div>
                      <div className="text-sm text-gray-500">{exp.location}</div>
                    </div>
                    <div className="text-sm text-gray-400">{exp.timeframe}</div>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-bold">Projects</h2>
            <div className="mt-3 space-y-4">
              {data.projects.map((p) => (
                <div key={p.title} className="p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{p.desc}</div>
                  <div className="mt-2 text-sm">
                    {p.highlights.map((h, idx) => (
                      <div key={idx} className="inline-block mr-2 mt-1 text-xs px-2 py-1 rounded bg-gray-50 border">{h}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-bold">Achievements</h2>
            <div className="mt-3 text-sm text-gray-700 list-inside">
              <ul className="list-disc pl-5">
                {data.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-6 flex gap-3">
            <a href={data.resumePath} download className="px-4 py-2 rounded-lg border flex items-center gap-2">
              <Download size={14} /> Resume
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border">
              View LinkedIn
            </a>
            <a href={data.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border">
              View GitHub
            </a>
          </section>
        </motion.main>
      </div>
    </div>
  );
}
