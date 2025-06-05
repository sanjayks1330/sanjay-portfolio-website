# Phase 3: Data Access Control

In this phase, we implemented fine-grained access control for GCP Cloud Storage buckets to enforce least-privilege principles for project users.

## Objectives

- Create a Cloud Storage bucket.
- Assign object-level permissions to project users.
- Validate access permissions through simulated user roles.

## Actions Taken

1. **Bucket Configuration**:
   - Utilized the default bucket created automatically in the GCP project for testing access control.
   - Identified two buckets: one auto-generated and the other likely created during previous configurations.

2. **Role Assignments**:
   - `ravi.engineer@sanjaytech.io` was assigned the **Storage Admin** role.
   - `alice.hr@sanjaytech.io` was assigned the **Storage Object Viewer** role.
   - Roles were updated using the GCP Console IAM Permissions panel.

3. **Verification**:
   - Verified role assignments through the IAM section and by inspecting the permissions.
   - Captured a screenshot: `storage-access-control-ravi-admin-alice-viewer.png`.

## Outcome

The roles were correctly applied, ensuring:
- Ravi has full administrative access to the storage bucket (including uploading and deleting objects).
- Alice can only view the storage objects and cannot modify or delete them.

This setup adheres to the principle of least privilege and demonstrates effective cloud-native access governance.

---