import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';

class TextFieldLoginComponent extends StatelessWidget {
  final IconData iconData;
  final String label;
  final Function(String title) handleCallback;

  TextFieldLoginComponent({this.iconData, this.label, this.handleCallback});

  @override
  Widget build(BuildContext context) {
    return TextField(
      onChanged: handleCallback,
      obscureText: this.label == 'รหัสผ่าน' ? true : false,
      decoration: InputDecoration(
        prefixIcon: Icon(
          this.iconData,
          color: COLOR_PRIMARY.withOpacity(.7),
        ),
        labelText: this.label,
        labelStyle: TextStyle(
          color: COLOR_PRIMARY.withOpacity(.8),
        ),
        enabledBorder: OutlineInputBorder(
          borderSide: BorderSide(
            color: COLOR_PRIMARY,
          ),
          borderRadius: BorderRadius.circular(5),
          gapPadding: 2,
        ),
        border: OutlineInputBorder(
          borderSide: BorderSide(
            color: COLOR_PRIMARY,
          ),
          borderRadius: BorderRadius.circular(5),
          gapPadding: 2,
        ),
      ),
    );
  }
}
