import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xblkjnlo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            ),
            title: 'Email',
            value: 'behdegryjeremieharding@gmail.com',
            link: 'mailto:behdegryjeremieharding@gmail.com'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            ),
            title: 'Téléphone',
            value: '+225 01 42 00 32 84',
            link: 'tel:+2250142003284'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            ),
            title: 'Localisation',
            value: 'Abidjan, Côte d\'Ivoire',
            link: '#'
        }
    ];

    return (
        <section className="min-h-screen bg-[#050505] relative overflow-hidden pt-24 pb-20 px-4 sm:px-8">
            {/* Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4468b8]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8d6b5d]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Contactez-<span className="text-[#4468b8]">Moi</span>
                    </h1>
                    <p className="text-[#8a9fc4] max-w-2xl mx-auto text-lg leading-relaxed">
                        Un projet en tête, une opportunité ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Infos de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 flex flex-col gap-6"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.a
                                href={info.link}
                                key={index}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-center gap-6 p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#4468b8]/30 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#dfd7c1] group-hover:text-[#4468b8] transition-colors relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#8d6b5d]/0 via-[#4468b8]/0 to-purple-500/0 group-hover:from-[#8d6b5d]/20 group-hover:via-[#4468b8]/20 transition-all duration-500"></div>
                                    <div className="relative z-10">{info.icon}</div>
                                </div>
                                <div>
                                    <h3 className="text-sm uppercase tracking-widest text-[#8a9fc4] font-medium mb-1 group-hover:text-white transition-colors">{info.title}</h3>
                                    <p className="text-[#dfd7c1] font-medium text-lg">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}

                        {/* Social Links */}
                        <div className="mt-8 p-6 rounded-2xl bg-[#111111] border border-white/5">
                            <h3 className="text-sm uppercase tracking-widest text-[#8a9fc4] font-medium mb-6">Réseaux Sociaux</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: "github", label: "GitHub", link: "https://github.com/Harding10" },
                                    { icon: "linkedin", label: "LinkedIn", link: "https://www.linkedin.com/in/jeremie-harding/" }
                                ].map((social, index) => (
                                    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#dfd7c1] hover:bg-[#4468b8] hover:border-transparent hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                        <span className="sr-only">{social.label}</span>
                                        {social.icon === 'github' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                        )}
                                        {social.icon === 'linkedin' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-3 bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Glow subtil sur le coté */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#4468b8]/5 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Envoyez-moi un message</h2>

                        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-[#8a9fc4]">Nom complet</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#4468b8] focus:ring-1 focus:ring-[#4468b8] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-[#8a9fc4]">Adresse Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#4468b8] focus:ring-1 focus:ring-[#4468b8] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-[#8a9fc4]">Sujet</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Proposition de projet"
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#4468b8] focus:ring-1 focus:ring-[#4468b8] transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[#8a9fc4]">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Ce que vous avez à me dire..."
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#4468b8] focus:ring-1 focus:ring-[#4468b8] transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl text-white font-bold tracking-widest uppercase text-sm transition-all duration-300 flex items-center justify-center gap-3 ${submitStatus === 'success'
                                    ? 'bg-green-600 hover:bg-green-700'
                                    : 'bg-[#4468b8] hover:bg-[#355396] disabled:opacity-70'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Envoi en cours...
                                    </>
                                ) : submitStatus === 'success' ? (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Message Envoyé
                                    </>
                                ) : (
                                    <>
                                        <span>Envoyer le message</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}