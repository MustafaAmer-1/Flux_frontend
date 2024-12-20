# Use the official Node.js image as the base
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm i -g serve

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Expose the port the frontend app runs on
EXPOSE 5173

# Start the React app
CMD [ "sh", "-c", "serve -s dist -l 5173"]
