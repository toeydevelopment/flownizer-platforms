import 'package:flutter/material.dart';

class BarAvatar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.only(right: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: <Widget>[
              Text(
                "คุณชิษณุพงศ์ วรจิตรไทย",
                style: TextStyle(
                  fontSize: 20,
                  color: Color(0xFF4F4F4F),
                ),
              ),
              Text(
                "พนักงานรักษาความปลอดภัย",
                style: TextStyle(
                  fontSize: 17,
                  color: Color(0xFF828282),
                ),
              ),
            ],
          ),
          SizedBox(
            width: 10,
          ),
          CircleAvatar(
            child: FlutterLogo(),
          )
        ],
      ),
    );
  }
}
