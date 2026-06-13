import { ArrowRight, BarChart3, CheckCircle2, Headphones, ShieldCheck, Users, MonitorCog, LifeBuoy, Laptop, Code2, BriefcaseBusiness} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm.jsx';
import InfoCard from '../components/InfoCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import logo from '../assets/anaya-global-logo.png';


const services = [
  [LifeBuoy, 'Application & Support Services', 'Providing skilled professionals to manage application support, incident resolution, production operations, and business-critical systems.'],
  [Code2, 'Technology & Development Services', 'Delivering expert developers, engineers, and technical specialists to build, maintain, and enhance digital solutions.'],
  [BriefcaseBusiness, 'Business, Data & Financial Services', 'Supporting organizations with business analysis, data management, quality assurance, and capital market expertise.']
];

// const services = [
//   [BarChart3, 'Business Process Outsourcing', 'Efficient management of routine business operations to improve productivity and reduce operational costs.'],
//   [Users, 'Back Office Support', 'Data entry, document processing, reporting, and administrative support services.'],
//   [Headphones, 'Customer Support', 'Email support, chat support, and customer service operations.']
// ];

const benefits = ['Reduced Operational Costs', 'Increased Productivity', 'Faster Turnaround Time', 'Access to Skilled Talent', 'Business Scalability', 'Improved Customer Experience'];

export default function Home() {
  return (
    <>
      <section className="hero-bg text-white">
        <div className="section-shell grid min-h-[calc(100vh-80px)] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Anaya Global</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Reliable Business Outsourcing Solutions for Growth and Efficiency</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-silver">
              Helping businesses streamline operations through cost-effective outsourcing, customer support, virtual assistance, and business process management services.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="focus-ring inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-bold text-navy hover:bg-silver" to="/contact">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/50 px-5 py-3 font-bold text-white hover:bg-white/10" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div id="yo" className="glass-panel rounded-lg p-8 shadow-soft">
            <img src={logo} alt="Anaya Global" className="mx-auto h-48 w-48 object-contain md:h-64 md:w-64" />
            <div id="yo2" className="mt-6 grid gap-3">
              {['Cost-effective operations', 'Skilled remote support', 'Secure client processes'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md bg-black/10 px-4 py-3 text-sm font-semibold">
                  <CheckCircle2 className="text-gold" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeader eyebrow="Core Services" title="Business support built for efficiency">
          From back-office work to customer operations, Anaya Global supports recurring work that needs consistency, speed, and accountability.
        </SectionHeader>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map(([icon, title, text]) => <InfoCard key={title} icon={icon} title={title}>{text}</InfoCard>)}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Client Benefits" title="Outsource with more control, not less">
            Our delivery model helps clients reduce operational pressure while improving turnaround time and customer experience.
          </SectionHeader>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-md border border-silver bg-platinum px-4 py-4 font-semibold text-navy">
                <CheckCircle2 className="text-azure" size={19} />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeader eyebrow="Enquiry" title="Talk to us about your support needs">
            Share the service you need and our team will get back to you with a practical outsourcing approach.
          </SectionHeader>
          <div className="mt-8 rounded-lg bg-navy p-6 text-white">
            <ShieldCheck className="text-gold" />
            <p className="mt-4 text-sm leading-6 text-silver">Your information is handled with confidentiality and secure business practices.</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
