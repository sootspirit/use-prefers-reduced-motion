type InputVariant = 'filled' | 'outlined';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  ref?: React.Ref<HTMLInputElement>;
}

export function Input({ className, variant, ref, ...restProps }: InputProps) {
  const variantClass = `fcl-input--${variant}`;
  const combinedClasses = `fcl-input ${variantClass} ${className || ''}`.trim();

  return <input {...restProps} ref={ref} className={combinedClasses} />;
}
