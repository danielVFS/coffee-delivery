import { TextContainer, TEXT_SIZES } from "./styles";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant: keyof typeof TEXT_SIZES;
  bold?: boolean;
  children: string;
}

export function Text({ variant, bold, children, ...props }: TextProps) {
  return (
    <TextContainer variant={variant} bold={bold} {...props}>
      {children}
    </TextContainer>
  );
}
