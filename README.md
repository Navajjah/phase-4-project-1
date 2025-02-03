# Phase-4 project, Grimoiretheque

Grimoireteque is a wizarding library platform, that borrows from the Harry Potterverse. Here users can discover, review, and favorite magical books. Each book is assigned to a Hogwarts class based on its content, helping aspiring witches and wizards enhance their studies. 
## Relevant links to backend and front end repositories and websites
- Backend: https://github.com/Navajjah/phase-4-project-backend
- Backend deployed site: https://phase-4-project-backend-q0g2.onrender.com/
- Frontend: https://github.com/Navajjah/phase-4-project-frontend
- Frontend deployed site: https://phase-4-project-frontend-4fib.vercel.app/


## Features

- 📚 View a collection of magical books categorized by Hogwarts class.

- ✍️ Write and manage reviews for each book.

- ⭐ Remove or add books to favorites, in order to create a personal reading list.

- 🔄 Full CRUD functionality for user, book and reviews.

## Technologies Used
- Frontend: React, React Router, CSS, Fetch API
- Backend: Flask, Flask-RESTful, Flask-SQLAlchemy
- Database: SQLite
- State Management: useState, useeffect

## API Endpoints

#### BOOK
| Method      | Endpoint        | Description  
|----------------|--------------|---------|
| GET | /books | Retrieves all books  | 
| POST   | /books | Creates new books  | 
| GET | /books/:id | Retrieve books by id| 
| PATCH | /books/:id | Updates a book    |
| DELETE | /books/:id | Removes a book    |
#### USER
| Method      | Endpoint        | Description  
|----------------|--------------|---------|
| GET | /users | Retrieves all users    | 
| POST   | /users | Creates users  | 
| GET | /users/:id | Retrieves all users by id | 
| PATCH | /users/:id |  Update a user   |
| DELETE | /users/:id | Remove a user    |
#### REVIEW
| Method      | Endpoint        | Description  
|----------------|--------------|---------|
| GET | /reviews | Retrieves all reviews    | 
| POST   | /reviews | Creates reviews  | 
| GET | /reviews/:id | Retrieves all reviews by id | 
| PATCH | /reviews/:id |  Updates a review   |
| DELETE | /reviews/:id | Remove a review   |

### FAVORITES
| Method      | Endpoint        | Description
|----------------|--------------|---------|
| GET | /users/:id/favorites | Retrieves all favorites by user id |
| POST | /users/:id/favorites |  Updates a favorite   |
| DELETE | /users/:id/favorites/:book_id | Remove a favorite   |

## License
This project is licensed under the MIT License.

## Acknowledgements
Grimoireteque is inspired by the magical world of Harry Potter, created by J.K. Rowling. This project is a tribute to the rich lore of the wizarding world, its spellbinding books, and the unforgettable characters who made us all wish for a letter from Hogwarts. ⚡📜

## Contact
For any questions or concerns, please contact me at [debbynav645@gmail.com].

Happy reading, witches and wizards 🧙‍♂️📖✨!
