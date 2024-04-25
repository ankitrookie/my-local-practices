import { Author } from "@/interfaces/author";
import { CoverImage } from "./cover-image";
import Link from "next/link";
import { DateFormatter } from "./date-formatter";
import { Avatar } from "./avatar";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  coverImage: string | StaticImageData;
  date: string;
  excerpt: string;
  author: Author
  slug: string
}
export const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <div>
      <div className="mb:5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>

      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>

      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
