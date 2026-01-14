import { useState } from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { X } from "lucide-react";
=======
import { X, Languages } from "lucide-react";
>>>>>>> e20eac0 (Updated Website UI and content)

// 🔹 Blog Images
import plasmaImg from "../assets/blog/plasma.jpg";
import masksImg from "../assets/blog/masks.jpg";
import schoolImg from "../assets/blog/school.jpg";
import educationImg from "../assets/blog/education.jpg";
import childImg from "../assets/blog/child.jpg";
import migrantsImg from "../assets/blog/migrants.jpg";

<<<<<<< HEAD
// 🔹 Blog Data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Plasma Donation Initiative",
    date: "May 2021",
    image: plasmaImg,
    short:
      "During the COVID-19 pandemic, SSF acted swiftly to arrange plasma for a patient in urgent need.",
    full: `During the COVID-19 pandemic, when a patient urgently needed plasma for treatment, the Swastik Srijan Foundation (SSF) exemplified the true essence of community care and responsiveness.
=======
// 🔹 Blog Data with Hindi translations
const BLOG_POSTS = [
  {
    id: 1,
    title: {
      en: "Plasma Donation Initiative",
      hi: "प्लाज्मा दान पहल"
    },
    date: "May 2021",
    image: plasmaImg,
    short: {
      en: "During the COVID-19 pandemic, SSF acted swiftly to arrange plasma for a patient in urgent need.",
      hi: "COVID-19 महामारी के दौरान, SSF ने तत्काल जरूरत में एक मरीज के लिए प्लाज्मा की व्यवस्था करने में तेजी से कार्य किया।"
    },
    full: {
      en: `During the COVID-19 pandemic, when a patient urgently needed plasma for treatment, the Swastik Srijan Foundation (SSF) exemplified the true essence of community care and responsiveness.
>>>>>>> e20eac0 (Updated Website UI and content)

SSF immediately mobilized its team and coordinated with hospitals and medical professionals to ensure timely plasma availability. Their prompt action saved a life and inspired others to donate plasma.

The initiative extended further through awareness campaigns, educating people on the importance of plasma donation and building a strong donor network to face future health emergencies.`,
<<<<<<< HEAD
  },
  {
    id: 2,
    title: "Masks for All: Community Initiative",
    date: "June 2021",
    image: masksImg,
    short:
      "SSF distributed free masks to vulnerable communities during the COVID-19 lockdown.",
    full: `During the COVID-19 pandemic, SSF launched a mask distribution drive after government mandates made mask-wearing compulsory.
=======
      hi: `COVID-19 महामारी के दौरान, जब एक मरीज को उपचार के लिए तत्काल प्लाज्मा की आवश्यकता थी, तो स्वास्तिक सृजन फाउंडेशन (SSF) ने सामुदायिक देखभाल और जवाबदेही के सच्चे सार का उदाहरण प्रस्तुत किया।

SSF ने तुरंत अपनी टीम को जुटाया और समय पर प्लाज्मा की उपलब्धता सुनिश्चित करने के लिए अस्पतालों और चिकित्सा पेशेवरों के साथ समन्वय किया। उनकी त्वरित कार्रवाई ने एक जीवन बचाया और दूसरों को प्लाज्मा दान करने के लिए प्रेरित किया।

यह पहल जागरूकता अभियानों के माध्यम से आगे बढ़ी, लोगों को प्लाज्मा दान के महत्व के बारे में शिक्षित किया और भविष्य की स्वास्थ्य आपात स्थितियों का सामना करने के लिए एक मजबूत दाता नेटवर्क बनाया।`
    }
  },
  {
    id: 2,
    title: {
      en: "Masks for All: Community Initiative",
      hi: "सभी के लिए मास्क: सामुदायिक पहल"
    },
    date: "June 2021",
    image: masksImg,
    short: {
      en: "SSF distributed free masks to vulnerable communities during the COVID-19 lockdown.",
      hi: "COVID-19 लॉकडाउन के दौरान SSF ने कमजोर समुदायों को मुफ्त मास्क वितरित किए।"
    },
    full: {
      en: `During the COVID-19 pandemic, SSF launched a mask distribution drive after government mandates made mask-wearing compulsory.
>>>>>>> e20eac0 (Updated Website UI and content)

Volunteers distributed masks across Noida and nearby areas, especially targeting those who could not afford them. Alongside distribution, awareness sessions on hygiene, mask usage, and social distancing were conducted.

This initiative helped protect hundreds of families and strengthened community trust.`,
<<<<<<< HEAD
  },
  {
    id: 3,
    title: "Dadar School Improvement Program",
    date: "Jan 2022",
    image: schoolImg,
    short:
      "Donation of computers and printers led to a 98% improvement in school effectiveness.",
    full: `At Dadar School, SSF donated computers and printers to improve academic efficiency.

Motivational visits encouraged teachers to enhance punctuality and engagement. The program resulted in a 98% success rate and significantly improved teaching quality and student performance.`,
  },
  {
    id: 4,
    title: "Noida Sector 53 Education Initiative",
    date: "March 2022",
    image: educationImg,
    short:
      "Modern teaching tools transformed student engagement and learning outcomes.",
    full: `SSF improved infrastructure and introduced modern teaching aids in Noida Sector 53 schools.

Workshops and motivational sessions helped teachers design customized lesson plans, leading to improved student participation and academic growth.`,
  },
  {
    id: 5,
    title: "A Second Chance: Saving a Dream",
    date: "Aug 2022",
    image: childImg,
    short:
      "SSF paid pending school fees to save a child’s education.",
    full: `A young boy in Noida was on the verge of losing his school admission due to unpaid fees.

SSF stepped in, paid the fees, and ensured uninterrupted education. This support restored hope and strengthened the child’s determination to succeed.`,
  },
  {
    id: 6,
    title: "Empowering Migrants: Hope & Resilience",
    date: "Feb 2023",
    image: migrantsImg,
    short:
      "SSF supported migrant families with food, clothing, and education kits.",
    full: `SSF assisted migrant families from Rewa, Madhya Pradesh, relocating to Maharashtra.

Essential supplies, hygiene kits, and educational materials were distributed. Volunteers worked closely with families, fostering trust and hope for a better future.`,
  },
];

