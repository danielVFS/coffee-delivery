import { TextContainer, TEXT_COLORS, TEXT_SIZES } from "./styles";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant: keyof typeof TEXT_SIZES;
  color: keyof typeof TEXT_COLORS;
  bold?: boolean;
  children: string;
}

export function Text({ variant, color, bold, children, ...props }: TextProps) {
  return (
    <TextContainer variant={variant} color={color} bold={bold} {...props}>
      {children}
    </TextContainer>
  );
}
