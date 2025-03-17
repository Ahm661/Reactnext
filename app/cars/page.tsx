import React from 'react'
import Card from "../components/car/card"
import { Car } from '@lib/types/types'

type Props = {}

const car:Car = {
    name: "Super Car",
    type: "BMW M3",
    color: "red",
    motor: {
        serialNumber: 1234,
        hp: 440,
    }
}

export default function Cars({ }: Props) {
    return (
        <div>
            <h1>Cars</h1>
            <Card car={car} />
            <Card car={car} />
            <Card car={car} />
        </div>
    )
}