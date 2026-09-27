import { BadgeIndianRupee, BriefcaseBusiness, Clock3, Handshake, Scale, TrendingUp } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';

const valuePoints = [
  [BriefcaseBusiness, 'Right Expertise', 'Access skilled IT professionals and service teams aligned to your exact business priorities.'],
  [Scale, 'Flexible Solutions', 'Scale support up or down with staffing and service models that adapt as your needs change.'],
  [BadgeIndianRupee, 'Optimized Costs', 'Improve delivery capacity while keeping your IT spend controlled and predictable.'],
  [TrendingUp, 'Long-Term Value', 'Build a partnership that creates greater savings, stronger delivery, and lasting business benefits.']
];

export default function WhyChooseUs() {
  return (
    <>
      <section className="section-shell py-16">
        <SectionHeader eyebrow="Why Choose Us" title="Cost-Effective IT Solutions Without Compromising Quality">
          We help you achieve more with your IT budget by delivering the right expertise, at the right time, at the right cost.
        </SectionHeader>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-lg border border-silver/80 bg-white p-7 shadow-soft">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy text-white">
              <BadgeIndianRupee size={24} />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-navy">Smarter IT spending, stronger delivery</h2>
            <p className="mt-4 leading-7 text-slate-600">
              At Anaya Global, we understand that managing IT costs while maintaining quality and productivity is a key business priority. Our flexible staffing and IT service models are designed to help you optimize costs, access the right talent, and scale your technology capabilities as your business grows.
            </p>
          </article>

          <article className="rounded-lg bg-navy p-7 text-white shadow-soft">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-gold">
              <Handshake size={24} />
            </div>
            <h2 className="mt-6 text-2xl font-bold">More Value. Greater Savings. Long-Term Benefits.</h2>
            <p className="mt-4 leading-7 text-silver">
              We believe that a strong, long-term partnership should create greater value for our clients. As our relationship grows, we are able to offer enhanced benefits, greater cost efficiencies, and more value-driven solutions tailored to your evolving requirements.
            </p>
          </article>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valuePoints.map(([Icon, title, text]) => (
            <article key={title} className="rounded-lg border border-silver/80 bg-white p-6 shadow-soft hover:-translate-y-1">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy text-white">
                <Icon size={23} />
              </div>
              <h2 className="text-lg font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="rounded-lg border border-silver/80 bg-platinum p-7 shadow-soft md:p-9">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-azure text-white">
                  <Clock3 size={24} />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-navy md:text-3xl">Partner with us for the long term</h2>
              </div>
              <div>
                <p className="text-lg font-semibold leading-8 text-slate-700">
                  Unlock greater value from your IT investment through a partnership built around practical expertise, flexible delivery, optimized costs, and measurable long-term benefit.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {['Right Expertise', 'Flexible Solutions', 'Optimized Costs', 'Long-Term Value'].map((item) => (
                    <span key={item} className="rounded-md border border-silver bg-white px-4 py-2 text-sm font-bold text-navy">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
