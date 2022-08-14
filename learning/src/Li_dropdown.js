function Li_dropdown(){
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
            <li><a className="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
            <li><a className="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
        </ul>
    </li>
    )
}
export default Li_dropdown;