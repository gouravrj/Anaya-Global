import { Building2, GraduationCap, HeartPulse, Laptop, Package, Rocket, ShoppingCart, Truck } from 'lucide-react';
import InfoCard from '../components/InfoCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const industries = [
  [Building2, 'Financial Services'],
  [Laptop, 'Information Technology'],
  [HeartPulse, 'Healthcare'],
  [GraduationCap, 'Education'],
  [ShoppingCart, 'E-Commerce'],
  [Package, 'Manufacturing'],
  [Truck, 'Logistics'],
  [Rocket, 'Startups and SMEs']
];

export default function Industries() {
  return (
    <section className="section-shell py-16">
      <SectionHeader eyebrow="Industries" title="Support across growing business sectors">
        Anaya Global works with teams that need structured support, reliable communication, and scalable operational help.
      </SectionHeader>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map(([icon, title]) => <InfoCard key={title} icon={icon} title={title}>Tailored outsourcing support for day-to-day operations and client-facing workflows.</InfoCard>)}
      </div>
    </section>
  );
}
