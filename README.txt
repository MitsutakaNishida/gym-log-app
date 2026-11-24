UPSHIFT v0.14.4 — 自重・左右各・保持時間対応

公開方法: ZIPを展開し、index.html / sw.js / manifest.webmanifest / icon-192.png / icon-512.png を既存の GitHub Pages リポジトリ gym-log-app のルートへ上書きしてコミットしてください。GitHub Pages の公開完了後にアプリ内「最新版を確認・再読み込み」を実行してください。

重要: 更新前にUPSHIFTの「バックアップを書き出す」から現在の全履歴をJSONで保存してください。古いPWAアイコン、Webサイトデータは消さないでください。

変更: 重量種別 weighted / bodyweight を追加。bodyweightにはkgを保存しません。旧記録のweightType未設定は従来の数値重量として解釈します。バードドッグとシングルレッグ・グルートブリッジは左右各の回数を1セットとして保存。バードドッグは保持秒を任意で保存。新規種目の音声検索・編集・履歴・JSONバックアップに対応。

確認: Node.js構文チェック、データモデル・検索・バリデーション・JSON往復の自動テスト合格。iPhone実機動作は未検証。ブラウザーE2Eテストは環境制限で実行できませんでした。
