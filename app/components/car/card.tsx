import { Car } from '@lib/types/types'
import React from 'react'

type Props = { car: Car }

export default function Card({ car }: Props) {
    return (
        <div className='bg-green-300 border-2 p-4'>
            Card:{car.name}
        </div>
    )
}