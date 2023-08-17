import styles from './TODOList.module.scss'
import React, { useState } from 'react'
interface Props {
    onAdd: (text: string) => void
}
const TODOAddList = ({ onAdd }: Props) => {
    const [text, setText] = useState('')
    const [placeholder, setPlaceholder] = useState('')

    const handleSubmit = () => {
        if (text.length > 0 && text.length < 50) {
            onAdd(text)
            setText('')
            setPlaceholder('')
        } else if (text.length === 0) {
            setPlaceholder("You can't add an empty list")
        }
    }
    return (
        <form className={styles.TODOList__AddList}>
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder={placeholder}
            />
            <button
                type="button"
                onClick={handleSubmit}
                className={styles.TODOList__Submit}
            >
                +
            </button>
        </form>
    )
}

export default TODOAddList
