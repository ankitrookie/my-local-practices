import { StaticImageData } from "next/image";
import { type Author } from "./author";

export type Post = {
  slug: string;
  date: string;
  title: string;
  coverImage: string | StaticImageData;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string
  }
  content: string;
  preview?: string
}
