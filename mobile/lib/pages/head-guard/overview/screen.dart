import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/pages/head-guard/overview/components/card-work.dart';
import 'package:sliding_up_panel/sliding_up_panel.dart';

class HeadGuardOverViewPage extends StatefulWidget {
  final String place;

  HeadGuardOverViewPage(this.place);

  @override
  _HeadGuardOverViewPageState createState() => _HeadGuardOverViewPageState();
}

class _HeadGuardOverViewPageState extends State<HeadGuardOverViewPage> {
  Widget _buildRowButtons() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: <Widget>[
        FlatButton(
          color: COLOR_PRIMARY,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(5),
          ),
          onPressed: () {
            Navigator.of(context).pushNamed("/head/checkin");
          },
          child: Text(
            "ลงเวลาเข้างาน",
            style: TextStyle(
              color: Colors.white,
              fontSize: 15,
              letterSpacing: 1,
            ),
          ),
        ),
        FlatButton(
          color: COLOR_PRIMARY,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(5),
          ),
          onPressed: () {},
          child: Text(
            "ลงเวลาออกงาน",
            style: TextStyle(
              color: Colors.white,
              fontSize: 15,
              letterSpacing: 1,
            ),
          ),
        )
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          GoogleMap(
            initialCameraPosition: CameraPosition(
              target: LatLng(10, 12),
            ),
          ),
          SlidingUpPanel(
              maxHeight: MediaQuery.of(context).size.height - 50,
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(40),
                topRight: Radius.circular(40),
              ),
              panelBuilder: (sc) => ListView(
                    controller: sc,
                    children: <Widget>[
                      this._buildRowButtons(),
                      SizedBox(
                        height: 20,
                      ),
                      Column(
                        children: List.generate(
                          6,
                          (i) => Padding(
                            padding: const EdgeInsets.only(bottom: 10),
                            child: HeadGuardCardWorkComponent(
                              name: "กฤตพัทธ์ จันทร์อังคาร์",
                              time: "8.00 น.",
                              place: "ทางเข้าถนนใหญ่",
                              status: i % 3 == 0
                                  ? STATUS.PENDING
                                  : i % 4 == 0 ? STATUS.DONE : STATUS.CURRENT,
                            ),
                          ),
                        ),
                      )
                    ],
                  ),
              body: GoogleMap(
                initialCameraPosition: CameraPosition(
                  target: LatLng(10, 12),
                ),
              ))
        ],
      ),
    );
  }
}
