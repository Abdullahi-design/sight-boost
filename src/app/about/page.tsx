import Image from 'next/image'
import React from 'react'
import user from '../../../public/svg/User.png'

export default function About() {
    return (
        <div className='mx-auto w-5/6 pb-12'>
            <h1 className='text-center text-teal-900 mb-12 text-6xl font-semibold'>About</h1>

            <div className="flex justify-between">
                <div className="w-5/6">
                    <h1 className="text-4xl font-thin text-teal-900">About Us</h1>
                    <p className="mt-4 text-lg font-light">
                        Sight Boost Nigeria Initiative started 9 years ago as a team of registered indigenous, practicing eye care professionals of different cadres. The team metamorphosed in recent times into a registered Non-governmental Organization (NGO) that specializes in eye care. The objective of the organization are:
                    </p>
                    <ul className='mt-8 text-lg font-light'>
                        <li className="list-[circle] my-2">To reduce the burden of avoidable blindness in our society by reaching the unreached populace rendering organized mobile eye care service.</li>
                        <li className="list-[circle] my-2">To collaborate with other NGOs, community self-help groups, philanthropists, religious organization and labor unions to plan, organize and conduct free or subsidized eye camps in designated localities.  </li>
                        <li className="list-[circle] my-2">To raise public awareness on causes and risk factors for blindness and visual impairment as a major public health issue and one of the modern developmental indices; especially during annual commemoration of World Sight Day (WSD).</li>
                        <li className="list-[circle] my-2">To influence state and local government through Health commissioners and other health administrators to participate and designate funds or blindness prevention programmes.</li>
                        <li className="list-[circle] my-2">To educate Target audience about blindness prevention, Vision 2020 and its activities to generate support.</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between mt-12">
                <div className="w-5/6">
                    <h1 className="text-4xl font-thin text-teal-900">SIGHT BOOST CENTRE</h1>
                    <p className="mt-4 text-lg font-light">
                        Sight Boost Centre is an official investment of Sight Boost Nigeria Initiative situated in its corporate office. It is a Self-sustaining investment not aimed at profit making only. The centre is divided into four section:
                    </p>
                    <ol className='mt-8 text-lg font-light'>
                        <li className="list-decimal my-2">Eye Pharmacy: Ensure genuine eye care preparation at subsidized rate by collaborating with major manufacturers for distributorship.</li>
                        <li className="list-decimal my-2">Optical Shop: Explores cost Effective Strategies to reduce refractive errors as a major cause of visual impairment. Wide range of Spectacle frames and lenses as provided at an affordable rate.</li>
                        <li className="list-decimal my-2">Surgical Consumables Section: Provides both major and minor consumable used in eye surgeries. The section also takes care of procurement of other surgical and theatre equipment on special request.</li>
                        <li className="list-decimal my-2">Equipment and instrument Supply Section: Collaborates with companies within and outside Nigeria for effective Supply and maintenance of eye hospital equipment with a wide range of choice.</li>
                    </ol>
                </div>
            </div>

            <div className="flex justify-between mt-12">
                <div className="w-5/6">
                    <h1 className="text-4xl font-thin text-teal-900">SIGHT BOOST HOSPITAL </h1>
                    <p className="mt-4 text-lg font-light">
                    Sight Boost Clinic Is the Official eye Clinic of Sight Boost Nigeria Initiative. It is located in the premises of An Noury Specialist Hospital at No. 1 Iyaka Link, Kano. It is aimed at Providing subsidized primary eye care Services to the people kano and environs. Those living outside kano metropolitan areas are not left out through provision of mobile clinics and use of an official shuttle bus to convey patients to the clinic whenever necessary. The is for mow particularly focused on blindness and visual impairment caused by cataract, glaucoma and uncorrected refractive errors.
                    </p>
                </div> 
            </div>

            <h1 className="text-4xl font-thin text-teal-900 mt-24">Our Members</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                    { [1].map((item ,index)=> {
                        return (
                            <div key={index} className="col-span-1">
                                <div className="w-full h-56 relative rounded-t-2xl bg-gradient-to-t from-black to-teal-900">
                                    <Image src={user} alt="image" fill className='object-contain' />
                                </div>
                                <div className="bg-black text-white p-4 rounded-b-2xl">
                                    <h1 className=' text-xl'>Dr Anas</h1>
                                    <h1 className='font-light text-sm'>Senior Consultant</h1>
                                </div>
                            </div>
                        )
                    }) }
                    
                </div>

        </div>
    )
}
