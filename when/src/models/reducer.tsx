import EventAction from "./actions";
import StoryModel from "./StoryModel";

const eventReducer = (state: StoryModel, action: EventAction) => {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case "UPDATE_EVENT":
      return {
        ...state,
        events: state.events.map((event) =>
          event.name === action.payload.name ? action.payload : event
        ),
      };
    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter(
          (event) => event.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};

export default eventReducer;
