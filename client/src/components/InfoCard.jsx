export default function InfoCard({ icon: Icon, title, children }) {
  return (
    <article className="rounded-lg border border-silver/80 bg-white p-6 shadow-soft hover:-translate-y-1">
      {Icon && (
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy text-white">
          <Icon size={23} />
        </div>
      )}
      <h2 className="text-lg font-bold text-navy">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{children}</p>
    </article>
  );
}
