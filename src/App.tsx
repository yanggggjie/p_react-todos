import { clsx } from 'clsx'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash-es'
import { useState } from 'react'
import Search from './components/Search.tsx'
import Todos from './components/Todos/Todos.tsx'
import Button from './components/Button.tsx'
import EditModal from './components/EditModal.tsx'

function Title() {
  return (
    <h1 className={clsx('flex flex-row gap-4', 'font-bold text-3xl')}>
      <span className={clsx('text-cyan-600')}>Smatyx</span>
      <span>Todos</span>
      <span>App</span>
    </h1>
  )
}

export interface Todo {
  id: string
  text: string
  completed: boolean
}

function Component() {
  const defaultTodos = [
    {
      id: uuidv4(),
      text: 'todo 1',
      completed: false,
    },
    {
      id: uuidv4(),
      text: 'todo 2',
      completed: false,
    },
    {
      id: uuidv4(),
      text: 'todo 3',
      completed: true,
    },
  ]

  const [searchText, setSearchText] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>(defaultTodos)
  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchText.toLowerCase())
  })
  const [showEditModal, setShowEditModal] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<Todo | null>(null)
  function openEditModal(todo: Todo) {
    setEditTodo({
      ...todo,
    })
    setShowEditModal(true)
  }

  function handleDeleteTodo(id: string) {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id
      }),
    )
  }

  function handleCompleteTodo(id: string) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    )
  }

  function handleUpdateTodo(newTodo: Todo) {
    // if newTodo exists, update it
    if (
      todos.some((todo) => {
        return todo.id === newTodo.id
      })
    ) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === newTodo.id) {
            return newTodo
          }
          return todo
        }),
      )
    }
    // else add it
    else {
      setTodos([...todos, newTodo])
    }
  }

  return (
    <div
      className={clsx('w-screen h-screen p-28', 'flex flex-col items-center')}
    >
      <div className={clsx('w-[400px]', 'flex flex-col items-center gap-3')}>
        <div className={clsx('m-3')}>
          <Title></Title>
        </div>
        <div className={clsx('w-full', 'flex flex-row items-center gap-2')}>
          <Search
            searchText={searchText}
            setSearchText={setSearchText}
          ></Search>
          <Button openEditModal={openEditModal}></Button>
        </div>
        <Todos
          todos={filteredTodos}
          openEditModal={openEditModal}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        ></Todos>
      </div>
      {showEditModal && (
        <EditModal
          handleUpdateTodo={handleUpdateTodo}
          setShowEditModal={setShowEditModal}
          editTodo={editTodo}
        ></EditModal>
      )}
    </div>
  )
}

export default Component
