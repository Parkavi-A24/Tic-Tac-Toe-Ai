# Tic-Tac-Toe-Ai
An AI-powered Tic-Tac-Toe game built using Python and the Minimax Algorithm. Developed as part of the CodSoft Artificial Intelligence Internship Program.

Overview
This project implements an intelligent Tic-Tac-Toe game where a human player competes against an AI agent. The AI uses the Minimax Algorithm (optionally enhanced with Alpha-Beta Pruning) to make optimal decisions, ensuring that it never loses. The project demonstrates fundamental concepts of Artificial Intelligence, Game Theory, and Search Algorithms.

FEATURES:
Human vs AI gameplay
Unbeatable AI using Minimax Algorithm
Optional Alpha-Beta Pruning for optimization
Interactive command-line interface (or GUI, if implemented)
Automatic win, lose, and draw detection
Clean and modular code structure

OBJECTIVE:
The main objectives of this project are:
Understand adversarial search techniques.
Learn how the Minimax algorithm works.
Explore game tree generation and evaluation.
Implement decision-making in turn-based games.
Optimize search using Alpha-Beta Pruning. 

Technologies Used
Python 3.x
Standard Python Libraries

PROJECT STRUCTURE:
TicTacToe-AI/
│
├── main.py             # Main game execution file
├── ai.py               # Minimax and AI logic
├── game.py             # Game board and rules
├── README.md           # Project documentation
└── requirements.txt    # Dependencies (if any)

How It Works
Minimax Algorithm
The AI evaluates all possible future game states and selects the move that maximizes its chances of winning while minimizing the opponent's chances.
Basic Principle :
AI Player (Maximizer) tries to maximize the score.
Human Player (Minimizer) tries to minimize the score.
The algorithm recursively explores all possible moves until a terminal state is reached.

Score Evaluation
| Game State | Score |
| ---------- | ----- |
| AI Wins    | +1    |
| Human Wins | -1    |
| Draw       | 0     |

Alpha-Beta Pruning :
Alpha-Beta Pruning improves the efficiency of Minimax by eliminating branches that cannot affect the final decision.

Advantages
Faster execution
Reduced search space
Same optimal result as standard Minimax

Gameplay
Board Positions

 1 | 2 | 3
-----------
 4 | 5 | 6
-----------
 7 | 8 | 9

 Example

 Player (X): 5

 X |   |
-----------
   | X |
-----------
   |   |

AI (O) chooses position 1

 O |   |
-----------
   | X |
-----------
   |   |

   Algorithm Workflow:
   Start Game
    │
    ▼
Human Move
    │
    ▼
Check Winner
    │
    ▼
AI Move (Minimax)
    │
    ▼
Evaluate All Possible States
    │
    ▼
Choose Best Move
    │
    ▼
Update Board
    │
    ▼
Check Winner
    │
    ▼
Repeat Until Game Ends

Future Enhancements
Graphical User Interface (GUI) using Tkinter or Pygame
Difficulty levels (Easy, Medium, Hard)
Multiplayer mode
Score tracking system
Web-based implementation using Flask or Django

Conclusion

This Tic-Tac-Toe AI project demonstrates how intelligent agents make optimal decisions in competitive environments. By implementing the Minimax Algorithm and Alpha-Beta Pruning, the AI becomes unbeatable, providing a practical introduction to game theory and search-based artificial intelligence techniques.

Author
PARKAVI A
AI Internship Project – Tic-Tac-Toe AI using Minimax Algorithm.
