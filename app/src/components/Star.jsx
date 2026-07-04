import { motion } from 'framer-motion';
import { CANVAS } from '../data/quotes';

const glowVariants = {
  rest: { opacity: 0, scale: 0.6 },
  active: { opacity: 0.9, scale: 1.35, transition: { duration: 0.35, ease: 'easeOut' } },
};

const dotVariants = {
  rest: { scale: 1 },
  active: { scale: 1.5, transition: { duration: 0.3, ease: 'easeOut' } },
};

export default function Star({ body, onSelect }) {
  const cx = (body.x / 100) * CANVAS.w;
  const cy = (body.y / 100) * CANVAS.h;
  const isMoon = body.type === 'moon';
  // Radii are tuned against the real spacing between all 12 markers (min
  // gap ~151 svg units) so hitboxes stay generous on small screens without
  // ever overlapping a neighboring star.
  const hitRadius = isMoon ? 70 : 46;
  const glowRadius = isMoon ? 78 : 34;
  const label = isMoon ? 'Abrir mensaje de la luna' : `Abrir mensaje de la estrella`;

  return (
    <motion.g
      role="button"
      tabIndex={0}
      aria-label={label}
      initial="rest"
      whileHover="active"
      whileFocus="active"
      whileTap={{ scale: 0.92 }}
      onClick={() => onSelect(body)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(body);
        }
      }}
      style={{ cursor: 'pointer', outline: 'none' }}
    >
      <motion.circle
        cx={cx}
        cy={cy}
        r={glowRadius}
        fill="url(#celestialGlow)"
        variants={glowVariants}
        style={{ pointerEvents: 'none' }}
      />
      <motion.circle
        cx={cx}
        cy={cy}
        r={isMoon ? 4 : 2.6}
        fill="#f3e6b8"
        variants={dotVariants}
        style={{ pointerEvents: 'none' }}
      />
      <circle
        cx={cx}
        cy={cy}
        r={hitRadius}
        fill="#fff"
        opacity={0}
        style={{ pointerEvents: 'all' }}
      />
    </motion.g>
  );
}
