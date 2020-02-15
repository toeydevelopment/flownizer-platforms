import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';

class CardPlaceComponent extends StatelessWidget {
  Widget _buildRow(String title, String desc) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.start,
      children: <Widget>[
        Container(
          width: 100,
          child: Text(title,
              style: TextStyle(fontSize: 18, color: COLOR_GREY_LIGHT_1)),
        ),
        Expanded(
            child: Text(desc,
                style: TextStyle(
                  fontSize: 16,
                  color: COLOR_GREY,
                ))),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.of(context).pushReplacementNamed("/head/overview/test");
      },
      child: Container(
        padding: EdgeInsets.all(10),
        width: MediaQuery.of(context).size.width * 1,
        child: Container(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(10),
            boxShadow: [
              BoxShadow(
                blurRadius: 5,
                spreadRadius: 5,
                color: Colors.grey[300].withOpacity(.7),
              )
            ],
          ),
          child: Column(
            children: <Widget>[
              Container(
                padding: EdgeInsets.all(10),
                width: double.infinity,
                decoration: BoxDecoration(
                  color: COLOR_PRIMARY,
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(10),
                    topRight: Radius.circular(10),
                  ),
                ),
                child: Text(
                  "โรงแรม A",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    fontWeight: FontWeight.w800,
                    letterSpacing: 1,
                  ),
                ),
              ),
              Container(
                padding: EdgeInsets.symmetric(
                  horizontal: 20,
                  vertical: 10,
                ),
                child: Column(
                  children: <Widget>[
                    this._buildRow("วันที่", "15 กุมภาพันธ์"),
                    SizedBox(
                      height: 10,
                    ),
                    this._buildRow("เวลา", "12.00 น. - 20.00 น."),
                    SizedBox(
                      height: 10,
                    ),
                    this._buildRow("จำนวน", "12 คน"),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
