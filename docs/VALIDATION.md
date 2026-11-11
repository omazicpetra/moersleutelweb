# Validation

Validated for the delivered prototype.

## Automated checks

All 6 focused state tests passed using `npm test`:

- Maximum of three distinct valid flavour choices.
- Locked choices cannot be edited; no points before reveal.
- Repeated reveal calculations and storage restoration do not duplicate points.
- Malformed storage cannot create a locked guess without valid choices.
- Changing a poll choice replaces the member's previous vote.
- Member posts and replies survive save/restore as strings.

JavaScript syntax checks passed. All local files referenced by the HTML were present.

## Browser checks

- Desktop layout at approximately 1363px and responsive frames at 390px and 768px.
- No horizontal document overflow in the phone and tablet layouts.
- Local font and poster image loaded successfully.
- Attempting community access before submitting a guess redirects to the guess screen.
- Flavour selection, three-choice limit, optional notes, confirmation and community unlock.
- Voting, posting, replies, save/restore after reload, and founder Q&A submission.
- Leaderboard navigation, reveal dialog and recalculated season points.
- Search, paper insert, hidden flavour and tape peeling.
- Embedded official video player loaded with its controls and an external YouTube fallback.
- Community goal switches from 64% to the 80% bonus-unlock state using the demo controls.

These checks validate a local, browser-based demonstration. They do not establish real membership security, cross-device synchronization, production readiness or a measured retention effect. Physical printer output and all browser/OS combinations have not been tested.
