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





import React, { Component } from 'react'
import All from './components/All';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';

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



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: true,
      main: "avatar"
    };
  }

  handleLinkClick = (event) => {
    this.setState(
      { showAll: false,
        main: event.target.dataset.movie
     });
    console.log(event.target.dataset.movie);
  };

  backHomeHandler = () => {
    this.setState({ showAll: true });
  }

  render() {
    const { showAll } = this.state;

    return (
      <div>
        {showAll ? (
          <All handleLinkClick={this.handleLinkClick} />
        ) : (
          <Header backHomeHandler={this.backHomeHandler}/>
        )}
      </div>
    );
  }
}

export default App;