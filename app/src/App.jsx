import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CelestialMap from './components/CelestialMap';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex h-dvh w-screen flex-col items-center justify-center gap-2 bg-[#12121a] p-2">
      <div className="relative min-h-0 w-full flex-1">
        <img
          src="/wall.jpg"
          alt="Vinilo decorativo de El Principito y el zorro sobre una pared"
          className="absolute inset-0 h-full w-full object-contain"
          draggable={false}
        />
        <CelestialMap onSelect={setSelected} />
      </div>

      <p className="shrink-0 pb-1 text-center text-sm tracking-wide text-white/70">
        ✦ Toca una estrella o la luna para leer un fragmento
      </p>

      <AnimatePresence>
        {selected && <QuoteModal body={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
