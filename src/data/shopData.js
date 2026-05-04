import g1 from '../assets/g1.jpeg'

export const products = [
  {
    id: 'g1',
    title: 'Token Tales',
    category: 'Games',
    price: 699,
    image: g1,
  },
  {
    id: 'g2',
    title: 'Mindful Cards',
    category: 'Games',
    price: 899,
    image: '', // ✅ keep empty
  },
  {
    id: 'g3',
    title: 'Team Quest',
    category: 'Games',
    price: 1499,
    image: '',
  },
  {
    id: 'd1',
    title: 'DIY Play Kit',
    category: 'DIYKits',
    price: 1099,
    image: '',
  },
  {
    id: 'gs1',
    title: 'Wellness Gift Set',
    category: 'GiftSets',
    price: 1999,
    image: '',
  },
]

export const subscriptions = [
  {
    id: 's1',
    title: 'Monthly Play Box',
    price: 1299,
    features: ['Curated activities', 'Guidebook', 'Community access'],
  },
  {
    id: 's2',
    title: 'Team Wellness Plan',
    price: 2999,
    features: ['Workshop credits', 'Coach hours', 'Impact tracking'],
  },
]