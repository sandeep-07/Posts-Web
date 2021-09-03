import { CREATE_POST } from "./CreateTypes";

const createdPosts = [];

const CreateReducer = (state = createdPosts, action) => {
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default CreateReducer;
