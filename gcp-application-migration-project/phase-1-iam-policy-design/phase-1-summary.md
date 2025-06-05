# 📄 IAM Role Summary – Phase 1

**Project ID:** `gam-project-d3h4h`  
**Date:** 2025-06-05  
**Phase:** IAM Policy Design (Phase 1)  
**Directory:** `gcp-application-migration-project/phase-1-iam-policy-design/`

---

## ✅ Custom Roles Created

### 🔹 HRViewer
- **Purpose:** Auditing access for HR users
- **Permissions Included:**
  - `iam.roles.get`
  - `iam.roles.list`
  - `logging.logEntries.list`
  - `logging.logMetrics.list`
  - `logging.sinks.list`
  - `logging.views.list`
  - `resourcemanager.projects.get`
- **Assigned To:** `alice.hr@sanjaytech.io`

### 🔹 EngineeringOperator
- **Purpose:** Infrastructure visibility for engineering tasks
- **Permissions Included:**
  - [permissions assumed per project scope; custom role YAML not shown in command history]
- **Assigned To:** `ravi.mehta@sanjaytech.io`

---

## 📸 Screenshot Reference

- [`iam-role-bindings-confirmation.png`](screenshots/iam-role-bindings-confirmation.png): Visual confirmation from Google Cloud Console IAM tab showing correct principal-role mappings.

---

## 🧰 Tools Used

- Google Cloud Console (IAM)
- `gcloud` CLI
- Custom YAML for role definition
- Workspace directory: `gcp-application-migration-project/phase-1-iam-policy-design/`

---

## 🧾 Notes

- Role creation confirmed via both CLI and Console.
- `alice.hr` and `ravi.mehta` are simulated users for demo IAM enforcement.
- Proceeding next to **Phase 2 – App Deployment**.

