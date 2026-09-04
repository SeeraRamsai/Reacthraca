import { FileText } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { site } from '../data/site'

export default function FinancialsPage() {
  return (
    <div className="page-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="Financials"
        title="Transparency presented with stronger structure and clearer hierarchy"
        description="Audited accounts, annual returns, and spend summaries remain easy to find and easier to scan in the refreshed design."
      />

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <TableCard
          title="Income & expenditure — FY 2024–25"
          headers={['Income source', 'Amount (₹)']}
          rows={[
            ['Individual donations', '1,04,20,000'],
            ['Corporate CSR grants', '62,50,000'],
            ['Foreign contributions (FCRA)', '18,00,000'],
            ['Other income', '3,10,000'],
            ['Total income', '1,87,80,000'],
          ]}
        />
        <TableCard
          title="Expenditure snapshot"
          headers={['Expenditure', 'Amount (₹)']}
          rows={[
            ['Programme delivery', '1,54,60,000'],
            ['Field staff & operations', '19,40,000'],
            ['Administration', '8,90,000'],
            ['Audit & compliance', '2,10,000'],
            ['Total expenditure', '1,85,00,000'],
          ]}
        />
      </section>

      <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h3 className="font-display text-3xl text-slate-900">Published documents</h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">Replace these placeholder links with your real PDF files once uploaded to your deployment host.</p>
        <div className="mt-8 space-y-4">
          {site.documents.map((doc) => (
            <div key={doc.title} className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-brand-50 p-3 text-brand-700"><FileText className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold text-slate-900">{doc.title}</div>
                  <div className="mt-1 text-sm text-slate-500">{doc.meta}</div>
                </div>
              </div>
              <a href="#" className="inline-flex rounded-full border border-brand-200 px-5 py-3 text-sm font-bold text-brand-800">
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-8 py-6">
          <h3 className="font-display text-3xl text-slate-900">Spend by programme, last 3 years</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                {['Programme', 'FY 2022–23', 'FY 2023–24', 'FY 2024–25'].map((head) => (
                  <th key={head} className="px-8 py-4 font-semibold">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['School Kits & Education', '₹38,20,000', '₹44,10,000', '₹52,60,000'],
                ['Midday Nutrition', '₹41,00,000', '₹49,80,000', '₹58,90,000'],
                ['Mobile Health Camps', '₹9,40,000', '₹11,20,000', '₹14,10,000'],
                ['Girl Child Scholarships', '₹6,80,000', '₹8,90,000', '₹11,50,000'],
                ['Emergency Relief', '₹5,10,000', '₹7,00,000', '₹17,50,000'],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-slate-200">
                  {row.map((cell, index) => (
                    <td key={cell} className={`px-8 py-4 ${index === 0 ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function TableCard({ title, headers, rows }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-8 py-6">
        <h3 className="font-display text-3xl text-slate-900">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-8 py-4 font-semibold">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-slate-200">
                <td className="px-8 py-4 font-semibold text-slate-900">{row[0]}</td>
                <td className="px-8 py-4 text-slate-600">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
