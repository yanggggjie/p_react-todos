import { clsx } from 'clsx'
import _ from 'lodash-es'
import { Todo } from '../App.tsx'
import { v4 as uuidv4 } from 'uuid'
interface Props {
  openEditModal: (todo: Todo) => void
}

function Component({ openEditModal }: Props) {
  function handleClick() {
    openEditModal({
      id: uuidv4(),
      text: 'Hello',
      completed: false,
    })
  }

  return (
    <div>
      <button
        className={clsx(
          'w-30 p-1 bg-green-700 rounded-md text-white',
          'hover:bg-green-600',
        )}
        onClick={handleClick}
      >
        Add Todos
      </button>
    </div>
  )
}

export default Component
