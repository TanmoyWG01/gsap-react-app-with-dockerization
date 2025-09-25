# ------------------
# STAGE 1: Build the React application
# ------------------
FROM node:18-alpine AS builder
WORKDIR /app

# CORRECTED: Copy package files from the project root.
COPY package.json pnpm-lock.yaml ./

# Install pnpm and then project dependencies
RUN npm install -g pnpm
RUN pnpm install

# CORRECTED: Copy the rest of the application source code from the project root.
# The .dockerignore file will prevent node_modules and other unnecessary files from being copied.
COPY . .

# Build the application for production.
# This will create a 'dist' folder in /app/dist
RUN pnpm run build

# ------------------
# STAGE 2: Serve the application with Nginx
# ------------------
FROM nginx:stable-alpine

# CORRECTED: Copy the custom Nginx configuration file from the project root.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the 'builder' stage
# from /app/dist into the Nginx public HTML directory.
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run Nginx in the foreground when the container starts
CMD ["nginx", "-g", "daemon off;"]