// 'use client'

// import Image from 'next/image'

// const stories = [
//   {
//     src: '/products/couple1.jpg',
//     name: 'Aarav & Meera',
//     quote: '“A magical ceremony by the sea.”',
//     location: 'Goa, India',
//     style: 'top-[5%] left-[5%] w-[160px]',
//   },
//   {
//     src: '/products/couple3.jpg',
//     name: 'Rohan & Priya',
//     quote: '“Every moment was unforgettable.”',
//     location: 'Udaipur, Rajasthan',
//     style: 'top-[20%] left-[22%] w-[220px]',
//   },
//   {
//     src: '/products/couple3.jpg',
//     name: 'Aditya & Kavya',
//     quote: '“The best day of our lives.”',
//     location: 'Manali, Himachal',
//     style: 'top-[0%] right-[6%] w-[140px]',
//   },
//   {
//     src: '/products/couple4.jpg',
//     name: 'Dev & Isha',
//     quote: '“A fairytale celebration under the stars.”',
//     location: 'Mussoorie, Uttarakhand',
//     style: 'top-1/2 left-1/2 w-[480px] transform -translate-x-1/2 -translate-y-1/2 z-10',
//   },
//   {
//     src: '/products/couple1.jpg',
//     name: 'Kunal & Ananya',
//     quote: '“Laughed and cried all day long.”',
//     location: 'Bangalore, India',
//     style: 'bottom-[10%] left-[12%] w-[180px]',
//   },
//   {
//     src: '/products/couple2.jpg',
//     name: 'Rahul & Sneha',
//     quote: '“Just like we always imagined.”',
//     location: 'Jaipur, Rajasthan',
//     style: 'bottom-[15%] right-[24%] w-[280px]',
//   },
//   {
//     src: '/products/couple3.jpg',
//     name: 'Arjun & Diya',
//     quote: '“Captured our essence perfectly.”',
//     location: 'Chennai, Tamil Nadu',
//     style: 'bottom-[2%] right-[5%] w-[160px]',
//   },
// ]

// export default function CoupleStories() {
//   return (
//     <section className="relative w-full h-[800px] bg-[#fffaf7] overflow-hidden">
//       {stories.map((story, idx) => (
//         <div
//           key={idx}
//           className={`absolute ${story.style} shadow-xl rounded overflow-hidden group`}
//         >
//           <Image
//             src={story.src}
//             alt={story.name}
//             width={500}
//             height={600}
//             className="w-full h-auto object-cover"
//           />
//           {/* Overlay Text */}
//           <div className="absolute inset-0 bg-black/30 text-white flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition duration-300">
//             <h3 className="text-sm font-semibold">{story.name}</h3>
//             <p className="text-xs italic">{story.quote}</p>
//             <p className="text-[10px]">{story.location}</p>
//           </div>
//         </div>
//       ))}

//       {/* Centered Main Quote */}
//       <div className="absolute bottom-6 w-full text-center px-4">
//         <p className="text-lg sm:text-xl md:text-2xl text-[#3c2c21] font-serif leading-snug">
//           Every love story is unique. I capture yours as it truly is —<br />
//           genuine, free, and beautifully yours.
//         </p>
//       </div>
//     </section>
//   )
// }


'use client'

import Image from 'next/image'

const stories = [
    {
        src: '/products/couple1.jpg',
        name: 'Aarav & Meera',
        quote: '“A magical ceremony by the sea.”',
        location: 'Goa, India',
        style: 'top-[12%] left-[2%] w-[240px]',
    },
    {
        src: '/products/couple8.jpg',
        name: 'Rohan & Priya',
        quote: '“Every moment was unforgettable.”',
        location: 'Udaipur, Rajasthan',
        style: 'top-[18%] left-[16%] w-[240px] z-10',
    },
    {
        src: '/products/couple4.jpg',
        name: 'Kunal & Ananya',
        quote: '“Laughed and cried all day long.”',
        location: 'Bangalore, India',
        style: 'bottom-[20%] left-[5%] w-[300px]',
    },
    {
        src: '/products/couple3.jpg',
        name: 'Dev & Isha',
        quote: '“A fairytale celebration under the stars.”',
        location: 'Mussoorie, Uttarakhand',
        style: 'top-1/2 left-1/2 w-[350px] transform -translate-x-1/2 -translate-y-1/2 z-10',
    }, //center image
    {
        src: '/products/couple3.jpg',
        name: 'Aditya & Kavya',
        quote: '“The best day of our lives.”',
        location: 'Manali, Himachal',
        style: 'top-[5%] right-[6%] w-[200px]',
    },
    {
        src: '/products/couple6.jpg',
        name: 'Rahul & Sneha',
        quote: '“Just like we always imagined.”',
        location: 'Jaipur, Rajasthan',
        style: 'bottom-1/3 right-[10%] w-[350px]',
    },
    {
        src: '/products/couple7.jpg',
        name: 'Arjun & Diya',
        quote: '“Captured our essence perfectly.”',
        location: 'Chennai, Tamil Nadu',
        style: 'bottom-[20%] right-[3%] w-[240px] z-10',
    },
]

export default function CoupleStories() {
    return (
        <section className="relative w-full h-[900px] bg-[#fffaf7] overflow-hidden px-4 sm:px-8 md:px-16 py-12">
            {stories.map((story, idx) => (
                <div
                    key={idx}
                    className={`absolute ${story.style} shadow-xl overflow-hidden`}
                >
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white px-4 py-3 z-10">
                        <p className="text-xs italic leading-tight">{story.quote}</p>
                        <h3 className="text-sm font-semibold mt-1">
                            {story.name}{' '}
                            <span className="text-[8px] font-light">
                                {story.location}
                            </span>
                        </h3>
                        {/* <p className="text-[10px]">{story.location}</p> */}

                    </div>

                    <Image
                        src={story.src}
                        alt={story.name}
                        width={500}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>
            ))}

            {/* Centered Main Quote */}
            <div className="absolute bottom-24 w-full text-center px-4">
                <p className="text-lg sm:text-xl md:text-2xl text-[#3c2c21] font-serif leading-snug">
                    Every love story is unique. I capture yours as it truly is — <br />
                    genuine, free, and beautifully yours.
                </p>
            </div>
        </section>
    )
}