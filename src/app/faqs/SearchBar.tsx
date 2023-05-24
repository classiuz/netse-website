import { useRef, useState } from 'react'
import Icon, { IconName } from '@/components/Icon'

interface Props {
  changeQuery: Function
}

export default function SearchBar({ changeQuery }: Props) {
  const input = useRef<HTMLInputElement>(null)
  const [inputIcon, setInputIcon] = useState<IconName>('search')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!input.current) return false
    if (input.current.value === '') return setInputIcon('search')
    changeQuery(e.target.value)
    return setInputIcon('xmark')
  }

  const handleClickIcon = () => {
    if (!input.current) return false
    return inputIcon === 'xmark' ? ((input.current.value = ''), changeQuery(''), setInputIcon('search')) : input.current.focus()
  }

  return (
    <div className="relative flex items-center">
      <input
        ref={input}
        type="text"
        onChange={handleOnChange}
        placeholder="Buscar..."
        aria-label="Buscar"
        className="placeholder:neutral-400 rounded-md border-b-2 border-outline bg-surface px-6 py-2 text-base outline-none"
      />
      <span
        onClick={handleClickIcon}
        className="absolute right-4 cursor-pointer bg-surface px-1 text-2xl text-neutral-400 hover:text-neutral-600"
      >
        <Icon iconName={inputIcon} />
      </span>
    </div>
  )
}
