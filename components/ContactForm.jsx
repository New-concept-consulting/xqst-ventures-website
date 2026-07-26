"use client";
import { useState } from "react";

export default function ContactForm({ endpoint, fields, title = "Enquire" }) {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 px-6 md:px-16 bg-charcoal text-cream">
      <h2 className="font-serif text-4xl mb-10 text-center">{title}</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        {fields.map((f) =>
          f.type === "textarea" ? (
            <textarea
              key={f.name}
              name={f.name}
              placeholder={f.label}
              rows="4"
              required={f.required}
              className="p-3 bg-transparent border-b border-gold focus:outline-none"
            />
          ) : f.type === "select" ? (
            <select
              key={f.name}
              name={f.name}
              required={f.required}
              defaultValue=""
              className="p-3 bg-charcoal border-b border-gold focus:outline-none"
            >
              <option value="" disabled>
                {f.label}
              </option>
              {f.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              key={f.name}
              name={f.name}
              type={f.type}
              placeholder={f.label}
              required={f.required}
              className="p-3 bg-transparent border-b border-gold focus:outline-none"
            />
          )
        )}

        <button
          type="submit"
          className="mt-4 py-3 bg-gold text-charcoal font-semibold hover:opacity-90 transition-opacity"
        >
          {status === "sending" ? "Sending..." : "Send Enquiry"}
        </button>
        {status === "sent" && (
          <p className="text-green-400">Received — we&apos;ll be in touch.</p>
        )}
        {status === "error" && (
          <p className="text-red-400">Something went wrong, try again.</p>
        )}
      </form>
    </section>
  );
}
