import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'VR이 처음 도입되었을 때 첨단 기술에 대한 흥미로 IT에 대한 관심을 기울이기 시작해, 지금은 개발 및 DevOps 역량을 갖춘 Software Engineer로서 지속적인 성장을 하고 있습니다.',
    '처음 프로그래밍 언어 공부를 시작할 때 Server와 Client의 개념도 모르고 개발을 시작했던 것과 달리, 현재는 Cloud를 이용한 가상 서버를 구축하고, 그에 필요한 보안 설정과 네트워크 흐름을 파악하며, Docker 및 Kubernetes를 활용해 MSA 기반의 컨테이너 환경을 제공하고 있습니다. 또한 GitHub Actions, AWS CodePipeline을 통한 CI/CD 구축, Terraform을 활용한 IaC, Prometheus 및 Grafana를 통한 실시간 모니터링과 장애 대응 체계 마련 등을 통해 실무 능력과 지식을 쌓았습니다.',
    '현재는 실제 서비스 운영 환경에서 DevOps를 리드하며 AWS, Docker, Terraform 기반의 인프라를 직접 관리하고 있고, 개발팀과 협업하여 서비스 배포 속도 향상, 인프라 신뢰성 확보, 클라우드 비용 최적화, 운영 자동화 개선에 주력하고 있습니다.',
  ],
  sign: '유상우',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
