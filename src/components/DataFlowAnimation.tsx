// src/components/DataFlowAnimation.tsx
import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const LABELS = ['STIX/TAXII','CSV','JSON', 'Syslog', 'Traces', 'Metrics', 'Threat Intel', 'IOC', 'CVE'];

const SPEED_MULTIPLIER = 0.3; // Adjust this single value to control overall speed

const DataFlowAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width * 0.10;
    const centerY = canvas.height * 0.05;

    const COLORS = {
      green: { rgb: '46, 213, 115', base: 0.8 }, // Brighter green
      yellow: { rgb: '255, 242, 0', base: 0.7 }  // Brighter yellow
    };

    const createPath = (startAngle: number) => {
      const startRadius = Math.max(canvas.width, canvas.height) * 1.2;
      const startX = centerX + Math.cos(startAngle) * startRadius;
      const startY = centerY + Math.sin(startAngle) * startRadius;

      const cp1Radius = startRadius * 0.7;
      const cp2Radius = startRadius * 0.4;
      
      const cp1Angle = startAngle + (Math.random() * 0.2 - 0.1);
      const cp2Angle = startAngle + (Math.random() * 0.1 - 0.05);

      return {
        start: { x: startX, y: startY },
        cp1: {
          x: centerX + Math.cos(cp1Angle) * cp1Radius,
          y: centerY + Math.sin(cp1Angle) * cp1Radius
        },
        cp2: {
          x: centerX + Math.cos(cp2Angle) * cp2Radius,
          y: centerY + Math.sin(cp2Angle) * cp2Radius
        },
        end: { x: centerX, y: centerY },
        particles: Array.from({ length: 3 }, () => createParticle())
      };
    };

    const createParticle = () => {
      const speedTier = Math.random();
      let speed;
      if (speedTier < 0.3) {
        // Increase slow particles speed
        speed = (0.001 + Math.random() * 0.0005) * SPEED_MULTIPLIER;
      } else if (speedTier < 0.8) {
        // Increase medium particles speed
        speed = (0.002 + Math.random() * 0.001) * SPEED_MULTIPLIER;
      } else {
        // Increase fast particles speed
        speed = (0.003 + Math.random() * 0.0015) * SPEED_MULTIPLIER;
      }

      const color = Math.random() > 0.5 ? COLORS.green : COLORS.yellow;
      
      // Increased from 40% to 60% chance of having a label
      const hasLabel = Math.random() < 0.6;
      const label = hasLabel ? LABELS[Math.floor(Math.random() * LABELS.length)] : null;

      return {
        progress: Math.random(),
        speed,
        size: 0.6 + Math.random() * 0.8,
        opacity: color.base + Math.random() * 0.3,
        color,
        pauseDuration: 0,
        pauseAt: Math.random(),
        isPaused: false,
        pauseTime: 30 + Math.random() * 40,
        trailLength: 0.01 + Math.random() * 0.01,
        label
      };
    };

    const createClockBasedPaths = () => {
      // Create paths primarily from the right side of screen
      const rightSidePaths = Array.from({ length: 15 }, (_, i) => {
        const angle = (i * (Math.PI / 2) / 14);
        return createPath(angle);
      });

      // Very few paths from left (just enough for balance)
      const leftSidePaths = Array.from({ length: 2 }, (_, i) => {
        const angle = Math.PI + (i * 0.2);
        return createPath(angle);
      });

      // Some paths from bottom-right
      const bottomRightPaths = Array.from({ length: 8 }, (_, i) => {
        const angle = (Math.PI / 2) + (i * 0.15);
        return createPath(angle);
      });

      return [...rightSidePaths, ...bottomRightPaths, ...leftSidePaths];
    };

    const allPaths = createClockBasedPaths();

    // Adjust control points for smoother curves
    allPaths.forEach(path => {
      // Adjust based on angle to make curves natural
      const angle = Math.atan2(path.start.y - centerY, path.start.x - centerX);
      const distance = Math.sqrt(
        Math.pow(path.start.x - centerX, 2) + 
        Math.pow(path.start.y - centerY, 2)
      );

      // Adjust control points based on clock position
      path.cp1.x = centerX + Math.cos(angle) * (distance * 0.6);
      path.cp1.y = centerY + Math.sin(angle) * (distance * 0.6);
      path.cp2.x = centerX + Math.cos(angle) * (distance * 0.3);
      path.cp2.y = centerY + Math.sin(angle) * (distance * 0.3);
    });

    // Adjust path drawing for better visibility
    const drawPath = (path: any) => {
      ctx.beginPath();
      ctx.moveTo(path.start.x, path.start.y);
      ctx.bezierCurveTo(
        path.cp1.x, path.cp1.y,
        path.cp2.x, path.cp2.y,
        path.end.x, path.end.y
      );
      ctx.strokeStyle = 'rgba(46, 213, 115, 0.15)'; // Increased base opacity
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    // Apply particle updates to all paths
    allPaths.forEach(path => {
      path.particles = Array.from({ length: 3 }, () => createParticle());
    });

    const getPointOnCurve = (path: any, t: number) => {
      const { start, cp1, cp2, end } = path;
      return {
        x: Math.pow(1 - t, 3) * start.x +
           3 * Math.pow(1 - t, 2) * t * cp1.x +
           3 * (1 - t) * Math.pow(t, 2) * cp2.x +
           Math.pow(t, 3) * end.x,
        y: Math.pow(1 - t, 3) * start.y +
           3 * Math.pow(1 - t, 2) * t * cp1.y +
           3 * (1 - t) * Math.pow(t, 2) * cp2.y +
           Math.pow(t, 3) * end.y
      };
    };

    const drawParticle = (x: number, y: number, size: number, particle: any, path: any) => {
      const { color, opacity, progress, trailLength } = particle;
      
      // Shorter trail segment with padding for smooth fade
      const trailStart = Math.max(0, progress - trailLength * 1.2);
      const trailEnd = Math.min(1, progress + trailLength * 1.2);
      
      // More segments for smoother gradient
      const segments = 16;
      for(let i = 0; i < segments; i++) {
        const t1 = trailStart + (i * (trailEnd - trailStart) / segments);
        const t2 = trailStart + ((i + 1) * (trailEnd - trailStart) / segments);
        
        const p1 = getPointOnCurve(path, t1);
        const p2 = getPointOnCurve(path, t2);
        
        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        
        // Smooth bell curve intensity for softer trails
        const normalizedPos = i / (segments - 1);
        const intensity = Math.exp(-Math.pow((normalizedPos - 0.5) * 2.5, 2));
        
        // Softer opacity for smoother look
        const baseOpacity = opacity * 0.8;
        gradient.addColorStop(0, `rgba(${color.rgb}, ${baseOpacity * intensity})`);
        gradient.addColorStop(0.5, `rgba(${color.rgb}, ${baseOpacity * intensity * 1.2})`);
        gradient.addColorStop(1, `rgba(${color.rgb}, ${baseOpacity * intensity})`);
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8; // Thinner line for more delicate appearance
        ctx.stroke();
      }

      // Softer glow effect
      const lineGlow = ctx.createRadialGradient(x, y, 0, x, y, size * 8);
      lineGlow.addColorStop(0, `rgba(${color.rgb}, ${opacity * 0.4})`);
      lineGlow.addColorStop(0.5, `rgba(${color.rgb}, ${opacity * 0.2})`);
      lineGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.beginPath();
      ctx.arc(x, y, size * 8, 0, Math.PI * 2);
      ctx.fillStyle = lineGlow;
      ctx.fill();

      // Main particle (softer)
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color.rgb}, ${opacity})`; // Reduced brightness for softer look
      ctx.fill();

      // Particle glow (softer and wider)
      const particleGlow = ctx.createRadialGradient(x, y, 0, x, y, size * 6);
      particleGlow.addColorStop(0, `rgba(${color.rgb}, ${opacity * 0.8})`);
      particleGlow.addColorStop(0.5, `rgba(${color.rgb}, ${opacity * 0.3})`);
      particleGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.beginPath();
      ctx.arc(x, y, size * 6, 0, Math.PI * 2);
      ctx.fillStyle = particleGlow;
      ctx.fill();

      // Draw the label if it exists
      if (particle.label) {
        const baseFontSize = Math.min(12, window.innerWidth / 100);
        ctx.font = `bold ${baseFontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        
        const textX = x;
        const textY = y + size * 6;
        
        // Outline settings
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 1.5;
        
        // Text color
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillText(particle.label, textX, textY);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw base paths first
      allPaths.forEach(path => {
        drawPath(path);
      });

      // Draw particles and their effects
      allPaths.forEach(path => {
        path.particles.forEach((particle: any) => {
          if (particle.isPaused) {
            particle.pauseDuration++;
            if (particle.pauseDuration >= particle.pauseTime) {
              particle.isPaused = false;
              particle.pauseDuration = 0;
              particle.pauseAt = Math.random();
            }
            const point = getPointOnCurve(path, particle.progress);
            drawParticle(point.x, point.y, particle.size * 1.2, particle, path);
          } else {
            particle.progress += particle.speed;
            if (particle.progress > 1) {
              particle.progress = 0;
              const newSpeedTier = Math.random();
              if (newSpeedTier < 0.3) {
                particle.speed = (0.001 + Math.random() * 0.0005) * SPEED_MULTIPLIER;
              } else if (newSpeedTier < 0.8) {
                particle.speed = (0.002 + Math.random() * 0.001) * SPEED_MULTIPLIER;
              } else {
                particle.speed = (0.003 + Math.random() * 0.0015) * SPEED_MULTIPLIER;
              }
              particle.size = 0.6 + Math.random() * 0.8;
            }

            if (Math.abs(particle.progress - particle.pauseAt) < 0.01) {
              particle.isPaused = true;
              particle.pauseDuration = 0;
            }

            const point = getPointOnCurve(path, particle.progress);
            drawParticle(point.x, point.y, particle.size, particle, path);
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw', // Use viewport width
        height: '100vh', // Use viewport height
        opacity: 0.75,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden', // Prevent scrollbars
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
};

export default DataFlowAnimation;