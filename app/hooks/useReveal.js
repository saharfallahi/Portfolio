"use client";
import { useEffect } from "react";

// export default function useReveal() {
//   useEffect(() => {
//     const elements = document.querySelectorAll("[data-reveal]");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("is-visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);
// }

export default function useReveal(dep) {
    useEffect(() => {
      const items = document.querySelectorAll("[data-reveal]");
      if (items.length === 0) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      items.forEach((el) => io.observe(el));
  
      // Immediately reveal items already in view to avoid flicker on language/theme toggle
      const viewportH =
        window.innerHeight || document.documentElement.clientHeight;
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const visible = rect.bottom > 0 && rect.top < viewportH;
        if (visible) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      });
  
      return () => io.disconnect();
    }, [dep]);
  }