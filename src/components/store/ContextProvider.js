import { useContext, useReducer, useState } from "react";
import Context from "./Context";

const initial = {
  total: 89914,
  backer: 5007,
  dayLeft: 56,
  bambooStand: 101,
  BlackEd: 64,
  MahoganyEd: 0,
  showModal: false
};

const stateReducer = () => {

}

function ContextProvider(props) {
  const [state, dispatchState] = useReducer(stateReducer, initial)
  const [modalState, setModalState] = useState(false);

  const modalHandler = () => {
    setModalState(prevState => !prevState);
  }

  const results = {
    ...state,
    showModal: modalState,
    modalHandler: modalHandler
  }

  return <Context.Provider value={results}>{props.children}</Context.Provider>;
}

export default ContextProvider;
