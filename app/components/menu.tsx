import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Menu({ }: Props) {
    return (
        <div>
            <ul className='flex p-4'>
                <li>
                    <Link className="p-2 hover:bg-amber-200 rounded-2xl" href="/">Home</Link>
                </li>
                <li>
                    <Link className="p-2 hover:bg-amber-200 rounded-2xl" href="/cars">Cars</Link>
                </li>
                <li>
                    <Link className="p-2 hover:bg-amber-200 rounded-2xl" href="/trucks">Trucks</Link>
                </li>
            </ul>
        </div>
    )
}