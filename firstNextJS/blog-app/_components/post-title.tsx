import { ReactNode } from "react"

export const PostTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </div>
  )
}
