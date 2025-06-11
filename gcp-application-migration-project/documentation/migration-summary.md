# Application Migration to GCP – Summary

This document provides a high-level summary of the simulated application migration project to Google Cloud Platform (GCP), structured into three main phases:

---

## 🌐 Phase 1 – IAM Policy Design

**Objective**: Establish secure and role-specific Identity and Access Management (IAM) roles.

### Key Actions:
- Created a custom role `HRViewer` for the HR team with read-only access to IAM and logging.
- Created a custom role `EngineeringOperator` with elevated permissions for Engineering support.
- Assigned these roles to:
  - `alice.hr@sanjaytech.io` as `HRViewer`
  - `ravi.mehta@sanjaytech.io` as `EngineeringOperator`

### Outcome:
IAM role assignment demonstrates the principle of least privilege and separation of duties.

---

## 🚀 Phase 2 – App Deployment

**Objective**: Containerize and deploy a Flask-based Python application using Docker.

### Key Actions:
- Developed a simple Python web app (`app.py`) and declared dependencies in `requirements.txt`.
- Created a `Dockerfile` and built the image using:
  ```bash
  docker build -t my-flask-app .
  docker run -p 5050:5000 my-flask-app
  ```
- Accessed the running container via `http://localhost:5050`.

### Outcome:
Successfully demonstrated app containerization and local testing, foundational to cloud deployment pipelines.

---

## 🔐 Phase 3 – Data Access Control & Logging

**Objective**: Implement GCS bucket-level IAM and access audit logging.

### Key Actions:
- Created bucket: `gcp-app-data-bucket` (with uniform access enabled)
- Created access log bucket: `gcp-access-logs`
- Enabled audit logging:
  ```bash
  gsutil logging set on -b gs://gcp-access-logs -o access-log gs://gcp-app-data-bucket
  ```
- IAM roles assigned:
  - `ravi.mehta@sanjaytech.io`: **Storage Object Admin**
  - `alice.hr@sanjaytech.io`: **Storage Object Viewer**
- Role bindings and audit logs were validated using the GCP Console and Logs Explorer.

### Outcome:
Demonstrated secure, auditable access control using GCP-native tools and `gsutil` automation.

---

## 🛠️ Supporting Automation Scripts

Stored in `gsutil-scripts/`:
- `create-bucket.sh` – Automates bucket creation with uniform access
- `assign-iam-roles.sh` – Applies bucket-level IAM roles to users
- `enable-logging.sh` – Sets up audit logging for GCS access tracking

---

## ✅ Overall Project Outcome

This project simulates real-world app migration patterns with emphasis on:

- **Custom IAM policies**
- **Containerized app deployment using Docker**
- **Storage-level access control and logging**
- **Automation via `gsutil` scripting**

It aligns with GCP best practices for security, observability, and cloud-native transformation.

---

> **Project ID**: `gam-project-d3h4h`
