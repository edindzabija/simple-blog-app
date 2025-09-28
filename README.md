# Simple Blog App

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Running

1. **Clone and install dependencies:**

   ```bash      
   npm install 
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)


## Architecture & Tech Stack

### Core Technologies
- **Next.js 15** - With App Router
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling

### Key Libraries
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation and type inference
- **UUID** - Unique ID generation for posts

### Data Storage
- **localStorage** - Client-side persistence

## Technical Decisions

### Why localStorage?
- No backend setup required
- Easy to showcase functionality

### Why Next.js App Router?
- Latest Next.js patterns
- Better performance (and SEO)
- Intuitive page structure with File-based routing
- mage, font, and bundle optimization built in

### Why React Hook Form + Zod?
- Minimal re-renders
- Schema-driven validation
- Excellent TypeScript integration
- Client-side form validation with clear error messages

### Why TypeScript?
- Type Safety - Catch errors at compile time
- IntelliSense and autocomplete
- Self-documenting code
- Safer code changes while refactoring

## Design Decisions

- Tailwind CSS - Utility-first approach for rapid styling
- Mobile-first design with CSS Grid
