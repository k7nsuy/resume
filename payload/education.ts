import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
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
      // endedAt: '2010-02',
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
