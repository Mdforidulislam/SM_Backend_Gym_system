# Fitness Tracking System API

## Project Overview
This is a fitness class booking and management system API that allows trainers and users to schedule, book and manage fitness classes. The system handles user authentication, class scheduling, booking management and trainer assignments.

## Relation Diagram
[View Database Relation Diagram](https://lucid.app/lucidchart/64630d7c-8d19-4ca1-90a7-cbcc1b1b899b/edit?viewport_loc=68%2C304%2C2217%2C1087%2C0_0&invitationId=inv_45dd631e-07d8-4b7c-b4ea-f7b643eba5cb)
## Application diagram
[view application Diagram](https://lucid.app/lucidchart/bde22bfc-b4cb-4c22-8ef7-038c5662a01e/edit?viewport_loc=-3606%2C-520%2C2740%2C1343%2C0_0&invitationId=inv_0b438628-b8a0-4ba3-bf2a-8a3627d3d65b)
## application end point documtion
[end point Documtion](https://docs.google.com/document/d/1KVronffBZZiTXyuKZWUwG-cFnid1uFIt1H5J__Se5z0/edit?usp=sharing)

### Postman share end point 
[view postMan share file here](https://winbd-team.postman.co/workspace/winbd-team~6fc906d6-772c-4bcf-8493-0399629c3ba6/collection/34518195-19a77fe9-540a-4aeb-8926-460e049bb588?action=share&creator=34518195)

## Technology Stack
- TypeScript - Programming Language
- Express.js - Web Framework
- Mongoose - MongoDB ODM
- MongoDB - Database
- JWT - Authentication


## API Endpoints

### Auth Routes
- POST /api/v1/auth/logout - Register new user
- POST /api/v1/auth/login - User login


### Class Routes 
- POST /api/v1/create-class - Create a class
- GET /api/v1/get-all-classes - Get all classes
- GET /api/v1/get-class-by-id - Get class by ID trainer info
- put /api/v1/update-class - Update class 
- DELETE /api/v1/delete-class - Delete class

### Booking Routes
- POST /api/v1/book-class - Book a class
- GET /api/v1/edit-booking - Get all bookings


## Database Schema

### User Model



## Database Connection Setup

### Environment Variables (.env)
Create a `.env` file in the root directory with the following configurations:
 

 





