import styles from './TODOList.module.scss'
import React, { useState } from 'react'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'
import { DropdownProps } from 'reactstrap/types/lib/Dropdown'

const TODOSettings = ({ direction, ...args }: DropdownProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen((prevState) => !prevState)
    return (
        <div>
            <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={direction}
            >
                <DropdownToggle caret>...</DropdownToggle>
                {dropdownOpen && (
                    <DropdownMenu {...args}>
                        <DropdownItem>Rename</DropdownItem>
                        <DropdownItem>Delete</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                    </DropdownMenu>
                )}
            </Dropdown>
        </div>
    )
}

export default TODOSettings
