import React from "react";
import impactImg from "../../assets/s1.jpeg";

export default function SocialImpact() {
  return (
    <section className="bg-[#f8f6f2] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 TOP SECTION */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-stretch mb-20">

          {/* IMAGE */}
          <div className="flex">
            <div className="w-full bg-white p-3 rounded-3xl shadow-xl">
              <div className="rounded-2xl overflow-hidden h-full">
                <img
                  src={impactImg}
                  alt="Social Impact"
                  className="w-full h-full object-cover object-[30%_center]"
                />
              </div>
            </div>
          </div>

          {/* CONTENT (VERTICAL CENTER FIXED) */}
          <div className="flex items-center">
            <div className="max-w-[60ch] space-y-8">

              {/* TITLE */}
              <div>
                <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
                  Sustainability
                </h1>
                <div className="w-14 h-[3px] bg-accent mt-5 rounded-full"></div>
              </div>

              {/* TEXT */}
              <p className="text-[17.5px] leading-[1.9] text-gray-700">
                At Rasphera, sustainability isn’t a feature—it’s a responsibility.
                Every product we create is designed to bring people together while
                leaving the lightest possible footprint on the planet. From the
                materials we choose to the way we design experiences, we believe
                play should nurture both people and the world they live in.
              </p>

            </div>
          </div>

        </div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Materials</h3>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              We use natural, durable materials like wood, bamboo, and jute to
              create long-lasting play experiences. Every choice is intentional—
              reducing plastic waste while supporting eco-conscious craftsmanship.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Programs</h3>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              Through workshops, CSR initiatives, and community collaborations,
              we create meaningful impact—bringing cognitive play to seniors,
              creativity to children, and connection to workplaces.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Operations</h3>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              Our operations are designed for minimal waste and maximum impact—
              local sourcing, reusable packaging, and community-first logistics
              that support artisans and reduce environmental harm.
            </p>
          </div>

        </div>

        {/* 🔥 WHY */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Why Sustainability Matters to Us
          </h2>
          <p className="text-gray-700 leading-[1.9] text-[17px]">
            The world doesn’t need more disposable products—it needs meaningful
            experiences that last. In an industry dominated by plastic and
            short-term use, we’re building something different: games that are
            reusable, responsible, and rooted in purpose.
          </p>
        </div>

        {/* 🔥 METRICS */}
        <div className="mt-16 space-y-6">

          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              🌱 <p className="mt-2 text-sm font-medium">100% eco-friendly materials</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              ♻️ <p className="mt-2 text-sm font-medium">Reusable kits</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              🇮🇳 <p className="mt-2 text-sm font-medium">Made in India</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              👵 <p className="mt-2 text-sm font-medium">Senior wellness</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-5 rounded-xl shadow-sm text-center w-[260px]">
              👨‍👩‍👧 <p className="mt-2 text-sm font-medium">Multi-generational impact</p>
            </div>
          </div>

        </div>

        {/* 🔥 CLOSING */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-800 font-medium leading-relaxed">
            We’re not just creating games. <br />
            We’re creating a future where play is thoughtful, sustainable, and meaningful.
          </p>
        </div>

      </div>
    </section>
  );
}