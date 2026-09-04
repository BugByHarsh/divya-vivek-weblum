import { useState } from "react";
import { Share2, Check } from "lucide-react";

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: document.title || "Weblum",
      text: "Take a look at my Weblum ✨",
      url: window.location.href,
    };

    // Native sharing (mobile / supported browsers)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        // User cancelled the share sheet
        if (error?.name === "AbortError") return;
      }
    }

    // Clipboard fallback
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  return (
    <button
      onClick={handleShare}
      aria-label={copied ? "Link copied" : "Share Weblum"}
      className="fixed right-4 bottom-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#ad7c4e]/30 bg-[#f3d7e3]/90 backdrop-blur-xl text-[#7b3f5c] shadow-lg shadow-[#ad7c4e]/15 transition-all duration-300 hover:scale-110 hover:bg-[#eac3d3] hover:shadow-xl active:scale-95 md:right-6 md:bottom-6"
    >
      {copied ? (
        <Check
          size={20}
          strokeWidth={2}
        />
      ) : (
        <Share2
          size={20}
          strokeWidth={2}
        />
      )}
    </button>
  );
};

export default ShareButton;