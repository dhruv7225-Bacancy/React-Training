import { useCart } from '../Hooks/useCart'

const Navbar = () => {
    const { cart } = useCart()
    return (
        <div className='navbar'>
            <div >
                <ul className='list'>
                <li>Home</li>
                <li>about</li>
                <li>Contact</li>
            </ul></div>
            <div className='size-large'>🛒<sup>{cart.length}</sup></div>
        </div>
    )
}

export default Navbar
