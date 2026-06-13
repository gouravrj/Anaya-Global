import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/anaya-global-logo.png';

const links = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Services', '/services'],
  ['Industries We Serve', '/industries'],
  ['Why Choose Us', '/why-choose-us'],
  ['Contact Us', '/contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-silver/70 bg-white/92 backdrop-blur">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-6">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Anaya Global" className="h-14 w-14 object-contain" />
          <span className="text-xl font-bold text-navy">Anaya Global</span>
        </NavLink>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-silver text-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-navy text-white' : 'text-ink hover:bg-platinum hover:text-azure'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-silver bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-semibold ${isActive ? 'bg-navy text-white' : 'text-ink hover:bg-platinum'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
