# Application Migration to GCP – Summary

This document provides a high-level summary of the simulated application migration project to Google Cloud Platform (GCP), structured into three main phases:

---

## 🌐 Phase 1 – IAM Policy Design

Objective: Establish secure and role-specific Identity and Access Management (IAM) roles.

### Key Actions:
- Created a custom role `HRViewer` for the HR team with read-only access to IAM and logging.
- Created a custom role `EngineeringOperator` with elevated permissions for Engineering support.
- Assigned these roles to:
  - `alice.hr@sanjaytech.io` as `HRViewer`
  - `ravi.mehta@sanjaytech.io` as `EngineeringOperator`

### Outcome:
IAM role assignment demonstrates principle of least privilege and user-based security boundaries.

---

## 🚀 Phase 2 – App Deployment

Objective: Containerize and deploy a Flask-based Python application using Docker.

### Key Actions:
- Built a Python app (`app.py`) and defined dependencies in `requirements.txt`
- Created a `Dockerfile` to containerize the application.
- Successfully built and ran the container locally using:
  ```bash
  docker build -t my-flask-app .
  docker run -p 5050:5000 my-flask-app
  ```
- Verified accessibility via `http://localhost:5050`

### Outcome:
Demonstrated local Docker-based deployment, a fundamental part of cloud-native app migration.

---

## 🔐 Phase 3 – Data Access Control

Objective: Implement GCS bucket-level IAM to ensure secure and role-appropriate access.

### Key Actions:
- Created bucket: `gcp-app-data-bucket`
- Assigned GCS roles:
  - `ravi.mehta@sanjaytech.io`: **Storage Object Admin**
  - `alice.hr@sanjaytech.io`: **Storage Object Viewer**
- Verified role bindings through GCP Console and CLI

### Outcome:
Illustrated secure access control using GCS IAM policies.

---

## ✅ Overall Project Outcome

This project simulates real-world app migration patterns with emphasis on:

- **Custom IAM policies**
- **Cloud-native deployment using Docker**
- **Cloud Storage access control**

It aligns well with customer engineering, application modernization, and security best practices in GCP.

---

> **Project ID**: `gam-project-d3h4h`
