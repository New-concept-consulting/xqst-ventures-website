import ContactForm from "@/components/ContactForm";

const listings = [
  { name: "[PLACEHOLDER: listing name]", price: "[PLACEHOLDER: price]/night" },
  { name: "[PLACEHOLDER: listing name]", price: "[PLACEHOLDER: price]/night" },
];

export default function AirbnbPage() {
  return (
    <main>
      <section className="h-[60vh] bg-charcoal flex items-end px-6 md:px-16 pb-10 text-cream">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl">XQST Airbnb</h1>
          <p className="mt-2 text-cream/70">[PLACEHOLDER: airbnb hero image]</p>
        </div>
      </section>

      <section className="px-6 md:px-16 py-20">
        <h2 className="font-serif text-3xl mb-10 text-center">Listings</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {listings.map((l, i) => (
            <div key={i}>
              <div className="h-64 bg-charcoal/10 flex items-center justify-center text-sm text-charcoal/40">
                [PLACEHOLDER: listing photo]
              </div>
              <h3 className="mt-4 font-serif text-2xl">{l.name}</h3>
              <p className="text-gold">{l.price}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactForm
        title="Enquire — Airbnb"
        endpoint={`https://formspree.io/f/${process.env.NEXT_PUBLIC_AIRBNB_FORM_ID}`}
        fields={[
          { name: "name", type: "text", label: "Full name", required: true },
          { name: "email", type: "email", label: "Email", required: true },
          { name: "checkin", type: "date", label: "Check-in", required: true },
          { name: "checkout", type: "date", label: "Check-out", required: true },
          { name: "guests", type: "number", label: "Number of guests", required: true },
          { name: "message", type: "textarea", label: "Message" },
        ]}
      />
    </main>
  );
}
