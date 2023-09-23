# Use an official Node.js runtime as the base image
FROM node:16.15.0

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Build your React app for production
RUN npm run build

# Expose port 5000 for the Node.js server (you can change this to your desired port)
EXPOSE 3000

# Start the Node.js server to serve the built React app
CMD ["npm", "start"]
