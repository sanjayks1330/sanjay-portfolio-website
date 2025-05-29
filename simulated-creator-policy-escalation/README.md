# 🎭 Simulated Creator Policy Escalation (Google Workspace + GCP)

This project simulates policy enforcement failures and responses involving a **Content Creator** user within a Google Workspace domain. It demonstrates how a seemingly routine user action can bypass security controls—triggering incident response, investigation, and policy reinforcement.

---

## 🧩 Scenario

A user from the **ContentCreators** OU (`creator.user@sanjaytech.io`) was able to:

- Install an **unapproved OAuth app** (YT Tracker – YouTube™ Stats & Analytics)
- Share a Google Doc publicly despite presumed restrictions
- Send an external email from a restricted OU

These actions simulate gaps in organizational policy enforcement and visibility.

---

## 📌 Project Phases

### ✅ Phase 1: Policy Violation Simulation

**Goal:** Simulate risky user behavior that should have been restricted.

**Actions Simulated:**
- Installed a third-party Marketplace app with Drive/Gmail scopes
- Publicly shared a document from Drive
- Sent an email to an external address

**Artifacts:**
- `creator-profile.png`
- `incident-summary.md`
- `unauthorized-oauth-app-installed.png`
- `drive-sharing-allowed.png`
- `external-email-sent.png`
- `creator-login-restriction.png`

📁 [View Phase 1](./phase-1-policy-escalation/)

---

### 🔍 Phase 2: Investigation

**Goal:** Examine audit logs and admin tools to trace user behavior.

**Steps:**
- Reviewed Drive audit logs for file sharing events
- Checked App Access Control logs for app installs
- Searched login and security events (no suspicious logins found)
- Verified OAuth scopes in Admin Console

**Artifacts:**
- `drive-log-events.png`
- `screenshots/oauth-app-accessed-services.png`
- `no-suspicious-signins.png`
- `investigation-summary.md`

📁 [View Phase 2](./phase-2-investigation/)

---

### 🛡️ Phase 3: Response & Policy Enforcement

**Goal:** Enforce controls and recommend preventive measures.

**Findings:**
- Installed app did not appear in Admin Console (possible visibility limitation)
- App was not blocked or scoped despite install
- Policy enforcement gaps identified for third-party apps

**Actions:**
- Reviewed App Access Control & scopes
- Suggested security control improvements

**Artifacts:**
- `app-access-control-no-oauth-app.png`
- `response-policy-action.md`

📁 [View Phase 3](./phase-3-response/)

---

## ⚙️ Tools Used

- Google Workspace Admin Console
- API Controls (OAuth, App Access)
- Investigation Tool
- Audit Logs (Drive, Login, App Access)
- Google Workspace Marketplace

---

## 🧠 Lessons Learned

- App Access Control may not show all OAuth installations without proper scope logging.
- Drive and Gmail restrictions must be enforced explicitly per OU.
- Visibility into user behavior is dependent on the Workspace edition and enabled services.

---

## 👤 Maintainer

**Sanjay Krishnan**  
Email: sanjay.krishnan@sanjaytech.io  
GitHub: [@sanjayks1330](https://github.com/sanjayks1330)

---

🔖 _This simulation forms part of a broader IT Security & Workspace Administration portfolio._
