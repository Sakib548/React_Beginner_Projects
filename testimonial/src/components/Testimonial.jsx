import React, { useState } from 'react'

const Testimonial = () => {

    const [currentIndex,setCurrentIndex] = useState(0)
    const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];
  return (
    <div className='testimonials'>
        <div className='testimonial-quote'>
              {testimonials[currentIndex].quote}
        </div>
    </div>
  )
}

export default Testimonial