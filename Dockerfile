# Use the official Node.js image as the base
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the frontend app runs on
EXPOSE 5173

# Start the React app
CMD ["npm", "run", "dev"]
