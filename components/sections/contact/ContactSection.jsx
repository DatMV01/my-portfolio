import Logo from "@/components/common/Logo";
import { Facebook, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SendMessageForm from "./SendMessageForm";

const contacts = [
  {
    label: "datmv01@gmail.com",
    icon: Mail,
    href: "mailto:datmv01@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
  },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
  },
  {
    label: "Github",
    icon: Github,
    href: "https://github.com/username",
  },
  {
    label: "+84 818 012 377",
    icon: Phone,
  },
  {
    label: "Ho Chi Minh City",
    icon: MapPin,
  },
];

const ContactItem = ({ icon: Icon, label, href }) => {
  const content = (
    <div className="flex w-full items-center gap-2 py-2 transition-colors">
      <span className="flex basis-1/3 justify-end">
        <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
      </span>
      <span className="basis-2/3">{label}</span>
    </div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex"
    >
      {content}
    </a>
  ) : (
    <div className="group flex">{content}</div>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mt-16 flex min-h-screen flex-col items-center gap-4"
    >
      <h4 className="text-lg">Connect with me</h4>
      <h2 className="text-4xl">Get in touch 👋</h2>
      <p className="px-6 text-center leading-6 md:px-40">
        I'd love to hear from you! Whether you have a project in mind, a
        question, or just want to say hi — feel free to reach out.
      </p>

      <Logo />

      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3">
        {contacts.map((item, i) => (
          <ContactItem key={i} {...item} />
        ))}
      </div>

      <SendMessageForm />
    </section>
  );
};

export default ContactSection;
