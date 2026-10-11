# Loop Playground

A private, harmless fixture repository for testing Loop's end-to-end GitHub workflow.

## What it exercises

- Issue pickup and status mapping
- Worktree + conventional branch creation
- Lint, typecheck, test and build checks
- Pull requests and review feedback
- Staging/production deployment artifacts (no hosting)
- A controlled, manually triggered failing workflow and successful retry

The failure workflow is intentionally manual. It never fails normal pull requests or `main`.

## Issue #2 proof

The welcome action previously assigned the same text every time it was clicked.
The fix writes only when the visible message changes; the focused test verifies
that a repeated click does not cause a second update.
