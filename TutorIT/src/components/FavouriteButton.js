import React from 'react'
import './favourite.scss'

const FavouriteButton = () => {
  return (
    <label class="add-fav">
        <input type="checkbox" />
        <i class="icon-heart">
            <i class="icon-plus-sign"></i>
        </i>
    </label>
  )
}

export default FavouriteButton