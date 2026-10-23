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