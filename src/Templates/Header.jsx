import { Link } from "react-router-dom";

function Header()
{

    return(
        // <div>
        //     {/* <h1>Header Component</h1> */}
        //     <Link to={'/'}> Home </Link>  &nbsp;&nbsp; 
        //     <Link to={'/about'}> About </Link> &nbsp;&nbsp;
        //     <Link to={'/login'}> Login </Link>  &nbsp;&nbsp;
        //     <Link to={'/register'}> Register </Link> &nbsp;&nbsp;
        // </div>

        <div className='bg-danger d-flex justify-content-between p-2'>
            <h1 className='text-white'>CarLoanApp</h1>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" to={'/'}> Home </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/about'}> About </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/login'}> Login </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/registerenquiry'}> Enquiry </Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </div>

    )
}

export default Header;