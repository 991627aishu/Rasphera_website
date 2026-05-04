import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogs } from '../../data/blogData.js'

export default function Blog() {

  const [q, setQ] = useState('')
  const [tag, setTag] = useState('All')

  const tags = ['All', ...new Set(blogs.flatMap(b => b.tags))]

  const filtered = useMemo(() => {
    return blogs.filter(b => {

      const matchSearch =
        b.title.toLowerCase().includes(q.toLowerCase()) ||
        b.tags.join(' ').toLowerCase().includes(q.toLowerCase())

      const matchTag =
        tag === 'All' || b.tags.includes(tag)

      return matchSearch && matchTag
    })
  }, [q, tag])

  return (
    <div className="container-default">

      <div className="card p-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-highlight mb-8">
          Blog
        </h1>

        {/* SEARCH BAR (FIXED DESIGN) */}
        <div className="max-w-xl mb-6">
          <input
            type="text"
            placeholder="Search articles..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="
              w-full px-5 py-3 rounded-2xl 
              bg-white border border-gray-200
              focus:ring-2 focus:ring-accent focus:border-accent
              outline-none text-sm shadow-sm
              placeholder:text-gray-400
            "
          />
        </div>

        {/* TAG FILTER */}
        <div className="flex gap-3 flex-wrap mb-8">
          {tags.map(t => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`
                px-4 py-2 rounded-xl text-sm transition-all duration-200
                ${tag === t
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {t}
            </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.length === 0 && (
            <p className="text-gray-500">No blogs found.</p>
          )}

          {filtered.map((b) => (
            <Link
              key={b.id}
              to={`/learn/blog/${String(b.id)}`}
              className="
                group rounded-3xl border border-gray-200 
                p-6 bg-white shadow-sm
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300
              "
            >

              {/* TAG */}
              <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wide">
                {b.tags[0]}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-highlight group-hover:text-accent transition">
                {b.title}
              </h3>

              {/* EXCERPT */}
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {b.excerpt}
              </p>

              {/* META */}
              <div className="flex justify-between items-center mt-6 text-xs text-gray-400">
                <span>{b.author}</span>
                <span>{b.readTime}</span>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </div>
  )
}