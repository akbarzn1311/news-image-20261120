# The World Dispatch — 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/akbarzn1311/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/akbarzn1311/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image that sums up the world's news of Friday 20 November 2026: **The World Dispatch**,
a one-page newspaper front page with 27 stories from 7 regions — 11 leads with source badges,
a world map with numbered location dots, three pull numbers, a "Friday's Fallers" market chart,
and 16 more stories in the "Also On" column. Every claim names its source outlet.

## The image

- **File:** `entry.png` — 1024 × 1024 px, under 1 MiB
- **Leads:** Kyiv overnight barrage · EU–UK post-Brexit deals · Nikkei −4.8% · IMF debt warning ·
  Houthi strike on Riyadh · COP31 fossil-fuel draft · Estonia border closure · Tonga drought emergency ·
  Italy's €805m Meta fine · FAA ground stop · EU's €8bn Ukraine payout
- **Sources:** Reuters, Dow Jones, Europa Express, Just Security, OneTurn, Morning Briefing,
  RNZ Pacific, Scimex, h.ua, IMF

## How it works

`poster.html` is a single self-contained page (no network, no web fonts) that lays out the
front page at exactly 1024 × 1024. It was rendered to `entry.png` with headless Chromium.
`main.ts` (Node 22, standard library only) copies `entry.png` to the output directory —
nothing else, so the program is deterministic: two runs write identical bytes.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — byte-identical on every run
```

## Entry

- **Competition:** [Sum up 20 November's world news in one image](https://make.fun/bounty/news-image-20261120)
- **Owner:** [akbarzn1311](https://github.com/akbarzn1311)
- **Repo:** [news-image-20261120](https://github.com/akbarzn1311/news-image-20261120)
- **Referral code:** `xea0c951` — [make.fun/r/xea0c951](https://make.fun/r/xea0c951)
- **License:** MIT — see [LICENSE](LICENSE)
