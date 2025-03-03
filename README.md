# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### npm test

Launches the test runner in interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### npm run build

Builds the app for production to the build folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### npm run eject

**Note: this is a one-way operation. Once you eject, you can't go back!**

If you aren't satisfied with the build tool and customised configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them.


# Web Component Library - Storybook

This is a React-based UI component library built with Storybook and Docker.

##  How to Run Locally

1. *Clone the Repository*
   sh
   git clone https://github.com/tpatel37/web_component_library
   cd WebComponentLibrary
   

2. *Install Dependencies*
   sh
   npm install
   

3. *Start the React App*
   sh
   npm start
   
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running Storybook

Storybook is used to develop and test UI components in isolation.

1. *Install Storybook*
   sh
   npx storybook@latest init
   

2. *Run Storybook*
   sh
   npm run storybook
   
   If the default port (6006) is unavailable, Storybook will suggest an alternative port (e.g., 6007, 6008).

3. Open Storybook in the browser:  
   - [http://localhost:6006](http://localhost:6006) (or the suggested port)

## Running with Docker

1. *Build the Docker Image*
   
   docker build -t patel_tiyaben_assignment_12.
   

2. *Run the Docker Container*
   
   docker run -p 8083:8083 --name patel_tiyaben_assigment_12 patel_tiyaben_assigment_12
   



### *Troubleshooting Docker Issues*

- *Port 6006 already in use?*
  sh
  netstat -ano | findstr :6006
  taskkill /PID <PID> /F
  
  Then restart Docker:
  sh
  docker run -p 6006:6006 my-storybook
  

- *Using a Different Port*
  sh
  docker run -p 6007:6006 my-storybook
  
  Then access it at: [http://localhost:6007](http://localhost:6007)

## Creating UI Components with Storybook

1. Inside src/components, create a new component folder, e.g., Button.
2. Add a Button.tsx file with the component code.
3. Create a Button.stories.tsx file for the Storybook integration.
4. Restart Storybook to see the new component.




