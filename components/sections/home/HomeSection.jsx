import clsx from "clsx";
import { ArrowRight, ExternalLink } from "lucide-react";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="-mt-16 flex min-h-screen items-center justify-center text-center"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <img
          src="/images/profile-img.png"
          alt="Profile"
          className="w-32 rounded-full"
        />

        <h3 className="mb-3 flex items-end gap-2 text-xl md:text-2xl">
          <span>Hi! I'm Dat Mai</span>
          <img src="/icons/hand-icon.png" alt="Hand icon" className="w-6" />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
          web developer <br /> based in VietNam.
        </h1>

        <p className="max-w-2xl px-2 text-center text-xl leading-loose">
          I am a web developer from Ho Chi Minh, VietNam with 1 year of
          experience in multiple companies like Microsoft, Tesla, and Apple.
        </p>

        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <a
            href="#contact"
            className={clsx(
              "block h-12 w-38",
              "flex items-center justify-center gap-x-2 rounded-full text-white",
              "bg-gradient-to-r from-purple-600 to-orange-500",
              "hover:scale-105 hover:shadow-md",
              "cursor-pointer transition-transform duration-300",
            )}
          >
            <span>Connect Me</span>
            <ArrowRight />
          </a>
          {/* <a
            download
            href="/documents/cv.pdf"
            className={clsx(
              "block h-12 w-38",
              "flex items-center justify-center gap-x-2 rounded-full text-white",
              "bg-gradient-to-r from-orange-600 to-purple-500",
              "hover:scale-105 hover:shadow-md",
              "cursor-pointer transition-transform duration-300",
            )}
          >
            <span>My Resume</span>
            <Download />
          </a> */}

          <a
            href="/cv"
            target="_blank"
            className={clsx(
              "block h-12 w-38",
              "flex items-center justify-center gap-x-2 rounded-full text-white",
              "bg-gradient-to-r from-orange-600 to-purple-500",
              "hover:scale-105 hover:shadow-md",
              "cursor-pointer transition-transform duration-300",
            )}
          >
            <span>My CV</span>
            <ExternalLink />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
