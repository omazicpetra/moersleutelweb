# The Guild — Inside the Blend

A working front-end of Team 2B's Moersleutel unboxing concept. The charcoal, amber, distressed headings, square panels and page compositions follow the supplied **Guild unboxing experience** PDF.

## Open it in Visual Studio Code

1. Extract the entire ZIP first.
2. In VS Code, choose **File → Open Folder** and select the extracted folder.
3. Open **dist/index.html** in your browser. No installation or build is required.

For a local web server (recommended for the embedded YouTube player), either use VS Code's **Live Server** extension on `dist/index.html`, or install Node.js and run:

```bash
npm start
```

Open the address printed in the terminal, normally `http://localhost:3000`. No `npm install` is needed. The external videos and shop links need an internet connection; the interface, fonts and images are bundled locally.

## Try the complete journey

- Start on **Watch**. Play the real reference video, expand the sample hints or read the story.
- Continue to **Guess**. Pick one to three flavours, optionally write a note, then confirm your guess.
- The **Community** opens. Vote on the next box, post, reply, like a message and open the founders' Q&A.
- Open **Leaderboard** to see the rankings, expand the full table or inspect recent editions.
- Use **Menu → The paper in your box** to see the QR and animated tape. The tape peels after your guess is locked. The print action hides the digital tape so a physical strip can cover the printed answer.
- Use **Demo controls → Show the shared reveal** to reveal the sample flavour and update your points. You can also demonstrate the 80% community goal and bonus clip.
- Use **Demo controls → Restart the experience** before presenting to a new audience.

The profile button changes your display name and offers reduced motion. Search helps locate screens. Keyboard navigation, native dialog focus management, focus outlines and system reduced-motion preferences are supported.

## Where to edit

| File | Purpose |
| --- | --- |
| `dist/index.html` | Header, footer, page shell and metadata |
| `dist/styles.css` | All styles, colours, typography, responsive layouts and animations |
| `dist/content.js` | Flavour options, recipe answer, hints, sample members, posts, video IDs and voting options |
| `dist/state.js` | Saved-state validation, flavour limits, vote calculations, scores and ranking |
| `dist/app.js` | Screen templates, routing, dialogs, forms and interactions |
| `dist/assets/` | Local display font, font licence, video thumbnail, QR and favicon |
| `docs/RESEARCH-AND-HANDOVER.md` | Brand research, source links and implementation boundaries |
| `tests/state.test.cjs` | Focused tests of guessing, storage recovery, voting and score behavior |

Colours are CSS variables at the top of `styles.css`. The display font is **Rubik Dirt**, chosen to match the mockup. The body uses **Helvetica Neue / Helvetica / Arial**. There are no remote font dependencies.

The site intentionally uses a fixed **November 2026 sample edition**. The shared reveal is controlled manually for the presentation; it does not automatically trigger from the device clock. To rename the edition throughout, edit the visible November copy in `app.js` and the settings in `content.js`. A production version should render all edition-specific copy from one server-managed release record.

## What works, and what is simulated

All visible prototype interactions work. Guesses, votes, posts, replies, questions, profile settings and reveal state persist in **localStorage on the same browser and origin**. They are not shared with other people, sent to Moersleutel, or synced between the hosted link and your local copy. Private browsing or disabled storage can clear or prevent persistence; the interface shows a warning when it cannot save.

This is **not a production member platform**. There is no live membership check, server database or real customer data. The QR is a navigation link, not secure access control. Its included destination is the private hosted presentation, which requires the owner's sign-in. Replace the QR destination when the project has its final location and access policy.

The real public video is a **stand-in**, as in the mockup. Rowan and Mark are brewers; they are not described as the founders in the reference attribution. The November mystery, clues, members, dialogue and scores are clearly illustrative. A second link plays the real Q&A with co-founder Pim and head brewer Rowan.

Use `npm test` for the focused state checks. The application has no runtime package dependencies.

## Before a real launch

Connect the experience to Moersleutel's existing member login and validate active membership on the server. Store submissions and discussion centrally; enforce one locked guess/vote per member and release. Publish verified recipes and scores from the server, not from `content.js`. Replace the sample founder film and data, implement moderation, and obtain approval for the final brand assets. See the handover for details.
