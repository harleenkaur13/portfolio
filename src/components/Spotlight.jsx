import { useEffect, useState } from "react";

const Spotlight = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-20" // increased z-index to appear above overlay
      style={{
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px,
          rgba(255, 255, 255, 0.15),
          transparent 80%)`,
        transition: "background 0.05s linear",
      }}
    />
  );
};

export default Spotlight;
