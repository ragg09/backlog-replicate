FROM node:18-alpine

WORKDIR /nestjs/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Install the nest package globally
RUN npm i -g @nestjs/cli

# Copy the rest of the application
COPY . .

# Expose port 9010
EXPOSE 9010

# Set execute permissions for next (if needed)
# RUN chmod +x node_modules/.bin/next

# Set the default command to start the Nest.js development server
CMD ["npm", "run", "start:dev", "--", "-H", "0.0.0.0"]