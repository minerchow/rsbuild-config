import React from 'react';
import { useEffect } from 'react';
import { Button } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// 使用 React.lazy 进行懒加载
const Home = React.lazy(() => import('@/pages/home'));
const About = React.lazy(() => import('@/pages/about'));
const Contact = React.lazy(() => import('@/pages/contract'));
import './App.scss';

const App = () => {
  useEffect(() => {
    //@ts-expect-error CROSS_ENV由cross-env注入环境变量
    console.log('App mounted',CROSS_ENV);
   
    return () => {
      console.log('App unmounted');
    };
  }, []);

  return (
    <div className="content">
      <h1>Rsbuild with React12</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button>12</Button>
      <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* 使用 React.Suspense 包裹 Routes，设置加载时的提示信息 */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </React.Suspense>
    </Router>
    </div>
  );
};

export default App;