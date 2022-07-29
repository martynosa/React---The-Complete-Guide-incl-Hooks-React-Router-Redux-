import React from 'react';

import Card from '../UI/Card';
import Style from './UserList.module.css';

const UsersList = (props) => {
  return (
    <Card className={Style.users}>
      <ul>
        {props.users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
