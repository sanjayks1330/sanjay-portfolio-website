#!/bin/bash

BUCKET_NAME="gcp-app-data-bucket"

echo "Assigning IAM roles..."
gsutil iam ch user:alice.hr@sanjaytech.io:objectViewer gs://$BUCKET_NAME
gsutil iam ch user:ravi.mehta@sanjaytech.io:objectAdmin gs://$BUCKET_NAME
echo "IAM roles assigned to Alice (Viewer) and Ravi (Admin)."