export default function Blogs() {
  const [activePost, setActivePost] = useState(null);
=======
      hi: `COVID-19 महामारी के दौरान, सरकारी आदेशों द्वारा मास्क पहनना अनिवार्य किए जाने के बाद SSF ने मास्क वितरण अभियान शुरू किया।

स्वयंसेवकों ने नोएडा और आसपास के क्षेत्रों में मास्क वितरित किए, विशेष रूप से उन लोगों को लक्षित किया जो उन्हें खरीद नहीं सकते थे। वितरण के साथ-साथ, स्वच्छता, मास्क के उपयोग और सामाजिक दूरी पर जागरूकता सत्र आयोजित किए गए।

इस पहल ने सैकड़ों परिवारों की रक्षा करने में मदद की और सामुदायिक विश्वास को मजबूत किया।`
    }
  },
  {
    id: 3,
    title: {
      en: "Dadar School Improvement Program",
      hi: "दादर स्कूल सुधार कार्यक्रम"
    },
    date: "Jan 2022",
    image: schoolImg,
    short: {
      en: "Donation of computers and printers led to a 98% improvement in school effectiveness.",
      hi: "कंप्यूटर और प्रिंटर के दान से स्कूल की प्रभावशीलता में 98% सुधार हुआ।"
    },
    full: {
      en: `At Dadar School, SSF donated computers and printers to improve academic efficiency.

Motivational visits encouraged teachers to enhance punctuality and engagement. The program resulted in a 98% success rate and significantly improved teaching quality and student performance.`,
      hi: `दादर स्कूल में, SSF ने शैक्षणिक दक्षता में सुधार के लिए कंप्यूटर और प्रिंटर दान किए।

प्रेरक यात्राओं ने शिक्षकों को समय की पाबंदी और जुड़ाव बढ़ाने के लिए प्रोत्साहित किया। कार्यक्रम के परिणामस्वरूप 98% सफलता दर मिली और शिक्षण गुणवत्ता और छात्र प्रदर्शन में उल्लेखनीय सुधार हुआ।`
    }
  },
  {
    id: 4,
    title: {
      en: "Noida Sector 53 Education Initiative",
      hi: "नोएडा सेक्टर 53 शिक्षा पहल"
    },
    date: "March 2022",
    image: educationImg,
    short: {
      en: "Modern teaching tools transformed student engagement and learning outcomes.",
      hi: "आधुनिक शिक्षण उपकरणों ने छात्र जुड़ाव और सीखने के परिणामों को बदल दिया।"
    },
    full: {
      en: `SSF improved infrastructure and introduced modern teaching aids in Noida Sector 53 schools.

Workshops and motivational sessions helped teachers design customized lesson plans, leading to improved student participation and academic growth.`,
      hi: `SSF ने नोएडा सेक्टर 53 के स्कूलों में बुनियादी ढांचे में सुधार किया और आधुनिक शिक्षण सहायक सामग्री पेश की।

कार्यशालाओं और प्रेरक सत्रों ने शिक्षकों को अनुकूलित पाठ योजनाएं डिजाइन करने में मदद की, जिससे छात्र भागीदारी और शैक्षणिक विकास में सुधार हुआ।`
    }
  },
  {
    id: 5,
    title: {
      en: "A Second Chance: Saving a Dream",
      hi: "एक दूसरा मौका: एक सपने को बचाना"
    },
    date: "Aug 2022",
    image: childImg,
    short: {
      en: "SSF paid pending school fees to save a child's education.",
      hi: "SSF ने एक बच्चे की शिक्षा बचाने के लिए लंबित स्कूल फीस का भुगतान किया।"
    },
    full: {
      en: `A young boy in Noida was on the verge of losing his school admission due to unpaid fees.

SSF stepped in, paid the fees, and ensured uninterrupted education. This support restored hope and strengthened the child's determination to succeed.`,
      hi: `नोएडा में एक युवा लड़का अवैतनिक फीस के कारण अपने स्कूल प्रवेश खोने के कगार पर था।

SSF ने हस्तक्षेप किया, फीस का भुगतान किया, और निर्बाध शिक्षा सुनिश्चित की। इस समर्थन ने आशा बहाल की और बच्चे के सफल होने के दृढ़ संकल्प को मजबूत किया।`
    }
  },
  {
    id: 6,
    title: {
      en: "Empowering Migrants: Hope & Resilience",
      hi: "प्रवासियों को सशक्त बनाना: आशा और लचीलापन"
    },
    date: "Feb 2023",
    image: migrantsImg,
    short: {
      en: "SSF supported migrant families with food, clothing, and education kits.",
      hi: "SSF ने प्रवासी परिवारों को भोजन, कपड़े और शिक्षा किट के साथ समर्थन दिया।"
    },
    full: {
      en: `SSF assisted migrant families from Rewa, Madhya Pradesh, relocating to Maharashtra.

Essential supplies, hygiene kits, and educational materials were distributed. Volunteers worked closely with families, fostering trust and hope for a better future.`,
      hi: `SSF ने रीवा, मध्य प्रदेश से महाराष्ट्र में स्थानांतरित हो रहे प्रवासी परिवारों की सहायता की।

आवश्यक आपूर्ति, स्वच्छता किट और शैक्षिक सामग्री वितरित की गई। स्वयंसेवकों ने परिवारों के साथ मिलकर काम किया, बेहतर भविष्य के लिए विश्वास और आशा को बढ़ावा दिया।`
    }
  },
];


