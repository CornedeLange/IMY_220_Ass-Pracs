import React from "react";
//import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
// import Posts from "./pages/Posts";
import WithParams from "./pages/Posts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/", element: <Home />
    },
    {
        path: "/posts/:userId", element: <WithParams />
    }
])

class App extends React.Component{
    render(){
        return(
            <RouterProvider router={router} >
            </RouterProvider>
        );
    }
}

export default App;