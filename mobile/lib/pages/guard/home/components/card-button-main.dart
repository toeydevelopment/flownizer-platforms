import 'package:flutter/material.dart';

class CardButtonMain extends StatelessWidget {
  final String title;
  final IconData iconData;
  final Function handleClick;

  CardButtonMain({
    @required this.title,
    @required this.iconData,
    @required this.handleClick,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: this.handleClick,
      child: Container(
        width: 200,
        height: 200,
        decoration: BoxDecoration(
            color: Theme.of(context).primaryColor,
            borderRadius: BorderRadius.circular(15)),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              Icon(
                this.iconData,
                size: 100,
                color: Colors.white,
              ),
              Text(
                this.title,
                style: TextStyle(color: Colors.white, fontSize: 25),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
