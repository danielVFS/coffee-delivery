import { TextContainer, TEXT_SIZES } from "./styles";

interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  variant: keyof typeof TEXT_SIZES;
  bold?: boolean;
  children: string;
}

export function Text({ variant, bold, children }: TextProps) {
  return (
    <TextContainer variant={variant} bold={bold}>
      {children}
    </TextContainer>
  );
}
