import React from "react";
import { Component } from "react";

export default class Widget extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://ticketmaster-api-staging.github.io/products-and-docs/widgets/event-discovery/1.0.0/lib/main-widget.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "w-type": "event-discovery",
      "w-tmapikey": "oGfB9moRTPyVnKLJHowq3XANU6acUF4b",
      "w-googleapikey": "AIzaSyAr9ipwI-lyXYSq3UH8SZk23md2Wt6t77M",
      "w-keyword": "",
      "w-theme": "simple",
      "w-colorscheme": "light",
      "w-height": "286",
      "w-size": "20",
      "w-border": "2",
      "w-borderradius": "10",
      "w-postalcode": "",
      "w-radius": "25",
      "w-city": "",
      "w-period": "month",
      "w-layout": "horizontal",
      "w-attractionid": "",
      "w-promoterid": "",
      "w-venueid": "",
      "w-affiliateid": "",
      "w-segmentid": "",
      "w-proportion": "custom",
      "w-titlelink": "off",
      "w-sorting": "dateAscending",
      "w-id": "id_1mi4x7",
      "w-countrycode": "ES",
      "w-source": "",
      "w-branding": "Ticketmaster",
      "w-latlong": "",
    });
    document.getElementById("myContainer").appendChild(script);
  }
  render() {
    return <div id="myContainer"></div>;
  }
}
