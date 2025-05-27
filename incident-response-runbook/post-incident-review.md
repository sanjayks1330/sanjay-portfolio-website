# 🧾 Post-Incident Review – Phishing Response

This document summarizes findings and improvements after handling a phishing email targeting `alice.hr@sanjaytech.io`.

---

## 🔍 Incident Summary

- **Incident Type:** Credential Phishing
- **Detection Method:** User Report + GAM search
- **User Impacted:** Alice Thomas (HR Department)
- **Initial Message:** Email claiming to be from `phisher@example.com`
- **Response Time:** < 15 minutes from detection to containment

---

## 🕒 Timeline of Events

| Time (BST)        | Event                                             |
|-------------------|---------------------------------------------------|
| 14:12             | Alice reported suspicious email                   |
| 14:15             | Email headers and domain verified                 |
| 14:18             | GAM used to search messages domain-wide          |
| 14:20             | Account access suspended, password reset         |
| 14:25             | Alert email sent to all users                    |
| 14:30             | Admin logs and login activity reviewed            |

---

## ✅ Actions Taken

| Phase             | Actions                                                                 |
|------------------|-------------------------------------------------------------------------|
| Detection         | Email verified via headers; domain lookup; searched tenant-wide using GAM. |
| Containment       | User account suspended; password reset; OAuth token revoked.            |
| Communication     | Awareness alert broadcast to all employees.                             |
| Logging & Review  | Cross-checked Admin Console logs, login audit, and OAuth app access.    |

---

## 📂 Evidence Collected

- `admin-console-email-search.png`: Message trace
- `reset-password-and-security-status.png`: Post-reset status
- `oauth-trusted-apps.png`: Trusted OAuth apps list
- `login-activity-query.png`: Login audit for suspicious IPs
- `investigate-tab-logs.png`: Access evaluation events
- `gam-error-log.txt`: GAM tool output/errors during scan

---

## 🔁 Lessons Learned

- Enforce stricter 2FA for high-risk departments (e.g., HR, Finance).
- Improve real-time email alerts for impersonation attempts.
- Centralize logging across email, login, and device activity.

---

## 🛡️ Policy or Tool Improvements

- Add App Access Controls audit to quarterly reviews.
- Review inactive or risky OAuth app scopes.
- Prepare response playbook as part of onboarding IT SOPs.

---

## 📘 Final Notes

All actions and findings were documented and filed. Screenshots and logs are available in the `incident-response-runbook/screenshots/` folder.

Prepared by: **Sanjay Krishnan**  
Workspace Domain: `sanjaytech.io`  
Date: May 27, 2025
