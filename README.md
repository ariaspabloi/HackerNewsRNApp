# React Native Developer Test: Hacker News App

## Overview

The Hacker News App is a mobile application designed to fetch, store, and display the latest news about mobile development. Utilizing API calls, this app presents news articles and allows users to read them even when offline by storing them locally. Additionally, users can remove news from their feed, with the app persisting a list of removed news to ensure they do not reappear. Articles can be read within the app using a WebView, providing a seamless reading experience.

## Technologies Used

- React Native

## App Design

The app leverages a clean architecture approach to ensure maintainability and scalability. Key design patterns and strategies include:

- **MVVM (Model-View-ViewModel)**: Separates the UI from the business logic, facilitating easier testing and maintenance.
- **Datasources and Repository Pattern**: Abstracts the data layer to provide a clean API for data access to the rest of the application.
- **Use Cases**: Encapsulates business logic in discrete units, making them easily reusable and testable.
- **Singleton Usage**: Ensures a class has only one instance and provides a global point of access to it.
- **Custom Errors**: Enhances error handling by defining application-specific error types.

## Features

- **Infinite Scroll**: Allows users to continuously scroll through news articles without interruption.
- **Local Storage**: Stores news articles locally for offline reading.
- **API Calls**: Fetches news articles from the internet.
- **WebView**: Enables reading of news articles within the app for a seamless experience.
- **Slide to Remove**: Users can easily remove articles from their feed with a simple swipe gesture.

## Installation

To get started with the Hacker News App, follow these steps:

## Step 1: Clone the repository & Start the Metro Server

First, clone the repository and install dependencies

```bash
git clone https://github.com/ariaspabloi/HackerNewsRNApp.git
cd HackerNewsRNApp
npm i
```

Then you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of the React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of the React Native project. Run the following command to start the _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_.
