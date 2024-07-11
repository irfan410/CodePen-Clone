

import { AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
    background: #e4b436;
`

const Header = () => {

    const logo = 'https://logos-download.com/wp-content/uploads/2019/07/Codepen_Logo-700x126.png'

    return(
        <Container position="static">
            <Toolbar>
                <img src={logo} alt='logo' height='40vh'   />
            </Toolbar>
        </Container>
    )
}

export default Header;