import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/pages/common/login/components/text-field.dart';

class CommonLoginPage extends StatelessWidget {
  String username;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: COLOR_PRIMARY,
      body: SingleChildScrollView(
        child: Container(
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              CircleAvatar(
                backgroundColor: Colors.grey,
                maxRadius: 100,
                child: FlutterLogo(
                  size: 100,
                ),
              ),
              Container(
                height: MediaQuery.of(context).size.height * .5,
                width: MediaQuery.of(context).size.width * .8,
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 20, vertical: 5),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: <Widget>[
                      Text(
                        "ลงชื่อเข้าใช้",
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 35,
                          letterSpacing: 2,
                        ),
                      ),
                      TextFieldLoginComponent(
                        label: "ชื่อผู้ใช้",
                        iconData: FontAwesomeIcons.user,
                        handleCallback: (String value) {
                          username = value;
                        },
                      ),
                      TextFieldLoginComponent(
                        label: "รหัสผ่าน",
                        iconData: FontAwesomeIcons.lock,
                        handleCallback: (String value) {},
                      ),
                      Column(
                        children: <Widget>[
                          RaisedButton(
                            onPressed: () {
                              if (this.username == "headguard")
                                Navigator.of(context).pushReplacementNamed("/head");
                              else
                                Navigator.of(context).pushReplacementNamed("/guard");
                            },
                            color: COLOR_PRIMARY,
                            child: Text(
                              "เข้าสู่ระบบ",
                              style: TextStyle(
                                fontSize: 20,
                                color: Colors.white,
                              ),
                            ),
                          ),
                          FlatButton(
                            onPressed: () {},
                            child: Text(
                              "สมัครสมาชิก",
                              style: TextStyle(
                                fontSize: 20,
                                color: COLOR_PRIMARY,
                              ),
                            ),
                          )
                        ],
                      )
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
