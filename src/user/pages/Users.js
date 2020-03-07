import React from "react";

import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [
      {
        id: "u1",
        name: "Some Chick  ",
        image:
          "https://sf-cdn.fra1.cdn.digitaloceanspaces.com/357650/conversions/ruby-modine_0-medium.jpg",
        places: 3
      }
    ];

  return <UsersList items={USERS}/>;
};

export default Users;
