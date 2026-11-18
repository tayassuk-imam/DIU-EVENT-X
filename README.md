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

## Not fully connected yet
Events, event registrations/approvals, volunteer applications, saved events,
event submissions/reviews, news, notifications, admin/manager management,
and reports still use the original browser-side demo data model. This is not
a complete multi-user backend or production-ready release. See
`NEXT_STEPS_BN.txt` and `INTEGRATION_STATUS_BN.txt`.

## Setup
1. Run `DIU_EVENT_X_Supabase_Setup.sql` once in Supabase SQL Editor.
2. Configure the GitHub Pages URL in Supabase Authentication > URL Configuration
   (Site URL and Redirect URLs).
3. Extract this ZIP and upload/replace the files in your GitHub repository root.
4. Register with a new email. Confirm it if email confirmation is enabled.
5. Check `profiles`, `student_profiles`, and `student_preferences` in Supabase.

Only the Supabase publishable key is included in the browser. Never expose a
service-role/secret key in frontend code.
