🛠️ Google Workspace Admin Project – HR & Engineering Onboarding

📌 Overview

This project simulates the onboarding process for HR and Engineering departments in a Google Workspace domain (sanjaytech.io). It leverages GAM (Google Apps Manager) and bash scripting to automate:

User account creation from CSV

Assignment to Organizational Units

Group memberships

Gmail SendAs alias configuration

✅ Features Implemented

Feature

Description

👤 User Creation

Users are provisioned from a CSV using GAM

🗂️ Organizational Units

Users are placed under /HR and /Engineering OUs

👥 Group Membership

Users are added to hr-team@sanjaytech.io and engineering@sanjaytech.io groups

✉️ Gmail Aliases

Configured Gmail SendAs aliases (e.g., p.menon@sanjaytech.io)

🖥️ Automation

Shell script executes onboarding in one step

🔍 Verification

Results confirmed via Admin Console and gam info queries

🧾 Departments & Users

HR Department

OU: /HR

Group: hr-team@sanjaytech.io

Users:

alice.hr@sanjaytech.io

fatima.khan@sanjaytech.io

priya.menon@sanjaytech.io

Engineering Department

OU: /Engineering

Group: engineering@sanjaytech.io

Users:

ravi.mehta@sanjaytech.io

sara.patel@sanjaytech.io

john.lin@sanjaytech.io

🔄 Subproject: User Lifecycle Automation

Located in: google-workspace-admin-project/user-lifecycle-automation/

This module automates user onboarding using:

onboarding-users.csv: defines users, OUs, groups, and aliases

gam-onboard.sh: a bash script to create users, assign OUs, add to groups, and set up Gmail SendAs aliases

Folder Contents:

google-workspace-admin-project/
└── user-lifecycle-automation/
    ├── mock-data/
    │   └── onboarding-users.csv
    └── scripts/
        └── gam-onboard.sh

📁 Full Folder Structure

it-projects-portfolio/it-projects-portfolio/
└── google-workspace-admin-project/
    ├── README.md
    ├── Engineering_Project_Checklist.pdf
    ├── policies/
    │   ├── device-policy.md
    │   └── sharing-policy.md
    ├── screenshots/
    │   └── project-visual.png
    └── user-lifecycle-automation/
        ├── mock-data/
        │   └── onboarding-users.csv
        └── scripts/
            └── gam-onboard.sh

🖼️ Visual Preview



📦 Tools Used

Google Workspace Admin Console

GAM (Google Apps Manager) – GAM GitHub

Shell Scripting (Bash)

CSV for bulk user data

🚀 Future Enhancements

🔁 Offboarding: suspend accounts, remove from groups

🔒 Enforce device policies via GAM

📊 Reporting: user activity, login audits

📬 Author

Sanjay Krishnan🧑‍💻 LinkedIn📂 sanjaytech.io (Admin Domain)