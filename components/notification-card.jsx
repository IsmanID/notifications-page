import React, { useState } from 'react';

import NotificationItem from "./notification-item"

export default function NotificationCard(props) {
    const [notifications, setNotifications] = useState(props.notifications);
    const [unreadNotification, setUnreadNotification] = useState(3);

    function handleAllRead() {
        let read = props.notifications.map(notif => {
            if(!notif.read) {
                notif.read = true
            }
    
            return notif
        });

        setUnreadNotification(0)

        setNotifications(read)
    }

    return (
        <div className="bg-neutral-white rounded-2xl shadow-light-grayishBlue2 shadow-2xl py-4 px-4 md:py-8 md:px-8 w-full">
            <div className="flex justify-between pt-2 pb-6 md:pb-8">
                <div className="flex items-center space-x-2 md:space-x-4">
                    <h1 className="font-extrabold text-xl md:text-2xl">Notifications</h1>
                    <div className="flex h-full items-center justify-center bg-primary-blue px-3 text-neutral-white font-medium rounded-md">
                        <span>{unreadNotification}</span>
                    </div>
                </div>
                <button onClick={handleAllRead} className="text-sm md:text-lg text-dark-grayishBlue font-medium hover:text-primary-blue duration-200">Mark all as read</button>
            </div>

            <div className="space-y-4">
                {notifications.map(notif => {
                    return (
                        <NotificationItem key={notif.name} notification={notif} />
                    )
                })}
            </div>
        </div>
    )
}