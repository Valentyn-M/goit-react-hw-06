// Для того щоб сповістити Redux про те, що в інтерфейсі відбулася якась подія, необхідно відправити екшен.
// Для цього у бібліотеці React Redux є хук useDispatch(), який повертає посилання на функцію надсилання екшенів dispatch
import { useDispatch } from "react-redux";
// Імпортуємо екшен
import { deleteContact, editContactName, editContactNumber } from "../../redux/contactsSlice";
import s from "./Contact.module.css"
import { FaUserLarge, FaPhone } from "react-icons/fa6";

const Contact = ({ contact: { id, name, number } }) => {

	// Отримуємо посилання на функцію відправки екшенів
	const dispatch = useDispatch();

	return (
		<div className={s.contact}>
			<ul className={s.list}>
				<li className={s.field}>
					<div className={s.fieldItem}><FaUserLarge className={s.icon} /><span className={s.fieldValue}>{name}</span></div>
					<button
						className={s.fieldBtn}
						onClick={() => {
							const newName = prompt("Enter new name");
							if (newName === null) {
								// Користувач натиснув Cancel, нічого не робимо
								return;
							}
							if (newName.trim() === "") {
								// Якщо поле порожнє, виводимо повідомлення
								alert("Name cannot be empty!");
								return;
							}
							// Відправляємо екшен із валідним ім'ям
							dispatch(editContactName({ id, newName: newName.trim() }));
						}}>
						Edit
					</button>
				</li>
				<li className={s.field}>
					<div className={s.fieldItem}><FaPhone className={s.icon} /><span className={s.fieldValue}>{number}</span></div>
					<button
						className={s.fieldBtn}
						onClick={() => {
							const newNumber = prompt("Enter new number");
							if (newNumber === null) {
								// Користувач натиснув Cancel, нічого не робимо
								return;
							}
							if (newNumber.trim() === "") {
								// Якщо поле порожнє, виводимо повідомлення
								alert("Number cannot be empty!");
								return;
							}
							// Відправляємо екшен із валідним ім'ям
							dispatch(editContactNumber({ id, newNumber: newNumber.trim() }));
						}}>
						Edit
					</button>
				</li>
			</ul>
			{/* При клику передаємо колбек-функцію, в якій ми викликаємо екшен та передаємо дані для payload (removeContact(id) і відправляємо екшен за допомогою dispatch) */}
			<button className={s.deleteBtn} onClick={() => { dispatch(deleteContact(id)) }}>
				Delete contact
			</button>
		</div>
	)
}

export default Contact
