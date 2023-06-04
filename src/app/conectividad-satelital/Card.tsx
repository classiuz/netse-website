interface Props {
  svg: JSX.Element
  text: string
}

export default function Card({ svg, text }: Props) {
  return (
    <div className="flex flex-col items-center gap-8 bg-gradient-to-t from-red-500 to-orange-500 p-8 rounded-2xl shadow-lg">
      <span className="h-16 w-16">{svg}</span>
      <p className="text-center text-xl text-white">{text}</p>
    </div>
  )
}
