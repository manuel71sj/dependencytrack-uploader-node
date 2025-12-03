# dependencytrack-uploader-node

**한국어 (Korean)** | [English](./README_en.md)

DependencyTrack에 SBOM을 업로드하는 CLI 도구입니다.

## 설치 (Installation)

전역으로 설치하거나 `npx` 또는 `pnpm dlx`를 사용하여 직접 실행할 수 있습니다.

```bash
# 전역 설치
npm install -g dependencytrack-uploader-node
# 또는
pnpm add -g dependencytrack-uploader-node

# 직접 실행
npx dependencytrack-uploader-node --help
# 또는
pnpm dlx dependencytrack-uploader-node --help
```

## 사용법 (Usage)

### CLI 인수 (CLI Arguments)

명령줄 인수를 통해 설정을 전달할 수 있습니다.

```bash
dependencytrack-uploader \
  --url "http://dtrack.example.com" \
  --api-key "your-api-key" \
  --project-name "my-project" \
  --project-version "1.0.0" \
  --bom "./bom.xml"
```

| 옵션 (Option) | 설명 (Description) | 필수 여부 (Required) |
|--------|------|----------|
| `--url` | DependencyTrack URL | 예 (또는 환경변수) |
| `--api-key` | API 키 | 예 (또는 환경변수) |
| `--project-name` | 프로젝트 이름 | 예 (또는 환경변수) |
| `--project-version` | 프로젝트 버전 | 예 (또는 환경변수) |
| `--bom` | SBOM 파일 경로 | 예 (또는 환경변수) |
| `--auto-create` | 프로젝트 자동 생성 (기본값: true) | 아니오 |

### 환경 변수 (Environment Variables)

환경 변수를 사용하여 도구를 설정할 수도 있습니다. 이는 CI/CD 파이프라인에서 유용합니다.

| 변수명 | CLI 옵션 대응 |
|----------|-----------------------|
| `DTRACK_URL` | `--url` |
| `DTRACK_API_KEY` | `--api-key` |
| `PROJECT_NAME` | `--project-name` |
| `PROJECT_VERSION` | `--project-version` |
| `SBOM_FILE` | `--bom` |

### 예시 (Example)

환경 변수와 CLI 인수를 혼합하여 사용하는 예시:

```bash
# 공통 설정은 환경 변수로 설정
export DTRACK_URL="http://localhost:8081"
export DTRACK_API_KEY="your-secret-key"

# 특정 업로드 실행
dependencytrack-uploader \
  --project-name "MyProject" \
  --project-version "1.0.0" \
  --bom "./bom.json"
```

## 라이선스 (License)

MIT
