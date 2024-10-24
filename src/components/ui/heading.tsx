

export interface HeadingProps {
  title: string
}

export const Heading = (props: HeadingProps) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-4">{props.title}</h1>
    </div>
  
  )
}