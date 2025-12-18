# z

Backend API for z

## Tech Stack

- **Frontend**: React
- **Backend**: FastAPI + SQLAlchemy
- **Frontend Source**: GitHub ([Repository](https://github.com/HimaShankarReddyEguturi/Hotelbookinguidesign.git))

## Project Structure

```
z/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- user registration
- user login
- password reset
- resource creation
- resource update
- resource deletion

## API Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login an existing user
- `POST /api/users/password_reset` - Reset a user's password
- `GET /api/users/profile` - Get a user's profile information
- `PUT /api/users/profile` - Update a user's profile information
- `DELETE /api/users/profile` - Delete a user's account
- `GET /api/resources` - Get a list of available resources
- `GET /api/resources/{resource_id}` - Get a specific resource
- `POST /api/resources` - Create a new resource
- `PUT /api/resources/{resource_id}` - Update a resource

## License

MIT