export default function Blogs() {
  const [activePost, setActivePost] = useState(null);
  const [language, setLanguage] = useState("en"); // en or hi

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "hi" : "en");
  };
>>>>>>> e20eac0 (Updated Website UI and content)

  return (
    <main className="pt-28 bg-black min-h-screen text-white px-4">
      {/* ===== Header ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
<<<<<<< HEAD
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Impact Stories
        </h1>
        <p className="text-zinc-400">
          Real stories of change, compassion, and community upliftment.
=======
        <div className="flex justify-center items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === "en" ? "Our Impact Stories" : "हमारी प्रभाव कहानियाँ"}
          </h1>
          <button
            onClick={toggleLanguage}
            className="bg-[#003366] hover:bg-[#004488] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            title={language === "en" ? "Switch to Hindi" : "Switch to English"}
          >
            <Languages size={20} />
            <span className="text-sm font-semibold">{language === "en" ? "हिं" : "EN"}</span>
          </button>
        </div>
        <p className="text-zinc-400">
          {language === "en"
            ? "Real stories of change, compassion, and community upliftment."
            : "परिवर्तन, करुणा और सामुदायिक उत्थान की वास्तविक कहानियाँ।"}
>>>>>>> e20eac0 (Updated Website UI and content)
        </p>
      </motion.div>

      {/* ===== Blog Grid ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ y: -6 }}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Image */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={post.image}
<<<<<<< HEAD
                alt={post.title}
=======
                alt={post.title[language]}
>>>>>>> e20eac0 (Updated Website UI and content)
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-sm text-zinc-500 mb-1">{post.date}</p>
<<<<<<< HEAD
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-zinc-700 text-sm mb-4">{post.short}</p>

              <button
                onClick={() => setActivePost(post)}
                className="text-[#FDCF09] font-semibold hover:underline"
              >
                Read More →
=======
              <h3 className="text-xl font-bold mb-2">{post.title[language]}</h3>
              <p className="text-zinc-700 text-sm mb-4">{post.short[language]}</p>

              <button
                onClick={() => setActivePost(post)}
                className="text-[#003366] font-semibold hover:underline"
              >
                {language === "en" ? "Read More →" : "और पढ़ें →"}
>>>>>>> e20eac0 (Updated Website UI and content)
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== Modal ===== */}
      {activePost && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white text-black max-w-3xl w-full rounded-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={() => setActivePost(null)}
<<<<<<< HEAD
              className="absolute top-4 right-4 z-10"
=======
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
>>>>>>> e20eac0 (Updated Website UI and content)
            >
              <X />
            </button>

            {/* Modal Image */}
            <div className="w-full aspect-[16/9]">
              <img
                src={activePost.image}
<<<<<<< HEAD
                alt={activePost.title}
=======
                alt={activePost.title[language]}
>>>>>>> e20eac0 (Updated Website UI and content)
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2">
<<<<<<< HEAD
                {activePost.title}
=======
                {activePost.title[language]}
>>>>>>> e20eac0 (Updated Website UI and content)
              </h2>
              <p className="text-sm text-zinc-500 mb-6">
                {activePost.date}
              </p>
              <p className="text-zinc-700 leading-relaxed whitespace-pre-line">
<<<<<<< HEAD
                {activePost.full}
=======
                {activePost.full[language]}
>>>>>>> e20eac0 (Updated Website UI and content)
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
