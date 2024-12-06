import type { Block } from 'payload'

export const MediaBlock3: Block = {
    slug: 'mediaBlock3',
    interfaceName: 'MediaBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'date',
            type: 'text',
        },
        {
            name: 'subtitle',
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
