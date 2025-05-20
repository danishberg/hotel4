"use client";
import { useState } from "react";

export default function BecomeHost() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-amber-700 mb-6 text-center">Become a Host</h2>
      {submitted ? (
        <div className="bg-green-100 border border-green-300 text-green-800 rounded p-6 text-center">
          Thank you for your submission! Your experience is now pending review.
        </div>
      ) : (
        <form
          className="flex flex-col gap-4 bg-white/80 p-6 rounded-lg shadow"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label className="font-medium text-amber-800">Name
            <input required className="mt-1 block w-full border border-amber-200 rounded px-3 py-2" type="text" placeholder="Your name" />
          </label>
          <label className="font-medium text-amber-800">Service Title
            <input required className="mt-1 block w-full border border-amber-200 rounded px-3 py-2" type="text" placeholder="E.g. Traditional Dinner" />
          </label>
          <label className="font-medium text-amber-800">Description
            <textarea required className="mt-1 block w-full border border-amber-200 rounded px-3 py-2" rows={4} placeholder="Describe your experience, what guests can expect, etc." />
          </label>
          <label className="font-medium text-amber-800">Photo (mock upload)
            <input className="mt-1 block w-full border border-amber-200 rounded px-3 py-2" type="file" accept="image/*" />
          </label>
          <label className="font-medium text-amber-800">Price (KZT)
            <input required className="mt-1 block w-full border border-amber-200 rounded px-3 py-2" type="number" min={0} placeholder="Price in KZT" />
          </label>
          <button type="submit" className="bg-amber-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-full shadow transition mt-4">Submit</button>
        </form>
      )}
    </div>
  );
} 