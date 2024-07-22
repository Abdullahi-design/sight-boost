"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageLoader from "../components/ImageLoader";
import { string } from "three/examples/jsm/nodes/Nodes.js";

interface Image {
  _id: string,
  imageCategory: string,
  imageUrl: string
}
export default function Images() {
const [currentImage, setCurrentImage] = useState("")
const [isOpen, setIsOpen] = useState(false)
const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState(true);

function openImage (url: string) {
    setCurrentImage(url);
    setIsOpen(true)
}

  const fetchImages = async () => {
    try {
    const response = await fetch("/api/images");
    if (response.ok) {
      const data = await response.json();
      setImages(data);
    } else {
      throw new Error(response.statusText)
    }
    } catch (error) {
        console.error('Error fetching Image:', error);
    } finally {
        setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const groupedImages = images.reduce((acc: Record<string, Image[]>, image: Image) => {
    if (!acc[image.imageCategory]) {
      acc[image.imageCategory] = [];
    }
    acc[image.imageCategory].push(image);
    return acc;
  }, {});  

  return (
    <div className="  bg-gradient-to-br from-teal-900 via-black to-teal-900 -mt-12 pt-8 min-h-screen">
      { isOpen && <ImageLoader url={currentImage} close={()=> setIsOpen(false)} />}

      <div className="mx-auto w-5/6 pb-12">
        <h1 className="text-center text-white mb-12 text-6xl font-semibold">
          Our Gallery
        </h1>

        <section className="mb-24">
          {isLoading ? (
            <div className="flex justify-center w-screen h-screen left-0 -top-20 items-center py-52 mt-16 fixed z-10 opacity-100">
            <div className="animate-spin z-20 opacity-100 rounded-full mt-8 h-24 w-24 border-b-4 border-white " />
        </div>
          ) : (
            Object.keys(groupedImages).map((category) => (
              <div key={category}>
                <h1 className="my-20 text-center mb-4 text-2xl sm:text-4xl text-white font-thin">
                  {category}
                </h1>
                <div className="grid grid-cols-5 gap-3 h-44 lg:min-h-96">
                  {groupedImages[category].map((image, index) => (
                    <div
                      key={image._id}
                      className={`${
                        index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                      } rounded-lg bg-teal-900 relative`}
                    >
                      <Image
                        onClick={() => openImage(image.imageUrl)}
                        src={image.imageUrl}
                        layout="fill"
                        alt={image.imageCategory}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  ))}
                </div>

              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}
