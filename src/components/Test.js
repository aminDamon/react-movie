// import React, { Component } from 'react'
// import TestOne from './TestOne'
// import TestTwo from './TestTwo'
// class Test extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          compo: TestOne,
//          flag: true
//       }
      
//     }
    
//     firstNameHandler() {
//         const {flag} = this.state
//         if (flag) {
//             this.setState({
//                 compo: TestTwo,
//                 flag: false
//             })
//         } else {
//             this.setState({
//                 compo: TestOne,
//                 flag: true
//             })
//         }
            
//     }
//   render() {
//     const Compo = this.state.compo
//     return (
//       <div>
//         <Compo />
//         <button onClick={() => {this.firstNameHandler()}}>click</button>
//       </div>
//     )
//   }
// }

// export default Test