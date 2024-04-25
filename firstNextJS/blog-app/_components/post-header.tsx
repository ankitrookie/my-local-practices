import { type Author } from "@/interfaces/author";
import { StaticImageData } from "next/image";
import { PostTitle } from "./post-title";
import { Avatar } from "./avatar";

type Props = {
  title: string;
  coverImage: string | StaticImageData;
  date: string;
  author: Author
}

export const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  )
}
