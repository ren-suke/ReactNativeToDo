import { GET_TAGS_SUCCESS, GET_TAGS_ERROR, CHANGE_TASK_STATUS_SUCCESS, CHANGE_TASK_STATUS_ERROR, ADD_TASK_SUCCESS, ADD_TASK_ERROR} from '../ActionTypes';

const initState = {
  tags: [],
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TAGS_SUCCESS:
      return {
        tags: action.tags
      };
    case GET_TAGS_ERROR:
      return {
        ...state,
        getTagsError: action.error
      }
    case CHANGE_TASK_STATUS_SUCCESS:
      return {
        tags: action.newTags
      }
    case CHANGE_TASK_STATUS_ERROR:
      return {
        ...state,
        changeTaskStatusError: action.error
      }
    case ADD_TASK_SUCCESS:
      return {
        tags: action.newTags
      }
    case ADD_TASK_ERROR:
      return {
        ...state,
        addTaskError: action.error
      }
    default: 
      return state;
  }
};

export default taskReducer;
