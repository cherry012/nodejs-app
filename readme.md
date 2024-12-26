
## Steps Followed

### Step 1: Creating a Simple Node.js Application

- We created a basic **Node.js** application using the **Express** framework. The app listens on a port and responds with the message "Hello, Node.js!" when the root URL is accessed.
- We added **Mocha** and **Chai** for testing. A test was created to verify that the app correctly responds with "Hello, Node.js!" to a `GET /` request.

### Step 2: Containerizing the Application with Docker

- We created a **Dockerfile** to containerize the Node.js app. The Dockerfile uses the official Node.js image to build the app, installs dependencies, copies the application code, exposes the necessary port, and runs the app in the container.
- After building the Docker image, we ran the container on our local machine and accessed the app through `http://localhost:3000`.

### Step 3: Deploying the Application to Kubernetes

- We wrote **Kubernetes configuration files** to deploy the app to a Kubernetes cluster:
  - **`deployment.yaml`**: Defines how the app is deployed, specifying the Docker image to use, the number of replicas, and the container port.
  - **`service.yaml`**: Defines a service to expose the app to the outside world using a LoadBalancer service, which allows access to the app on port 80 and maps it to the container's port 3000.

### Step 4: Setting Up CI/CD Pipeline with GitHub Actions

- We created a **GitHub Actions workflow** (`ci-cd.yml`) to automate the following tasks:
  1. **Checkout the code** from the GitHub repository.
  2. **Set up Node.js** environment and install dependencies.
  3. **Run tests** using Mocha and Chai.
  4. **Build the Docker image** and tag it with the `latest` version.
  5. **Push the Docker image** to Docker Hub using secrets for authentication.
  6. **Deploy the app** to the Kubernetes cluster using `kubectl`.
  7. **Notify** the team on Slack when the deployment is successful.

### Step 5: Setting Up GitHub Secrets

- To ensure security and avoid hardcoding sensitive information, we added the following secrets to the GitHub repository:
  - `DOCKER_USERNAME`: Docker Hub username.
  - `DOCKER_PASSWORD`: Docker Hub password.
  - `SLACK_WEBHOOK_URL`: Slack webhook URL for deployment notifications.

### Step 6: Deployment and Monitoring

- We pushed all changes to GitHub, which triggered the GitHub Actions pipeline.
- The pipeline automatically built the Docker image, ran tests, pushed the image to Docker Hub, deployed the app to Kubernetes, and notified the team on Slack about the deployment status.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nodejs-app
