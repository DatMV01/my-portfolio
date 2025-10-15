import Card from "@/components/common/Card";
import clsx from "clsx";
import { ExternalLink, Github } from "lucide-react";

const CustomLink = ({ icon, link, text, className }) => {
  return (
    <a
      href={link}
      className={clsx(
        "group inline-flex items-center gap-2",
        "border-border rounded-md border",
        "p-2 hover:font-semibold",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon ?? ""}
      {text}
    </a>
  );
};

const Project = ({
  image = "image",
  title = "title",
  desc = "description",
  demoLink = "#",
  githubLink = "#",
}) => {
  return (
    <Card className="flex flex-col gap-2">
      <img
        src={image}
        alt="Project Image"
        className="aspect-video w-full rounded-md"
      />

      <h4 className="text-xl font-semibold">{title}</h4>
      <p>{desc}</p>

      <div className="flex w-full items-center justify-center gap-4">
        <CustomLink
          icon={
            <ExternalLink className="stroke-muted-foreground group-hover:stroke-foreground" />
          }
          link={demoLink}
          text="Demo"
        />

        <CustomLink
          icon={
            <Github className="stroke-muted-foreground group-hover:stroke-foreground" />
          }
          link={githubLink}
          text="Github"
        />
      </div>
    </Card>
  );
};

export default Project;
