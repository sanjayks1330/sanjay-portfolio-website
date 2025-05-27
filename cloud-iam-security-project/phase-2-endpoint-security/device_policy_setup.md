# 🛡️ Device Policy Setup (Simulated) – Google Workspace

This guide outlines how to set up **device compliance policies** using Google Workspace Admin Console. While this simulation is based on Enterprise functionality, it reflects the intent and steps followed in real implementations.

---

## 🎯 Objective

Ensure that only **secure, verified devices** can access Google Cloud by enforcing:
- Disk encryption
- Screen lock
- OS restrictions
- Endpoint Verification

---

## 🛠️ Simulated Configuration Steps

---

### 1. Enable Device Management

1. Go to: [https://admin.google.com](https://admin.google.com)
2. Navigate to: **Devices > Mobile & endpoints > Settings**
3. For Desktop → Choose:
   - **Manage devices**
4. In **Advanced Settings**:
   - Require **screen lock**
   - Require **disk encryption**
   - Block **rooted or jailbroken** devices

---

### 2. Endpoint Verification

1. Ask users to install the Chrome extension:  
   👉 [Endpoint Verification – Chrome Web Store](https://chrome.google.com/webstore/detail/endpoint-verification/bfdcgfclilajhigdemnphahnpoikkbnb)

2. After installation, verified devices appear under:  
   **Admin Console → Devices > Endpoints**

3. Ensure:
   - Chrome is signed in
   - Extension is enabled and syncing with Workspace

---

### 3. Context-Aware Access Linkage (Simulated)

Once devices are verified:
- Go to: **Security > Context-Aware Access > Access Levels**
- Create a rule like:
  - OS must be macOS or Windows
  - Device must be verified
  - Encryption enabled
  - Screen lock enabled

> ⚠️ This step requires Workspace Enterprise license.


---

## 📋 Outcome

Even if simulated, this setup reflects:
- Enterprise-grade thinking about device trust
- Clear understanding of Workspace security policies
- Familiarity with enforcement workflow across Google Admin Console

---

## 🔗 Related

- [`context_aware_access.md`](./context_aware_access.md)

