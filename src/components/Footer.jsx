import { Link } from 'react-router-dom'
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <h3 className="font-display text-2xl text-white">{site.orgName}</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{site.orgShortDesc}</p>
          <div className="mt-6 grid gap-3 text-sm text-slate-400">
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent-400" /> {site.contact.email}</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent-400" /> {site.contact.phone}</div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent-400" /> {site.contact.address}</div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Explore</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link to="/about">About Us</Link>
            <Link to="/programmes">Programmes</Link>
            <Link to="/financials">Financials & Reports</Link>
            <Link to="/volunteer">Join Us</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Legal</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/refund">Refund Policy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            © {new Date().getFullYear()} {site.orgName}. All rights reserved. <span className="text-slate-500">Trust Reg. No. {site.legal.trustRegNo} · PAN {site.legal.panNo} · 80G {site.legal.reg80G}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Secured for HTTPS deployment
          </div>
        </div>
      </div>
    </footer>
  )
}
