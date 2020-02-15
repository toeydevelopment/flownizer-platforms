import 'package:flutter/material.dart';
import "package:device_preview/device_preview.dart";
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/pages/guard/confirm/screen.dart';
import 'package:mobile/pages/guard/help/screen.dart';
import 'package:mobile/pages/guard/home/screen.dart';
import 'package:mobile/pages/guard/notification/screen.dart';
import 'package:mobile/pages/guard/time-table/screen.dart';
import 'package:mobile/pages/head-guard/home/screen.dart';

void main() => runApp(
      DevicePreview(
        builder: (context) => MyApp(),
      ),
    );

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      builder: DevicePreview.appBuilder, // <--- Add the builder
      title: 'Flutter Demo',
      theme: ThemeData(
        appBarTheme: AppBarTheme(
          elevation: 1,
        ),
        primaryColor: COLOR_PRIMARY,
        textTheme: GoogleFonts.kanitTextTheme(),
      ),
      routes: {
        "/": (ctx) => HeadGuardHomePage(),
        "/notification": (ctx) => NotificationPage(),
        "/gurad": (ctx) => GuardHomePage(),
        "/guard/help": (ctx) => GuardHelpPage(),
        "/guard/confirm": (ctx) => GuardConfirmPage(),
        "/guard/time-table": (ctx) => GuardTimeTablePage(),
      },
    );
  }
}
