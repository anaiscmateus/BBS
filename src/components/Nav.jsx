export default function Nav() {
    return(
        <>
        <div className="grid grid-cols-4 font-raleway">
            <div className="border border-black p-2">
                <h4 className="font-medium font-anon">About</h4>
                <a href="#" className="block text-sm hover:underline">Why</a>
                <a href="#" className="block text-sm hover:underline">Team</a>
                <a href="#" className="text-sm hover:underline">Support Our Work</a>
            </div>
            <div className="border border-black p-2">
                <h4 className="font-medium font-anon hover:underline">Projects</h4>
                <a href="#" className="block text-sm hover:underline">Portfolio</a>
            </div>
            <div className="border border-black p-2">
                <h4 className="font-medium font-anon">Community</h4>
                <a href="#" className="block text-sm hover:underline">Discord</a>
                <a href="#" className="block text-sm hover:underline">Upcoming Events</a>
            </div>
            <div className="border border-black p-2">
                <h4 className="font-medium font-anon">Collaborate</h4>
                <a href="#" className="block text-sm hover:underline">Self Assessment</a>
                <a href="#" className="block text-sm hover:underline">How It Works</a>
                <a href="#" className="text-sm hover:underline">Contact</a>
            </div>
        </div>
        </>
    )
}