export const events = [
  { id: 1, title: 'Mindful Team Day', date: '2026-03-05', location: 'Mumbai', service: 'Corporate Solutions' },
  { id: 2, title: 'School Play Lab', date: '2026-03-12', location: 'Pune', service: 'Kids & Schools' },
  { id: 3, title: 'Senior Joy Circle', date: '2026-03-18', location: 'Delhi', service: 'Senior Wellness' },
]

export const calendarDays = Array.from({ length: 30 }).map((_, i) => ({
  day: i + 1,
  events: events.filter((e) => Number(e.date.split('-')[2]) === i + 1),
}))
