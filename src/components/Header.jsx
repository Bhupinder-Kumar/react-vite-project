import { HeaderWrapper } from "./Style";


const Header = ()=> {
    return (
        <>
            <HeaderWrapper>
                <p>Logo</p>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Location</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <button>Login</button>
            </HeaderWrapper>
        </>
    )
}

export default Header;