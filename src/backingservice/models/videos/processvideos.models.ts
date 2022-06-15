import mongoose from 'mongoose'
import { dbVideos } from '../../databases/mongo'

const {Types, Schema} = mongoose

// typeVideo => mp4, webm, avi, mov

const ProcessVideoSchema = new Schema({
    storage:  {type: String, required: true}, //'aws/s3',
    bucket:  {type: String, lowercase: true, required: true},//'cdn.universalkrowdy.com',
    urlStorage:  {type: String, required: true, unique: true},//'https://cdn.universalkrowdy.com/videos/format/process/videO1.mp4',
    url: {type: String, required: true, unique: true},
    typeVideo: {type: String, enum: ['mp4', 'webm', 'avi', 'mov']},
}, {
    timestamps: true
})

export default dbVideos.model('ProcessVideos', ProcessVideoSchema)