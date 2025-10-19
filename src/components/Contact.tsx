import Image from 'next/image'

interface PropTypes {
    name: string
    icon: string
    href: string
}

const Contact: React.FC<PropTypes> = ({ name, icon, href }) => {
    return (
        <a
        href={href}
        target="_blank" rel="noopener noreferrer"
            className='flex flex-row items-center gap-2 sm:w-fit md:w-[160px] rounded p-1 bg-white shadow overflow-hidden cursor-pointer'
            style={{ border: "2px solid #EFBF04" }}
        >
            <Image src={icon} width={30} height={30} alt={name} />

            {/* Only show text on screens >= sm */}
            <div className='flex-col hidden md:flex'>
                <span className='font-bold text-[14px]'>{name}</span>
                <span className='text-gray-500 text-[11px]'>24/7</span>
            </div>
        </a>
    )
}

export default Contact
