import React, { useEffect } from 'react'
import EcommerceDashboard from '../ecommerce/index'

export default function index() {

    useEffect(() => {
        document.title = 'AB Sales Pro'
    })
    return (
        <EcommerceDashboard />
    )
    
}
