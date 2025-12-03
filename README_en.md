# dependencytrack-uploader-node

[한국어 (Korean)](./README.md) | **English**

A CLI tool to upload SBOMs to DependencyTrack.

## Installation

You can install it globally or run it directly using `npx` or `pnpm dlx`.

```bash
# Global install
npm install -g dependencytrack-uploader-node
# or
pnpm add -g dependencytrack-uploader-node

# Run directly
npx dependencytrack-uploader-node --help
# or
pnpm dlx dependencytrack-uploader-node --help
```

## Usage

### CLI Arguments

You can pass configuration via command line arguments.

```bash
dependencytrack-uploader \
  --url "http://dtrack.example.com" \
  --api-key "your-api-key" \
  --project-name "my-project" \
  --project-version "1.0.0" \
  --bom "./bom.xml"
```

| Option | Description | Required |
|--------|-------------|----------|
| `--url` | DependencyTrack URL | Yes (or Env) |
| `--api-key` | API Key | Yes (or Env) |
| `--project-name` | Project Name | Yes (or Env) |
| `--project-version` | Project Version | Yes (or Env) |
| `--bom` | Path to SBOM file | Yes (or Env) |
| `--auto-create` | Auto create project (default: true) | No |

### Environment Variables

You can also use environment variables to configure the tool. This is useful for CI/CD pipelines.

| Variable | CLI Option Equivalent |
|----------|-----------------------|
| `DTRACK_URL` | `--url` |
| `DTRACK_API_KEY` | `--api-key` |
| `PROJECT_NAME` | `--project-name` |
| `PROJECT_VERSION` | `--project-version` |
| `SBOM_FILE` | `--bom` |

### Example

Using environment variables mixed with CLI arguments:

```bash
# Set common config via Env
export DTRACK_URL="http://localhost:8081"
export DTRACK_API_KEY="your-secret-key"

# Run specific upload
dependencytrack-uploader \
  --project-name "MyProject" \
  --project-version "1.0.0" \
  --bom "./bom.json"
```

## License

MIT
