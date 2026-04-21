import './styles.scss';

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props;
  console.log('Label CLOS test!');

  return (
    <label {...restProps} className={`fcl-label test-class ${className || 'labelClass'}`}>
      Fix text label watching
    </label>
  );
}
