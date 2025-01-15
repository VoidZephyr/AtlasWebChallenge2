import { render, screen } from '@testing-library/vue';
import App from '../src/App.vue';

test('renders welcome message', () => {
  render(App);
  expect(screen.getByText('Welcome to My Website')).toBeInTheDocument();
});
