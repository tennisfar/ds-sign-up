import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-10 flex gap-10">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})