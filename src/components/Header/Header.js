import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';


function Header() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header s-bt flex">
            <div className="header-left flex s-ev">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="fb-icon"/>
                <div className="header-input flex">
                    <SearchIcon  />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="header-center flex">
                <div className="header-icon header-icon-active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header-icon">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header-icon">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header-icon">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header-icon">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header-right">
                <div className="header-right-info flex">
                    <Avatar src={user.photoURL} alt=""/>
                    <h4>{user.displayName}</h4>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}



export default Header
