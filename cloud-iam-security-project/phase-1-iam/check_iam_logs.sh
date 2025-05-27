#!/bin/bash
# Fetch IAM SetIamPolicy logs

gcloud logging read \
  'resource.type="project" AND protoPayload.serviceName="iam.googleapis.com" AND protoPayload.methodName="SetIamPolicy"' \
  --project="gam-project-fr2st" \
  --limit=10 \
  --format="json"

