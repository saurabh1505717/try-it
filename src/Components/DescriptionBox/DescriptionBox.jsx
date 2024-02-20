import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div> 
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores est impedit, necessitatibus similique tempora quae temporibus. Est, sunt explicabo corrupti et enim quis maxime ex, doloremque officiis culpa asperiores aut incidunt numquam totam labore quo itaque nesciunt amet praesentium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, tempora.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque magni necessitatibus enim maxime. Blanditiis, voluptatem asperiores? Iusto et voluptas autem ut optio quam rem.</p>
        </div>
    </div>
  )
}

export default DescriptionBox