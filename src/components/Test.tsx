import { Suspense, useEffect, useState } from 'react'

function Sub({ count }: { count: number }) {
  return <div>count is {count}</div>
}
const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount((count) => {
        return count + 1
      })
    }, 10000)
  }, [])

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Sub count={count} />
      </Suspense>
      <div>count is {count}</div>
    </>
  )
}
export default App
