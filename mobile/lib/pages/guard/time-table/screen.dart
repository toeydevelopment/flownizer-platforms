import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/core/components/app-bar.dart';
import 'package:mobile/core/components/calendar.dart';

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
          Container(
            width: double.infinity,
            child: Column(
              children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Text("เวลา",
                        style: TextStyle(
                          fontSize: 15,
                          color: COLOR_GREY_LIGHT_1,
                        )),
                    SizedBox(
                      width: 15,
                    ),
                    Expanded(
                      child: Row(
                        children: <Widget>[
                          Text("12:00"),
                          SizedBox(
                            width: 15,
                          ),
                          Text("ถึง"),
                          SizedBox(
                            width: 15,
                          ),
                          Text("20:00"),
                        ],
                      ),
                    )
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text("สถานที่",
                        style: TextStyle(
                          fontSize: 15,
                          color: COLOR_GREY_LIGHT_1,
                        )),
                    SizedBox(
                      width: 15,
                    ),
                    Expanded(
                      child: Text(
                          "ห้างสรรพสินค้า ก แขวงสามเสนใน เขตพญาไท กทม กรุงเทพมหานคร"),
                    ),
                  ],
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
