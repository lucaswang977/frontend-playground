import { useState, SetStateAction, Dispatch } from 'react'

type AddOneButtonProps = {
  setCount: Dispatch<SetStateAction<number>>
}

const Container = ({ setCount }: AddOneButtonProps) => {
  return (
    <div>
      <AddOneButton setCount={setCount} />
    </div>
  )
}

// tailwind button styles
const AddOneButton = ({ setCount }: AddOneButtonProps) => {
  return (
    <div>
      <button className="p-2 m-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={() => setCount((prevCount) => prevCount + 1)}>Add One</button>
    </div>)
}

const Counter = ({ count }: { count: number }) => {
  return <div className="m-2">{count}</div>
}

const CounterState = () => {
  const [count, setCount] = useState<number>(0)

  return (<div>
    <Container setCount={setCount} />
    <Counter count={count} />
  </div>)
}

export default CounterState
