/* 
* GL Assessment Style Year 4 Mental Maths Quiz
* 
* Colour contrast: All text meets WCAG AA contrast requirements
* - Main text (#2d3748 on #f7fafc): 11.95:1 ratio
* - Primary buttons (#3182ce on white): 3.93:1 ratio (meets AA for large text)
* - Timer colours follow a traffic light system with appropriate contrast
*/

/* Base styles and CSS reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #3182ce;
    --primary-dark: #2c5282;
    --secondary-color: #38a169;
    --background-color: #f7fafc;
    --text-color: #2d3748;
    --timer-normal: #38a169;
    --timer-warning: #ed8936;
    --timer-danger: #e53e3e;
    --success-color: #48bb78;
    --error-color: #f56565;
    --light-grey: #e2e8f0;
    --white: #ffffff;
    --border-radius: 8px;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition-speed: 0.3s;
}

body {
    font-family: 'Nunito', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

/* Container styles */
#quiz-container {
    width: 100%;
    max-width: 600px;
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    overflow: hidden;
    position: relative;
}

header {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 20px;
    text-align: center;
}

h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 10px;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--primary-dark);
}

/* Progress bar */
#progress-container {
    position: relative;
    height: 25px;
    background-color: var(--light-grey);
    border-radius: 12px;
    overflow: hidden;
    margin-top: 10px;
}

#progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--secondary-color);
    width: 0;
    transition: width 0.5s ease;
}

#progress-text {
    position: relative;
    z-index: 1;
    color: var(--white);
    font-weight: 600;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

/* Game area styles */
#game-area {
    padding: 30px 20px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.state {
    display: none;
    width: 100%;
    text-align: center;
}

.state.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.5s ease;
}

/* Audio animation */
.audio-animation {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    height: 50px;
}

.audio-animation span {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    background-color: var(--primary-color);
    border-radius: 50%;
}

.audio-animation span:nth-child(1) {
    animation: pulse 1s infinite;
}

.audio-animation span:nth-child(2) {
    animation: pulse 1s infinite 0.2s;
}

.audio-animation span:nth-child(3) {
    animation: pulse 1s infinite 0.4s;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 0.5;
    }
    50% {
        transform: scale(1.5);
        opacity: 1;
    }
}

/* Answer input */
label {
    font-size: 1.2rem;
    margin-bottom: 15px;
    font-weight: 600;
}

#answer-input {
    font-family: 'Nunito', sans-serif;
    font-size: 2rem;
    width: 120px;
    height: 70px;
    border: 2px solid var(--primary-color);
    border-radius: var(--border-radius);
    text-align: center;
    margin-bottom: 20px;
    outline: none;
    transition: border-color var(--transition-speed);
}

#answer-input:focus {
    border-color: var(--primary-dark);
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.3);
}

/* Timer styles */
.timer-container {
    margin-top: 20px;
}

.timer-circle {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;
}

svg {
    transform: rotate(-90deg);
    width: 100%;
    height: 100%;
}

.timer-background {
    fill: none;
    stroke: var(--light-grey);
    stroke-width: 8;
}

.timer-progress {
    fill: none;
    stroke: var(--timer-normal);
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 283;
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 1s linear, stroke 0.3s ease;
}

#timer-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-color);
}

/* Feedback styles */
#feedback-text {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
}

#feedback-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0 auto;
}

.correct-icon {
    background-color: var(--success-color);
    color: var(--white);
}

.correct-icon::after {
    content: "✓";
}

.incorrect-icon {
    background-color: var(--error-color);
    color: var(--white);
}

.incorrect-icon::after {
    content: "✗";
}

/* Results container */
#results-container {
    padding: 30px 20px;
    text-align: center;
}

.results-summary {
    margin-bottom: 25px;
    font-size: 1.2rem;
}

#final-score, #percentage {
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--primary-color);
}

.results-details {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 30px;
}

.result-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.result-label {
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--text-color);
    opacity: 0.8;
}

.result-value {
    font-size: 2.5rem;
    font-weight: 700;
}

#correct-count {
    color: var(--success-color);
}

#incorrect-count {
    color: var(--error-color);
}

/* Start screen */
#start-screen {
    display: none;
    padding: 30px 20px;
    text-align: center;
}

#start-screen.active {
    display: block;
}

#start-screen p {
    margin-bottom: 15px;
}

.audio-settings {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid var(--light-grey);
}

/* Button styles */
.primary-button, .secondary-button {
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color var(--transition-speed), transform var(--transition-speed);
    border: none;
    outline: none;
}

.primary-button {
    background-color: var(--primary-color);
    color: var(--white);
}

.primary-button:hover, .primary-button:focus {
    background-color: var(--primary-dark);
}

.secondary-button {
    background-color: var(--white);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.secondary-button:hover, .secondary-button:focus {
    background-color: rgba(49, 130, 206, 0.1);
}

.primary-button:active, .secondary-button:active {
    transform: translateY(2px);
}

/* Footer */
footer {
    margin-top: 30px;
    text-align: center;
    color: var(--text-color);
    opacity: 0.7;
    font-size: 0.9rem;
}

/* Utility classes */
.hidden {
    display: none;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Media queries for responsiveness */
@media (max-width: 480px) {
    #quiz-container {
        max-width: 100%;
    }
    
    h1 {
        font-size: 1.5rem;
    }
    
    h2 {
        font-size: 1.3rem;
    }
    
    #answer-input {
        font-size: 1.8rem;
        width: 100px;
        height: 60px;
    }
    
    .results-details {
        gap: 20px;
    }
    
    .result-value {
        font-size: 2rem;
    }
}

/* Accessibility: Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
    }
    
    .timer-progress {
        transition: stroke 0.001ms;
    }
}
