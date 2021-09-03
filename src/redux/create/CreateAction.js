import { CREATE_POST } from "./CreateTypes";
import { toast } from "react-toastify";
export const createPost = (data) => {
  toast.success("Post created");
  return {
    type: CREATE_POST,
    payload: data,
  };
};
