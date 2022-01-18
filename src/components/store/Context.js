import { createContext } from "react"

const initial = {
  total: 89914,
  backer: 5007,
  dayLeft: 56
}

const Context = createContext(initial);

export default Context;