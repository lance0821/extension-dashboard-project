# Browser Extension Manager

A modern, responsive browser extension manager built with React, TypeScript, and Tailwind CSS v4. This project demonstrates clean architecture, component composition, and modern React patterns including the latest React 19 features.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.0-purple)

## 🚀 Features

- **Extension Management**: Toggle extensions on/off, remove unwanted extensions
- **Smart Filtering**: Filter extensions by status (All, Active, Inactive)
- **Dark Mode Support**: Full dark mode implementation with system preference detection
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Persistent State**: Extensions state saved to localStorage
- **Modern UI**: Clean, accessible interface following Figma design specifications

## 🛠 Tech Stack

- **React 19** - Latest React features including new Context syntax
- **TypeScript** - Type-safe code with interfaces and type definitions
- **Tailwind CSS v4** - Utility-first CSS with custom design tokens
- **Vite** - Lightning-fast build tool and dev server
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ExtensionCard.tsx
│   ├── ExtensionActions.tsx
│   ├── ExtensionInfo.tsx
│   ├── FilterHeader.tsx
│   ├── Header.tsx
│   ├── Logo.tsx
│   └── TabButton.tsx
├── context/             # React Context providers
│   ├── ExtensionsContext.tsx
│   ├── ExtensionsProvider.tsx
│   ├── ThemeContext.tsx
│   └── ThemeProvider.tsx
├── hooks/               # Custom React hooks
│   ├── useExtensions.ts
│   ├── useExtensionsState.ts
│   ├── useFilteredExtensions.ts
│   └── useTheme.ts
├── utils/               # Utility functions
│   └── logoLoader.ts
├── assets/              # Images and icons
├── data.json           # Extension data
├── index.css           # Global styles and Tailwind layers
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## 🎨 Design Highlights

### Component Architecture

- **Single Responsibility Principle**: Each component has one clear purpose
- **Composition over Inheritance**: Small, reusable components composed together
- **Custom Hooks**: Business logic extracted into reusable hooks

### Tailwind CSS v4 Features

- **Custom Design Tokens**: Spacing, colors, typography scales
- **Component Classes**: Reusable component styles using `@layer components`
- **Dark Mode**: Class-based dark mode with custom color schemes
- **Focus States**: Accessibility-first with custom focus rings

### React 19 Features

- **New Context Syntax**: Using `<Context value={...}>` instead of `<Context.Provider>`
- **Improved Performance**: Leveraging React 19's optimizations

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/lance0821/browser-extension-manager.git
cd browser-extension-manager
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🏗 Architecture Decisions

### State Management

- **Context API** for global state (theme, extensions)
- **Local component state** for UI-specific state
- **Custom hooks** for encapsulating stateful logic

### Styling Approach

- **Tailwind CSS v4** with custom configuration
- **Component classes** for reusable styles
- **CSS-in-CSS** approach (no CSS-in-JS)
- **Design tokens** for consistent spacing and colors

### Code Organization

- **Feature-based structure** with clear separation of concerns
- **TypeScript interfaces** for type safety
- **ESLint configuration** for code quality
- **Fast Refresh** optimized file structure

## 🔧 Key Components

### ExtensionCard

Main card component that displays extension information and controls. Uses composition pattern with `ExtensionInfo` and `ExtensionActions` sub-components.

### ExtensionsProvider

Manages global extension state and provides toggle/remove functionality through Context API.

### ThemeProvider

Handles dark mode toggling and system preference detection with localStorage persistence.

### Custom Hooks

- `useExtensionsState` - Manages extensions data and persistence
- `useFilteredExtensions` - Filters extensions based on active tab
- `useTheme` - Provides theme context access
- `useExtensions` - Provides extensions context access

## 📱 Responsive Design

- Mobile: Single column layout
- Tablet: Two column grid
- Desktop: Three column grid
- Adaptive typography and spacing

## 🎯 Performance Optimizations

- **Dynamic imports** for logo assets
- **Memoized filtering** logic
- **Efficient re-renders** with proper component composition
- **Fast Refresh** for instant development feedback

## 🔮 Future Enhancements

- [ ] Search functionality
- [ ] Drag and drop reordering
- [ ] Extension categories
- [ ] Import/export settings
- [ ] Keyboard navigation
- [ ] Animation transitions

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

**Lance Lewandowski**

- GitHub: [@lance0821](https://github.com/lance0821)
- LinkedIn: [Lance Lewandowski](https://linkedin.com/in/lwlewandowski)

## 🙏 Acknowledgments

- Design inspired by Frontend Mentor challenges
- Built with modern React best practices
- Tailwind CSS v4 for styling
