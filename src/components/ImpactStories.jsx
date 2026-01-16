import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaTimes, FaGlobe } from "react-icons/fa";
import { Languages } from "lucide-react";
import { stories } from "../data/stories";

const CardContent = ({ story, lang }) => (
    <>
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden rounded-2xl m-2 mb-0">
            {story.img ? (
                <img
                    src={story.img}
                    alt={story.title[lang] || story.title.en}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
            ) : (
                <div className="w-full h-full bg-zinc-200 flex items-center justify-center text-zinc-400">
                    <span className="text-sm font-bold uppercase tracking-widest">Image Coming Soon</span>
                </div>
            )}
            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-[#002344] text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                {story.category}
            </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-4 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-[#002344] leading-tight group-hover:text-[#fb8500] transition-colors">
                {story.title[lang] || story.title.en}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium line-clamp-3 mb-4 flex-1">
                {story.desc[lang] || story.desc.en}
            </p>

            <div className="pt-4 border-t border-zinc-50 flex items-center justify-between">
                <div className="text-xs font-bold text-[#fb8500] flex items-center gap-2 uppercase tracking-wide group-hover:gap-3 transition-all">
                    {/* Always say "Read Full Story" now since all are modals */}
                    {lang === 'en' ? 'Read Full Story' : 'पूरी कहानी पढ़ें'}
                    <FaArrowRight />
                </div>
            </div>
        </div>
    </>
);

export default function ImpactStories({ limit = null }) {
    const [selectedStory, setSelectedStory] = useState(null);
    const [lang, setLang] = useState('en'); // 'en' or 'hi'

    const toggleLang = () => {
        setLang(prev => prev === 'en' ? 'hi' : 'en');
    };

    // Filter stories if limit is provided
    const displayedStories = limit ? stories.slice(0, limit) : stories;

    return (
        <section className="py-20 px-6 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#fb8500] text-xs font-bold uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-[#fb8500]"></span>
                            Stories of Change
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344] leading-tight">
                            Real People, <span className="text-[#fb8500] relative">
                                Real Impact
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#fb8500]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-xl text-zinc-500 font-medium">
                            Every number has a name, every name has a story. diverse stories of transformation from the ground.
                        </p>
                    </div>

                    {/* Show "View All" button ONLY if we are limiting stories (i.e. on Home page) */}
                    {limit && (
                        <Link to="/Impact">
                            <button className="group flex items-center gap-2 px-6 py-3 bg-[#002344] text-white rounded-full font-bold hover:bg-[#fb8500] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                View All Stories
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedStories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedStory(story)}
                            className="group bg-white rounded-[2rem] overflow-hidden border border-zinc-100 hover:border-[#fb8500]/20 shadow-sm hover:shadow-2xl hover:shadow-[#fb8500]/10 transition-all duration-500 cursor-pointer flex flex-col h-full"
                        >
                            <CardContent story={story} lang={lang} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Story Modal */}
            <AnimatePresence>
                {selectedStory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedStory(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-zinc-500 hover:bg-[#fb8500] hover:text-white transition-colors border border-zinc-100 shadow-lg"
                            >
                                <FaTimes />
                            </button>

                            {/* Language Toggle in Modal */}
                            <button
                                onClick={toggleLang}
                                className="absolute top-4 left-4 md:top-6 md:right-20 z-20 px-4 h-10 bg-white/90 backdrop-blur rounded-full flex items-center gap-2 text-[#002344] font-bold text-sm hover:bg-blue-50 transition-colors border border-zinc-100 shadow-lg"
                            >
                                <Languages size={16} />
                                {lang === 'en' ? 'हिन्दी' : 'English'}
                            </button>

                            <div className="grid md:grid-cols-2">
                                <div className="relative h-64 md:h-auto">
                                    <img
                                        src={selectedStory.img || "/images/placeholder.jpg"}
                                        alt={selectedStory.title[lang] || selectedStory.title.en}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    <span className="absolute bottom-6 left-6 px-4 py-1.5 bg-[#fb8500] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                        {selectedStory.category}
                                    </span>
                                </div>
                                <div className="p-10 space-y-6 bg-white">
                                    <h3 className="text-3xl font-serif font-bold text-[#002344] leading-tight">
                                        {selectedStory.title[lang] || selectedStory.title.en}
                                    </h3>

                                    <div className="space-y-4 text-zinc-600 leading-relaxed whitespace-pre-line">
                                        {/* Use English content as fallback if Hindi is missing */}
                                        {(selectedStory.content?.[lang] || selectedStory.content?.en || "")
                                            .split('\n\n')
                                            .map((paragraph, idx) => (
                                                <p key={idx}>{paragraph}</p>
                                            ))}
                                    </div>

                                    <div className="pt-8 border-t border-zinc-100 flex gap-4">
                                        <button
                                            onClick={() => setSelectedStory(null)}
                                            className="px-8 py-3 rounded-full border-2 border-zinc-100 font-bold text-zinc-500 hover:border-[#002344] hover:text-[#002344] transition-colors"
                                        >
                                            {lang === 'en' ? 'Close Story' : 'बंद करें'}
                                        </button>
                                        <Link to="/DonateAndSupport" className="flex-1">
                                            <button className="w-full px-8 py-3 rounded-full bg-[#002344] text-white font-bold hover:bg-[#fb8500] transition-colors shadow-lg shadow-blue-900/20">
                                                {lang === 'en' ? 'Support This Cause' : 'सहयोग करें'}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}


