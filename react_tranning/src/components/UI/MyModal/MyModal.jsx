import React from 'react';
import classes from './MyModal.module.css';
const MyModal = ({children, visible, setVisible}) => {
    const classRoot = [classes.myModal];
    if(visible) {
        classRoot.push(classes.active);
    }
    return (
        <div className={classRoot.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            
        </div>
    );
};

export default MyModal;