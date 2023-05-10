import React from 'react'
import styles from './main.module.css'

export function MainView() {
    return (
        <div data-testid="main-view" className={styles.container}>
            <h1 className="bg-green-300 border-green-600 border-b p-4 m-4 rounded">
                Hello, Next.js archetype!
            </h1>
        </div>
    )
}
