
# MovieMania

MovieMania is a movie review and rating platform that allows users to browse movies, provide reviews, and rate them. The project is built using **Angular** for the frontend and **Spring Boot** for the backend, with separate modules for users and administrators.

## Features

### User Module:
- Browse a variety of movies.
- Rate movies and write reviews.
- View ratings and reviews from other users.
- Search movies by title.

### Admin Module:
- Add, update, and delete movies in the system.
- Manage user reviews and ratings.
- Perform administrative tasks like viewing user data.

### Tech Stack:
- **Frontend**:HTML, CSS, JavaScript, Angular, Bootstrap, Angular Material UI, Font Awesome
- **Backend**: Spring Boot, RESTful API
- **Database**: MySQL 

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/daradeepak/MOVIEMANIA.git
   ```

2. Navigate to the project directory for both frontend and backend.

### Frontend Setup

1. Navigate to the Angular project folder:
   ```bash
   cd MovieMania/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Angular development server:
   ```bash
   ng serve
   ```

### Backend Setup

1. Navigate to the Spring Boot project folder:
   ```bash
   cd MovieMania/backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the backend server:
   ```bash
   mvn spring-boot:run
   ```

## Usage

- **User Access**: Users can register, browse movies, provide ratings and reviews.
- **Admin Access**: Admins can manage movie data, and control user reviews and ratings.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.
