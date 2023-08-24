import styles from './TODOList.module.scss'
import React, { useState } from 'react'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'
import { DropdownProps } from 'reactstrap/types/lib/Dropdown'

const TODOSettings = ({
    direction,
    Todo,
    onDelete,
    ...props
}: DropdownProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen((prevState) => !prevState)

    const handleDelete = () => {
        onDelete(Todo.id)
    }
    return (
        <div>
            <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={direction}
            >
                <DropdownToggle
                    caret
                    className={styles.TODOList__settingsButton}
                >
                    ...
                </DropdownToggle>
                {dropdownOpen && (
                    <DropdownMenu
                        {...props}
                        className={styles.TODOList__settingsList}
                    >
                        <DropdownItem>Rename</DropdownItem>
                        <DropdownItem onClick={handleDelete}>
                            Delete
                        </DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                    </DropdownMenu>
                )}
            </Dropdown>
        </div>
    )
}

export default TODOSettings
