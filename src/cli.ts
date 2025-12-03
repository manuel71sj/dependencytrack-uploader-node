#!/usr/bin/env node

import { Command } from 'commander'
import dotenv from 'dotenv'

import { uploadBom } from './uploader'

dotenv.config()

const program = new Command()

program
  .name('dependencytrack-uploader')
  .description('CLI to upload SBOM to DependencyTrack')
  .version('1.0.0')
  .requiredOption('--url <url>', 'DependencyTrack URL', process.env.DTRACK_URL)
  .requiredOption('--api-key <key>', 'DependencyTrack API Key', process.env.DTRACK_API_KEY)
  .requiredOption('--project-name <name>', 'Project Name', process.env.PROJECT_NAME)
  .requiredOption('--project-version <version>', 'Project Version', process.env.PROJECT_VERSION)
  .requiredOption('--bom <path>', 'Path to SBOM file', process.env.SBOM_FILE)
  .option('--auto-create', 'Auto create project if not exists', true)
  .action(async (options) => {
    try {
      await uploadBom({
        url: options.url,
        apiKey: options.apiKey,
        projectName: options.projectName,
        projectVersion: options.projectVersion,
        bomFilePath: options.bom,
        autoCreate: options.autoCreate,
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error(String(error))
      }
      process.exit(1)
    }
  })

program.parse(process.argv)
