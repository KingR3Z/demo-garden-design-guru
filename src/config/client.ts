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
    { name: "Charlie Inigo-Jones", rating: 5, text: "Barry has done a fantastic job in bringing my modest garden to life. I didn’t really know what I wanted but he listened to my rambling ideas and has created two really original - but very different - front and rear beds. Both survived the hot spring weather and now thriving - with the help of the irrigation we put in place. Great to work with and highly recommended.", date: "8 months ago", badge: "Local Guide" },
    { name: "Carl Fredericks", rating: 5, text: "Working with Barry was an absolute pleasure! His creativity, expertise, and attention to detail truly transformed our small garden by the sea into a stunning oasis. The 3D CAD models he created were incredibly helpful in visualising our design. Barry's professionalism, reliability, and dedication to his craft made the entire process straightforward and enjoyable. His excellent knowledge of plants and his ability to select the perfect species for our coastal location has resulted in beautiful, thriving planting. The lighting he chose is fantastic - it's both functional and aesthetically pleasing, and really brings the garden to life in the evening.The beautiful Yorkstone paving he specified adds a touch of elegance and sophistication to the space. What really stood out was his collaboration with the landscaping contractor to ensure that the design was built correctly and to his high standards. We couldn't be happier with the final result - our garden is now a stunning, low-maintenance space that we can enjoy for years to come. If you're looking for an excellent garden designer, look no further than Barry. His talent, experience, and commitment make him the perfect choice for any garden project.", date: "a year ago" },
    { name: "david mcqueen johnston", rating: 5, text: "What can one write about a transformation, our very untidy and overgrown garden has been transformed over a few months. Barry's advice has always been enlightening.", date: "a year ago" },
    { name: "Tricia Glover", rating: 5, text: "I am so happy with the transformation of a problem area in my garden. Barry has been very supportive in helping me with my vision where I knew what I wanted but was not confident and stuck as to how to move forward. Barry's experience and knowledge made all the difference. The result is that I have what I envisioned but even better and the project ran smoothly and without stress.", date: "2 years ago" },
    { name: "toni newman", rating: 5, text: "Barry has been a real inspiration with his help and advice for turning my newly acquired overgrown garden, into the wildlife area I can work towards.  Kind regards Sue Piner", date: "2 years ago" },
    { name: "Brian Langham", rating: 5, text: "Having moved into a new build house with a fenced green lawn, we needed help transforming it into an interesting space.  Barry provided us with three designs and planting, taking note of what we required and advising us as to what would work.  He also advised us on sub contractors.  After the raised bed construction was put in place, planting commenced in February.  The beds are now filled with beautiful plants, grasses, bees and butterflies, supported by an automatic watering system installed by Barry.  We are both really pleased with the overall result.", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Garden Design Guru | Landscaper in Bognor Regis",
    description: "Professional landscaper in Bognor Regis. 5.0-star rated on Google. Call for a free quote.",
  },
};
