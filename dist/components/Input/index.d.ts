type InputVariant = 'filled' | 'outlined';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant: InputVariant;
    ref?: React.Ref<HTMLInputElement>;
}
export declare function Input({ className, variant, ref, ...restProps }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map