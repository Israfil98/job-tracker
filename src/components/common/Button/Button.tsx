import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IButtonProps {
  label: string;
  linkUrl?: string;
  showArrow?: boolean;
  size?: 'sm' | 'lg';
  onClick?: () => void;
}

const Button = ({
  label,
  linkUrl,
  showArrow = false,
  size = 'lg',
  onClick,
}: IButtonProps) => {
  const sizeClasses = size === 'sm' ? 'px-6 py-2 text-sm' : 'px-8 py-4 text-lg';

  const baseClasses = `inline-flex items-center gap-2 rounded-xl bg-blue-600 ${sizeClasses} font-semibold text-white shadow-lg transition-colors hover:bg-blue-700`;

  const content = (
    <>
      {label}
      {showArrow && <ArrowRight className="h-5 w-5" />}
    </>
  );

  if (linkUrl) {
    return (
      <Link to={linkUrl} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default Button;
