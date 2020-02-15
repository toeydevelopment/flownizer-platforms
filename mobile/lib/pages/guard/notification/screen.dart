import 'package:flutter/material.dart';
import 'package:mobile/core/components/app-bar.dart';
import 'package:mobile/pages/guard/notification/components/card-notify.dart';

class NotificationPage extends StatefulWidget {
  @override
  _NotificationPageState createState() => _NotificationPageState();
}

class _NotificationPageState extends State<NotificationPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarME("การแจ้งเตือน"),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(
            vertical: 10,
            horizontal: 10,
          ),
          child: Column(
            children: <Widget>[
              CardNotifyComponent(),
              SizedBox(
                height: 20,
              ),
              CardNotifyComponent(),
            ],
          ),
        ),
      ),
    );
  }
}
