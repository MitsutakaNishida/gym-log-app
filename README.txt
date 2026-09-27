Gym Log beta v0.13.0

Base: v0.12.3 (Health sync fix retained)

Added exercises:
- ケーブル外旋（ローテーターカフ） / Cable External Rotation
  - Categories: 肩 / 肩ケア / ケーブル
  - 0kg is a valid recorded weight
  - Recommendation: 0kg or lightest resistance, 15-20 reps x 2 sets
  - No automatic load-progression recommendation
  - Form and stop-warning guidance displayed in the exercise detail panel
- パロフプレス（ケーブル） / Cable Pallof Press
  - Categories: 体幹 / ゴルフ／体幹 / ゴルフ / ケーブル
  - Left/right is recorded per set with an optional backward-compatible `side` field
  - Recommendation: 10-12 reps each side x 2 sets, ~2 sec hold
  - Stability/form takes priority over load progression

Recommendation behavior:
- Cable External Rotation can surface as a shoulder-care warm-up candidate when chest/shoulder work is planned or recorded.
- Cable Pallof Press can surface as a golf/core candidate when performed fewer than 2 times in the last 7 days.
- Special care/stability exercises use dedicated recommendation text instead of the normal "+1 rep / progression" text.

Compatibility:
- Existing localStorage keys are unchanged.
- Existing saved set records {exercise, kg, reps} remain valid and are read unchanged.
- `side` is added only to exercises that require left/right tracking (currently Cable Pallof Press).
- Set count remains implicit: one saved set row = one set. No migration is required.
- Existing history, previous-record copy, draft, edit, alias, cardio, calorie estimate, and Health sync flows are retained.
- Health payload remains GYMLOG_V1~recordID~date~kcal~minutes and the shortcut still reads the clipboard split by ~.

Future cable exercise structure:
- exerciseDB now supports metadata such as English name, training type, side mode, targets, purpose, form, recommendation, progression policy, safety text, and routine tags.
- Wood chops, low-to-high cable lifts, and other rotation/anti-rotation cable exercises can be added as ゴルフ／体幹 entries without changing the saved-data model.

Upload all files in this ZIP to the GitHub Pages repository root, replacing existing files.
