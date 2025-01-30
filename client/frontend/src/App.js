import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '/components/Navbar'
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'
import NewBookForm from './components/NewBookForm'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'
import NewUserForm from './components/NewUserForm'
import ReviewList from './components/ReviewList'
import NewReviewForm from './components/NewReviewForm'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact Component={BookList} />
        <Route path='/books/:id' component={BookDetail} />
        <Route path='/new-book' component={NewBookForm} />
        <Route path='/users' exact Component={UserList} />
        <Route path='/users/:id' component={UserDetail} />
        <Route path='/new-user' component={NewUserForm} />
        <Route path='/reviews' exact Component={ReviewList} />
        <Route path='/new-review' component={NewReviewForm} />

      </Switch>
    </Router>
  );
}

export default App;
