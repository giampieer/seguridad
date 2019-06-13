import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController,private googleMaps: GoogleMaps) {

  }
  ionViewDidLoad(){
    this.loadMap();
  }
  loadMap(){

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904, // default location
          lng: -89.3809802 // default location
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        // Now you can use all methods safely.
        this.getPosition();
        this.showMarkers();
      })
      .catch(error =>{
        console.log(error);
      });

  }
  getPosition(): void{
    this.map.getMyLocation()
      .then(response => {
        this.map.moveCamera({
          target: response.latLng
        });
        this.map.addMarker({
          title: 'My Position',
          icon: 'blue',
          animation: 'DROP',
          position: response.latLng
        });
      })
      .catch(error =>{
        console.log(error);
        console.log('No te va a salir prro');
      });
  }

  showMarkers() {
    this.map.addMarker({
      title: 'marcador1',
      icon: 'blue',
      position : {
        lat: -12.1954,
        lng: -76.9719
      }
    });
    this.map.addMarker({
      title: 'marcador2',
      icon: 'blue',
      position : {
        lat: -12.205902,
        lng: -76.940718
      }
    });
    this.map.addMarker({
      title: 'marcador3',
      icon: 'blue',
      position : {
        lat: -12.759101,
        lng: -76.600590
      }
    });
    this.map.addMarker({
      title: 'marcador4',
      icon: 'blue',
      position : {
        lat: -12.665943,
        lng: -76.630459
      }
    });
  }

}
