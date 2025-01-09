export default function Header(){
    return(
        <>
        <div className="flex p-4 bg-[#3D3D3D] justify-between items-center w-screen">
            <div>
                <p className="font-bold text-[#FFFAEC] text-2xl">Rein Hard Cavin Bawimbang</p>
            </div>
                <ul className="flex space-x-4">
                    <li className="text-[#FFFAEC] text-lg">Home</li>
                    <li className="text-[#FFFAEC] text-lg">Techs</li>
                    <li className="text-[#FFFAEC] text-lg">Biography</li>
                    <li className="text-[#FFFAEC] text-lg">Contacts</li>
                </ul>
        </div>
        
        </>
    )
}