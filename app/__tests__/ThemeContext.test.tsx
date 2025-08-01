//app/_tests__/ThemeContext.test.tsx


import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from '../components/ThemeContext';

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <p data-testid="theme">{theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

test('toggles theme from light to dark', async () => {
  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  const themeText = screen.getByTestId('theme');
  expect(themeText.textContent).toBe('light');

  const button = screen.getByText('Toggle');
  await userEvent.click(button);

  expect(themeText.textContent).toBe('dark');
});
