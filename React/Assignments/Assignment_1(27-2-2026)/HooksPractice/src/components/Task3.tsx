// 3. **useEffect dependency**

import { useEffect, useState } from "react"


    // eslint-disable-next-line no-irregular-whitespace
    //  Build a small “user by ID” viewer: one state for `userId`, one for `user`. Use `useEffect` to fetch when `userId` changes. Include cleanup so that if the request finishes after `userId` changed or the component unmounted, you don’t call `setUser`.



type User = {
    id: number,
    name: string,
    age: number,
    email: string
}

const users: User[] = [
    {
        id: 1,
        name: "dhruv Patel",
        age: 24,
        email: "d@gmail.com"
    },
    {
        id: 2,
        name: "hansil patel",
        age: 27,
        email: "h@h.com"
    },
    {
        id: 3,
        name: "a",
        age: 30,
        email: "a@a.com"
    }
];

function UserViewer() {
    const [userId, setUserId] = useState<number>(1);
    const [user, setUser] = useState<User | null>();


    function getUser(id: number): Promise<User> {
        return new Promise((resolve, reject) => {
            const user1 = users.find(u => u.id === id)
            if (user1) {
                resolve(user1)
            }
            else {
                reject("No user found")
            }
        })
    }
    useEffect(() => {
        let isActive = true;
        const response = getUser(userId)
        response
            .then(data => {
                if (isActive) {
                    setUser(data)

                }
            })
            .catch(err => {
                console.log(err);

                setUser(null)
            });

        return () => {
            isActive = false;
        };
    }, [userId])
    return (
        <>
            <h2 className="text-center text-bold text-4xl mt-4">Task: 3</h2>
            <h3>User Viewer</h3>

            <label htmlFor="uid">Enter Id: </label>
            <input
                type="number"
                id="uid"
                className='border-2'
                onChange={(e) => { setUserId(Number(e.target.value)) }}
            />

            {user
                && (
                    <div>
                        <p>ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ) || (
                    <p>No User Found</p>
                )}
            
        </>
    )
}


export default UserViewer