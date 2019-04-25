// import React, { Component } from 'react'

// class DemoUseEffect extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }
//   componentDidMount() {
//     const {
//       count
//     } = this.state
//     document.title = `You clicked ${count} times`
//   }
//   componentDidUpdate() {
//     const {
//       count
//     } = this.state
//     document.title = `You clicked ${count} times`
//   }
//   render() {
//     const {
//       count
//     } = this.state;
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => this.setState({ count: count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

// export default DemoUseEffect;

import React, { useState, useEffect } from 'react';

function DemoUseEffect() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default DemoUseEffect;