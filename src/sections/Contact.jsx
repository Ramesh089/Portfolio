import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Terminal,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);

    // Launch celebratory particle confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#3b82f6', '#8b5cf6']
      });
    } catch (e) {
      // Graceful fallback
    }

    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);

      // Open email client with prefilled parameters so user actually sends the email
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have an opportunity, project collaboration, or question? Connect directly with me.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">Direct Channels</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am actively seeking software engineering and full-stack development opportunities. Feel free to reach out via email or connect on LinkedIn and GitHub.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Contact Number</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400">Connect Online</div>
                <div className="flex items-center space-x-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-6">
                <Terminal className="w-4 h-4" />
                <span>transmission_terminal // message_composer</span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Prepared!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your transmission has been queued and directed to <strong className="text-cyan-300">{personalInfo.email}</strong>. If your mail client did not automatically launch, you can email directly at any time.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-mono uppercase bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                  >
                    Compose Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                          errors.name ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                        } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                          errors.email ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                        } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Project Collaboration / Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                        errors.subject ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                        errors.message ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSending ? 'Dispatching Message...' : 'Send Direct Message'}</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 font-mono">
                    Direct routing to {personalInfo.email} with automated verification.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
