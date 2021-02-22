# remitano-universal
A demo for remitano universal app using Expo + React Native Web + Next.js

## Install
```
yarn
```

## Start
For mobile app,
```
expo start
// then choose to run on iOS or Android simulator/emulator on Expo console/dev tools
```
For web,
```
yarn next dev
// then access http://localhost:3000 on your web browser
```

## Notes
- We can remove `Next.js` because:
  - it doesn't bring benefits to mobile app, only SSR for web
  - it changes the way to route in the app, compared to `react-first-router`
  - combining Expo with Next.js is troublesome and risky due to the lack of documentation
  - (minor) we can use `expo start` for web on development
