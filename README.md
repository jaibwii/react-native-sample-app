# TestRN – React Native Sample App

A sample React Native app built with **Expo SDK 52**, **TypeScript**, and **Expo Router**.

## Getting Started

```bash
# Install dependencies
npm install

# Start the Expo development server
npx expo start
```

Then press:
- `a` to open on Android emulator / device
- `i` to open on iOS simulator / device
- `w` to open in the browser

## Project Structure

```
├── app/                     # Expo Router screens
│   ├── _layout.tsx          # Root layout (navigation stack + status bar)
│   ├── +not-found.tsx       # 404 screen
│   └── (tabs)/              # Tab navigator group
│       ├── _layout.tsx      # Tab bar configuration
│       ├── index.tsx        # Home screen
│       └── about.tsx        # About screen
├── components/              # Reusable components
│   └── DeviceInfoCard.tsx   # Displays platform / OS version info
├── constants/               # App-wide constants
│   └── Colors.ts            # Light & dark color theme
├── app.json                 # Expo configuration
├── babel.config.js          # Babel configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
```

## Features

| Feature | Description |
|---|---|
| 🏠 Home screen | Welcome message + animated counter |
| ℹ️ About screen | App version, SDK info, tech-stack summary |
| 🔔 Native Alert | Platform alert dialog (iOS & Android) |
| 📳 Vibration | Device vibration via `Vibration` API |
| 📱 Device Info | Platform, OS version, architecture |
| 📝 Simple Form | Text input with validation and submit |
| 🌗 Dark Mode | Respects system color scheme |

## Tech Stack

- **React Native** 0.76
- **Expo** SDK 52
- **Expo Router** 4 (file-based navigation)
- **TypeScript** 5
- **React Native built-in components only** – no third-party UI libraries
