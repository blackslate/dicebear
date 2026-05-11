/**
 * src/App.jsx
 * 
 * https://www.dicebear.com/guides/use-the-library-with-react/
 */


import { useState } from 'react'
import { createAvatar } from '@dicebear/core'
import { v4 as uuid } from 'uuid'
import {
  glass,
  identicon,
  rings,
  shapes
} from '@dicebear/collection';


export const App = () => {
  const [ refresh, setRefresh ] = useState(0)

  const forceRefresh = () => {
    setRefresh(refresh + 1)
  }
  
  const styles = [
    // glass,
    identicon,
    rings,
    shapes
  ]

  const avatars = styles.map(style => {
    const title = style.meta.title
    const seed = uuid()
    const size = 512
    const avatar = createAvatar(style, { seed, size })
    const url = avatar.toDataUri()
    const img = (
      <img
        key={seed}
        src={url}
        alt={title}
        title={title}
      />
    )
    return img
  })


  return (
    <main>
      <h1>
        Dicebear abstract avatars
      </h1>
      <div className="avatars">{avatars}</div>
      <button
        onClick={forceRefresh}
      >
        Refresh
      </button>
    </main>
  )
}