import s from "./Contact.module.css"
import { FaUserLarge, FaPhone } from "react-icons/fa6";

const Contact = ({ data: { id, name, number }, onDelete }) => {
	return (
		<div className={s.contact}>
			<ul className={s.list}>
				<li className={s.field}><FaUserLarge className={s.icon} />{name}</li>
				<li className={s.field}><FaPhone className={s.icon} />{number}</li>
			</ul>
			<button className={s.btn} onClick={() => onDelete(id)}>
				Delete
			</button>
		</div>
	)
}

export default Contact
