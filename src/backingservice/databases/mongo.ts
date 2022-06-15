import mongoose from 'mongoose'

const {
    CONNECT_DATABASE_HOST_VIDEOS,
    CONNECT_DATABASE_HOST_USERS
} = process.env


export const dbVideos = mongoose.createConnection(CONNECT_DATABASE_HOST_VIDEOS)
export const dbUsers = mongoose.createConnection(CONNECT_DATABASE_HOST_USERS)
