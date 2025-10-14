import { useEffect, useState } from "react";

export function useScrollSpy(
  ids,
  options = { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    }, options);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids.join(",")]);

  return activeId;
}
