# 🛠️ Google Workspace Admin Project – HR & Engineering Department Setup

## 📚 Table of Contents
- [📌 Project Overview](#-project-overview)
- [🧾 HR Configuration](#-hr-configuration)
- [💻 Engineering Configuration](#-engineering-configuration)
- [👥 User Lifecycle Automation](#-user-lifecycle-automation)
- [📁 Folder Structure](#-folder-structure)
- [🧰 Technologies Used](#-technologies-used)
- [🚀 How to Run the Project](#-how-to-run-the-project)
- [🔮 Future Enhancements](#-future-enhancements)
- [👤 Author](#-author)

---

## 📌 Project Overview
This project simulates the configuration of HR and Engineering departments within a live Google Workspace domain – `sanjaytech.io`. It automates user lifecycle management and implements various administrative policies using GAM (Google Apps Manager) and Bash scripting.

---

## 🧾 HR Configuration
- Created OU: `HR`
- Added users:
  - `alice.hr@sanjaytech.io`
  - `ramesh.kapoor@sanjaytech.io`
  - `fatima.khan@sanjaytech.io`
- Group: `hr-team@sanjaytech.io`
- Restrictions:
  - Drive and Gmail sharing restricted
- SendAs alias for Gmail:  
  Assigned: `fatima.khan@sanjaytech.io` → `alias: fatima.khan+hr@sanjaytech.io`

---

## 💻 Engineering Configuration
- Created OU: `Engineering`
- Added users:
  - `ravi.mehta@sanjaytech.io`
  - `sara.patel@sanjaytech.io`
  - `john.lin@sanjaytech.io`
- Group: `engineering@sanjaytech.io`
- 2FA enforced, device policies applied
- Email routing configured for compliance
- SendAs alias for Gmail:  
  Assigned: `ravi.mehta@sanjaytech.io` → `alias: ravi.mehta+eng@sanjaytech.io`

---

## 👥 User Lifecycle Automation
- **User Onboarding**: Automated onboarding for users using a CSV file with user details (name, username, OU path).
- **Group Assignment**: Users are automatically added to relevant groups like `hr-team@sanjaytech.io` and `engineering@sanjaytech.io`.
- **Alias Assignment**: Gmail aliases are created using `SendAs` to provide each user with an alias.
- **Automation**: Controlled using a shell script `gam-onboard.sh`.

---

## 📁 Folder Structure

"
google-workspace-admin-project/
├── README.md
├── Engineering_Project_Checklist.pdf
├── policies/
│ ├── device-policy.md
│ └── sharing-policy.md
├── screenshots/
│ └── project-visual.png
└── user-lifecycle-automation/
├── mock-data/
│ └── onboarding-users.csv
└── scripts/
└── gam-onboard.sh

"

---

## 🧰 Technologies Used
- **Google Workspace Admin Console**: For managing users, groups, and organizational units.
- **GAM (Google Apps Manager)**: For scripting user creation, alias assignment, and group membership.
- **Bash Scripting**: Automates batch onboarding and configuration using the command line.
- **CSV Files**: Used to load bulk user details for onboarding.

---

## 🚀 How to Run the Project

1. **Clone the repository**  
git clone https://github.com/sanjayks1330/it-projects-portfolio.git

2.Navigate to the onboarding automation directory
cd google-workspace-admin-project/user-lifecycle-automation

3.Run the onboarding script
./scripts/gam-onboard.sh
Make sure gam is installed and configured properly on your system.

🔮 Future Enhancements
✅ Offboarding automation: suspend accounts, remove groups, and revoke aliases.

✅ Enforce device-level policies using GAM.

✅ Setup email filters and alerts for onboarding confirmation.

✅ Generate audit reports on onboarding execution.

👤 Author
Sanjay Krishnan
LinkedIn
Domain: sanjaytech.io