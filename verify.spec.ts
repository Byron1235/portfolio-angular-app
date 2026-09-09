import { test, expect } from '@playwright/test';

test('Verify Frontend Redesign', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  // Wait for the app preloader to finish (approx 6 seconds based on previous knowledge)
  await page.waitForTimeout(7000);

  // Take a full page screenshot to verify global styling and layout
  await page.screenshot({ path: '/home/jules/verification/frontend_redesign.png', fullPage: true });
});
