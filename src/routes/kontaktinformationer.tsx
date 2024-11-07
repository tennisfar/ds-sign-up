import {createFileRoute} from '@tanstack/react-router'
import {TopBar} from "../Components/TopBar/TopBar.tsx";
import {Container} from "../Components/Container/Container.tsx";
import {Header} from "../Components/Header/Header.tsx";

export const Route = createFileRoute('/kontaktinformationer')({
    component: Kontaktinformationer,
})

function Kontaktinformationer() {
    return (
        <>
            <TopBar currentStep={1} steps={7}/>

            <Container>

                <Header title={'Kontaktinformationer'} text={"Indtast venligst din e-mailadresse og telefonnummer. "}/>

            </Container>
        </>
    )
}
