import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  return (
    <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <SectionHeader eyebrow="Contact Us" title="Start a conversation with Anaya Global">
          Tell us what support you need, and we will help you explore a practical outsourcing solution.
        </SectionHeader>
        <div className="mt-8 grid gap-4">
          <a className="flex items-center gap-3 rounded-md border border-silver bg-white px-5 py-4 font-semibold text-navy hover:text-azure" href="mailto:info@anayaglobal.com"><Mail size={20} /> info@anayaglobal.com</a>
          <a className="flex items-center gap-3 rounded-md border border-silver bg-white px-5 py-4 font-semibold text-navy hover:text-azure" href="tel:+918249811823"><Phone size={20} /> +91 8249811823</a>
          <div className="flex items-center gap-3 rounded-md border border-silver bg-white px-5 py-4 font-semibold text-navy"><MapPin size={20} /> India</div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
