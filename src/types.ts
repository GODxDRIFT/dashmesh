export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  text: string;
  author: string;
  location: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  mapEmbed: string;
  timings: {
    morning: string;
    evening: string;
    days: string;
    emergencyNote: string;
  };
  fees: string;
  stats: {
    rating: string;
    patients: string;
    since: string;
  };
}
