// ShootingStars.js
import React, { useEffect } from "react";
import "./ShootingStars.css";

const ShootingStars = () => {
  useEffect(() => {
    const createShootingStar = () => {
      const container = document.getElementById("shootingStarsContainer");
      if (!container) return;

      const shootingStar = document.createElement("div");
      shootingStar.classList.add("shootingStar");
      container.appendChild(shootingStar);

      const containerRect = container.getBoundingClientRect();

      shootingStar.style.left = `${Math.random() * containerRect.width}px`;
      shootingStar.style.top = `${Math.random() * containerRect.height}px`;

      shootingStar.animate(
        [
          { transform: "translate(0, 0)", opacity: 1 },
          {
            transform: `translate(${Math.random() * 100 - 50}px, ${
              Math.random() * 100 - 50
            }px)`,
            opacity: 0,
          },
        ],
        {
          duration: Math.random() * 1000 + 1000,
          easing: "ease-in-out",
          iterations: 1,
          direction: "normal",
        }
      ).onfinish = () => {
        shootingStar.remove();
      };
    };

    const intervalId = setInterval(createShootingStar, 100);

    return () => clearInterval(intervalId);
  }, []);

  return <div id="shootingStarsContainer" />;
};

export default ShootingStars;
