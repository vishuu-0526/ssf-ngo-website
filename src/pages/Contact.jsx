import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
<<<<<<< HEAD
import { CheckCircle, XCircle, X } from "lucide-react";
=======
import { CheckCircle, XCircle, X, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";
import { CONTACT_INFO } from "../config/contact";
>>>>>>> e20eac0 (Updated Website UI and content)

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

<<<<<<< HEAD
  const [formStatus, setFormStatus] = useState({
    submitting: false, // <- start false
    success: false,
    error: false,
    message: "",
  });

=======
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> e20eac0 (Updated Website UI and content)
  const [toast, setToast] = useState({
    show: false,
    type: "", // "success" or "error"
    message: "",
  });

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
  };

  const hideToast = () => {
    setToast({ show: false, type: "", message: "" });
  };

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic front-end validation (optional)
    if (!formData.firstName || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Please fill required fields.",
      });
      return;
    }

    // basic front-end validation
    if (!formData.firstName || !formData.email || !formData.message) {
      showToast("error", "Please fill in all required fields");
=======
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      showToast("error", "Please fill in all required fields.");
>>>>>>> e20eac0 (Updated Website UI and content)
      return;
    }

    setIsSubmitting(true);

<<<<<<< HEAD
    setFormStatus((s) => ({ ...s, submitting: true, message: "" }));

=======
>>>>>>> e20eac0 (Updated Website UI and content)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
<<<<<<< HEAD
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
=======
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
>>>>>>> e20eac0 (Updated Website UI and content)
          message: formData.message,
        }
      );

<<<<<<< HEAD
      // Simulate success (80% success rate for demo)
      if (Math.random() > 0.2) {
        showToast("success", "Message successfully submitted!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Simulated error");
      }

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });
      
    } catch (error) {
      console.error("emailjs error:", error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again!",
      });

      console.error("Error:", error);
=======
      showToast("success", "Message successfully submitted!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("emailjs error:", error);
>>>>>>> e20eac0 (Updated Website UI and content)
      showToast("error", "Failed to send message. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="w-full p-4 xl:p-2">

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 duration-300">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border-2 min-w-[320px] ${
              toast.type === "success"
                ? "bg-green-50 border-green-500 text-green-900"
                : "bg-red-50 border-red-500 text-red-900"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            )}
            <span className="font-semibold flex-1">{toast.message}</span>
            <button
              onClick={hideToast}
              className={`p-1 rounded-full hover:bg-white/50 transition-colors ${
                toast.type === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
=======
    <main className="min-h-screen bg-white">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-right-10 duration-300">
          <div
            className={`flex items-center gap-4 px-8 py-5 rounded-2xl shadow-2xl border ${toast.type === "success"
              ? "bg-white border-green-500 text-green-900"
              : "bg-white border-red-500 text-red-900"
              }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-6 h-6 text-green-600" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600" />
            )}
            <span className="font-bold">{toast.message}</span>
            <button onClick={hideToast} className="p-1 hover:bg-zinc-100 rounded-full transition-colors">
>>>>>>> e20eac0 (Updated Website UI and content)
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

<<<<<<< HEAD
      <div className="wrapper max-w-6xl md:p-10 p-5 min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-3xl bg-[#E6E6E6] shadow-[7px_7px_0px_#555] mx-auto mt-22 mb-5">
        <div className="first_content space-y-8 flex flex-col justify-center">
          <h2 className="flex flex-col font-extrabold text-4xl">
            <span>Get in</span>
            <span>touch with us</span>
          </h2>
          <p>
            We’re here to support you. Whether you want to learn more about our
            projects, partner with us, volunteer, or contribute to a cause, our
            team is always ready to help.
          </p>
          <div className="email">
            <p className="font-medium">Email:</p>
            <p className="font-extrabold text-lg">
              swastiksrijanfoundation@gmail.com
            </p>
          </div>
          <div className="phone">
            <p className="font-medium">Phone:</p>
            <p className="font-extrabold text-lg">+91 9424626518</p>
          </div>
        </div>

        <div className="second_content bg-[#FFFFFF] p-6 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="name grid grid-cols-2 gap-6">
              <div className="first_name flex flex-col gap-1">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  value={formData.firstName}
                  onChange={handleChange}
=======
      {/* ================= HERO ================= */}
      <section className="bg-[#001529] text-white pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fb8500] opacity-[0.05] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs mb-4 inline-block">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight">
              Let's <span className="text-[#fb8500]">Connect.</span>
            </h1>
            <p className="text-zinc-400 mt-8 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              We’re here to support you. Whether you want to partner with us, volunteer, or contribute to a cause.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#002344]">
                Reach out to our team.
              </h2>
              <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                Choose the most convenient way to reach us. Our team responds to all inquiries within 24-48 hours.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail />, label: "Email Us", value: CONTACT_INFO.primaryEmail, sub: CONTACT_INFO.secondaryEmail, color: "bg-blue-50 text-[#002344]" },
                { icon: <Phone />, label: "Call Us", value: CONTACT_INFO.phones.primaryFormatted, sub: CONTACT_INFO.phones.secondaryFormatted, color: "bg-green-50 text-green-600" },
                { icon: <MapPin />, label: "Our Location", value: CONTACT_INFO.address.operational, sub: `Registered: ${CONTACT_INFO.address.registered}`, color: "bg-red-50 text-[#d90429]" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className={`w-16 h-16 ${item.color} rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-2xl font-serif font-bold text-[#002344]">{item.value}</p>
                    <p className="text-zinc-500 font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] border border-zinc-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-4">First Name</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="w-full px-8 py-4 bg-[#f8f9fa] border-none rounded-2xl focus:ring-4 focus:ring-[#fb8500]/10 transition-all font-medium"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-4">Last Name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-8 py-4 bg-[#f8f9fa] border-none rounded-2xl focus:ring-4 focus:ring-[#fb8500]/10 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-4">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full px-8 py-4 bg-[#f8f9fa] border-none rounded-2xl focus:ring-4 focus:ring-[#fb8500]/10 transition-all font-medium"
>>>>>>> e20eac0 (Updated Website UI and content)
                  required
                />
              </div>

<<<<<<< HEAD
              <div className="last_name flex flex-col gap-1">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="email flex flex-col gap-1">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="message flex flex-col gap-1">
              <label htmlFor="message">How can we help you?</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Write your message..."
                className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="btn">
              <button
                type="submit"
                className="bg-[#0D0D0D] active:scale-96 transition-all duration-150 text-white font-medium flex items-center justify-center text-lg tracking-wide gap-3 px-6 py-3 cursor-pointer rounded-2xl disabled:opacity-60"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <img
                  src="./images/send_msg.svg"
                  alt=""
                  className="w-8 hover:rotate-50 transition-all duration-200"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
=======
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-4">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="How can we help you today?"
                  className="w-full px-8 py-4 bg-[#f8f9fa] border-none rounded-2xl focus:ring-4 focus:ring-[#fb8500]/10 transition-all font-medium resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-6 text-xl group"
              >
                <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                <Send className={`w-6 h-6 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-2'}`} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= BANNER ================= */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#002344]/40 to-transparent z-10"></div>
          <OptimizedImage
            src="/images/real/foundation_banner.jpg"
            alt="Swastik Srijan Foundation"
            className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute bottom-12 left-12 z-20 hidden md:block">
            <p className="text-6xl font-serif font-bold text-white leading-tight">
              Empowering Lives, <br /> Building Futures.
            </p>
          </div>
        </div>
      </section>
    </main>
>>>>>>> e20eac0 (Updated Website UI and content)
  );
}
