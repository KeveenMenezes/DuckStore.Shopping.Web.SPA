import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  const baseUrl = 'https://localhost:4200';
  const email = 'endykeven@gmail.com';
  const password = '@Teste12345';

  test('should login and logout successfully via Amazon Cognito', async ({ page }) => {
    // Step 1: Navigate to DuckStore home page
    await page.goto(baseUrl);
    await expect(page.getByRole('heading', { name: 'DuckStore' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    // Step 2: Click Login — redirects to Cognito
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();

    // Step 3: Fill email and click Next
    await page.getByRole('textbox', { name: 'Email address' }).fill(email);
    await page.getByRole('button', { name: 'Next' }).click();

    // Step 4: Fill password and click Continue
    await expect(page.getByRole('heading', { name: 'Enter your password' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Continue' }).click();

    // Step 5: Verify login succeeded — email visible in navbar
    await expect(page.getByText(email)).toBeVisible({ timeout: 10_000 });
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();

    // Step 6: Logout
    await page.getByRole('button', { name: 'Logout' }).click();

    // Step 7: Verify logout succeeded — Login button visible again
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByText(email)).not.toBeVisible();
  });
});
