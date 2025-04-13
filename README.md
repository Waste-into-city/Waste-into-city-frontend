# Waste into city

## Frontend part

This repository contains source code for frontend part of the "Waste into city" application.

### Deploy

Public deploy is [here](https://waste-into-city-frontend-pearl.vercel.app/).

### Architecture

The frontend is a Single-page application with Client-side rendering.

### Technologies

Used technologies are:

- TypeScript
- React
- Zustand
- Styled-components
- Zod
- Vitest
- React Testing Library
- Vite
- Yandex Maps API
- React Router
- GitHub Actions

### Routes

The application routes are:

- **_/_** - main application page
- **_/signup_** - sign up page
- **_/login_** - log in page
- **_/works_** - list of user's works
- **_/account_** - user's account information and settings
- **_/account/:id_** - basic information on any user
- **_/newwork_** - new work creator
- **_/work/:id_** - work information
- **_/trashcan/:id_** - trashcan information
- **_/newtrashcan_** - new trashcan creator (for Admins only)
- **_/reports_** - list of user reports (for Moderators only)
- **_/report/:id_** - report information

### States

Work:

- **_Pending_** - waiting for moderator to approve
- **_Active_** - approved by moderator
- **_In Progress_** - is currently in progress
- **_Successful_** - finished successfuly
- **_Unknown_** - should have ended but for some reason hasn't

Trashcan occupancy:

- **_Empty_** - nearly 0%
- **_Sparse_** - nearly 25%
- **_Medium_** - nearly 50%
- **_Almost Full_** - nearly 75%

Trashcan type:

- **_Mixed_**
- **_Plastic_**
- **_Electronic_**
- **_Glass_**
- **_Batteries_**
