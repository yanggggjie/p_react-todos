import { clsx } from 'clsx'
import _ from 'lodash-es'
import { Todo } from '../../App.tsx'
import { AiFillCheckSquare, AiFillDelete } from 'react-icons/ai'
import { TfiWrite } from 'react-icons/tfi'
interface Props {
  todo: Todo
  openEditModal: (todo: Todo) => void
  handleDeleteTodo: (id: string) => void
  handleCompleteTodo: (id: string) => void
}

function Component({
  todo,
  openEditModal,
  handleCompleteTodo,
  handleDeleteTodo,
}: Props) {
  return (
    <div
      className={clsx(
        'w-full',
        'flex flex-row items-center',
        'outline outline-gray-200 p-2 rounded',
      )}
    >
      <div>{todo.text}</div>
      <div className={clsx('grow')}></div>
      <div className={clsx('flex flex-row gap-2', 'text-white')}>
        <button
          className={clsx('p-1.5 rounded', 'bg-red-700', 'hover:bg-red-600')}
          onClick={() => {
            handleDeleteTodo(todo.id)
          }}
        >
          <AiFillDelete></AiFillDelete>
        </button>
        <button
          className={clsx('p-1.5 rounded', 'bg-blue-700', 'hover:bg-blue-600')}
          onClick={() => {
            openEditModal(todo)
          }}
        >
          <TfiWrite></TfiWrite>
        </button>
        <button
          className={clsx(
            'p-1.5 rounded',
            'bg-green-700',
            'hover:bg-green-600',
          )}
          onClick={() => {
            handleCompleteTodo(todo.id)
          }}
        >
          <AiFillCheckSquare></AiFillCheckSquare>
        </button>
      </div>
    </div>
  )
}

export default Component
