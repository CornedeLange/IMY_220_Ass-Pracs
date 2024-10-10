import React from "react";
//import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
},
{
    path: "/posts",
    element: <Posts />,
}
]);

class App extends React.Component{
    render(){
        return(
            // <BrowserRouter>
            //     <div>
            //         <Routes>
            //             <Route path="/" element={<Home />} />
            //             <Route path="/posts" element={<Posts />} />
            //         </Routes>
            //     </div>
            // </BrowserRouter>
            <RouterProvider router={router}>
            </RouterProvider>

        );
    }
}

export default App;