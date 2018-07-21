import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  //<Menu.Item>CrowdCoin</Menu.Item>     since styling of Link and Menu.Item conflict
  // className="item" gives the 'hover' effect and 'right-click' functionality to the link
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">Home</a>
      </Link>

      <Menu.Menu position="right">

        <Link route="/campaigns/new">
          <a className="item">Create Need</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
