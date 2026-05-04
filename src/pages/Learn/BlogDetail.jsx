import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogs } from '../../data/blogData.js'

export default function BlogDetail() {

  const { id } = useParams()

  // ✅ FIX: convert to string for safety
  const post = blogs.find(b => String(b.id) === id)

  if (!post) {
    return (
      <div className="container-default">
        <div className="card p-8 text-center">
          Blog not found
        </div>
      </div>
    )
  }

  return (
    <div className="container-default">

      <div className="max-w-3xl mx-auto">

        {/* BACK */}
        <Link
          to="/learn/blog"
          className="text-sm text-accent mb-6 inline-block hover:underline"
        >
          ← Back to Blogs
        </Link>

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-highlight leading-tight">
          {post.title}
        </h1>

        {/* META */}
        <div className="flex gap-4 text-sm text-gray-500 mt-3">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.readTime || '5 min read'}</span>
        </div>

        {/* TAGS */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CONTENT */}
        <div className="mt-8 text-gray-700 leading-relaxed text-lg space-y-5">

          {post.content.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}

        </div>

      </div>

    </div>
  )
}