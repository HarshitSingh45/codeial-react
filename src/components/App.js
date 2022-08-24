// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
// import { getPosts } from '../api';
import { useAuth } from '../hooks';
import { Home, Login, Settings, Signup } from '../pages';
import { Loader, Navbar } from './';

const About = () => {
  return <h1>About</h1>;
};

const UserInfo = () => {
  return <h1>User</h1>;
};

// const Page404 = () => {
//   return <h1>404</h1>;
// };

function App() {
  const auth = useAuth();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();

  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }

  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home posts={[]} />} />


          <Route exct path="/login" element={<Login />} />
            

          <Route  path="/register" element={<Signup />} />
            

          <Route  path="/about" element={<About />} />
            
          <Route  path="/settings" element={<Settings />} />

          <Route exact path="/user/asdasd" element={<UserInfo />} />
            
      

          {/* <Route>
            <Page404 />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;