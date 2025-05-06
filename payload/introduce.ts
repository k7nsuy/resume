import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'VR이 처음 도입되었을 때 첨단 기술에 대한 흥미로 IT에 대한 관심을 기울이기 시작해, 지금은 개발 및 DevOps 역량을 갖춘 Software Engineer로서 지속적인 성장을 하고 있습니다.',
    '처음 프로그래밍 언어 공부를 시작 할 때 Server와 Client의 개념도 모르고 개발을 시작했던 것과 달리, 현재는 Cloud를 이용한 가상 서버를 구축, 그에 따른 필요한 보안, 네트워크의 흐름을 파악하여 Docker 또는 Kubernetes를 통해 MSA 기반 컨테이너 환경을 제공, CI/CD를 이용한 지속적인 빌드와 배포, 모니터링를 통해 실시간 장애 대응이 가능하도록 실무 능력과 지식을 쌓았습니다.',
    '  일을 .js & Nest.js로 구성한 협업 관련 애플리케이션을 개발하고 있으며, DevOps를 리드하면서 AWS, Docker 및 Terraform 을 이용하여 구축한 서버 인프라를 관리 하고 있습니다.',
  ],asd
  sign: '유상우',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
