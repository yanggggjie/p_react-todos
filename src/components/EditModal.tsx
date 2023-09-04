import { clsx } from 'clsx'
import _ from 'lodash-es'
import { useRef } from 'react'
import { Todo } from '../App.tsx'
interface Props {
  handleUpdateTodo: (newTodo: Todo) => void
  setShowEditModal: (showEditModal: boolean) => void
  editTodo: Todo
}

function Component({ handleUpdateTodo, setShowEditModal, editTodo }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSave() {
    const text = inputRef.current.value
    handleUpdateTodo({
      ...editTodo,
      text,
    })
    setShowEditModal(false)
  }
  function handleCancel() {
    setShowEditModal(false)
  }

  return (
    <div
      className={clsx(
        'fixed inset-0 bg-gray-100 bg-opacity-90',
        'grid place-items-center',
      )}
    >
      <div className={clsx('rounded-xl outline bg-white')}>
        <input
          className={clsx('m-4 outline outline-gray-500 rounded', 'w-80')}
          type="text"
          defaultValue={editTodo.text}
          ref={inputRef}
        />
        <div className={clsx('border')}></div>
        <div
          className={clsx(
            'm-4',
            'flex flex-row items-center gap-10 justify-center',
          )}
        >
          <button
            className={clsx('bg-green-700 w-20 h-10 rounded-xl text-white')}
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className={clsx('w-20 h-10 outline outline-gray-500 rounded')}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Component
