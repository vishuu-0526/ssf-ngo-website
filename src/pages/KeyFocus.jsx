import MasonryCards from "../components/MasonryCard";
import { motion } from "framer-motion";

export default function KeyFocus() {
  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs">Sustainability Model</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#002344]">
            The SSF <span className="text-[#fb8500]">Ecosystem</span>
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-500 text-xl font-medium leading-relaxed">
            An interconnected network of initiatives designed to create sustainable,
            long-term impact across the communities we serve.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <MasonryCards />
        </motion.div>

      </div>
    </section>
  );
}
