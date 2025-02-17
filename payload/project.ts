import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '협업 관련 서비스 앱',
      startedAt: '2024-12',
      where: 'Side Project',
      descriptions: [
        {
          content:
            'CloudFormation을 활용하여 시스템 아키텍처를 코드로 유지하고, API Gateway 및 Lambda를 통해 Landing page 구현, 트래픽 부하 분산, 마이크로서비스 아키텍처를 설계',
        },
        {
          content:
            'Next.js, Nest.js, Docker, CI/CD, Terraform을 사용하여 팀 협업, 작업 관리, 실시간 협업이 가능한 강력한 프로젝트 관리 플랫폼 개발',
        },
        {
          content: 'Prometheus 및 Grafana를 이용해 실시간 대응 모니터링 시스템 설계',
        },
        {
          content: '프로젝트 랜딩 페이지 : ',
          postHref: 'https://www.bsideu.ca',
          weight: 'BOLD',
        },
      ],
    },
    {
      title: '동영상 업로드 웹 애플리케이션',
      startedAt: '2023-02',
      endedAt: '2023-05',
      where: '사이드 프로젝트',
      descriptions: [
        { content: 'Express.js Framework를 활용한 Restful API 서버 구축' },
        { content: 'Pug Engine 및 Javascript, SCSS, Webpack을 이용한 프론트 엔드 페이지 생성' },
        { content: 'Docker 및 docker-compose를 이용한 WEB, DB 컨테이너 구축 및 연동' },
        { content: 'AWS Code Series를 활용한 Docker 컨테이너 빌드 및 배포 자동화' },
        { content: 'AWS S3를 이용한 동영상 및 이미지 파일 저장' },
        { content: 'Github OAuth를 활용한 Login 서비스 제공' },
        { content: 'MongoDB 및 Mongoose ODM 라이브러리를 활용하여 서버 Model과 DB 데이터 매핑' },
        { content: 'Page : ', postHref: 'https://swyu.tk', weight: 'BOLD' },
      ],
    },
    {
      title: 'Managed Service Provider',
      startedAt: '2022-02',
      endedAt: '2023-04',
      where: '베스핀글로벌 테크 센터',
      descriptions: [
        {
          content: 'AWS 서비스 구축 및 장애 대응 (VPC, EC2, RDS, ELB, Route53, IAM, EKS, ECS, etc)',
        },
        {
          content:
            'Node.js 및 Java 환경 서비스 CI/CD 자동화 구현으로 서비스 빌드 및 배포 시간 70% 이상 단축 및 개발자 커뮤니케이션 비용 30% 이상 감소',
        },
        {
          content:
            '기존 고객사 서버 CPU, Memory, APM 분석으로 인한 최적화 인스턴스 타입 솔루션 제공으로 AWS 인프라 비용 30% 감소',
        },
        { content: 'Linux 및 Windows OS 관리 및 장애 대응으로 장애 처리율 90% 이상' },
        { content: 'Nginx, Apache 및 Tomcat 웹 서버 관리 및 장애 대응으로 장애 처리율 90% 이상' },
        {
          content:
            '고객사 서버 및 MSA 시스템 요소 관리, Metric 수집 및 모니터링으로 인한 실시간 대응으로 시스템 장애 원인 파악 및 처리, 장애발생 75% 감소',
        },
        {
          content:
            'AWS EKS Kubernetes 클러스터 및 노드 업데이트, 서비스 운영 관리, 장애 대응, 매일 하드웨어 상태 검사 및 AWS 이슈 확인으로 시스템 장애발생 80% 감소',
        },
        { content: '서버 및 데이터베이스 이중화 설치 및 연동' },
        {
          content: '고객사 플랫폼 서비스 On-premise 환경에서 AWS Cloud 환경으로 마이그레이션 진행',
        },
        { content: '자사 내부 보안 담당 (PC 보안 및 Okta 인증 솔루션 관리)' },
      ],
    },
    {
      title: '경상남도 관공서 클라우드 마이그레이션 프로젝트 취약점 분석 및 조치',
      startedAt: '2023-03',
      endedAt: '2023-04',
      where: '베스핀글로벌 테크 센터',
      descriptions: [
        { content: 'Linux 및 Windows 환경의 유저, 파일 및 디렉토리에 대한 소유권 및 권한 조치' },
        { content: 'Apache, Nginx 및 Tomcat 웹 서버 config 및 보안 설정' },
        { content: 'MySQL 및 MSSQL 데이터베이스에 대한 유저 권한 및 보안 강화' },
      ],
    },
    {
      title: 'DevOps 3-tier Architecture with CI/CD',
      startedAt: '2021-11',
      endedAt: '2021-12',
      where: '베스핀글로벌',
      descriptions: [
        {
          content:
            'Terraform 플랫폼을 이용하여 AWS Credential 인증 및 Cloud Infra Structure 서버 이중화 구성 및 트래픽에 따른 탄력적인 서버 구축 (Auto Scaling)',
        },
        { content: 'Ansible를 활용하여 Apache 및 Tomcat config 설정 일괄 변경' },
        { content: 'Jenkins를 이용하여 서버 빌드 및 배포 자동화 구현' },
        { content: 'Docker를 활용하여 컨테이너 서버 구축' },
        { content: 'RDS 데이터 베이스 구축 및 서버 연동, 이중화' },
        { content: 'File System을 활용하여 이중화 된 서버에 웹 애플리케이션 동시 배포' },
        {
          content:
            'AWS Cloudwatch로 실시간 로그 활용 및 AWS SNS를 이용하여 notification 메시지 전송',
        },
      ],
    },
    {
      title: 'AWS 3-tier Architecture',
      startedAt: '2021-09',
      endedAt: '2021-10',
      where: '베스핀글로벌',
      descriptions: [
        { content: 'Nginx 및 Tomcat 웹 서버 구축 및 Reverse Proxy를 활용하여 연동, 서버 이중화' },
        { content: 'RDS 서버 이중화 배포 및 Tomcat 연동, 트랜잭션 확인' },
        { content: '트래픽에 따른 Auto Scaling 작업으로 탄력적인 서버 구축' },
        { content: 'ELB를 이용한 서버 HTTPS 적용 및 트래픽 부하 분산' },
        { content: 'Jmeter를 활용하여 서버 성능 테스트 및 분석' },
      ],
    },
    {
      title: '빅데이터 기반 관광 웹 애플리케이션 제작',
      startedAt: '2021-06',
      endedAt: '2021-07',
      where: '부산 IT 인재 개발원',
      descriptions: [
        { content: 'SNS 데이터 및 공공데이터를 활용하여 관심사 분석 및 예측' },
        {
          content:
            '기상청, 관광 공공 데이터 API를 이용해 데이터 수집/저장 후, 분석하여 웹을 통해 사용자에게 전달',
        },
        { content: '관광객의 관심있는 지역사회 축제나 공연 정보를 제공' },
        { content: '각 지역마다 특색 있는 축제나 공연 정보를 제공' },
        { content: 'API 활용하여 각 지역의 위치 및 날씨 정보 실시간 제공' },
      ],
    },
    {
      title: '안드로이드 및 Firebase 기반 채팅 앱',
      startedAt: '2021-03',
      endedAt: '2021-04',
      where: '부산 IT 인재 개발원',
      descriptions: [
        { content: 'Firebase Cloud Messaging을 이용한 실시간 채팅' },
        { content: 'Cloud Storage를 활용하여 데이터 저장' },
        { content: 'Java를 활용한 안드로이드 UI/UX 화면 구축' },
        { content: 'Firebase Auth를 통한 유저 Token 전송 및 인증' },
      ],
    },
    {
      title: '헬스케어 제품 판매 웹 애플리케이션',
      startedAt: '2021-01',
      endedAt: '2021-02',
      where: '부산 IT 인재 개발원',
      descriptions: [
        { content: 'User와 Admin 페이지 분리 하여 서버 보안 증대 및 트래픽 부하 분산' },
        { content: 'Use case 및 테이블 명세서 설계' },
        { content: 'Spring Boot framework를 이용한 Restful API 설계' },
        { content: '설계에 따른 사이트맵 구현' },
        { content: 'Backend 서버와 Oracle DB 연동 및 데이터 트랜잭션 구동 확인' },
      ],
    },
  ],
};

export default project;
