export default function SectionHeader({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.26em] text-accent-600">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  )
}
