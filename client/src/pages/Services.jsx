import { BarChart3, Database, Headphones, Laptop, UserRoundCheck, Users } from 'lucide-react';
import InfoCard from '../components/InfoCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const services = [
  [BarChart3, 'Business Process Outsourcing (BPO)', 'Efficient management of routine business operations to improve productivity and reduce operational costs.'],
  [Users, 'Back Office Support', 'Data entry, document processing, reporting, and administrative support services.'],
  [Headphones, 'Customer Support', 'Email support, chat support, and customer service operations.'],
  [UserRoundCheck, 'Virtual Assistant Services', 'Dedicated professionals for scheduling, administration, research, and business support tasks.'],
  [Laptop, 'IT Support Services', 'Technical assistance, application support, monitoring, and maintenance services.'],
  [Database, 'Data Management', 'Data collection, validation, processing, and reporting solutions.']
];

export default function Services() {
  return (
    <section className="section-shell py-16">
      <SectionHeader eyebrow="Services" title="Outsourcing services for dependable execution">
        Choose focused support services that help your business move faster while staying efficient.
      </SectionHeader>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([icon, title, text]) => <InfoCard key={title} icon={icon} title={title}>{text}</InfoCard>)}
      </div>
    </section>
  );
}
