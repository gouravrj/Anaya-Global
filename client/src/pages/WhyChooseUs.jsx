import { BadgeIndianRupee, LockKeyhole, Scale, ShieldCheck, UsersRound } from 'lucide-react';
import InfoCard from '../components/InfoCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const reasons = [
  [BadgeIndianRupee, 'Cost Effective Solutions', 'Reduce operational expenses without compromising quality.'],
  [UsersRound, 'Skilled Professionals', 'Access to dedicated and experienced resources.'],
  [ShieldCheck, 'Data Security', 'Commitment to confidentiality and secure business practices.'],
  [Scale, 'Scalability', 'Flexible solutions that grow with your business needs.'],
  [LockKeyhole, 'Customer-Centric Approach', 'Tailored services designed around client requirements.']
];

const faqs = [
  ['What services does Anaya Global provide?', 'We offer outsourcing, back-office support, customer support, virtual assistance, and business process management services.'],
  ['How do you ensure data security?', 'We follow strict confidentiality and security practices to protect client information.'],
  ['Can your services be customized?', 'Yes, all our solutions are tailored to meet specific business requirements.']
];

export default function WhyChooseUs() {
  return (
    <>
      <section className="section-shell py-16">
        <SectionHeader eyebrow="Why Choose Us" title="A reliable partner for recurring business operations">
          Our services are built around efficiency, secure practices, and flexible support that fits your operating model.
        </SectionHeader>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([icon, title, text]) => <InfoCard key={title} icon={icon} title={title}>{text}</InfoCard>)}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="section-shell">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
          <div className="mt-8 grid gap-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-silver bg-platinum p-5">
                <summary className="cursor-pointer text-lg font-bold text-navy">{question}</summary>
                <p className="mt-3 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
