import React from 'react';
import './Header.css';

import { useStateValue } from '../../StateProvider';
import {auth} from '../../firebase'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';

function Header() {
    const[{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        };
    };

    return (
        <div className = 'header'>
            {/* Amaxon Logo */}
            <Link to='/'>
            <img 
            src = 
            "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt = ''
            className = "header__logo"/>

            </Link>
            
            {/* Search Icon */}
            <div className = "header__search">
                <input className = "header__searchInput"
                type = "text" />
                {/* Logo */}
                <SearchIcon 
                className = "header__searchIcon"/>
            </div>

            {/* Children */}
            <div className = "header__nav">
                {/* Sign In */}
                 <Link to = {!user && '/login'}>
                    <div 
                    onClick = {handleAuthentication}
                    className = 'header__option'>

                        <span 
                        className = "header__optionLineOne">
                            Hello {!user ? 'Guest' : user.email}
                        </span>

                        <span 
                        className = "header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>

                    </div>
                </Link>
               
                {/* Returns and orders */}
                <div className = 'header__option'>
                    <span className = "header__optionLineOne">Returns</span>
                    <span className = "header__optionLineTwo">& orders</span>
                </div>

                {/* Prime */}
                <div className = 'header__option'>
                    <span className = "header__optionLineOne">Your</span>
                    <span className = "header__optionLineTwo">Prime</span>
                </div>

                {/* Cart */}
                <Link to='/checkout'>
                    <div className = 'header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span 
                        className = "header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
                
            </div>
        </div>
    ) 
}

export default Header
