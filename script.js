// Student Tech Hub - Main JavaScript File
// Author: Calvins Mikwaya
// Description: Interactive functionality for Student Tech Hub website

// Global Variables
let todos = [];
let particles = [];
let animationId = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize App
function initializeApp() {
    loadFromLocalStorage();
    initializeTypewriter();
    initializeNavigation();
    initializeTodoList();
    initializeBackgroundAnimation();
}

// Background Animation System
function initializeBackgroundAnimation() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    // Create canvas for particle animation
    const canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    
    const heroBg = heroSection.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.appendChild(canvas);
    }
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth * dpr;
        canvas.height = heroSection.offsetHeight * dpr;
        ctx.scale(dpr, dpr);
    }
    resizeCanvas();
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * heroSection.offsetWidth;
            this.y = Math.random() * heroSection.offsetHeight;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 1.5 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.targetOpacity = this.opacity;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Wrap around
            if (this.x < 0) this.x = heroSection.offsetWidth;
            if (this.x > heroSection.offsetWidth) this.x = 0;
            if (this.y < 0) this.y = heroSection.offsetHeight;
            if (this.y > heroSection.offsetHeight) this.y = 0;
            
            // Gentle opacity pulsing
            this.targetOpacity = 0.3 + Math.sin(Date.now() * 0.001 + this.x) * 0.3;
            this.opacity += (this.targetOpacity - this.opacity) * 0.02;
        }
        
        draw(ctx) {
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Initialize particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw(ctx);
        });
        
        // Draw connecting lines
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.globalAlpha = 1 - (distance / 150);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
}

// Typewriter Effect for Hero Section
function initializeTypewriter() {
    const nameElement = document.getElementById('typewriter');
    const name = "Calvins Mikwaya";
    let index = 0;
    
    function type() {
        if (index < name.length) {
            nameElement.textContent += name.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
}

// Navigation Functions
function initializeNavigation() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        } else {
            navbar.style.background = 'var(--glass-bg)';
        }
    });
}

// Todo List Functions
function initializeTodoList() {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodo');
    
    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    renderTodos();
}

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const text = todoInput.value.trim();
    
    if (text === '') {
        showNotification('Please enter a task', 'error');
        return;
    }
    
    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    todos.unshift(todo);
    todoInput.value = '';
    renderTodos();
    saveToLocalStorage();
    showNotification('Task added successfully', 'success');
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
        saveToLocalStorage();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
    saveToLocalStorage();
    showNotification('Task deleted', 'info');
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    
    if (todos.length === 0) {
        todoList.innerHTML = '<li style="text-align: center; color: var(--text-muted); padding: 1rem;">No tasks yet. Add one above!</li>';
        return;
    }
    
    todoList.innerHTML = todos.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}">
            <div class="todo-checkbox ${todo.completed ? 'checked' : ''}" onclick="toggleTodo(${todo.id})"></div>
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <button class="todo-delete" onclick="deleteTodo(${todo.id})">
                <i class="fas fa-trash"></i>
            </button>
        </li>
    `).join('');
}

// Local Storage Functions
function saveToLocalStorage() {
    const data = {
        todos: todos
    };
    localStorage.setItem('studentHubData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('studentHubData');
    if (savedData) {
        const data = JSON.parse(savedData);
        
        // Load todos
        todos = data.todos || [];
        renderTodos();
    }
}

// Utility Functions
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&#039;'
    };
    return text.replace(/[&<>"]/g, m => map[m]);
}

// Notification System
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                type === 'error' ? 'fa-exclamation-circle' : 
                'fa-info-circle';
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icon}"></i>
            <span>${message}</span>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}
// Export functions for global access
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;
window.updateProgress = updateProgress;
window.showNotification = showNotification;
