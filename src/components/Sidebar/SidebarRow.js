import React from 'react';
import './SidebarRow.css';
import Avatar from '@material-ui/core/Avatar';

function SidebarRow({src, Icon, title}) {
    return (
        <div className="flex SlidebarRow">
            {src && <Avatar src={src} alt={src}/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
