import { Route, Routes } from 'react-router-dom';
import Counter from '../components/Counter';
import CounterWithReducer from '../components/CounterWithReducer';
import ShoppingList from '../components/ShoppingList';
import UserList from '../components/UserList';
import UsersWithReducer from '../components/UsersWithReducer';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import Countries from '../pages/Countries';
import HomePage from '../pages/Home';
import NotFound from '../pages/NotFound';


const WebRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/userlist' element={<UserList />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/shoppinglist' element={<ShoppingList />} />
            <Route path='/counter-with-reducer' element={<CounterWithReducer />} />
            <Route path='/users-with-reducer' element={<UsersWithReducer />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/countries' element={<Countries />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}
export default WebRouting;