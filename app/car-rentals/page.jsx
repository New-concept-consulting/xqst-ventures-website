import ContactForm from "@/components/ContactForm";

const cars = [
  { name: "[PLACEHOLDER: car model]", price: "[PLACEHOLDER: price]/day" },
  { name: "[PLACEHOLDER: car model]", price: "[PLACEHOLDER: price]/day" },
  { name: "[PLACEHOLDER: car model]", price: "[PLACEHOLDER: price]/day" },
];

export default function CarRentalsPage() {
  return (
    <main>
      <section className="relative h-[60vh] overflow-hidden bg-charcoal flex items-end px-6 md:px-16 pb-10 text-cream">
        <img
          src="/images/car2.jpg"
          alt="XQST Car Rentals showcase"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl">XQST Car Rentals</h1>
          <p className="mt-2 text-cream/70">Reliable rides for business, travel, and everyday movement.</p>
        </div>
      </section>

      <section className="px-6 md:px-16 py-20">
        <h2 className="font-serif text-3xl mb-10 text-center">Available Vehicles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((c, i) => {
            const imageMap = ["/images/car3.jpg", "/images/car4.jpg", "/images/car5.jpg"];

            return (
              <div key={i}>
                <img
                  src={imageMap[i]}
                  alt={`${c.name} vehicle`}
                  className="h-56 w-full object-cover rounded-lg"
                />
                <h3 className="mt-4 font-serif text-2xl">{c.name}</h3>
                <p className="text-gold">{c.price}</p>
              </div>
            );
          })}
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
