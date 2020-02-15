import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:http/http.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/core/components/bar-avatar.dart';
import 'package:mobile/pages/guard/home/components/card-button-main.dart';
import 'package:qrcode/qrcode.dart';

class GuardHomePage extends StatefulWidget {
  @override
  _GuardHomePageState createState() => _GuardHomePageState();
}

class _GuardHomePageState extends State<GuardHomePage> {
  QRCaptureController _captureController;

  bool isScanned = false;
  bool isLoad = false;

  @override
  void initState() {
    super.initState();

    this._captureController = QRCaptureController();

    this._captureController.onCapture((data) {
      setState(() {
        this.isScanned = false;
      });
      setState(() {
        this.isLoad = true;
      });
      put("https://us-central1-flownizer.cloudfunctions.net/get_txid/",
          body: jsonEncode({
            "txID": data,
            "pid": "1100501439614",
          }),
          headers: {
            "Content-Type": "application/json",
          }).then((res) {
        if (res.statusCode == 202) {
          setState(() {
            this.isLoad = false;
          });
          Navigator.of(context).pushReplacementNamed("/guard/confirm");
        }
      });
    });
  }

  void handleCaptureQrcode() {
    setState(() {
      this.isScanned = true;
    });
  }

  @override
  void dispose() { 
    this._captureController.pause();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Column(
              children: <Widget>[
                BarAvatar(),
                SizedBox(
                  height: 10,
                ),
                GestureDetector(
                  onTap: () {
                    Navigator.of(context).pushNamed("/notification");
                  },
                  child: Container(
                    width: double.infinity,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: <Widget>[
                        Icon(
                          Icons.notifications_none,
                          color: COLOR_PRIMARY,
                          size: 40,
                        ),
                        SizedBox(
                          width: 5,
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
            this.isLoad
                ? Container(
                    child: CircularProgressIndicator(),
                  )
                : Container(
                    height: 450,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: <Widget>[
                        this.isScanned
                            ? ClipRRect(
                                borderRadius: BorderRadius.circular(15),
                                child: Container(
                                  width: 200,
                                  height: 200,
                                  child: QRCaptureView(
                                    controller: this._captureController,
                                  ),
                                ),
                              )
                            : CardButtonMain(
                                title: "แสกน",
                                iconData: FontAwesomeIcons.qrcode,
                                handleClick: this.handleCaptureQrcode,
                              ),
                        CardButtonMain(
                          title: "ตารางงาน",
                          iconData: Icons.access_time,
                          handleClick: () {
                            Navigator.of(context)
                                .pushNamed("/guard/time-table");
                          },
                        ),
                      ],
                    ),
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
