import { MediaBlock } from '@/blocks/MediaBlock/config'
import { Content } from '../../blocks/Content/config'
import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { MediaBlock2 } from '@/blocks/MediaBlock 2/config'
import { MediaBlock3 } from '@/blocks/MediaBlock 3/config'

export const Contents: CollectionConfig = {
    slug: 'contents',
    access: {
      create: authenticated,
      delete: authenticated,
      read: authenticatedOrPublished,
      update: authenticated,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            type: 'tabs',
            tabs: [{
                fields: [
                  {
                    name: 'layout',
                    type: 'blocks',
                    blocks: [MediaBlock, MediaBlock2,MediaBlock3, Content],
                    required: true,
                  },
                ],
                label: 'Content',
              },]
        }
    ]
}