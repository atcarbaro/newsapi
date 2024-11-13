# NewsApp

This is a React application for displaying news articles. The project uses TypeScript, MobX for state management, and React Router for navigation.

## Getting Started

This is a React application for displaying news articles. The project uses TypeScript, MobX for state management, and React Router for navigation.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/newsapp.git
```

2. Navigate to the project directory:

```sh
cd newsapp
```

3. Install the dependencies:

```sh
npm install
```

4. To start the development server, run:

```sh
npm run dev
```

5. To run the unit tests using Jest, run:

```sh
npm run test
```

## Project Structure

```
newsapp/
├── src/
│   ├── components/
│   │   ├── NewsCard/
│   │   │   ├── NewsCard.tsx
│   │   │   ├── NewsCard.styles.ts
│   │   │   └── **tests**/
│   │   │       └── NewsCard.test.tsx
│   │   ├── NewsGrid/
│   │   │   ├── NewsGrid.tsx
│   │   │   └── **tests**/
│   │   │       └── NewsGrid.test.tsx
│   │   ├── SearchBox/
│   │   │   ├── SearchBox.tsx
│   │   │   └── **tests**/
│   │   │       └── SearchBox.test.tsx
│   ├── pages/
│   │   ├── Details.tsx
│   │   └── **tests**/
│   │       └── Details.test.tsx
│   ├── stores/
│   │   └── newsStore.ts
│   ├── utils/
│   │   └── slugify.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── theme.ts
├── .gitignore
├── jest.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x)
