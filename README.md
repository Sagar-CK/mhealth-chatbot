# mHealth - Chatbot
This is the repository for the *Talking About Mental Health: Information Disclosure in User Interactions With Chatbots or mHealth Applications* `CSE3000` Research Project course at TU Delft. It contains the code for a research study investigating information disclosure towards chatbots and was created for partial fulfilment of the requirements of the bachelor.

## Project Overview
This project is a web-based chatbot application designed to study information disclosure patterns in mental health conversations.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (v15.3.1)
- **Language**: TypeScript
- **Package Manager**: [pnpm](https://pnpm.io/)
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **API Layer**: tRPC
- **Database**: PostgreSQL (via Supabase)
- **State Management**: React Query

## Prerequisites
- Node.js (Latest LTS version recommended)
- pnpm (Latest version)
- PostgreSQL database

## Installation

1. Clone the repository:
```bash
git clone git@github.com:Sagar-CK/mhealth-chatbot.git
cd mhealth-chatbot
```

2. Install dependencies:
```bash
pnpm i
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=your_database_url
# Add other required environment variables
```

## Development

To run the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code linting

## Project Structure

```
mhealth-chatbot/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── lib/             # Utility functions and shared logic
├── public/          # Static assets
├── server/          # Server-side code
├── trpc/            # tRPC router and procedures
└── types/           # TypeScript type definitions
```

## License
This project is part of a research study at TU Delft and is subject to the university's academic policies.