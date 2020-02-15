import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/core/components/app-bar.dart';
import 'package:mobile/core/components/calendar.dart';
import 'package:mobile/pages/guard/time-table/components/time-card.dart';

class GuardTimeTablePage extends StatefulWidget {
  @override
  _GuardTimeTablePageState createState() => _GuardTimeTablePageState();
}

class _GuardTimeTablePageState extends State<GuardTimeTablePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarME("ตารางงาน"),
      body: Column(
        children: <Widget>[
          CalendarComponent(),
          Container(
            padding: EdgeInsets.all(10),
            width: double.infinity,
            decoration: BoxDecoration(
              color: COLOR_PRIMARY,
            ),
            child: Text(
              "วันที่ 16 มกราคม 2563",
              style: TextStyle(
                color: Colors.white,
              ),
            ),
          ),
          TimeCardComponent(),
          TimeCardComponent(),
        ],
      ),
    );
  }
}
