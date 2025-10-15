import Card from "@/components/common/Card";
import clsx from "clsx";
import {
  List,
  ShieldCheck
} from "lucide-react";
import { aboutData, certificates, skills } from "./aboutData";
import SpinLogoTitle from "./SpinLogoTitle";

const PersonalInformationCard = () => {
  return (
    <>
      {aboutData.map(({ icon, title, content }, index) => (
        <Card key={index}>
          <div className="flex items-center gap-2 font-semibold">
            {icon}
            <span>{title}</span>
          </div>
          <div>{content}</div>
        </Card>
      ))}
    </>
  );
};

const CertificateCard = () => {
  return (
    <Card>
      <div className="flex items-center gap-2 font-semibold">
        <ShieldCheck />
        <span>Certificate</span>
      </div>
      <div>
        <ul className="list-outside list-disc space-y-1 px-5">
          {certificates.map((certificate, i) => (
            <li key={certificate}>{certificate}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

const SkillsCard = () => {
  return (
    <Card>
      <div className="flex items-center gap-2 font-semibold">
        <List />
        <span>Skills</span>
      </div>

      <div className="grid grid-cols-4 gap-2 md:grid-cols-10">
        {skills.map(({ src, name }, i) => (
          <p
            key={src}
            className={clsx(
              "flex flex-col items-center justify-center",
              "aspect-square w-full",
            )}
          >
            <img src={src} alt={name} className="w-10" />
            <span>{name}</span>
          </p>
        ))}
      </div>
    </Card>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="flex min-h-screen flex-col items-center">
      <h4 class="text-lg">Introduction</h4>
      <h2 class="text-4xl">About me</h2>

      <div className="relative mx-auto">
        <img
          src="/images/user-image.png"
          alt="Profile"
          className="w-64 rounded-2xl shadow-md"
        />
        <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/3">
          <SpinLogoTitle />
        </div>
      </div>

      <p className="mt-10 px-6 text-center leading-6">
        I am an experienced Frontend Developer with years of professional
        experience in building modern web applications. I’ve had the privilege
        of collaborating with great teams and contributing to successful
        projects.
      </p>

      <div className="my-4 flex w-full flex-col gap-4">
        <PersonalInformationCard />

        <CertificateCard />

        <SkillsCard />
      </div>
    </section>
  );
};

export default AboutSection;
