import 'dart:async';
import 'dart:convert';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/core/components/app-bar.dart';
import 'package:qr_flutter/qr_flutter.dart';

class HeadGuardQrCheckinPage extends StatefulWidget {
  final String type;

  const HeadGuardQrCheckinPage({@required this.type});

  @override
  _HeadGuardQrCheckinPageState createState() => _HeadGuardQrCheckinPageState();
}

class _HeadGuardQrCheckinPageState extends State<HeadGuardQrCheckinPage> {
  DateTime now = DateTime.now();
  int min;

  Timer refTime;

  String txID = null;
  int n = 7;
  bool load = false;

  @override
  void initState() {
    super.initState();
    Timer.periodic(Duration(minutes: 1), (_) {
      setState(() {
        this.now = this.now.add(Duration(minutes: 1));
      });
    });
    min = now.minute + 5;
    getTXID();
  }

  void getTXID() {
    setState(() {
      this.load = true;
    });
    post(
      "https://us-central1-flownizer.cloudfunctions.net/get_txid/",
      headers: {"Content-Type": "application/json"},
      body: jsonEncode({
        "pid": "11111111111",
        "type": widget.type,
      }),
    ).then((res) {
      print(res.body);
      String txID = jsonDecode(res.body)['data']['txID'];
      print(txID);
      setState(() {
        this.load = false;
        this.txID = txID;
      });
      this.refTime = Timer.periodic(Duration(seconds: 3), (_) async {
        print("polling....");
        var res = await get(
          "https://us-central1-flownizer.cloudfunctions.net/get_txid/?txID=$txID",
          headers: {"Content-Type": "application/json"},
        );
        print(res.body);
        String isScan = jsonDecode(res.body)['data']['timeScanned'];
        print(isScan);
        if (isScan?.length > 1 && isScan != null) {
          this.refTime.cancel();
          setState(() {
            this.n++;
          });
          if (this.n == 9) {
            Navigator.of(context).pushReplacementNamed("/head/checked");
            return;
          }
          this.getTXID();
        }
      });
    });
  }

  @override
  void dispose() {
    this.refTime.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:
          AppBarME(widget.type == "CHECK_IN" ? "แสกนเข้างาน" : "แสกนออกงาน"),
      body: Column(
        children: <Widget>[
          Text(
            "เวลาเข้างาน ${this.now.hour}:${this.now.minute} น.",
            style: TextStyle(fontSize: 25),
          ),
          Center(
            child: Container(
              width: 300,
              height: 300,
              child: this.load || this.txID == null
                  ? CircularProgressIndicator()
                  : QrImage(
                      data: this.txID,
                      foregroundColor: COLOR_GREY,
                    ),
            ),
          ),
          Text(
            "หมดอายุ ${this.now.hour}:${min} น.",
            style: TextStyle(fontSize: 25),
          ),
          Expanded(
            child: Container(
              color: COLOR_PRIMARY,
              width: double.infinity,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Text(
                    "จำนวนคนที่แสกน",
                    style: TextStyle(
                      fontSize: 35,
                      letterSpacing: 1,
                      color: Colors.white,
                    ),
                  ),
                  Text.rich(
                    TextSpan(
                      text: this.n.toString(),
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 80,
                      ),
                      children: [
                        TextSpan(
                          text: "/9",
                          style: TextStyle(
                            color: COLOR_GREY.withOpacity(.7),
                            fontSize: 70,
                          ),
                        )
                      ],
                    ),
                  ),
                  FlatButton(
                    color: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(5),
                    ),
                    padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                    onPressed: () {
                      Navigator.of(context)
                          .pushReplacementNamed("/head/checked");
                    },
                    child: Text(
                      "จบการลงเวลา",
                      style: TextStyle(
                        fontSize: 30,
                        color: COLOR_PRIMARY,
                      ),
                    ),
                  )
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
