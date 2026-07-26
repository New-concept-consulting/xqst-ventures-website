import BusinessCard from "@/components/BusinessCard";

export default function Home() {
  return (
    <main>
      <section className="h-[70vh] bg-charcoal flex items-center justify-center text-center text-cream px-6">
        <div>
          <h1 className="font-serif text-5xl md:text-7xl tracking-wide">
            XQST Ventures
          </h1>
          <p className="mt-4 text-lg font-light text-cream/80 max-w-xl mx-auto">
            [PLACEHOLDER: one-line group tagline — e.g. &quot;Hospitality,
            mobility, and stays — under one name.&quot;]
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 py-20">
        <h2 className="font-serif text-3xl text-center mb-12">
          Our Businesses
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <BusinessCard
            href="/hotel"
            title="XQST Hotel & Lounge"
            blurb="A comfortable stay paired with a relaxed lounge experience — rooms, dining, and hospitality in one place."
            imgPlaceholder="[PLACEHOLDER: hotel hero image]"
          />
          <BusinessCard
            href="/car-rentals"
            title="XQST Car Rentals"
            blurb="Reliable vehicles for business, travel, or everyday use — a range of cars to suit any trip."
            imgPlaceholder="[PLACEHOLDER: car rental hero image]"
          />
          <BusinessCard
            href="/airbnb"
            title="XQST Airbnb"
            blurb="Short-term stays in well-kept, comfortable homes — an alternative to hotel living for guests who want more space."
            imgPlaceholder="[PLACEHOLDER: airbnb hero image]"
          />
        </div>
      </section>
    </main>
  );
}
