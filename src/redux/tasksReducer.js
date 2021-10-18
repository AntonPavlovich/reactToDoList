import {  UPDATE_ARR } from "./types";

export const tasksReducer = (state, action) => {
  switch (action.type) {

    case UPDATE_ARR : return {
      tasks : action.updatedArr
    }

    default:
      return state;
  }
};
