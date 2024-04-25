import { Container } from "@/_components/container";
import Header from "@/_components/header";
import { PostBody } from "@/_components/post-body";
import { PostHeader } from "@/_components/post-header";

export default async function Post() {
  return (
    <main>
      {/* Alert */}
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title=""
            coverImage=""
            date=""
            author={{
              name: "",
              picture: ""
            }}
          />
          <PostBody />
        </article>
      </Container>
    </main>
  )
}

