import ContactForm from "@/components/ContactForm";

const cars = [
  { name: "[PLACEHOLDER: car model]", price: "[PLACEHOLDER: price]/day" },
  { name: "[PLACEHOLDER: car model]", price: "[PLACEHOLDER: price]/day" },
  { name: "[PLACEHOLDER: car model]", price: "[PLACEHOLDER: price]/day" },
];

export default function CarRentalsPage() {
  return (
    <main>
      <section className="h-[60vh] bg-charcoal flex items-end px-6 md:px-16 pb-10 text-cream">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl">XQST Car Rentals</h1>
          <p className="mt-2 text-cream/70">[PLACEHOLDER: car rental hero image]</p>
        </div>
      </section>

      <section className="px-6 md:px-16 py-20">
        <h2 className="font-serif text-3xl mb-10 text-center">Available Vehicles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((c, i) => (
            <div key={i}>
              <div className="h-56 bg-charcoal/10 flex items-center justify-center text-sm text-charcoal/40">
                [PLACEHOLDER: car photo]
              </div>
              <h3 className="mt-4 font-serif text-2xl">{c.name}</h3>
              <p className="text-gold">{c.price}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactForm
        title="Enquire — Car Rentals"
        endpoint={`https://formspree.io/f/${process.env.NEXT_PUBLIC_CAR_RENTAL_FORM_ID}`}
        fields={[
          { name: "name", type: "text", label: "Full name", required: true },
          { name: "email", type: "email", label: "Email", required: true },
          { name: "pickup_date", type: "date", label: "Pick-up date", required: true },
          { name: "return_date", type: "date", label: "Return date", required: true },
          {
            name: "car_type",
            type: "select",
            label: "Preferred vehicle type",
            options: ["[PLACEHOLDER: car type]", "[PLACEHOLDER: car type]"],
          },
          { name: "message", type: "textarea", label: "Additional notes" },
        ]}
      />
    </main>
  );
}
