import videoController from "./video.controller"
import videoManager from "./videomanagercontroller"

class VIDEOPROCESSCONTROLLER {
    // __dirname
    // fs
    // syncDir
    // implementar la funcion createoutputpath
    // convertfile
    // retornar el path de video
    async convert(originUrlVideo: string, videoId: any) {
        try {
            await videoController.createStatusProcessVideo('download', videoId)

             const localPathVideo = await this.downloadFile(originUrlVideo)

            await videoController.createStatusProcessVideo('validate', videoId)

            // const isValidFile = await this.validateFile(localPathVideo)

            // if(!isValidFile) throw new Error('Error en el archivo')
            const outputVideoPath = await this.createOutputPath()

            await videoController.createStatusProcessVideo('convert', videoId)

             await this.convertFile(localPathVideo, outputVideoPath)

            await videoController.createStatusProcessVideo('upload', videoId)

            // const newOriginUrlVideoConvert = await this.uploadFile(outputVideoPath)

            await videoController.createStatusProcessVideo('notified', videoId)

            // this.logExecuteProcess(newOriginUrlVideoConvert)
            // return newOriginUrlVideoConvert
            return {
                outputPath: ''
            }
        } catch (error) {
            await videoController.createStatusProcessVideo('error', videoId)
            throw error
        }
    }

    async downloadFile(originUrlVideo: string) {
        return require('path').join(process.cwd(),'inputvideo.webm')
    }
    // ffprobe
    async validateFile(localPathVideo: string) {
        // ffprobeFromSpawn(localPath)
        // return true/false
        return true
    }

    async createOutputPath() {
        console.log('Output video:', require('path').join(process.cwd(),'inputvideo.mp4'))
        return require('path').join(process.cwd(),'inputvideo.mp4')
    }

    async convertFile(localPathVideo: string, outputPath: string) {
        try {
           // ffmpegFromSpawn(localPathVideo, outputPath)
           await videoManager.changeFormatVideo(localPathVideo)
        } catch (error) {
            throw error
        }
    }

    async uploadFile(outputPath: string) {
        try {
            // subir el file y retornal el newOriginUrlVideoConvert
            return ''
        } catch (error) {
            throw error
        }
    }

    logExecuteProcess(newOriginUrlVideoConvert: string) {
        console.log("🚀 ~ >>>>>>> newOriginUrlVideoConvert", newOriginUrlVideoConvert)
    }
}

export default new VIDEOPROCESSCONTROLLER()