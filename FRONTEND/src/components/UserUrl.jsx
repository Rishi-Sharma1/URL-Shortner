import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllUserUrls, deleteUserUrl } from '../api/user.api';
import { useSelector } from 'react-redux';
import { Copy, Check, ExternalLink, Link2, BarChart2, Trash2, QrCode } from 'lucide-react';
import QrModal from './QrModal';

const UserUrl = () => {
    const { user } = useSelector((state) => state.auth);
    const queryClient = useQueryClient();

    const { data: urlsData, isLoading, isError, error } = useQuery({
        queryKey: ['userUrls', user?._id],
        queryFn: () => getAllUserUrls(user?._id),
        refetchInterval: 15000,
        staleTime: 0,
        enabled: !!user?._id,
    });

    const [copiedId, setCopiedId] = useState(null);
    const [deletingId, setDeletingId] = useState(null);
    const [selectedQrUrl, setSelectedQrUrl] = useState(null);

    const handleCopy = (shortCode, id) => {
        const fullShortUrl = `${window.location.origin}/${shortCode}`;
        navigator.clipboard.writeText(fullShortUrl);
        setCopiedId(id);
        setTimeout(() => {
            setCopiedId(null);
        }, 2000);
    };

    const handleDelete = async (id, shortUrl) => {
        if (!window.confirm("Are you sure you want to delete this shortened URL?")) return;
        setDeletingId(id);
        try {
            await deleteUserUrl(id);
            queryClient.invalidateQueries({ queryKey: ['userUrls'] });
            window.dispatchEvent(new CustomEvent('urlDeleted', { detail: { shortUrl } }));
        } catch (err) {
            alert(err.message || "Failed to delete URL");
        } finally {
            setDeletingId(null);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center my-8 p-8 bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212]">
                <div className="flex items-center space-x-3 text-sm font-black uppercase tracking-wider">
                    <div className="w-5 h-5 border-3 border-[#121212] border-t-[#D02020] rounded-full animate-spin" />
                    <span>LOADING YOUR URLS...</span>
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="bg-[#FFEBEE] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-4 text-[#D02020] text-xs font-bold uppercase tracking-wider my-4">
                ERROR LOADING URLS: {error?.message}
            </div>
        );
    }

    const urlList = urlsData?.urls ? [...urlsData.urls].reverse() : [];

    if (urlList.length === 0) {
        return (
            <div className="text-center p-8 bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] my-6">
                <div className="w-12 h-12 bg-[#F0C020] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] mx-auto flex items-center justify-center mb-3">
                    <Link2 className="w-6 h-6 text-[#121212]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#121212]">NO SHORTENED URLS YET</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">Use the form above to shorten your first permanent link!</p>
            </div>
        );
    }

    return (
        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] mt-8 overflow-hidden">
            <div className="bg-[#F0C020] border-b-4 border-[#121212] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <BarChart2 className="w-5 h-5 text-[#121212]" />
                    <h2 className="text-lg font-black uppercase tracking-tight text-[#121212]">YOUR PERMANENT LINKS</h2>
                </div>
                <span className="text-xs font-black uppercase tracking-widest bg-[#121212] text-white px-3 py-1">
                    TOTAL: {urlList.length}
                </span>
            </div>

            <div className="overflow-x-auto max-h-96">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#F0F0F0] border-b-2 border-[#121212] text-xs font-black uppercase tracking-widest text-[#121212]">
                            <th className="px-6 py-3 border-r-2 border-[#121212]">ORIGINAL URL</th>
                            <th className="px-6 py-3 border-r-2 border-[#121212]">SHORT LINK</th>
                            <th className="px-6 py-3 border-r-2 border-[#121212]">CLICKS</th>
                            <th className="px-6 py-3 text-right">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-[#121212]">
                        {urlList.map((url) => {
                            const fullShortUrl = `${window.location.origin}/${url.short_url}`;
                            return (
                                <tr key={url._id} className="hover:bg-[#FFF9C4] transition duration-150">
                                    <td className="px-6 py-4 border-r-2 border-[#121212]">
                                        <div className="text-xs font-medium text-gray-700 truncate max-w-xs sm:max-w-sm">
                                            {url.full_url}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-[#121212]">
                                        <a
                                            href={`/${url.short_url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold text-[#1040C0] hover:underline"
                                        >
                                            <span>{url.short_url}</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-[#121212]">
                                        <span className="inline-block bg-[#1040C0] text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 border border-[#121212]">
                                            {url.clicks || 0} CLICKS
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="inline-flex items-center space-x-2">
                                            <button
                                                onClick={() => handleCopy(url.short_url, url._id)}
                                                className={`btn-bauhaus px-3 py-1.5 border-2 border-[#121212] font-black text-xs uppercase tracking-wider inline-flex items-center space-x-1 ${
                                                    copiedId === url._id
                                                        ? 'bg-[#4CAF50] text-white'
                                                        : 'bg-[#F0C020] text-[#121212] hover:bg-[#e0b010]'
                                                }`}
                                            >
                                                {copiedId === url._id ? (
                                                    <>
                                                        <Check className="w-3.5 h-3.5" />
                                                        <span>COPIED</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-3.5 h-3.5" />
                                                        <span>COPY</span>
                                                    </>
                                                )}
                                            </button>
                                            <button
                                                onClick={() => setSelectedQrUrl(url)}
                                                title="Generate QR Code"
                                                className="btn-bauhaus px-2.5 py-1.5 bg-[#121212] text-[#F0C020] border-2 border-[#121212] font-black text-xs uppercase tracking-wider inline-flex items-center space-x-1 hover:bg-[#333333] transition"
                                            >
                                                <QrCode className="w-3.5 h-3.5" />
                                                <span className="hidden sm:inline">QR</span>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(url._id, url.short_url)}
                                                disabled={deletingId === url._id}
                                                title="Delete URL"
                                                className="btn-bauhaus p-1.5 bg-[#D02020] text-white border-2 border-[#121212] hover:bg-[#b01818] transition disabled:opacity-50"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <QrModal
                isOpen={!!selectedQrUrl}
                onClose={() => setSelectedQrUrl(null)}
                shortUrl={selectedQrUrl?.short_url}
                fullUrl={selectedQrUrl?.full_url}
                isPermanent={true}
            />
        </div>
    );
};

export default UserUrl;