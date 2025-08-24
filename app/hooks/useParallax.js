"use client";
import { useEffect } from "react";

export default function useParallax(heroRef) {
    useEffect(() => {
      const hero = heroRef.current;
      const layers = hero?.querySelectorAll(".parallax .layer") ?? [];
      if (!hero || layers.length === 0) return;
  
      const update = () => {
        const rect = hero.getBoundingClientRect();
        const viewportH =
          window.innerHeight || document.documentElement.clientHeight;
        const visible = rect.bottom > 0 && rect.top < viewportH;
        if (!visible) return;
        const progress =
          1 -
          Math.min(
            Math.max(
              (rect.top + rect.height / 2) / (viewportH + rect.height / 2),
              0
            ),
            1
          );
        layers.forEach((layer) => {
          const speed = parseFloat(layer.dataset.speed || "0.2");
          const translateY = (progress - 0.5) * 200 * speed;
          layer.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
        });
      };
  
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            update();
            ticking = false;
          });
          ticking = true;
        }
      };
  
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      update();
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, [heroRef]);
  }