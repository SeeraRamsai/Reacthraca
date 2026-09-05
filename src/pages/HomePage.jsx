import { Link } from 'react-router-dom'
import { ArrowRight, HeartHandshake, Landmark, Sparkles, Users } from 'lucide-react'
import { site, formatRupees } from '../data/site'
import SectionHeader from '../components/SectionHeader'
import CampaignCard from '../components/CampaignCard'

export default function HomePage() {
  const featuredPct = Math.min(100, Math.round((site.featuredAppeal.raised / site.featuredAppeal.goal) * 100))

  return (
    <>
      <section className="relative overflow-hidden bg-hero-grid text-white">
        <div className="page-shell grid gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-200">Serving Andhra Pradesh & Telangana</p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Empowering rural communities with dignity, transparency, and care
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100/90">
              We work alongside villages to expand access to education, health outreach, human rights awareness, youth skilling, and legal aid for the oppressed.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/donate" className="rounded-full bg-accent-500 px-7 py-4 text-sm font-bold text-white shadow-glow transition hover:bg-accent-600">
                Donate now
              </Link>
              <Link to="/programmes" className="rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10">
                See our programmes
              </Link>
            </div>
          </div>

          <div className="glass-card p-8">
            <span className="inline-flex rounded-full bg-accent-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white">
              {site.featuredAppeal.tag}
            </span>
            <h2 className="mt-5 font-display text-3xl text-white">{site.featuredAppeal.title}</h2>
            <p className="mt-4 text-slate-100/85">{site.featuredAppeal.blurb}</p>
            <div className="mt-6 h-3 rounded-full bg-white/20">
              <div className="h-3 rounded-full bg-accent-400" style={{ width: `${featuredPct}%` }} />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-200">
              <span>{formatRupees(site.featuredAppeal.raised)} raised</span>
              <span>Goal: {formatRupees(site.featuredAppeal.goal)}</span>
            </div>
            <Link to={`/donate?campaign=${encodeURIComponent(site.featuredAppeal.title)}`} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-900 transition hover:bg-slate-100">
              Donate to this appeal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="page-shell grid gap-6 py-8 md:grid-cols-2 xl:grid-cols-4">
          {site.impactCounters.map((item) => (
            <div key={item.label} className="rounded-[1.75rem] bg-slate-50 p-6 shadow-sm">
              <div className="font-display text-4xl text-brand-900">{item.isCurrency ? formatRupees(item.value) : item.value.toLocaleString('en-IN')}</div>
              <div className="mt-2 text-sm font-medium text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Our mission"
              title="Building long-term change, not one-off charity"
              description="We run year-round programmes with local teams, public financial reporting, and village-level collaboration so support reaches the people who need it most."
            />
          </div>
          <div className="grid gap-5">
            {[
              ['Direct implementation', 'We work through local staff and community relationships rather than layers of subcontracting.'],
              ['Full transparency', 'Registration numbers, financials, and campaign goals are presented clearly for donors and partners.'],
              ['Community-led planning', 'Village committees help identify needs, shape priorities, and improve programme delivery.'],
            ].map(([title, text], index) => (
              <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent-600">0{index + 1}</div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50/70 py-20">
        <div className="page-shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Current appeals"
              title="Designed to inspire action"
              description="A cleaner, more modern campaign grid makes the site more visually compelling while keeping the donation paths clear."
            />
            <Link to="/programmes" className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-bold text-brand-800 transition hover:border-brand-400 hover:text-brand-900">
              View all programmes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {site.campaigns.slice(0, 3).map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="mb-10">
          <SectionHeader
            eyebrow="Recent activity"
            title="Community action and advocacy in motion"
            description="Recent field activity reflects the organisation’s continued commitment to justice, human rights, and public accountability."
          />
        </div>

        {site.recentActivities.map((activity) => (
          <div key={activity.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                  <span>{activity.date}</span>
                  <span className="text-slate-300">•</span>
                  <span>{activity.location}</span>
                </div>
                <h3 className="font-display text-3xl text-slate-900 sm:text-4xl">{activity.title}</h3>
                <p className="mt-5 text-base leading-8 text-slate-600">{activity.summary}</p>
                <p className="mt-5 text-sm leading-8 text-slate-600">{activity.description}</p>
              </div>

              <div className="grid gap-4 bg-slate-50 p-4 sm:p-6 lg:grid-cols-2">
                {activity.images.map((image, index) => (
                  <div key={`${activity.title}-${index}`} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                    <img src={image} alt={`${activity.title} ${index + 1}`} className="h-64 w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="page-shell py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { icon: Users, title: 'Volunteer', text: 'Join literacy circles, field visits, event support, and community outreach.', link: '/volunteer' },
            { icon: Landmark, title: 'Trust & compliance', text: 'Showcase public disclosures, reports, and key registrations in one place.', link: '/financials' },
            { icon: Sparkles, title: 'Modern experience', text: 'The upgraded app uses reusable components, better spacing, and mobile-friendly navigation.', link: '/about' },
          ].map((item) => (
            <Link key={item.title} to={item.link} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <item.icon className="h-10 w-10 text-accent-500" />
              <h3 className="mt-5 text-2xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell pb-12">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-10 text-white shadow-soft sm:px-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-4xl">Give an hour, not just a rupee</h2>
            <p className="mt-4 max-w-2xl text-slate-300">Volunteers support literacy circles, health-camp registration, translation, and event logistics. No experience needed — just commitment and care.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 lg:mt-0">
            <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-white">
              <HeartHandshake className="h-4 w-4" /> Become a volunteer
            </Link>
            <Link to="/about" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
