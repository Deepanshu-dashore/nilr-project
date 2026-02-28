"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "PGD-RM Student",
    content: "The PGD-RM program has been quite an experience. The blend of classroom theory and field exposure has not only deepened my academic knowledge, but prepared me for real-world impact.",
    avatar: "/testimonial/image.png",
  },
  {
    name: "Amit Singh",
    role: "Management Trainee",
    content: "Being part of the CVRU ecosystem has been a journey of constant growth. The faculty and the environment foster a spirit of excellence that is visible in everything we do.",
    avatar: "/testimonial/image1.png",
  },
  {
    name: "Vivek Kumar",
    role: "Research Scholar",
    content: "As a Research Scholar at CVRUK-NLRI, I've gained valuable insights into rural management and local governance. The facilities here are world-class and supportive of innovation.",
    avatar: "/testimonial/image2.png",
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
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === i ? "w-6 bg-[#F3BE34]" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
