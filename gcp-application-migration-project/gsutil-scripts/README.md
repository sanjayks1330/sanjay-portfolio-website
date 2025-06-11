# GCP Application Migration & IAM Security Project

## 🚀 Project Overview
This project simulates a real-world cloud migration scenario by deploying a Python Flask application to Google Cloud Platform (GCP) using Docker and Cloud Run. It emphasizes IAM security, least privilege access, audit logging, and secure data storage using Cloud Storage.

## ⚙️ Tools & Services Used
- **Docker** – For containerizing the Python Flask app
- **Google Cloud Run** – For serverless app deployment
- **Cloud IAM** – For custom role and service account management
- **Cloud Storage** – For object storage with bucket-level IAM
- **gcloud CLI & gsutil** – For automation and resource management
- **Cloud Logging** – For centralized logging and audit trails

## 📋 Migration Plan & IAM Strategy
- **Step 1: IAM Role Design**
  - Created custom roles for Viewer and Admin access
  - Defined least-privilege access based on user roles (e.g., HR, Engineering)

- **Step 2: App Deployment**
  - Built and containerized Flask app using Docker
  - Deployed app to Cloud Run with service account authentication

- **Step 3: Secure Data Storage & Access Logging**
  - Created Cloud Storage bucket (`gcp-app-data-bucket`) in `us-central1` with uniform access:
    ```bash
    gsutil mb -p gam-project-d3h4h -l us-central1 -b on gs://gcp-app-data-bucket/
    ```
  - Assigned IAM roles via:
    ```bash
    gsutil iam ch user:alice.hr@sanjaytech.io:objectViewer gs://gcp-app-data-bucket
    gsutil iam ch user:ravi.mehta@sanjaytech.io:objectAdmin gs://gcp-app-data-bucket
    ```
  - Enabled access logging to `gcp-access-logs` for auditing:
    ```bash
    gsutil mb -p gam-project-d3h4h -l us-central1 -b on gs://gcp-access-logs/
    gsutil logging set on -b gs://gcp-access-logs -o access-log gs://gcp-app-data-bucket
    ```

- **Step 4: Monitoring & Logging**
  - Configured Cloud Logging to capture service and IAM events
  - Verified access logs and IAM bindings via console and log buckets

## 🔐 Risk Management & Mitigation
| Risk | Mitigation |
|------|------------|
| Overpermission | Used scoped IAM roles and minimal privilege access |
| Unauthorized access to data | IAM bindings only with uniform bucket access |
| Lack of audit visibility | Enabled Cloud Logging and GCS access logging |

## 📂 Key Artifacts
- `phase-1-iam-policy-design/` – IAM policy YAMLs, screenshots, and role summary
- `phase-2-app-deployment/` – Flask app source code, Dockerfile, deployment artifacts
- `phase-3-data-access-control/` – GCS access setup, IAM role binding proof, and access control validation
- `gsutil-scripts/` – Automation scripts for:
  - `create-bucket.sh` – Creates storage bucket with uniform access
  - `assign-iam-roles.sh` – Assigns Viewer/Admin roles to users
  - `enable-logging.sh` – Configures access logging to a dedicated log bucket
- `documentation/` – Architecture diagram and full migration-summary

## 🔗 Demo Access
Not publicly hosted. To test locally:
```bash
docker build -t flask-app .
docker run -p 5000:5000 flask-app
```

## 📌 Summary
This project demonstrates a complete cloud-native application migration, secure IAM enforcement, data access governance, and logging readiness on Google Cloud. It reflects best practices aligned with roles like Google Cloud Customer Engineer and Infrastructure Specialist.
