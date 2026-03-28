# Calvins Mikwaya - Student Tech Hub

A modern, visually stunning, and highly practical personal website for a university IT student. This Student Tech Hub combines productivity tools, learning tracking, and portfolio features in a single, cohesive interface.

## 🚀 Features

### 🎯 Core Features
- **Hero Section**: Animated landing with typewriter effect and smooth animations
- **Smart Dashboard**: Productivity tools including todo list, Pomodoro timer, quick notes, and motivational quotes
- **Learning Tracker**: Visual progress tracking for Python, Cybersecurity, and AI skills
- **Projects Showcase**: Portfolio section with project cards and tech stack information
- **Data Annotation Practice**: Interactive tools for image labeling and text classification
- **Resources Hub**: Categorized learning resources with search functionality
- **About Section**: Personal profile with skills and statistics

### ✨ Bonus Features
- **Dark/Light Mode Toggle**: Switch between themes with persistent storage
- **Global Search**: Search across all sections with keyboard shortcuts (Ctrl+K)
- **Notification System**: Real-time feedback for user actions
- **Local Storage**: All data saved locally (tasks, notes, progress, annotations)
- **Responsive Design**: Fully optimized for mobile and desktop
- **Keyboard Shortcuts**: Productivity shortcuts for power users

## 🛠️ Tech Stack

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Advanced styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks - pure, performant JavaScript
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter and Poppins for modern typography

## 📁 Project Structure

```
Muriga Webpage/
├── index.html          # Main HTML file
├── style.css           # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## 🎨 Design Features

### Visual Design
- **Glassmorphism**: Modern glass-like UI elements
- **Dark Mode Default**: Easy on the eyes with accent colors
- **Gradient Accents**: Purple-blue gradient for visual interest
- **Smooth Animations**: Micro-interactions and transitions
- **Modern Typography**: Clean, readable fonts

### User Experience
- **Intuitive Navigation**: Smooth scrolling and mobile-friendly menu
- **Interactive Elements**: Hover effects and visual feedback
- **Accessibility**: Semantic HTML and keyboard navigation
- **Performance**: Optimized for fast loading and smooth interactions

## 🔧 Functionality Details

### Todo List
- Add, complete, and delete tasks
- Visual checkboxes with animations
- Persistent storage using localStorage
- Character counter and validation

### Pomodoro Timer
- 25-minute focus sessions
- Start, pause, and reset controls
- Completed sessions tracking
- Audio notifications on completion

### Learning Tracker
- Progress bars for Python, Cybersecurity, and AI
- Editable progress percentages
- Visual feedback for milestones
- Auto-save functionality

### Data Annotation Tools
- **Image Labeling**: Simulated image classification with labels (Car, Person, Object, Animal)
- **Text Classification**: Sentiment analysis practice (Positive, Neutral, Negative)
- History tracking for recent annotations

### Resource Hub
- Categorized learning resources and tools
- Real-time search filtering
- Organized by Learning and Tools categories

## 🎯 Target Audience

This website is designed for:
- **University IT students** looking for a comprehensive productivity hub
- **Tech enthusiasts** who want to track learning progress
- **Developers** seeking inspiration for modern web development
- **Recruiters** evaluating student portfolios and technical skills

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in your preferred web browser
3. **Start exploring** all the features immediately!

No installation, dependencies, or setup required - it's a pure HTML/CSS/JavaScript solution!

## ⌨️ Keyboard Shortcuts

- **Ctrl/Cmd + K**: Open global search
- **Ctrl/Cmd + D**: Toggle dark/light mode
- **Escape**: Close modals and search
- **Enter**: Submit forms and add items

## 📱 Responsive Design

The website is fully responsive and works seamlessly on:
- **Desktop** (1200px+): Full grid layouts and all features
- **Tablet** (768px-1199px): Adapted layouts and touch-friendly
- **Mobile** (320px-767px): Stacked layouts and hamburger menu

## 🎨 Customization

### Theme Colors
The color scheme can be easily customized by modifying the CSS variables in `:root`:

```css
:root {
    --accent-primary: #6366f1;    /* Primary blue */
    --accent-secondary: #8b5cf6;  /* Secondary purple */
    --bg-primary: #0f0f23;        /* Dark background */
    /* ... more variables */
}
```

### Adding New Quotes
To add more motivational quotes, edit the `quotes` array in `script.js`:

```javascript
const quotes = [
    { text: "Your new quote", author: "Author Name" },
    // ... existing quotes
];
```

### Customizing Learning Topics
Update the learning tracker by modifying the HTML structure and corresponding JavaScript:

1. Add new learning cards in `index.html`
2. Update the `initializeLearningTracker()` function in `script.js`
3. Add corresponding CSS styles if needed

## 🔒 Privacy & Data

- **No tracking**: No analytics or external tracking scripts
- **Local storage only**: All data is stored locally in the browser
- **No backend**: Fully client-side application
- **No data collection**: User data never leaves the browser

## 🤝 Contributing

This is a personal portfolio project, but feel free to:
- **Fork** the repository for your own use
- **Suggest improvements** via issues
- **Learn from the code** for your own projects

## 📞 Contact

- **Name**: Calvins Mikwaya
- **Focus**: AI, Cybersecurity & Software Engineering
- **Built with**: Passion and lots of coffee ☕

---

*© 2024 Calvins Mikwaya. Built with passion for technology and learning.*
