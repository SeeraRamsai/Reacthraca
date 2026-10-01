import { ArrowRight, HeartHandshake, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { assetPath } from '../data/site'

const stories = [
  {
    image: 'service -1.jpeg',
    title: 'People behind the work',
    description: 'A team gathering that reflects the relationships behind local outreach.',
  },
  {
    image: 'service -2.jpeg',
    title: 'Leadership in the community',
    description: 'Organisation leaders sharing their purpose and meeting with community members.',
  },
  {
    image: 'service -3.jpeg',
    title: 'Together across the community',
    description: 'Residents and volunteers gathered together in a show of community participation.',
  },
  {
    image: 'service -4.jpeg',
    title: 'A shared celebration',
    description: 'Local participants coming together for a community event.',
  },
  {
    image: 'service -5.jpeg',
    title: 'Making community voices visible',
    description: 'A public gathering focused on bringing people together around a shared cause.',
  },
  {
    image: 'service -6.jpeg',
    title: 'A space to share perspectives',
    description: 'Participants listening and exchanging ideas during a group discussion.',
  },
  {
    image: 'service -7.jpeg',
    title: 'Support shared with care',
    description: 'Women gathered for a document handover and a moment of recognition.',
  },
  {
    image: 'service -8.jpeg',
    title: 'Local voices around the table',
    description: 'Community members and organisers meeting in person to discuss local priorities.',
  },
  {
    image: 'service -9.jpeg',
    title: 'Listening and learning together',
    description: 'An open conversation where participants can raise questions and hear one another.',
  },
  {
    image: 'aca-1.jpeg',
    title: 'Candlelight rally for justice',
    description: 'National Secretary Kodem Seethakumari and the TR Human Rights and Anti-Corruption Organization team held a candlelight rally demanding justice for Oke Sirisha and her family.',
  },
  {
    image: 'aca-2.jpeg',
    title: 'Community stands together for justice',
    description: 'A moment from the candlelight rally in Julurupadu, where the team and community members called for justice for Oke Sirisha and her family.',
  },
  ...Array.from({ length: 8 }, (_, index) => ({
    image: `t${index + 1}.jpeg`,
    title: `Community story ${String(index + 12).padStart(2, '0')}`,
    description: 'A community photograph documenting the people and activities connected with TR HR & ACA.',
  })),
]

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-hero-grid text-white">
        <div className="page-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-accent-200">Testimonials & community moments</p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Stories are strongest when they are shared</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100/90">
              A look at the people who meet, listen, celebrate, and take part in community life alongside TR HR & ACA.
            </p>
          </div>
          <div className="flex items-center gap-4 border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <UsersRound className="h-8 w-8 shrink-0 text-accent-300" />
            <div>
              <div className="font-display text-3xl font-bold">{String(stories.length).padStart(2, '0')}</div>
              <div className="text-sm text-slate-200">community photographs</div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-20">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-accent-600">From the field</p>
            <h2 className="font-display text-3xl font-bold text-slate-950 sm:text-4xl">People, participation, progress</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Each photograph captures a moment of people coming together. The captions describe the scenes, keeping every story grounded in what is shown.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <article key={story.image} className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={assetPath(story.image)}
                  alt={story.title}
                  className="h-full w-full object-cover object-[center_30%]"
                  loading={index > 2 ? 'lazy' : 'eager'}
                />
              </div>
              <div className="flex-1 p-5 sm:p-6">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-600">Community story {String(index + 1).padStart(2, '0')}</div>
                <h3 className="font-display text-2xl font-bold text-slate-900">{story.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="flex flex-col gap-6 rounded-2xl bg-brand-900 px-7 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex items-start gap-4">
            <HeartHandshake className="mt-1 h-7 w-7 shrink-0 text-accent-300" />
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Be part of the next story</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-slate-200">Join local outreach and community activities with TR HR & ACA.</p>
            </div>
          </div>
          <Link to="/volunteer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-600">
            Join us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}