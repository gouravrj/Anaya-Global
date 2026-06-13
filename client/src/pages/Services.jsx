import { Bot, BriefcaseBusiness, ChevronDown, Code2, Database, Landmark, LifeBuoy, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';

const services = [
  {
    icon: LifeBuoy,
    title: 'Application & Support Roles',
    description: 'Reliable support professionals ensuring business-critical applications run smoothly.',
    roles: [
      'Application Support Engineer',
      'Production Support Engineer',
      'Technical Support Engineer',
      'Incident Management Analyst',
      'Problem Management Analyst',
      'Service Desk Engineer',
      'Monitoring Engineer',
      'Middleware Support Engineer',
      'API Support Engineer',
      'Database Support Engineer'
    ]
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business & Functional Roles',
    description: 'Experts who bridge business objectives with technology-driven solutions.',
    roles: [
      'Business Analyst',
      'Senior Business Analyst',
      'Functional Consultant',
      'Product Analyst',
      'Product Owner',
      'Process Analyst',
      'Requirement Analyst'
    ]
  },
  {
    icon: Bot,
    title: 'Automation Roles',
    description: 'Automation specialists improving efficiency through modern automation technologies.',
    roles: [
      'Automation Engineer',
      'RPA Developer',
      'Automation Support Engineer',
      'DevOps Engineer',
      'CI/CD Engineer',
      'Site Reliability Engineer (SRE)',
      'Infrastructure Automation Engineer'
    ]
  },
  {
    icon: Code2,
    title: 'Development Roles',
    description: 'Skilled developers delivering scalable web, mobile, and enterprise applications.',
    roles: [
      'Software Developer',
      '.NET Developer',
      'Java Developer',
      'Python Developer',
      'Full Stack Developer',
      'Front-End Developer',
      'Back-End Developer',
      'Mobile Application Developer',
      'API Developer'
    ]
  },
  {
    icon: Database,
    title: 'Data & Database Roles',
    description: 'Data experts helping organizations manage, analyze, and optimize business data.',
    roles: [
      'Data Engineer',
      'Data Analyst',
      'ETL Developer',
      'Database Administrator (DBA)',
      'SQL Developer',
      'Data Feed Engineer',
      'Reporting Analyst',
      'BI Developer'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance Roles',
    description: 'Quality professionals ensuring reliable, secure, and defect-free software delivery.',
    roles: [
      'Manual Tester',
      'Automation Tester',
      'QA Engineer',
      'Test Lead',
      'Performance Tester',
      'UAT Analyst',
      'Quality Analyst'
    ]
  },
  {
    icon: Landmark,
    title: 'Capital Market & Financial Services Roles',
    description: 'Specialized professionals supporting financial systems, trading platforms, and market operations.',
    roles: [
      'Market Data Support Engineer',
      'Trading Support Analyst',
      'Exchange Connectivity Engineer',
      'Financial Systems Support Engineer',
      'Capital Market Business Analyst',
      'Reference Data Analyst',
      'Operations Support Analyst'
    ]
  }
];

export default function Services() {
  const [expanded, setExpanded] = useState('');

  return (
    <section className="section-shell py-16">
      <SectionHeader eyebrow="Services" title="Outsourcing services for dependable execution">
        Choose focused support services that help your business move faster while staying efficient.
      </SectionHeader>
      <div className="mt-10 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description, roles }) => {
          const isOpen = expanded === title;

          return (
            <article key={title} className="flex h-full flex-col rounded-lg border border-silver/80 bg-white p-6 shadow-soft hover:-translate-y-1">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy text-white">
                <Icon size={23} />
              </div>
              <h2 className="text-lg font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 self-start rounded-md border border-silver px-4 py-2 text-sm font-bold text-navy hover:bg-platinum dark:border-white/15 dark:text-white dark:hover:bg-white/10"
                onClick={() => setExpanded(isOpen ? '' : title)}
                aria-expanded={isOpen}
              >
                Learn More
                <ChevronDown size={17} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <ul className="mt-5 grid gap-2 border-t border-silver/80 pt-5 text-sm leading-6 text-slate-600 dark:border-white/15">
                    {roles.map((role) => (
                      <li key={role} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
