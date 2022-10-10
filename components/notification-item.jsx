export default function NotificationItem(props) {
    let notification = props.notification
    let readIcon = (!props.notification.read) 
                    ? <svg xmlns="http://www.w3.org/2000/svg" className='inline w-3 h-3 text-primary-red' viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle></svg>
                    : ''
    let name = (notification.name) ? <a className='font-extrabold hover:text-primary-blue duration-200 cursor-pointer whitespace-nowrap'>{notification.name}</a> : ''
    let activity = (notification.activity) ? <span className="mx-2 font-medium text-dark-grayishBlue">{notification.activity}</span> : ''
    let post = (notification.relationType == 'post')
                    ? <a className={`cursor-pointer duration-200 text-dark-grayishBlue font-semibold hover:text-primary-blue ${ notification.relationType == "picture" || !notification.read ? "mr-2": "" } `}>{notification.relation}</a>
                    : ''
    let picture = (notification.relationType == 'picture')
                    ? <img className="w-10 rounded-lg hover:ring-2 hover:ring-light-grayishBlue1 hover:ring-offset-2 cursor-pointer duration-200" src={notification.relation} alt={notification.activity} />
                    : ''
    let message = (notification.message)
                    ? <div className="md:pr-4"><div className="py-2 md:py-4 px-4 md:px-6 rounded border border-light-grayishBlue2 text-dark-grayishBlue text-sm md:text-base font-medium tracking-normal hover:bg-light-grayishBlue2 cursor-pointer duration-200">{notification.message}</div></div>
                    : ''

    return (
        <div className={`rounded-xl flex items-start space-x-4 px-4 py-3 ${ !notification.read ? "bg-light-grayishBlue0 shadow-sm" : "" } `}>
            <img className='w-10 md:w-12' src={notification.avatar} alt={notification.name} />
            <div className="w-full space-y-2">
                <div className='flex items-start justify-between space-x-2'>
                    <div className="space-y-0.5">
                        <div className="space-x-2 flex items-center text-sm md:text-base">
                            <p className="">
                                {name}{activity}{post}{readIcon}
                            </p>
                        </div>
                        <div className="text-base text-neutral-grayishBlue font-medium">{notification.time}</div>
                    </div>
                    {picture}
                </div>
                {message}
            </div>
        </div>
    )
}