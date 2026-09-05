import SectionHeader from '../components/SectionHeader'
import { site } from '../data/site'

export default function AboutPage() {
  return (
    <div className="page-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="About us"
        title="Built from local urgency and sustained by community trust"
        description="TR HR & ACA was founded to protect human rights and expand opportunity through education, legal awareness, and grassroots development."
      />

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="font-display text-3xl text-slate-900">Where it started</h3>
          <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600">
            <p>TR HR & ACA was founded in 2026 by <strong>Tarmangi MatyaRaju</strong>, a schoolteacher from Alluri Sitarama Raju district, after a flood closed her village school for four months.</p>
            <p>She began by collecting used textbooks from schools in the city and cycling them out to flood-hit villages on weekends. Within a year, twelve volunteers had joined her, and a spare classroom became the first of what is now a year-round schools and nutrition programme.</p>
            <p>Today, the organisation works through local partnerships, volunteers, and field staff across hundreds of villages. The goal remains simple: reduce injustice, expand access, and keep support practical.</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
          <div className="bg-slate-100 p-4">
            <img src={`${import.meta.env.BASE_URL}images/Founder.jpeg`} alt="Managing Trustee of TR HR & ACA" className="h-80 w-full rounded-[1.25rem] object-contain object-center" />
          </div>
          <div className="p-6">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">Managing Trustee</div>
            <h3 className="mt-2 font-display text-3xl text-slate-900">Gunda Srinivas</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Leadership role with a focus on community trust, rural outreach, and the organisation’s early-stage development work.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] bg-brand-50 p-8 sm:p-10">
        <h3 className="font-display text-3xl text-slate-900">Our journey</h3>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {[
            ['2011', 'Founded as an informal volunteer group distributing textbooks after monsoon flooding.'],
            ['2013', 'Registered as a public charitable trust and launched a midday nutrition programme.'],
            ['2016', 'Received 12A and 80G tax-exemption status and expanded into health camps.'],
            ['2019', 'Reached 100 villages and launched girl child scholarship support.'],
            ['2023', 'Received FCRA registration to accept support from donors outside India.'],
            ['2025', 'Now active in 312 villages across Andhra Pradesh and Telangana.'],
          ].map(([year, text]) => (
            <div key={year} className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-accent-600">{year}</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h3 className="font-display text-3xl text-slate-900">Board of Trustees</h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">TR HR & ACA is governed by a five-member Board of Trustees who meet quarterly and serve without compensation.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {site.board.map((person) => (
            <div key={person.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">{person.role}</div>
              <h4 className="mt-3 text-2xl font-bold text-slate-900">{person.name}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {[
          ['Board of Trustees', 'Sets strategy, approves the annual budget, and appoints the executive leadership.'],
          ['Executive team', 'Runs day-to-day programmes and field operations while reporting to the board regularly.'],
          ['Independent audit', 'An external chartered accountancy firm audits the accounts annually for transparency.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-bold text-slate-900">{title}</h4>
            <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-8 py-6">
          <h3 className="font-display text-3xl text-slate-900">Legal registration</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">These numbers help partners, donors, and auditors verify organisational status.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-8 py-4 font-semibold">Registration</th>
                <th className="px-8 py-4 font-semibold">Number</th>
                <th className="px-8 py-4 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Public Charitable Trust', site.legal.trustRegNo, 'Primary legal registration of the trust'],
                ['PAN (organisation)', site.legal.panNo, 'Tax identification'],
                ['12A registration', site.legal.reg12A, 'Income tax exemption for the trust'],
                ['80G registration', site.legal.reg80G, 'Tax deduction for Indian donors'],
                ['FCRA registration', site.legal.fcraNo, 'Permission to receive foreign contributions'],
                ['CSR-1 registration', site.legal.csr1No, 'Eligibility to receive corporate CSR funding'],
                ['NGO Darpan ID', site.legal.ngoDarpanId, 'NITI Aayog NGO registry listing'],
              ].map(([title, value, purpose]) => (
                <tr key={title} className="border-t border-slate-200">
                  <td className="px-8 py-4 font-semibold text-slate-900">{title}</td>
                  <td className="px-8 py-4 text-slate-600">{value}</td>
                  <td className="px-8 py-4 text-slate-600">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
