# 🔒 Phase 2 – Context-Aware Access & Endpoint Security (Simulated)

This document outlines how device-based access control **would be configured** using Context-Aware Access (CAA) in Google Workspace and GCP. Due to license restrictions, this phase is documented as a **simulated implementation**.

---

## 🎯 Objective

Restrict Google Cloud access to only secure, trusted devices by enforcing:
- Endpoint verification
- Device encryption
- Screen lock
- OS compliance (e.g., macOS, Windows)

---

## ❗ Workspace Edition Limitation

⚠️ **Context-Aware Access is only available with Workspace Enterprise or Education editions**.  
This project is simulated under a Business Standard license (`sanjaytech.io`), which does not include CAA capabilities.

---

## 🧪 Simulated Implementation Steps

### ✅ Step 1: Enable Context-Aware Access in Google Workspace
**(Admin Console → Security → Context-Aware Access)**  
> Create and publish access levels like “Compliant Devices Only”

### ✅ Step 2: Define Access Level Rules
- Device must be endpoint verified
- Disk encryption enabled
- Screen lock enabled
- OS = macOS or Windows

### ✅ Step 3: Apply Access Level to GCP
**(Admin Console → Apps → Additional Google Services → Google Cloud → Access Control)**  
> Attach the custom access level to enforce restrictions

---

## 🧰 Tools (Required for Real Implementation)

- Google Workspace Admin Console (Enterprise Edition)
- Google Chrome + Endpoint Verification Extension
- GCP Access Management

---

## 📋 Outcome

Although this phase is documented without live enforcement, it shows:
- Awareness of layered security (identity + device trust)
- Knowledge of GCP + Workspace integration
- Enterprise-ready cloud admin mindset

---

## 🔗 Related

- [`device_policy_setup.md`](./device_policy_setup.md)
- [Google Docs: Context-Aware Access Overview](https://support.google.com/a/answer/9036319)

