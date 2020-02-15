import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';

class CardNotifyComponent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          child: Column(
            children: <Widget>[
              SizedBox(
                height: 30,
                width: double.infinity,
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    Container(
                      width: 20,
                      height: 20,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: COLOR_PRIMARY,
                      ),
                    ),
                    SizedBox(
                      width: 10,
                    ),
                    Text(
                      "ระดมพล วันที่ 15 กุมภาพันธ์",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(
                      width: 15,
                    ),
                    Text(
                      "10 นาทีที่แล้ว",
                      style: TextStyle(
                        fontSize: 13,
                        color: COLOR_GREY_LIGHT_1,
                        fontWeight: FontWeight.w300,
                      ),
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
        Row(
          children: <Widget>[
            SizedBox(
              width: 8,
            ),
            Expanded(
              child: Container(
                  padding: EdgeInsets.all(15),
                  decoration: BoxDecoration(
                    border: Border(
                      left: BorderSide(color: COLOR_PRIMARY, width: 3),
                    ),
                  ),
                  child: Text(
                      "กรุณาระดมพล เวลา 11.00 น. เพื่อลงเวลาเข้างาน ณ ทางออก 2 ห้างสรรพสินค้า ข")),
            ),
          ],
        )
      ],
    );
  }
}
