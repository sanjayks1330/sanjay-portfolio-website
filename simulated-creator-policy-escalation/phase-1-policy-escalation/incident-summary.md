# 🧾 Incident Summary – Simulated Creator Policy Escalation

This document summarizes a simulated security policy failure involving a user from the Content Creators organizational unit within the `sanjaytech.io` Google Workspace environment.

---

## 🎯 Incident Overview

| Field                   | Details                                       |
|------------------------|-----------------------------------------------|
| **Simulated User**     | Chris Creator (`creator.user@sanjaytech.io`) |
| **Org Unit**           | /ContentCreators                              |
| **Incident Type**      | Unauthorized OAuth App Install + Data Sharing |
| **Environment**        | Google Workspace (Standard Edition)           |
| **Simulation Scope**   | Phase 1 – Policy Escalation Test              |
| **Detection Method**   | Manual testing + screenshots                  |
| **Admin Response**     | Pending corrective policy configuration       |

---

## 🚩 Simulated Policy Violations

| Action Attempted                         | Expected Policy Block | Actual Result            |
|-----------------------------------------|------------------------|---------------------------|
| Installed OAuth App (YT Tracker)        | Block unauthorized app | ❌ App installed allowed  |
| Shared Drive File Publicly              | Restrict public links  | ❌ Link sharing allowed   |
| Sent External Email                     | Block external email   | ❌ Email sent successfully |
| 2FA Enforcement on Login                | Require 2FA            | ✅ Login blocked (as expected) |

---

## 🧠 Lessons Simulated

- OAuth App control policy is not yet enforced at the Org Unit level.
- Drive sharing controls are insufficient for restricted user groups.
- External email restrictions were not applied to `/ContentCreators`.
- 2-Step Verification enforcement **was successful** — blocked login due to missing 2FA.

---

## 📌 Recommendations

- Enforce Context-Aware Access and Device-Based login restrictions.
- Add `/ContentCreators` to restricted sharing groups in Drive settings.
- Apply OAuth App allowlist to limit unauthorized third-party tools.
- Monitor policy logs and alerts in the Admin console.

---

## 📁 Supporting Evidence (Screenshots)

| Screenshot File                    | Description                                |
|-----------------------------------|--------------------------------------------|
| `creator-profile.png`             | Shows the user and OU assignment           |
| `creator-login-restriction.png`   | Shows failed login due to missing 2FA      |
| `unauthorized-oauth-app-installed.png` | YT Tracker installed from Marketplace     |
| `drive-sharing-allowed.png`       | File shared with "Anyone with the link"    |
| `external-email-sent.png`         | External email sent from restricted user   |

---

**Prepared by:** Sanjay Krishnan  
**Date:** May 28, 2025
