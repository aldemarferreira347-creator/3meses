import { motion } from 'framer-motion';

const themeLabels = {
  amor: 'Sobre el amor',
  amistad: 'Sobre la amistad',
  viaje: 'Sobre el viaje',
  inmensidad: 'Sobre la inmensidad',
};

export default function QuoteModal({ body, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b12]/70 p-6 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-text"
        className="relative w-full max-w-lg rounded-2xl border border-black/10 bg-gradient-to-b from-[#f6f2e8] to-[#efe8d7] px-8 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:px-12"
        initial={{ opacity: 0, y: 24, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.96 }}
        transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-3xl leading-none text-[#7a756a] transition hover:bg-black/5 hover:text-[#33313a]"
        >
          &times;
        </button>

        <div className="mb-3 text-center text-2xl tracking-[0.5em] text-[#d8b45f]">✦</div>

        <p className="mb-1 text-center text-xs uppercase tracking-[0.3em] text-[#a3906a]">
          {themeLabels[body.theme]}
        </p>

        <blockquote
          id="quote-text"
          className="mt-4 text-center font-serif text-[clamp(1.4rem,4vw,2rem)] italic font-medium leading-snug text-[#2c2b33]"
        >
          &ldquo;{body.quote}&rdquo;
        </blockquote>

        <p className="mt-6 text-center text-sm uppercase tracking-[0.15em] text-[#8a8272]">
          El Principito &middot; Antoine de Saint-Exup&eacute;ry
        </p>

        <div className="mt-4 text-center text-xl text-[#d8b45f]">✶</div>
      </motion.div>
    </motion.div>
  );
}
