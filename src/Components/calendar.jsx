import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import "react-big-calendar/lib/css/react-big-calendar.css";
import "../CssAndThemes/calendar.css";
import { rrulestr } from 'rrule';
const localizer = momentLocalizer(moment);

const events = [
  {
    start: new Date(2023, 5, 10),
    end: new Date(2023, 5, 12),
    title: 'Example Event',
    description: 'This is an example event description'
  },
  {
    start: new Date(2023, 5, 20),
    end: new Date(2023, 5, 22),
    title: 'Another Event',
    description: 'This is another example event'
  },
  {
    start: new Date(2023, 4, 10),
    end: new Date(2023, 4, 10),
    title: 'Example Event',
    description: 'This is an example event description'
  },
  {
    start: new Date(2023, 4, 20, 10, 10, 0, 0),
    end: new Date(2023, 4, 20),
    title: 'Another Event',
    description: 'This is another example event'
  },
  {
    title: 'Chruch Service',
    start: moment().day(0).hour(10).toDate(), // set start date to first Sunday at 10 am
    end: moment().day(0).hour(11).toDate(), // set end date to first Sunday at 11 am
    recurrenceRule: {
      freq: 'weekly', // repeat weekly
      byweekday: [0], // on Sundays
    },
  }
  // Add more events here...
];

const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 400 }}
    />
  </div>
);

export default MyCalendar;