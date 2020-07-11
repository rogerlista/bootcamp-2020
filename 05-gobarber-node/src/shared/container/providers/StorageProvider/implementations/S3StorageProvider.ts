import fs from 'fs'
import path from 'path'
import aws from 'aws-sdk'
import mime from 'mime'

import uploadConfig from '@config/upload'
import IStorageProvider from '../models/IStorageProvider'

class S3StorageProvider implements IStorageProvider {
  private client: aws.S3

  constructor() {
    this.client = new aws.S3({
      region: 'us-est-1',
    })
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.tmpFolder, file)

    const ContentType = mime.getType(originalPath)

    if (!ContentType) {
      throw new Error('File not found')
    }

    const fileContent = await fs.promises.readFile(originalPath)

    await this.client
      .putObject({
        Bucket: uploadConfig.config.aws.bucket,
        key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType,
      })
      .promise()

    await fs.promises.unlink(originalPath)

    return file
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: uploadConfig.config.aws.bucket,
        key: file,
      })
      .promise()
  }
}

export default S3StorageProvider
