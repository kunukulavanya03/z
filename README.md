# z

Backend API for z

## Tech Stack

- **Frontend**: React
- **Backend**: FastAPI + SQLAlchemy
- **Frontend Source**: GitHub ([Repository](https://github.com/HimaShankarReddyEguturi/Designecommerceproductui.git))

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

- user management
- authentication
- authorization

## API Endpoints

- `POST /api/register` - Register a new user
- `POST /api/login` - Log in a user
- `POST /api/reset-password` - Reset a user's password
- `GET /api/profile` - Get a user's profile information
- `PUT /api/profile` - Update a user's profile information
- `GET /api/users` - Get a list of all users

## License

MIT
