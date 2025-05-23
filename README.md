# Todo List Application

A full-stack todo list application with user authentication, task management, and profile updates.

## Features

- User authentication (register, login, dummy login)
- JWT-based authentication
- Todo list management (create, read, update, delete)
- User profile management
- Responsive design

## Tech Stack

### Frontend

- React with TypeScript
- Axios for API requests
- React Router for navigation

### Backend

- Java
- Spring Boot
- Spring Security
- JPA/Hibernate
- JWT Authentication

## Prerequisites

- Java 17
- Maven
- npm (v11.3.0)
- PostgreSQL

## Installation 

### Backend
1. Clone Repository 

```
git clone https://github.com/weilunchen210/TodoList.git 
cd TodoList
```
2. Rename "application.template.properties" as "application.properties" and fill in your environment variables

```
### application.properties Template ###

spring.application.name=todolist

# Server configuration
server.port=8080

# PostgreSQL DB configuration
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=
spring.datasource.driver-class-name=

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=
spring.jpa.show-sql=
spring.jpa.properties.hibernate.dialect=

#JWT config
jwt.secret=
jwt.expirationMs=


frontend_URL=
```

4. Build and run Spring Boo application

```
# The API will be available at http://localhost:8080
mvn spring-boot-run
```

### Frontend

1. Install frontend dependencies

```
cd frontend
```

2. Install frontend dependencies
```
npm install
```

3. Rename ".env.example" as "env" and fill in your environment variables

```
### .env template ###

VITE_API_URL=
```

5. Start server
```
# The frontend will be available at http://localhost:5173
npm run dev

```

## API Endpoints

### User Management

- `POST /user/register` - Register a new user
- `POST /user/login` - Authenticate user
- `PUT /user/edit` - Update user profile
- `POST /user/dummyLogin` - Quick login with test account

### Todo Management

- `GET /todo/{id}` - Get todo by ID
- `GET /todo/user` - Get user's todo list
- `POST /todo` - Create a new todo
- `PUT /todo/{id}` - Update a todo
- `DELETE /todo/{id}` - Delete a todo

## Screenshots

![Image](https://github.com/user-attachments/assets/98406aed-bb02-4f84-86aa-56d3b16e5433)

![Image](https://github.com/user-attachments/assets/8f6a5271-3003-43f2-9e1e-6a56c7c9390c)

![Image](https://github.com/user-attachments/assets/8cfa36b0-e41c-4ecc-b787-d948cc1beb1e)

![Image](https://github.com/user-attachments/assets/c4233721-0e68-4986-aaf6-f7641e7198d3)

## License

MIT License
