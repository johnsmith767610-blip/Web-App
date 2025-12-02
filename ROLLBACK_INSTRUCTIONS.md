# Rollback Instructions - Solar Square Theme

## Quick Rollback

If you don't like the Solar Square changes, you can easily revert by running:

```bash
git revert <commit-hash>
```

Or revert specific files:

```bash
# Revert theme colors only
git checkout HEAD~ -- src/index.css

# Revert component changes
git checkout HEAD~ -- src/components/Navigation.tsx
git checkout HEAD~ -- src/components/Hero.tsx
git checkout HEAD~ -- src/components/QuoteForm.tsx
```

## What Was Changed

### Modified Files
1. **src/index.css**
   - Updated CSS variables with Solar Square colors
   - Added new utility classes (.solar-gradient, .btn-solar, etc.)
   - Added keyframe animations (fadeInUp, slideInLeft, etc.)
   - Added smooth scroll behavior

2. **src/components/Navigation.tsx**
   - Imported scroll-utils
   - Added "Join the Solar Revolution" CTA button
   - Updated all navigation links to use smooth scroll
   - Added data-nav-link attributes for scroll handling

3. **src/components/Hero.tsx**
   - Changed `<section>` to `<header id="header">`
   - Updated button to use new solar button styling
   - Changed text to use solar-gradient-text class
   - Added "Get Your Free Quote Today" CTA

4. **src/components/QuoteForm.tsx**
   - Added full-page quote section with id="get-free-quote"
   - Enhanced styling with card-solar class
   - Added Sun icons throughout
   - Kept modal functionality intact

5. **src/pages/Index.tsx**
   - Added QuoteForm import
   - Added <QuoteForm /> component between Testimonials and Team

### New Files
1. **src/lib/scroll-utils.ts**
   - New utility functions for smooth scrolling
   - `smoothScrollToElement()` function
   - `setupSmoothScrollLinks()` initialization
   - GA tracking hook support

2. **SOLAR_SQUARE_CHANGES.md**
   - Comprehensive documentation of all changes
   - Usage instructions
   - Component details

3. **ROLLBACK_INSTRUCTIONS.md** (this file)
   - Rollback guidance
   - Detailed change log

### Database Changes
- **Migration:** 20251202_fix_rls_policies
- **Change:** Fixed RLS policies for quote_requests table
- **Rollback:** This can be reverted in Supabase console

## Revert Database Changes

To revert the RLS policy changes:

```sql
-- Drop the new policies
DROP POLICY IF EXISTS "Anyone can submit quote requests" ON quote_requests;
DROP POLICY IF EXISTS "Anyone can view quote requests" ON quote_requests;

-- Restore original policies
CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);
```

## Original Styling Reference

The original color scheme used:
```css
--primary: 265 89% 58%;      /* Purple */
--secondary: 186 85% 48%;    /* Cyan */
--accent: 32 98% 55%;        /* Orange */
--background: 0 0% 100%;     /* White */
--foreground: 210 20% 15%;   /* Dark Blue */
```

New Solar Square scheme:
```css
--primary: 43 97% 51%;       /* Solar Yellow */
--secondary: 31 100% 50%;    /* Solar Orange */
--accent: 172 58% 51%;       /* Eco Teal */
--background: 48 100% 97%;   /* Light Warm */
--foreground: 216 14% 9%;    /* Dark Navy */
```

## If You Want to Keep Changes But Revert One Component

```bash
# Keep theme but revert navigation back to original
git show HEAD~:src/components/Navigation.tsx > src/components/Navigation.tsx

# Keep theme but revert quote form
git show HEAD~:src/components/QuoteForm.tsx > src/components/QuoteForm.tsx
```

## Files That Can Be Safely Deleted

If reverting, these files can be removed:
- `src/lib/scroll-utils.ts` (only used for smooth scroll)
- `SOLAR_SQUARE_CHANGES.md`
- `ROLLBACK_INSTRUCTIONS.md`

## Rebuild After Rollback

After reverting:
```bash
npm run build
```

Should complete successfully without errors.

## Support for Selective Rollback

You can also selectively keep changes:

**Option 1: Keep theme, revert navigation**
- Keep Solar Square colors in index.css
- Revert Navigation.tsx to original

**Option 2: Keep navigation, revert theme**
- Keep smooth scroll functionality
- Use original color scheme

**Option 3: Keep quote form, revert hero**
- Keep get-free-quote section
- Revert hero styling

Just edit the files manually and rebuild.

## Full History

View all changes:
```bash
git log --oneline -n 10
git show <commit-hash>
```

See what changed in specific files:
```bash
git diff HEAD~ src/index.css
git diff HEAD~ src/components/Navigation.tsx
```

## Questions?

If something doesn't look right after rollback:
1. Check that all files reverted correctly
2. Run `npm run build` to verify no errors
3. Check browser console for any JavaScript errors
4. Verify database migration was reverted in Supabase
