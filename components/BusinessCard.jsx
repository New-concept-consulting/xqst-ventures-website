import Link from "next/link";

export default function BusinessCard({ href, title, blurb, imgPlaceholder }) {
  return (
    <Link
      href={href}
      className="group block border border-gold/30 hover:border-gold transition-colors"
    >
      <div className="h-64 bg-charcoal/10 flex items-center justify-center text-charcoal/40 text-sm text-center px-4">
        {imgPlaceholder}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-sm text-charcoal/70">{blurb}</p>
        <p className="mt-4 text-gold text-sm tracking-wide">Explore &rarr;</p>
      </div>
    </Link>
  );
}
