import React, { PureComponent } from "react";
import Calendar from "react-calendar";
import "./MyCalendar.css";

export default class MyCalendar extends PureComponent {
  state = {
    date: new Date()
  };
  onChange = date => {
    this.setState({ date });
  };
  componentDidMount() {
    this.props.getDate(
      this.state.date
        .toString()
        .split(" ")
        .slice(1, 4)
        .join("/")
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      this.props.getDate(
        this.state.date
          .toString()
          .split(" ")
          .slice(1, 4)
          .join("/")
      );
    }
  }
  render() {
    return (
      <div className="mt-2 headingStyle">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          className="w-100 mx-auto react-calendar__tile react-calendar-tile--active"
        />
      </div>
    );
  }
}
