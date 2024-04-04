
import {defineField, defineType} from 'sanity'
import { twitterPreview } from '../components/twitterPreview'




export const twitter = defineType({
  name: 'twitter',
  title: 'TwitterPost',
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
    preview:twitterPreview
  }

  
  
})