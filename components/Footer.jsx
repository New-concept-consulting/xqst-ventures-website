export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream px-6 md:px-16 py-10 mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-serif text-xl">XQST Ventures</p>
          <p className="text-sm text-cream/70 mt-1 whitespace-pre-line">
            10, Ramoni Ajako street, By Tawakalitu Street,
            Off Salami Busstop, Alimosho Lagos
          </p>
        </div>
        <div className="text-sm text-cream/70">
          <p>[PLACEHOLDER: phone number]</p>
          <p>[PLACEHOLDER: general contact email]</p>
        </div>
      </div>
      <p className="text-xs text-cream/40 mt-8">
        © {new Date().getFullYear()} XQST Ventures. All rights reserved.
      </p>
    </footer>
  );
}
