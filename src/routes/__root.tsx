import {createRootRoute, Link, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <Outlet/>

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
            </ul>
            <TanStackRouterDevtools/>
        </>
    ),
})