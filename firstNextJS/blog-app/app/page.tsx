import { Container } from "@/_components/container";
import { Hero } from "@/_components/hero";
import { Intro } from "@/_components/intro";
import imageBlog from "../assets/blogs/blog.png";
import imageBlog2 from "../assets/blogs/blog2.png"
import imageBlog3 from "../assets/blogs/blog3.png"
import { MoreBlogs } from "@/_components/more-blogs";
import { Post } from "@/interfaces/post";

const morePosts: Post[] = [
  {
    slug: "dummy-post-slug",
    date: "2024-03-29",
    title: "Dummy Post Title",
    coverImage: imageBlog2,
    author: {
      name: "Dummy Author",
      picture: "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
    },
    excerpt: "This is a dummy excerpt for the post.",
    ogImage: {
      url: "https://assets-prd.ignimgs.com/2024/02/21/avatarthelastairbender-review-blogroll-1708552489441.jpg"
    },
    content: "This is a dummy content for the post.",
    preview: "This is a dummy preview for the post."
  },
  {
    slug: "dummy-post-slug",
    date: "2024-03-29",
    title: "Dummy Post Title",
    coverImage: imageBlog3,
    author: {
      name: "Dummy Author",
      picture: "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
    },
    excerpt: "This is a dummy excerpt for the post.",
    ogImage: {
      url: "https://assets-prd.ignimgs.com/2024/02/21/avatarthelastairbender-review-blogroll-1708552489441.jpg"
    },
    content: "This is a dummy content for the post.",
    preview: "This is a dummy preview for the post."
  }
]

export default function Home() {
  return (
    <main>
      <Container>
        <Intro />
        <Hero
          title="Who am i, you ask ?"
          coverImage={imageBlog}
          date={"2030:05:01"}
          slug={"ankit"}
          excerpt={"ankit"}
        />
        <MoreBlogs posts={morePosts} />
      </Container>
    </main>
  );
}
