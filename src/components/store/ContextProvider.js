import { useContext } from "react";
import Context from "./Context";

const initial = {
  total: 89914,
  backer: 5007,
  dayLeft: 56,
  bambooStand: 101,
  BlackEd: 64,
  MahoganyEd: 0,
};

function ContextProvider(props) {
  return <Context.Provider value={initial}>{props.children}</Context.Provider>;
}

export default ContextProvider;
