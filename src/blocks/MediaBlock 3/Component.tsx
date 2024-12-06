import type { StaticImageData } from 'next/image'

import { cn } from 'src/utilities/cn'
import React from 'react'
import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
    breakout?: boolean
    captionClassName?: string
    className?: string
    enableGutter?: boolean
    imgClassName?: string
    staticImage?: StaticImageData
    disableInnerContainer?: boolean
}

export const MediaBlock3: React.FC<Props> = (props) => {
    const {
        captionClassName,
        className,
        enableGutter = true,
        imgClassName,
        media,
        staticImage,
        disableInnerContainer,
    } = props

    const position = 'default'

    let caption
    if (media && typeof media === 'object') caption = media.caption

    return (
        <div
            className={cn(
                '',
                {
                    container: position === 'default' && enableGutter,
                },
                className,
            )}
        >

            <Media imgClassName={cn('rounded', imgClassName)} resource={media} src={staticImage} />

            {caption && (
                <div
                    className={cn(
                        'mt-6',
                        captionClassName,
                    )}
                >
                </div>
            )}
        </div>
    )
}
