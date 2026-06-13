import SectionHeader from '../components/SectionHeader.jsx';

export default function About() {
  return (
    <section className="section-shell py-16">
      <SectionHeader eyebrow="About Us" title="Who We Are">
        Anaya Global is a business outsourcing company dedicated to helping organizations streamline operations through cost-effective and reliable support services.
      </SectionHeader>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="rounded-lg border border-silver bg-white p-7 shadow-soft">
          <h2 className="text-2xl font-bold text-navy">Our Vision</h2>
          <p className="mt-4 leading-7 text-slate-600">To become a trusted global outsourcing partner recognized for excellence, innovation, and client success.</p>
        </article>
        <article className="rounded-lg border border-silver bg-white p-7 shadow-soft">
          <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
          <p className="mt-4 leading-7 text-slate-600">To provide high-quality outsourcing solutions that drive business growth and operational efficiency.</p>
        </article>
      </div>
      <p className="mt-10 max-w-4xl text-lg leading-8 text-slate-700">
        We focus on quality, efficiency, and customer satisfaction while enabling clients to concentrate on their core business objectives.
      </p>
    </section>
  );
}
