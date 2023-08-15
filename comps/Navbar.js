import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <Image 
                src="/palmacoliving.png"
                width={300}
                height={300}
                alt="Palma Coliving"
            />
        </>
    );
}
 
export default Navbar;