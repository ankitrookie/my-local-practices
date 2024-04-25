import { type Author } from "@/interfaces/author";
import Link from "next/link";
import { CoverImage } from "@/_components/cover-image";
import { StaticImageData } from "next/image";

type Props = {
  title: string;
  coverImage: string | StaticImageData
  excerpt: string;
  date: string;
  author?: Author;
  slug: string;
}

export const Hero = ({
  title,
  coverImage,
  excerpt,
  date,
  author,
  slug
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-3">
            <Link
              as={`/posts/${slug}`}
              href={"/posts/[slug]"}
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
        </div>
      </div>
    </section>
  )
}
