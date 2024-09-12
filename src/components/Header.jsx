import { HeaderWrapper } from "./Style";


const Header = ()=> {
    return (
        <>
            <HeaderWrapper>
                <p className="logo">
                    <img src="https://res.cloudinary.com/diq1rd6ve/image/upload/v1726157424/axbonmbasvpdhfn6aztn.png" alt="logo"/>
                </p>
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