#!/bin/bash

PROJECT_ID="gam-project-d3h4h"
BUCKET_NAME="gcp-app-data-bucket"
LOCATION="us-central1"

echo "Creating bucket: $BUCKET_NAME..."
gsutil mb -p $PROJECT_ID -l $LOCATION -b on gs://$BUCKET_NAME/
echo "Bucket created with uniform access in $LOCATION."
