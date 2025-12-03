import fs from 'fs'

import axios from 'axios'
import FormData from 'form-data'

export interface UploadOptions {
  url: string
  apiKey: string
  projectName: string
  projectVersion: string
  bomFilePath: string
  autoCreate?: boolean
}

export async function uploadBom(options: UploadOptions): Promise<void> {
  const { url, apiKey, projectName, projectVersion, bomFilePath, autoCreate = true } = options

  if (!fs.existsSync(bomFilePath)) {
    throw new Error(`SBOM file not found at: ${bomFilePath}`)
  }

  const form = new FormData()
  form.append('projectName', projectName)
  form.append('projectVersion', projectVersion)
  form.append('autoCreate', autoCreate.toString())
  form.append('bom', fs.createReadStream(bomFilePath))

  try {
    const response = await axios.post(`${url}/api/v1/bom`, form, {
      headers: {
        'X-Api-Key': apiKey,
        ...form.getHeaders(),
      },
    })

    console.log(`Successfully uploaded SBOM for ${projectName} ${projectVersion}`)
    console.log(`Status: ${response.status} ${response.statusText}`)
    if (response.data) {
      console.log('Response:', JSON.stringify(response.data, null, 2))
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error uploading SBOM:')
      console.error(`Status: ${error.response?.status} ${error.response?.statusText}`)
      console.error('Data:', JSON.stringify(error.response?.data, null, 2))
    } else if (error instanceof Error) {
      console.error('Unexpected error:', error.message)
    } else {
      console.error('Unexpected error:', String(error))
    }
    process.exit(1)
  }
}
