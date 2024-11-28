import './App.css'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'

function App() {

	return (
		<div className='phonebook'>
			<h1 className='title'>Phonebook</h1>
			<div className='phonebook-wrap'>
				<ContactForm />
				<SearchBox />
				<ContactList />
			</div>
		</div>
	)
}

export default App
