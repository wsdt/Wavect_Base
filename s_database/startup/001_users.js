// seemingly needed for initial db connection as user doesn't exist before (same applies to root)

db.createUser({
    user: 'db_root',
    pwd: 'hQNde3ts92QUnNDKF2KMQDVfEmVshpHSsG7CgVxpyBxGDQeC3P2YnFrtnTwG',
    roles: [
        {
            role: 'readWrite',
            db: 'wavect',
        },
    ],
})
