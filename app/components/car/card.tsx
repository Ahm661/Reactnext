"use client";
import { Car } from '@lib/types/types'
import React, { useState } from 'react'

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`p-4 shadow hover:cursor-pointer ${isActive ? "bg-green-300" : "bg-red-300"}`} onClick={() => {
            setIsActive(!isActive);
        }}>
        
            <h2 className='font-bold text-2xl'>Card: {car.name}</h2>
            <h2>{car.type}</h2>
            <h2>{car.color}</h2>
            <h2>Motor: {car.motor.serialNumber}</h2>
            <h2>{car.motor.hp} ps </h2>
            {isActive ? "Ein" : "Aus"}
        </div>
    )
}