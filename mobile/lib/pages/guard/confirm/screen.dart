import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/core/components/app-bar.dart';

class GuardConfirmPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarME("ยืนยันการเข้างาน"),
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            Icon(
              FontAwesomeIcons.checkCircle,
              size: 150,
              color: COLOR_SUCCESS,
            ),
            Container(
              height: 80,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Text(
                    "ลงเวลาเข้างานเสร็จสิ้น",
                    style: TextStyle(color: COLOR_GREY_LIGHT_1, fontSize: 18),
                  ),
                  Text(
                    "กรุณาตรวจสอบพื้นที่รับผิดชอบ",
                    style: TextStyle(color: COLOR_GREY_LIGHT_1, fontSize: 18),
                  ),
                ],
              ),
            ),
            Container(
              width: MediaQuery.of(context).size.width * .9,
              padding: EdgeInsets.symmetric(horizontal: 5, vertical: 20),
              decoration: BoxDecoration(
                  color: Colors.white,
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey[300].withOpacity(.7),
                      spreadRadius: 3,
                      blurRadius: 3,
                      offset: Offset(0, 2),
                    )
                  ],
                  borderRadius: BorderRadius.circular(6)),
              child: Column(
                children: <Widget>[
                  Row(
                    children: <Widget>[
                      CircleAvatar(
                        child: FlutterLogo(),
                      ),
                      SizedBox(
                        width: 10,
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text(
                            "คุณชิษณุพงศ์ วรจิตรไทย",
                            style: TextStyle(
                              fontSize: 18,
                              color: Color(0xFF4F4F4F),
                            ),
                          ),
                          Text(
                            "พนักงานรักษาความปลอดภัย",
                            style: TextStyle(
                              fontSize: 15,
                              color: Color(0xFF828282),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 15,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Expanded(
                        child: Text("เวลาเข้างาน",
                            style: TextStyle(
                                fontSize: 16, color: COLOR_GREY_LIGHT_1)),
                      ),
                      SizedBox(
                        width: 15,
                      ),
                      Expanded(
                        flex: 2,
                        child: Text("15 ก.พ. 2563 เวลา 9:41",
                            style: TextStyle(
                              color: COLOR_GREY,
                              fontSize: 16,
                            )),
                      )
                    ],
                  ),
                  SizedBox(
                    height: 15,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Expanded(
                        child: Text("พื้นที่รับผิดชอบ",
                            style: TextStyle(
                                fontSize: 16, color: COLOR_GREY_LIGHT_1)),
                      ),
                      SizedBox(
                        width: 15,
                      ),
                      Expanded(
                        flex: 2,
                        child: Text(
                          "ทางออกช้ัน 3 ชั้น b อาคาร c",
                          style: TextStyle(
                            color: COLOR_GREY,
                            fontSize: 16,
                          ),
                        ),
                      )
                    ],
                  )
                ],
              ),
            ),
            Column(
              children: <Widget>[
                RaisedButton(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(5),
                  ),
                  padding: EdgeInsets.symmetric(
                    horizontal: 30,
                    vertical: 10,
                  ),
                  color: COLOR_PRIMARY,
                  onPressed: () {
                    Navigator.of(context)
                        .pushNamedAndRemoveUntil("/guard", (_) => false);
                  },
                  child: Text(
                    "เสร็จสิ้นรายการ",
                    style: TextStyle(
                      fontSize: 20,
                      color: Colors.white,
                      letterSpacing: 2,
                    ),
                  ),
                ),
                FlatButton(
                    onPressed: () {
                      Navigator.of(context).pushNamed("/guard/help");
                    },
                    child: Text(
                      "แจ้งปัญหา",
                      style: TextStyle(
                        fontSize: 20,
                        color: COLOR_PRIMARY,
                        letterSpacing: 2,
                      ),
                    ))
              ],
            )
          ],
        ),
      ),
    );
  }
}
