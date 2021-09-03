import React from "react";
import { CREATE_POST } from "./CreateTypes";
import { produce } from "immer";
const createdPosts = [];

export function useImerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

const CreateReducer = (state = createdPosts, action) => {
  switch (action.type) {
    case CREATE_POST:
      return produce(state, (drafState) => {
        drafState.unshift(action.payload);
      });
    default:
      return state;
  }
};
export default CreateReducer;
