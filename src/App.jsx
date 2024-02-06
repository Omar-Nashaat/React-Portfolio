import React, { Component } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/portfolio/Portfolio';


const myRouter = createBrowserRouter([

  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '*', element: <Home /> },

])


class App extends Component {
  render() {
    return (
      <>
        {/* <Nav /> */}
        <RouterProvider router={myRouter} />
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;