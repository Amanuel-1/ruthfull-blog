
import {defineField, defineType} from 'sanity'
import { EmbedPreview } from '../components/embedPreview'




export const embed = defineType({
  name: 'embed',
  title: 'Embed Url',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  

  },

  components:{
    preview:EmbedPreview
  }

  
  
})