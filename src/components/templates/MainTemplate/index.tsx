import { Container } from '../../Container';
import { Footer } from '../../Footer';
import { Logo } from '../../Logo';
import { Menu } from '../../Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
