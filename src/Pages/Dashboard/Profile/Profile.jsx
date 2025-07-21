import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth()
    return (
        <div class="h-screen w-full flex items-center justify-center dark:bg-gray-900">

            {/* <!-- Author card --> */}
            <div
                class="relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">

                <span class="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
                    author
                </span>

                <div class="w-full flex justify-center sm:justify-start sm:w-auto">
                    <img class="object-cover w-20 h-20 mt-3 mr-3 rounded-full" src={user.photoURL}/>
                </div>

                <div class="w-full sm:w-auto flex flex-col items-center sm:items-start">

                    <p class="font-display mb-2 text-2xl font-semibold dark:text-gray-200" itemprop="author">
                        {user.displayName}
                    </p>

                    <div class="mb-4 md:text-lg text-gray-400">
                        <p>{user.email}</p>
                    </div>

                    
                </div>

            </div>

        </div>
    );
};

export default Profile;