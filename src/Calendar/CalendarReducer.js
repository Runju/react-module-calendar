import { initCalendar } from './CalendarMethods';
import {
  INIT_CALENDAR,
} from './CalendarActions';

const calendar = (state = {}, action) => {
  switch (action.type) {
    case INIT_CALENDAR:
      return {
        ...initCalendar(),
      };
    default:
      return state;
  }
};

export default calendar;
