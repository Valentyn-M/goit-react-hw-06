import './App.css'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'
import initialContacts from '../assets/contacts.json'
import { useEffect, useState } from 'react'

function App() {

	// Стан для збереження контактів
	const [contacts, setContacts] = useState(() => {

		// Перевіряємо чи є дані (раніше збережені контакти) у локальному сховищі браузера
		const savedContacts = localStorage.getItem('saved-contacts');
		if (savedContacts !== null) {
			return JSON.parse(savedContacts);
		}

		// Якщо в локальному сховищі браузера нічого немає раніше збережених контактiв
		return initialContacts;
	});

	// Стан для збереження значення пошукового поля (компонент SearchBox)
	const [filter, setFilter] = useState('');

	const addContact = (newContact) => {
		setContacts(prevContacts => [...prevContacts, newContact]);
	}

	// Оскільки ми працюємо з колекцією елементів, ми використовуємо функціональну форму сеттера – передаємо функцію, яка повертає новий стан
	const deleteContact = (contactId) => {
		setContacts(prevContacts => {
			return prevContacts.filter(contact => contact.id !== contactId);
		});
	}

	// Фільтруємо контакти в змiнну, не записуючи в стан contacts (просто обчислюємо на базі двох станів)
	const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()));
	// includes на пустий рядок (contact.name.includes("")) повертає завжди true, отже ми отримуємо просто копiю контактiв

	// Збереження контактiв у локальному сховищi браузера (при змнах у статусi contacts)
	useEffect(() => {
		localStorage.setItem('saved-contacts', JSON.stringify(contacts))
	}, [contacts]);

	return (
		<div className='phonebook'>
			<h1 className='title'>Phonebook</h1>
			<div className='phonebook-wrap'>
				<ContactForm onAdd={addContact} />
				<SearchBox value={filter} onFilter={setFilter} />
				<ContactList contacts={visibleContacts} onDelete={deleteContact} />
			</div>
		</div>
	)
}

export default App
