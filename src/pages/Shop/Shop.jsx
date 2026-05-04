import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { products } from '../../data/shopData.js'
import { ShoppingCart, X, Check, ArrowRight, Star } from 'lucide-react'

export default function Shop() {

  const tokenTales = products.find(p => p.title === 'Token Tales')

  const [cart, setCart] = useState([])
  const [selected, setSelected] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [added, setAdded] = useState(null)

  // ✅ NEW STEP STATE
  const [step, setStep] = useState('cart')

  const addToCart = (id) => {
    setCart((c) => {
      const ex = c.find((i) => i.id === id)
      if (ex) return c.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
      return [...c, { id, title: tokenTales.title, price: tokenTales.price, qty: 1 }]
    })
    setAdded(id)
    setTimeout(() => setAdded(null), 1000)
  }

  const removeFromCart = (id) => {
    setCart((c) => c.filter((item) => item.id !== id))
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const count = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <div>

      {/* HERO */}
      <div className="bg-gradient-to-br from-highlight to-highlight-light py-20 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <div className="tag mb-3">Shop</div>
            <h1 className="text-5xl font-bold text-white">The Rasphera Store</h1>
            <p className="text-white/70 mt-2">Premium wooden games</p>
          </div>

          <button
            onClick={() => {
              setCartOpen(true)
              setStep('cart')
            }}
            className="relative w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white"
          >
            <ShoppingCart size={22} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="container-default">

        {/* TOKEN TALES */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card overflow-hidden group max-w-sm w-full"
          >
            <button onClick={() => setSelected(tokenTales)}>
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={tokenTales.image}
                  alt={tokenTales.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-2 right-2 tag text-xs">
                  {tokenTales.category}
                </span>
              </div>
            </button>

            <div className="p-4">
              <h3 className="font-semibold text-lg">{tokenTales.title}</h3>

              <div className="flex items-center gap-1 mt-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-accent text-accent" />
                ))}
                <span className="text-xs opacity-50 ml-1">4.9</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-accent font-bold text-lg">
                  ₹{tokenTales.price}
                </span>

                <button
                  onClick={() => addToCart(tokenTales.id)}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                    added === tokenTales.id
                      ? 'bg-green-500 text-white'
                      : 'bg-accent/10 text-accent hover:bg-accent hover:text-white'
                  }`}
                >
                  {added === tokenTales.id ? <Check size={14} /> : <ShoppingCart size={14} />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SUBSCRIPTION */}
        <div className="mt-16 flex justify-center">
          <div className="card p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold">Monthly Subscription</h3>
            <p className="text-accent text-3xl mt-3 font-bold">₹1000</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>✓ Monthly game kit</li>
              <li>✓ Exclusive experiences</li>
              <li>✓ Community access</li>
            </ul>

            <button className="btn-primary mt-6 w-full">
              Subscribe Now <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* CART DRAWER */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setCartOpen(false)} />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl p-6 flex flex-col rounded-l-2xl"            >

              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold capitalize">{step}</h3>
                <button onClick={() => setCartOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              {/* CART */}
              {step === 'cart' && (
                <>
                  <div className="flex-1 space-y-3">
                    {cart.length === 0 ? (
                      <p className="text-center text-gray-400 mt-10">Cart is empty</p>
                    ) : (
                      cart.map((i) => (
                        <div key={i.id} className="flex justify-between items-center border-b pb-2">
                          <div>
                            <p className="font-medium">{i.title}</p>
                            <p className="text-sm text-gray-500">₹{i.price}</p>
                          </div>

                          <button
                            onClick={() => removeFromCart(i.id)}
                            className="text-red-500 text-xs"
                          >
                            Remove
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {cart.length > 0 && (
                    <div className="mt-4">
                      <div className="font-bold mb-3">Total: ₹{total}</div>
                      <button onClick={() => setStep('details')} className="btn-primary w-full">
                        Order <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </>
              )}

        {step === 'details' && (
  <>
    <div className="flex-1 space-y-5 mt-4">

      <div>
        <label className="text-sm text-gray-500">Full Name</label>
        <input
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent transition"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="text-sm text-gray-500">Phone Number</label>
        <input
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent transition"
          placeholder="Enter phone number"
        />
      </div>

      <div>
        <label className="text-sm text-gray-500">Address</label>
        <textarea
          rows="3"
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
          placeholder="Enter your address"
        />
      </div>

    </div>

    <button
      onClick={() => setStep('payment')}
      className="btn-primary w-full mt-6 py-3 text-sm"
    >
      Continue to Payment
    </button>

    <button
      onClick={() => setStep('cart')}
      className="text-sm mt-3 text-gray-500 hover:text-accent transition"
    >
      ← Back
    </button>
  </>
)}

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute right-4 top-4">
                <X size={18} />
              </button>

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[400px] object-cover rounded-xl"
              />

              <h2 className="text-xl font-bold mt-4">{selected.title}</h2>
              <p className="text-accent font-bold text-lg">₹{selected.price}</p>

              <button
                onClick={() => {
                  addToCart(selected.id)
                  setSelected(null)
                }}
                className="btn-primary w-full mt-4"
              >
                Add to Cart
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}