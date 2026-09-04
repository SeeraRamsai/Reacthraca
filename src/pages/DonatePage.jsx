import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { currencySymbol, site } from '../data/site'

export default function DonatePage() {
  const location = useLocation()
  const campaignFromQuery = useMemo(() => {
    const params = new URLSearchParams(location.search)
    return params.get('campaign') || 'Wherever needed most'
  }, [location.search])

  const [frequency, setFrequency] = useState('one-time')
  const [currency, setCurrency] = useState('INR')
  const [campaign, setCampaign] = useState(campaignFromQuery)
  const [amount, setAmount] = useState(site.donation.oneTimeAmountsINR[1])
  const [customAmount, setCustomAmount] = useState('')
  const [method, setMethod] = useState(site.donation.paymentMethods[0])
  const [review, setReview] = useState(null)

  const amounts = frequency === 'monthly' ? site.donation.monthlyAmountsINR : site.donation.oneTimeAmountsINR

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const finalAmount = Number(customAmount) || amount
    setReview({
      amount: finalAmount,
      frequency,
      currency,
      campaign,
      method,
      name: form.get('name'),
      email: form.get('email'),
    })
  }

  return (
    <div className="page-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="Donate"
        title="A smoother donor journey with safer deployment defaults"
        description="This upgraded page keeps the donation flow clear and attractive. It remains front-end only until a real payment gateway is connected on a backend."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          {!review ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="label">Frequency</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ['one-time', 'One-time'],
                    ['monthly', 'Monthly (recurring)'],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setFrequency(value)
                        setAmount((value === 'monthly' ? site.donation.monthlyAmountsINR : site.donation.oneTimeAmountsINR)[1])
                        setCustomAmount('')
                      }}
                      className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                        frequency === value ? 'border-brand-900 bg-brand-900 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="label">Currency</label>
                  <select className="select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {site.donation.currencies.map((cur) => (
                      <option key={cur}>{cur}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">I'm supporting</label>
                  <select className="select" value={campaign} onChange={(e) => setCampaign(e.target.value)}>
                    <option>Wherever needed most</option>
                    {site.campaigns.map((item) => (
                      <option key={item.id}>{item.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="label">Amount</label>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {amounts.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setAmount(value)
                        setCustomAmount('')
                      }}
                      className={`rounded-2xl border px-4 py-4 text-sm font-bold transition ${
                        !customAmount && amount === value ? 'border-accent-500 bg-accent-500 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'
                      }`}
                    >
                      {currencySymbol(currency)}{value.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
                <input
                  className="input mt-4"
                  type="number"
                  min="1"
                  placeholder="Or enter a custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="label">Full name</label>
                  <input className="input" name="name" required />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input className="input" type="email" name="email" required />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="label">Phone</label>
                  <input className="input" name="phone" required />
                </div>
                <div>
                  <label className="label">PAN (optional)</label>
                  <input className="input" name="pan" placeholder="ABCDE1234F" />
                </div>
              </div>

              <div>
                <label className="label">Payment method</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {site.donation.paymentMethods.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setMethod(value)}
                      className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                        method === value ? 'border-brand-900 bg-brand-50 text-brand-900' : 'border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <input type="checkbox" required className="mt-1" />
                <span>I agree to the Terms & Conditions, Privacy Policy, and Refund Policy.</span>
              </label>

              <button className="w-full rounded-full bg-accent-500 px-6 py-4 text-sm font-bold text-white shadow-glow transition hover:bg-accent-600">
                Review donation
              </button>
            </form>
          ) : (
            <div>
              <h3 className="font-display text-3xl text-slate-900">Review your donation</h3>
              <div className="mt-6 space-y-4">
                <div className="notice"><strong>Amount:</strong> {currencySymbol(review.currency)}{review.amount.toLocaleString('en-IN')} · {review.frequency === 'monthly' ? 'Monthly' : 'One-time'}</div>
                <div className="notice"><strong>Campaign:</strong> {review.campaign}</div>
                <div className="notice"><strong>Payment method:</strong> {review.method}</div>
                <div className="notice"><strong>Donor:</strong> {review.name} · {review.email}</div>
              </div>
              <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
                This is still a preview-only checkout. Connect a licensed payment gateway on a backend before accepting real payments.
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <button type="button" onClick={() => setReview(null)} className="rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700">
                  Edit
                </button>
                <button type="button" disabled className="rounded-full bg-slate-300 px-6 py-3 text-sm font-bold text-white">
                  Proceed to payment
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="font-display text-3xl text-slate-900">Where your money goes</h3>
            <div className="mt-6 space-y-4">
              {[
                ['85%', 'Directly to programmes — school kits, meals, health camps, scholarships.'],
                ['10%', 'Field staff and local operations that make delivery possible.'],
                ['5%', 'Administration, audit, and governance.'],
              ].map(([value, text]) => (
                <div key={value} className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-2xl font-bold text-brand-900">{value}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="notice">
            <strong>Tax benefit:</strong> Donations are eligible for deduction under Section 80G of the Income Tax Act. A receipt can be emailed after live gateway integration.
          </div>
          <div className="notice">
            <strong>UPI:</strong> {site.donation.upiId}<br />
            <strong>Bank account:</strong> {site.donation.bankDetails.accountName}<br />
            <strong>Account number:</strong> {site.donation.bankDetails.accountNumber}<br />
            <strong>IFSC:</strong> {site.donation.bankDetails.ifsc}
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5 text-sm leading-7 text-rose-900">
            <strong>Security note:</strong> Never collect card PINs, OTPs, or bank passwords directly on your own front end. Use a licensed payment gateway.
          </div>
        </div>
      </div>
    </div>
  )
}
