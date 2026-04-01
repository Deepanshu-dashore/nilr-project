"use client";

import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ArrowRightIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  AcademicCapIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import axios from "axios";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const programs = [
    "Post Graduate Diploma in Rural Management (PGD-RM)",
    "Diploma in Organic Farming",
    "Diploma in Community Development",
    "Certificate in Watershed Management",
    "Certificate in Agri-Business",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('/api/enquiry', {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.program,
        message: formData.message || "No message provided",
      });

      if (response.status >= 200 && response.status < 300) {
        setIsSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          program: "",
          message: "",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Failed to submit enquiry");
      }
    } catch (error) {
      console.log("Error submitting enquiry:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 border-[6px] border-green-100">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-[#11324d] mb-2">Enquiry Sent!</h3>
            <p className="text-[15px] text-gray-500 mb-8 leading-relaxed">
              Thank you for reaching out to us. Our team will get back to you shortly.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/30 active:scale-[0.98]"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* 1. Top Section - Banner */}
      <section className="bg-gray-50 pt-32 pb-20 px-4 md:px-8 xl:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left: Text & Search */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#11324d] leading-tight mb-6">
              Get expert help regarding CVRU-NLRI, any time you need it
            </h1>
            <div className="relative max-w-lg mb-4 shadow-sm rounded-md bg-white">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full pl-10 pr-3 py-4 border-none text-gray-900 rounded-md focus:ring-2 focus:ring-primary outline-none"
                placeholder="Search our programs and discussions"
              />
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-lg relative">
              {/* Decorative background elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-linear-to-tr from-blue-100 to-indigo-50 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
              
              <figure className="relative z-10 drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image 
                  src="/support2.jpg" 
                  alt="Support Specialist" 
                  width={600} 
                  height={450} 
                  className="w-full h-auto rounded-3xl"
                  priority
                />
                
                {/* Floating Micro-animations */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 flex items-center justify-center shadow-lg animate-bounce-slow">
                  <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 px-4 py-3 bg-white/80 backdrop-blur-md rounded-xl border border-white/50 shadow-lg animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-xs font-bold text-gray-800">Online Support Available</span>
                  </div>
                </div>
              </figure>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Middle Section - Common Enquiry Cards */}
      <section className="bg-slate-100 -mt-10 mb-16 px-4 md:px-8 xl:px-0 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-orange-600 bg-orange-100 rounded-sm">
                Article
              </span>
              <h3 className="text-xl font-bold text-[#11324d] mb-2 hover:underline cursor-pointer">
                How to Apply for PGD-RM
              </h3>
              <p className="text-xs text-gray-500 mb-4">For prospective students • 3 min read</p>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Learn the step-by-step process of applying to our flagship Postgraduate Diploma in Rural Management program, including eligibility and deadlines.
              </p>
              <a href="/admissions" className="inline-flex items-center text-primary font-semibold text-sm hover:underline group">
                Read now <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-orange-600 bg-orange-100 rounded-sm">
                Article
              </span>
              <h3 className="text-xl font-bold text-[#11324d] mb-2 hover:underline cursor-pointer">
                Understanding Course Fees & Scholarships
              </h3>
              <p className="text-xs text-gray-500 mb-4">For everyone • 7 min read</p>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                A detailed breakdown of the fee structures across diploma and certificate courses, plus available CSR-backed financial aid and scholarships.
              </p>
              <a href="#" className="inline-flex items-center text-primary font-semibold text-sm hover:underline group">
                Read more <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-teal-600 bg-teal-100 rounded-sm">
                Course
              </span>
              <h3 className="text-xl font-bold text-[#11324d] mb-2 hover:underline cursor-pointer">
                Campus Tour & Infrastructure
              </h3>
              <p className="text-xs text-gray-500 mb-4">For prospective students • Video overview</p>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Take a virtual tour of the CVRU-NLRI Bhadwasa campus, featuring smart classrooms, practical training labs, and eco-friendly hostels.
              </p>
              <a href="/campus" className="inline-flex items-center text-primary font-semibold text-sm hover:underline group">
                Learn now <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Bottom Section - Popular Topics & Form */}
      <section className="bg-white py-16 px-4 md:px-8 xl:px-0 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-2xl font-bold text-center text-[#11324d] mb-12">Submit an Enquiry</h2>

          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Popular Topics Grid (like the reference image) */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">Popular topics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Topic 1 */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 cursor-pointer hover:underline text-[15px]">Admissions & Eligibility</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Criteria for PGD-RM, Diploma, and Certificate courses; entrance exam details and documentation.</p>
                </div>

                {/* Topic 2 */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 cursor-pointer hover:underline text-[15px]">Hostel & Accommodation</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Information about on-campus residential facilities, mess, and rules for outstation students.</p>
                </div>

                {/* Topic 3 */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 cursor-pointer hover:underline text-[15px]">Placements & Internships</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Our 100% placement support model, industry partners, and community project milestones.</p>
                </div>

                {/* Topic 4 */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 cursor-pointer hover:underline text-[15px]">Fee Structure & Grants</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Semester-wise fee breakdown, payment methods, and CSR scholarship availability.</p>
                </div>

                {/* Topic 5 */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 cursor-pointer hover:underline text-[15px]">Campus Life</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Student activities, rural immersion trips, events, and day-to-day schedule at NLRI.</p>
                </div>

                {/* Topic 6 */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 cursor-pointer hover:underline text-[15px]">Contact Support</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Reaching our administration office, finding the campus on the map, and grievance redressal.</p>
                </div>
              </div>

              <div className="mt-8 text-center sm:text-left">
                <button className="px-5 py-2 border border-gray-300 rounded text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  View all topics
                </button>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="w-full lg:w-1/2 bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Still need help?</h3>
              <p className="text-sm text-gray-500 mb-8">Fill out the form below and our team will get back to you.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UserIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary text-sm bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PhoneIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary text-sm bg-white"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <EnvelopeIcon className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary text-sm bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Program */}
                  <div>
                    <label htmlFor="program" className="block text-xs font-semibold text-gray-700 mb-1">Program of Interest *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <AcademicCapIcon className="h-4 w-4 text-gray-400" />
                      </div>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="block w-full pl-9 pr-8 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary text-sm bg-white appearance-none"
                      >
                        <option value="" disabled>Select a program</option>
                        {programs.map((prog, idx) => (
                          <option key={idx} value={prog}>{prog}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="block w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary text-sm bg-white resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </button>
                </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
