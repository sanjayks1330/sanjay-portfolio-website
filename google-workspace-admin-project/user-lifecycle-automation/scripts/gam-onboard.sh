#!/bin/bash

# Set your domain
DOMAIN="@sanjaytech.io"

/Users/sanjayks/bin/gam7/gam csv ../mock-data/onboarding-users.csv gam create user ~Username firstname ~FirstName lastname ~LastName password test123 org ~OrgUnitPath

/Users/sanjayks/bin/gam7/gam csv ../mock-data/onboarding-users.csv gam update group ~Group add member user ~Email

/Users/sanjayks/bin/gam7/gam csv ../mock-data/onboarding-users.csv gam user ~Username add alias ~Alias$DOMAIN

