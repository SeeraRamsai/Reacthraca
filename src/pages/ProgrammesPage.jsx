import SectionHeader from '../components/SectionHeader'
import CampaignCard from '../components/CampaignCard'
import { site } from '../data/site'

export default function ProgrammesPage() {
  return (
    <div className="page-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="Programmes"
        title="Campaigns with clear outcomes and visible progress"
        description="Every campaign below funds a specific, trackable part of the work. Visitors can move from browsing to donating without broken page links or deployment-specific route issues."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {site.campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>

      <section className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <h3 className="font-display text-3xl text-slate-900">How we choose where money goes</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ['01', 'Village need survey', 'Local committees flag where school, nutrition, or health support is needed most.'],
            ['02', 'Budget approval', 'The board reviews programme budgets and allocation decisions on a regular cycle.'],
            ['03', 'Public reporting', 'Spend is reflected in reports and disclosures so donors can trace organisational priorities.'],
          ].map(([num, title, text]) => (
            <div key={title} className="rounded-[1.75rem] bg-slate-50 p-6">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-accent-600">{num}</div>
              <h4 className="mt-3 text-xl font-bold text-slate-900">{title}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
