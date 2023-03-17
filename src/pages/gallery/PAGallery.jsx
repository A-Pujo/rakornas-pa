import React, { useEffect, useState } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import './PAgallery.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PAGallery = () => {
    const [isLoading, setIsLoading] = useState(true)
    const PhotoStakeHolderday = [
        {
            'id': 1,
            'original': 'https://placekitten.com/1024/768?image=1',
            'thumbnail': 'https://placekitten.com/400/300?image=1',
            'width': 1024,
            'height': 768,
        },
        {
            'id': 2,
            'original': 'https://placekitten.com/1024/768?image=2',
            'thumbnail': 'https://placekitten.com/400/300?image=2',
            'width': 1024,
            'height': 768,
        },
        {
            'id': 3,
            'original': 'assets/imgs/gallery/shd-1.jpg',
            'thumbnail': 'assets/imgs/gallery/shd-1.jpg',
            'width': 6191,
            'height': 4127,
        },
    ]

    const PhotoCoachingClinic = [

    ]

    const PhotoMainEvent = [
        
    ]

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <div className='container p-10 md:px-24'>
            <h1 className='text-5xl text-center text-[#6474E5] text-bold my-10 md:my-20'>Dokumentasi</h1>
            <Gallery withDownloadButton>
                <h3 className='text-2xl text-[#6474E5] my-4 border-b-2 border-sky-500'>Stakeholder Day</h3>
                {(PhotoStakeHolderday.length > 0 ?
                    (
                        <div className='grid grid-cols-3 gap-2 mt-6'>
                            {PhotoStakeHolderday.map((photo) => (
                            <div className='cursor-zoom-in'>
                                <Item
                                    original={photo.original}
                                    thumbnail={photo.thumbnail}
                                    width={photo.width}
                                    height={photo.height}
                                >
                                {({ ref, open }) => (
                                    (isLoading ?
                                        <Skeleton height={192} />
                                        : 
                                        <img ref={ref} onClick={open} src={photo.thumbnail} className='shadow-lg' key={photo.id} />
                                    )
                                )}
                                </Item>
                            </div>
                            ))}
                        </div>
                    ) 
                    :
                    (
                        <div className='w-full h-fit'>
                            <h3 className='text-xl text-center text-[#6474E5] bg-gray-100 p-8'>Mohon ditunggu. Dokumentasi akan kami unggah sesegera mungkin.</h3>
                        </div>
                    )
                )}
            </Gallery>
            <Gallery withDownloadButton>
                <h3 className='text-2xl text-[#6474E5] my-4 border-b-2 border-sky-500'>Coaching Clinic</h3>
                {(PhotoCoachingClinic.length > 0 ?
                    (
                        <div className='grid grid-cols-3 mt-6'>
                            {PhotoCoachingClinic.map((photo) => (
                            <div className='cursor-zoom-in'>
                                <Item
                                    original={photo.original}
                                    thumbnail={photo.thumbnail}
                                    width={photo.width}
                                    height={photo.height}
                                >
                                {({ ref, open }) => (
                                    (isLoading ?
                                        <Skeleton height={192} />
                                        : 
                                        <img ref={ref} onClick={open} src={photo.thumbnail} className='shadow-lg' key={photo.id} />
                                    )
                                )}
                                </Item>
                            </div>
                            ))}
                        </div>
                    ) 
                    :
                    (
                        <div className='w-full h-fit'>
                            <h3 className='text-xl text-center text-[#6474E5] bg-gray-100 p-8'>Mohon ditunggu. Dokumentasi akan kami unggah sesegera mungkin.</h3>
                        </div>
                    )
                )}
            </Gallery>
            <Gallery withDownloadButton>
                <h3 className='text-2xl text-[#6474E5] my-4 border-b-2 border-sky-500'>Main Event</h3>
                {(PhotoMainEvent.length > 0 ?
                    (
                        <div className='grid grid-cols-3 mt-6'>
                            {PhotoMainEvent.map((photo) => (
                            <div className='cursor-zoom-in'>
                                <Item
                                    original={photo.original}
                                    thumbnail={photo.thumbnail}
                                    width={photo.width}
                                    height={photo.height}
                                >
                                {({ ref, open }) => (
                                    (isLoading ?
                                        <Skeleton height={192} />
                                        : 
                                        <img ref={ref} onClick={open} src={photo.thumbnail} className='shadow-lg' key={photo.id} />
                                    )
                                )}
                                </Item>
                            </div>
                            ))}
                        </div>
                    ) 
                    :
                    (
                        <div className='w-full h-fit'>
                            <h3 className='text-xl text-center text-[#6474E5] bg-gray-100 p-8'>Mohon ditunggu. Dokumentasi akan kami unggah sesegera mungkin.</h3>
                        </div>
                    )
                )}
            </Gallery>
        </div>
    );
}

export default PAGallery
