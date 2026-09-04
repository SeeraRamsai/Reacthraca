import SectionHeader from '../../components/SectionHeader'

export default function PolicyPage({ eyebrow, title, updated, sections }) {
  return (
    <div className="page-shell py-16 sm:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} description={updated} />
      <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="rounded-2xl bg-amber-50 p-5 text-sm leading-7 text-amber-900">
          Template policy content: have this reviewed against your real operations and applicable legal requirements before publishing live.
        </div>
        <div className="mt-8 space-y-8">
          {sections.map(([heading, body]) => (
            <section key={heading}>
              <h3 className="text-2xl font-bold text-slate-900">{heading}</h3>
              <p className="mt-3 max-w-none text-sm leading-8 text-slate-600">{body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
