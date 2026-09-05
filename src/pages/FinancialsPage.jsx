import { FileText } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { site } from '../data/site'

export default function FinancialsPage() {
  return (
    <div className="page-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="Financials"
        title="Current financial status"
        description="This trust is in its early stage of operation. Donations received to date are listed below, and no additional financial records are currently published."
      />

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-8 py-6">
            <h3 className="font-display text-3xl text-slate-900">Donation funds received</h3>
          </div>
          <div className="p-8">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">To date</div>
            <div className="mt-4 font-display text-5xl text-slate-900">₹1,00,000</div>
            <p className="mt-4 text-sm leading-7 text-slate-600">The organisation began recently, and the total amount raised through donations so far is ₹1,00,000.</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-8 py-6">
            <h3 className="font-display text-3xl text-slate-900">Financial record status</h3>
          </div>
          <div className="p-8">
            <p className="text-sm leading-8 text-slate-600">No audited accounts, annual returns, or published financial statements are currently available for display on this page.</p>
            <p className="mt-4 text-sm leading-8 text-slate-600">This page will be updated as the trust begins publishing formal financial documentation.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h3 className="font-display text-3xl text-slate-900">Published documents</h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">No documents are currently published while the organisation is in its early stage.</p>
        <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
          No financial PDFs or reports are available yet.
        </div>
      </section>
    </div>
  )
}
