import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'
import NewBookForm from './components/NewBookForm'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'
import NewUserForm from './components/NewUserForm'
import ReviewList from './components/ReviewList'
import NewReviewForm from './components/NewReviewForm'
//import './App.css'
import './styles.css' // Importing the new styles.css

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={BookList} />
        <Route path='/users' exact component={UserList} />
        <Route path='/reviews' exact component={ReviewList} />
        <Route path='/new-review' component={NewReviewForm} />
      </Routes>
    </Router>
  );
}

export default App;
