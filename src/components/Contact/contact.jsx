import { Mail, MessageSquare, Send, User } from 'lucide-react';
import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
    };

    return (
        <section className="bg-black px-4 py-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    
                    {/* Left Side: Branding & Info */}
                    <div className="flex-1 text-center lg:text-left">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                            Drive Inspired
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
                            Join the Elite <br />
                            <span className="text-primary">Collector's Circle</span>
                        </h2>
                        <p className="text-gray-400 text-md md:text-md max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Get weekly curations of rare finds, expert performance reviews, and 
                            exclusive early access to our newest fleet additions.
                        </p>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="flex-[1.2] w-full  p-8 md:p-12 rounded-sm border backdrop-blur-sm">
                        <form className="space-y-6">
                            
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300 ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#3BB77E] transition-colors" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-white/10 px-12 py-3 rounded-2xl border border-white/5 focus:border-[#3BB77E]/50 focus:ring-2 focus:ring-[#3BB77E]/20 transition-all outline-none text-white placeholder:text-gray-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300 ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#3BB77E] transition-colors" size={20} />
                                    <input
                                        type="email"
                                        placeholder="driftly@gmail.com"
                                        className="w-full bg-white/10 px-12 py-3 rounded-2xl border border-white/5 focus:border-[#3BB77E]/50 focus:ring-2 focus:ring-[#3BB77E]/20 transition-all outline-none text-white placeholder:text-gray-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300 ml-1">Message</label>
                                <div className="relative group">
                                    <MessageSquare className="absolute left-4 top-4 text-gray-500 group-focus-within:text-[#3BB77E] transition-colors" size={20} />
                                    <textarea
                                        rows="4"
                                        placeholder="How can we help you today?"
                                        className="w-full bg-white/10 px-12 py-3 rounded-2xl border border-white/5 focus:border-[#3BB77E]/50 focus:ring-2 focus:ring-[#3BB77E]/20 transition-all outline-none text-white placeholder:text-gray-500 resize-none"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-[#3BB77E] hover:bg-[#2e9163] text-white font-bold py-3 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group text-md shadow-lg shadow-[#3BB77E]/20 active:scale-[0.98]"
                            >
                                Send Message
                                <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;