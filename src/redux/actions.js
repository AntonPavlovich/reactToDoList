import { UPDATE_ARR } from "./types";

export function updateArr(updatedArr){
  return {
    type : UPDATE_ARR,
    updatedArr
  }
}