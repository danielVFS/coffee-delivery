import { HeadingContainer, HEADING_SIZES } from "./styles";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: keyof typeof HEADING_SIZES;
  children: string;
}

export function Heading({ variant, children, ...props }: HeadingProps) {
  return (
    <HeadingContainer variant={variant} {...props}>
      {children}
    </HeadingContainer>
  );
}
