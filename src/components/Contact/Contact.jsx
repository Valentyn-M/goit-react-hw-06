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
				<li className={s.field}><FaUserLarge className={s.icon} />{name}</li>
				<li className={s.field}><FaPhone className={s.icon} />{number}</li>
			</ul>
			<button
				className={s.btn}
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
				Edit Name
			</button>
			<button
				className={s.btn}
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
				Edit Number
			</button>
			{/* При клику передаємо колбек-функцію, в якій ми викликаємо екшен та передаємо дані для payload (removeContact(id) і відправляємо екшен за допомогою dispatch) */}
			<button className={s.btn} onClick={() => { dispatch(deleteContact(id)) }}>
				Delete
			</button>
		</div>
	)
}

export default Contact
