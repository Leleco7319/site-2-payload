import type { Block } from 'payload'

export const MediaBlock2: Block = {
    slug: 'mediaBlock2',
    interfaceName: 'MediaBlock2',
    fields: [
        {
            name: 'testimonial',
            type: 'text',
        },
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'location',
            type: 'text',
        },
        {
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ],
}
