import 'package:flutter/material.dart';
import "package:table_calendar/table_calendar.dart";

class CalendarComponent extends StatefulWidget {
  @override
  _CalendarComponentState createState() => _CalendarComponentState();
}

class _CalendarComponentState extends State<CalendarComponent> {
  CalendarController _calendarController;

  @override
  void initState() {
    super.initState();

    this._calendarController = CalendarController();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: TableCalendar(
        calendarController: this._calendarController,
        initialSelectedDay: DateTime.now(),
        events: {DateTime(2020, 2, 12): []},
      ),
    );
  }
}
