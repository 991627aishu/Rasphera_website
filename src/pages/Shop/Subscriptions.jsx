import React from 'react'
import { subscriptions } from '../../data/shopData.js'

export default function Subscriptions() {
  return (
    <div className="container-default">
      <div className="card p-8">
        <h1 className="text-3xl font-semibold">Subscriptions</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {subscriptions.map((s) => (
            <div key={s.id} className="card p-6 hover:scale-105">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="opacity-80">₹{s.price}/mo</p>
              <ul className="mt-2 text-sm opacity-70 list-disc list-inside">
                {s.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <button className="mt-3 px-4 py-2 rounded-2xl bg-highlight text-white hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
