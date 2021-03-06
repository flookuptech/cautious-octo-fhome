import React, { Component } from "react";
import { Loading } from "./Loading";
import axios from "axios";
import { TOMTOM_API_KEY, OPENCAGE_API_KEY } from "./secrets";
import Map from "./Map";
import "./result.css";
class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: null,
      time: null,
      loading: true,
      lat: {
        origin: null,
        dest: null,
      },
      lng: {
        origin: null,
        dest: null,
      },
      error: "",
    };
  }

  componentWillMount() {
    let distance;
    let time;
    let latorigin;
    let lngorigin;
    let latdest;
    let lngdest;
    const { origin, dest } = this.props.state;
    const self = this;
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${origin}&countrycode=in&key=${OPENCAGE_API_KEY}`
      )
      .then(function (res) {
        console.log(res);
        latorigin = res.data.results[0].geometry.lat;
        lngorigin = res.data.results[0].geometry.lng;

        axios
          .get(
            `https://api.opencagedata.com/geocode/v1/json?q=${dest}&countrycode=in&key=${OPENCAGE_API_KEY}`
          )
          .then(function (res) {
            console.log(res);
            latdest = res.data.results[0].geometry.lat;
            lngdest = res.data.results[0].geometry.lng;

            axios
              .get(
                `https://api.tomtom.com/routing/1/calculateRoute/${encodeURI(
                  `${latorigin},${lngorigin}:${latdest},${lngdest}`
                )}/json?computeBestOrder=true&traffic=false&travelMode=car&key=${TOMTOM_API_KEY}`
              )
              .then(function (response) {
                console.log(response);
                time = response.data.routes[0].summary.travelTimeInSeconds;
                distance = response.data.routes[0].summary.lengthInMeters;
                let hr, min, km, m;
                if (distance > 1000) {
                  km = Math.floor(distance / 1000);
                  m = distance % 1000;
                  distance = km + " Km " + m + " m";
                }
                if (time > 3600) {
                  hr = Math.floor(time / 3600);
                  min = Math.floor((time - hr * 3600) / 60);
                  time = hr + " Hr " + min + " min";
                } else if (time > 60) {
                  min = Math.floor(time / 60);
                  time = min + " mins";
                }

                self.setState({
                  distance: distance,
                  time: time,
                  loading: false,
                  lat: {
                    origin: latorigin,
                    dest: latdest,
                  },
                  lng: {
                    origin: lngorigin,
                    dest: lngdest,
                  },
                });
              });
          })
          .catch(function (error) {
            console.log(error);
            self.setState({
              error:
                "Entered destination pin does not exists. Provide valid pin code.",
            });
          });
      })
      .catch(function (error) {
        console.log(error);
        self.setState({
          error:
            "Entered destination pin does not exists. Provide valid pin code.",
        });
      });
  }

  componentWillUnmount() {
    this.props.toggle();
  }

  render() {
    return (
      <>
        <div className="container">
          {this.state.loading ? (
            this.state.error.length > 0 ? (
              <h5>{this.state.error}</h5>
            ) : (
              <Loading />
            )
          ) : (
            <>
              <div className="row justify-content-between result">
                <h4 className="col-md-7 col-sm-12">
                  Distance:
                  {this.state.loading ? (
                    <Loading />
                  ) : (
                    <span> {this.state.distance}</span>
                  )}
                </h4>
                <h4 className="col-md-5 col-sm-12">
                  Travel duration:
                  {this.state.loading ? (
                    <Loading />
                  ) : (
                    <span> {this.state.time}</span>
                  )}
                </h4>
              </div>
              <h6 className="text-center" style={{ color: "#2f3750" }}>
                <b>Note:</b> The calculated Distance and Travel duration are
                approximate and not exact
              </h6>
              <br />
              <div className="row justify-content-start">
                <h4 className="col-12">Route:</h4>
                {this.state.loading ? (
                  <Loading />
                ) : (
                  <Map lat={this.state.lat} lng={this.state.lng} />
                )}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Result;
