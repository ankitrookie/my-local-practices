import Link from "next/link"

export const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex item-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        Blogan.
      </h1>
      <div className="flex-col items-center text-3xl">
        <Link href="/createpost">Create</Link>
      </div>
    </section>
  )
}
