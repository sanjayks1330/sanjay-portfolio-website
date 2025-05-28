# 📝 Incident Summary – Phase 1: Creator Policy Escalation

This document captures the summary of a simulated security incident involving policy misconfiguration for a "Content Creators" organizational unit within the Google Workspace environment at `sanjaytech.io`.

---

## 📌 Incident Overview

- **Incident Type:** Policy Misconfiguration & Over-Privilege Risk
- **Date Detected:** 28-05-2025
- **Simulated User Affected:** `creator.user@sanjaytech.io`
- **Organizational Unit:** `/ContentCreators`

---

## ⚠️ Summary of Misconfiguration

A simulated "Content Creators" user was incorrectly provisioned with elevated access to GCP resources and unrestricted Workspace settings. This over-permissioned state could lead to unauthorized data sharing, service configuration changes, or privilege escalation via app integrations.

---

## 🔍 Key Risk Factors

| Risk Area                    | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| Org Unit Policy Gap         | Lacked proper access control enforcement (e.g., sharing, app restrictions). |
| IAM Role Assignment          | Creator user assigned broad Viewer/Editor GCP roles.                        |
| OAuth & Marketplace Access  | No app access restrictions, allowing risky third-party integrations.        |

---

## 🛠️ Corrective Actions (Simulated)

- Created `/ContentCreators` OU in Admin Console.
- Reviewed user profile for `creator.user@sanjaytech.io`.
- Documented the risk and planned policy corrections.
- Phase 2 will simulate endpoint and sharing policy enforcement.

---

## 📎 Attachments

| File Name             | Description                             |
|----------------------|-----------------------------------------|
| `creator-profile.png` | User account profile screenshot         |

---

## 🧠 Lessons & Next Steps

- Always enforce access controls at OU level during user onboarding.
- Apply least privilege principle when assigning GCP IAM roles.
- Proceed to **Phase 2** to enforce device, sharing, and app access policies.

---

📁 Saved as part of:
`simulated-creator-policy-escalation/phase-1-policy-escalation/incident-summary.md`
