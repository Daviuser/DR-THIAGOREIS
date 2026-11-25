"use client";
import { motion } from "motion/react";
import { whatsapp } from "@/lib/site";
export default function WhatsAppFab() {
  return (
    <motion.a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com o Dr. Thiago Reis pelo WhatsApp"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-[100] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(0,0,0,.3)] transition-shadow hover:shadow-[0_8px_30px_rgba(37,211,102,.35)]">
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M16.02 3C8.86 3 3.04 8.78 3.04 15.9c0 2.27.6 4.49 1.74 6.45L3 29l6.84-1.78a13.08 13.08 0 0 0 6.18 1.55h.01C23.18 28.77 29 22.99 29 15.88A12.8 12.8 0 0 0 25.2 6.8 13.02 13.02 0 0 0 16.02 3Zm0 22.57h-.01a10.83 10.83 0 0 1-5.5-1.5l-.4-.23-4.06 1.06 1.08-3.93-.26-.4a10.6 10.6 0 0 1-1.64-5.67c0-5.95 4.86-10.79 10.8-10.79a10.8 10.8 0 0 1 7.67 3.17 10.66 10.66 0 0 1 3.17 7.64c0 5.95-4.86 10.79-10.85 10.79Zm5.93-8.08c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.52-.16-.74.16-.22.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.33-.16-1.38-.51-2.62-1.62-.97-.86-1.63-1.91-1.82-2.23-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.22-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.73-1-2.37-.26-.62-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.67s1.16 3.1 1.32 3.32c.16.21 2.27 3.45 5.5 4.84.77.33 1.37.53 1.84.68.77.24 1.47.2 2.02.12.62-.1 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" />
      </svg>
    </motion.a>
  );
}
