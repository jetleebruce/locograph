import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";

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
      lng: -73.9878584,
    },
    creator: "u1",
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
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className='center'>
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id='title'
        element='input'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid description min 5 characters'
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description min 5 characters'
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type='submit' disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
