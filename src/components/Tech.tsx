import TechCard from './TechCard'

export default function Techs(){
    return (
        <>
        <div className="bg-[#F5ECD5] w-screen min-h-(300px) p-8">
            <h1 className="text-4xl text-[#3D3D3D] font-bold mb-4">Techs</h1>
            <div className="w-32 border-2 border-[#3D3D3D] mb-8"/>
                <div className="flex justify-center items-center w-full flex-wrap gap-4">
               
                    <TechCard imageURL='/img/c++.png' techStack="C++"/>
                    <TechCard imageURL='/img/JS.png' techStack="JavaScript"/>
                    <TechCard imageURL='/img/python.png' techStack="Python"/>
                </div>
        </div>
        </>
    )
        
    
}