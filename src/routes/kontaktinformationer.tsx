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

                {/* Max width 392px is only for developing, to make output look exactly like Figma. Should be removed. */}
                <div className={'max-w-[360px]'}>
                    <Header title={'Kontaktinformationer'}
                            text={"Indtast venligst din e-mailadresse og telefonnummer. "}/>
                </div>

            </Container>
        </>
    )
}
