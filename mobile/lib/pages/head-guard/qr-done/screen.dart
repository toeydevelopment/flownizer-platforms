import "package:flutter/material.dart";
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/core/components/app-bar.dart';

class HeadGuardQrDonePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarME("สแกนเสร็จสิ้น"),
      body: Container(
        width: double.infinity,
        height: MediaQuery.of(context).size.height,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Icon(
              FontAwesomeIcons.checkCircle,
              size: 150,
              color: COLOR_SUCCESS,
            ),
            Column(
              children: <Widget>[
                Text(
                  "ลงเวลาเข้างานเสร็จสิ้น",
                  style: TextStyle(
                    color: COLOR_GREY,
                    fontSize: 20,
                  ),
                ),
                SizedBox(
                  height: 10,
                ),
                Text(
                  "ตรวจสอบพื้นที่รับผิดชอบได้ในหน้าแรก",
                  style: TextStyle(
                    color: COLOR_GREY,
                    fontSize: 20,
                  ),
                ),
              ],
            ),
            Container(
              width: double.infinity,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Text(
                    "จำนวนคนที่แสกน",
                    style: TextStyle(
                      fontSize: 35,
                      letterSpacing: 1,
                      color: COLOR_PRIMARY,
                    ),
                  ),
                  Text.rich(
                    TextSpan(
                      text: "9",
                      style: TextStyle(
                        color: COLOR_PRIMARY,
                        fontSize: 80,
                      ),
                      children: [
                        TextSpan(
                          text: "/9",
                          style: TextStyle(
                            color: COLOR_GREY_LIGHT_1,
                            fontSize: 70,
                          ),
                        )
                      ],
                    ),
                  ),
                  FlatButton(
                    color: COLOR_PRIMARY,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(5),
                    ),
                    padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                    onPressed: () {
                      Navigator.of(context)
                          .pushNamedAndRemoveUntil("/head", (_) => false);
                    },
                    child: Text(
                      "กลับไปยังหน้าหลัก",
                      style: TextStyle(
                        fontSize: 30,
                        color: Colors.white,
                      ),
                    ),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
