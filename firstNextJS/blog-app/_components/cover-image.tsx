import Image, { StaticImageData } from 'next/image'

type Props = {
  title: string;
  src: string | StaticImageData;
  slug?: string;
}

export const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`cover iamge for ${title}`}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {image}
    </div>
  )
}
