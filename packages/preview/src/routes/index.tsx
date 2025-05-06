import { ThemePreview } from '@/features/preview';
import { createFileRoute } from '@tanstack/react-router';

const App = () => {
  return (
    <div className="flex">
      <ThemePreview />
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: App,
});
