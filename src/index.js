import './index.css'
import React from "react"
import ReactDom from 'react-dom/client'
import Calculator from './main/Calculator'
import registerServiceWorker from './registerServiceWorker'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>
)
registerServiceWorker()