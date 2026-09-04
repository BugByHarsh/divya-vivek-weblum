export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-[#c9a45c]/30 bg-[#302044] px-5 py-5 text-center"
    >
      {/* Soft lavender glow */}
      <div className="absolute -top-12 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full bg-[#b58ad9]/15 blur-3xl" />

      <div className="relative z-10">
        <a
          href="https://www.instagram.com/_weblum"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-[#c9a45c]/55 px-3 py-1.5 text-[8px] uppercase tracking-[1.5px] text-[#f8eee2] transition-colors hover:border-[#fbb9d5] hover:text-[#fbb9d5]"
          aria-label="Follow us on Instagram"
        >
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
          </svg>
          Follow @weblum
        </a>

        <div className="mt-2 text-[6px] uppercase tracking-[1.5px] text-[#fbb9d5]/50">
          Crafted with love by Weblum
        </div>
      </div>
    </footer>
  );
}