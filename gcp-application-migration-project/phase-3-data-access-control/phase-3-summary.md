# Phase 3: Data Access Control

In this phase, we implemented fine-grained access control for GCP Cloud Storage buckets to enforce least-privilege principles for project users.

## Objectives

- Create a Cloud Storage bucket.
- Assign object-level permissions to project users.
- Enable access logging for auditability.
- Validate access permissions through simulated user roles.

## Actions Taken

1. **Bucket Configuration**:
   - Created `gcp-app-data-bucket` in `us-central1` with uniform bucket-level access enabled using:
     ```bash
     gsutil mb -p gam-project-d3h4h -l us-central1 -b on gs://gcp-app-data-bucket/
     ```
   - Set up a logging bucket `gcp-access-logs` to capture access activity.

2. **Role Assignments**:
   - `ravi.engineer@sanjaytech.io` was assigned the **Storage Object Admin** role.
   - `alice.hr@sanjaytech.io` was assigned the **Storage Object Viewer** role.
   - Roles were applied using:
     ```bash
     gsutil iam ch user:alice.hr@sanjaytech.io:objectViewer gs://gcp-app-data-bucket
     gsutil iam ch user:ravi.mehta@sanjaytech.io:objectAdmin gs://gcp-app-data-bucket
     ```

3. **Access Logging**:
   - Enabled access logging to track user interactions with storage objects using:
     ```bash
     gsutil logging set on -b gs://gcp-access-logs -o access-log gs://gcp-app-data-bucket
     ```

4. **Verification**:
   - Verified IAM role bindings via the GCP Console and role audit screens.
   - Captured screenshot: `storage-access-control-ravi-admin-alice-viewer.png`.

## Outcome

The roles and access logging were successfully configured:
- Ravi has full administrative access to the storage bucket.
- Alice has view-only access to storage objects.
- Logging is in place to track access events for future auditing.

This setup demonstrates strong cloud-native access control, audit readiness, and adherence to the principle of least privilege.
