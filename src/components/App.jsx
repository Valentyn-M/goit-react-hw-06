import './App.css'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'

function App() {

	return (
		<div className='phonebook-wrap'>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</div>
	)
}

export default App
