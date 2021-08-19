import React from 'react';
import './App.css';
import TodoList from './features/todos/components/TodoList';
import NotFoundPage from './features/notfoundpage/NotFoundPage';
import DoneList from './features/todos/components/DoneList';
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import {useEffect} from 'react';

function App() {

    useEffect(() => {
      document.title = "Joanna";
    }, []);


  return (
    <React.Fragment>
    <BrowserRouter>
      <ul>
        <ArrowLeftOutlined className = "colorDesign"/> <Link to="/" className = "textDesign">Todo Page</Link><span>..............................................................................................................</span>   
        <Link to="/done" className = "textDesign">Done Page </Link><ArrowRightOutlined />
      </ul>
      <Switch>
        <Route exact path = "/" component = {TodoList}></Route>
        <Route exact path = "/done" component = {DoneList}></Route>
        <Route path = "*" component = {NotFoundPage}></Route> 
        {/* path = "*" - put it in the last */}
      </Switch>
    </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
