import { useReducer, useState } from "react";
import Context from "./Context";

const initial = {
  total: 89914,
  backer: 5007,
  dayLeft: 56,
  bambooStand: 101,
  blackEd: 64,
  mahoganyEd: 0,
  showModal: false,
  appREf: null,
};

const stateReducer = (state, action) => {
  switch(action.type){
    case 'Pledge with no reward':
      return {
        ...state,
        total: state.total
      }
    case 'Bamboo Stand':
      return {
        ...state,
        bambooStand: state.bambooStand - 1
      }
    case 'Black Edition Stand':
      return {
        ...state,
        blackEd: state.blackEd - 1
      }
    case 'Mahogany Special Edition Stand':
      return {
        ...state,
        mahoganyEd: state.mahoganyEd - 1
      }
  }
}

function ContextProvider(props) {
  const [state, dispatchState] = useReducer(stateReducer, initial)
  const [modalState, setModalState] = useState(false);

  const modalHandler = () => {
    setModalState(prevState => !prevState);
  }
  const updateItems = (type) => {
    dispatchState({type: type});
  }

  const results = {
    ...state,
    showModal: modalState,
    modalHandler: modalHandler,
    updateItems: updateItems
  }

  return <Context.Provider value={results}>{props.children}</Context.Provider>;
}

export default ContextProvider;
