import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { formatRupees } from '../data/site'

export default function CampaignCard({ campaign }) {
  const pct = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100))

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img src={campaign.image} alt={campaign.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        {campaign.urgent ? (
          <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">Urgent</span>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-slate-900">{campaign.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{campaign.summary}</p>
        <div className="mt-5 h-2 rounded-full bg-slate-100">
          <div className="h-2 rounded-full bg-gradient-to-r from-brand-700 to-accent-500" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
          <span>{formatRupees(campaign.raised)} raised</span>
          <span>{pct}% of {formatRupees(campaign.goal)}</span>
        </div>
        <Link
          to={`/donate?campaign=${encodeURIComponent(campaign.title)}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-800 transition hover:text-accent-600"
        >
          Support this cause <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
