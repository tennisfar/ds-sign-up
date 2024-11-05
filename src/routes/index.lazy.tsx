import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-10">
            <h3>Welcome Home!</h3>
        </div>
    )
}