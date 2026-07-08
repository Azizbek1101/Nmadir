export const products = [
  // 1 - MacBook Pro 15
  {
    id: 1,
    name: 'MacBook Pro 15',
    category: 'laptops',
    price: 18990000,
    emoji: '💻',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsthQsnPU6yjwM4PLL1U9oXmady4g9vk_Z9IB2A5rZEg&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsthQsnPU6yjwM4PLL1U9oXmady4g9vk_Z9IB2A5rZEg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFy6Q3q3n7J8sHtGjVzZxX1wM2nO3pP4qQ5rR6sS7tT8uU9vV0wW&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9u8v7w6x5y4z3a2b1c0d9e8f7g6h5i4j3&s=10',
    ],
    description: 'MacBook Pro 15 dyuymli, Retina displey, 16GB RAM, 512GB SSD, Intel Core i9, Touch Bar, Space Gray.',
    rating: 4.8,
    reviews: [{ user: 'Alisher K.', text: 'Ajoyib noutbuk, juda tez va sifatli!', rating: 5 }]
  },
  // 2 - iPhone 12 Pro Max
  {
    id: 2,
    name: 'iPhone 12 Pro Max',
    category: 'phones',
    price: 8490000,
    emoji: '📱',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRli1SlH86IAR8d2y5tf03XRuvwuUol9pp09tpDjzgbxw&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRli1SlH86IAR8d2y5tf03XRuvwuUol9pp09tpDjzgbxw&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2t3u4v5w6x7y8z9a0b1c2d3e4f5g6h7i8j9&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9u8v7w6x5y4z3a2b1c0d9e8f7g6h5i4j3&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h2&s=10',
    ],
    description: 'iPhone 12 Pro Max, 6.7 dyuymli Super Retina XDR, A14 Bionic, 128GB, Uch kamerali tizim, 5G.',
    rating: 4.7,
    reviews: [{ user: 'Bobur M.', text: 'Kamera juda zo‘r, kechasi ham aniq suratlar.', rating: 5 }]
  },
  // 3 - Wireless Mouse MX
  {
    id: 3,
    name: 'Wireless Mouse MX',
    category: 'accessories',
    price: 549000,
    emoji: '🖱️',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcC_E7aYMmki3rD7eMpDZNRwSB0sUWe2wH5MGtJe3Vw&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcC_E7aYMmki3rD7eMpDZNRwSB0sUWe2wH5MGtJe3Vw&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4r5e6s7d8f9g0h1i2j3k4l5m6n7o8p9q0r&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2&s=10',
    ],
    description: 'Logitech MX Anywhere 3 – shinam, tezkor, har qanday sirtda ishlaydi, USB-C zaryadlovchi.',
    rating: 4.6,
    reviews: [{ user: 'Jasur T.', text: 'Juda qulay, bir zaryad uzoq ishlaydi.', rating: 5 }]
  },
  // 4 - Gaming Headset Pro
  {
    id: 4,
    name: 'Gaming Headset Pro',
    category: 'accessories',
    price: 899000,
    emoji: '🎧',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSkKsCn5nTo40IghM4ubaW5ixuzHt6lmDtxgwBxR8AiQ&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSkKsCn5nTo40IghM4ubaW5ixuzHt6lmDtxgwBxR8AiQ&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&s=10',
    ],
    description: 'Yuqori sifatli o‘yin naushniklari, 7.1 surround ovoz, RGB yoritish, qulay quloqchalar.',
    rating: 4.4,
    reviews: [{ user: 'Sardor E.', text: 'Ovoz ajoyib, lekin biroz og‘ir.', rating: 4 }]
  },
  // 5 - 4K Monitor 27"
  {
    id: 5,
    name: '4K Monitor 27"',
    category: 'electronics',
    price: 3290000,
    emoji: '🖥️',
    image: 'https://dlcdnwebimgs.asus.com/gain/6CE39D21-7A2F-4A2E-AFDF-095E3786B189/w717/h525/fwebp',
    images: [
      'https://dlcdnwebimgs.asus.com/gain/6CE39D21-7A2F-4A2E-AFDF-095E3786B189/w717/h525/fwebp',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5u6v7w8x9y0z1a2b3c4d5e6f7g8h9i0j1&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h2i3&s=10',
    ],
    description: '27 dyuymli 4K UHD monitor, IPS panel, 60Hz, HDR10, HDMI va DisplayPort.',
    rating: 4.9,
    reviews: [{ user: 'Komil S.', text: 'Ranglar juda aniq, ish uchun ajoyib.', rating: 5 }]
  },
  // 6 - Mechanical Keyboard RGB
  {
    id: 6,
    name: 'Mechanical Keyboard RGB',
    category: 'accessories',
    price: 1190000,
    emoji: '⌨️',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJwxGwDSGlhZHqRkfMBHCHTCA1q8JfINjcKQoYAUJiA&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJwxGwDSGlhZHqRkfMBHCHTCA1q8JfINjcKQoYAUJiA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4r5e6s7d8f9g0h1i2j3k4l5m6n7o8p9q0r&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2&s=10',
    ],
    description: 'Mekanik klaviatura, RGB yoritish, o‘zgaruvchan switcherlar, o‘yin va yozish uchun.',
    rating: 4.3,
    reviews: [{ user: 'Akmal Z.', text: 'Juda qulay, yozish zavq bag‘ishlaydi.', rating: 4.5 }]
  },
  // 7 - SmartWatch Fit 6
  {
    id: 7,
    name: 'SmartWatch Fit 6',
    category: 'electronics',
    price: 2490000,
    emoji: '⌚',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKBbCL6K6Id-wfD5YT7f19_pYTNtxASCVkubFgUpnlA&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKBbCL6K6Id-wfD5YT7f19_pYTNtxASCVkubFgUpnlA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&s=10',
    ],
    description: 'Smart soat, yurak urishi tezligi, GPS, suv o‘tkazmaydi, 7 kun batareya.',
    rating: 4.5,
    reviews: [{ user: 'Malika X.', text: 'Sport uchun juda yaxshi, dizayni chiroyli.', rating: 5 }]
  },
  // 8 - Laptop Stand Ergo
  {
    id: 8,
    name: 'Laptop Stand Ergo',
    category: 'accessories',
    price: 349000,
    emoji: '📐',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOn4HlJOpa5EwJudzzBwF6UnP2TQ7uMw2JhvIDcTiW6Q&s',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOn4HlJOpa5EwJudzzBwF6UnP2TQ7uMw2JhvIDcTiW6Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4r5e6s7d8f9g0h1i2j3k4l5m6n7o8p9q0r&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2&s=10',
    ],
    description: 'Alyuminiy noutbuk stend, ergonomik burchak, issiqlik tarqatishni yaxshilaydi.',
    rating: 4.0,
    reviews: [{ user: 'Nodir B.', text: 'Yengil va mustahkam, bahosiga yarasha.', rating: 4 }]
  },
  // 9 - Gaming Laptop Xtreme
  {
    id: 9,
    name: 'Gaming Laptop Xtreme',
    category: 'laptops',
    price: 28900000,
    emoji: '🎮',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Vet9UKb_SGUoAFSbJ1f3KQAyHRWXbC277kPgMnDZ9w&s',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Vet9UKb_SGUoAFSbJ1f3KQAyHRWXbC277kPgMnDZ9w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4r5e6s7d8f9g0h1i2j3k4l5m6n7o8p9q0r&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2&s=10',
    ],
    description: 'O‘yin uchun noutbuk, Intel i9, RTX 3080, 32GB RAM, 1TB SSD, 17 dyuym 144Hz.',
    rating: 4.9,
    reviews: [{ user: 'Shuxrat K.', text: 'Eng kuchli o‘yin mashinasi, hech qanday lag yo‘q.', rating: 5 }]
  },
  // 10 - USB-C Hub 8-in-1
  {
    id: 10,
    name: 'USB-C Hub 8-in-1',
    category: 'accessories',
    price: 449000,
    emoji: '🔌',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_758ayjYybwqJL-GKCviN8tf9brxg_18oYjtFkz7H2A&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_758ayjYybwqJL-GKCviN8tf9brxg_18oYjtFkz7H2A&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4r5e6s7d8f9g0h1i2j3k4l5m6n7o8p9q0r&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2&s=10',
    ],
    description: '8 portli USB-C hub, HDMI, USB 3.0, SD karta, Ethernet, 100W zaryad.',
    rating: 4.2,
    reviews: [{ user: 'Anvar T.', text: 'Ko‘p funksiyali, lekin biroz qiziydi.', rating: 4 }]
  },
  // 11 - Tablet Pad S8
  {
    id: 11,
    name: 'Tablet Pad S8',
    category: 'electronics',
    price: 6990000,
    emoji: '📟',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQQhbrB0fy2Q-FsVkfcCf2mCc8N2Esla2GGIdTUT7EQ&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQQhbrB0fy2Q-FsVkfcCf2mCc8N2Esla2GGIdTUT7EQ&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4r5e6s7d8f9g0h1i2j3k4l5m6n7o8p9q0r&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2&s=10',
    ],
    description: '11 dyuymli planshet, 120Hz ekran, S-Pen, 8GB RAM, 256GB, Android 13.',
    rating: 4.6,
    reviews: [{ user: 'Zarina O.', text: 'Rasm chizish uchun ajoyib, tezkor.', rating: 5 }]
  },
  // 12 - Phone Charger GaN 65W
  {
    id: 12,
    name: 'Phone Charger GaN 65W',
    category: 'accessories',
    price: 249000,
    emoji: '⚡',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkXOHqn8gG3yqthTHnBiNikHrB5CfilqkgWhSkjuLdA&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkXOHqn8gG3yqthTHnBiNikHrB5CfilqkgWhSkjuLdA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4r5e6s7d8f9g0h1i2j3k4l5m6n7o8p9q0r&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2&s=10',
    ],
    description: '65W GaN zaryadlovchi, 3 port (USB-C x2, USB-A), tez zaryad, ixcham.',
    rating: 4.3,
    reviews: [{ user: 'Eldor I.', text: 'Kichik va kuchli, hamma qurilmalarimni zaryadlaydi.', rating: 4.5 }]
  },
  // 13 - Samsung Galaxy S24
  {
    id: 13,
    name: 'Samsung Galaxy S24',
    category: 'phones',
    price: 9990000,
    emoji: '📱',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rr8Vp8fFPoUqwDHAVf43C4493R3PXK7b6ak0oXDJ5A&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NqdrJMC-XcWRxE9-aaXoKQWMCJbF7JRGRZSpKw15_iTApa0jLSknU7hYQgewxdzI57QTfdZflzlwyQlkZFE5gMuP13fzqv5X-3rQN7wu&usqp=CAc',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&s=10',
    ],
    description: 'Samsung Galaxy S24, 6.8 dyuymli Dynamic AMOLED, 200MP kamera, 12GB RAM, 256GB, 5000mAh.',
    rating: 4.9,
    reviews: [{ user: 'Jasur K.', text: 'Eng yaxshi Android telefon, kamera ajoyib!', rating: 5 }]
  },
  // 14 - iPhone 15 Pro
  {
    id: 14,
    name: 'iPhone 15 Pro',
    category: 'phones',
    price: 12990000,
    emoji: '📱',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMd6J3Xn640YwkUyHOGBqlfLHwQeivjNrjcu-NWDBaKg&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRllRrpKmhgKGyMSTc5VK67fU003HNBWmer3QNgnv2ieLngER2H35ZEi9O-fGHjDg1DrsDAq-ufYJ2cLjEc0yuYhAsHbtY-0RgKkZ3sdJoSSWYG6N6TyRmYV2hJY9j--mYdc9cAS9mKPFw&usqp=CAc',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2t3u4v5w6x7y8z9a0b1c2d3e4f5g6h7i8j9&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9u8v7w6x5y4z3a2b1c0d9e8f7g6h5i4j3&s=10',
    ],
    description: 'iPhone 15 Pro, 6.1 dyuymli Super Retina XDR, A17 Pro, 128GB, Titanium korpus, USB-C.',
    rating: 4.9,
    reviews: [{ user: 'Dilshod M.', text: 'Eng zamonaviy iPhone, juda yengil va tez.', rating: 5 }]
  },
  // 15 - Dell XPS 13
  {
    id: 15,
    name: 'Dell XPS 13',
    category: 'laptops',
    price: 14990000,
    emoji: '💻',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSZr89s1qAQGJi1w4ouGgiPGa2nN75-eZs8FgqaInYg&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSZr89s1qAQGJi1w4ouGgiPGa2nN75-eZs8FgqaInYg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&s=10',
    ],
    description: 'Dell XPS 13, 13.4 dyuymli InfinityEdge displey, Intel i7, 16GB RAM, 512GB SSD.',
    rating: 4.8,
    reviews: [{ user: 'Kamol R.', text: 'Ish uchun mukammal, yengil va chiroyli.', rating: 5 }]
  },
  // 16 - Asus ROG Zephyrus
  {
    id: 16,
    name: 'Asus ROG Zephyrus',
    category: 'laptops',
    price: 23990000,
    emoji: '🎮',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78YQVvucW0hb0VIUf8b7Wgn2xLoMT5w-YOu4M0PTtjg&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78YQVvucW0hb0VIUf8b7Wgn2xLoMT5w-YOu4M0PTtjg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4r5e6s7d8f9g0h1i2j3k4l5m6n7o8p9q0r&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2&s=10',
    ],
    description: 'Asus ROG Zephyrus G14, AMD Ryzen 9, RTX 4060, 16GB RAM, 1TB SSD, 14 dyuym.',
    rating: 4.7,
    reviews: [{ user: 'Sardor E.', text: 'O‘yin va ish uchun ideal, dizayni zo‘r.', rating: 4.5 }]
  },
  // 17 - Apple Watch Series 9
  {
    id: 17,
    name: 'Apple Watch Series 9',
    category: 'electronics',
    price: 5490000,
    emoji: '⌚',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9exqT3YPGHyd6mLmAB2eANY8J5XSCqvozmqWSnhr9Dg&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9exqT3YPGHyd6mLmAB2eANY8J5XSCqvozmqWSnhr9Dg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&s=10',
    ],
    description: 'Apple Watch Series 9, Always-On Retina displey, S9 chip, 18 soat batareya, GPS.',
    rating: 4.8,
    reviews: [{ user: 'Malika X.', text: 'Salomatlik uchun ajoyib yordamchi.', rating: 5 }]
  },
  // 18 - Samsung Galaxy Watch 6
  {
    id: 18,
    name: 'Samsung Galaxy Watch 6',
    category: 'electronics',
    price: 3990000,
    emoji: '⌚',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgkDzpSZySCDG7rMSG3gXPCuHUKNfDGYZZu2_WE8BaQ&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgkDzpSZySCDG7rMSG3gXPCuHUKNfDGYZZu2_WE8BaQ&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&s=10',
    ],
    description: 'Samsung Galaxy Watch 6, Super AMOLED, yurak tezligi, EKG, 40mm, ko‘k rang.',
    rating: 4.6,
    reviews: [{ user: 'Bobur A.', text: 'Sport va kundalik foydalanish uchun zo‘r.', rating: 4.5 }]
  },
  // 19 - Sony WH-1000XM5
  {
    id: 19,
    name: 'Sony WH-1000XM5',
    category: 'accessories',
    price: 3990000,
    emoji: '🎧',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yESVBPgzwfXHehkMyX8lvAn4D9jDyRNxI9zlSOAstA&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yESVBPgzwfXHehkMyX8lvAn4D9jDyRNxI9zlSOAstA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&s=10',
    ],
    description: 'Sony WH-1000XM5, eng yaxshi shovqin o‘chirish, 30 soat batareya, LDAC, qulay dizayn.',
    rating: 4.9,
    reviews: [{ user: 'Nodir T.', text: 'Ovoz sifati va komforti bilan hayratda qoldirdi.', rating: 5 }]
  },
  // 20 - AirPods Pro 2
  {
    id: 20,
    name: 'AirPods Pro 2',
    category: 'accessories',
    price: 2990000,
    emoji: '🎧',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgvn903Zb4DTA3_LUfZcyr4eMmvL-ZA_21zF2IFXo8w&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgvn903Zb4DTA3_LUfZcyr4eMmvL-ZA_21zF2IFXo8w&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&s=10',
    ],
    description: 'AirPods Pro 2, Active Noise Cancellation, Adaptive Transparency, 6 soat batareya, MagSafe.',
    rating: 4.8,
    reviews: [{ user: 'Gulnoza A.', text: 'Juda qulay va ovoz ajoyib.', rating: 5 }]
  },
  // 21 - iPad Pro 12.9"
  {
    id: 21,
    name: 'iPad Pro 12.9"',
    category: 'electronics',
    price: 10990000,
    emoji: '📟',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQTl6UEtMg60BZHcaUwfvO__c95w9OYh1L0adzE4tYQ&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQTl6UEtMg60BZHcaUwfvO__c95w9OYh1L0adzE4tYQ&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&s=10',
    ],
    description: 'iPad Pro 12.9", M2 chip, Liquid Retina XDR, 128GB, Face ID, Apple Pencil 2.',
    rating: 4.9,
    reviews: [{ user: 'Zarina O.', text: 'Rasm chizish va video tahrirlash uchun mukammal.', rating: 5 }]
  },
  // 22 - BenQ 32" 4K Monitor
  {
    id: 22,
    name: 'BenQ 32" 4K Monitor',
    category: 'electronics',
    price: 4590000,
    emoji: '🖥️',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruRVSr4Ixm72HWYLn1GnRq2auH8SSztokpfc5Jl-U4g&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruRVSr4Ixm72HWYLn1GnRq2auH8SSztokpfc5Jl-U4g&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&s=10',
    ],
    description: 'BenQ 32 dyuymli 4K HDR monitor, IPS, 60Hz, 95% DCI-P3, USB-C, dizaynerlar uchun.',
    rating: 4.7,
    reviews: [{ user: 'Komil S.', text: 'Ranglar mukammal, ish uchun ideal.', rating: 4.5 }]
  }
];

export const categoryLabels = {
  all: 'Barchasi',
  laptops: '💻 Noutbuklar',
  phones: '📱 Telefonlar',
  accessories: '🔌 Aksessuarlar',
  electronics: '⚡ Elektronika',
  favourites: '❤️ Sevimlilar'
};