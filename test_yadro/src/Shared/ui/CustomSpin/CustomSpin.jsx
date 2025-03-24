import React from 'react'

import { Spin } from 'antd'

import styles from './CustomSpin.module.css'

export const CustomSpin = () => {
    return (
        <div className={styles.loadingOverlay}>
            <Spin />
        </div>
    )
}
