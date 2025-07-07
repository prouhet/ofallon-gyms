const gymsData = [
  {
    id: "studiostrong",
    name: "StudioStrong.fit",
    type: "Boutique Studio",
    price: "$90 to $180+",
    hours: "Mon-Fri: 5am-8pm, Sat: 7am-12pm, Sun: Closed",
    features: [
      "Certified instructor led classes",
      "Personalized training programs",
      "Nutrition coaching",
      "Small group classes"
    ],
    amenities: [
      "Private training environment",
      "State-of-the-art equipment",
      "Nutrition planning",
      "Progress tracking",
      "Certified trainers"
    ],
    rating: 5.0,
    reviews: 38,
    website: "https://studiostrong.fit",
    logo: "images/logos/studiostrong.png",
    isPremium: true,
    isPreferred: true
  },
  {
    id: "clubfitness",
    name: "Club Fitness",
    type: "Traditional Gym",
    price: "$25+",
    hours: "24/7",
    features: [
      "Large facility with extensive equipment",
      "Group fitness classes",
      "Cardio and strength areas",
      "Low monthly cost"
    ],
    amenities: [
      "24/7 access",
      "Free weights",
      "Cardio equipment",
      "Group classes",
      "Locker rooms"
    ],
    rating: 4.8,
    reviews: 1077,
    website: "https://www.clubfitness.us/location/ofallon/",
    logo: "images/logos/clubfitness.png",
    isPremium: false
  },
  {
    id: "ymca",
    name: "O'Fallon YMCA",
    type: "Community Center",
    price: "$40 to $75 (family rates available)",
    hours: "Mon-Fri: 5am-9pm, Sat: 7am-6pm, Sun: 11am-5pm",
    features: [
      "Family-friendly environment",
      "Pool and aquatics programs",
      "Youth programs",
      "Community focus"
    ],
    amenities: [
      "Swimming pool",
      "Basketball courts",
      "Group fitness classes",
      "Child care",
      "Senior programs"
    ],
    rating: 4.6,
    reviews: 187,
    website: "https://gwrymca.org/locations/ofallon-illinois-ymca",
    logo: "images/logos/ymca.png",
    isPremium: false
  },
  {
    id: "fitnesszone",
    name: "Fitness Zone",
    type: "Traditional Gym",
    price: "$30 to $50",
    hours: "24/7",
    features: [
      "Spacious workout areas",
      "Group fitness classes",
      "Personal training available",
      "Tanning beds"
    ],
    amenities: [
      "24/7 access",
      "Free weights",
      "Cardio equipment",
      "Tanning",
      "Locker rooms"
    ],
    rating: 4.7,
    reviews: 35,
    website: "https://ofallonfitnesszone.com/",
    logo: "images/logos/fitnesszone.png",
    isPremium: false
  },
  {
    id: "anytimefitness",
    name: "Anytime Fitness",
    type: "Traditional Gym",
    price: "$35 to $50",
    hours: "24/7",
    features: [
      "24/7 access worldwide",
      "Personal training available",
      "Clean, well-maintained facility",
      "Security features"
    ],
    amenities: [
      "24/7 access",
      "Security access key",
      "Free weights",
      "Cardio equipment",
      "Personal training"
    ],
    rating: 4.5,
    reviews: 53,
    website: "https://www.anytimefitness.com/gyms/428/shiloh-il-62269/",
    logo: "images/logos/anytimefitness.png",
    isPremium: false
  },
  {
    id: "f45",
    name: "F45 Training",
    type: "Boutique Studio",
    price: "$150 to $250",
    hours: "Class times vary, check schedule",
    features: [
      "45-minute high-intensity workouts",
      "Team training environment",
      "Functional training focus",
      "Daily changing workouts"
    ],
    amenities: [
      "Functional training equipment",
      "Heart rate monitoring",
      "Team atmosphere",
      "Technology-driven workouts",
      "Nutrition guidance"
    ],
    rating: 5.0,
    reviews: 4,
    website: "https://f45training.com/studio/ofallonil/",
    logo: "images/logos/f45.svg",
    isPremium: false
  },
  {
    id: "crossfitvoyage",
    name: "CrossFit Voyage",
    type: "CrossFit Box",
    price: "$150+",
    hours: "Mon-Fri: 5am-8pm, Sat: 8am-12pm, Sun: Closed",
    features: [
      "CrossFit methodology",
      "Coach-led group classes",
      "Strength and conditioning focus",
      "Community atmosphere"
    ],
    amenities: [
      "Olympic lifting equipment",
      "Gymnastics equipment",
      "Open gym times",
      "Mobility classes",
      "Skilled coaches"
    ],
    rating: 4.9,
    reviews: 39,
    website: "https://crossfitvoyage.com/",
    logo: "images/logos/crossfitvoyage.png",
    isPremium: false
  },
  {
    id: "orangetheory",
    name: "OrangeTheory Fitness",
    type: "Boutique Studio",
    price: "$129 to $179",
    hours: "Class times vary, check schedule",
    features: [
      "Heart-rate based interval training",
      "Coach-led group workouts",
      "Technology-tracked progress",
      "Science-backed workout method"
    ],
    amenities: [
      "Heart rate monitors",
      "Treadmills",
      "Water rowers",
      "Weight floor equipment",
      "Performance tracking"
    ],
    rating: 4.6,
    reviews: 11,
    website: "https://www.orangetheory.com/en-us/locations/shiloh-illinois-1470",
    logo: "images/logos/orangetheory.svg",
    isPremium: false
  },
  {
    id: "9round",
    name: "9Round",
    type: "Boutique Studio",
    price: "$80 to $110",
    hours: "Mon-Fri: 6am-8pm, Sat: 8am-12pm, Sun: Closed",
    features: [
      "30-minute kickboxing circuit",
      "No class times - start anytime",
      "Trainer included",
      "New workout daily"
    ],
    amenities: [
      "Kickboxing equipment",
      "Heart rate monitoring",
      "Trainer guidance",
      "Flexible scheduling",
      "Quick workouts"
    ],
    rating: 4.9,
    reviews: 124,
    website: "https://www.9round.com/locations/il/ofallon/green-mount",
    logo: "images/logos/9round.png",
    isPremium: false
  },
  {
    id: "absoluteflow",
    name: "Absolute Flow Pilates",
    type: "Boutique Studio",
    price: "$150 to $290",
    hours: "Mon-Fri: 7am-7pm, Sat: 8am-12pm, Sun: Closed",
    features: [
      "Reformer Pilates classes",
      "Small class sizes",
      "Personalized attention",
      "Core and flexibility focus"
    ],
    amenities: [
      "Pilates reformers",
      "Small class environment",
      "Certified instructors",
      "Beginner to advanced options"
    ],
    rating: 5.0,
    reviews: 5,
    website: "https://www.absoluteflowpilates.com/",
    logo: "images/logos/absoluteflow.jpg",
    isPremium: false
  },
  {
    id: "c1fit",
    name: "C1 Fit",
    type: "Boutique Studio",
    price: "$160 to $320",
    hours: "Mon-Fri: 5am-10pm, Sat-Sun: 7am-7pm",
    features: [
      "Strength and conditioning focus",
      "Personal training available",
      "Group fitness classes",
      "Modern equipment"
    ],
    amenities: [
      "Free weights",
      "Cardio equipment",
      "Group fitness studio",
      "Personal training",
      "Locker rooms"
    ],
    rating: 4.9,
    reviews: 17,
    website: "https://www.facebook.com/pages/C1-Fit-LLC/341538835985517",
    logo: "images/logos/c1fit.png",
    isPremium: false
  },
  {
    id: "ironsharp",
    name: "Iron Sharp Muscle & Fitness",
    type: "Boutique Studio",
    price: "$150 to $300",
    hours: "Mon-Fri: 6am-9pm, Sat: 7am-5pm, Sun: 8am-2pm",
    features: [
      "Strength training focus",
      "Personal training",
      "Bodybuilding environment",
      "Serious fitness atmosphere"
    ],
    amenities: [
      "Heavy free weights",
      "Specialized strength equipment",
      "Personal training",
      "Supplement shop",
      "Posing room"
    ],
    rating: 5.0,
    reviews: 17,
    website: "https://www.facebook.com/ironsharpmusclefitness/",
    logo: "images/logos/ironsharp.jpg",
    isPremium: false
  },
  {
    id: "ofallonparks",
    name: "O'Fallon Parks & Recreation",
    type: "Community Center",
    price: "$25 to $40 (resident discounts available)",
    hours: "Mon-Fri: 6am-8pm, Sat: 8am-5pm, Sun: 12pm-5pm",
    features: [
      "Affordable community fitness",
      "Various class offerings",
      "Family-friendly environment",
      "Recreational programs"
    ],
    amenities: [
      "Fitness equipment",
      "Group fitness classes",
      "Sports courts",
      "Walking track",
      "Community events"
    ],
    rating: 4.6,
    reviews: 187,
    website: "https://ofallonparksandrec.com/",
    logo: "images/logos/ofallon-parks.png",
    isPremium: false
  },
  {
    id: "crossfitcheetah",
    name: "CrossFit Straight Cheetah",
    type: "CrossFit Box",
    price: "$150+",
    hours: "Mon-Fri: 5am-8pm, Sat: 8am-12pm, Sun: Closed",
    features: [
      "CrossFit methodology",
      "Coach-led group classes",
      "Strength and conditioning focus",
      "Community atmosphere"
    ],
    amenities: [
      "Olympic lifting equipment",
      "Gymnastics equipment",
      "Open gym times",
      "Mobility classes",
      "Skilled coaches"
    ],
    rating: 4.9,
    reviews: 25,
    website: "https://crossfitstraightcheetah.com/",
    logo: "images/logos/crossfitcheetah.jpg",
    isPremium: false
  }
];
