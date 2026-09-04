import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

export default function VolunteerPage() {
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false)
  const [corporateSubmitted, setCorporateSubmitted] = useState(false)

  return (
    <div className="page-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="Join us"
        title="Volunteer, partner, or support with your team"
        description="The new experience keeps enquiry paths clear for individual volunteers and corporate partners, with cleaner forms and mobile-friendly layout."
      />

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-3xl text-slate-900">Volunteer with us</h3>
          <p className="mt-4 text-sm leading-8 text-slate-600">Volunteers support literacy circles, health-camp registration desks, event logistics, outreach, and translation. Most roles need only a few Saturdays a month.</p>
          <div className="mt-8 space-y-4">
            {[
              ['01', 'Apply', 'Fill in the form and we reply within 5 working days.'],
              ['02', 'Orientation', 'A short onboarding session covers our programmes and safeguarding approach.'],
              ['03', 'Get placed', 'We match you to a role based on your skills, city, and availability.'],
            ].map(([num, title, text]) => (
              <div key={title} className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-accent-600">{num}</div>
                <h4 className="mt-2 text-xl font-bold text-slate-900">{title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          {!volunteerSubmitted ? (
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setVolunteerSubmitted(true) }}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label className="label">Full name</label><input className="input" required /></div>
                <div><label className="label">Email</label><input className="input" type="email" required /></div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label className="label">Phone</label><input className="input" required /></div>
                <div><label className="label">City</label><input className="input" required /></div>
              </div>
              <div>
                <label className="label">Area of interest</label>
                <select className="select" required>
                  <option value="">Select one</option>
                  <option>Literacy circles / teaching support</option>
                  <option>Health camp support</option>
                  <option>Event & logistics</option>
                  <option>Translation / documentation</option>
                  <option>Fundraising & outreach</option>
                  <option>Skills-based (design, tech, finance, legal)</option>
                </select>
              </div>
              <div>
                <label className="label">Availability</label>
                <select className="select" required>
                  <option value="">Select one</option>
                  <option>A few hours a month</option>
                  <option>Half a day a week</option>
                  <option>One full day a week</option>
                  <option>Flexible / project-based</option>
                </select>
              </div>
              <div>
                <label className="label">Anything else we should know?</label>
                <textarea className="textarea min-h-32" placeholder="Relevant experience, languages you speak, etc." />
              </div>
              <button className="w-full rounded-full bg-accent-500 px-6 py-4 text-sm font-bold text-white shadow-glow transition hover:bg-accent-600">Submit application</button>
            </form>
          ) : (
            <div className="notice"><strong>Thank you!</strong> Your volunteer application has been recorded. We&apos;ll email you with next steps.</div>
          )}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-brand-50 p-8">
          <h3 className="font-display text-3xl text-slate-900">Corporate partnerships</h3>
          <p className="mt-4 text-sm leading-8 text-slate-600">We partner with companies on CSR grants, employee volunteering, in-kind support, and matched giving.</p>
          <div className="mt-8 space-y-4">
            {[
              ['CSR grants', 'Multi-year or annual funding tied to measurable programme delivery and reporting.'],
              ['Employee volunteering', 'Team volunteering days or skills-based support from staff.'],
              ['In-kind & matched giving', 'Product donations and matching employee contributions.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.75rem] bg-white p-5 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900">{title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          {!corporateSubmitted ? (
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setCorporateSubmitted(true) }}>
              <div><label className="label">Company name</label><input className="input" required /></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label className="label">Contact person</label><input className="input" required /></div>
                <div><label className="label">Designation</label><input className="input" /></div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label className="label">Work email</label><input className="input" type="email" required /></div>
                <div><label className="label">Phone</label><input className="input" /></div>
              </div>
              <div>
                <label className="label">Type of partnership</label>
                <select className="select" required>
                  <option value="">Select one</option>
                  <option>CSR grant</option>
                  <option>Employee volunteering day</option>
                  <option>In-kind donation</option>
                  <option>Employee matched giving</option>
                  <option>Other / not sure yet</option>
                </select>
              </div>
              <div>
                <label className="label">Tell us more</label>
                <textarea className="textarea min-h-32" placeholder="Budget range, timeline, focus area, etc. (optional)" />
              </div>
              <button className="w-full rounded-full bg-brand-900 px-6 py-4 text-sm font-bold text-white transition hover:bg-brand-800">Send enquiry</button>
            </form>
          ) : (
            <div className="notice"><strong>Thank you!</strong> Our partnerships team will get back to you within 3 working days.</div>
          )}
        </div>
      </section>
    </div>
  )
}
