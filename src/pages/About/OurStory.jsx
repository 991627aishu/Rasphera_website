import React from "react";
import ourstory from "../../assets/ourstory.jpeg";

export default function OurStory() {
  return (
    <section className="bg-[#f8f6f2] py-16 sm:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ✅ GRID */}
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-12 lg:gap-20 items-stretch">

          {/* 🔥 LEFT IMAGE */}
          <div className="h-full flex">
            <div className="w-full bg-white p-2 rounded-3xl shadow-xl flex">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={ourstory}
                  alt="Our Story"
                  className="w-full h-full object-cover object-[15%_center]"
                />
              </div>
            </div>
          </div>

          {/* 🔥 RIGHT CONTENT */}
          <div className="flex">

            {/* ✅ IMPROVED TEXT COLUMN */}
            <div className="w-full max-w-[68ch] space-y-6">

              {/* TITLE */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                  Our Story
                </h1>
                <div className="w-10 h-[3px] bg-accent mt-3 rounded-full"></div>
              </div>

              {/* FOUNDERS */}
              <div className="text-gray-800 text-sm leading-relaxed space-y-1">
                <p>
                  <span className="font-semibold">Founder:</span> Rajesh Somashekar
                </p>
                <p>
                  <span className="font-semibold">Co-Founder:</span> Spandana V
                </p>
              </div>

              {/* CONTENT */}
              <div className="space-y-5 text-[15.5px] sm:text-[16px] leading-[1.85] text-gray-700">

                <p>
                  Rasphera didn’t begin as a company—it began as a question. In a world where screens started replacing conversations, where children were losing curiosity, employees were burning out, and seniors were quietly battling loneliness and fading memories, we kept asking ourselves: when did play stop meaning something?
                </p>

                <p>
                  We saw children glued to devices instead of creating, adults feeling disconnected despite constant interaction, and elderly individuals—especially those facing memory challenges—losing not just recall, but moments of joy. That’s when we realized that the simplest solution had always been with us: play. But not the kind that distracts—the kind that connects, heals, and rebuilds.
                </p>

                <p>
                  So we started small, with ideas, sketches, and a belief that games could be more than entertainment—they could become tools for memory, bonding, and well-being. We experimented, failed, redesigned, and slowly shaped Rasphera into something meaningful.
                </p>

                <p>
                  We didn’t want to build just another game brand; we wanted to create experiences that bring generations together, turn stress into laughter, replace screen time with real connection, and support cognitive health—especially for those who need it most.
                </p>

                <p>
                  Every Rasphera product is thoughtfully designed using eco-friendly materials, built to spark thinking instead of scrolling, and created to make people look up from their screens and into each other’s eyes.
                </p>

                <p>
                  Today, Rasphera is growing into more than just a brand—it’s becoming a movement where play becomes a wellness currency for every generation.
                </p>

                <p className="font-medium text-gray-800">
                  And this is just the beginning, because somewhere right now, there’s a conversation waiting to happen, a memory waiting to be rekindled, and a connection waiting to be made—and sometimes, all it takes is a game.
                </p>

              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="/events/book"
                  className="inline-block px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
                >
                  Start an experience
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}