/**
 * Centralized API Configuration and Endpoints
 * All frontend API calls should import endpoints from this file.
 */

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    VERIFY: "/api/auth/verify",
  },

  // Home Page
  HOME: {
    NEWS: (limit: number = 8, page: number = 1) => `/api/home/news?limit=${limit}&page=${page}`,
    EVENTS: (limit: number = 8, page: number = 1) => `/api/home/events?limit=${limit}&page=${page}`,
  },

  // Programs
  PROGRAMS: {
    BASE: "/api/program",
    GET_ALL: "/api/program",
    GET_BY_ID: (id: string) => `/api/program/${id}`,
    GET_BY_SLUG: (slug: string) => `/api/program/slug/${slug}`,
    GET_BY_TYPE: (typeId: string) => `/api/program/type/${typeId}`,
    CREATE: "/api/program",
    UPDATE: (id: string) => `/api/program/${id}`,
    DELETE: (id: string) => `/api/program/${id}`,
  },

  // Program Types / Categories
  PROGRAM_TYPES: {
    BASE: "/api/program-type",
    GET_ALL: "/api/program-type",
    GET_BY_ID: (id: string) => `/api/program-type/${id}`,
    CREATE: "/api/program-type",
    UPDATE: (id: string) => `/api/program-type/${id}`,
    DELETE: (id: string) => `/api/program-type/${id}`,
  },

  // Events & News
  EVENTS: {
    BASE: "/api/event",
    GET_ALL: (type: string = "All", status: string = "All") => `/api/event?type=${type}&status=${status}`,
    GET_BY_ID: (id: string) => `/api/event/${id}`,
    GET_MONTHLY: (year: number | string, month: number | string) => `/api/event/monthly?year=${year}&month=${month}`,
    CREATE: "/api/event",
    UPDATE: (id: string) => `/api/event/${id}`,
    DELETE: (id: string) => `/api/event/${id}`,
  },

  // Gallery
  GALLERY: {
    BASE: "/api/gallery",
    GET_ALL: "/api/gallery",
    CREATE: "/api/gallery",
    DELETE: (id: string) => `/api/gallery/${id}`,
  },

  // Enquiries & Admissions
  ENQUIRY: {
    BASE: "/api/enquiry",
    GET_ALL: "/api/enquiry",
    GET_BY_SUBJECT: (subject: string) => `/api/enquiry?subject=${encodeURIComponent(subject)}`,
    GET_EXCLUDE_SUBJECT: (excludeSubject: string) => `/api/enquiry?excludeSubject=${encodeURIComponent(excludeSubject)}`,
    CREATE: "/api/enquiry",
    DELETE: (id: string) => `/api/enquiry/${id}`,
    UPDATE_STATUS: (id: string) => `/api/enquiry/status/${id}`,
  },

  // Site Information & Global Settings
  SITE_INFO: {
    BASE: "/api/site-info",
    GET: "/api/site-info",
    UPDATE: "/api/site-info",
    SEED: "/api/site-info/seed",
  },

  // Dashboard Stats & Analytics
  DASHBOARD: {
    STATS: "/api/dashboard/stats",
  },
};

export default API_ENDPOINTS;
