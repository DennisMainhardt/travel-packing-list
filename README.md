# 🧳 Far Away - Travel Packing List

A modern, interactive travel packing list application built with React and TypeScript. Plan your trips efficiently by organizing your packing items with an intuitive interface.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.0-purple?logo=vite)

## ✨ Features

- **📝 Add Items**: Easily add items with customizable quantities (1-20)
- **✅ Track Progress**: Mark items as packed/unpacked with visual feedback
- **🗂️ Smart Sorting**: Sort items by:
  - Input order (default)
  - Alphabetical description
  - Packed status
- **📊 Progress Statistics**: Real-time tracking of packing completion percentage
- **🗑️ Item Management**: Delete individual items or clear the entire list
- **🎨 Visual Feedback**: Strikethrough effect for packed items
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flashcards
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

### Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.0
- **Code Quality**: ESLint with TypeScript support
- **Styling**: CSS (modular and responsive)

## 📁 Project Structure

```
src/
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── types.ts               # Shared TypeScript interfaces
├── index.css              # Global styles
├── components/
│   ├── Logo.tsx           # Application header/logo
│   ├── Form.tsx           # Add new items form
│   ├── PackingList.tsx    # List container with sorting
│   ├── Item.tsx           # Individual packing list item
│   └── Stats.tsx          # Progress statistics display
└── assets/                # Static assets
```

## 🎯 Usage

1. **Adding Items**: Use the form to add new packing items with quantities
2. **Managing Items**: 
   - Click checkboxes to mark items as packed
   - Use the ❌ button to delete unwanted items
3. **Organizing**: Use the dropdown to sort your list by different criteria
4. **Tracking Progress**: View your packing completion percentage at the bottom
5. **Starting Fresh**: Use "CLEAR LIST" to remove all items and start over

## 🔧 Configuration

### TypeScript

This project uses strict TypeScript configuration with:
- Type-only imports for better build optimization
- Shared interface definitions for consistent typing
- Strict compilation settings for better code quality

### ESLint

Code quality is maintained with ESLint configuration including:
- React-specific rules
- TypeScript integration
- Modern JavaScript standards

## 🚀 Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for lightning-fast development
- UI components crafted with [React](https://reactjs.org/)
- Type safety powered by [TypeScript](https://www.typescriptlang.org/)

---

**Happy Packing! 🎒✈️**