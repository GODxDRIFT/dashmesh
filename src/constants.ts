import { ClinicInfo, Service, Review, FAQ } from './types';

export const CLINIC_INFO: ClinicInfo = {
  name: "Dashmesh Dental Clinic",
  tagline: "Trusted neighbourhood dental clinic in Shiv Nagar, West Delhi.",
  address: "WZ-206, Street No.-12, Mother Dairy Road, Shiv Nagar, New Delhi – 110058",
  phone: "09971877938",
  whatsapp: "919971877938",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.164323674601!2d77.09545!3d28.62485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04afcbffffff%3A0x6333939634e9d997!2sDashmesh%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1713950000000!5m2!1sen!2sin",
  timings: {
    morning: "10:00 AM – 1:00 PM",
    evening: "5:00 PM – 8:00 PM",
    days: "Mon–Sat",
    emergencyNote: "For dental emergencies, please call the clinic directly for same-day appointment availability."
  },
  fees: "₹400",
  stats: {
    rating: "5.0 ★",
    patients: "200+ Happy Patients",
    since: "Since 2018"
  }
};

export const SERVICES: Service[] = [
  {
    id: "checkup",
    title: "Dental Check-up & Consultation",
    description: "Complete oral check-up, gum evaluation and treatment planning. Best for regular yearly visit or if you have any new dental complaint.",
    icon: "Stethoscope"
  },
  {
    id: "fillings",
    title: "Tooth Coloured Fillings",
    description: "Cavity filling with strong, natural-looking material so that your tooth looks and functions like normal.",
    icon: "Sparkles"
  },
  {
    id: "rct",
    title: "Root Canal Treatment (RCT)",
    description: "Single / multiple sitting RCT to save badly decayed or painful teeth. Focus on pain-free experience with proper anaesthesia.",
    icon: "Activity"
  },
  {
    id: "crowns",
    title: "Dental Crowns & Bridges",
    description: "Metal, PFM and ceramic crowns for broken / RCT treated teeth. Bridges for replacing missing teeth.",
    icon: "Braces"
  },
  {
    id: "cleaning",
    title: "Scaling & Polishing",
    description: "Professional cleaning to remove tartar, stains and maintain gum health. Recommended every 6–12 months.",
    icon: "Waves"
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    description: "Simple and surgical extractions done with proper care to minimise pain and post-op discomfort.",
    icon: "Scissors"
  },
  {
    id: "dentures",
    title: "Dentures (Full / Partial)",
    description: "Removable dentures for patients with multiple missing teeth, customised for comfort and chewing efficiency.",
    icon: "Smile"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, cosmetic fillings and minor corrections to improve your smile.",
    icon: "Zap"
  },
  {
    id: "kids",
    title: "Kids’ Dentistry",
    description: "Gentle treatment for children – fillings, preventive care, habit counselling, so that kids are not scared of dentist.",
    icon: "Heart"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    text: "Doctor listens very patiently and explains everything in detail. My treatment was painless and comfortable.",
    author: "Rahul M.",
    location: "Shiv Nagar"
  },
  {
    id: "2",
    text: "Clean clinic, friendly staff and reasonable charges. Highly recommended for families in this area.",
    author: "Priya S.",
    location: "Janakpuri"
  },
  {
    id: "3",
    text: "I was very scared of dental treatment but doctor saab made me completely comfortable and now I can eat from that side again.",
    author: "Amit K.",
    location: "Tilak Nagar"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "What are the clinic timings?",
    answer: "Our clinic is open from 10:00 AM to 1:00 PM in the morning and 5:00 PM to 8:00 PM in the evening, from Monday to Saturday. We are closed on Sundays except for pre-scheduled emergencies."
  },
  {
    id: "2",
    question: "What is the consultation fee?",
    answer: "The general consultation fee is approximately ₹400. This includes a thorough oral examination and treatment planning."
  },
  {
    id: "3",
    question: "Do you offer painless treatments?",
    answer: "Yes, we focus on a painless and gentle approach. We use high-quality local anaesthesia and explain every step of the procedure to ensure our patients are comfortable and relaxed."
  },
  {
    id: "4",
    question: "Is there a long waiting time?",
    answer: "We prefer appointments to minimize waiting time for our patients. However, we do accept walk-ins depending on the doctor's availability. It's always best to call ahead."
  },
  {
    id: "5",
    question: "Are your treatments affordable?",
    answer: "Absolutely. One of our core principles is providing honest and affordable dental care. We discuss the cost of the treatment plan transparently before starting any procedure."
  },
  {
    id: "6",
    question: "Do you treat children?",
    answer: "Yes, we have a specialized approach for kids' dentistry. We ensure a friendly and non-scary environment so that children can have a positive experience with dental care from an early age."
  }
];
