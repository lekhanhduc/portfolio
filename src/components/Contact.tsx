import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas/Earth";

const Toast = ({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: -50, x: "-50%" }}
      className={`fixed top-20 left-1/2 z-50 px-5 py-3 rounded-md shadow-2xl flex items-center gap-2.5 ${
        type === "success" 
          ? "bg-emerald-500 text-white" 
          : "bg-rose-500 text-white"
      }`}
    >
      {type === "success" ? (
        <FaCheckCircle className="text-base" />
      ) : (
        <FaTimesCircle className="text-base" />
      )}
      <span className="font-medium text-xs sm:text-sm">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-70 transition-opacity p-0.5">
        ✕
      </button>
    </motion.div>
  );
};

const Contact = () => {
  const { theme } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success"
  });

  const isDark = theme === "dark";

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_2tyggw9"; 
    const templateId = "template_rp4axkc"; 
    const publicKey = "zaxJqvfEmlAbFArdF";

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      to_name: "Le Khanh Duc",
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setLoading(false);
        showToast("Message sent successfully! I'll get back to you soon.", "success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        showToast("Failed to send message. Please try again or email me directly.", "error");
      });
  };

  return (
    <section id="contact" className="py-10 sm:py-14 relative flex justify-center overflow-hidden">
      <AnimatePresence>
        {toast.show && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast({ ...toast, show: false })} 
          />
        )}
      </AnimatePresence>

      <div className="w-full max-w-6xl px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Form & Info Card (7 cols) - Squared & Compact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className={`lg:col-span-7 rounded-lg border p-5 sm:p-7 transition-all duration-200 ${
              isDark
                ? "bg-slate-900/85 backdrop-blur-md border-white/10 shadow-xl shadow-black/40"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            {/* Header */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-mono font-semibold tracking-wider uppercase mb-2">
                <HiMail className="text-xs" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                Let's Work Together<span className="text-orange-500">.</span>
              </h2>
              <p className={`text-xs mt-1 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Have a project in mind, an engineering role, or just want to connect? Send me a message!
              </p>
            </div>

            {/* Contact Pills: Squared */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              <a
                href="mailto:lekhanhduc212003@gmail.com"
                className={`p-2.5 rounded-md border flex items-center gap-2.5 transition-all duration-150 group ${
                  isDark
                    ? "bg-slate-950/60 border-white/10 hover:border-orange-500/40 hover:bg-slate-900"
                    : "bg-slate-50 border-slate-200 hover:border-orange-400 hover:bg-white shadow-sm"
                }`}
              >
                <div className="w-7 h-7 rounded-md bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                  <FaEnvelope className="text-xs" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] uppercase font-semibold text-slate-400">Email</p>
                  <p className={`text-xs font-medium truncate ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    lekhanhduc212003@gmail.com
                  </p>
                </div>
              </a>

              <div
                className={`p-2.5 rounded-md border flex items-center gap-2.5 ${
                  isDark
                    ? "bg-slate-950/60 border-white/10"
                    : "bg-slate-50 border-slate-200 shadow-sm"
                }`}
              >
                <div className="w-7 h-7 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <FaMapMarkerAlt className="text-xs" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] uppercase font-semibold text-slate-400">Location</p>
                  <p className={`text-xs font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    Da Nang, Vietnam
                  </p>
                </div>
              </div>
            </div>

            {/* Main Form: Squared */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className={`text-[11px] font-semibold mb-1 block ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  required
                  className={`w-full px-3.5 py-2.5 rounded-md border text-xs sm:text-sm transition-all outline-none ${
                    isDark
                      ? "bg-slate-950/70 border-white/10 text-white placeholder-slate-500 focus:border-orange-500 focus:bg-slate-950 focus:ring-2 focus:ring-orange-500/15"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                  }`}
                />
              </div>

              <div>
                <label className={`text-[11px] font-semibold mb-1 block ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className={`w-full px-3.5 py-2.5 rounded-md border text-xs sm:text-sm transition-all outline-none ${
                    isDark
                      ? "bg-slate-950/70 border-white/10 text-white placeholder-slate-500 focus:border-orange-500 focus:bg-slate-950 focus:ring-2 focus:ring-orange-500/15"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                  }`}
                />
              </div>

              <div>
                <label className={`text-[11px] font-semibold mb-1 block ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or role..."
                  required
                  rows={3}
                  className={`w-full px-3.5 py-2.5 rounded-md border text-xs sm:text-sm transition-all outline-none resize-none ${
                    isDark
                      ? "bg-slate-950/70 border-white/10 text-white placeholder-slate-500 focus:border-orange-500 focus:bg-slate-950 focus:ring-2 focus:ring-orange-500/15"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-md text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm shadow-orange-500/25 hover:shadow-md hover:shadow-orange-500/35 cursor-pointer"
              >
                {loading ? "Sending Message..." : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: 3D Earth Canvas Globe (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-[280px] sm:h-[320px] lg:h-[360px] w-full flex items-center justify-center relative overflow-hidden"
          >
            <div className="w-full h-full relative flex items-center justify-center">
              <EarthCanvas isLight={!isDark} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
