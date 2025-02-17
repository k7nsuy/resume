import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '부산 IT 인재 개발원',
      subTitle:
        'React JS와 Java를 사용하여 풀스택 웹 애플리케이션을 개발하고 AWS 클라우드 서비스를 통해 배포. 지역 축제 및 행사, 지역별 특색 있는 정보 제공, API를 통해 실시간 위치 및 날씨 업데이트',
      startedAt: '2020-12',
      endedAt: '2021-07',
    },
    {
      title: 'Selc College',
      subTitle: 'Business & English',
      startedAt: '2019-08',
      endedAt: '2020-07',
    },
    {
      title: '인제대학교',
      subTitle: '기계공학 및 영어영문학 복수전공',
      startedAt: '2009-03',
      endedAt: '2016-02',
    },
    {
      title: '대동고등학교',
      subTitle: '자연계 졸업',
      startedAt: '2007-03',
      endedAt: '2009-02',
    },
  ],
};

export default education;
