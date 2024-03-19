import Collaborate from '../buttons/Collaborate'
import Learn from '../buttons/Learn'

export default function Header() {
    return(
        <>
            <h1 className="text-center p-12 text-6xl font-anon">Building Block Studio</h1>
            <div className="grid sm:grid-cols-2 font-raleway">
                <div className="border-black border p-4 text-4xl">
                    <h2>Creating digital experiences for <span className="underline">everyone</span></h2>
                </div>
                <div className="border-black border p-4">
                    <h3 className="pb-2">
                        We're web development agency (& more) based in Philly guided by integrity, curiousity, and people.
                    </h3>
                    <div className='space-x-2'>
                        <Learn />
                        <Collaborate />
                    </div>
                </div>
            </div>
        </>
    )
}