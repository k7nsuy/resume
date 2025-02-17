import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'VR이 처음 도입되었을 때 첨단 기술에 대한 흥미로 IT에 대한 관심을 기울이기 시작해, 지금은 개발 및 DevOps 역량을 갖춘 Software Engineer로서 지속적인 성장을 하고 있습니다.',
    '처음 프로그래밍 언어 공부를 시작 할 때 Server와 Client의 개념도 모르고 개발을 시작했던 것과 달리, 현재는 Cloud를 이용한 가상 서버를 구축, 그에 따른 필요한 보안, 네트워크의 흐름을 파악하여 Docker 또는 Kubernetes를 통해 MSA 기반 컨테이너 환경을 제공, CI/CD를 이용한 지속적인 빌드와 배포, 모니터링를 통해 실시간 장애 대응이 가능하도록 실무 능력과 지식을 쌓았습니다.',
    '현재 개인 사이드 프로젝트로 Docker 컨테이너와 Express.js 및 React.js Framework를 사용해 동영상 업로드 서비스를 최종 빌드 및 배포 중이며, 또 다른 팀 프로젝트로 Typescript 및 Nest.js, GraphQL 그리고 Terraform을 이용한 클라우드 아키텍처 설계 및 프로젝트 관리 서비스를 구축하여 최종 배포하는 것을 목표로 사이드 프로젝트를 진행 중에 있습니다.',
  ],
  sign: '유상우',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
