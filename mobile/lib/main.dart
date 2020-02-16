import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/pages/common/login/screen.dart';
import 'package:mobile/pages/guard/confirm/screen.dart';
import 'package:mobile/pages/guard/help/screen.dart';
import 'package:mobile/pages/guard/home/screen.dart';
import 'package:mobile/pages/guard/notification/screen.dart';
import 'package:mobile/pages/guard/time-table/screen.dart';
import 'package:mobile/pages/head-guard/home/screen.dart';
import 'package:mobile/pages/head-guard/overview/screen.dart';
import 'package:mobile/pages/head-guard/qr-checking/screen.dart';
import 'package:mobile/pages/head-guard/qr-done/screen.dart';

void main() => runApp(
      // DevicePreview(
      // builder: (context) =>
      MyApp(),
      // ),
    );

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      // builder: DevicePreview.appBuilder, // <--- Add the builder
      title: 'Flutter Demo',
      theme: ThemeData(
        appBarTheme: AppBarTheme(
          elevation: 1,
        ),
        primaryColor: COLOR_PRIMARY,
        textTheme: GoogleFonts.kanitTextTheme(),
      ),
      routes: {
        "/": (ctx) => CommonLoginPage(),
        "/notification": (ctx) => NotificationPage(),
        "/head": (ctx) => HeadGuardHomePage(),
        // "/head/confirm": (ctx) => HeadGuardQrDonePage(),
        // "/head/checkin": (ctx) => HeadGuardQrCheckinPage(),
        "/head/checked": (ctx) => HeadGuardQrDonePage(),
        "/guard": (ctx) => GuardHomePage(),
        "/guard/help": (ctx) => GuardHelpPage(),
        "/guard/confirm": (ctx) => GuardConfirmPage(),
        "/guard/time-table": (ctx) => GuardTimeTablePage(),
      },
      onGenerateRoute: (RouteSettings settings) {
        var paths = settings.name.split("/");

        if (paths[1] == "head") {
          if (paths[2] == "check") {
            return MaterialPageRoute(
                builder: (ctx) => HeadGuardQrCheckinPage(
                      type: paths[3],
                    ));
          }
          if (paths[2] == "overview") {
            return MaterialPageRoute(
              builder: (ctx) => HeadGuardOverViewPage(
                paths[3],
              ),
            );
          }
        }
      },
    );
  }
}
