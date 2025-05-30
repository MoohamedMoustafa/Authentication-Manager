# Authentication Manager

A robust and user-friendly authentication management system for React Native applications.

## Description

Authentication Manager is a React Native project designed to streamline user authentication workflows. It provides a seamless experience for user login, signup, and token-based authentication using Redux Toolkit and Firebase Authentication. The app is built with modern tools and best practices, ensuring scalability and maintainability.

## Features

- User authentication with Firebase (signup, login, and token management).
- Secure token storage using `AsyncStorage`.
- Redux Toolkit for state management.
- React Navigation for intuitive navigation flows.
- Customizable UI components for authentication forms.
- Error handling and loading indicators for better user experience.

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- Expo CLI

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/MoohamedMoustafa/Authentication-Manager.git
   cd authentication-manager
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```

## Usage

### Running the App

1. Start the Expo development server:
   ```bash
   npx expo start
   ```
2. Scan the QR code with the Expo Go app on your mobile device or run the app on an emulator.

### Authentication Flow

- **Signup**: Navigate to the signup screen, enter your email and password, and create an account.
- **Login**: Use your credentials to log in and access the authenticated area.
- **Logout**: Use the logout button in the header to securely log out.

## Configuration

### Environment Variables

To configure Firebase Authentication, update the `API_KEY` in `services/authService.js`:

```javascript
const API_KEY = "your-firebase-api-key";
```

### Dependencies

- `@reduxjs/toolkit`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-native-async-storage/async-storage`
- `expo`
- `react-redux`
- `react-native`

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
