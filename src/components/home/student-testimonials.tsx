"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "PGD-RM Student",
    content: "The PGD-RM program has been quite an experience. The blend of classroom theory and field exposure has not only deepened my academic knowledge, but prepared me for real-world impact.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Research Scholar",
    content: "As a Research Scholar at CVRUK-NLRI, I've gained valuable insights into rural management and local governance. The facilities here are world-class and supportive of innovation.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Amit Singh",
    role: "Management Trainee",
    content: "Being part of the CVRU ecosystem has been a journey of constant growth. The faculty and the environment foster a spirit of excellence that is visible in everything we do.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Yangchen Tshering Sherpa",
    role: "Social Entrepreneur",
    content: "The support I received for my startup idea was incredible. CVRUK-NLRI isn't just a university; it's an incubator for the leaders of tomorrow.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  }
];

export default function StudentTestimonials() {
  const [index, setIndex] = useState(0);

  // Auto-scroll logic could be added here, but the user requested a specific design
  // We'll show two cards at a time on desktop as per the reference image

  return (
    <section className="section-padding bg-bg-main">
      <div className="container-wide">
        <div className="mb-20 text-center">
          <h2 className="academic-section-title text-[#4A1D1A]">Student Testimonials</h2>
          <p className="academic-section-subtitle text-gray-800">Thoughts, takeaways, and testimonials from those who've lived it.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[testimonials[index % testimonials.length], testimonials[(index + 1) % testimonials.length]].map((item, i) => (
              <div key={i} className="bg-white border-t-2 border-[#F3BE34] shadow-xl p-8 pb-5 rounded-sm hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-40 h-40 shrink-0 overflow-hidden rounded-sm">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500 leading-relaxed mb-3 text-sm md:text-base">
                      {item.content}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 mt-auto">{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-12">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setIndex(i * 2)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index / 2 === i ? "w-6 bg-[#F3BE34]" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
