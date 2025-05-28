# 🔍 Investigation Summary – Simulated Creator Policy Escalation

This document outlines findings from Phase 2 of the policy escalation simulation involving a Google Workspace user (`creator.user@sanjaytech.io`) attempting to bypass organizational security policies.

---

## 📁 Investigation Overview

| Item | Description |
|------|-------------|
| Simulated User | `creator.user@sanjaytech.io` |
| Organizational Unit | `/ContentCreators` |
| Phase | 2 – Investigation |
| Tools Used | Admin Console > Audit Log Viewer, Investigation Tool, GAM (attempted) |

---

## ✅ Events Reviewed

### 1. Drive Log Events

- **Search Performed:** Investigated Drive activity for `creator.user@sanjaytech.io`
- **Result:** File sharing was permitted due to current Drive settings.
- 📸 Screenshot: `drive-log-events.png`

### 2. OAuth App Activity

- **Search Performed:** Looked for third-party OAuth applications granted access.
- **Result:** Found `Unauthorized YouTube Analytics` app with Drive access scope.
- 📸 Screenshot: `screenshots/oauth-app-accessed-services.png`

### 3. Login & Device Activity

- **Search Performed:** Verified login IPs, devices, and geo-locations.
- **Result:** No suspicious or unusual login events were detected.
- 📸 Screenshot: `no-suspicious-signins.png`

---

## 🔍 Observations

- OAuth app control policies were not enforced, allowing risky apps to connect.
- Drive sharing restrictions were not applied to the OU `/ContentCreators`.
- No evidence of unauthorized access beyond the user's permitted actions.

---

## 🛡️ Recommendations

- Apply App Access Control policies to block unapproved OAuth clients.
- Review and restrict Drive sharing at the OU level.
- Monitor logs regularly using pre-built queries in the Investigation Tool.

---

📁 File Path:  
`simulated-creator-policy-escalation/phase-2-investigation/investigation-summary.md`
