import PolicyPage from './shared/PolicyPage'

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="Last updated: 1 September 2026"
      sections={[
        ['1. Who we are', 'This website is operated by TR HR & ACA, a public charitable trust registered under applicable law. By using this site, you agree to these Terms & Conditions.'],
        ['2. Use of this site', 'You may browse the site and use its forms for intended purposes such as learning about programmes, donating, volunteering, or requesting information.'],
        ['3. Donations', 'Donations are voluntary contributions and are subject to the Refund Policy. Tax deductibility depends on a valid 80G registration at the time of donation.'],
        ['4. Recurring donations', 'If recurring giving is offered in the future through a payment partner, cancellation should be possible through that system or donor support.'],
        ['5. Intellectual property', 'Site content, branding, photographs, and design belong to TR HR & ACA or are used with permission unless stated otherwise.'],
        ['6. Third-party services', 'Payment gateways and other third-party tools have their own terms and privacy policies once you interact with them.'],
        ['7. No warranty', 'We try to keep information accurate and current, but programme figures and summaries may lag real-time activity.'],
        ['8. Limitation of liability', 'To the extent permitted by law, TR HR & ACA is not liable for indirect or consequential loss arising from site use.'],
        ['9. Governing law', 'These Terms are governed by the laws of India and disputes are subject to the competent courts in Andhra Pradesh.'],
      ]}
    />
  )
}
