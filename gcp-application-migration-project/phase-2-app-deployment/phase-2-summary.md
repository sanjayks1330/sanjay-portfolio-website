# Phase 2: Application Deployment – Summary

## Objective
To containerize and deploy a Python-based Flask web application using Docker on a local machine, simulating application deployment in a cloud-native environment.

## Steps Completed

1. **Flask App Creation**
   - Developed a basic Flask application (`app.py`) responding on port 5000.

2. **Dockerfile Creation**
   - Created a `Dockerfile` to containerize the Flask app using the Python 3.11 slim base image.

3. **Requirements Setup**
   - Created a `requirements.txt` file specifying Flask as a dependency.

4. **Docker Build**
   - Successfully built the Docker image using:
     ```bash
     docker build -t my-flask-app .
     ```

5. **Docker Run**
   - Ran the container and mapped it to local port 5050:
     ```bash
     docker run -p 5050:5000 my-flask-app
     ```

6. **Testing the App**
   - Verified the application was accessible at [http://localhost:5050](http://localhost:5050).

## Evidence
- `flask-app-running-terminal.png` – Terminal output showing successful Flask app launch in Docker
- `flask-app-in-browser.png` – Web browser view of the running Flask app

## Outcome
The app was successfully containerized and executed in an isolated Docker environment, simulating real-world cloud application deployment. This confirms environment readiness for the next phase: securing data and managing access control.


