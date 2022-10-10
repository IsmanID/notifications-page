import NotificationCard from '../components/notification-card'
import notifications from "../assets/notifications"

export default function Main() {
    return (
        <>
            <div className="font-primary bg-light-grayishBlue0 flex min-h-screen items-center justify-center">
                <div className='max-w-3xl mx-auto flex items-center w-full h-full md:py-8 md:px-8 lg:px-0'>
                    <NotificationCard notifications={notifications} />
                </div>
            </div>
        </>
    )
}