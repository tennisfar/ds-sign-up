import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { TopBar } from '../Components/TopBar/TopBar.tsx';
import StepContextProvider from '../assets/Contexts/StepContext.tsx';

function RootComponent() {
  return (
    <>
      <StepContextProvider>
        <TopBar />
        <Outlet />
      </StepContextProvider>

      <ul className="p-10 text-[1.4rem] mt-80 *:p-2">
        <li>
          <Link to="/" className="[&.active]:font-bold">
            IU-20304: Velkomstside
          </Link>
        </li>
        <li>
          <Link to="/kontaktinformationer" className="[&.active]:font-bold">
            IU-20306: Kontaktinformationer
          </Link>
        </li>
        <li>
          <Link to="/personoplysninger" className="[&.active]:font-bold">
            IU-20308: Personoplysninger
          </Link>
        </li>
      </ul>

      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
