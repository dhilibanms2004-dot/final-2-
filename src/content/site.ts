import bananaLeaf from "../assets/catering/01-banana-leaf-feast.webp";
import event from "../assets/catering/02-wedding-catering-service.webp";
import breakfast from "../assets/catering/03-breakfast.webp";
import lunch from "../assets/catering/04-lunch-wedding-feast.webp";
import dinner from "../assets/catering/05-dinner.webp";
import tiffin from "../assets/catering/06-tiffin-refreshments.webp";
import traditionalSweets from "../assets/catering/07-traditional-sweets.webp";
import chaatStall from "../assets/catering/08-chaat-stall.webp";
import roti from "../assets/catering/09-roti-breads.webp";
import desserts from "../assets/catering/10-dessert-selection.webp";
import soupsJuices from "../assets/catering/11-soups-juices.webp";
import snackStall from "../assets/catering/12-snack-food-stall.webp";
import liveCounters from "../assets/catering/13-live-counters.webp";
const feast = lunch;

// Edit business information here. Contact details are reused throughout the site.
export const business = {
  name: "S A Catering",
  tagline: "Wedding Specialist",
  phone: "+91 94447 30391",
  phoneLink: "tel:+919444730391",
  whatsapp: "919444730391",
  email: "sacaterveg@gmail.com",
  address: "9/405a, Mettu St, K.K. Nagar, Mannivakkam, Tamil Nadu 600048",
  instagram: "https://www.instagram.com/s_a_catering_services/",
  maps: "https://maps.app.goo.gl/1kPjdfwsTRXimQ6t8",
  logo: "/sa-catering-logo.png",
};
export const whatsappUrl = (
  message = "Hello S A Catering, I would like to discuss catering for my event.",
) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
export const images = { feast, breakfast, bananaLeaf, event };
export const galleryImages = [
  { src: bananaLeaf, alt: "Traditional vegetarian banana-leaf feast" },
  { src: event, alt: "Wedding catering service in mustard-yellow uniforms" },
  { src: breakfast, alt: "Idli, medu vada and ven pongal breakfast" },
  { src: lunch, alt: "South Indian wedding lunch on a banana leaf" },
  { src: dinner, alt: "Vegetable biryani, channa masala and chapathi" },
  { src: tiffin, alt: "Paniyaram, Mysore bonda and filter coffee" },
  { src: traditionalSweets, alt: "Badam halwa and traditional Indian sweets" },
  { src: chaatStall, alt: "Pani puri wedding food counter" },
  { src: roti, alt: "Fresh naan and chapathi" },
  { src: desserts, alt: "Gulab jamun and Mysore pak" },
  { src: soupsJuices, alt: "Fresh juices and sweet corn soup" },
  { src: snackStall, alt: "Pav bhaji live food counter" },
  { src: liveCounters, alt: "Chocolate fountain and wedding dessert counter" },
];
export const navigation = [
  { label: "Home", to: "/" },
  { label: "Our story", to: "/about" },
  { label: "Our menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;
// Replace these category descriptions with the approved menu when supplied.
// Do not add unconfirmed dish lists or prices.
export const menus = [
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle: "A delicious beginning.",
    description:
      "A warm South Indian welcome, planned around your function, serving time and guest preferences.",
    image: breakfast,
    tag: "MORNING FAVOURITES",
    items: [
      "Idli",
      "Medu vada",
      "Ven pongal",
      "Poori",
      "Kuzhi paniyaram",
      "Rava dosa",
      "Sambar",
      "Chutney",
      "Filter coffee",
    ],
  },
  {
    id: "lunch",
    title: "Lunch & wedding feast",
    subtitle: "A celebration on every leaf.",
    description:
      "Traditional vegetarian catering, thoughtfully planned around your celebration and the people who make it special.",
    image: lunch,
    tag: "OUR SPECIALITY",
    items: [
      "Vegetable biryani",
      "White rice",
      "Sambar",
      "Rasam",
      "Poriyal",
      "Kootu",
      "Curd",
      "Appalam",
      "Payasam",
    ],
  },
  {
    id: "dinner",
    title: "Dinner",
    subtitle: "An evening of generous hospitality.",
    description:
      "A satisfying vegetarian spread shaped to the style, scale and timing of your evening celebration.",
    image: dinner,
    tag: "CELEBRATION EVENINGS",
    items: [
      "Gobi 65",
      "Vegetable roll",
      "Vegetable biryani",
      "Chapathi",
      "Chenna masala",
      "Uthappam",
      "Idli",
      "Ice cream",
      "Beeda",
    ],
  },
  {
    id: "tiffin",
    title: "Tiffin & refreshments",
    subtitle: "Familiar flavours, thoughtfully served.",
    description:
      "Flexible selections for evening tiffin, refreshments and the smaller moments within a larger celebration.",
    image: tiffin,
    tag: "MADE FOR YOUR OCCASION",
    items: [
      "Carrot halwa",
      "Ashoka halwa",
      "Mysore bonda",
      "Mini idli",
      "Kuzhi paniyaram",
      "Rava bath",
      "Rava dosa",
      "Sambar",
      "Filter coffee",
    ],
  },
  {
    id: "rice",
    title: "Rice varieties",
    subtitle: "A generous centrepiece for every spread.",
    description:
      "Choose from traditional rice preparations and celebration favourites to complement your menu.",
    image: dinner,
    tag: "RICE VARIETIES",
    items: [
      "Vegetable biryani",
      "Vegetable paneer pulao",
      "Mint biryani",
      "Mushroom biryani",
      "Jeera rice",
      "Fried rice",
      "Mushroom fried rice",
      "Curd rice",
    ],
  },
  {
    id: "sabji",
    title: "Sabji & curries",
    subtitle: "Classic gravies and modern favourites.",
    description:
      "A wide selection of paneer, vegetable and North Indian accompaniments for roti and rice.",
    image: dinner,
    tag: "SABJI VARIETIES",
    items: [
      "Malai kofta",
      "Kaju masala",
      "Paneer tikka masala",
      "Paneer butter masala",
      "Kadai paneer",
      "Palak paneer",
      "Aloo matar",
      "Gobi masala",
      "Dal makhani",
    ],
  },
  {
    id: "roti",
    title: "Roti & breads",
    subtitle: "Freshly made for the feast.",
    description:
      "Traditional flatbreads and tandoor favourites can be paired with your chosen sabji selection.",
    image: roti,
    tag: "ROTI VARIETIES",
    items: [
      "Roti",
      "Tandoori roti",
      "Naan",
      "Butter naan",
      "Chapathi",
      "Phulka",
      "Rumali roti",
      "Pudina kulcha",
      "Gobi kulcha",
      "Aloo kulcha",
      "Poori",
      "Palak poori",
    ],
  },
  {
    id: "sweets",
    title: "Sweets & desserts",
    subtitle: "A memorable final note.",
    description:
      "Traditional sweets and dessert choices can be discussed as part of your personalised celebration menu.",
    image: desserts,
    tag: "A SWEET FINISH",
    items: [
      "Badam halwa",
      "Kasi halwa",
      "Carrot halwa",
      "Beetroot halwa",
      "Ashoka halwa",
      "Jangiri",
      "Jalebi",
      "Rasagulla",
      "Gulab jamun",
      "Mysore pak",
      "Ice cream",
    ],
  },
  {
    id: "soups-juices",
    title: "Soups & juices",
    subtitle: "Refreshing choices for every season.",
    description:
      "Complete the occasion with warming soups, fresh juices and traditional milk-based refreshments.",
    image: soupsJuices,
    tag: "REFRESHMENTS",
    items: [
      "Vegetable soup",
      "Sweet corn soup",
      "Mushroom soup",
      "Drumstick soup",
      "Tomato soup",
      "Grape juice",
      "Pineapple juice",
      "Mango juice",
      "Guava juice",
      "Watermelon juice",
      "Rose milk",
      "Badam milk",
    ],
  },
  {
    id: "chaat",
    title: "Chaat & food stalls",
    subtitle: "Lively counters your guests can explore.",
    description:
      "Add an interactive layer to the celebration with familiar chaat and snack-stall favourites.",
    image: chaatStall,
    tag: "LIVE FOOD STALLS",
    items: [
      "Pani puri",
      "Bhel puri",
      "Dahi puri",
      "Samosa",
      "Kachori",
      "Bread toast",
      "Sandwich",
      "Masala pori",
      "Pav bhaji",
      "Sweet corn",
    ],
  },
  {
    id: "live-counters",
    title: "Live counters & add-ons",
    subtitle: "More ways to welcome your guests.",
    description:
      "Ask our team about live counters, beverages and event add-ons that may suit your occasion.",
    image: liveCounters,
    tag: "CUSTOMISED FOR YOU",
    items: [
      "Fresh juice",
      "Popcorn",
      "Cotton candy",
      "Ice cream",
      "Fruit salad",
      "Chocolate fountain",
      "Buffet arrangement",
      "Vegetable carving",
      "Ice carving",
      "Stage decoration",
    ],
  },
];
export const faqs = [
  [
    "Where do you cater?",
    "We cater for celebrations in Chennai and Chengalpattu. Share your venue with us so we can discuss arrangements.",
  ],
  [
    "Is your catering completely vegetarian?",
    "Yes. S A Catering specialises in pure vegetarian food for weddings, family functions and corporate events.",
  ],
  [
    "Can we personalise our menu?",
    "Of course. We will discuss your occasion, preferred dishes, guest count and budget to put together your menu.",
  ],
  [
    "How do I get a quotation?",
    "Explore our menu categories, then fill in the event enquiry form. It opens a prepared message in WhatsApp, where you can send it to our team.",
  ],
];
