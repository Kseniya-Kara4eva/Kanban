import css  from './Header.module.css'
import {Link} from "react-router-dom";
import ProfileDropdown from "../profile-dropdown/profile-dropdown";

function Header() {
	return (
		<header className={css.header}>
			<Link to="/">
				<h1>Kanban Board</h1>
			</Link>

			<ProfileDropdown>
				<ProfileDropdown.Item>Profile</ProfileDropdown.Item>
				<ProfileDropdown.Item>Log Out</ProfileDropdown.Item>
			</ProfileDropdown>
		</header>
	)
}

export default Header
