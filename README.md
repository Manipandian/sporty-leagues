# Sports Leagues Browser

A single-page application that displays sports leagues from TheSportsDB API with search and filtering capabilities.

## About

This project was built as a frontend development assessment, demonstrating:
- Component-based React architecture
- TypeScript for type safety
- API integration with response caching
- Search and filter functionality
- Responsive UI design

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI** - Component library
- **Axios** - HTTP client

## Features

- 📋 Display all sports leagues with key information
- 🔍 Search leagues by name (with debounced input)
- 🏀 Filter leagues by sport type
- 🏆 View season badges on league click
- 💾 Response caching for improved performance
- 📱 Responsive design

## Prerequisites

- **Node.js** (version 16 or higher)
- **npm**

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sporty-leagues
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── api/              # API calls and caching logic
├── components/       # React components
├── hooks/            # Custom React hooks
└── App.tsx          # Application entry point
```

## Documentation

- **[APP-DESIGN.md](./APP-DESIGN.md)** - Detailed architecture and implementation decisions
- **[AI-USAGE.md](./AI-USAGE.md)** - AI tools used during development

## API

This application uses [TheSportsDB Free API](https://www.thesportsdb.com/free_sports_api):
- All Leagues endpoint
- Season Badge lookup endpoint

## License

This project is for assessment purposes.
