export const assetPath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`

export const site = {
  orgName: 'TR HR & ACA',
  orgTagline: 'Empowering rural communities in Andhra Pradesh & Telangana',
  orgShortDesc:
    'A registered public charitable trust supporting rural communities in Andhra Pradesh and Telangana through education, human rights awareness, and community development.',
  contact: {
    email: 'contact@trhraca.org',
    donationEmail: 'donations@trhraca.org',
    phone: '+91 90000 00000',
    address: 'TR HR & ACA, Visakhapatanam, Andhra Pradesh, India',
  },
  legal: {
    trustRegNo: 'REG/TS/210739/2026',
    panNo: 'AAMCT7732R',
    reg80G: '',
    reg12A: '',
    fcraNo: '',
    csr1No: '',
    ngoDarpanId: 'TS/2026/1024089',
  },
  impactCounters: [
    { value: 200, label: 'People reached' },
    { value: 8, label: 'Villages engaged' },
    { value: 1, label: 'Year of active work' },
    { value: 100000, label: 'Funds raised through donations', isCurrency: true },
  ],
  featuredAppeal: {
    tag: 'Urgent appeal',
    title: 'Monsoon flood relief — Godavari districts',
    blurb:
      'Families in 14 flood-affected villages need dry rations, clean water and temporary shelter this week.',
    raised: 640000,
    goal: 1200000,
  },
  recentActivities: [
    {
      title: 'Candlelight rally for justice for Oke Sirisha',
      date: 'Recent activity',
      location: 'Julurupadu mandal, Bhadradri Kothagudem district, Telangana',
      summary:
        'National Secretary Kodem Seethakumari and the TR Human Rights and Anti-Corruption Organization team held a candlelight rally demanding justice for Oke Sirisha and her family.',
      description:
        'In the main center of Julurupadu mandal in Bhadradri Kothagudem district of Telangana state, National Secretary Kodem Seethakumari and the team of the TR Human Rights and Anti-Corruption Organization conducted a candlelight rally. They stated that the struggle will not stop until justice is delivered for the recently deceased Oke Sirisha, and peacefully protested demanding justice for Oke Sirisha and her family.',
      images: [assetPath('aca-1.jpeg'), assetPath('aca-2.jpeg')],
    },
  ],
  campaigns: [
    {
      id: 'school-kits',
      title: 'School Kits for Class 1–5',
      summary:
        'Uniforms, textbooks and a school bag for children starting the academic year.',
      raised: 420000,
      goal: 600000,
      urgent: false,
      image: assetPath('service -1.jpeg'),
    },
    {
      id: 'flood-relief',
      title: 'Monsoon Flood Relief',
      summary:
        'Emergency rations, water purification and tarpaulin shelter for displaced families.',
      raised: 640000,
      goal: 1200000,
      urgent: true,
      image: assetPath('service -2.jpeg'),
    },
    {
      id: 'nutrition',
      title: 'Midday Nutrition Programme',
      summary:
        'A hot, nutritious mid-day meal for children across 40 partner schools.',
      raised: 890000,
      goal: 1500000,
      urgent: false,
      image: assetPath('service -3.jpeg'),
    },
    {
      id: 'girl-scholarships',
      title: 'Girl Child Scholarships',
      summary:
        'Tuition and transport support so girls can complete secondary school.',
      raised: 275000,
      goal: 500000,
      urgent: false,
      image: assetPath('service -4.jpeg'),
    },
    {
      id: 'mobile-health',
      title: 'Mobile Health Camps',
      summary:
        'Monthly health check-ups and basic medicine in villages with no clinic nearby.',
      raised: 160000,
      goal: 400000,
      urgent: false,
      image: assetPath('service -5.jpeg'),
    },
    {
      id: 'skill-training',
      title: 'Youth Skill Training',
      summary:
        'Vocational training in tailoring, computers and electrical work for ages 17–24.',
      raised: 95000,
      goal: 350000,
      urgent: false,
      image: assetPath('service -6.jpeg'),
    },
  ],
  board: [
    {
      role: 'Managing Trustee',
      name: 'Gunda Srinivas',
      bio: 'Leads the trust, coordinates outreach, and guides the organisation’s early-stage community work.',
    },
    {
      role: 'Chairperson',
      name: 'Ravulapalli Tirupathayya',
      bio: 'Provides leadership, oversight, and strategic guidance for the trust’s social and human rights work.',
    },
    {
      role: 'Treasurer',
      name: 'Korra Nageshwara Rao',
      bio: 'Manages financial stewardship and keeps the organisation’s records transparent and accountable.',
    },
    {
      role: 'Trustee, Programmes',
      name: 'Rajya Lakshmi',
      bio: 'Coordinates programme planning, volunteer engagement, and field-level implementation.',
    },
    {
      role: 'Trustee, Governance',
      name: 'Tarmangi MatyaRaju',
      bio: 'Supports governance, community trust-building, and outreach efforts across the organisation’s work.',
    },
  ],
  documents: [],
  donation: {
    currencies: ['INR', 'USD', 'GBP', 'EUR'],
    oneTimeAmountsINR: [500, 1000, 2500, 5000],
    monthlyAmountsINR: [300, 750, 1500, 3000],
    paymentMethods: ['UPI', 'Net Banking', 'Debit / Credit Card', 'Bank Transfer'],
    upiId: 'trhraca@upi',
    bankDetails: {
      accountName: 'TR HR & ACA',
      accountNumber: '000000000000',
      ifsc: 'SBIN0000000',
      bankBranch: 'State Bank of India, Vijayawada Main Branch',
      swift: 'SBININBB000',
    },
  },
}

export const formatNumber = (n) => new Intl.NumberFormat('en-IN').format(Math.round(n))
export const formatRupees = (n) => `₹${formatNumber(n)}`
export const currencySymbol = (cur) => ({ INR: '₹', USD: '$', GBP: '£', EUR: '€' }[cur] || '')
