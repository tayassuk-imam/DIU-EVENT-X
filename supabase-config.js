/* Supabase browser configuration for DIU EVENT-X.
 * Publishable key only. Never place a service_role/secret key in frontend code.
 */
window.DIU_EVENTX_SUPABASE_URL = "https://egjmhdgrrdrxrnvjefcb.supabase.co";
window.DIU_EVENTX_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_VXpdxeQhy4HA8mUj9cBy5Q_trkAakDZ";

if (!window.supabase || typeof window.supabase.createClient !== "function") {
  console.error("Supabase JS v2 failed to load. Check internet/CDN access.");
} else {
  // detectSessionInUrl is off on purpose: the site uses #/hash routes, so
  // app.js reads confirmation / password-reset links itself (see handleAuthRedirect).
  window.diuEventxSupabase = window.supabase.createClient(
    window.DIU_EVENTX_SUPABASE_URL,
    window.DIU_EVENTX_SUPABASE_PUBLISHABLE_KEY,
    { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } }
  );
}
