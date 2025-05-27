# 🛡️ Phishing Incident Response Runbook – Google Workspace

This document outlines the full response process for handling phishing attacks within a Google Workspace environment, including triage, containment, communication, and post-incident review.

---

## 🚨 Phase 1: Detection & Triage

Use this checklist to quickly assess and triage reported phishing emails or login attempts within Google Workspace.

| Step | Task | Tool/Location | Notes |
|------|------|----------------|-------|
| 1 | Confirm email is reported by user or flagged by Gmail | Gmail or Admin Console | Ask user to forward or report |
| 2 | Check message headers and sender domain | Gmail (Show Original) | Verify SPF, DKIM, DMARC |
| 3 | Search for the same message across users | Admin Console > Email Log Search or GAM | Helps determine if it's a targeted or mass phishing attempt |
| 4 | Check if links or attachments were clicked | Google Workspace alert center / browser history | Check for suspicious activity or redirection |
| 5 | Check recipient’s recent login IP and device activity | Admin Console > User > Security | Look for unexpected locations or devices |
| 6 | Verify 2FA status of user | Admin Console > User > Security | Lack of 2FA increases risk |
| 7 | Ask user if any credentials or MFA code was entered | Direct conversation or ticket notes | If yes → escalate to Account Compromise |

---

## 🧭 Phase 2: Identification & Scope

### 🔍 How the Threat Was Detected
- User reports suspicious email
- Alert from third-party security tool
- Admin activity review via Google Admin Console or Gmail logs

### ✅ Initial Checklist
| Task | Status |
|------|--------|
| Email reported by user | ✅ |
| Email log search performed | ✅ |
| Additional recipients identified | ✅ |

---

## 🛠️ Phase 3: Containment & Eradication

### 🧹 Email Deletion – Simulated via Admin Console

Due to Workspace policy restrictions, automated deletion using GAM (`delete messages`) is not permitted.

### 🚫 GAM Limitation

GAM's delete functionality requires:
- A service account with domain-wide delegation
- Private key upload permission (currently blocked)

### ✅ Manual Deletion Steps

1. Go to [Email Log Search](https://admin.google.com/ac/email/audit)
2. Filter by recipient (e.g., `alice.hr@sanjaytech.io`)
3. Filter by sender (e.g., `phisher@example.com`)
4. Verify delivery and message ID
5. If available, use **Investigation Tool** to delete
6. If not, instruct user to delete manually and empty Trash

---

## 👥 Phase 4: User Notification

### 📨 Initial Warning Email Template

```
Subject: Immediate Action Required – Phishing Email Detected

Hi [User],

Our system has identified a suspicious phishing email sent to your inbox.
Please search for emails from phisher@example.com and delete them immediately.
Then, empty your Trash and confirm you did not click any links.

If you did interact with the email, contact IT support immediately.

Thanks,  
IT Security Team
```

### 📄 Confirmation Follow-Up Email

```
Subject: Confirmation Needed – Phishing Email Deletion

Hi [User],

Please confirm the following:

You have deleted the phishing email  
You emptied the Trash folder  
You did NOT click any links or enter credentials  

If you did, let us know immediately for account review.

Thanks,  
IT Security Team
```

### ✅ Follow-Up Checklist

| Task | Status |
|------|--------|
| User notified | ✅ |
| Confirmed deletion | ⬜ |
| Risk assessment done | ⬜ |
| Account reviewed | ⬜ |

---

## 🔐 Phase 5: Account Compromise Remediation

If user admits interaction (clicked link or submitted login):

- Reset password immediately
- Revoke sessions and tokens  
  _Admin Console → Security → User account → End sessions_
- Review OAuth apps and third-party tokens
- Audit user login history (IP/location)
- Enable/verify 2FA

---

## 🔁 Phase 6: Post-Incident Review

🔗 [Post-Incident Review Summary](./post-incident-review.md)

### 📘 Lessons Learned
- Was the phishing realistic or obvious?
- Did user spot/report it or fail to?
- Did email security catch it?

### 🛡️ Suggested Improvements
- Enable Gmail warning banners
- Use context-aware access (CaaP) for key apps
- Educate users on phishing indicators
- Create auto-forward filters to security team

---

## 📁 Files & Artifacts

| File | Purpose |
|------|---------|
| `admin-console-email-search.png` | Screenshot of manual search |
| `reset-password-and-security-status.png` | Account reset evidence |
| `2fa-status.png` | 2FA audit |
| `login-activity-query.png` | Login activity verification |
| `investigate-tab-logs.png` | Admin audit review |
| `oauth-app-review.png` | Trusted apps config |
| `gam-error-log.txt` | GAM limitation output |
| `phishing-awareness-email.md` | Follow-up user communication |
| `post-incident-review.md` | Summary of resolution and improvements |

---

## 👤 Maintainer

**Sanjay Krishnan**  
Email: sanjay.krishnan@sanjaytech.io  
GitHub: [@sanjayks1330](https://github.com/sanjayks1330)
