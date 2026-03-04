"use client";

import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,

      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,

      angle: Math.random() * Math.PI * 2,
      orbit: Math.random() * 0.5,
    }));

    let scrollOffset = 0;

    window.addEventListener("scroll", () => {
      scrollOffset = window.scrollY * 0.2;
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // gerakan random
        star.x += star.vx;
        star.y += star.vy;

        // efek muter
        star.angle += star.orbit;
        star.x += Math.cos(star.angle) * 0.05;
        star.y += Math.sin(star.angle) * 0.05;

        // wrap jika keluar layar
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y + scrollOffset, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "#da627d";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#da627d";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-white"
    />
  );
}
