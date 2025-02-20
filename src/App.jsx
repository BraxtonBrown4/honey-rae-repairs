import { useState } from "react"

export const App = () => {
  const [count, setcount] = useState(0)

  const handleBtnClick = () => {
    setcount(count + 1)
  }

  return (
    <>
      <h1>Hello!</h1>
      <div>This is amazing!</div>
      <button className="btn-secondary" onClick={handleBtnClick}>
        Click Me!
      </button>
      <div>Count: {count}</div>
    </>
  )
}
