import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { TopBar } from '../Components/TopBar/TopBar.tsx';
import StepContextProvider from '../assets/Contexts/StepContext.tsx';
import ShowCancelContextProvider from '../assets/Contexts/ShowCancelContext.tsx';
import { CancelSignUp } from '../Components/CancelSignUp/CancelSignUp.tsx';
import { Jiras } from '../Components/Jiras/Jiras.tsx';

function RootComponent() {
  return (
    <>
      <ShowCancelContextProvider>
        <StepContextProvider>
          <TopBar />
          <Outlet />
          <CancelSignUp />
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
