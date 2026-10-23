Gym Log beta v0.13.2
Base: v0.13.1
- One-time conservative automatic correction for legacy UTC calendar date bug.
- Only fixes logs with savedAt and an exact previous-day UTC/JST mismatch.
- Excludes edited logs; leaves ambiguous records unchanged.
- Original full history is backed up in localStorage key gym-date-fix-v0132-backup before changes.
- Manual training date editor added to existing history edit screen.
- Does not alter savedAt, set details, calories, Health payload or Shortcuts.
- Existing Health entries are NOT modified; handle those separately.
- Existing localStorage keys and all previous features preserved.
- Updated service worker cache to gym-log-v0.13.2.

Upload all files in the ZIP to the root of the GitHub Pages repository.
