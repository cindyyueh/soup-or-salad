'use client';
import { useEffect, useState } from 'react';

export default function geoFindMe() {
  var latitude = 0;
  var longitude = 0;

  if (navigator.geolocation) {
    console.log('navigator geolocation exists');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        return [latitude, longitude];
      },
      (err) => console.log(err.message),
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}
