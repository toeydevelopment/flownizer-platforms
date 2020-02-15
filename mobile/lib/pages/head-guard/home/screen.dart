import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/core/components/bar-avatar.dart';
import 'package:mobile/pages/head-guard/home/components/card-place.dart';
import 'package:mobile/pages/head-guard/home/components/paginate.dart';

class HeadGuardHomePage extends StatefulWidget {
  @override
  _HeadGuardHomePageState createState() => _HeadGuardHomePageState();
}

class _HeadGuardHomePageState extends State<HeadGuardHomePage> {
  PageController _pageController;

  int page = 0;

  @override
  void initState() {
    super.initState();
    this._pageController = PageController(initialPage: this.page);
    this._pageController.addListener(() {
      if (this.page != this._pageController.page.ceil())
        setState(() {
          this.page = this._pageController.page.ceil();
        });
    });
  }

  @override
  void dispose() {
    super.dispose();
    this._pageController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            BarAvatar(),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    "พื้นที่ในการดูแล",
                    style: TextStyle(
                      color: COLOR_GREY,
                      fontWeight: FontWeight.bold,
                      fontSize: 30,
                      letterSpacing: 2,
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Center(
                    child: Container(
                      width: MediaQuery.of(context).size.width,
                      height: MediaQuery.of(context).size.height * .55,
                      child: PageView.builder(
                          controller: this._pageController,
                          itemCount: 4,
                          scrollDirection: Axis.horizontal,
                          itemBuilder: (BuildContext context, int index) {
                            return Container(
                              width: MediaQuery.of(context).size.width,
                              height: MediaQuery.of(context).size.height * .55,
                              child: Column(
                                children: <Widget>[
                                  CardPlaceComponent(),
                                  CardPlaceComponent(),
                                ],
                              ),
                            );
                          }),
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Center(
                    child: PaginateComponent(
                      pages: 4,
                      pageSelect: this.page,
                    ),
                  ),
                ],
              ),
            ),
            Center(
              child: FlatButton(
                onPressed: () {
                  Navigator.of(context).pushNamed("/guard/help");
                },
                child: Text(
                  "แจ้งเหตุฉุกเฉิน",
                  style: TextStyle(
                    fontSize: 30,
                    color: COLOR_GREY,
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
