import { clsx } from 'clsx'
import _ from 'lodash-es'
import { AiOutlineSearch } from 'react-icons/ai'
interface Props {
  searchText: string
  setSearchText: (searchText: string) => void
}

function Component({ searchText, setSearchText }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }
  return (
    <div className={clsx('relative', 'grow')}>
      <input
        className={clsx('rounded', 'w-full')}
        placeholder={'Search Todos'}
        type="text"
        value={searchText}
        onChange={handleChange}
      />
      <span
        className={clsx(
          'absolute top-1/2 -translate-y-1/2 right-1.5',
          'p-2 bg-blue-600 rounded-md',
          'text-white font-bold',
          'hover:bg-blue-500',
        )}
      >
        <AiOutlineSearch></AiOutlineSearch>
      </span>
    </div>
  )
}

export default Component
