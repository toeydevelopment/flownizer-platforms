import 'package:flutter/material.dart';
import 'package:mobile/core/components/bar-avatar.dart';

class HeadGuardHomePage extends StatefulWidget {
  @override
  _HeadGuardHomePageState createState() => _HeadGuardHomePageState();
}

class _HeadGuardHomePageState extends State<HeadGuardHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: <Widget>[
            BarAvatar(),
          ],
        ),
      ),
    );
  }
}
