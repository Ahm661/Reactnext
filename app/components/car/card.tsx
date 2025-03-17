import { Car } from '@lib/types/types'
import React from 'react'

type Props = { car: Car }

export default function Card({ car }: Props) {
    return (
        <div className='bg-green-300 border-2 p-4'>
            <h2>Card:{car.name}</h2>
            <h2>Card:{car.type}</h2>
            <h2>Card:{car.color}</h2>
            <h2>Card:{car.motor.serialNumber}</h2>
            <h2>Card:{car.motor.hp}</h2>
        </div>
    )
}