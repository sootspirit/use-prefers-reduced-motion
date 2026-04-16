export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props;
  console.log('Label!');

  return <label {...restProps} className={`fcl-label ${className || 'labelClass'}`} />;
}
