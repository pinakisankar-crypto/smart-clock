# Smart Clock

Smart Clock is a feature-rich React application that combines a digital clock, advanced alarm management, and voice command capabilities for seamless user interaction. Designed with a responsive and accessible UI using Tailwind CSS, it allows users to set, view, and manage alarms with persistent storage, trigger alarms with custom sounds, and utilize voice input powered by Wit.ai. Built on Vite for rapid development, Smart Clock is easily customizable to fit personal preferences in both appearance and functionality.

## Features

- **Digital Clock Display:** Shows current time in 12-hour format.
- **Alarm Management:** Add, view, and remove alarms. Alarms persist using localStorage.
- **Alarm Trigger:** Plays an alarm sound in a loop when the set time is reached. Stop the alarm with a button.
- **Voice Commands:** Set alarms using voice input (powered by Wit.ai).
- **Day/Night Toggle:** Easily set AM/PM for alarms.
- **Responsive UI:** Styled with Tailwind CSS and custom utility classes.
- **Accessible Controls:** Keyboard and mouse support for all major actions.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/smart-clock.git
   cd smart-clock
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your Wit.ai access token:
     ```
     VITE_WIT_ACCESS_TOKEN=your_wit_ai_token_here
     ```

### Running the App

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
    components/
        AlarmItem.jsx      # Handles individual alarm display, editing, and deletion
        AlarmList.jsx      # Manages and renders the list of all alarms, triggers alarm actions
        VoiceCommand.jsx   # Captures and processes voice input to set alarms via Wit.ai
    assets/
        alarm.mp3          # Default alarm sound file played when an alarm is triggered
    utils/
        witAI.js           # Utility for integrating and communicating with Wit.ai API for voice commands
    index.css            # Tailwind CSS configuration and custom styles for the app
    App.jsx              # Main application component containing core logic and layout
    main.jsx             # Application entry point, bootstraps React and renders App
```

## Customization

- **Styling:** Modify `src/index.css` for custom colors, shadows, and utility classes.
- **Alarm Sound:** Replace `src/assets/alarm.mp3` with your preferred sound.
- **Voice Command:** Update `src/utils/witAI.js` for custom voice command logic.

## Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Wit.ai](https://wit.ai/) (for voice commands)
