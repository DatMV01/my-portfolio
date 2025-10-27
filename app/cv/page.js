"use client";

import { useSearchParams } from "next/navigation";

import Card from "@/components/common/Card";
import clsx from "clsx";
import { Download, Globe, Mail, MapPin, Phone } from "lucide-react";
import { profile, sections } from "./data";
import { Fragment } from "react";

const HighlightText = (text) => {
  return text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="font-semibold text-black">$1</strong>',
  );
};

const Heading = ({ level = "h1", children, className }) => {
  const Tag = level;

  return (
    <Tag
      className={clsx(
        "border-border border-b pb-1 text-sm font-semibold tracking-wide",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

const handleDownload = async () => {
  const res = await fetch("/api/generate-pdf");
  const blob = await res.blob();

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "DatMaiVan-CV.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const Sidebar = () => {
  const searchParams = useSearchParams();
  const download = searchParams.get("download");

  const isDownload =
    download != null && download != undefined && download == "true";

  return (
    <aside
      className={clsx(
        "md:col-span-1",
        "gap-y-4 p-4",
        "border-border border-r",
        "flex flex-col",
      )}
    >
      {/* Avatar */}
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="aspect-square w-40 rounded-full">
          <img
            src="/images/profile-img.png"
            alt="Profile"
            className="object-center"
          />
        </div>

        <h1 className="text-2xl font-semibold">{profile.name}</h1>
        <p className="text-center text-xl text-gray-600">{profile.title}</p>
        <p className="max-w-xs text-center text-sm leading-relaxed text-gray-700">
          {profile.summary}
        </p>
      </div>

      {/* Download */}
      {/* {isDownload && (
        <a
          download
          href="/documents/cv.pdf"
          className={clsx(
            "rounded-md border",
            "flex items-center justify-center gap-2 p-2",
            "text-sky-400",
            "hover:border-sky-500 hover:text-sky-500",
          )}
        >
          <span>Download</span>
          <Download size={18} />
        </a>
      )} */}

      {!isDownload && (
        <button
          onClick={handleDownload}
          className={clsx(
            "rounded-md border",
            "flex items-center justify-center gap-2 p-2",
            "text-sky-400",
            "hover:border-sky-500 hover:text-sky-500",
          )}
        >
          <Download size={18} />
          <span>Download</span>
        </button>
      )}

      {/* Contact */}
      <div className="flex w-full flex-col text-sm">
        <Heading level="h4" className="border-none uppercase">
          Contact
        </Heading>

        <ul className="border-border flex flex-col gap-1 rounded-md border-2 p-4">
          {[
            {
              icon: <MapPin size={16} />,
              content: <span>{profile.location}</span>,
            },
            {
              icon: <Mail size={16} />,
              content: <a href={`mailto:${profile.email}`}>{profile.email}</a>,
            },
            {
              icon: <Phone size={16} />,
              content: <a href={`tel:${profile.phone}`}>{profile.phone}</a>,
            },
            {
              icon: <Globe size={16} />,
              content: (
                <a href={profile.website} target="_blank" rel="noreferrer">
                  {profile.website}
                </a>
              ),
            },
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              {item.icon}
              {item.content}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="flex w-full flex-col">
        <Heading level="h4" className="border-none text-sm uppercase">
          Skills
        </Heading>

        <div className="flex w-full flex-col gap-4 text-left text-sm">
          {sections.skills.map((s, i) => (
            <Fragment key={i}>
              <Card>
                <Heading level="h5" className="border-none text-sm">
                  {s.category}
                </Heading>

                <ul className="list-outside list-disc pl-4 text-xs leading-5">
                  {s.items.map((item, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{
                        __html: HighlightText(item),
                      }}
                    />
                  ))}
                </ul>
              </Card>

              {isDownload && i == 0 && <div className="page-break"></div>}
            </Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
};

const MainContent = () => {
  const searchParams = useSearchParams();
  const download = searchParams.get("download");

  const isDownload =
    download != null && download != undefined && download == "true";

  return (
    <section className="flex flex-col gap-4 p-4 md:col-span-2">
      <div>
        <Heading level="h3" className="border-b border-gray-400 uppercase">
          Experience
        </Heading>

        <div className="mt-4 space-y-4">
          {sections.experience.map((exp, idx) => (
            <Card key={idx}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h4 className="text-base font-semibold">{exp.role}</h4>
                  <span className="text-sm text-gray-600">@ {exp.company}</span>
                </div>
                <div className="mt-1 text-sm text-gray-600 md:mt-0">
                  {exp.date}
                </div>
              </div>
              <ul className="mt-3 list-outside list-disc space-y-1 pl-4 text-sm text-gray-700">
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: HighlightText(b) }}
                  />
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <Heading level="h3" className="border-b border-gray-400 uppercase">
          Projects
        </Heading>

        <div className="mt-4 space-y-4">
          {sections.experience.map((exp, idx) => (
            <Fragment key={idx}>
              <Card>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <h4 className="text-base font-semibold">{exp.role}</h4>

                  <div className="mt-1 text-sm text-gray-600 md:mt-0">
                    {exp.date}
                  </div>
                </div>

                <ul className="mt-3 list-outside list-disc space-y-1 pl-4 text-sm text-gray-700">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: HighlightText(b) }}
                    />
                  ))}
                </ul>
              </Card>

              {isDownload && idx == 0 && <div className="page-break"></div>}
            </Fragment>
          ))}
        </div>
      </div>

      <div>
        <Heading level="h3" className="border-b border-gray-400 uppercase">
          Education
        </Heading>

        <div className="mt-4 space-y-4 text-sm">
          {sections.education.map((e, i) => (
            <Card
              key={i}
              className="flex flex-col md:flex-row md:items-start md:justify-between"
            >
              <div>
                <h4 className="text-base font-semibold">{e.degree}</h4>
                <span className="text-sm text-gray-600">{e.school}</span>
              </div>

              <div className="text-sm text-gray-600">{e.date}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function CVPage() {
  const searchParams = useSearchParams();
  const download = searchParams.get("download");

  const isDownload =
    download != null && download != undefined && download == "true";

  return (
    <main
      className={`${isDownload ? "p-2" : "p-6 md:p-12"} min-h-screen bg-white font-sans text-black`}
    >
      <div
        className={clsx(
          "mx-auto grid max-w-[794px] rounded-md border md:grid-cols-3",
          isDownload ? "border-none" : "border-border",
        )}
      >
        <Sidebar />

        <MainContent />
      </div>
    </main>
  );
}
