import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/constants.dart';

class AppBarME extends StatelessWidget implements PreferredSizeWidget {
  final String title;

  AppBarME(this.title);

  @override
  AppBar build(BuildContext context) {
    return AppBar(
      automaticallyImplyLeading: true,
      backgroundColor: Colors.white,
      title: Text(
        this.title,
        style: GoogleFonts.kanit(
          color: COLOR_GREY,
          fontSize: 30,
          letterSpacing: 2,
        ),
      ),
    );
  }

  @override
  // TODO: implement preferredSize
  Size get preferredSize => Size(double.infinity, 50);
}
