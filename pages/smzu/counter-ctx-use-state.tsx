import { useState, createContext, useContext, Dispatch, SetStateAction } from 'react'

type CounterContextType = [number, Dispatch<SetStateAction<number>>]
const CounterContext = createContext<CounterContextType>([0, () => { }])

const CounterContextProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <CounterContext.Provider value={useState(0)}>
      {children}
    </CounterContext.Provider>
  )
}

const Container = () => {
  return (
    <div>
      <AddOneButton />
    </div>
  )
}

// tailwind button styles
const AddOneButton = () => {
  const [, setCount] = useContext(CounterContext)
  return (
    <div>
      <button className="p-2 m-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={() => setCount((prevCount) => prevCount + 1)}>Add One</button>
    </div>)
}

const Counter = () => {
  const [count,] = useContext(CounterContext)
  return <div className="m-2">{count}</div>
}

const CounterState = () => {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>)
}

const CounterStatePage = () => {
  return (
    <div>
      <CounterState />
      <CounterState />
      <CounterState />
    </div>
  )
}

export default CounterStatePage
