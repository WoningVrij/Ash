# ASH - After Student Housing

## Overview

ASH (After Student Housing) is a web application designed to provide housing solutions for international students and graduates in the Netherlands. The platform addresses the challenge of finding accommodation after student housing ends, offering an alternative to the complex Dutch rental market with its bureaucratic requirements.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Modern and professional appearance (updated Jan 29, 2025).

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom ASH brand colors (orange primary theme)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Internationalization**: Custom language provider supporting English and Dutch

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Storage**: Currently using in-memory storage with interface for database migration
- **API**: RESTful API with contact form submission endpoints

### Build System
- **Development**: Vite with HMR (Hot Module Replacement)
- **Production**: Vite build + esbuild for server bundling
- **TypeScript**: Strict type checking across client, server, and shared code

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with call-to-action
   - Key features highlighting no-bureaucracy approach
   - About section explaining ASH's mission
   - Projects section showcasing Amsterdam and Haarlem locations
   - Pricing section with room/studio options
   - FAQ section addressing common concerns
   - Contact form for housing applications

2. **UI System**:
   - Comprehensive component library (40+ components)
   - Consistent design system with CSS variables
   - Responsive design with mobile-first approach
   - Accessibility features via Radix UI

3. **Internationalization**:
   - Language context provider
   - Support for English and Dutch
   - Persistent language preference storage

### Backend Components
1. **API Routes**:
   - POST `/api/contact` - Submit housing applications
   - GET `/api/contact` - Retrieve all applications (admin)
   - GET `/api/contact/:id` - Get specific application

2. **Data Models**:
   - Users table (for future authentication)
   - Contact submissions table with comprehensive form data
   - Zod schemas for validation

3. **Storage Layer**:
   - Abstract storage interface (IStorage)
   - In-memory implementation for development
   - Ready for PostgreSQL migration via Drizzle

## Data Flow

1. **User Journey**:
   - User visits landing page
   - Browses housing options and information
   - Fills out contact form with housing preferences
   - Form data validated client-side and server-side
   - Submission stored in database
   - User receives confirmation

2. **Form Processing**:
   - Client-side validation using Zod schemas
   - Form submission via React Query mutation
   - Server-side validation and storage
   - Toast notifications for user feedback
   - Error handling with user-friendly messages

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL (@neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date utilities
- **UI Libraries**: Radix UI primitives, Lucide React icons

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Error Handling**: Runtime error overlay for development
- **Code Cartography**: Replit cartographer for code navigation

## Deployment Strategy

### Development
- Runs on Replit with live reload via Vite
- In-memory storage for rapid development
- Environment-specific configurations

### Production Build
1. **Client Build**: Vite bundles React app to `dist/public`
2. **Server Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Environment**: Production mode with optimized assets

### Database Migration
- Drizzle ORM ready for PostgreSQL deployment
- Migration files stored in `./migrations`
- Schema defined in `shared/schema.ts`
- Connection via DATABASE_URL environment variable

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with client, server, and shared code for easier development and deployment
2. **Type Safety**: Full TypeScript coverage with shared schemas between client and server
3. **Component Architecture**: Modular UI components with consistent design system
4. **Internationalization**: Built-in support for multiple languages targeting Dutch and international markets
5. **Form Handling**: Comprehensive contact form as primary user interaction point
6. **Storage Abstraction**: Interface-based storage allowing easy migration from in-memory to PostgreSQL
7. **Modern Tooling**: Vite for fast development, Drizzle for type-safe database operations