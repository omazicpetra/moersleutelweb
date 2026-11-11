# Research and implementation notes

Reviewed on 11 November 2026. This is a university project based on the three supplied PDFs and the official sources below.

## What informed the build

**The assignment.** The brief permits a focus on an individual customer-journey stage, including longer subscription retention. It asks for on-site functionality grounded in research and feasible for a small team. This implementation follows the group's existing-member concept, not a subscription-acquisition landing page. The theoretical model is a proposal to test, not evidence that this interface already improves retention.

**The submitted solution.** The founder film represents founder–brand connection; flavour selection and voting provide participation; the discussion, shared goal and leaderboard provide community interactions. Perceived membership value is the proposed mediator, with subscription retention as the outcome. No effect size or retention uplift is asserted by the prototype.

**Visual reference.** The five-page Guild mockup controls the design: black header, charcoal body, amber controls, textured display headings, hexagonal member avatars, two-column content and rectangular outlines. The live site's headings report Woodbarn Rough. The supplied mockup is visually closer to Rubik Dirt, which is bundled under its SIL Open Font License. Body typography uses the requested Helvetica-style system stack. Numbered section labels were omitted as requested; the journey uses small functional icons. Chevron icons replace the generic text-arrow buttons.

## Verified brand context

| Official source | Finding and application |
| --- | --- |
| [About Moersleutel](https://moersleutel.com/about/) | The brewery began with four brothers in Alkmaar in 2016. The engineering and experimentation story fits a film explaining ingredients and brewing decisions. |
| [The Guild](https://moersleutel.com/guild/) | Standard boxes contain 14 beers, Dark boxes 12, on a roughly two-month delivery cadence. Monthly billing is not monthly delivery. November has the Advent delivery. The prototype retains the team's November sample without claiming a monthly shipment schedule. |
| [Guild FAQ](https://moersleutel.com/faq/) | Existing member-shop access uses the email associated with the subscription. A production version should extend this existing membership relationship rather than inventing a disconnected identity system. |
| [Nine-year anniversary brewer film](https://moersleutel.com/9-years-anniversary-bieren-video/) | The exact film in the mockup features brewers Rowan and Mark. It is embedded as an explicitly attributed reference, not a fabricated founder mystery film. |
| [Official video](https://www.youtube.com/watch?v=BariVsvp3rM) | Source of the playable stand-in and thumbnail. The barrel-room chapter begins around 18:16 and serves as a labelled reference for the bonus-clip mechanic. |
| [Official founder Q&A](https://www.youtube.com/watch?v=Ko8Frisdx80) | Co-founder Pim and head brewer Rowan answer community questions. Linked from the prototype Q&A, demonstrating an existing format the concept can build on. |

The live Guild page contains changing commercial terms. Pricing, cancellation terms and subscription checkout are intentionally not duplicated inside the member experience. Shop/About links lead to the current official site.

## Behavior and boundaries

- A submitted guess gates the community, Q&A and leaderboard in the presentation. Direct hash navigation is checked too. This is a UX gate, not security.
- Members can select one to three distinct flavours. Confirmation locks the selection. The results are derived from the locked guess and a reveal flag; repeated rendering, reloads or reveal clicks cannot accumulate duplicate points.
- The sample scoring awards 2 for exact notes and 1 for designated family notes, per selected note. Season totals and names are illustrative, matching the mockup's ranking concept rather than real member records.
- Voting uses base sample counts plus one locally stored member vote. Changing a vote replaces it.
- Posted text is escaped before rendering. Inputs have length limits. Browser storage is validated and recovered if malformed. None of this replaces server-side validation for a real deployment.
- Motion is limited to route changes, staggered content, progress bars, hover depth and tape peeling. Touch screens and reduced-motion users receive a simpler presentation.
- The paper answer can be peeled after guessing; scores are still held until the shared reveal. This follows the team's physical-tape concept. A real community should decide how to manage spoilers during that interval.

## Production handover

Replace localStorage with authenticated endpoints for release content, guesses, votes, discussion, questions and scores. Membership eligibility and one-entry rules must be checked server-side. The flavour answer must not be shipped in client JavaScript before its release. A QR alone cannot enforce membership or prevent link sharing.

Use a persistent release ID and an idempotent scoring record per member/release. Set the reveal timezone and publish on the server. Define tie rules, season boundaries and moderation responsibilities. The sample rank totals are not a proposed final scoring dataset. Confirm whether guessing should unlock discussion immediately and whether the physical answer may be peeled before the community reveal.

Produce the dedicated founder note and bonus film; confirm the recipe, flavour-family mapping and final copy with Moersleutel. Retention should be measured over time against a suitable comparison group; engagement, perceived value and retention are separate outcomes.

## Asset credits

- `brewers-video.jpg`: thumbnail for Moersleutel Craft Brewery's official public nine-year anniversary video, used for this educational mockup. Replace or obtain clearance for production reuse.
- `rubik-dirt.woff`: Latin subset of Rubik Dirt from Google Fonts. Original licence included in `dist/assets/rubik-dirt-OFL.txt`.
- QR and small interface icons: generated directly as SVG; no external icon library.
- No real member data, testimonials, live engagement figures or invented founder quotations are used.
