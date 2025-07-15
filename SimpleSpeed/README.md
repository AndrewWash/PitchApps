# SimpleSpeed - Absolute Pitch Trainer

A multi-instrument, multi-octave pitch recognition training application.

## Overview

SimpleSpeed is a web application designed to help users train their absolute pitch recognition skills. It supports multiple instruments (piano, guitar, saxophone) and multiple octaves, allowing for a comprehensive training experience.

## Running the Application

### Option 1: Direct HTML Opening (Recommended)

After building the application (see below), you can simply open the `dist/index.html` file in any modern web browser. No server is required!

1. Navigate to the `dist` directory
2. Double-click on `index.html` to open it in your default browser

### Option 2: Using a Local Server

If you prefer to run the application from the source code:

1. You'll need to serve the files using a local web server due to ES6 module restrictions
2. You can use tools like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code or Python's built-in HTTP server

## Building the Application

To create a bundled version that can be opened directly in a browser:

1. Make sure you have [Node.js](https://nodejs.org/) installed
2. Make sure you have [PowerShell Core](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.5) installed
3. Install dependencies:
   ```
   npm install
   ```
4. Build the application:
   ```
   npm run build
   ```
5. The bundled application will be available in the `dist` directory

## Project Structure

- `src/` - Source code files
  - `app.js` - Main application module
  - `audioFileConstants.js` - Audio file definitions
  - `audioLoader.js` - Audio file loading functionality
  - `trialExecution.js` - Trial execution logic
  - `trialSelection.js` - Trial selection logic
  - `styles.css` - Application styles
  - `index.html` - Main HTML file (requires server for ES6 modules)
- `dist/` - Distribution files (created after building)
  - `bundle.js` - Bundled JavaScript (all modules combined)
  - `styles.css` - Copied CSS file
  - `index.html` - HTML file that can be opened directly in a browser
- `sounds/` - Audio files for different instruments and octaves

## Technical Details

The application uses ES6 modules for code organization. The bundled version uses Rollup to combine all modules into a single file that can be loaded without a server environment.