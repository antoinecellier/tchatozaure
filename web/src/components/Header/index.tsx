import styled from "styled-components"
import { SECONDARY_COLOR } from '@tchatozaure/shared/src/styles'

import Logo from "../logo"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${SECONDARY_COLOR};
    padding: 10px;
    padding-left: 30px;
`

const TextHeader = styled.div`
    color: white;
    font-weight: bold;
    font-size: 30px;
    padding-left: 15px;
`

const Header = () => (
    <Container>
        <Logo />
        <TextHeader>
            Tchatozaure
        </TextHeader>
    </Container>
)

export default Header
