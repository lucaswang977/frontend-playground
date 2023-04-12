import { useReducer, createContext, useContext, Dispatch } from 'react'

type CounterContextType = [number, Dispatch<Action>]
const CounterContext = createContext<CounterContextType>([0, () => { }])

type Action = { type: "add" } | { type: "subtract" }

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "add":
      return state + 1
    case "subtract":
      return state - 1
    default:
      return state
  }
}

const CounterContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
      {children}
    </CounterContext.Provider>
  )
}

const Container = () => {
  return (
    <div>
      <AddOneButton />
      <SubtractOneButton />
    </div>
  )
}

const AddOneButton = () => {
  const [, dispatch] = useContext(CounterContext)
  return (
    <div>
      <button className="p-2 m-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300" onClick={() => dispatch({ type: "add" })}>Add One</button>
    </div>)
}

const SubtractOneButton = () => {
  const [, dispatch] = useContext(CounterContext)
  return (
    <div>
      <button className="p-2 m-2 bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300" onClick={() => dispatch({ type: "subtract" })}>Subtract One</button>
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
