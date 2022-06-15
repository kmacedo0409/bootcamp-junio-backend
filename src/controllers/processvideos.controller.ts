import processvideosModels from "../backingservice/models/videos/processvideos.models"


class PROCESSVIDEOS {
    async getAnyOneElementVideo() {
        const anyVideo = await processvideosModels.findOne({}).lean()

        return anyVideo
    }

    async getAnyOneElementVideoV2() {
        try {
            const [anyVideo] = await processvideosModels.find({}).lean()

            if (!anyVideo)
                throw new Error('No se encontro ningun dato')
            return anyVideo
        } catch (error) {
            throw error
        }
    }

    async getAnyOnetElementWhenTypeIsWebm() {
        try {
            const querySearch = {
                typeVideo: 'webm'
            }

            const anyVideoWebm = await processvideosModels.findOne(querySearch).lean()

            return anyVideoWebm
        } catch (error) {
            throw error
        }
    }


    async getAnyOnetElementWhenTypeIsWebmV2() {
        try {
            const querySearch = {
                typeVideo: 'webm',
            }

            const [anyVideoWebm] = await processvideosModels.find(querySearch).lean()

            if (!anyVideoWebm)
                throw new Error('No se encontro ningun dato')
            return anyVideoWebm
        } catch (error) {
            throw error
        }
    }

    async createProcessVideo(documentProcessVideo: any) {
        try {
            await processvideosModels.insertMany([documentProcessVideo])
            await processvideosModels.create(documentProcessVideo)
            const newDocumentProcessVideo = new processvideosModels(documentProcessVideo)
            await newDocumentProcessVideo.save()

            // peligroso ->>>>
            await processvideosModels.findOneAndUpdate({
                urlStorage: documentProcessVideo?.urlStorage
            }, {
                $set: {
                    ...documentProcessVideo
                },
                new: true,
                upsert: true
            })
        } catch (error) {
            throw error
        }
    }

    // bulk operators
    // aggregates
}

export default new PROCESSVIDEOS()