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
  const [cardsToShow, setCardsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setCardsToShow(1);
      else setCardsToShow(2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTestimonials = Array.from({ length: cardsToShow }, (_, i) => 
    testimonials[(index + i) % testimonials.length]
  );

  return (
    <section className="section-padding bg-bg-main border-y border-border-light">
      <div className="container-wide">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="academic-section-title text-[#4A1D1A] text-2xl md:text-3xl lg:text-4xl">Student Testimonials</h2>
          <p className="academic-section-subtitle text-gray-800 text-sm md:text-base px-4">Thoughts, takeaways, and testimonials from those who've lived it.</p>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className={`grid grid-cols-1 ${cardsToShow === 2 ? 'lg:grid-cols-2' : ''} gap-6`}>
            {visibleTestimonials.map((item, i) => (
              <div key={`${index}-${i}`} className="bg-white border-t-4 border-[#F3BE34] shadow-xl p-6 sm:p-8 rounded-sm hover:-translate-y-1 transition-all duration-500 animate-in fade-in slide-in-from-right-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 overflow-hidden rounded-sm ring-4 ring-gray-50">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-center sm:text-left h-full">
                    <p className="text-gray-600 italic leading-relaxed mb-4 text-sm md:text-base">
                      "{item.content}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">{item.name}</h4>
                      <p className="text-xs sm:text-sm text-primary font-medium mt-1 uppercase tracking-wider">{item.role}</p>
                    </div>
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
                  index === i ? "w-8 bg-[#F3BE34]" : "w-3 bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
