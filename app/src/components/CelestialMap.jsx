import { CANVAS, celestialBodies } from '../data/quotes';
import Star from './Star';

export default function CelestialMap({ onSelect }) {
  return (
    <svg
      viewBox={`0 0 ${CANVAS.w} ${CANVAS.h}`}
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: 'none' }}
    >
      <defs>
        <radialGradient id="celestialGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f6e7ae" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#e9c66b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e9c66b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g style={{ pointerEvents: 'all' }}>
        {celestialBodies.map((body) => (
          <Star key={body.id} body={body} onSelect={onSelect} />
        ))}
      </g>
    </svg>
  );
}
