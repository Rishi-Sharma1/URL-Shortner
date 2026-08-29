import React, { useState } from 'react';
import UrlForm from '../components/UrlForm';
import GeometricLogo from '../components/GeometricLogo';
import { Link } from '@tanstack/react-router';
import { QRCodeCanvas } from 'qrcode.react';
import {
    Zap,
    Shield,
    BarChart3,
    Sparkles,
    ChevronDown,
    ArrowRight,
    CheckCircle2,
    Globe,
    Layers,
    Scissors,
    QrCode,
    Link2,
    Check,
    ArrowUpRight,
    TrendingUp,
    ArrowUp,
    ArrowDown
} from 'lucide-react';

const HomePage = () => {
    // Accordion & Tab States
    const [openFaq, setOpenFaq] = useState(0);
    const [activeTab, setActiveTab] = useState('qr');

    const faqs = [
        {
            q: "HOW DOES THE SHORT.LY URL SHORTENER WORK?",
            a: "Paste any long URL into our generator. We map your original link to a compact, high-speed 7-character nanoid code that instantly redirects users anywhere in the world under 50ms."
        },
        {
            q: "CAN I GENERATE AND DOWNLOAD QR CODES FOR MY LINKS?",
            a: "Yes! Every shortened link includes instant QR Code generation. Customize colors, preview, and download high-resolution PNG image files directly to your phone or computer."
        },
        {
            q: "CAN I CREATE CUSTOM BRANDED SHORT LINKS?",
            a: "Yes! Once signed in, you can create custom aliases (e.g. short.ly/my-brand) to match your campaign, portfolio, or brand identity."
        },
        {
            q: "IS SHORT.LY 100% FREE TO USE?",
            a: "Absolutely. Our core URL shortening service, QR code generator, click statistics, and custom alias features are completely free with no hidden paywalls."
        },
        {
            q: "DO SHORTENED LINKS AND QR CODES EVER EXPIRE?",
            a: "Links created by signed-in users remain permanent indefinitely (`expiresAt: null`). Free guest links expire after 30 minutes."
        }
    ];

    return (
        <div className="min-h-screen bg-[#F0F0F0] text-[#121212] font-['Outfit',sans-serif]">

            {/* HERO SECTION */}
            <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 border-b-4 border-[#121212] overflow-hidden">
                {/* Background Geometric Grid */}
                <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Column: Headlines & URL Form */}
                        <div className="lg:col-span-7 space-y-8">

                            {/* Badge */}
                            <div className="inline-flex items-center space-x-2 bg-[#F0C020] px-4 py-1.5 border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212]">
                                <Sparkles className="w-4 h-4 text-[#121212] fill-[#121212]" />
                                <span className="text-xs font-black uppercase tracking-widest text-[#121212]">
                                    URL SHORTENING ENGINE
                                </span>
                            </div>

                            {/* Main Display Headline */}
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-[#121212]">
                                SHORTEN<span className="text-[#D02020]">.</span><br />
                                TRACK<span className="text-[#1040C0]">.</span><br />
                                DOMINATE<span className="text-[#F0C020]">.</span>
                            </h1>

                            {/* Subhead */}
                            <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed max-w-2xl">
                                Transform ugly, bloated web addresses into sleek, high-conversion short links. Form follows function with sub-50ms global redirection and live analytics.
                            </p>

                            {/* Integrated URL Shortener Card */}
                            <div className="pt-2">
                                <UrlForm />
                            </div>

                        </div>

                        {/* Right Column: Bauhaus Constructivist Art Panel */}
                        <div className="lg:col-span-5 relative">
                            <div className="bg-[#1040C0] border-4 border-[#121212] shadow-[12px_12px_0px_0px_#121212] p-8 sm:p-12 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
                                {/* Dot Pattern Overlay */}
                                <div className="absolute inset-0 bg-dot-pattern-light opacity-30" />

                                {/* Floating Geometric Composition */}
                                <div className="relative z-10 space-y-6">

                                    {/* Red Circle */}
                                    <div className="w-24 h-24 rounded-full bg-[#D02020] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] flex items-center justify-center animate-bounce duration-[3000ms]">
                                        <Globe className="w-10 h-10 text-white" />
                                    </div>

                                    {/* Yellow Rotated Square Container */}
                                    <div className="bg-[#F0C020] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-6 max-w-xs transform rotate-2 hover:rotate-0 transition duration-200">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <Zap className="w-5 h-5 text-[#121212] fill-[#121212]" />
                                            <span className="text-xs font-black uppercase tracking-widest text-[#121212]">FAST REDIRECT</span>
                                        </div>
                                        <div className="text-3xl font-black text-[#121212] tracking-tighter">
                                            &lt; 50ms
                                        </div>
                                        <p className="text-[11px] font-bold text-gray-800 uppercase mt-1">
                                            Ultra-low latency routing
                                        </p>
                                    </div>

                                </div>

                                {/* Bottom Stat Badge */}
                                <div className="relative z-10 bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-4 h-4 rounded-full bg-[#D02020]" />
                                        <span className="text-xs font-black uppercase tracking-wider text-[#121212]">
                                            1,000,000+ LINKS CREATED
                                        </span>
                                    </div>
                                    <CheckCircle2 className="w-5 h-5 text-[#1040C0]" />
                                </div>

                                {/* Abstract Background Decorative Shapes */}
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#F0C020] border-4 border-[#121212] transform rotate-45 pointer-events-none opacity-80" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* STATS SECTION (SOLID BAUHAUS YELLOW BAR) */}
            <section className="bg-[#F0C020] border-b-4 border-[#121212]">
                <div className="max-w-7xl mx-auto divide-y-4 sm:divide-y-0 sm:divide-x-4 divide-[#121212] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="p-8 text-center sm:text-left space-y-1">
                        <div className="text-4xl sm:text-5xl font-black tracking-tighter text-[#121212]">1M+</div>
                        <div className="text-xs font-black uppercase tracking-widest text-[#121212]">URLS SHORTENED</div>
                    </div>

                    <div className="p-8 text-center sm:text-left space-y-1">
                        <div className="text-4xl sm:text-5xl font-black tracking-tighter text-[#121212]">&lt;50ms</div>
                        <div className="text-xs font-black uppercase tracking-widest text-[#121212]">AVERAGE LATENCY</div>
                    </div>

                    <div className="p-8 text-center sm:text-left space-y-1">
                        <div className="text-4xl sm:text-5xl font-black tracking-tighter text-[#121212]">99.9%</div>
                        <div className="text-xs font-black uppercase tracking-widest text-[#121212]">GUARANTEED UPTIME</div>
                    </div>

                    <div className="p-8 text-center sm:text-left space-y-1">
                        <div className="text-4xl sm:text-5xl font-black tracking-tighter text-[#121212]">100%</div>
                        <div className="text-xs font-black uppercase tracking-widest text-[#121212]">FREE FOREVER</div>
                    </div>

                </div>
            </section>


            {/* PROMOTION SHOWCASE CARDS SECTION (BITLY SLIDING DRAWER HOVER CARDS) */}
            <section className="py-20 sm:py-28 border-b-4 border-[#121212] bg-[#F0F0F0] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Title */}
                    <div className="mb-14 text-center space-y-3">
                        <div className="inline-block bg-[#1040C0] text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
                            ALL-IN-ONE PLATFORM
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#121212]">
                            WHAT YOU CAN BUILD WITH SHORT.LY
                        </h2>

                    </div>

                    {/* 3 Sliding Drawer Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                        {/* CARD 1: URL SHORTENER */}
                        <div className="group relative h-[540px] bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] hover:shadow-[12px_12px_0px_0px_#D02020] transition-all duration-300 overflow-hidden">
                            {/* Background Visual Mock Area */}
                            <div className="absolute inset-0 pb-36 p-6 bg-[#F4F4F0] flex flex-col justify-center space-y-4 overflow-hidden">
                                <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

                                {/* Floating UTM pill */}
                                <div className="self-start bg-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] px-3 py-1 text-[11px] font-mono font-bold text-gray-600 flex items-center space-x-1 animate-float">
                                    <span className="text-[#D02020] font-black">+</span>
                                    <span>?utm_medium=social</span>
                                </div>

                                {/* Shortened URL Preview Bar */}
                                <div className="bg-white border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212] p-3 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-[#D02020] flex items-center justify-center text-white font-black text-xs border border-[#121212]">
                                            S
                                        </div>
                                        <span className="font-mono text-sm font-black text-[#121212]">
                                            short.ly/my-brand
                                        </span>
                                    </div>
                                    <div className="bg-[#E8F5E9] text-[#2E7D32] border border-[#121212] p-1 animate-pulse">
                                        <TrendingUp className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Dynamic Routing Box */}
                                <div className="bg-white border-2 border-[#121212] p-3 space-y-1 text-[11px] font-mono text-gray-700 shadow-[2px_2px_0px_0px_#121212]">
                                    <div className="font-bold text-[#1040C0] uppercase tracking-wider text-[10px]">
                                        Dynamic Redirect Routing
                                    </div>
                                    <div>if <span className="font-bold text-[#121212]">Region == Global</span> and <span className="font-bold text-[#121212]">Device == Mobile</span></div>
                                    <div>Then go to <span className="underline font-bold text-[#D02020]">https://my-brand.com/app</span></div>
                                </div>
                            </div>

                            {/* Sliding Bottom Drawer */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white border-t-4 border-[#121212] p-6 space-y-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-120px)] group-hover:translate-y-0 shadow-[0px_-6px_0px_0px_rgba(0,0,0,0.05)]">
                                {/* Header */}
                                <div className="flex items-center justify-between cursor-pointer">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-9 h-9 bg-[#D02020] text-white border-2 border-[#121212] flex items-center justify-center shadow-[2px_2px_0px_0px_#121212]">
                                            <Link2 className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-[#121212]">
                                            URL SHORTENER
                                        </h3>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border-2 border-[#121212] bg-[#F0F0F0] flex items-center justify-center">
                                        <ArrowUp className="w-5 h-5 text-[#121212] group-hover:hidden" />
                                        <ArrowDown className="w-5 h-5 text-[#121212] hidden group-hover:block" />
                                    </div>
                                </div>

                                <p className="text-xs font-bold text-[#121212] leading-relaxed">
                                    Create polished, branded short links for every campaign you run with sub-50ms redirection speeds.
                                </p>

                                {/* Features checklist (shown on hover) */}
                                <div className="space-y-2 pt-2 border-t-2 border-dashed border-[#121212]">
                                    {[
                                        'AI-powered link creation',
                                        'Custom domains and back-halves',
                                        'URL redirects & custom aliases',
                                        'Bulk link shortening'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-[#121212]">
                                            <div className="w-4 h-4 rounded-full bg-[#D02020] text-white flex items-center justify-center shrink-0 border border-[#121212]">
                                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                                            </div>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="space-y-2 pt-2">
                                    <Link
                                        to="/auth"
                                        className="btn-bauhaus w-full bg-[#1040C0] text-white text-center font-black text-xs uppercase tracking-widest py-3 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] block hover:bg-[#0c3298]"
                                    >
                                        GET STARTED FOR FREE
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2: QR CODES */}
                        <div className="group relative h-[540px] bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] hover:shadow-[12px_12px_0px_0px_#F0C020] transition-all duration-300 overflow-hidden">
                            {/* Background Visual Mock Area */}
                            <div className="absolute inset-0 pb-36 p-6 bg-[#FFFDE7] flex flex-col items-center justify-center space-y-4 overflow-hidden">
                                <div className="bg-[#F0F0F0] border-2 border-[#121212] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#121212] flex items-center space-x-1">
                                    <QrCode className="w-3.5 h-3.5" />
                                    <span>QR CODE DESTINATION → REDIRECT</span>
                                </div>

                                {/* Animated Live QR Code Canvas Box */}
                                <div className="p-3 bg-white border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212] flex flex-col items-center animate-pulse-glow">
                                    <QRCodeCanvas value="https://short.ly" size={130} fgColor="#121212" level="H" />
                                </div>

                                <div className="bg-white border-2 border-[#121212] px-4 py-1.5 text-xs font-mono font-bold text-[#121212] shadow-[2px_2px_0px_0px_#121212]">
                                    Total scans: <span className="font-black text-[#1040C0]">1,200</span>
                                </div>
                            </div>

                            {/* Sliding Bottom Drawer */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white border-t-4 border-[#121212] p-6 space-y-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-120px)] group-hover:translate-y-0 shadow-[0px_-6px_0px_0px_rgba(0,0,0,0.05)]">
                                {/* Header */}
                                <div className="flex items-center justify-between cursor-pointer">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-9 h-9 bg-[#F0C020] text-[#121212] border-2 border-[#121212] flex items-center justify-center shadow-[2px_2px_0px_0px_#121212]">
                                            <QrCode className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-[#121212]">
                                            QR CODES
                                        </h3>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border-2 border-[#121212] bg-[#F0F0F0] flex items-center justify-center">
                                        <ArrowUp className="w-5 h-5 text-[#121212] group-hover:hidden" />
                                        <ArrowDown className="w-5 h-5 text-[#121212] hidden group-hover:block" />
                                    </div>
                                </div>

                                <p className="text-xs font-bold text-[#121212] leading-relaxed">
                                    Generate dynamic, custom QR Codes you can download as PNG/SVG and update anytime.
                                </p>

                                {/* Features checklist (shown on hover) */}
                                <div className="space-y-2 pt-2 border-t-2 border-dashed border-[#121212]">
                                    {[
                                        'Customizable colors, patterns, and logos',
                                        'Dynamic 302 QR Redirection',
                                        'PNG/JPEG/SVG downloads',
                                        'Bulk QR Code creation'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-[#121212]">
                                            <div className="w-4 h-4 rounded-full bg-[#F0C020] text-[#121212] flex items-center justify-center shrink-0 border border-[#121212]">
                                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                                            </div>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="space-y-2 pt-2">
                                    <Link
                                        to="/auth"
                                        className="btn-bauhaus w-full bg-[#1040C0] text-white text-center font-black text-xs uppercase tracking-widest py-3 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] block hover:bg-[#0c3298]"
                                    >
                                        GET STARTED FOR FREE
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3: ANALYTICS */}
                        <div className="group relative h-[540px] bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] hover:shadow-[12px_12px_0px_0px_#1040C0] transition-all duration-300 overflow-hidden">
                            {/* Background Visual Mock Area */}
                            <div className="absolute inset-0 pb-36 p-6 bg-[#F4F4F0] flex flex-col justify-center space-y-4 overflow-hidden">
                                <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

                                {/* Engagement Header Card */}
                                <div className="bg-white border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212] p-3 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block">
                                            TOTAL ENGAGEMENTS
                                        </span>
                                        <span className="text-2xl font-black text-[#121212] tracking-tighter">
                                            1,422 <span className="text-xs font-bold text-[#2E7D32]">+20%</span>
                                        </span>
                                    </div>
                                    <BarChart3 className="w-6 h-6 text-[#1040C0] animate-bounce" />
                                </div>

                                {/* Quick Prompts Box */}
                                <div className="bg-white border-2 border-[#121212] p-2.5 space-y-1.5 shadow-[2px_2px_0px_0px_#121212]">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">
                                        ANALYTICS INSIGHTS
                                    </div>
                                    <div className="bg-[#F0F0F0] border border-[#121212] px-2 py-1 text-[11px] font-bold text-[#121212] flex items-center justify-between">
                                        <span>Summarize last 7 days</span>
                                        <span className="font-mono text-[#1040C0]">879 clicks</span>
                                    </div>
                                    <div className="bg-[#F0F0F0] border border-[#121212] px-2 py-1 text-[11px] font-bold text-[#121212] flex items-center justify-between">
                                        <span>Top performing link</span>
                                        <span className="font-mono text-[#D02020]">/my-brand</span>
                                    </div>
                                </div>

                                {/* Mini Sparkline Graph Bar */}
                                <div className="bg-[#121212] text-[#F0C020] border-2 border-[#121212] p-3 flex items-end justify-between space-x-1.5 h-16 shadow-[2px_2px_0px_0px_#121212]">
                                    {[35, 55, 40, 75, 60, 90, 100].map((val, idx) => (
                                        <div
                                            key={idx}
                                            className="flex-1 bg-[#F0C020] border border-[#121212] transition-all hover:bg-[#D02020] animate-bar-grow"
                                            style={{ height: `${val}%`, animationDelay: `${idx * 100}ms` }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Sliding Bottom Drawer */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white border-t-4 border-[#121212] p-6 space-y-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-120px)] group-hover:translate-y-0 shadow-[0px_-6px_0px_0px_rgba(0,0,0,0.05)]">
                                {/* Header */}
                                <div className="flex items-center justify-between cursor-pointer">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-9 h-9 bg-[#1040C0] text-white border-2 border-[#121212] flex items-center justify-center shadow-[2px_2px_0px_0px_#121212]">
                                            <BarChart3 className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-[#121212]">
                                            ANALYTICS
                                        </h3>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border-2 border-[#121212] bg-[#F0F0F0] flex items-center justify-center">
                                        <ArrowUp className="w-5 h-5 text-[#121212] group-hover:hidden" />
                                        <ArrowDown className="w-5 h-5 text-[#121212] hidden group-hover:block" />
                                    </div>
                                </div>

                                <p className="text-xs font-bold text-[#121212] leading-relaxed">
                                    See what's working across your links and QR Codes, simply and clearly.
                                </p>

                                {/* Features checklist (shown on hover) */}
                                <div className="space-y-2 pt-2 border-t-2 border-dashed border-[#121212]">
                                    {[
                                        'Geography, referrer, and device tracking',
                                        'Cross-channel analytics dashboards',
                                        'Real-time click statistics & counts',
                                        'Campaign performance and UTMs'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-[#121212]">
                                            <div className="w-4 h-4 rounded-full bg-[#1040C0] text-white flex items-center justify-center shrink-0 border border-[#121212]">
                                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                                            </div>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="space-y-2 pt-2">
                                    <Link
                                        to="/auth"
                                        className="btn-bauhaus w-full bg-[#1040C0] text-white text-center font-black text-xs uppercase tracking-widest py-3 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] block hover:bg-[#0c3298]"
                                    >
                                        GET STARTED FOR FREE
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* HOW IT WORKS SECTION */}
            <section className="py-20 sm:py-28 border-b-4 border-[#121212] bg-[#F0F0F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="mb-16 text-center space-y-3">
                        <div className="inline-block bg-[#D02020] text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
                            SIMPLE & FUNCTIONAL
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#121212]">
                            HOW IT WORKS
                        </h2>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Step 1 */}
                        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 relative group hover:-translate-y-1 transition duration-200">
                            <div className="w-10 h-10 bg-[#D02020] text-white font-black text-lg border-2 border-[#121212] flex items-center justify-center transform -rotate-6 mb-6 shadow-[3px_3px_0px_0px_#121212]">
                                01
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-[#121212] mb-2">PASTE YOUR LINK</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Enter your long, complicated destination URL into our clean generator input.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 relative group hover:-translate-y-1 transition duration-200">
                            <div className="w-10 h-10 bg-[#1040C0] text-white font-black text-lg border-2 border-[#121212] flex items-center justify-center transform rotate-6 mb-6 shadow-[3px_3px_0px_0px_#121212]">
                                02
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-[#121212] mb-2">CUSTOMIZE SLUG</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Optionally add a custom branded slug (e.g. /my-campaign) to boost click-throughs.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 relative group hover:-translate-y-1 transition duration-200">
                            <div className="w-10 h-10 bg-[#F0C020] text-[#121212] font-black text-lg border-2 border-[#121212] flex items-center justify-center transform -rotate-6 mb-6 shadow-[3px_3px_0px_0px_#121212]">
                                03
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-[#121212] mb-2">COPY & SHARE</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Instantly copy your shortened URL with one click and share across socials or emails.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 relative group hover:-translate-y-1 transition duration-200">
                            <div className="w-10 h-10 bg-[#121212] text-white font-black text-lg border-2 border-[#121212] flex items-center justify-center transform rotate-6 mb-6 shadow-[3px_3px_0px_0px_#121212]">
                                04
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-[#121212] mb-2">TRACK ANALYTICS</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Monitor click counts and engagement performance in real-time on your dashboard.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* FEATURES SECTION (SOLID BAUHAUS BLUE PANEL) */}
            <section className="bg-[#1040C0] text-white py-20 sm:py-28 border-b-4 border-[#121212] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="mb-16 text-center space-y-3">
                        <div className="inline-block bg-[#F0C020] text-[#121212] text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
                            POWERFUL ARCHITECTURE
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
                            BUILT FOR PERFORMANCE
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Feature 1 */}
                        <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4 relative">
                            <div className="w-12 h-12 bg-[#D02020] text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] flex items-center justify-center">
                                <Scissors className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight">BRANDED SLUGS</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Replace random strings with custom memorable slugs that reinforce your brand and build trust.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4 relative">
                            <div className="w-12 h-12 bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] flex items-center justify-center">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight">REAL-TIME STATS</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Track total click activity for every generated link directly inside your personal dashboard.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4 relative">
                            <div className="w-12 h-12 bg-[#1040C0] text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] flex items-center justify-center">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight">SUB-50MS SPEED</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Optimized Express routes guarantee immediate 302 redirects with zero delay or lag.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4 relative">
                            <div className="w-12 h-12 bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] flex items-center justify-center">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight">SECURE SESSIONS</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Encrypted JWT authentication and HTTP-only cookies protect your link management.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4 relative">
                            <div className="w-12 h-12 bg-[#D02020] text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] flex items-center justify-center">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight">SINGLE URL HOSTING</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Full-stack architecture serving both React frontend and Express backend on one single domain.
                            </p>
                        </div>


                    </div>

                </div>
            </section>


            {/* FAQ SECTION (BAUHAUS ACCORDION) */}
            <section className="py-20 sm:py-28 border-b-4 border-[#121212] bg-[#F0F0F0]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-14 text-center space-y-3">
                        <div className="inline-block bg-[#F0C020] text-[#121212] text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
                            FREQUENTLY ASKED QUESTIONS
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#121212]">
                            CLEAR ANSWERS
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className="border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] transition duration-150 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                                        className={`w-full p-6 text-left font-black text-base sm:text-lg uppercase tracking-tight flex items-center justify-between transition duration-150 ${isOpen ? 'bg-[#D02020] text-white' : 'bg-white text-[#121212] hover:bg-[#F0C020]'
                                            }`}
                                    >
                                        <span>{faq.q}</span>
                                        <div className={`p-1 border-2 border-[#121212] transition-transform duration-200 ${isOpen ? 'bg-white text-[#121212] rotate-180' : 'bg-[#F0F0F0] text-[#121212]'
                                            }`}>
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </button>

                                    {isOpen && (
                                        <div className="bg-[#FFF9C4] p-6 border-t-4 border-[#121212] text-sm font-medium text-[#121212] leading-relaxed">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>


            {/* FINAL CALL TO ACTION (SOLID BAUHAUS RED PANEL) */}
            <section className="bg-[#D02020] text-white py-20 sm:py-28 border-b-4 border-[#121212] relative overflow-hidden">
                {/* Background Rotated Shape */}
                <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#F0C020] border-4 border-[#121212] transform -translate-y-1/2 rotate-45 opacity-20 pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
                    <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                        START SHORTENING<br />
                        LINKS IN SECONDS
                    </h2>
                    <p className="text-lg sm:text-xl font-medium text-white/90 max-w-xl mx-auto">
                        Join thousands of creators, developers, and marketers who rely on Short.ly for fast, reliable link shortening.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            to="/auth"
                            className="btn-bauhaus bg-[#F0C020] text-[#121212] font-black text-base uppercase tracking-widest px-8 py-4 border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] inline-flex items-center space-x-2"
                        >
                            <span>CREATE FREE ACCOUNT</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="#url"
                            className="btn-bauhaus bg-white text-[#121212] font-black text-base uppercase tracking-widest px-8 py-4 border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212]"
                        >
                            TRY GENERATOR ABOVE
                        </a>
                    </div>
                </div>
            </section>


            {/* FOOTER */}
            <footer className="bg-[#121212] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-gray-800">
                        <GeometricLogo size="large" />

                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-black uppercase tracking-widest text-gray-400">
                            <Link to="/" className="hover:text-[#F0C020] transition">HOME</Link>
                            <Link to="/auth" className="hover:text-[#F0C020] transition">SIGN IN</Link>
                            <Link to="/dashboard" className="hover:text-[#F0C020] transition">DASHBOARD</Link>
                        </div>
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
                        <p>© {new Date().getFullYear()} SHORT.LY — ALL RIGHTS RESERVED.</p>
                        <p className="flex items-center space-x-1">
                            <span>BUILT WITH FORM & FUNCTION</span>
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default HomePage;