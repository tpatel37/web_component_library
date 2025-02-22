# Use the official Node.js LTS image as base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to use caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Storybook static files
RUN npm run build-storybook

# Install a static server
RUN npm install -g serve

# Expose port 8083
EXPOSE 8083

# Serve the Storybook build using 'serve'
CMD ["serve", "-s", "storybook-static", "-l", "8083"]
