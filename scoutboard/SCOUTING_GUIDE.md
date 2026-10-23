# ScoutBoard Central — Team Lobby Guide
Website: https://scoutboardcentral.netlify.app/

## Welcome
ScoutBoard is a passwordless, phone-first basketball scouting and high-school journalism workspace. Everyone can visit the site and sign up; scouting records are PRIVATE to their team lobby.

## Make your own team ("server")
1. Open the website and sign in with your email.
2. Select **Team → + Create / Join**, or **Workspace** if this is your first login.
3. Enter your team's name and choose **Create private lobby**.
4. In **Workspace → Lobby settings**, set your scout display name.
5. As owner, select **Create invitation** and share the generated link or private code.
6. Each invited scout signs in with their own email and joins through the link or code. They see only teams they've joined.

An owner can manage members. A scout can join several organizations and switch among them with **TEAM** at the top of the page. Notes and data never move automatically when switching.

## Rapid courtside workflow
1. Create a team and game, then a player with jersey number, position and class.
2. Choose the current game and, if useful, filter the player list by team.
3. Switch players using the next/previous arrows, roster cards or keyboard arrow keys.
4. Tap an event to record a stat and matching timestamped observation together. Events include made/missed 2s and 3s, free throws, assists, rebounds, steals, blocks, turnovers and fouls.
5. Add tags and freeform observations for tactical context. Use **Ctrl+Enter** to save from the note box.
6. **Courtside focus** concentrates on fast tracking; **Complete report** shows the full player grading panel.

### Evaluation reference
Grades are on a 1–10 scale **relative to the competition observed**, not an automatic NBA projection: 1–3 below average, 4–6 average, 7–8 high impact, 9–10 exceptional. Keep grades separate from confidence, role projection, strengths, development areas, and qualitative evidence. Multiple games and film provide better context than one-off impressions.

Tracked stats are scout observations, not official box-score statistics.

## Preserve your scouting work
- Player reports and private organization records live in Supabase PostgreSQL, not only in your browser.
- Use **Export backup** regularly. It exports all records you can access in the active team, including revision history.
- Scouting notes are append-only for ordinary app users. Player edits, grades and stat updates retain revision history.
- Wait for **Saved / Synced to cloud** after recording a play before switching away.
- Do not place private student contact information, educational records, or sensitive material into scouting reports without authorization.

## Owner responsibilities
- Invite only authorized scouts; private invitations expire after 14 days and can be used by a limited number of people.
- Review team membership periodically.
- Export backups after important events and store them securely.
- Maintain appropriate permissions for youth-athlete images, video and information.
- The public sign-in page does not make private reports publicly viewable.

## Current release notes
- Web app designed for desktop and phones.
- Isolated multi-team lobbies, multiple scouts, owner invitations and revocation.
- Atomic stat + observation recording and save-error feedback.
- Separate evaluation and tracked stat records for each scout, game and player.
- This is an early access release. Cross-device live authentication, email deliverability, backup restore, capacity, accessibility and full browser-level production testing require further validation. The app is not an official NBA scouting system.

## Technical integration
The app uses a static Netlify frontend with a hosted Supabase PostgreSQL backend, and is intended to be integrated with another site later without changing the primary scouting database. Never commit secret/service-role keys to a public repository.
## Switch players like the courtside redesign
- In the live scouting desk, tap **HOME** or **AWAY** at the top of the game. The player's side changes immediately.
- Tap a **jersey-number card** to select any player on that side; no page navigation is required.
- **Previous / Next** cycles through the players on that side. The quarter and game clock do not reset.
- If the cards are empty or show **Roster not linked**, tap **Link rosters** and select the Home and Away team. This association saves to the cloud for every scout in your lobby.
- Write your quick note or choose basketball tags at any time. Switching players keeps unfinished note and evaluation drafts *on that device*. Revisit the player to continue.
- **Save observation** sends a note to the team's cloud database. A device draft is not yet shared with other scouts and is not an independent backup.
- If someone adds a new game before either team exists, create the teams and players first, then link both rosters before recording events. This avoids attributing a play to the wrong player.

## Current courtside release
- **Scout tools → Prospect board** opens a searchable list of all players by name, jersey, team, position, and graduation class. It shows evidence coverage, not an automated talent ranking.
- **Scout tools → Export full scouting timeline (CSV)** downloads all observation entries accessible in the active team. Entries explicitly identify reversed events.
- **Player report** includes scout-tracked shooting percentages, that scout's evaluation, observations from the selected game, and available player history.
- **Home / Away** switches between rosters. Creating a game now lets you link saved teams immediately, and **Edit game** fixes matchups and dates later.
- **Edit team** uses the roster team filter on desktop; players can be edited individually from their selected profile.
- **↻ Sync** refreshes your desk. The most recent game, side, player, period, and game clock are saved locally so a page reload does not reset your courtside selection.
- **Review / undo plays** reverses the entire recorded stat event, rather than subtracting an arbitrary point. Reversed observations remain in the historical timeline.
- **Mobile homescreen shortcut:** open your published Netlify website in your browser and use Add to Home Screen, when offered. ScoutBoard still requires network access for cloud saves; it is not an offline-first application.
- **Retry pending play** reuses a unique request ID if a connection problem leaves a tap unconfirmed. It cannot double-count that same request. Verify the timeline before clearing an unconfirmed event.
- **Privacy notice** is available in the sign-in interface and footer.

## Publication and operations
The application is published from the `scoutboard` directory of the GitHub repository `rakim0112/rakim-spriggs-portfolio`; `scoutboard/netlify.toml` contains the static-site build configuration. In Netlify, configure the site **scoutboardcentral** to use production branch `main`, Base directory `scoutboard`, Publish directory `.`, and no build command. Confirm **Published** status in Netlify's Deploys screen. Maintain the Supabase Auth Site URL and allowed Redirect URL as `https://scoutboardcentral.netlify.app/`.

Supabase project: `utqefsoimeijjveytqmv`. The public frontend contains only the publishable client key. Never expose the Supabase secret/service-role key.

### Production acceptance checks
1. Confirm the Netlify link renders, including mobile, and users can request and complete sign-in links.
2. From account A, create a private lobby, two teams, a game and a player. Log a made shot and confirm the points and FGM/FGA values.
3. Refresh the page and sign in on a second device. Confirm the cloud observation remains while unfinished drafts are device-local.
4. Generate an invitation, sign in as account B, join account A's lobby, and verify data access. Make a separate lobby for account B and confirm A cannot see B's private records without membership.
5. Reverse an incorrectly recorded made shot. Check that all affected counters decrement and the source event is marked **REVERSED**, not erased.
6. Export JSON and CSV, open both files, and verify the report contains the expected records. Keep copies securely.
7. Test slow/offline network behavior: a pending event must be retried with the same request ID, not tapped again as a new event.

Database transaction tests have passed for atomic event recording, deduplication, reversal, roster membership, and access restrictions, but **the current live Netlify production deployment, real email delivery, full mobile cross-device authentication, disaster recovery, and large-scale load testing still require human acceptance testing**.
