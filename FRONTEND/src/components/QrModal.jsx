import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { X, Download, Copy, Check, QrCode, ShieldCheck, AlertTriangle, Sparkles } from 'lucide-react';

const COLOR_OPTIONS = [
    { id: 'black', name: 'Classic Black', fgColor: '#121212', bgColor: '#FFFFFF' },
    { id: 'red', name: 'Bauhaus Red', fgColor: '#D02020', bgColor: '#FFFFFF' },
    { id: 'blue', name: 'Bauhaus Blue', fgColor: '#1040C0', bgColor: '#FFFFFF' },
    { id: 'green', name: 'Emerald', fgColor: '#2E7D32', bgColor: '#FFFFFF' },
];

const QrModal = ({ isOpen, onClose, shortUrl, fullUrl, isPermanent = false }) => {
    const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);
    const [copied, setCopied] = useState(false);
    const [downloading, setDownloading] = useState(false);
    const qrContainerRef = useRef(null);

    if (!isOpen || !shortUrl) return null;

    // Full target URL to encode (ensures backend redirection & expiration applies)
    const qrValue = shortUrl.startsWith('http') ? shortUrl : `${window.location.origin}/${shortUrl}`;

    const handleCopyUrl = () => {
        navigator.clipboard.writeText(qrValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownloadPng = () => {
        setDownloading(true);
        try {
            const canvas = qrContainerRef.current?.querySelector('canvas');
            if (!canvas) return;

            // Create a high-res canvas with padding and border for clean download
            const padding = 32;
            const downloadCanvas = document.createElement('canvas');
            const size = canvas.width + padding * 2;
            downloadCanvas.width = size;
            downloadCanvas.height = size + 60; // Extra room for label

            const ctx = downloadCanvas.getContext('2d');
            if (!ctx) return;

            // Background
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);

            // Draw outer border
            ctx.strokeStyle = '#121212';
            ctx.lineWidth = 6;
            ctx.strokeRect(3, 3, downloadCanvas.width - 6, downloadCanvas.height - 6);

            // Draw QR Code
            ctx.drawImage(canvas, padding, padding);

            // Draw Bottom Text Banner
            ctx.fillStyle = selectedColor.fgColor;
            ctx.font = 'bold 16px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(qrValue.replace(/^https?:\/\//, ''), downloadCanvas.width / 2, size + 32);

            const dataUrl = downloadCanvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `qrcode-${shortUrl.split('/').pop() || 'link'}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to download QR code:', err);
        } finally {
            setDownloading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
            {/* Modal Container */}
            <div className="relative w-full max-w-md bg-white border-4 border-[#121212] shadow-[10px_10px_0px_0px_#121212] overflow-hidden">
                
                {/* Header */}
                <div className="bg-[#F0C020] border-b-4 border-[#121212] px-5 py-3.5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <QrCode className="w-5 h-5 text-[#121212]" />
                        <h3 className="text-base font-black uppercase tracking-tight text-[#121212]">
                            QR CODE GENERATOR
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="btn-bauhaus p-1 bg-white text-[#121212] border-2 border-[#121212] hover:bg-[#D02020] hover:text-white transition"
                        title="Close Modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-5">

                    {/* Expiration Lifetime Badge */}
                    {isPermanent ? (
                        <div className="p-3 bg-[#E8F5E9] border-2 border-[#121212] flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-[#2E7D32]">
                            <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0" />
                            <span>PERMANENT QR CODE — NEVER EXPIRES</span>
                        </div>
                    ) : (
                        <div className="p-3 bg-[#FFF9C4] border-2 border-[#121212] flex items-start space-x-2 text-xs font-bold text-[#121212]">
                            <AlertTriangle className="w-4 h-4 text-[#D02020] shrink-0 mt-0.5" />
                            <div>
                                <span className="font-black text-[#D02020] uppercase tracking-wider">GUEST QR CODE:</span>
                                <p className="text-[11px] mt-0.5">
                                    Expires in <span className="font-black underline">30 minutes</span> along with your short link. Sign in to create permanent QR codes!
                                </p>
                            </div>
                        </div>
                    )}

                    {/* QR Code Canvas Card */}
                    <div className="flex flex-col items-center justify-center p-6 bg-[#F0F0F0] border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212]">
                        <div ref={qrContainerRef} className="p-4 bg-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
                            <QRCodeCanvas
                                value={qrValue}
                                size={200}
                                fgColor={selectedColor.fgColor}
                                bgColor={selectedColor.bgColor}
                                level="H"
                                marginSize={1}
                            />
                        </div>

                        {/* Encoded Link Display */}
                        <div className="mt-4 w-full text-center">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-1">
                                TARGET SHORT LINK
                            </span>
                            <div className="font-mono text-xs font-bold text-[#1040C0] bg-white px-3 py-1.5 border border-[#121212] truncate">
                                {qrValue}
                            </div>
                        </div>
                    </div>

                    {/* Color Palette Selector */}
                    <div>
                        <label className="block text-[11px] font-black uppercase tracking-widest text-[#121212] mb-2 flex items-center space-x-1">
                            <Sparkles className="w-3.5 h-3.5 text-[#F0C020] fill-[#F0C020]" />
                            <span>CHOOSE QR COLOR PALETTE</span>
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                            {COLOR_OPTIONS.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => setSelectedColor(c)}
                                    className={`btn-bauhaus py-2 px-1 text-[11px] font-black uppercase tracking-wider border-2 border-[#121212] flex flex-col items-center space-y-1 transition ${
                                        selectedColor.id === c.id
                                            ? 'bg-[#121212] text-white shadow-[2px_2px_0px_0px_#F0C020]'
                                            : 'bg-white text-[#121212] hover:bg-[#F0F0F0]'
                                    }`}
                                >
                                    <span
                                        className="w-4 h-4 rounded-full border border-black inline-block"
                                        style={{ backgroundColor: c.fgColor }}
                                    />
                                    <span className="truncate max-w-full">{c.name.split(' ')[0]}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <button
                            onClick={handleDownloadPng}
                            disabled={downloading}
                            className="btn-bauhaus bg-[#1040C0] text-white font-black text-xs uppercase tracking-wider py-3 px-4 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] hover:bg-[#0c3298] flex items-center justify-center space-x-2"
                        >
                            <Download className="w-4 h-4" />
                            <span>{downloading ? 'SAVING...' : 'DOWNLOAD PNG'}</span>
                        </button>

                        <button
                            onClick={handleCopyUrl}
                            className={`btn-bauhaus font-black text-xs uppercase tracking-wider py-3 px-4 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] flex items-center justify-center space-x-2 ${
                                copied ? 'bg-[#4CAF50] text-white' : 'bg-[#F0C020] text-[#121212] hover:bg-[#e0b010]'
                            }`}
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    <span>COPIED LINK</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" />
                                    <span>COPY LINK</span>
                                </>
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default QrModal;
