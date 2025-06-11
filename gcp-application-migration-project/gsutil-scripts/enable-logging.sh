#!/bin/bash

PROJECT_ID="gam-project-d3h4h"
LOG_BUCKET="gcp-access-logs"
TARGET_BUCKET="gcp-app-data-bucket"

echo "Creating log bucket (if not already exists)..."
gsutil mb -p $PROJECT_ID -l us-central1 -b on gs://$LOG_BUCKET/

echo "Enabling access logging on target bucket..."
gsutil logging set on -b gs://$LOG_BUCKET -o access-log gs://$TARGET_BUCKET

echo "Access logging enabled on $TARGET_BUCKET. Logs will be delivered to $LOG_BUCKET with prefix 'access-log'."
