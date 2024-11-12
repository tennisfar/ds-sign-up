import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { TopBar } from '../Components/TopBar/TopBar.tsx';
import { CancelSignUp } from '../Components/CancelSignUp/CancelSignUp.tsx';
import { Jiras } from '../Components/Jiras/Jiras.tsx';
import { Container } from '../Components/Container/Container.tsx';
import ShowCancelContextProvider from '../Contexts/ShowCancelContext.tsx';
import StepContextProvider from '../Contexts/StepContext.tsx';

function RootComponent() {
  return (
    <>
      <ShowCancelContextProvider>
        <StepContextProvider>
          <TopBar />
          <Container>
            <Outlet />
            <CancelSignUp />
          </Container>
          <Jiras />
        </StepContextProvider>
      </ShowCancelContextProvider>

      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
