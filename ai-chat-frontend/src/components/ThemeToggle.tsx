import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun size={18} />;
      case 'dark':
        return <Moon size={18} />;
      case 'system':
        return <Monitor size={18} />;
      default:
        return <Sun size={18} />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return '浅色模式';
      case 'dark':
        return '深色模式';
      case 'system':
        return '跟随系统';
      default:
        return '浅色模式';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary rounded-full transition-all duration-200 group"
      title={getLabel()}
      aria-label={`切换主题 - 当前: ${getLabel()}`}
    >
      <div className="group-hover:scale-110 transition-transform duration-200">
        {getIcon()}
      </div>
    </button>
  );
}