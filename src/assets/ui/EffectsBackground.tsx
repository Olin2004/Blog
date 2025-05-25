import React, { useEffect, useRef } from 'react';

// Simple snow effect using canvas
function drawSnow(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;
  const snowflakes = Array.from({ length: 80 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    d: Math.random() * 1 + 0.5,
  }));
  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = '#fff';
    snowflakes.forEach(flake => {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
    update();
  }
  function update() {
    snowflakes.forEach(flake => {
      flake.y += flake.d;
      if (flake.y > h) {
        flake.x = Math.random() * w;
        flake.y = 0;
      }
    });
  }
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }
  animate();
}

// Firework particle after explosion
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}
// Firework rocket before explosion
interface Firework {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number; // target x
  ty: number; // target y
  exploded: boolean;
  color: string;
}

function drawFireworks(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  let fireworks: Firework[] = [];
  let particles: Particle[] = [];

  function launchFirework() {
    // Randomly pick a side: 0=top, 1=bottom, 2=left, 3=right
    const side = Math.floor(Math.random() * 4);
    let x = 0, y = 0, vx = 0, vy = 0;
    let tx = w * (0.2 + 0.6 * Math.random());
    let ty = h * (0.2 + 0.6 * Math.random());
    switch (side) {
      case 0: // top
        x = tx;
        y = 0;
        vx = 0;
        vy = (ty - y) / 60;
        break;
      case 1: // bottom
        x = tx;
        y = h;
        vx = 0;
        vy = (ty - y) / 60;
        break;
      case 2: // left
        x = 0;
        y = ty;
        vx = (tx - x) / 60;
        vy = 0;
        break;
      case 3: // right
        x = w;
        y = ty;
        vx = (tx - x) / 60;
        vy = 0;
        break;
    }
    const color = `hsl(${Math.random() * 360}, 80%, 60%)`;
    fireworks.push({ x, y, vx, vy, tx, ty, exploded: false, color });
  }

  function explode(firework: Firework) {
    for (let i = 0; i < 24; i++) {
      const angle = (Math.PI * 2 * i) / 24;
      const speed = Math.random() * 2 + 1.5;
      particles.push({
        x: firework.x,
        y: firework.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: firework.color,
      });
    }
  }

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    // Draw fireworks (rockets)
    fireworks.forEach(fw => {
      if (!fw.exploded) {
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(fw.x, fw.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = fw.color;
        ctx.shadowColor = fw.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    });
    // Draw particles (explosion)
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha * 0.4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.restore();
    });
    update();
  }

  function update() {
    // Update fireworks
    fireworks.forEach(fw => {
      if (!fw.exploded) {
        fw.x += fw.vx;
        fw.y += fw.vy;
        // If close to target, explode
        if (Math.hypot(fw.x - fw.tx, fw.y - fw.ty) < 10) {
          fw.exploded = true;
          explode(fw);
        }
      }
    });
    // Remove exploded rockets
    fireworks = fireworks.filter(fw => !fw.exploded);
    // Update particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.02;
      p.alpha -= 0.012;
    });
    particles = particles.filter(p => p.alpha > 0);
    // Launch new fireworks
    if (Math.random() < 0.025) launchFirework();
  }

  function animate() {
    draw();
    requestAnimationFrame(animate);
  }
  animate();
}

const EffectsBackground: React.FC = () => {
  const snowRef = useRef<HTMLCanvasElement>(null);
  const fireworksRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (snowRef.current) drawSnow(snowRef.current);
    if (fireworksRef.current) drawFireworks(fireworksRef.current);
    const handleResize = () => {
      if (snowRef.current) drawSnow(snowRef.current);
      if (fireworksRef.current) drawFireworks(fireworksRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <canvas ref={fireworksRef} style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:0,pointerEvents:'none'}} />
      <canvas ref={snowRef} style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:1,pointerEvents:'none'}} />
    </>
  );
};

export default EffectsBackground;
