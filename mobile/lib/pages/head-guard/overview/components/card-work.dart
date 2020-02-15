import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';

enum STATUS { DONE, PENDING, CURRENT }

class HeadGuardCardWorkComponent extends StatelessWidget {
  STATUS status;
  final String name;
  final String time;
  final String place;

  HeadGuardCardWorkComponent({
    @required this.name,
    @required this.time,
    @required this.place,
    @required this.status,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width * .75,
      padding: EdgeInsets.all(10),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            spreadRadius: 3,
            blurRadius: 5,
            color: Colors.grey[300].withOpacity(.7),
          )
        ],
      ),
      child: Column(
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: <Widget>[
              CircleAvatar(
                child: FlutterLogo(),
              ),
              Column(
                children: <Widget>[
                  Text(
                    this.name,
                    style: TextStyle(color: Colors.black, fontSize: 16),
                  ),
                  Text(
                    "กำหนดการเข้างาน $time",
                    style: TextStyle(color: COLOR_GREY, fontSize: 13),
                  )
                ],
              )
            ],
          ),
          SizedBox(
            height: 10,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: <Widget>[
              Text(
                "พื้นที่รับชอบ",
                style: TextStyle(
                  fontSize: 15,
                  color: COLOR_GREY,
                ),
              ),
              Text(
                this.place,
                style: TextStyle(
                  fontSize: 15,
                  color: this.status == STATUS.DONE
                      ? COLOR_GREY_LIGHT_1
                      : this.status == STATUS.CURRENT
                          ? COLOR_SUCCESS
                          : Colors.redAccent,
                ),
              ),
            ],
          )
        ],
      ),
    );
  }
}
