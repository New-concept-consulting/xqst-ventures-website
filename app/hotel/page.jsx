import ContactForm from "@/components/ContactForm";

const rooms = [
  { name: "A Wing", price: "12000/night", image: "/images/image5.jpg" },
  { name: "B Wing", price: "14500/night", image: "/images/image8.jpg" },
  { name: "C Wing", price: "16500/night", image: "/images/image11.jpg" },
];

export default function HotelPage() {
  return (
    <main>
      <section className="h-[60vh] bg-charcoal relative flex items-end px-6 md:px-16 pb-10 text-cream overflow-hidden">
        <img
          src="/images/image15.jpg"
          alt="XQST Hotel & Lounge Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl text-white shadow-sm">XQST Hotel & Lounge</h1>
        </div>
      </section>

      <section className="px-6 md:px-16 py-20">
        <h2 className="font-serif text-3xl mb-10 text-center">Rooms & Suites</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((r) => (
            <div key={r.name}>
              <div className="h-56 bg-charcoal/10 flex items-center justify-center text-sm text-charcoal/40">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 font-serif text-2xl">{r.name}</h3>
              <p className="text-gold">{r.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-16">
        <h2 className="font-serif text-3xl mb-6 text-center">Amenities</h2>
        <ul className="grid md:grid-cols-3 gap-4 text-center text-charcoal/70">
          <li>24/7 Power</li>
          <li>Bar and Lounge</li>
          <li>Kitchen Services</li>
        </ul>
      </section>

      <section className="px-6 md:px-16 py-20 bg-cream/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl mb-6">Find Us</h2>
            <div className="mb-8 rounded-lg overflow-hidden h-64 shadow-md">
              <img src="/images/image17.jpg" alt="XQST Hotel Entrance" className="w-full h-full object-cover" />
            </div>
            <p className="text-charcoal/80 text-lg leading-relaxed">
              Located in the heart of Alimosho, XQST Hotel & Lounge offers a serene escape from the hustle and bustle.
            </p>
            <div className="mt-8">
              <h3 className="font-serif text-xl mb-2">Address</h3>
              <p className="text-charcoal/60 font-medium">
                10, Ramoni Ajako street,<br />
                By Tawakalitu Street,<br />
                Off Salami Busstop,<br />
                Alimosho Lagos
              </p>
            </div>
          </div>
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg border border-charcoal/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.265219757656!2d3.2687521!3d6.6139413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90558eb80829%3A0x6a0f6700c1445783!2s10%20Ramoni%20Ajako%20St%2C%20Alimosho%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <ContactForm
        title="Book / Enquire — Hotel"
        endpoint={`https://formspree.io/f/${process.env.NEXT_PUBLIC_HOTEL_FORM_ID}`}
        fields={[
          { name: "name", type: "text", label: "Full name", required: true },
          { name: "email", type: "email", label: "Email", required: true },
          { name: "checkin", type: "date", label: "Check-in", required: true },
          { name: "checkout", type: "date", label: "Check-out", required: true },
          { name: "message", type: "textarea", label: "Special requests" },
        ]}
      />
    </main>
  );
}
