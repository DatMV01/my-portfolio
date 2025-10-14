import Button from "@/components/ui/Button";
import React from "react";
   
const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen">
      <div>HomeSection</div>
      <div className="flex gap-4 flex-wrap">
        <Button variant="primary">Click Me</Button>
        <Button variant="secondary">Click Me</Button>
        <Button variant="outline">Click Me</Button>
        <Button variant="destructive">Click Me</Button>
        <Button variant="ghost">Click Me</Button>
        <Button variant="link">Click Me</Button>
      </div>
    </section>
  );
};

export default HomeSection;
