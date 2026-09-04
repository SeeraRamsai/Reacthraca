import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, HeartHandshake } from 'lucide-react'
import { assetPath } from '../data/site'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programmes', label: 'Programmes' },
  { to: '/financials', label: 'Financials' },
  { to: '/volunteer', label: 'Join Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={assetPath('Brand Logo.jpeg')} alt="TR HR & ACA logo" className="h-12 w-12 rounded-2xl object-cover shadow-soft" />
          <div>
            <div className="font-display text-xl font-bold text-brand-900">TR HR & ACA</div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Public Charitable Trust</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-brand-900 text-white' : 'text-slate-600 hover:bg-brand-50 hover:text-brand-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/donate"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-accent-600"
          >
            <HeartHandshake className="h-4 w-4" /> Donate Now
          </NavLink>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-xl border border-slate-200 p-3 text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive ? 'bg-brand-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-accent-500 px-5 py-3 text-sm font-bold text-white"
            >
              Donate Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
