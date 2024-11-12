import {createFileRoute} from '@tanstack/react-router'
import {Container} from "../Components/Container/Container.tsx";
import {Header} from "../Components/Header/Header.tsx";
import {useEffect, useState} from "react";
import {CancelSignUp} from "../Components/CancelSignUp/CancelSignUp.tsx";
import {useStepContext} from "../assets/Contexts/StepContext.tsx";

export const Route = createFileRoute('/kontaktinformationer')({
    component: ContactInfo,
})

function ContactInfo() {
    const {setStep, setSteps} = useStepContext();
    
    useEffect(() => {
        setStep(1);
        setSteps(7);
    }, []);
    
    
    const [showCancel, setShowCancel] = useState(false);

    const handleCancel = () => {
        setShowCancel(!showCancel);
    }

    return (

        <>

            {showCancel && (
                <CancelSignUp handleCancel={handleCancel}/>
            )}

            {!showCancel && (

                <>
                    {/*<TopBar handleCancel={handleCancel}/>*/}

                    <Container>

                        {/* Max width 392px is only for developing, to make output look exactly like Figma. Should be removed. */}
                        <div className={'max-w-[360px]'}>
                            <Header title={'Kontaktinformationer'}
                                    text={"Indtast venligst din e-mailadresse og telefonnummer. "}/>
                        </div>

                    </Container>
                </>
            )}
        </>
    )
}
