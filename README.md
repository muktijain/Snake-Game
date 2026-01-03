# 🐍 Snake Game (JavaScript)

A classic Snake Game built using HTML, CSS, and JavaScript.
The game features smooth movement, food consumption, collision detection, sound effects, and a persistent high score using localStorage.

---

## 🎮 Features

- Smooth snake movement using requestAnimationFrame
- Snake grows when it eats food
- Wall & self-collision detection
- Game Over screen/message
- Restart game with arrow keys
- Background music & sound effects
- High Score saved in browser (localStorage)
- Prevents reverse direction bug
- Scoreboard with live score updates
- Sound effects:
  - Food collection
  - Snake movement
  - Game over
- Background music
- Responsive game board using CSS Grid
- SVG icons for title and scoreboard
---
## 🕹 Controls
Key	Action: 
⬆ Arrow Up	Move Up
⬇ Arrow Down	Move Down
⬅ Arrow Left	Move Left
➡ Arrow Right	Move Right

Press any arrow key to start or restart the game.

## Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, custom fonts)
- JavaScript (ES6)
- SVG icons for graphics

---

## 🧠 How It Works (Brief)

- The game runs using requestAnimationFrame for smooth animation
- Snake position is stored as an array of {x, y} objects
- Collision detection checks:
- Snake hitting itself
- Snake hitting walls
- A gameOver flag pauses the game loop
- Restart happens only on user input

---

## Author
Mukti Jain

Built as a learning project to understand:
Game loops
State management
DOM manipulation
Collision logic

----

  
