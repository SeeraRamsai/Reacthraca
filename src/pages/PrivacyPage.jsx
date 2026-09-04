import PolicyPage from './shared/PolicyPage'

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="Last updated: 1 September 2026"
      sections={[
        ['1. What this policy covers', 'This Privacy Policy explains how TR HR & ACA collects, uses, stores, and protects personal information when you visit the site, donate, volunteer, or contact the organisation.'],
        ['2. Information we collect', 'Depending on site usage, information may include your contact details, donation details, volunteer information, and technical data used for security and performance.'],
        ['3. How we use your information', 'Information is used to process donations, respond to enquiries, send updates where appropriate, maintain records, and improve the site. We do not sell personal data.'],
        ['4. Payment information', 'Live payment details should be handled only by a licensed third-party gateway over secure encrypted connections, not stored directly by this frontend.'],
        ['5. Sharing your information', 'Information may be shared only with payment providers, auditors, regulators, or essential service providers under suitable confidentiality or legal obligations.'],
        ['6. Data retention', 'Records are retained only for as long as needed for lawful compliance, operational administration, or legitimate organisational recordkeeping.'],
        ['7. Your rights', 'You may contact the organisation to request access, correction, deletion, or communication preferences, subject to legal retention obligations.'],
        ['8. Cookies', 'If analytics or cookie-based tooling is enabled later, a proper consent and disclosure flow should be added to match applicable law.'],
        ['9. Security', 'Reasonable administrative and technical safeguards should be applied, but no method of transmission or storage is absolutely secure.'],
      ]}
    />
  )
}
