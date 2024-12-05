import { StaticImageData } from "next/image";

interface PostSection {
  title?: string;
  content: string[];
  image?: string;
  imageAlt?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string | StaticImageData;
  readingTime?: string;
  sections: PostSection[];
} 