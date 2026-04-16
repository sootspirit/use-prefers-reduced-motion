export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  console.log('Button! HA');

  return (
    <button {...restProps} className={`fcl-button ${className || 'buttonClass'}`}>
      I have fix text - button
    </button>
  );
}
