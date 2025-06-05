# GCP Application Migration Project

This project simulates a real-world GCP application migration scenario involving IAM policy design, application containerization and deployment, and data access control using Google Cloud Storage. It is structured in three progressive phases.

---

## 📁 Folder Structure

```
gcp-application-migration-project/
├── phase-1-iam-policy-design/
│   ├── hr-viewer-role.yaml
│   ├── engineering-operator-role.yaml
│   ├── screenshot-iam-role-assignment.png
│   └── phase-1-summary.md
│
├── phase-2-app-deployment/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── flask-app-running-terminal.png
│   ├── flask-app-in-browser.png
│   └── phase-2-summary.md
│
├── phase-3-data-access-control/
│   ├── storage-access-control-ravi-admin-alice-viewer.png
│   ├── gcp-bucket.png
│   └── phase-3-summary.md
│
└── documentation/
    └── migration-summary.md
```

---

## ✅ Summary of Project Phases

### Phase 1 – IAM Policy Design
Custom IAM roles were created and assigned:
- `HRViewer` role: Read-only access to IAM and logging (assigned to Alice).
- `EngineeringOperator` role: Operator access for engineering tasks (assigned to Ravi).
- Verified via Cloud Console IAM bindings.

### Phase 2 – App Deployment
A simple Flask application was:
- Containerized using Docker (`Dockerfile`).
- Built and run locally using `docker build` and `docker run`.
- Output verified via browser and terminal screenshots.

### Phase 3 – Data Access Control
Created a GCS bucket and tested object-level IAM roles:
- Assigned Alice as `Storage Object Viewer`.
- Assigned Ravi as `Storage Object Admin`.
- Verified permissions via GCP Console.

---

## 🛠 Tools and Skills Demonstrated
- **Google Cloud IAM and Roles**
- **GCP Project and Resource Management**
- **Cloud Storage Access Controls**
- **Docker Containerization**
- **Flask Web Framework**
- **gcloud CLI usage**
- **YAML Role Definitions**

---

## 🎯 Objective
This project was created as part of a hands-on portfolio to showcase GCP security controls, infrastructure configuration, and app deployment workflows—aligned to roles like **Customer Engineer** or **Cloud Support Engineer**.

---

