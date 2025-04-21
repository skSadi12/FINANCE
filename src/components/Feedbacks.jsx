import React from 'react'
import person1 from "/person-1.png"
import person2 from "/person-2.png"
import person3 from "/person-3.png"
import quote  from "/quote.svg"
const reviews = [
    {
      image: person1,
      name: "Hadid Khan",
      review:
        "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
      status: "UI/UX Designer",
    },
    {
      image: person2,
      name: "Wade Warren",
      review:
        "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
      status: "Web Designer",
    },
    {
      image: person3,
      name: "Jenny Wilson",
      review:
        "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
      status: "Trust Administrator",
    },
  ];
function Feedbacks() {
  return (
    <section className='flex gap-12 flex-col md:flex-row my-16'>
      {reviews.map((items , i)=>(
        <div key={i} className='space-y-7 bg-[#3D3D54]/25 p-5 m-5 rounded-2xl'>
            <div className=' p-2 h-14 justify-center bg-[#3D3F54] flex items-center  w-14 rounded-full '>
                <img src={quote} alt=""  />
            </div>
            <div>
                <p>{items.review}</p>
            </div>
            <div className='flex items-center gap-2 '>
                <div className='  h-12  flex   w-12 rounded-full '>
                    <img src={items.image} alt="" />
                </div>
                <div>
                    <h5 className='font-bold'>{items.name}</h5>
                    <p className='text-[#ADB2B1] text-[12px] '>{items.status}</p>
                </div>
            </div>
        </div>
      ))}
    </section>
  )
}

export default Feedbacks
