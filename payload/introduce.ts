import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'VR 기술에 대한 흥미로 IT에 첫 발을 디딘 이후, 현재는 Full Stack 엔지니어로서 실제 서비스 인프라 운영과 자동화에 주도적으로 참여하며 성장하고 있습니다.',
    '개발 초창기에는 Server와 Client의 개념조차 생소했지만, 지금은 클라우드 기반 인프라 설계 및 운영, 네트워크 흐름과 보안 설정 이해, Docker 및 Kubernetes를 활용한 MSA 환경 구성 등 다양한 경험을 통해 실무 역량을 갖추었습니다.',
    '또한 AWS CodePipeline 등을 활용한 CI/CD 파이프라인 자동화, Terraform을 통한 인프라 코드화 (IaC), Prometheus와 Grafana를 통한 실시간 모니터링 및 장애 대응 체계 마련 등을 통해 안정적이고 확장 가능한 시스템을 구축 및 유지 관리하고 있습니다.',
    '현재는 실제 서비스 운영 환경에서 Full Stack 엔지니어로 일을 하고 있으며, 서비스 배포 속도를 높이고 인프라 신뢰성을 확보하며, kubernetes 인프라를 이용한 모델 서빙 개발 뿐만아니라, 클라우드 비용 효율화 및 운영 자동화 개선에 주력하고 있습니다. 앞으로도 Full Stack 엔지니어로서 서비스 안정성과 개발 생산성의 균형을 이끌 수 있는 역량 강화에 힘쓰고 있습니다.',
  ],
  sign: '유상우',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
