import { init } from "./init";

const appReducer = (state = init, action) => {

  switch (action.type) {
    case "NAME_UPDATE":
      return {
        ...state,
        name: action.name,
      };

    case "LOC_UPDATE":
      return {
        ...state,
        loc: action.loc,
      };

      default :    return state;
    
  }

  //   if (action.type === "NAME_UPDATE") {
  //     state = {
  //       ...state,
  //       name: action.name,
  //     };
  //   }

  //   if (action.type === "LOC_UPDATE") {
  //     state = {
  //       ...state,
  //       loc: action.loc,
  //     };
  //   }


};

export default appReducer;
