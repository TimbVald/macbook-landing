/* eslint-disable react/no-unescaped-entities */
import { cn } from '@/lib/utils';
import useMacbookStore from '@/store'
import React from 'react'

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();
    return (
        <section id='product-viewer'>
            <h2>Take a closer look</h2>

            <div className='controls'>
                <p className='info'>MacbookPro {scale} in {color}</p>

                <div className='flex-center gap-5 mt-5'>
                    <div className='color-control'>
                        <div
                            onClick={() => setColor('#adb5db')}
                            className={cn('bg-neutral-300', color === '#adb5db' && 'active')}
                        />
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={cn('bg-neutral-900', color === '#2e2c2e' && 'active')}
                        />
                    </div>

                    <div className='size-control'>
                        <div
                            onClick={() => setScale(0.06)}
                            className={cn(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setScale(0.08)}
                            className={cn(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-white text-4xl'>Render Canvas</p>
        </section>
    )
}

export default ProductViewer
