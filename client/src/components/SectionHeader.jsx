export default function SectionHeader({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.18em] text-azure">{eyebrow}</p>}
      <h1 className="mt-3 text-3xl font-bold text-navy md:text-5xl">{title}</h1>
      {children && <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">{children}</p>}
    </div>
  );
}
