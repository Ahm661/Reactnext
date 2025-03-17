import React from 'react'
import { Car } from '@lib/types/types'
import CarList from '../components/car/carlist'

type Props = {}

const cars: Car[] = [
    {
        name: "Super Car",
        type: "BMW M3",
        color: "Red",
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
];

export default function Cars({ }: Props) {
    return (
        <div>
            <CarList cars={cars} />
        </div>
    )
}