import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';

class TimeCardComponent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(10),
      width: double.infinity,
      child: Column(
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              Container(
                width: 100,
                child: Text(
                  "เวลา",
                  textAlign: TextAlign.left,
                  style: TextStyle(
                    fontSize: 20,
                    color: COLOR_GREY_LIGHT_1,
                  ),
                ),
              ),
              Text(
                "12:00",
                style: TextStyle(
                  fontSize: 20,
                ),
              ),
              SizedBox(
                width: 15,
              ),
              Text(
                "ถึง",
                style: TextStyle(
                  fontSize: 20,
                ),
              ),
              SizedBox(
                width: 15,
              ),
              Text("20:00",
                  style: TextStyle(
                    fontSize: 20,
                  )),
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Container(
                width: 100,
                child: Text("สถานที่",
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      fontSize: 20,
                      color: COLOR_GREY_LIGHT_1,
                    )),
              ),
              Expanded(
                child: Text(
                  "ห้างสรรพสินค้า ก แขวงสามเสนใน เขตพญาไท กทม กรุงเทพมหานคร",
                  style: TextStyle(
                    fontSize: 17,
                  ),
                ),
              ),
            ],
          ),
          SizedBox(
            height: 10,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: <Widget>[
              FlatButton(
                color: Colors.transparent,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(5),
                    side: BorderSide(
                      color: COLOR_PRIMARY,
                      width: 1,
                    )),
                onPressed: () {
                  Navigator.of(context).pushNamed("/guard/help");
                },
                child: Text(
                  "แจ้งปัญหา",
                  style: TextStyle(
                    color: COLOR_PRIMARY,
                  ),
                ),
              )
            ],
          )
        ],
      ),
    );
  }
}
