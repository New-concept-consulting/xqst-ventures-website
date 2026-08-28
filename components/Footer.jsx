export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream px-6 md:px-16 py-10 mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/XQST_logo.png"
              alt="XQST Events and Management Limited"
              className="h-14 w-14 object-contain"
            />
            <p className="font-serif text-xl">XQST Events and Management Limited</p>
          </div>
          <p className="text-sm text-cream/70 mt-1 whitespace-pre-line">
            10, Ramoni Ajako street, By Tawakalitu Street,
            Off Salami Busstop, Alimosho Lagos
          </p>
        </div>
        <div className="text-sm text-cream/70">
          <p>+234 902 230 5394, +234 802 1496 904</p>
          <p>info@xqst.org</p>
        </div>
      </div>
      <p className="text-xs text-cream/40 mt-8">
        © {new Date().getFullYear()} XQST Events and Management Limited. All rights reserved.
      </p>
    </footer>
  );
}
