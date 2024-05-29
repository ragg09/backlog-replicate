FROM node:18-alpine

WORKDIR /nextjs/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Install the next package globally
RUN npm install -g next

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Set execute permissions for next (if needed)
# RUN chmod +x node_modules/.bin/next

# Set the default command to start the Next.js development server
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
