# 🔄 User Lifecycle Automation – Google Workspace

## 📌 Project Overview

This project automates the onboarding process of users in a Google Workspace domain using a shell script and the [GAM (Google Apps Manager)](https://github.com/GAM-team/GAM) command-line tool. The workflow reads user details from a CSV file and performs the following actions:

* Creates new user accounts
* Assigns users to specific Organizational Units (OUs)
* Adds users to Google Groups
* Creates Gmail aliases using `SendAs`

This automation ensures faster, consistent, and error-free provisioning of new employee accounts within a structured domain setup.

---

## 📁 Folder Structure

```
user-lifecycle-automation/
├── mock-data/
│   └── onboarding-users.csv
└── scripts/
    └── gam-onboard.sh
```

---

## 📄 onboarding-users.csv Format

Each row in the CSV should follow this format:

```
FirstName,LastName,Username,OrgUnitPath,Group,Alias
Priya,Menon,priya.menon,/HR,hr-team,p.menon
Ravi,Mehta,ravi.mehta,/Engineering,engineering,r.mehtha
```

* `Username` – The base username without domain (e.g., ravi.mehta)
* `OrgUnitPath` – OU to place the user under (e.g., /Engineering)
* `Group` – Group email alias to which the user should be added (e.g., engineering)
* `Alias` – Optional alias for Gmail (e.g., r.mehta)

---

## 🔧 Script: `gam-onboard.sh`

The script reads the CSV file and automates:

1. User creation with default password `test123`
2. OU assignment
3. Group membership using `gam update group`
4. Alias assignment using `gam user sendas`

---

## 💡 How to Run the Script

1. Make sure you have GAM installed and working:

   ```bash
   which gam
   ```

2. Navigate to the script folder:

   ```bash
   cd path/to/user-lifecycle-automation/scripts
   ```

3. Make the script executable:

   ```bash
   chmod +x gam-onboard.sh
   ```

4. Run the onboarding script:

   ```bash
   ./gam-onboard.sh
   ```

Ensure that:

* `gam` is available in your terminal
* You have permission to create users and groups in your Google Workspace domain

---

## 🧰 Technologies Used

* **GAM (Google Apps Manager)**: CLI for managing Google Workspace
* **Bash Scripting**: Automating onboarding flow
* **CSV**: Source file for bulk user data

---

## 🔮 Future Improvements

* 🔁 Automate offboarding (suspend users, remove from groups)
* 📊 Generate onboarding summary or reports
* ✉️ Email notification to HR/Manager after user creation
* 🔐 Secure password handling via external vault or token

---

## 👤 Author

**Sanjay Krishnan**
Domain: `sanjaytech.io`
[LinkedIn](https://www.linkedin.com/in/sanjay-krishnan-aa985b134/)
