import { Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/anaya-global-logo.png';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Anaya Global" className="h-14 w-14 object-contain" />
            <span className="text-xl font-bold">Anaya Global</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-silver">
            Reliable application support, technology development, and business services delivered by skilled professionals focused on operational excellence and business growth.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-silver">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <a className="flex items-center gap-2 hover:text-gold" href="mailto:info@anayaglobal.com"><Mail size={16} /> info@anayaglobal.com</a>
            <a className="flex items-center gap-2 hover:text-gold" href="tel:+918249811823"><Phone size={16} /> +91 8249811823</a>
            <span className="flex items-center gap-2"><MapPin size={16} /> India</span>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-silver">Services</h2>
          <p className="mt-4 text-sm leading-6 text-silver">BPO, back office support, customer support, virtual assistance, IT support, and data management.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-silver">
        © {new Date().getFullYear()} Anaya Global. All rights reserved.
      </div>
    </footer>
  );
}
