/* eslint-disable no-unused-vars */
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../CssAndThemes/calendar.css";
import { rrulestr } from 'rrule';

export let navigate = {
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  TODAY: 'TODAY',
  DATE: 'DATE',
};
const localizer = momentLocalizer(moment);

const rule = rrulestr('FREQ=WEEKLY;BYDAY=SU;WKST=SU;INTERVAL=1;COUNT=10');
  const start = moment().startOf('week').add(1, 'week').hour(10).minute(0).second(0);
  const end = moment(start).add(1, 'hour');

  const events = [
    {
      // title: 'Sunday event at 10 am',
      // start: start.toDate(),
      // end: end.toDate(),
      // recurrenceRule: {
      //   freq: 'weekly',
      //   byweekday: [0],
      // },
    },
    {
      title: 'Meeting with John',
      start: moment().hour(14).minute(0).toDate(),
      end: moment().hour(15).minute(0).toDate(),
    },
    {
      title: 'Lunch with Sarah',
      start: moment().add(1, 'day').hour(12).minute(0).toDate(),
      end: moment().add(1, 'day').hour(13).minute(0).toDate(),
    },
  ];

  const recurringEvents = rule.all().map((date) => ({
    title: 'Service 10 am',
    start: moment(date).hour(10).toDate(),
    end: moment(date).hour(11).toDate(),
  }));

  class CustomToolbar extends React.Component {
    render() {
        let { localizer: { messages }, label } = this.props
        return(
            <div className="rbc-toolbar">
                <span className="rbc-btn-group">
                    <button type="button" onClick={this.navigate.bind(null, navigate.PREVIOUS)}>Prev</button>
                </span>
                <span className="rbc-toolbar-label">{label}</span>
                <span className="rbc-btn-group">
                    <button type="button" onClick={this.navigate.bind(null, navigate.NEXT)}>Next</button>
                </span>
            </div>
        )
    }
    navigate = action => {
        this.props.onNavigate(action)
    }
}
const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={[...events, ...recurringEvents]}
      startAccessor="start"
      endAccessor="end"
       style={{ height: 300 , width: 400 }}
       components={{       
        toolbar: CustomToolbar,      
      }}
    />
  </div>
);

export default MyCalendar;
