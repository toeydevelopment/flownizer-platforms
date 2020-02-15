import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';

class PaginateComponent extends StatelessWidget {
  int pages;
  int pageSelect;

  PaginateComponent({
    @required this.pages,
    @required this.pageSelect,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 12,
      width: 150,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: List.generate(this.pages, (int index) {
          return Container(
            width: 10,
            height: 10,
            decoration: BoxDecoration(
              color:
                  this.pageSelect== index ? COLOR_PRIMARY : COLOR_GREY_LIGHT_1,
              shape: BoxShape.circle,
            ),
          );
        }),
      ),
    );
  }
}
