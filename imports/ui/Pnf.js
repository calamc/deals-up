import React from 'react';
import { Link } from 'react-router';

// stateless functional component
export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__whitebox">
        <h1>Page not found!</h1>
        <p>Opps, wrong link. Go back or visit the homepage.</p>
        <Link className="btn btn--link" to="/">Homepage</Link>
      </div>
    </div>
  );
}

// export default class Pnf extends React.Component {
//   render() {
//     return (
//       <div className="boxed-view">
//         <div className="boxed-view__whitebox">
//           <h1>Page not found!</h1>
//           <p>Opps, wrong link. Go back or visit the homepage.</p>
//           <Link className="btn btn--link" to="/">Homepage</Link>
//         </div>
//       </div>
//     );
//   }
// }
