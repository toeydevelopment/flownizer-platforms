import 'dart:async';

import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:mobile/constants.dart';

const POLYGONN = [
  [100.5405363, 13.7472399],
  [100.5402574, 13.7455933],
  [100.5396136, 13.7444157],
  [100.5376717, 13.745041],
  [100.5368241, 13.7466459],
  [100.5371567, 13.7474796],
  [100.5383905, 13.7483759],
  [100.540547, 13.7472399]
];

class MapComponent extends StatefulWidget {
  @override
  _MapComponentState createState() => _MapComponentState();
}

class _MapComponentState extends State<MapComponent> {
  GoogleMapController _controller;
  Map<PolygonId, Polygon> polygons = <PolygonId, Polygon>{};
  final initLocation = CameraPosition(
    target: LatLng(13.7466304, 100.5371464),
    zoom: 16.3,
  );

  BitmapDescriptor _markerIcon;

  @override
  void initState() {
    super.initState();
    this._add();
  }

  @override
  void dispose() {
    super.dispose();
  }

  void _add() {
    final String polygonIdVal = 'polygon_id_00922';
    final PolygonId polygonId = PolygonId(polygonIdVal);
    final Polygon polygon = Polygon(
      polygonId: polygonId,
      consumeTapEvents: true,
      strokeColor: COLOR_PRIMARY,
      strokeWidth: 1,
      fillColor: COLOR_PRIMARY.withOpacity(.3),
      points: _createPoints(),
      onTap: () {
        // _onPolygonTapped(polygonId);
      },
    );

    setState(() {
      polygons[polygonId] = polygon;
    });
  }

  List<LatLng> _createPoints() {
    final List<LatLng> points = <LatLng>[];
    POLYGONN.forEach((p) {
      points.add(this._createLatLng(p[1], p[0]));
    });
    return points;
  }

  LatLng _createLatLng(double lat, double lng) {
    return LatLng(lat, lng);
  }

  Future<void> _createMarkerImageFromAsset(BuildContext context) async {
    if (_markerIcon == null) {
      final ImageConfiguration imageConfiguration =
          createLocalImageConfiguration(context);
      BitmapDescriptor.fromAssetImage(
              imageConfiguration, 'assets/Flownizer.png')
          .then(_updateBitmap);
    }
  }

  void _updateBitmap(BitmapDescriptor bitmap) {
    setState(() {
      _markerIcon = bitmap;
    });
  }

  @override
  Widget build(BuildContext context) {
    //  _createMarkerImageFromAsset(context);
    return GoogleMap(
      polygons: Set<Polygon>.of(polygons.values),
      markers: <Marker>[
        Marker(
          markerId: MarkerId("marker_1"),
          position: LatLng(13.7466304, 100.5371464),
          icon: _markerIcon,
        ),
      ].toSet(),
      initialCameraPosition: this.initLocation,
      onMapCreated: (map) {
        setState(() {
          this._controller = map;
        });
      },
    );
  }
}
