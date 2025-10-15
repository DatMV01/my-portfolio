"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp, Omega } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import projectData from "./projectData";

const CustomDropdown = ({
  categories = [
    "All",
    "Frontend",
    "Backend",
    "Fullstack",
    "React",
    "NextJS",
    "NodeJS",
    "Java",
    "Spring",
    "Solidity",
  ],
  onCategorySelected,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="relative w-30 self-end">
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          "border-border w-full rounded border p-2",
          "flex items-center justify-between",
          "hover:bg-secondary/70",
        )}
      >
        {selected}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {open && (
        <ul className="border-border bg-background absolute z-10 mt-2 max-h-50 w-full overflow-y-scroll rounded border">
          {categories.map((value) => (
            <li
              key={value}
              onClick={() => {
                setSelected(value);
                onCategorySelected(value);
                setOpen(false);
              }}
              className="hover:bg-secondary/70 cursor-pointer px-3 py-2 text-sm"
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ProjectList = ({ projectList }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projectList?.length ? (
        projectList.map(
          ({ id, image, title, desc, demoLink, githubLink }, i) => (
            <Project
              key={id}
              image={image}
              title={title}
              desc={desc}
              demoLink={demoLink}
              githubLink={githubLink}
            />
          ),
        )
      ) : (
        <p className="text-muted-foreground col-span-full text-center">
          No projects found.
        </p>
      )}
    </div>
  );
};

const ProjectSection = () => {
  const [projects, setProjects] = useState(projectData);

  const categories = projectData.map((item) => item.category);
  const uniqueCategories = ["All", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    console.log(category);

    if (category === "All") {
      setProjects(projectData);
      return;
    }

    const filterProjects = projectData.filter(
      (project) => project.category === category,
    );

    console.log(filterProjects);

    setProjects(filterProjects);
  };

  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col items-center gap-4"
    >
      <h4 className="text-lg">My portfolio</h4>
      <h2 className="text-4xl">My latest project</h2>

      <p className="px-6 text-center leading-6 md:px-50">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in web development.
      </p>

      <CustomDropdown
        categories={uniqueCategories}
        onCategorySelected={filterProjectsHandler}
      />

      <ProjectList projectList={projects} />
    </section>
  );
};

export default ProjectSection;
