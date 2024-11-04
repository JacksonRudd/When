import EventAction from "./actions";
import StoryModel from "./StoryModel";

const eventReducer = (state: StoryModel, action: EventAction) => {
  switch (action.type) {
    case "ADD_EVENT":
      console.log({
        ...state,
        events: [...state.events, action.payload],
      });
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case "UPDATE_EVENT":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default eventReducer;
