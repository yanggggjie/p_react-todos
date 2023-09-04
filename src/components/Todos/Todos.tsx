import { clsx } from 'clsx'
import _ from 'lodash-es'
import { Todo } from '../../App.tsx'
import TodoItem from './TodoItem.tsx'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import React, { useState } from 'react'
import CompleteButton from './CompleteButton.tsx'
import { useAutoAnimate } from '@formkit/auto-animate/react'
interface Props {
  todos: Todo[]
  openEditModal: (todo: Todo) => void
  handleDeleteTodo: (id: string) => void
  handleCompleteTodo: (id: string) => void
}

function Component({
  todos,
  openEditModal,
  handleDeleteTodo,
  handleCompleteTodo,
}: Props) {
  const [showComplete, setShowComplete] = useState<boolean>(true)
  const incompleteTodos = todos.filter((todo) => {
    return !todo.completed
  })
  const completeTodos = todos.filter((todo) => {
    return todo.completed
  })

  return (
    <div className={clsx('w-full', 'space-y-3')}>
      {incompleteTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            openEditModal={openEditModal}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          ></TodoItem>
        )
      })}
      <CompleteButton
        count={completeTodos.length}
        showComplete={showComplete}
        setShowComplete={setShowComplete}
      ></CompleteButton>
      {showComplete &&
        completeTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              openEditModal={openEditModal}
              handleDeleteTodo={handleDeleteTodo}
              handleCompleteTodo={handleCompleteTodo}
            ></TodoItem>
          )
        })}
    </div>
  )
}

export default Component
