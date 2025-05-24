# 🛠️ Google Workspace Admin Project – HR & Engineering Department Setup

## 📌 Project Overview
This project simulates the configuration of HR and Engineering departments within a live Google Workspace domain – `sanjaytech.io`. It automates user lifecycle management and implements various administrative policies using **GAM** (Google Apps Manager) and **Bash scripting**.

---

## 🧾 HR Configuration
- Created OU `HR`
- Added users: `alice.hr@sanjaytech.io`, `ramesh.kapoor@sanjaytech.io`, `fatima.khan@sanjaytech.io`
- Group: `hr-team@sanjaytech.io`
- Restricted **Drive** and **Gmail** sharing for HR users
- **SendAs** alias for Gmail: Assigned `fatima.khan@sanjaytech.io` alias `fatima.khan+hr@sanjaytech.io`

## 💻 Engineering Configuration
- Created OU `Engineering`
- Users: `ravi.mehta@sanjaytech.io`, `sara.patel@sanjaytech.io`, `john.lin@sanjaytech.io`
- **2FA** enforced, device policies applied for enhanced security
- Group: `engineering@sanjaytech.io`
- Email routing configured for compliance
- **SendAs** alias for Gmail: Assigned `ravi.mehta@sanjaytech.io` alias `ravi.mehta+eng@sanjaytech.io`

## 🔄 User Lifecycle Automation
- **User Onboarding**: Automated onboarding for users using a CSV file with user details (name, username, OU path).
- **Group Assignment**: Users are automatically added to the relevant groups like `hr-team@sanjaytech.io` and `engineering@sanjaytech.io`.
- **Alias Assignment**: Gmail aliases are created using **SendAs** to provide each user with an alias.

## 📁 Folder Structure

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


---

## 🛠️ Technologies Used
- **Google Workspace Admin Console**: For managing users, groups, and organizational units.
- **GAM (Google Apps Manager)**: For automating administrative tasks like user creation, alias assignment, and group management.
- **Bash Scripting**: For automating the execution of the onboarding process, group assignment, and alias configuration.
- **CSV Files**: For bulk input of user data during the onboarding process.

## 🚀 How to Run the Project

1. **Clone the repository**:
git clone https://github.com/yourusername/google-workspace-admin-project.git


2. **Navigate to the `user-lifecycle-automation/` folder**:
cd google-workspace-admin-project/user-lifecycle-automation/


3. **Run the onboarding script** to onboard users:
./scripts/gam-onboard.sh


---

## 📦 Future Enhancements
- **Offboarding**: Automate user suspension, removal from groups, and alias removal.
- **Enforce Device Policies**: Apply more granular device policies using GAM.
- **Reporting**: Generate audit reports for user activities and compliance.
- **Email Auditing**: Setup tools for better email activity tracking.

## 📬 Author
**Sanjay Krishnan**  
[LinkedIn](https://www.linkedin.com/in/sanjay-krishnan-aa985b134/)  
📂 `sanjaytech.io` (Admin Domain)

