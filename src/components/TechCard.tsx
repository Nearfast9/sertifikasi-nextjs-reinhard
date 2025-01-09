import Image from "next/image";

    type TechCard = {
        imageURL : string
        techStack : string
    }

    export default function TechCard({imageURL, techStack}: TechCard){
        return (
            <>
                <div className="w-48 h-48 justify-center flex items-center 
                drop-shadow shadow-lg overflow-hidden rounded-3xl bg-opacity-10
                backdrop-filter backdrop-blur-lg border border-white border-opacity-20 flex-col">
                <div className="relative rounded object-cover w-20 h-20">
                        <Image
                        src={imageURL}
                        alt="a"
                        fill={true}/>
                </div>
                <p className="text-[#3D3D3D] text-center text-base leading-4 mt-4">{techStack}</p>
                </div>
            </>
        )
    }