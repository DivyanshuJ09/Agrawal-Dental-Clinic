// Central place for editable business information.
// Update these values to change content across the entire site.

export const business = {
  name: "Agarwal Dental Clinic",
  nameHindi: "अग्रवाल डेंटल क्लिनिक",
  category: "Dental Clinic",
  phone: "077524 00030",
  phoneHref: "tel:+917752400030",
  whatsappNumber: "917752400030",
  whatsappMessage: "Hello Agarwal Dental Clinic, I would like to book an appointment.",
  address: {
    line1: "Govind Nagar, Jarahbhata",
    line2: "Bilaspur, Chhattisgarh 495001",
    line3: "India",
    full: "Govind Nagar, Jarahbhata, Bilaspur, Chhattisgarh 495001",
  },
  plusCode: "34HR+M2 Bilaspur, Chhattisgarh",
  hours: "Opens at 9:00 AM",
  mapsQuery: "Agarwal+Dental+Clinic+Govind+Nagar+Jarahbhata+Bilaspur+Chhattisgarh+495001",
  mapsEmbedQuery: "Govind Nagar, Jarahbhata, Bilaspur, Chhattisgarh 495001",
  year: 2026,
} as const

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const

export const quickInfo = [
  {
    title: "Experienced Care",
    description: "Attentive dental care guided by clinical best practices.",
  },
  {
    title: "Modern Dental Environment",
    description: "A clean, well-equipped clinic designed for your comfort.",
  },
  {
    title: "Patient-Focused Approach",
    description: "Your comfort and concerns are heard at every visit.",
  },
  {
    title: "Convenient Location",
    description: "Easy to reach in Govind Nagar, Jarahbhata, Bilaspur.",
  },
] as const

export const services = [
  {
    name: "Dental Consultation",
    description: "A thorough check-up to understand your dental health and concerns.",
    icon: "Stethoscope",
  },
  {
    name: "General Dentistry",
    description: "Routine dental care to help maintain a healthy smile.",
    icon: "Smile",
  },
  {
    name: "Teeth Cleaning",
    description: "Professional cleaning to remove plaque and tartar build-up.",
    icon: "Sparkles",
  },
  {
    name: "Tooth Restoration",
    description: "Repairing damaged or decayed teeth to restore function.",
    icon: "Hammer",
  },
  {
    name: "Root Canal Treatment",
    description: "Treatment aimed at relieving pain and saving an affected tooth.",
    icon: "Activity",
  },
  {
    name: "Dental Crowns",
    description: "Custom coverings that protect and strengthen weakened teeth.",
    icon: "Crown",
  },
  {
    name: "Teeth Whitening",
    description: "Enquire about options for brightening your smile.",
    icon: "Sun",
  },
  {
    name: "Children's Dental Care",
    description: "Gentle dental care in a comfortable setting for young patients.",
    icon: "Baby",
  },
] as const

export const whyUs = [
  {
    title: "Comfortable Environment",
    description: "A calm, clean, and welcoming clinic designed to ease dental visits.",
    icon: "Heart",
  },
  {
    title: "Patient-Focused Care",
    description: "We take time to listen and address your dental concerns.",
    icon: "Users",
  },
  {
    title: "Convenient Location",
    description: "Easily accessible in Govind Nagar, Jarahbhata, Bilaspur.",
    icon: "MapPin",
  },
  {
    title: "Easy Appointment Booking",
    description: "Simple ways to request an appointment by phone, form, or WhatsApp.",
    icon: "CalendarCheck",
  },
] as const

export const galleryImages = [
  {
    src: "/images/gallery-exterior.png",
    alt: "Agarwal Dental Clinic exterior building entrance",
    label: "Clinic Exterior",
  },
  {
    src: "/images/gallery-reception.png",
    alt: "Clean modern reception area at Agarwal Dental Clinic",
    label: "Reception",
  },
  {
    src: "/images/gallery-treatment-room.png",
    alt: "Modern dental treatment room with dental chair",
    label: "Treatment Room",
  },
  {
    src: "/images/gallery-equipment.png",
    alt: "Sterilized modern dental equipment",
    label: "Dental Equipment",
  },
  {
    src: "/images/gallery-interior.png",
    alt: "Clean modern interior corridor of the dental clinic",
    label: "Clinic Interior",
  },
  {
    src: "/images/gallery-team.png",
    alt: "Friendly dental care team at Agarwal Dental Clinic",
    label: "Our Team",
  },
  {
    src: "/images/gallery-waiting-area.png",
    alt: "Comfortable waiting area with seating at the dental clinic",
    label: "Waiting Area",
  },
] as const
