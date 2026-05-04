import React from "react";
import siImage from "../../assets/si.jpeg";

export default function SocialImpact() {
  return (
    <section className="bg-[#f8f6f2] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* 🔥 HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="p-2 bg-white rounded-2xl shadow-xl">
              <img
                src={siImage}
                alt="Social Impact"
                className="rounded-xl w-full max-w-md object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Social Impact
            </h1>
            <div className="w-14 h-[3px] bg-accent mt-4 mb-6 rounded-full"></div>

            <p className="text-[17px] leading-[1.9] text-gray-700">
              Rasphera was built with a simple belief—that play can change lives.
              Beyond entertainment, our experiences are designed to bring people
              together, improve cognitive well-being, and create meaningful human
              connections. From children rediscovering creativity to seniors
              reconnecting with memory and joy, every Rasphera interaction is built
              to leave a lasting impact. We don’t just measure success by the number
              of games played, but by the smiles created, the conversations sparked,
              and the lives we touch.
            </p>
          </div>

        </div>

        {/* 🔥 IMPACT AREAS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Community Programs</h3>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              Inclusive, hands-on experiences designed for schools, senior communities,
              and public spaces—bringing people together through meaningful, screen-free
              play that fosters connection, creativity, and belonging.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Impact Tracking</h3>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              We focus on measurable outcomes—improvements in engagement, memory recall,
              teamwork, and emotional well-being—ensuring every program creates real,
              visible impact for individuals and communities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Workplace Engagement</h3>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              We help organizations build stronger teams through meaningful play,
              reducing stress, improving collaboration, and creating shared
              moments that go beyond traditional team-building.
            </p>
          </div>

        </div>

        {/* 🔥 REAL IMPACT */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Real Impact, Real People
          </h2>
          <p className="text-gray-700 leading-[1.9] text-[17px]">
            Our journey has already begun creating change across diverse communities.
            From corporate teams rediscovering collaboration to seniors experiencing
            improved engagement and memory recall, Rasphera is proving that purposeful
            play can transform lives across generations.
          </p>
        </div>

{/* 🔥 STATS */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-20">

  {/* ROW 1 */}
  <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center h-[120px]">
    👥
    <p className="mt-2 font-medium">500+ participants engaged</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center h-[120px]">
    🎯
    <p className="mt-2 font-medium">90% positive feedback</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center h-[120px]">
    🧠
    <p className="mt-2 font-medium">Improved focus & memory</p>
  </div>

  {/* ROW 2 (PERFECT CENTER) */}
  <div className="md:col-start-1 md:col-end-2 md:col-span-1 md:col-start-2 -ml-[50%] md:ml-0 hidden"></div>

  <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center h-[120px] md:col-start-1 md:col-end-2 md:col-span-1 md:translate-x-1/2">
    🤝
    <p className="mt-2 font-medium">Stronger social bonding</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center h-[120px] md:translate-x-1/2">
    🏫
    <p className="mt-2 font-medium">
      Workshops across schools & corporates
    </p>
  </div>

</div>
        {/* 🔥 CLOSING */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-gray-800 font-medium leading-relaxed">
            We’re not just building games—we’re building moments of connection,
            dignity, and joy. Because when people come together to play,
            they don’t just pass time—they create memories that last.
          </p>
        </div>

      </div>
    </section>
  );
}