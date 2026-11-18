# DIU EVENT-X — Supabase Auth build

This package is based on the uploaded Phase 2 project. The original visual
assets and `style.css` are retained unchanged.

## Connected
- Supabase Auth student signup, login and logout
- Auth session restoration
- `profiles` row creation through the supplied database trigger
- Student ID and department in `student_profiles`
- Student preferences in `student_preferences`
- Profile updates
- Supabase password-reset email and password update

## Phase 2 additions
Events, registrations, volunteer applications, saved events, post review,
news and notifications now use Supabase tables with Row Level Security and
realtime sync. See `SETUP_AND_TEST_BN.txt` for the dashboard steps (URL
configuration, email templates, custom SMTP, first manager) and the final
test checklist. Re-run `DIU_EVENT_X_Supabase_Setup.sql` once (safe to re-run).

## Setup
1. Run `DIU_EVENT_X_Supabase_Setup.sql` once in Supabase SQL Editor.
2. Configure the GitHub Pages URL in Supabase Authentication > URL Configuration
   (Site URL and Redirect URLs).
3. Extract this ZIP and upload/replace the files in your GitHub repository root.
4. Register with a new email. Confirm it if email confirmation is enabled.
5. Check `profiles`, `student_profiles`, and `student_preferences` in Supabase.

Only the Supabase publishable key is included in the browser. Never expose a
service-role/secret key in frontend code.
