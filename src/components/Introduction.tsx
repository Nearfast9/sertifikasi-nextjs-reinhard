import Image from 'next/image'
export default function Introduction(){
    
    return(
    <>
    <div>
        <div className="w-screen h-(500px) bg-[#F5ECD5] p-8">
            <div className="flex justify-between items-center">
                <div>    
                    <p className="text-[#3D3D3D] font-bold text-2xl my-4">
                        Komputer Akuntansi
                    </p>
                        <h2 className="text-[#3D3D3D] text-7xl">
                            Hello, im
                        </h2>
                        <h2 className="text-[#578E7E] text-7xl">
                            Rein Hard Cavin Bawimbang
                        </h2>
                    <div className="my-8">
                        <p className="text-[#3D3D3D] max-w-lg">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni consectetur ex ut nihil ipsam voluptates laboriosam exercitationem obcaecati quidem eveniet sequi repellendus totam voluptate aperiam fugiat dolorum, alias possimus? Eveniet.
                        </p>
                    </div>
                </div>
            
                <div className="relative w-96 h-96">
                    <Image
                        src={"/img/photoprofile.jpg"}
                        alt="Rein Hard Cavin Bawimbang"
                        fill={true}
                        priority={true}
                        className="rounded-3xl object-cover"/>
                </div>
            </div>    
        </div>
    </div>
    
    </>
    )
  }