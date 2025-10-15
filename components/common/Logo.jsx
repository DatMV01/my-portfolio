import { Code, CodeXml } from "lucide-react";

const Logo = ({ className, iconSize = 16 }) => {
  return (
    <p className={`flex items-center justify-center gap-0.5 border-b text-base ${className}`}>
      <Code size={iconSize} className="stroke-foreground" />
      <span className="text-foreground">DatMai</span>
      <CodeXml size={iconSize} className="stroke-foreground" />
    </p>
  );
};

export default Logo;
