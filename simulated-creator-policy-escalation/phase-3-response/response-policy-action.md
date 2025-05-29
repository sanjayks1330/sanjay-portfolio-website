# 🔐 Phase 3: Response & Policy Enforcement

This document outlines the administrative response taken after identifying unauthorized activity by the user `creator.user@sanjaytech.io` in Phase 1 of the simulation.

---

## 🎯 Objective

Apply appropriate restrictions or policy enforcement to mitigate unauthorized OAuth app installations, external sharing, and data exfiltration risks from the **ContentCreators** Organizational Unit (OU).

---

## 🛑 Action Plan

| Step | Action Taken | Status |
|------|--------------|--------|
| 1 | Identify unauthorized app from Phase 1 | ✅ App: YT Tracker – YouTube™ Stats & Analytics |
| 2 | Locate the app in **App Access Control** | ❌ App not listed under accessed or configured apps |
| 3 | Manually reviewed `API Controls` → `App Access Control` | ✅ Confirmed no visibility for the app |
| 4 | Verified Drive, Gmail, Calendar scopes | ✅ Limited results to configured apps only |
| 5 | Screenshot captured showing missing app visibility | 📸 `app-access-control-no-oauth-app.png` |
| 6 | Prepared follow-up recommendation | ✅ (see below)

---

## ⚠️ Observations

- Despite the successful installation of the **YT Tracker** app during the simulation, the app does **not appear** under **Configured Apps** or **Accessed Apps** in the Admin Console.
- This may be due to:
  - The app not requesting sensitive scopes
  - Delayed OAuth scope logging
  - Admin visibility limitations in some editions of Google Workspace

---

## ✅ Recommendations

- 🔐 Enforce tighter restrictions under **Security > API Controls**:
  - Block app installations from unverified publishers.
  - Enable app access control for **all services**, not just a select few.
- 📩 Configure alerts for new OAuth client installations using **Security Center rules**.
- 🧪 Test with a different OAuth app that requests **Drive read/write** or **Gmail send** scopes to validate enforcement visibility.
- 📄 Document all such anomalies in a centralized runbook for incident handling.

---

## 📁 Related Assets

| File | Description |
|------|-------------|
| `unauthorized-oauth-app-installed.png` | App installed by simulated user |
| `app-access-control-no-oauth-app.png` | Screenshot confirming app not listed post-install |

---

Maintained by: **Sanjay Krishnan**  
Email: sanjay.krishnan@sanjaytech.io  
GitHub: [@sanjayks1330](https://github.com/sanjayks1330)

