import type {PreviewProps} from 'sanity'
import React from 'react'


export function EmbedPreview(props:any):React.ReactNode {

  return (
    <iframe height="300" className='w-full h-[20rem]  md:h-[30rem] md:p-4' title="Loader Animation - Pure CSS" src={props.url} loading="lazy" allowTransparency={true} allowFullScreen={true}>
  See the Pen <a href="https://codepen.io/dui77/pen/WNmqjRN">
  Loader Animation - Pure CSS</a> by Susan Labude (<a href="https://codepen.io/dui77">@dui77</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
  )
}