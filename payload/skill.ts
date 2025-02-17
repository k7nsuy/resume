import { ISkill } from '../component/skill/ISkill';

const DevOps: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'CI/CD',
      level: 3,
    },
    {
      title: 'Linux',
      level: 3,
    },
    {
      title: 'Apache & Nginx',
      level: 3,
    },
    {
      title: 'Kubernetes',
      level: 2,
    },
    {
      title: 'Terraform',
      level: 2,
    },
    {
      title: 'Ansible',
      level: 2,
    },
    {
      title: 'Monitoring Tools',
      level: 2,
    },
    {
      title: 'Apache Tomcat',
      level: 1,
    },
  ],
};

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Nest.js',
      level: 2,
    },
    {
      title: 'Express.js',
      level: 2,
    },
    {
      title: 'Node.js',
      level: 2,
    },
    {
      title: 'Java',
      level: 1,
    },
    {
      title: 'Python',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'AWS RDS',
      level: 3,
    },
    {
      title: 'MongoDB',
      level: 3,
    },
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'MariaDB',
      level: 2,
    },
    {
      title: 'PostgreSQL',
      level: 2,
    },
    {
      title: 'Firebase',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'Typescript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'React.js',
      level: 1,
    },
    {
      title: 'Next.js',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'etc',
  items: [
    {
      title: 'English',
      level: 3,
    },
    {
      title: 'Jira',
      level: 3,
    },
    {
      title: 'Confluence',
      level: 3,
    },
    {
      title: 'Slack',
      level: 3,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [DevOps, backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
