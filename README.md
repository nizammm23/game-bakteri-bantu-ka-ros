# Archaea Quest

Files: `index.html` (game engine + UI) and `questions.js` (questionBank, teacher PIN, Firebase config).
To change the topic, edit only `questionBank` in `questions.js`.

## 1. Set up Firebase (free, lets teacher + student devices sync)
1. Go to https://console.firebase.google.com -> Add project (Analytics not needed).
2. Build -> **Realtime Database** -> Create database (choose a region near you) -> start in **test mode**.
3. Open the **Rules** tab and use (classroom use; anyone with the URL can read/write):
   ```json
   { "rules": { ".read": true, ".write": true } }
   ```
4. Project settings (gear) -> Your apps -> Web (`</>`) -> register app -> copy the `firebaseConfig` values
   (make sure `databaseURL` is included) into `firebaseConfig` at the bottom of `questions.js`.

Without this step the game still runs, but only in demo mode (tabs of one browser).

## 2. Run in VS Code
Open the folder in VS Code, install the **Live Server** extension, right-click `index.html` -> Open with Live Server.
Open the page in two tabs/devices: one as Teacher (PIN in `questions.js`, default `1234`), others as Students.

## 3. Deploy on GitHub Pages
```bash
git init
git add .
git commit -m "Archaea Quest"
git branch -M main
git remote add origin https://github.com/USERNAME/archaea-quest.git
git push -u origin main
```
Then on GitHub: Settings -> Pages -> Source: **Deploy from a branch** -> `main` / `(root)` -> Save.
After a minute the game is live at `https://USERNAME.github.io/archaea-quest/`. Share that link with students.

## Notes
- The teacher PIN and Firebase config are visible in the page source; fine for a classroom, not for sensitive data.
- Use "Remove all students" in the teacher lobby to clear the list between classes.
