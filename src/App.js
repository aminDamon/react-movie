// import logo from './logo.svg';
// import './App.css';
// import All from './components/All';

// function App() {
//   return (
//     <div className="App">
//       <All/>
//     </div>
//   );
// }

// export default App;





// import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
// import All from './components/All';
// class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
       
//     }
//   }
  

//   render() {
//     return (
//           <div className="App">
//             <All/>
//           </div>
//         );
//   }
// }

// export default App

// function App() {
//   const [showAll, setShowAll] = useState(true);

//   const handleLinkClick = () => {
//     setShowAll(false);
//   };

//   return (
//     <div className='App'>
//       {showAll ? (
//         <All handleLinkClick={handleLinkClick} />
//       ) : (
//         // // کامپوننت جدید را اینجا قرار دهید
//         // <h1>New Component</h1>
//         <Header />
//       )}
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react'
import All from './components/All';
import logo from './logo.svg';
import './App.css';
import Watch from './components/Watch';
import { allSeriesMovie } from './components/list';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: true,
      main: "avatar"
    };
    console.log(allSeriesMovie);
  }

  handleLinkClick = (event) => {
    this.setState(
      { showAll: false,
        main: event.target.dataset.movie
     });
      window.scrollTo({top: 0 , behavior: "smooth"})

    console.log(event.target.dataset.movie);
  };

  backHomeHandler = () => {
    this.setState({ showAll: true });
    window.removeEventListener(onclick , window)
  }

  render() {
    const { showAll } = this.state;

    return (
      <div>
        {showAll ? (
          <All handleLinkClick={this.handleLinkClick} />
        ) : (
          <>
          {/* <Header backHomeHandler={this.backHomeHandler}/> */}
          <Watch backHomeHandler={this.backHomeHandler} main={this.state.main} />
          </>
        )}
      </div>
    );
  }
}

export default App;