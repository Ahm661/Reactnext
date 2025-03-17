import React from 'react'
import Card from "../components/car/card"
import { Car } from '@lib/types/types'

type Props = {}

const cars: Car[] = [
    {
        name: "Super Car",
        type: "BMW M3",
        color: "red",
        motor: {
            serialNumber: 1234,
            hp: 440,
        }
    },

    {
        name: "Mega Car",
        type: "Mercedes G-Class",
        color: "Black",
        motor: {
            serialNumber: 5678,
            hp: 670,
        }
    },

    {
        name: "Ultra car",
        type: "Porsche 911",
        color: "White",
        motor: {
            serialNumber: 7891,
            hp: 820,
        }
    }
]


export default function Cars({ }: Props) {
    return (
        <div>
            <h1>Cars</h1>
            {cars.map((car, index) => (
            <Card key={index} car={car} />
            ))}

        </div>
    );
}
