import PolicyPage from './shared/PolicyPage'

export default function RefundPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Refund & Cancellation Policy"
      updated="Last updated: 1 September 2026"
      sections={[
        ['1. Our approach to refunds', 'Donations are generally non-refundable once processed because funds may be allocated quickly, but genuine errors should be reviewed fairly.'],
        ['2. When we will issue a refund', 'Duplicate transactions, incorrect amounts, unauthorised donations, or other verified technical errors are common situations where a refund may be appropriate.'],
        ['3. How to request a refund', 'Refund requests should include the donor name, transaction date, amount, and payment reference, and should be sent to the donations contact address.'],
        ['4. Recurring donations', 'Future recurring charges may be cancelled, though already processed donations are typically handled under the general refund conditions.'],
        ['5. Tax receipts after a refund', 'Any tax receipt issued for a refunded donation should be treated as cancelled and not used for tax deduction claims.'],
        ['6. Failed or pending transactions', 'Where funds were debited but the payment status is unclear, donors should first allow time for automatic reversal by the bank or payment gateway.'],
        ['7. Corporate and CSR contributions', 'Corporate and CSR contributions may be governed by separate grant or partnership agreements rather than this general public-facing policy.'],
      ]}
    />
  )
}
