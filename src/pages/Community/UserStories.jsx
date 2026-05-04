import React from 'react'

const stories = [
  {
    title: "Rekindling Connection & Memory",
    user: "Anitha Rao",
    text:
      "We introduced Rasphera during our senior engagement sessions, and the response was heartwarming. Residents who are usually reserved started opening up, interacting, and even recalling memories. It felt truly meaningful.",
  },
  {
    title: "Transforming Team Collaboration",
    user: "Karthik Menon",
    text:
      "We’ve conducted multiple team-building activities before, but Rasphera stood out. It was simple, engaging, and genuinely brought the team together without feeling forced.",
  },
  {
    title: "Encouraging Screen-Free Creativity",
    user: "Neha Sharma",
    text:
      "My son usually spends most of his time on screens, but Rasphera games completely changed that. He was fully engaged, thinking creatively, and most importantly, spending quality time with us.",
  },
  {
    title: "Making Learning Engaging & Collaborative",
    user: "Ramesh Iyer",
    text:
      "The games are thoughtfully designed. Students were more focused, collaborative, and excited to participate. It’s a great blend of fun and learning.",
  },
  {
    title: "Creating Lively Community Experiences",
    user: "Pooja Nair",
    text:
      "Rasphera became the highlight of our event. People of all age groups gathered around, played together, and stayed longer than expected. It created a very lively and inclusive environment.",
  },
  {
    title: "Moments of Joy & Recognition",
    user: "Suresh Patel",
    text:
      "For a few moments, I could see recognition and joy in my parent’s face again. Those moments are rare, and Rasphera helped create them. That means a lot to us.",
  },
];

export default function UserStories() {
  return (
    <div className="container-default">

      <div className="card p-10">

        <h1 className="text-3xl font-bold text-highlight mb-8">
          User Stories
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {stories.map((s) => (
            <div
              key={s.title}
              className="card p-6 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >

              <h3 className="font-display text-lg font-bold text-highlight">
                {s.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {s.text}
              </p>

              <p className="text-accent text-sm font-medium mt-4">
                — {s.user}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}