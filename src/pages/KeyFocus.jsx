<<<<<<< HEAD
// import MasonryCards from "../components/MasonryCard";

// export default function KeyFocus() {
//     return (
//         <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
//             <div className="w-full max-w-6xl min-h-96 mx-auto">
//                 <div className="text-center mt-10">
//                     <h1 className="italic font-black text-4xl">Our Key Focus Area</h1>
//                 </div>
//                 {/* <MasonryCards /> */}
//                 <MasonryCards />
//             </div>
//         </div>
//     );
// }

import MasonryCards from "../components/MasonryCard";

export default function KeyFocus() {
  return (
    <section className="w-full bg-zinc-50 py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* ================= HEADER ================= */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900">
            The SSF Ecosystem
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-600 text-base">
            An interconnected network of initiatives designed to create sustainable, long-term impact.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <MasonryCards />
=======
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
>>>>>>> e20eac0 (Updated Website UI and content)

      </div>
    </section>
  );
}
