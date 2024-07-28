import { cookies } from "next/headers"

export default function Header() {
    const name = cookies().get("name")?.value;
    return (
        <header className='flex justify-between w-full border rounded-md p-4'>
            <p className=''>Dashboard</p>
            <p className=''>{name}</p>
        </header>
    )
}
