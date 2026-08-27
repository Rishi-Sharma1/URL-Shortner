import React, { useState } from 'react';
import { createShortUrl } from '../api/shortUrl.api';
import { useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Copy, Check, ArrowRight, Sparkles, Clock, AlertTriangle } from 'lucide-react';

const UrlForm = () => {
    const queryClient = useQueryClient();
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [customSlug, setCustomSlug] = useState('');
    const { isAuthenticated } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!url) return;
        setLoading(true);
        setError(null);
        setShortUrl('');

        try {
            const result = await createShortUrl(url, customSlug);
            setShortUrl(result);
            queryClient.invalidateQueries({ queryKey: ['userUrls'] });
        } catch (err) {
            setError(err.message || 'Failed to shorten URL. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        if (!shortUrl) return;
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 sm:p-8 relative overflow-hidden">
            {/* Top Right Decorative Geometric Shape */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#D02020] border-b-2 border-l-2 border-[#121212]" />

            {/* Disclaimer for Unlogged Free Users */}
            {!isAuthenticated ? (
                <div className="mb-6 p-4 bg-[#FFF9C4] border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212] flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-[#D02020] shrink-0 mt-0.5" />
                    <div className="text-xs font-bold text-[#121212] space-y-1">
                        <p className="uppercase tracking-wider">
                            <span className="font-black text-[#D02020]">FREE URL DISCLAIMER:</span> Free generated URLs are valid for <span className="underline font-black">30 minutes only</span> and will automatically be deleted from our database.
                        </p>
                        <p className="text-[11px] text-gray-700 font-medium">
                            <Link to="/auth" className="font-black text-[#1040C0] underline hover:text-[#0c3298]">
                                Sign in or Register
                            </Link>{' '}
                            to create permanent links, custom aliases & manage your dashboard.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="mb-6 p-3 bg-[#E8F5E9] border-2 border-[#121212] flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-[#2E7D32]">
                    <Clock className="w-4 h-4 text-[#2E7D32]" />
                    <span>PERMANENT LINK CREATION ACTIVE</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="url" className="block text-xs font-black uppercase tracking-widest text-[#121212] mb-2 flex items-center justify-between">
                        <span>DESTINATION URL</span>
                        <span className="text-[#D02020] font-mono">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type="url"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://your-very-long-link.com/path"
                            required
                            className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[#121212] font-medium border-2 border-[#121212] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1040C0] transition placeholder:text-gray-400 text-sm sm:text-base"
                        />
                    </div>
                </div>

                {isAuthenticated && (
                    <div>
                        <label htmlFor="customSlug" className="block text-xs font-black uppercase tracking-widest text-[#121212] mb-2 flex items-center justify-between">
                            <span className="flex items-center space-x-1.5">
                                <span>CUSTOM ALIAS</span>
                                <Sparkles className="w-3.5 h-3.5 text-[#F0C020] fill-[#F0C020]" />
                            </span>
                            <span className="text-gray-500 text-[10px]">OPTIONAL</span>
                        </label>
                        <div className="flex border-2 border-[#121212] bg-[#F0F0F0]">
                            <span className="inline-flex items-center px-3 text-xs font-mono font-bold text-gray-600 border-r-2 border-[#121212] bg-[#E0E0E0]">
                                /
                            </span>
                            <input
                                type="text"
                                id="customSlug"
                                value={customSlug}
                                onChange={(e) => setCustomSlug(e.target.value)}
                                placeholder="my-custom-slug"
                                className="w-full px-3 py-2.5 bg-transparent text-[#121212] font-medium focus:outline-none focus:bg-white text-sm"
                            />
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading || !url}
                    className="btn-bauhaus w-full bg-[#D02020] text-white font-black text-sm uppercase tracking-widest py-4 px-6 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] hover:bg-[#b01818] flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                    <span>{loading ? 'SHORTENING...' : 'SHORTEN URL NOW'}</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </form>

            {error && (
                <div className="mt-4 p-3 bg-[#FFEBEE] border-2 border-[#D02020] text-[#D02020] text-xs font-bold uppercase tracking-wider">
                    {error}
                </div>
            )}

            {shortUrl && (
                <div className="mt-6 p-4 bg-[#F0C020] border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212] animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#121212] bg-white px-2 py-0.5 border border-[#121212]">
                            URL SHORTENED SUCCESS!
                        </span>
                        {!isAuthenticated && (
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#D02020] bg-white px-2 py-0.5 border border-[#121212] flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>EXPIRES IN 30M</span>
                            </span>
                        )}
                    </div>

                    <div className="flex items-stretch space-x-2">
                        <input
                            type="text"
                            readOnly
                            value={shortUrl}
                            className="flex-1 px-3 py-2 bg-white text-[#121212] font-mono text-sm font-bold border-2 border-[#121212] truncate focus:outline-none"
                        />
                        <button
                            onClick={handleCopy}
                            className="btn-bauhaus bg-[#1040C0] text-white px-4 py-2 border-2 border-[#121212] font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 hover:bg-[#0c3298]"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    <span>COPIED!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" />
                                    <span>COPY</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UrlForm;