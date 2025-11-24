import React, { useState } from "react";

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    youtube: "",
    why: "",
  });

  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function change(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function submitForm(e) {
    e.preventDefault();
    setSending(true);

    // Replace with your real endpoint (Netlify, Vercel function, Airtable, etc.)
    try {
      // demo: just wait and mark done
      await new Promise(res => setTimeout(res, 800));
      setDone(true);
    } catch (err) {
      console.error(err);
      alert("Submission failed — replace with your form handler.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <section id="apply-form" className="py-16 bg-white">
        <div className="container-max text-center">
          <h2 className="h2 text-[--color-brand-navy]">Thanks — we received your application</h2>
          <p className="mt-4 text-gray-700">We’ll review and contact qualified applicants via email.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply-form" className="py-16 bg-gray-50">
      <div className="container-max max-w-3xl mx-auto">
        <h2 className="h2 text-[--color-brand-navy] text-center">Apply Now</h2>
        <p className="text-center text-gray-600 mt-2">Fill this quick form — we select a few businesses monthly.</p>

        <form onSubmit={submitForm} className="mt-8 bg-white p-8 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input required name="name" value={form.name} onChange={change} className="mt-1 block w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required name="email" type="email" value={form.email} onChange={change} className="mt-1 block w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Business / Channel</label>
              <input name="business" value={form.business} onChange={change} className="mt-1 block w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">YouTube URL</label>
              <input name="youtube" value={form.youtube} onChange={change} className="mt-1 block w-full rounded-md border px-3 py-2" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Why do you want to apply?</label>
            <textarea name="why" rows="5" value={form.why} onChange={change} className="mt-1 block w-full rounded-md border px-3 py-2" />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <small className="text-gray-500">By applying you agree to our terms and privacy policy.</small>
            <button
              type="submit"
              disabled={sending}
              className="px-6 py-3 rounded-md bg-[--color-brand-orange] text-white font-semibold shadow"
            >
              {sending ? "Submitting…" : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
