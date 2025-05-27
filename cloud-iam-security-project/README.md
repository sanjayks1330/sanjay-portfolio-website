# 🔐 Cloud IAM & Endpoint Security Project (Google Cloud + Workspace)

This repository simulates a real-world, enterprise-grade security architecture in Google Cloud Platform and Google Workspace. It is divided into two self-contained phases that demonstrate **identity-based access** (IAM) and **device-based access control** (Context-Aware Access).

---

## 📁 Project Phases

---

### ✅ Phase 1: Role-Based IAM Access Control

**Goal:**  
Create and assign custom IAM roles to HR and Engineering users based on the principle of least privilege.

**Highlights:**
- Defined custom IAM roles:
  - `HRViewer` (IAM + Storage viewer)
  - `EngComputeAdmin` (Compute Engine viewer)
- Assigned roles to Workspace users via `gcloud`
- Validated role bindings using Cloud Shell
- Attempted audit log extraction (no logs due to indexing delay)
- Documented and illustrated with screenshots

📁 Folder: [`phase-1-iam/`](./phase-1-iam/)  
📄 Main file: [`README.md`](./phase-1-iam/README.md)

---

### 🔒 Phase 2: Context-Aware Access & Endpoint Security (Simulated)

**Goal:**  
Simulate device-level security enforcement using Context-Aware Access, Endpoint Verification, and Workspace device policies.

**Highlights:**
- Described how to create Access Levels to enforce:
  - Device verification
  - Encryption and screen lock
  - OS policy (macOS/Windows only)
- Linked device management to GCP service access (simulated)
- Included mock screenshots and setup documentation
- Explained Workspace edition limitations (no CAA in Business Standard)

📁 Folder: [`phase-2-endpoint-security/`](./phase-2-endpoint-security/)  
📄 Files:
- [`context_aware_access.md`](./phase-2-endpoint-security/context_aware_access.md)
- [`device_policy_setup.md`](./phase-2-endpoint-security/device_policy_setup.md)

---

## 🧰 Technologies Used

- Google Cloud Platform (IAM, Audit Logs, Custom Roles)
- Google Workspace Admin Console
- `gcloud` CLI
- Bash scripting
- Endpoint Verification (Chrome Extension)
- Markdown & GitHub Documentation

---

## 📌 Status

| Phase | Status | Type |
|-------|--------|------|
| Phase 1 – IAM Role-Based Access | ✅ Complete | Hands-on |
| Phase 2 – Context-Aware Access | 🟡 Simulated | Documented |

---

## 👤 Author

**Sanjay Krishnan**  
Google IT Support Professional | Cloud Admin | Workspace Engineer  
🔗 LinkedIn: [linkedin.com/in/sanjay-krishnan-aa985b134](https://www.linkedin.com/in/sanjay-krishnan-aa985b134)

---
