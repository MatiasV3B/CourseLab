import React, { useEffect, useRef } from 'react';

export const InteractiveGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse positions (with lerp for organic smoothness)
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let isMouseActive = false;
    let mouseLeaveTimeout: number | undefined;

    // Continuous time for non-static oscillation
    let time = 0;

    const cellSize = 36;
    const effectRadius = 180;
    const maxDisplacement = 20; // Pushes corners outward to enlarge the squares under cursor

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      isMouseActive = true;
      if (mouseLeaveTimeout) clearTimeout(mouseLeaveTimeout);
    };

    const handleMouseLeave = () => {
      mouseLeaveTimeout = window.setTimeout(() => {
        isMouseActive = false;
      }, 600);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      // Clock for continuous oscillation (baja y sube en ciclo suave)
      time += 0.018;

      // Smooth lerp mouse position
      if (isMouseActive) {
        mouseX += (targetMouseX - mouseX) * 0.18;
        mouseY += (targetMouseY - mouseY) * 0.18;
      } else {
        mouseX += (-1000 - mouseX) * 0.08;
        mouseY += (-1000 - mouseY) * 0.08;
      }

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / cellSize) + 2;
      const rows = Math.ceil(height / cellSize) + 2;

      // Modo quieto: oscilación vertical suave que baja y sube (seno armónico)
      // Math.sin(time) oscila suavemente entre +1 (baja) y -1 (sube)
      const verticalCycle = Math.sin(time * 0.75) * 8; // Baja y sube 8px continuamente
      const horizontalCycle = Math.cos(time * 0.5) * 2;

      // Compute displaced grid vertices
      const points: { x: number; y: number; dist: number; waveIntensity: number }[][] = [];

      for (let c = 0; c <= cols; c++) {
        points[c] = [];
        const baseX = (c - 1) * cellSize;

        for (let r = 0; r <= rows; r++) {
          const baseY = (r - 1) * cellSize;

          // Oscilación armónica que baja y sube en modo quieto
          const wavePhase = (baseX * 0.006) + Math.sin(time * 0.75) * 1.5;
          const localizedVerticalWave = Math.sin(wavePhase + (baseY * 0.003)) * 3;

          let px = baseX + horizontalCycle;
          let py = baseY + verticalCycle + localizedVerticalWave;

          const dx = baseX - mouseX;
          const dy = baseY - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Cursor: agranda los cuadros empujando los vértices hacia afuera
          if (dist < effectRadius && dist > 0) {
            const factor = Math.cos((dist / effectRadius) * (Math.PI / 2));
            const push = factor * maxDisplacement;
            px += (dx / dist) * push;
            py += (dy / dist) * push;
          }

          const waveIntensity = (Math.sin(wavePhase) + 1) / 2;
          points[c][r] = { x: px, y: py, dist, waveIntensity };
        }
      }

      // Draw horizontal lines
      ctx.lineWidth = 1;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p1 = points[c][r];
          const p2 = points[c + 1][r];
          const avgDist = (p1.dist + p2.dist) / 2;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          if (avgDist < effectRadius) {
            const intensity = 1 - avgDist / effectRadius;
            ctx.strokeStyle = `rgba(29, 114, 254, ${0.09 + intensity * 0.4})`;
            ctx.lineWidth = 1 + intensity * 0.9;
          } else {
            const subtleAlpha = 0.045 + p1.waveIntensity * 0.02;
            ctx.strokeStyle = `rgba(15, 23, 42, ${subtleAlpha})`;
            ctx.lineWidth = 1;
          }
          ctx.stroke();
        }
      }

      // Draw vertical lines
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r < rows; r++) {
          const p1 = points[c][r];
          const p2 = points[c][r + 1];
          const avgDist = (p1.dist + p2.dist) / 2;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          if (avgDist < effectRadius) {
            const intensity = 1 - avgDist / effectRadius;
            ctx.strokeStyle = `rgba(29, 114, 254, ${0.09 + intensity * 0.4})`;
            ctx.lineWidth = 1 + intensity * 0.9;
          } else {
            const subtleAlpha = 0.045 + p1.waveIntensity * 0.02;
            ctx.strokeStyle = `rgba(15, 23, 42, ${subtleAlpha})`;
            ctx.lineWidth = 1;
          }
          ctx.stroke();
        }
      }

      // Highlight the active hovered square(s) under cursor
      if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        const hoverCol = Math.floor(mouseX / cellSize) + 1;
        const hoverRow = Math.floor(mouseY / cellSize) + 1;

        for (let dc = -1; dc <= 1; dc++) {
          for (let dr = -1; dr <= 1; dr++) {
            const c = hoverCol + dc;
            const r = hoverRow + dr;

            if (c >= 0 && c < cols && r >= 0 && r < rows) {
              const pTL = points[c][r];
              const pTR = points[c + 1][r];
              const pBR = points[c + 1][r + 1];
              const pBL = points[c][r + 1];

              const cellCenterX = (pTL.x + pBR.x) / 2;
              const cellCenterY = (pTL.y + pBR.y) / 2;
              const dist = Math.hypot(cellCenterX - mouseX, cellCenterY - mouseY);

              if (dist < effectRadius * 0.75) {
                const cellIntensity = Math.max(0, 1 - dist / (effectRadius * 0.75));

                ctx.beginPath();
                ctx.moveTo(pTL.x, pTL.y);
                ctx.lineTo(pTR.x, pTR.y);
                ctx.lineTo(pBR.x, pBR.y);
                ctx.lineTo(pBL.x, pBL.y);
                ctx.closePath();

                ctx.fillStyle = `rgba(29, 114, 254, ${cellIntensity * 0.07})`;
                ctx.fill();

                if (dc === 0 && dr === 0) {
                  ctx.strokeStyle = `rgba(29, 114, 254, 0.45)`;
                  ctx.lineWidth = 1.5;
                  ctx.stroke();
                }
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (mouseLeaveTimeout) clearTimeout(mouseLeaveTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
};
