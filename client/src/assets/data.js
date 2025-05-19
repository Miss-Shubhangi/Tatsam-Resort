import BannerImg from './Imgs/banner1.jpg';
import DeluxRoom from './Imgs/delux-rooms1.jpg'

const data={
  "resort": {

    "name": "Tatsam Resort",
    "tagline": "Elegance in Every Moment, Peace in Every Stay",
    "aboutUsTagline": "Experience Tranquility the Tatsam Way",
    "BannerImg":BannerImg,
    "aboutUs": "Tatsam Resort is a luxury getaway nestled in nature, offering guests a perfect blend of elegance, comfort, and serenity. Designed to help you unwind and reconnect with yourself, Tatsam combines traditional charm with modern hospitality to deliver an unforgettable experience. Whether you’re looking for peace, adventure, or celebration, Tatsam welcomes you with open arms.",
    "contact": {
      "phone": "+91-9876543210",
      "email": "info@tatsamresort.com",
      "address": "Tatsam Resort, Near Riverbend Hills, Nainital Road, Uttarakhand, India",
      "socialMedia": {
        "instagram": "https://instagram.com/tatsamresort",
        "facebook": "https://facebook.com/tatsamresort",
        "twitter": "https://twitter.com/tatsamresort"
      }
    },
    "testimonials": [
      {
        "name": "Ananya Mehra",
        "feedback": "A hidden gem! The perfect place to relax and enjoy nature. Highly recommend Tatsam Resort for family getaways."
      },
      {
        "name": "Rahul Verma",
        "feedback": "The rooms are spotless, staff is super friendly, and the view is just breathtaking. Truly a peaceful retreat!"
      }
    ],
    "services": [
      "24/7 Room Service",
      "Guided Nature Walks",
      "Spa & Wellness",
      "Adventure Activities",
      "Local Sightseeing Tours",
      "Event Hosting (Weddings & Corporate)"
    ],
    "packages": [
      {
        "packageName": "Weekend Wellness Retreat",
        "description": "A 2-night rejuvenating experience with spa treatments, yoga sessions, and healthy meals.",
        "facilities": [
          "Luxury Room Stay",
          "3 Organic Meals per Day",
          "Daily Yoga & Meditation",
          "1 Full Body Spa Treatment",
          "Nature Trail Walk"
        ]
      },
      {
        "packageName": "Romantic Escape",
        "description": "Perfect for couples – 2 nights of romance, candlelight dinners, and private experiences.",
        "facilities": [
          "Premium Cottage Stay",
          "Welcome Drinks & Cake",
          "Private Candlelight Dinner",
          "Couple's Spa Session",
          "Mountain View Balcony"
        ]
      },
      {
        "packageName": "Adventure & Explore",
        "description": "Explore the wild side of nature with trekking, kayaking, and bonfire nights.",
        "facilities": [
          "Camp-style Stay",
          "Trekking with Guide",
          "Kayaking Session",
          "Evening Bonfire with Music",
          "Packed Adventure Meals"
        ]
      }
    ],
    "rooms": [
  {
    id: 1,
    title: "Superior Room",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    size: "30M2",
    maxPeople: 1,
    price: "$115",
    image: DeluxRoom
  },
  {
    id: 2,
    title: "Signature Room",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    size: "70M2",
    maxPeople: 2,
    price: "$220",
    image: DeluxRoom
  },
  {
    id: 3,
    title: "Deluxe Room",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    size: "50M2",
    maxPeople: 3,
    price: "$265",
    image: DeluxRoom
  },
  {
    id: 4,
    title: "Family Suite",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    size: "85M2",
    maxPeople: 4,
    price: "$310",
    image: DeluxRoom
  },
  {
    id: 5,
    title: "Penthouse",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    size: "120M2",
    maxPeople: 5,
    price: "$420",
    image:DeluxRoom
  },
  {
    id: 6,
    title: "Executive Room",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    size: "60M2",
    maxPeople: 2,
    price: "$180",
    image:DeluxRoom
  },
  {
    id: 7,
    title: "Junior Suite",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    size: "55M2",
    maxPeople: 2,
    price: "$200",
    image:DeluxRoom
  },
  {
    id: 8,
    title: "Presidential Suite",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    size: "150M2",
    maxPeople: 6,
    price: "$550",
    image:DeluxRoom
  }
],
    "amenities": [
      "Free Wi-Fi",
      "Swimming Pool",
      "On-site Restaurant",
      "Ayurvedic Spa",
      "Yoga Pavilion",
      "Kids Play Area",
      "Conference Hall",
      "Airport Pickup/Drop"
    ],
    "moreAboutResort": "Tatsam Resort is more than just a stay — it’s a soulful experience. Our eco-conscious design, warm hospitality, and hand-picked local experiences ensure that every guest leaves with lasting memories. Located close to major natural attractions and cultural heritage sites, Tatsam is ideal for families, couples, solo travelers, and corporate retreats alike."
  }
}
export default data;