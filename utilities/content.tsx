import { Work, News } from './filters'

export type workItemType = {
  title: string
  categories: Array<Work>
  images: string[]
  year: number
  date: '4 Apr. 2024'
  href: string
  spansTwoColumns: boolean
  client: string
  description: string
}

export const workItems: workItemType[] = [
  {
    title: 'Thmanyah',
    categories: ['Campaign', 'Communication'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Saudia_Milk_82c9240877.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Saudia_Milk_82c9240877.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Saudia_Milk_82c9240877.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Saudia_Milk_82c9240877.webp',
    ],
    year: 2021,
    date: '4 Apr. 2024',
    href: '/',
    spansTwoColumns: false,
    client: 'SaudiaMilk',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
  },
  {
    title: 'Cultural Talents Tournaments',
    categories: ['Visual Identity', 'Way-finding'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_11_58924254bc.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_11_58924254bc.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_11_58924254bc.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_11_58924254bc.webp',
    ],
    year: 2024,
    date: '4 Apr. 2024',
    href: '/',
    spansTwoColumns: false,
    client: 'Nana',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
  },
  {
    title: 'Ministry of Culture',
    categories: ['Visual Identity', 'Packaging'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Cover_2_copy_79f43981c7.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Cover_2_copy_79f43981c7.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Cover_2_copy_79f43981c7.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Cover_2_copy_79f43981c7.webp',
    ],
    year: 2024,
    date: '4 Apr. 2024',
    href: '/',
    spansTwoColumns: false,
    client: 'Tawuniya',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
  },
  {
    title: 'Nana',
    categories: ['Social Media', 'Campaign'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_10_b0f4fb753a.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_10_b0f4fb753a.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_10_b0f4fb753a.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_10_b0f4fb753a.webp',
    ],
    year: 2024,
    date: '4 Apr. 2024',
    href: '/',
    spansTwoColumns: true,
    client: 'Nana',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
  },
  {
    title: 'Saudi Design Week',
    categories: ['Visual Identity'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Core_Fitness_d26e907971.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Core_Fitness_d26e907971.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Core_Fitness_d26e907971.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Core_Fitness_d26e907971.webp',
    ],
    year: 2023,
    date: '4 Apr. 2024',
    href: '/',
    spansTwoColumns: true,
    client: 'Nana',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
  },
  {
    title: 'Quantum',
    categories: ['Visual Identity'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_copy_9186ab4156.jpg',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_copy_9186ab4156.jpg',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_copy_9186ab4156.jpg',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_copy_9186ab4156.jpg',
    ],
    year: 2023,
    date: '4 Apr. 2024',
    href: '/',
    spansTwoColumns: false,
    client: 'Saudia Milk',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
  },
  {
    title: 'Lamb',
    categories: ['Visual Identity'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_copy_9da39e6ecb.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_copy_9da39e6ecb.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_copy_9da39e6ecb.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_copy_9da39e6ecb.webp',
    ],
    year: 2023,
    date: '4 Apr. 2024',
    href: '/',
    spansTwoColumns: false,
    client: 'Nana',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
  },
  {
    title: 'Boost',
    categories: ['Visual Identity'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_01_Cover_aaaee6715e.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_01_Cover_aaaee6715e.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_01_Cover_aaaee6715e.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_01_Cover_aaaee6715e.webp',
    ],
    year: 2022,
    date: '4 Apr. 2024',
    href: '/',
    spansTwoColumns: false,
    client: 'Cultural Talents Tournament',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
  },
  {
    title: 'Get started',
    categories: ['Visual Identity', 'Re-branding'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
    ],
    year: 2022,
    date: '4 Apr. 2024',
    href: '/',
    spansTwoColumns: false,
    client: 'Click Click',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
  },
  {
    title: 'Get started',
    categories: ['Visual Identity', 'Sonic'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_009_copy_292b10a1de.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_009_copy_292b10a1de.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_009_copy_292b10a1de.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_009_copy_292b10a1de.webp',
    ],
    year: 2021,
    date: '4 Apr. 2024',
    href: '/',
    spansTwoColumns: true,
    client: 'Saudia Milk',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
  },
]

export type newsItemType = {
  title: string
  categories: Array<News>
  images: string[]
  year: number
  date: '4 Apr. 2024'
  client: string
  description: string
  writer: string
}

export const newsItems: newsItemType[] = [
  {
    title: 'Illuminating Eid with the Art of Arabic Lettering',
    categories: ['Work', 'Updates'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Nike_Thumbnail_32bff97dfa.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Nike_Thumbnail_32bff97dfa.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Nike_Thumbnail_32bff97dfa.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Nike_Thumbnail_32bff97dfa.webp',
    ],
    year: 2021,
    date: '4 Apr. 2024',
    client: 'SaudiaMilk',
    description:
      "In the spirit of Eid al-Fitr, a momentous occasion that brings joy, introspection, and unity, communities unite to commemorate the end of Ramadan. We are proud with our community and heritage, we firmly believe in the ability of creativity to forge bonds and share love. That is precisely why our talented team has undertaken a heartwarming endeavor this year - a celebration of Eid al-Fitr through the art of calligraphy and lettering. As we prepare to mark this special occasion, we are excited to announce the launch of our Eid celebration posters. Carefully curated with intricate Arabic lettering and calligraphy, these designs capture the essence of Eid, embracing our cherished cultural heritage and customs. However, our endeavor extends beyond the creation of visually captivating artwork – it's about supporting our community and spreading joy far and wide.",
    writer: 'Nouf Yamani',
  },
  {
    title:
      'The Power of Purpose: How Purpose-Driven Brands Are Changing the Game',
    categories: ['Work', 'Insights & Reflection'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
    ],
    year: 2021,
    date: '4 Apr. 2024',
    client: 'SaudiaMilk',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
    writer: 'Nouf Yamani',
  },
  {
    title: "Milk Network Receives 'Site of the Day' Award from Awwwards",
    categories: ['Insights & Reflection', 'Updates'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Thumbnail_5797bea1bd.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_009_copy_292b10a1de.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
    ],
    year: 2021,
    date: '4 Apr. 2024',
    client: 'SaudiaMilk',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
    writer: 'Nouf Yamani',
  },
  {
    title: "Attending The World's Largest Tech Event “LEAP 2024”",
    categories: ['Work', 'Insights & Reflection'],
    images: [
      'https://strapi-cms-3mz0.onrender.com/uploads/small_009_copy_292b10a1de.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_009_copy_292b10a1de.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_009_copy_292b10a1de.webp',
      'https://strapi-cms-3mz0.onrender.com/uploads/small_009_copy_292b10a1de.webp',
    ],
    year: 2021,
    date: '4 Apr. 2024',
    client: 'SaudiaMilk',
    description:
      'A glimpse of the branding scene affected by the contribution of the transformational national Vision of KSA.',
    writer: 'Nouf Yamani',
  },
]
