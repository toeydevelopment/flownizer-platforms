import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/core/components/bar-avatar.dart';
import 'package:mobile/pages/guard/home/components/card-button-main.dart';

class GuardHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            BarAvatar(),
            CardButtonMain(
              title: "ตารางงาน",
              iconData: Icons.access_time,
              handleClick: () {
                Navigator.of(context).pushNamed("/guard/time-table");
              },
            ),
            CardButtonMain(
              title: "แสกน",
              iconData: FontAwesomeIcons.qrcode,
              handleClick: () {
              },
            ),
           
            FlatButton(
              onPressed: () {
                Navigator.of(context).pushNamed("/guard/help");
              },
              child: Text(
                "แจ้งเหตุฉุกเฉิน",
                style: TextStyle(
                  fontSize: 30,
                  color: COLOR_GREY,
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
