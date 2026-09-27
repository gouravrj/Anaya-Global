import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold text-gold">Anaya Global</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-silver">
            Reliable application support, technology development, and business services delivered by skilled professionals focused on operational excellence and business growth.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-silver">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <a className="flex items-center gap-2 hover:text-gold" href="mailto:info@anayglobal.in"><Mail size={16} /> info@anayglobal.in</a>
            <a className="flex items-center gap-2 hover:text-gold" href="tel:+918249811823"><Phone size={16} /> +91 8249811823</a>
            <span className="flex items-center gap-2"><MapPin size={16} /> India</span>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-silver">Services</h2>
          <p className="mt-4 text-sm leading-6 text-silver">IT Staffing | Technology Services | Project Delivery | Consulting</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-silver">
        © {new Date().getFullYear()} Anaya Global. All rights reserved.
      </div>
    </footer>
  );
}
