import React from 'react';

import PrivateHeaderNav from './PrivateHeaderNav';
import DashboardControls from './DashboardControls';

export default () => {
  return (
    <div>
      <PrivateHeaderNav title="Your Deals Dashboard"/>
      <div className="content">
        <DashboardControls/>
      </div>
    </div>
  );
};

// export default class Dashboard extends React.Component {
//   // onLogout() {
//   //   Accounts.logout();
//   render() {
//     return (
//       <div>
//         <PrivateHeaderNav title="Deals Dashboard"/>
//       </div>
//     );
//   }
// }
