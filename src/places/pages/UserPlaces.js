import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Catch me if you can",
    description: "Lollypops",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Throw_up_Bombing_.jpg/1280px-Throw_up_Bombing_.jpg",
    address: "19748 Avenue NY 1000",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: "u1"
  },
  {
    id: "p1",
    title: "Catch me if you can",
    description: "Lollypops",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Throw_up_Bombing_.jpg/1280px-Throw_up_Bombing_.jpg",
    address: "19748 Avenue NY 1000",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: "u2"
  }
];

const UserPlaces = props => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
