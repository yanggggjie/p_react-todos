import { clsx } from 'clsx'
import _ from 'lodash-es'
import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
interface Props {
  count: number
  showComplete: boolean
  setShowComplete: (showComplete: boolean) => void
}

function Component({ count, showComplete, setShowComplete }: Props) {
  function handleClick() {
    setShowComplete(!showComplete)
  }
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-2 p-2',
        ' rounded-md text-white',
        'transition-colors',
        'hover:bg-opacity-80',
        showComplete ? 'bg-green-700' : 'bg-gray-300',
      )}
      onClick={handleClick}
    >
      Completed Todos {count}
      <span className={clsx(!showComplete && '-rotate-90')}>
        <BsFillArrowDownCircleFill></BsFillArrowDownCircleFill>
      </span>
    </div>
  )
}

export default Component
