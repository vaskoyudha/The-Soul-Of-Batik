export interface BatikMotif {
  id: string;
  name: string;
  indonesianName: string;
  origin: string;
  region: string;
  philosophy: string;
  history: string;
  symbolism: string[];
  usage: string;
  colorPalette: string[];
  geometricType: string;
  classIndex: number;
  emoji: string;
  imageUrl?: string;
}

export const BATIK_MOTIFS: BatikMotif[] = [
  {
    id: "parang",
    name: "Parang",
    indonesianName: "Batik Parang",
    origin: "Surakarta & Yogyakarta, Central Java",
    region: "Central Java",
    philosophy:
      "Parang symbolizes power, strength, and continuous effort. The diagonal lines represent ocean waves that never stop — a metaphor for persistence and unwavering determination in the face of adversity. It was once exclusively reserved for Javanese royalty.",
    history:
      "Parang is one of the oldest batik motifs, dating back to the Mataram Kingdom era (16th-17th century). The word 'Parang' derives from 'pereng' (cliff) or 'parang' (machete/sword). Legend says it was inspired by Sultan Agung who meditated by the southern sea cliffs, observing the relentless crashing of waves. It was a sacred 'larangan' (forbidden) motif — only the royal family could wear it.",
    symbolism: ["Power & Authority", "Persistence", "Nobility", "Bravery"],
    usage:
      "Traditionally worn by kings and royalty. Today used in formal ceremonies, weddings, and official government events as a symbol of leadership.",
    colorPalette: ["#3B1E08", "#8B6914", "#D4A84B", "#F5E6C8"],
    geometricType: "diagonal-repetitive",
    classIndex: 0,
    emoji: "⚔️",
  },
  {
    id: "kawung",
    name: "Kawung",
    indonesianName: "Batik Kawung",
    origin: "Yogyakarta, Central Java",
    region: "Central Java",
    philosophy:
      "Kawung represents purity, perfection, and the universe's order. The four circles symbolize the four cardinal directions and the center represents the self — reflecting the Javanese concept of balance between human, nature, and the divine.",
    history:
      "Kawung is believed to be one of the oldest batik designs, found on the walls of the 9th-century Prambanan Temple. The motif resembles the cross-section of a 'kolang-kaling' (sugar palm fruit). Like Parang, it was a 'larangan' motif restricted to the Sultan's court in the Yogyakarta Sultanate.",
    symbolism: ["Purity", "Perfection", "Universal Order", "Self-Control"],
    usage:
      "Worn during meditation and spiritual ceremonies. Symbolizes the wearer's aspiration for a clean heart and pure intentions.",
    colorPalette: ["#2C1810", "#6B4226", "#C8A882", "#F0E4D4"],
    geometricType: "circular-grid",
    classIndex: 1,
    emoji: "🌸",
  },
  {
    id: "mega-mendung",
    name: "Mega Mendung",
    indonesianName: "Batik Mega Mendung",
    origin: "Cirebon, West Java",
    region: "West Java",
    philosophy:
      "Mega Mendung embodies patience, calmness, and composure. The cloud motif with its gradual color gradients — typically 7 to 9 shades of blue — symbolizes the many levels of life and the importance of tempering one's emotions, like clouds that bring rain to nourish the earth.",
    history:
      "Mega Mendung originated in the 14th century when Chinese immigrants settled in Cirebon and brought cloud motifs from Chinese art. The Cirebon artisans blended this with local Javanese philosophy, creating a unique hybrid. In 2009, UNESCO inscribed Indonesian Batik on the Representative List of the Intangible Cultural Heritage of Humanity.",
    symbolism: [
      "Patience",
      "Calmness",
      "Emotional Control",
      "Cultural Harmony",
    ],
    usage:
      "A versatile motif used in both casual and formal settings. Especially popular for diplomatic gifts and cultural events representing Indonesian-Chinese cultural fusion.",
    colorPalette: ["#0A1628", "#1B3A5C", "#2E6B9E", "#5BA3D9", "#A8D4F5"],
    geometricType: "cloud-curvilinear",
    classIndex: 2,
    emoji: "☁️",
  },
  {
    id: "sekar-jagad",
    name: "Sekar Jagad",
    indonesianName: "Batik Sekar Jagad",
    origin: "Surakarta, Central Java",
    region: "Central Java",
    philosophy:
      "Sekar Jagad means 'Flowers of the Universe' — it symbolizes the beauty and diversity of the world. Each section contains different patterns, representing how diverse elements can coexist in harmony. It reflects the Indonesian principle of 'Bhinneka Tunggal Ika' (Unity in Diversity).",
    history:
      "Sekar Jagad emerged from the royal courts of Surakarta. The name comes from 'sekar' (flower) and 'jagad' (world/universe). Some scholars also interpret 'kar jagad' as a map of the world. The motif showcases the batik maker's mastery by incorporating multiple patterns into one cloth.",
    symbolism: [
      "Diversity",
      "Beauty of the World",
      "Harmony",
      "Unity in Diversity",
    ],
    usage:
      "Often used at multicultural events and national celebrations. A popular gift symbolizing appreciation for diversity and togetherness.",
    colorPalette: ["#8B1A1A", "#CD853F", "#2E8B57", "#4169E1", "#DAA520"],
    geometricType: "patchwork-mixed",
    classIndex: 3,
    emoji: "🌍",
  },
  {
    id: "truntum",
    name: "Truntum",
    indonesianName: "Batik Truntum",
    origin: "Surakarta, Central Java",
    region: "Central Java",
    philosophy:
      "Truntum symbolizes everlasting love that blooms again. The scattered star-flower pattern represents love that grows and returns — 'tumuntum' means to bloom again. It carries the message that true love never dies but continuously regenerates.",
    history:
      "Legend says Truntum was created by Kanjeng Ratu Kencana (Queen consort of Pakubuwono III of Surakarta) when she was feeling neglected by the king. She poured her sorrow into creating this batik, and upon seeing its beauty, the king's love was rekindled. Hence the name 'Truntum' — love that blooms again.",
    symbolism: [
      "Everlasting Love",
      "Guidance",
      "Patience in Love",
      "Renewal",
    ],
    usage:
      "Mandatory attire for parents of the bride and groom during Javanese weddings, symbolizing their guidance and enduring love that will guide the newlyweds.",
    colorPalette: ["#1A0A2E", "#2D1B4E", "#F5F5DC", "#FFFDD0"],
    geometricType: "scattered-floral",
    classIndex: 4,
    emoji: "💫",
  },
  {
    id: "sido-mukti",
    name: "Sido Mukti",
    indonesianName: "Batik Sido Mukti",
    origin: "Surakarta & Yogyakarta, Central Java",
    region: "Central Java",
    philosophy:
      "Sido Mukti carries the prayer for prosperity and a noble life. 'Sido' means 'to become' and 'Mukti' means 'prosperous/noble'. Wearing this batik is believed to bring blessings and guide the wearer toward a life of abundance and virtue.",
    history:
      "Sido Mukti was created in the courts of Central Java and has been a mandatory wedding batik for centuries. It represents the hopes and prayers of the community for the couple's future. The intricate geometric patterns within each section are filled with smaller motifs of butterflies, birds, and flowers.",
    symbolism: [
      "Prosperity",
      "Nobility",
      "Blessings",
      "A Good Life",
    ],
    usage:
      "Traditionally worn by the bride and groom during Javanese wedding ceremonies as a prayer for their prosperous future together.",
    colorPalette: ["#3B2F2F", "#704214", "#C4A35A", "#FFF8DC"],
    geometricType: "geometric-grid-filled",
    classIndex: 5,
    emoji: "👑",
  },
  {
    id: "sido-luhur",
    name: "Sido Luhur",
    indonesianName: "Batik Sido Luhur",
    origin: "Surakarta, Central Java",
    region: "Central Java",
    philosophy:
      "Sido Luhur represents the aspiration to achieve a noble and dignified character. 'Sido' means 'to become' and 'Luhur' means 'exalted/noble'. It prays for the wearer to become a person of high moral character, wisdom, and dignity.",
    history:
      "Like Sido Mukti, Sido Luhur is rooted in Javanese court tradition. It is considered a higher spiritual aspiration — while Sido Mukti prays for material prosperity, Sido Luhur prays for spiritual nobility. The motif contains garuda wings and lar (wing) ornaments symbolizing elevated status.",
    symbolism: [
      "Spiritual Nobility",
      "Wisdom",
      "Dignity",
      "Moral Excellence",
    ],
    usage:
      "Used in solemn ceremonies, especially for spiritual events and when meeting with religious leaders. Also worn during traditional Javanese rituals.",
    colorPalette: ["#1C1C1C", "#4A3728", "#8B7355", "#E8D5B7"],
    geometricType: "geometric-ornamental",
    classIndex: 6,
    emoji: "🕊️",
  },
  {
    id: "ceplok",
    name: "Ceplok",
    indonesianName: "Batik Ceplok",
    origin: "Yogyakarta, Central Java",
    region: "Central Java",
    philosophy:
      "Ceplok represents order, structure, and the mathematical harmony of nature. The repeating geometric patterns arranged in squares, circles, or stars reflect the Javanese understanding that the universe follows divine mathematical patterns and natural order.",
    history:
      "Ceplok is one of the most varied batik categories — the name refers to any motif based on symmetrical geometric shapes (circles, squares, stars, crosses) arranged in repeating patterns. Historical evidence places Ceplok among the earliest batik designs, influenced by Hindu-Buddhist geometric art from ancient Javanese temples.",
    symbolism: [
      "Order",
      "Cosmic Harmony",
      "Mathematical Perfection",
      "Balance",
    ],
    usage:
      "Versatile and widely used in both formal and everyday settings. Different Ceplok variations carry different meanings depending on the central geometric shape used.",
    colorPalette: ["#4A2810", "#7B4B2A", "#B87333", "#F0D58C"],
    geometricType: "symmetric-geometric",
    classIndex: 7,
    emoji: "✦",
  },
  {
    id: "lereng",
    name: "Lereng",
    indonesianName: "Batik Lereng",
    origin: "Central Java",
    region: "Central Java",
    philosophy:
      "Lereng symbolizes the continuous journey of life. The diagonal bands represent life's path — always moving forward and upward. It teaches that life is a continuous ascent, and one should always strive to improve and progress.",
    history:
      "Lereng belongs to the same family as Parang but with distinct characteristics. While Parang features S-shaped curves, Lereng uses broader diagonal bands filled with smaller ornamental motifs. 'Lereng' itself means 'slope' or 'incline', referring to its distinctive diagonal orientation. It was also a court batik but less restricted than Parang.",
    symbolism: [
      "Continuous Progress",
      "Life's Journey",
      "Ascending Path",
      "Perseverance",
    ],
    usage:
      "Popular for semi-formal occasions and academic events. Represents the wearer's commitment to continuous learning and self-improvement.",
    colorPalette: ["#2F1B14", "#5C3317", "#A0522D", "#DEB887"],
    geometricType: "diagonal-banded",
    classIndex: 8,
    emoji: "📐",
  },
  {
    id: "sogan",
    name: "Sogan",
    indonesianName: "Batik Sogan",
    origin: "Surakarta, Central Java",
    region: "Central Java",
    philosophy:
      "Sogan represents warmth, earthiness, and rootedness. Named after the Soga tree (Peltophorum pterocarpum) whose bark produces the distinctive brown dye, it symbolizes a deep connection to the earth and the natural world. The warm brown tones evoke stability and groundedness.",
    history:
      "Sogan is defined by its distinctive warm brown color palette, derived from the bark of the Soga tree — a natural dyeing technique passed down for centuries. Surakarta (Solo) is famous for its Sogan batik, which stands in contrast to the blues and whites of coastal batik. The natural dyeing process takes weeks or even months, making authentic Sogan batik a luxury craft.",
    symbolism: [
      "Earthiness",
      "Warmth",
      "Tradition",
      "Connection to Nature",
    ],
    usage:
      "The quintessential 'everyday formal' batik of Solo. Worn for traditional Javanese events, cultural performances, and as a mark of Solonese identity and pride.",
    colorPalette: ["#3E2723", "#5D4037", "#8D6E63", "#D7CCC8"],
    geometricType: "organic-natural",
    classIndex: 9,
    emoji: "🍂",
  },
];

export const CLASS_NAMES = BATIK_MOTIFS.map((m) => m.id);
export const NUM_CLASSES = BATIK_MOTIFS.length;

export function getMotifByClassIndex(index: number): BatikMotif | undefined {
  return BATIK_MOTIFS.find((m) => m.classIndex === index);
}

export function getMotifById(id: string): BatikMotif | undefined {
  return BATIK_MOTIFS.find((m) => m.id === id);
}

export function getMotifsByRegion(region: string): BatikMotif[] {
  return BATIK_MOTIFS.filter((m) => m.region === region);
}

export const REGIONS = [...new Set(BATIK_MOTIFS.map((m) => m.region))];
