"use client";

import { useState } from "react";

const interests = [
  "White Collar Boxing",
  "Boxing Fitness Classes",
  "Host a Fundraiser",
  "Corporate Event",
  "General Enquiry",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center border border-accent bg-surface p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-white">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
          Message Sent
        </h3>
        <p className="mt-2 font-body text-sm text-muted">
          Thanks for reaching out. Our team will be in touch shortly to get you
          started.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="form-input"
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input"
            placeholder="jane@example.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="087 000 0000"
          />
        </Field>
        <Field label="I'm interested in" htmlFor="interest">
          <select id="interest" name="interest" className="form-input" defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="form-input resize-none"
          placeholder="Tell us how we can help..."
        />
      </Field>

      <button
        type="submit"
        className="w-full bg-accent px-6 py-4 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
      >
        Send Message
      </button>

      <style>{`
        .form-input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          padding: 0.75rem 1rem;
          color: var(--foreground);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          border-color: var(--accent);
        }
        .form-input::placeholder {
          color: var(--muted);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block font-display text-xs font-semibold uppercase tracking-wide text-foreground/80">
        {label}
      </span>
      {children}
    </label>
  );
}
