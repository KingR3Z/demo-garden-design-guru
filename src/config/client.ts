export const client = {
  // Business Details
  name: "Garden Design Guru",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bognor Regis.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07711 085838",
  email: "",
  website: "",

  // Location
  address: "Bognor Regis",
  city: "Bognor Regis",
  county: "",
  postcode: "",
  basedIn: "Bognor Regis",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Mike Wilks", rating: 5, text: "We are delighted with the garden design provided by Barry Chambers (Garden Design Guru).  We love the final result, which has exceeded our expectations.  The garden has been admired by family and friends, when they were able, in these …  ", date: "5 years ago" },
    { name: "Charlie Inigo-Jones", rating: 5, text: "Barry has done a fantastic job in bringing my modest garden to life. I didn’t really know what I wanted but he listened to my rambling ideas and has created two really original - but very different - front and rear beds. Both survived the …  ", date: "8 months ago" },
    { name: "Brian Langham", rating: 5, text: "Having moved into a new build house with a fenced green lawn, we needed help transforming it into an interesting space.  Barry provided us with three designs and planting, taking note of what we required and advising us as to what would …  ", date: "2 years ago" },
    { name: "PHI", rating: 5, text: "We have been working with Barry for a little over a year on a large and complete redesign of our house gardens. He has been an absolute pleasure to deal from start to finish. …  ", date: "2 years ago" },
    { name: "Patricia Steadman", rating: 5, text: "Barry has a wealth of plant and landscape knowledge. Delighted how Barry transformed our front garden. Looking forward  to seeing how the plants establish and mature over the differing seasons. Would recommend Barry to any potential clients.  ", date: "Edited 2 years ago" },
    { name: "Tricia Glover", rating: 5, text: "I am so happy with the transformation of a problem area in my garden. Barry has been very supportive in helping me with my vision where I knew what I wanted but was not confident and stuck as to how to move forward. Barry's experience and …  ", date: "2 years ago" },
    { name: "Angus Macarthur", rating: 5, text: "We live in an exposed area very near the sea, which is frequently battered by strong winds and salty rain, and we engaged Barry to design a garden with a coastal theme that could withstand and flourish in such conditions. The area of our …  ", date: "3 years ago" },
    { name: "Barbara dawes", rating: 5, text: "My garden was a blank canvas of grass when I moved in a year ago.  Barry looked at the site and listened to my requirements. He came back with three possible designs and I chose one. …  ", date: "7 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Garden Design Guru | Landscaper in Bognor Regis",
    description: "Professional landscaper in Bognor Regis. 5.0-star rated on Google. Call for a free quote.",
  },
};
