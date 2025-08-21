import React from 'react'
import { FadeLoader } from 'react-spinners';

export default function Spinner() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <FadeLoader
                    height={40}
                    width={4}
                    margin={2}
                    radius={2}
                    color="#21edcf"
                    loading={true}
                />
            </div>
        </div>
    )
}

