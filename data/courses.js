export const courses = {
  'aws-solution-architect-training': {
    slug: 'aws-solution-architect-training',
    title: 'AWS Certified Solutions Architect Training',
    category: 'Cloud Computing',
    heroDescription: 'Gain expertise in AWS Elastic Cloud Compute (EC2), Simple Storage Service (S3), Virtual Private Cloud (VPC), Relational Database Service (RDS), Route 53 (DNS Service), Load Balancer with Auto Scaling, AWS Identity and Access Management (IAM), and Elastic Block Store (EBS). Our AWS Certified Solutions Architect Training prepares you for the AWS Solutions Architect Associate (SAA) exam with comprehensive coverage of cloud computing fundamentals, compute, storage, networking, databases, security, monitoring, high availability, cost management, and the AWS Well-Architected Framework—plus exam preparation and practice tests.',
    heroBannerImage: '/course-banners/aws-solutions-architect.png',
    callToAction: 'Become a Professional AWS Certified Solution Architect',
    highlights: [
      'Gain expertise in AWS Elastic Cloud Compute (EC2)',
      'Simple Storage Service (S3)',
      'Virtual Private Cloud (VPC)',
      'Relational Database Service (RDS)',
      'Route 53 (DNS Service)',
      'Load Balancer with Auto Scaling',
      'AWS Identity and Access Management (IAM)',
      'Elastic Block Store (EBS)'
    ],
    description: {
      whyChooseTitle: 'Why choose AWS Certified Solutions Architect Training from InsureTech Skills?',
      overview: 'Our AWS Certified Solutions Architect Training covers Introduction to AWS & Cloud Computing, IAM, Compute Services (EC2, Lambda, ECS, EKS), Storage (S3, EBS, EFS), Networking & Content Delivery (VPC, Route 53, CloudFront), Databases (RDS, DynamoDB, Redshift, ElastiCache), Security & Compliance (WAF, Shield, Secrets Manager, Config, CloudTrail, Security Hub), Monitoring & Observability (CloudWatch, X-Ray, Trusted Advisor), High Availability & Disaster Recovery, Cost Management & Billing, the AWS Well-Architected Framework, and Exam Preparation & Practice Tests to help you pass the AWS SAA exam.',
      whyChoose: 'At InsureTech Skills, we offer industry-certified instructors, hands-on labs, and comprehensive post-training support. The course bridges theoretical knowledge and practical implementation with exam-focused content, practice questions, mock exams, and review of AWS Whitepapers and FAQs. We provide personalized doubt-clearing sessions, flexible schedules, and access to recorded sessions.',
      keyFeatures: [
        'Hands-on lab experience',
        'Flexible schedule',
        'Personalized doubt sessions',
        'Access to recorded sessions',
        'Industry-certified instructors',
        'Post-training support',
        'Certification guidance',
        'Exam preparation & practice tests'
      ],
      whatYouWillLearn: [
        'Introduction to AWS & Cloud Computing — Basics, global infrastructure, shared responsibility, pricing',
        'IAM — Users, groups, roles, policies (JSON), best practices, MFA',
        'Compute — EC2, instance types, purchasing options, Auto Scaling, ELB, Lambda, ECS, EKS, Docker & Kubernetes basics',
        'Storage — S3, storage classes, lifecycle, versioning, encryption, EBS, EFS, Storage Gateway, Backup',
        'Networking — VPC, subnets, route tables, gateways, peering, Transit Gateway, PrivateLink, Route 53, CloudFront, Direct Connect, VPN',
        'Databases — RDS, DynamoDB, Redshift, ElastiCache',
        'Security & Compliance — WAF, Shield, Secrets Manager, Config, CloudTrail, Security Hub',
        'Monitoring — CloudWatch, X-Ray, Trusted Advisor',
        'High Availability & DR — Multi-AZ/Multi-Region, backup, fault tolerance',
        'Cost Management — Pricing Calculator, Cost Explorer, Budgets',
        'AWS Well-Architected Framework — Operational Excellence, Security, Reliability, Performance, Cost',
        'Exam Preparation — SAA exam format, practice questions, mock exams, whitepapers & FAQs'
      ],
      prerequisites: [
        'Fundamental knowledge of AWS and cloud computing concepts',
        'Basic understanding of networking principles',
        'Familiarity with computing, storage, and database concepts'
      ],
      whoCanJoin: [
        'Solution Architects',
        'Cloud Engineers',
        'DevOps Engineers',
        'System Administrators',
        'Network Administrators',
        'Cloud Consultants',
        'Enterprise Architects',
        'IT Operations Specialists',
        'IT Managers & Professionals',
        'Anyone preparing for the AWS Certified Solutions Architect – Associate (SAA) exam'
      ],
      distinctness: 'Our AWS Certified Solutions Architect Training includes comprehensive coverage of EC2, S3, VPC, RDS, Route 53, IAM, EBS, and the full exam syllabus, plus exam preparation with practice questions, mock exams, and review of AWS Whitepapers and FAQs. We provide a complete learning ecosystem with career guidance and certification support.'
    },
    modules: [
      {
        title: '1. Introduction to AWS & Cloud Computing',
        topics: [
          'Basics of Cloud Computing',
          'AWS Global Infrastructure (Regions, Availability Zones, Edge Locations)',
          'Shared Responsibility Model',
          'AWS Free Tier & Pricing Model'
        ]
      },
      {
        title: '2. AWS Identity and Access Management (IAM)',
        topics: [
          'Users, Groups, Roles, and Policies',
          'IAM Permissions and Policies (JSON format)',
          'IAM Best Practices',
          'Multi-Factor Authentication (MFA)'
        ]
      },
      {
        title: '3. AWS Compute Services',
        topics: [
          'Amazon EC2 (Elastic Compute Cloud)',
          'Instance Types, Purchasing Options (On-Demand, Reserved, Spot, Savings Plans)',
          'EC2 Auto Scaling & Load Balancing (ELB)',
          'EC2 Security (Key Pairs, Security Groups, IAM Roles)',
          'AWS Lambda – Serverless Compute Concepts, Triggers & Integrations',
          'Amazon ECS & EKS – Containers on AWS',
          'Docker & Kubernetes Basics'
        ]
      },
      {
        title: '4. AWS Storage Services',
        topics: [
          'Amazon S3 (Simple Storage Service)',
          'Storage Classes (Standard, IA, Glacier)',
          'Lifecycle Policies, Versioning, Encryption',
          'Security & Access Control (Bucket Policies, ACLs)',
          'Amazon EBS (Elastic Block Store)',
          'Volume Types, Snapshots, Encryption',
          'Amazon EFS (Elastic File System) – File Storage for EC2',
          'AWS Storage Gateway & AWS Backup'
        ]
      },
      {
        title: '5. AWS Networking & Content Delivery',
        topics: [
          'Amazon VPC (Virtual Private Cloud)',
          'Subnets, Route Tables, Internet/NAT Gateways',
          'VPC Peering, Transit Gateway, PrivateLink',
          'Amazon Route 53 – Domain Registration, DNS Routing Policies',
          'AWS CloudFront – CDN for Content Delivery',
          'AWS Direct Connect & VPN'
        ]
      },
      {
        title: '6. AWS Databases',
        topics: [
          'Amazon RDS (Relational Database Service)',
          'Supported Engines (MySQL, PostgreSQL, Aurora, etc.)',
          'Multi-AZ, Read Replicas, Backups',
          'Amazon DynamoDB (NoSQL Database)',
          'Tables, Partitioning, Global Tables',
          'Amazon Redshift (Data Warehouse)',
          'Amazon ElastiCache (Memcached & Redis)'
        ]
      },
      {
        title: '7. AWS Security & Compliance',
        topics: [
          'Security Tools: AWS WAF (Web Application Firewall), AWS Shield (DDoS Protection), AWS Secrets Manager',
          'Audit & Compliance Tools: AWS Config, AWS CloudTrail, AWS Security Hub'
        ]
      },
      {
        title: '8. AWS Monitoring & Observability',
        topics: [
          'Amazon CloudWatch – Metrics, Logs, Alarms',
          'AWS X-Ray – Distributed Tracing',
          'AWS Trusted Advisor – Cost Optimization, Performance, Security'
        ]
      },
      {
        title: '9. AWS High Availability & Disaster Recovery',
        topics: [
          'Multi-AZ & Multi-Region Architectures',
          'AWS Backup & Restore Strategies',
          'AWS Fault Tolerance & Elasticity'
        ]
      },
      {
        title: '10. AWS Cost Management & Billing',
        topics: [
          'AWS Pricing Calculator',
          'AWS Cost Explorer',
          'AWS Budgets'
        ]
      },
      {
        title: '11. AWS Well-Architected Framework',
        topics: [
          'Operational Excellence',
          'Security',
          'Reliability',
          'Performance Efficiency',
          'Cost Optimization'
        ]
      },
      {
        title: '12. Exam Preparation & Practice Tests',
        topics: [
          'Understanding AWS SAA Exam Format',
          'Practice Questions & Mock Exams',
          'Review AWS Whitepapers & FAQs'
        ]
      }
    ],
    learningModes: [
      {
        title: '1-TO-1 TRAINING',
        icon: '👥',
        description: 'Customized schedule, learn at your dedicated pace, and time-saving more.',
        buttonText: 'GET STARTED'
      },
      {
        title: 'ONLINE TRAINING',
        icon: '💻',
        description: 'Flexibility, convenience, and effective learning with instant doubt clarification and guaranteed sessions.',
        buttonText: 'ENROLL NOW'
      },
      {
        title: 'CORPORATE TRAINING',
        icon: '🏢',
        description: 'Learn anytime, anywhere, across the globe with customized corporate training. Have trainer and progress at your own pace.',
        buttonText: 'CONTACT US'
      }
    ],
    benefits: [
      {
        title: 'Experienced Instructors',
        icon: '✓',
        description: 'Learn from industry experts with years of AWS experience'
      },
      {
        title: 'Post Training Support',
        icon: '📅',
        description: 'Continuous support even after course completion'
      },
      {
        title: 'Customized Training',
        icon: '🏆',
        description: 'Training tailored to your learning needs and schedule'
      },
      {
        title: 'Flexible Schedule',
        icon: '📅',
        description: 'Learn at your own pace with flexible timings'
      },
      {
        title: 'Access to Recorded Sessions',
        icon: '📹',
        description: 'Review concepts anytime with recorded session access'
      }
    ],
    faqs: [
      {
        question: 'Why should I opt for the AWS Certified Solutions Architect Training course?',
        answer: 'AWS Certified Solutions Architect Training provides comprehensive knowledge of EC2, S3, VPC, RDS, Route 53, Load Balancer with Auto Scaling, IAM, EBS, and the full AWS SAA exam syllabus. With the growing demand for cloud professionals, this certification significantly enhances your career prospects. Our course includes exam preparation, practice questions, mock exams, and review of AWS Whitepapers and FAQs.'
      },
      {
        question: 'How does this certification course help me?',
        answer: 'This certification validates your expertise in designing distributed systems on AWS. The course covers compute, storage, networking, databases, security, monitoring, high availability, cost management, and the Well-Architected Framework. Exam preparation and practice tests help you pass the AWS Solutions Architect Associate (SAA) exam and become job-ready.'
      },
      {
        question: 'Does this certification add value to my career?',
        answer: 'Absolutely! The AWS Certified Solutions Architect – Associate is highly recognized and often required for cloud architecture roles. It can lead to salary increments, better job opportunities, and career advancement. Many professionals report significant career growth after obtaining this certification.'
      },
      {
        question: 'Which topics are covered by your course?',
        answer: 'The course covers Introduction to AWS & Cloud Computing, IAM, Compute (EC2, Lambda, ECS, EKS), Storage (S3, EBS, EFS), Networking (VPC, Route 53, CloudFront), Databases (RDS, DynamoDB, Redshift, ElastiCache), Security & Compliance (WAF, Shield, Config, CloudTrail, Security Hub), Monitoring (CloudWatch, X-Ray, Trusted Advisor), High Availability & DR, Cost Management, AWS Well-Architected Framework, and Exam Preparation & Practice Tests.'
      },
      {
        question: 'Who is eligible for this course?',
        answer: 'This course is suitable for Solution Architects, Cloud Engineers, DevOps Engineers, System Administrators, Network Administrators, IT Managers, and anyone preparing for the AWS Certified Solutions Architect – Associate (SAA) exam. Prior AWS experience is helpful but not mandatory as we cover fundamentals.'
      },
      {
        question: 'What types of jobs can I get after this course?',
        answer: 'After completing this course and earning the AWS SAA certification, you can pursue roles such as AWS Solution Architect, Cloud Architect, Cloud Engineer, DevOps Engineer, Cloud Consultant, and Enterprise Architect in top organizations. The certification opens doors to numerous career opportunities in the cloud domain.'
      },
      {
        question: 'Do you include exam preparation?',
        answer: 'Yes. The course includes a dedicated module on Exam Preparation & Practice Tests: understanding the AWS SAA exam format, practice questions, mock exams, and review of AWS Whitepapers and FAQs to help you pass the certification exam.'
      },
      {
        question: 'Do freshers have any job scope?',
        answer: 'Yes, freshers with AWS Certified Solutions Architect certification have excellent job opportunities. Many companies actively hire certified freshers for cloud roles. We provide additional support including resume building, interview preparation, and placement assistance to help freshers kickstart their cloud careers.'
      },
      {
        question: 'Do I get your support during the course?',
        answer: 'Absolutely! We provide comprehensive support including personalized doubt-clearing sessions, access to instructors, recorded sessions for revision, hands-on lab support, and post-training career guidance. Our team is committed to your success.'
      }
    ],
    toolsAndTechnologies: [
      { name: 'Amazon VPC', desc: 'Networking, subnets, and connectivity', icon: '/courses/tools/aws-solution-architect-training/vpc-lattice.png' },
      { name: 'Amazon EC2', desc: 'Compute instances and capacity', icon: '/courses/tools/aws-solution-architect-training/ec2.png' },
      { name: 'EC2 Auto Scaling', desc: 'Elastic capacity and health-based scaling', icon: '/courses/tools/aws-solution-architect-training/ec2-auto-scaling.png' },
      { name: 'Elastic Load Balancing', desc: 'Distribute traffic across targets', icon: '/courses/tools/aws-solution-architect-training/elastic-load-balancing.png' },
      { name: 'AWS Lambda', desc: 'Serverless compute', icon: '/courses/tools/aws-solution-architect-training/lambda.png' },
      { name: 'Amazon RDS', desc: 'Managed relational databases', icon: '/courses/tools/aws-solution-architect-training/rds.png' },
      { name: 'Amazon DynamoDB', desc: 'NoSQL at scale', icon: '/courses/tools/aws-solution-architect-training/dynamodb.png' },
      { name: 'Amazon Route 53', desc: 'DNS and routing', icon: '/courses/tools/aws-solution-architect-training/route-53.png' },
      { name: 'Amazon CloudFront', desc: 'Global CDN', icon: '/courses/tools/aws-solution-architect-training/cloudfront.png' },
      { name: 'AWS Fargate', desc: 'Serverless containers', icon: '/courses/tools/aws-solution-architect-training/fargate.png' },
      { name: 'AWS Elastic Beanstalk', desc: 'Deploy and scale web apps', icon: '/courses/tools/aws-solution-architect-training/elastic-beanstalk.png' },
      { name: 'IAM Identity Center', desc: 'Identity and SSO', icon: '/courses/tools/aws-solution-architect-training/iam-identity-center.png' },
    ],
    duration: '20 Hours',
    mode: 'Online',
    icon: 'aws',
    heroSubtitle: 'AWS Certified Solutions Architect'
  },

  'microsoft-azure-fundamental-training': {
    slug: 'microsoft-azure-fundamental-training',
    title: 'Microsoft Azure Fundamental Training',
    category: 'Cloud Computing',
    heroDescription: 'Microsoft Azure Fundamental Training is designed to help you understand core cloud concepts, Azure architecture, services, security, pricing, and governance. This course fully aligns with the Microsoft AZ-900 certification and provides a strong foundation for starting your Azure and cloud journey.',
    heroBannerImage: '/course-banners/azure-fundamentals.png',
    callToAction: 'Request Callback',
    highlights: [
      '20 Hour Live Virtual training',
      'Comprehensive and updated training curriculum',
      'Query solving and quiz materials',
      'Flexible schedule',
      'Industry-recognized training professionals',
      'Classes available on Weekend/Weekdays',
      'Access to Recorded Sessions'
    ],
    description: {
      whyChooseTitle: 'Why choose Microsoft Azure Fundamental Training from InsureTech Skills?',
      overview: 'This Microsoft Azure Fundamental Training (AZ-900) covers essential cloud concepts, Azure core services, security, governance, pricing, and lifecycle. You will learn how Microsoft Azure delivers compute, storage, networking, databases, identity, and monitoring services in the cloud and how organizations use Azure to build modern solutions.',
      whyChoose: 'Our Azure Fundamentals program is ideal for beginners and working professionals who want to start or transition into cloud careers. With instructor-led sessions, hands-on labs, real-time examples, and exam-focused coverage, you will gain the confidence to clear the AZ-900 certification and move towards advanced Azure roles and certifications.',
      keyFeatures: [
        'Concepts aligned to the official AZ-900 exam blueprint',
        'Hands-on labs for core Azure services',
        'Certified and experienced Azure trainers',
        'Flexible schedules with weekday/weekend options',
        'Exam tips, sample questions, and doubt-clearing sessions',
        'Access to recorded sessions for revision'
      ],
      whatYouWillLearn: [
        'Cloud Concepts — High availability, scalability, elasticity, agility, and disaster recovery',
        'Core Azure Services — Compute (VMs, App Services), Storage (Blob, Disk, Files), and Networking (VNet, VPN, Load Balancer)',
        'Azure Architecture — Regions, Availability Zones, Resource Groups, subscriptions, and management groups',
        'Azure Identity, Security, and Governance — Azure AD, RBAC, Zero Trust, policies, and Blueprints',
        'Azure Security Features — Defender for Cloud, Key Vault, Security Center concepts, and network security',
        'Azure Pricing and Support — Pricing calculator, TCO, cost management, SLAs, and service lifecycle',
        'Monitoring and Management Tools — Azure Monitor, Service Health, Advisor, and portal/CLI basics',
        'Exam Preparation — AZ-900 exam pattern, sample questions, and preparation strategy'
      ],
      prerequisites: [
        'Basic understanding of IT or software concepts',
        'Familiarity with general networking and databases is helpful',
        'No prior Azure or cloud experience is mandatory'
      ],
      whoCanJoin: [
        'Students and fresh graduates starting a cloud career',
        'IT support professionals and system administrators',
        'Developers and testers looking to understand Azure basics',
        'Business and non-technical professionals working with cloud projects',
        'Anyone planning to take the Microsoft AZ-900 exam'
      ],
      distinctness: 'This course is tailored for AZ-900 aspirants with a clear balance of theory, demos, and hands-on labs. You learn using real Azure portal scenarios, get exam-focused guidance, and build the right foundation to advance to role-based certifications like Azure Administrator, Developer, or Solution Architect.'
    },
    modules: [
      {
        title: '1. Basic Understanding of Cloud Concepts',
        topics: [
          'What is cloud computing?',
          'Benefits of cloud: high availability, scalability, reliability, and agility',
          'Cloud service models: IaaS, PaaS, SaaS',
          'Cloud deployment models: Public, Private, and Hybrid',
          'Infrastructure differences, Azure service lifecycle, and Service Level Agreements'
        ]
      },
      {
        title: '2. Implementation of Core Azure Services',
        topics: [
          'Azure regions, Availability Zones, and datacenters',
          'Azure subscriptions, management groups, and Resource Groups',
          'Compute: Virtual Machines, App Service, Containers',
          'Storage: Blob, Disk, Files; Networking: VNet, VPN, Load Balancer',
          'Azure portal, CLI, and Cloud Shell'
        ]
      },
      {
        title: '3. Insights of Security, Privacy, Compliance, and Trust',
        topics: [
          'Azure Active Directory basics and RBAC',
          'Security, privacy, compliance, and trust across Azure solutions',
          'Azure Policy, Key Vault, and shared responsibility model'
        ]
      },
      {
        title: '4. Detail of Azure Pricing and Support',
        topics: [
          'Azure pricing model and cost factors',
          'Azure Cost Management and budgets',
          'Subscriptions, cost planning and management',
          'Support options and service lifecycle'
        ]
      },
      {
        title: '5. Exam Preparation Guides',
        topics: [
          'AZ-900 exam structure and objectives',
          'Sample questions and exam tips',
          'Study plan and next steps'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Dedicated one-to-one Azure training with customized pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Instructor-led online batches with flexible timing options.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate Azure fundamentals training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Foundation for Azure Career', icon: '✓', description: 'Build a strong base to move into Azure Administrator, Developer, or Architect roles.' },
      { title: 'Globally Recognized Certification', icon: '📜', description: 'Prepare for the Microsoft Certified: Azure Fundamentals (AZ-900) exam.' },
      { title: 'Hands-on Learning', icon: '🔧', description: 'Work with real Azure services through guided labs and demos.' },
      { title: 'Flexible Learning Options', icon: '📅', description: 'Choose from 1-to-1, online, or corporate training modes.' },
      { title: 'Career Support', icon: '📈', description: 'Get guidance on next certifications, roles, and learning roadmap.' }
    ],
    faqs: [
      {
        question: 'Why should I opt for the Microsoft Azure Fundamental Training course?',
        answer: 'This course provides a solid introduction to cloud concepts and Microsoft Azure services aligned with the AZ-900 exam. It is ideal for beginners who want to understand Azure fundamentals and build a strong base for cloud careers.'
      },
      {
        question: 'Do I need prior cloud experience for this course?',
        answer: 'No. The course is designed for beginners with basic IT knowledge. We start from foundational concepts and gradually move to Azure-specific services and scenarios.'
      },
      {
        question: 'Does this course help me prepare for the AZ-900 exam?',
        answer: 'Yes. The curriculum is mapped to the AZ-900 exam objectives and includes exam tips, sample questions, and guidance on how to prepare effectively.'
      },
      {
        question: 'Who can join this training?',
        answer: 'Students, fresh graduates, IT support staff, system administrators, developers, testers, business users, or anyone interested in understanding Azure cloud concepts and preparing for AZ-900.'
      },
      {
        question: 'What is the duration and mode of training?',
        answer: 'The duration of this training is 20 hours. We provide live virtual training with flexible scheduling. 1-to-1 and corporate options are also available.'
      },
      {
        question: 'Which exam do I sit for to obtain this certification?',
        answer: 'You should clear the AZ-900 exam to earn this certificate.'
      },
      {
        question: 'Can I get post-training mentorship support?',
        answer: 'Yes, you can.'
      },
      {
        question: 'Do you provide recorded session videos?',
        answer: 'Yes, we provide.'
      },
      {
        question: 'Do I get refund opportunities?',
        answer: 'Yes, you can, but only if it meets our service principles.'
      }
    ],
    duration: '20 Hours',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'AZ-900 Fundamentals'
  },

  'microsoft-azure-infrastructure-solution-training': {
    slug: 'microsoft-azure-infrastructure-solution-training',
    title: 'Microsoft Azure Infrastructure Solution Training',
    category: 'Cloud Computing',
    heroDescription:
      'Microsoft Azure · AZ-104 / AZ-305 · Scratch to Advanced — Azure Infrastructure Solution Training. A comprehensive, structured training programme that takes you from cloud computing fundamentals all the way to designing, deploying, securing, and governing enterprise-grade infrastructure solutions on Microsoft Azure — aligned to the AZ-104 (Azure Administrator) and AZ-305 (Azure Infrastructure Solutions) certifications. Duration: 35–50 Hours. Exams: AZ-104 / AZ-305. Mode: Live Online / 1-to-1 / Corporate. Level: Scratch to Advanced. This programme is structured across three progressive tiers (Beginner, Intermediate, Advanced), enabling students with no prior cloud experience to reach full proficiency. Every module includes guided lab exercises in a live Azure environment and culminates in an end-to-end capstone project aligned to real enterprise scenarios.',
    heroBannerImage: '/course-banners/azure-infrastructure-solution.png',
    callToAction: 'Request Callback',
    highlights: [
      'AZ-104 and AZ-305 aligned syllabus',
      'Scratch to advanced Azure infrastructure labs',
      'Advanced networking, security, and governance',
      'IaC with ARM/Bicep and Terraform',
      'CI/CD for infrastructure deployments',
      'Enterprise HA/DR and Zero Trust capstone'
    ],
    description: {
      whyChooseTitle: 'Why choose Azure Infrastructure Solution Training (AZ-104 / AZ-305) from InsureTech Skills?',
      overview:
        'A complete, structured AZ-104 and AZ-305 aligned programme that takes you from cloud computing fundamentals to enterprise-grade Azure infrastructure design and administration. You progress through Beginner, Intermediate, and Advanced tiers with guided lab exercises in a live Azure environment, culminating in an end-to-end capstone project aligned to real enterprise scenarios.',
      whyChoose:
        'Instead of learning infrastructure components in isolation, you follow a single end-to-end journey: Azure fundamentals, administration and solution design, then enterprise architecture for availability, governance, zero trust, security, performance, and cost optimisation. The labs and capstone build the practical skills needed for both AZ-104 (administration) and AZ-305 (infrastructure solutions architecture) certification readiness.',
      keyFeatures: [
        'AZ-104 and AZ-305 aligned certification readiness',
        'Guided lab exercises in a live Azure environment',
        'Advanced networking, security, and governance topics',
        'Infrastructure as Code with ARM/Bicep and Terraform',
        'CI/CD for infrastructure deployments',
        'Enterprise HA/DR and Zero Trust capstone scenarios'
      ],
      whatYouWillLearn: [
        'Core cloud concepts (IaaS, PaaS, SaaS) and Azure platform fundamentals',
        'Azure identity and Entra ID concepts including Conditional Access and PIM',
        'Azure governance using management groups, Azure Policy, locks, and tagging',
        'Compute and storage foundations including VM scale, availability sets, and secure storage',
        'Networking fundamentals and advanced networking patterns (LB, App Gateway, Firewall, VPN, ExpressRoute)',
        'Security posture management with Defender for Cloud and security recommendations',
        'Key Vault patterns for secrets, keys, certificates, and managed identities',
        'Monitoring and observability with Azure Monitor, Log Analytics, and alerts',
        'Backup and disaster recovery with Azure Backup and Site Recovery',
        'RBAC and Azure Policy implementation for secure, compliant infrastructure',
        'Infrastructure automation with ARM templates, Bicep, and Terraform, plus CI/CD integration',
        'Enterprise architecture with landing zones, high availability, zero trust, and performance/cost optimisation'
      ],
      prerequisites: [
        'Basic computer literacy and comfort using a web browser',
        'Any prior exposure to spreadsheets or tabular data (for example, Excel) is helpful but not required',
        'No prior Azure, cloud, or infrastructure experience is necessary',
        'Willingness to practise with hands-on Azure portal and CLI lab exercises throughout each module'
      ],
      whoCanJoin: [
        'Complete beginners building a structured Azure infrastructure foundation from scratch',
        'IT administrators transitioning on-premises infrastructure management skills to Azure',
        'Network engineers extending networking expertise into Azure VNets, ExpressRoute, and Azure Firewall',
        'Systems engineers moving from servers to cloud-native VM, container, and PaaS operations',
        'DevOps engineers adding infrastructure design and governance to CI/CD and automation workflows',
        'IT graduates and career changers preparing for Azure Administrator and Infrastructure Solutions roles'
      ],
      distinctness:
        'One end-to-end programme from zero to enterprise Azure infrastructure architect readiness. You build practical skills across administration, networking, security, governance, observability, automation, and HA/DR, then demonstrate them in an enterprise-aligned capstone mapped to AZ-104 and AZ-305 objectives.'
    },
    modules: [
      {
        title: '1. Introduction to Cloud Computing',
        topics: [
          'What cloud computing is',
          'IaaS vs PaaS vs SaaS and public vs private vs hybrid cloud',
          'Benefits of cloud adoption and shared responsibility model',
          'Total cost of ownership (TCO)'
        ]
      },
      {
        title: '2. Microsoft Azure Overview & Portal Navigation',
        topics: [
          'Azure global infrastructure (Regions, Availability Zones, Geographies)',
          'Azure Portal walkthrough and Azure CLI basics',
          'PowerShell and Azure Cloud Shell fundamentals',
          'Subscriptions and resource groups'
        ]
      },
      {
        title: '3. Azure Identity & Azure Active Directory (Entra ID)',
        topics: [
          'Azure AD fundamentals: users, groups, roles, and tenant setup',
          'Azure AD Connect and Multi-Factor Authentication (MFA)',
          'Conditional Access policies',
          'Privileged Identity Management (PIM) overview'
        ]
      },
      {
        title: '4. Azure Subscriptions, Governance & Resource Management',
        topics: [
          'Subscription models, management groups, and resource groups',
          'Azure Policy, resource locks, and tagging strategies',
          'Azure Blueprints and governance patterns',
          'The Azure Resource Manager (ARM) deployment model'
        ]
      },
      {
        title: '5. Azure Compute — Virtual Machines',
        topics: [
          'VM series and sizes and creating/configuring VMs',
          'Availability sets, VM scale sets, and VM extensions',
          'Azure Spot VMs and custom script extension patterns',
          'Boot diagnostics and VM backup basics'
        ]
      },
      {
        title: '6. Azure Storage Fundamentals',
        topics: [
          'Storage account types and access tiers (Hot, Cool, Archive)',
          'Blob storage types (Block, Append, Page) and Azure Files',
          'Queue and Table storage basics',
          'Replication options (LRS, ZRS, GRS) and storage security'
        ]
      },
      {
        title: '7. Azure Networking Fundamentals',
        topics: [
          'Virtual Networks (VNets), subnets, and IP addressing fundamentals',
          'Network Security Groups (NSGs) and Application Security Groups (ASGs)',
          'DNS in Azure and secure name resolution concepts',
          'VNet peering basics'
        ]
      },
      {
        title: '8. Azure Cost Management & Pricing',
        topics: [
          'Azure pricing calculator and TCO calculator basics',
          'Cost Management and Billing portal: budgets and cost alerts',
          'Reserved instances and Azure Hybrid Benefit',
          'Cost optimisation best practices'
        ]
      },
      {
        title: '9. Advanced Networking',
        topics: [
          'Azure Load Balancer, Application Gateway, and Azure Firewall',
          'VPN Gateway, ExpressRoute, and hybrid connectivity concepts',
          'Azure DNS, Traffic Manager, and Private DNS Zones',
          'Hub-and-Spoke network topology design'
        ]
      },
      {
        title: '10. Azure App Services & Serverless Computing',
        topics: [
          'App Service plans and Web Apps with deployment slots',
          'Scaling approaches for App Service and Web Apps',
          'Azure Functions with Durable Functions',
          'Logic Apps, API Management (APIM), and event-driven architectures'
        ]
      }
      ,
      {
        title: '11. Containers & Azure Kubernetes Service (AKS)',
        topics: [
          'Docker fundamentals and container concepts',
          'Azure Container Instances (ACI) and Azure Container Registry (ACR)',
          'AKS cluster deployment, node pools, and Helm charts',
          'Ingress controllers and container security fundamentals'
        ]
      },
      {
        title: '12. Azure Security Centre & Microsoft Defender for Cloud',
        topics: [
          'Security posture management: Secure Score concepts',
          'Just-in-Time VM access and adaptive application controls',
          'Microsoft Defender plans and security recommendations',
          'Threat protection policies and governance'
        ]
      },
      {
        title: '13. Azure Key Vault & Secrets Management',
        topics: [
          'Key Vault overview and secrets, keys, and certificates management',
          'Access policies vs RBAC for Key Vault',
          'Managed Identities (System-assigned and User-assigned)',
          'Integrating Key Vault into applications and pipelines'
        ]
      },
      {
        title: '14. Azure Monitor & Observability',
        topics: [
          'Azure Monitor architecture and Metrics concepts',
          'Diagnostic Logs and Log Analytics workspace integration',
          'KQL queries for operational analysis',
          'Application Insights, alerts/action groups, and workbooks/dashboards'
        ]
      },
      {
        title: '15. Azure Backup & Site Recovery',
        topics: [
          'Azure Backup service and Recovery Services Vault',
          'Backup policies for VM and file backup scenarios',
          'Azure Site Recovery (ASR) concepts for disaster recovery',
          'Replication policies and failover/failback procedures'
        ]
      },
      {
        title: '16. Role-Based Access Control (RBAC) & Azure Policy',
        topics: [
          'Built-in and custom roles and role assignments at different scopes',
          'Deny assignments and governance patterns',
          'Azure Policy definitions and initiatives',
          'Compliance assessment and remediation tasks'
        ]
      },
      {
        title: '17. Infrastructure as Code — ARM Templates & Bicep',
        topics: [
          'ARM template structure: parameters, variables, outputs',
          'Linked templates and deployment modes (Incremental vs Complete)',
          'Bicep syntax and reusable modules concepts',
          'Managing deployments with Azure CLI and PowerShell'
        ]
      },
      {
        title: '18. Azure Active Directory B2B, B2C & Hybrid Identity',
        topics: [
          'External identities and guest user access',
          'B2B tenant configuration and related concepts',
          'B2C configuration, SSPR, and Application Proxy fundamentals',
          'AD Connect Sync, Pass-through Authentication, and AD FS federation'
        ]
      },
      {
        title: '19. Designing High-Availability & Resilient Architectures',
        topics: [
          'Availability Zones vs Availability Sets and zone-redundant services',
          'Multi-region active-active and active-passive patterns',
          'SLA composition with RTO/RPO design and failover testing strategies',
          'Azure Traffic Manager failover routing concepts'
        ]
      },
      {
        title: '20. Azure Landing Zones & Enterprise-Scale Architecture',
        topics: [
          'Microsoft Cloud Adoption Framework (CAF) and landing zone principles',
          'Azure Landing Zone accelerator concepts',
          'Management group hierarchy design and platform vs application landing zones',
          'Governance guardrails at scale'
        ]
      },
      {
        title: '21. Advanced Networking Architecture',
        topics: [
          'Azure Virtual WAN and Azure Route Server',
          'BGP routing concepts and NVA (Network Virtual Appliance) design',
          'Microservices networking with service endpoints',
          'Private Link at scale and segmentation strategies'
        ]
      },
      {
        title: '22. Infrastructure Automation with Terraform',
        topics: [
          'Terraform on Azure: providers and state management with Azure Blob backend',
          'Modules, workspaces, and reusable infrastructure patterns',
          'Import of existing resources and migration workflows',
          'Building reusable enterprise deployment modules'
        ]
      },
      {
        title: '23. CI/CD for Infrastructure with Azure DevOps & GitHub Actions',
        topics: [
          'Azure DevOps pipelines for infrastructure deployment',
          'YAML pipeline authoring and environment-specific deployments',
          'GitHub Actions workflows and approval gates',
          'GitOps principles for IaC'
        ]
      },
      {
        title: '24. Advanced Security & Zero Trust Architecture',
        topics: [
          'Zero Trust principles applied to Azure',
          'Microsoft Sentinel (SIEM/SOAR) and security operations concepts',
          'Azure DDoS Protection and private endpoints at enterprise scale',
          'Network micro-segmentation and regulatory compliance frameworks'
        ]
      },
      {
        title: '25. Hybrid & Multi-Cloud Solutions',
        topics: [
          'Azure Arc for servers, Kubernetes, and data services',
          'Extending Azure governance to on-premises and multi-cloud resources',
          'Azure Stack Hub/Edge concepts',
          'ExpressRoute Global Reach for multi-site connectivity'
        ]
      },
      {
        title: '26. Performance, Scalability & Cost Optimisation at Scale',
        topics: [
          'Azure Advisor recommendations and autoscaling strategies',
          'Reserved capacity and savings plans concepts',
          'Azure Cost Management for enterprise and right-sizing analysis',
          'Well-Architected Framework: Performance Efficiency pillar concepts'
        ]
      },
      {
        title: '27. AZ-104 / AZ-305 Exam Preparation & Capstone Project',
        topics: [
          'Full-length AZ-104 and AZ-305 mock examinations',
          'Domain-wise review and exam strategy guidance',
          'End-to-end enterprise capstone covering landing zone, networking, security, monitoring, HA, and IaC automation'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Live 1-to-1 sessions with guided Azure portal and CLI labs.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live online batches with hands-on Azure portal and CLI exercises.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized enterprise training for infrastructure and cloud teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'AZ-104 and AZ-305 Aligned', icon: '✓', description: 'A single curriculum mapped to both certifications.' },
      { title: 'Guided Azure Labs', icon: '🧪', description: 'Practical deployments in a live Azure environment.' },
      { title: 'Zero Trust and Governance', icon: '🛡️', description: 'Security posture, landing zones, and policy guardrails at scale.' },
      { title: 'IaC with Terraform and Bicep', icon: '🔧', description: 'Automate infrastructure deployments and schema workflows with CI/CD.' },
      { title: 'Enterprise HA/DR Design', icon: '🏗️', description: 'Availability, failover, and resilience patterns for mission-critical workloads.' },
      { title: 'Capstone Enterprise Scenario', icon: '🚀', description: 'An end-to-end capstone aligned to real infrastructure architecture expectations.' }
    ],
    faqs: [
      {
        question: 'Can I join with no prior cloud or IT experience?',
        answer: 'Yes. The programme begins with cloud computing fundamentals and Azure basics from absolute scratch. Module 01 assumes no prior knowledge and teaches everything progressively from the ground up.'
      },
      {
        question: 'How is the curriculum structured across the three levels?',
        answer: 'Modules 01-08 cover cloud concepts, Azure fundamentals, core compute, storage, networking, and cost management. Modules 09-18 cover Azure administration, advanced networking, containers, security, IaC, and hybrid identity. Modules 19-27 cover enterprise architecture, landing zones, Zero Trust, Terraform, CI/CD, multi-cloud with Azure Arc, and AZ-104 / AZ-305 exam preparation with a capstone project.'
      },
      {
        question: 'Does this programme prepare me for both AZ-104 and AZ-305?',
        answer: 'Yes. The programme is aligned to both certifications. AZ-104 is covered through administration and operational skills built across Beginner and Intermediate modules, while AZ-305 is covered through Advanced modules focused on architecture, design, and governance.'
      },
      {
        question: 'Are the exam fees included in the course fee?',
        answer: 'The training fee covers instruction, lab environments, and exam preparation materials. The official Microsoft AZ-104 and AZ-305 examination fees are paid separately through the Microsoft Certification portal at the time of scheduling.'
      },
      {
        question: 'What roles can I target after completing this programme?',
        answer: 'Graduates are well-positioned for roles such as Azure Cloud Engineer, Azure Administrator, Cloud Infrastructure Architect, Solutions Architect, Platform Engineer, and Cloud Security Engineer.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. Fully customised corporate training programmes are available for infrastructure and cloud teams, tailored to your organisation\'s existing environment, team skill levels, and migration objectives. Please contact us for a dedicated proposal and team pricing.'
      },
    ],
    duration: '35-50 Hours',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'AZ-104 / AZ-305'
  },

  'microsoft-azure-administrator-training': {
    slug: 'microsoft-azure-administrator-training',
    title: 'Microsoft Azure Administrator Training',
    category: 'Cloud Computing',
    heroDescription: 'If you are an IT professional and want to explore various aspects of Azure cloud management, Microsoft Azure Administrator Training is the right career choice. Learn to manage, secure, administer, and configure key services on the Microsoft Azure platform and strengthen your cloud career with practical skills.',
    heroBannerImage: '/course-banners/azure-administrator.png',
    callToAction: 'Promoting your in-depth understanding of the Azure administrative lifecycle',
    highlights: [
      'Integrated learning delivery model',
      '20 Hour Live Virtual Training',
      'Engaging and inspiring training classes',
      'Simulation exams and unique practice exam questions',
      'Weekend and weekday class availability'
    ],
    description: {
      whyChooseTitle: 'Why choose Microsoft Azure Administrator Training from InsureTech Skills?',
      overview: 'This training accelerates your growth on the Azure platform with a collaborative and practical learning model. You build expertise in Azure infrastructure and services, resource administration, networking, configuration, security and compliance, data management, application support, load balancing, multi-factor authentication, Azure Active Directory, storage solutions, and advanced virtual networking.',
      whyChoose: 'Our unique program design is built for real-world Azure administration outcomes. With live interactive classes, exam-oriented preparation, and flexible learning options, you gain confidence to handle end-to-end Azure administration tasks efficiently.',
      keyFeatures: [
        'Integrated learning delivery model',
        '20 Hour Live Virtual Training',
        'Engaging and practical instructor-led classes',
        'Simulation exams and unique practice questions',
        'Weekend/weekday schedule flexibility',
        'Post-training mentorship and support'
      ],
      whatYouWillLearn: [
        'Fundamentals of Azure administration and cloud computing',
        'Azure subscriptions, resources, and governance management',
        'Data storage management and implementation strategies',
        'Deploying and managing Azure compute resources',
        'Virtual networking technology, configuration, and management',
        'Azure identity management and access control',
        'Monitoring and maintaining Azure resources',
        'Applying network and storage security and controlling traffic flow'
      ],
      prerequisites: [
        'Familiarity with cloud computing concepts and applications',
        'Understanding of networking, configuration, storage, and virtualization technologies',
        'Experience with the Microsoft Azure cloud ecosystem is preferred but not required'
      ],
      whoCanJoin: [
        'Software Architects',
        'Network Administrators',
        'System Administrators',
        'Cloud Engineers',
        'IT professionals responsible for managing the Azure platform',
        'Cloud Architects',
        'DevOps Engineers',
        'Anyone interested in pursuing a career in the Azure environment'
      ],
      distinctness: 'The program focuses on the full Azure administrative lifecycle with practical exposure to governance, identity, networking, compute, monitoring, and security. Learners benefit from live virtual delivery, simulation exams, mentorship, and flexible schedules designed for working professionals.'
    },
    modules: [
      {
        title: '1. Fundamental Knowledge of Azure Administration and Cloud Computing',
        topics: [
          'Cloud and Azure administration fundamentals',
          'Core Azure services and administration lifecycle',
          'Administrative best practices'
        ]
      },
      {
        title: '2. Azure Subscriptions, Resources, and Governance',
        topics: [
          'Subscriptions and resource groups',
          'Governance, policy, and role management',
          'Resource organization and control'
        ]
      },
      {
        title: '3. Data Storage Management and Implementation',
        topics: [
          'Azure storage services and selection',
          'Storage configuration and management',
          'Data protection and availability basics'
        ]
      },
      {
        title: '4. Deploying and Managing Azure Compute Resources',
        topics: [
          'Virtual machines and compute options',
          'Provisioning, scaling, and administration',
          'Operational compute management'
        ]
      },
      {
        title: '5. Virtual Networking Technology, Configuration, and Management',
        topics: [
          'Virtual networks, subnets, and routing',
          'Connectivity and traffic management',
          'Network configuration and operations'
        ]
      },
      {
        title: '6. Azure Identity Management and Access Control',
        topics: [
          'Azure AD fundamentals',
          'Authentication, authorization, and MFA',
          'Role-based access control implementation'
        ]
      },
      {
        title: '7. Monitoring and Maintaining Azure Resources',
        topics: [
          'Monitoring, logging, and alerting',
          'Resource health and maintenance practices',
          'Operational insights and issue response'
        ]
      },
      {
        title: '8. Network and Storage Security with Traffic Control',
        topics: [
          'Securing network and storage components',
          'Traffic flow control and filtering',
          'Security and compliance operational practices'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated hour with instant doubt clarification and guaranteed sessions.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexible, convenient, and time-saving live online classes with cost-effective learning.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams with role-focused outcomes.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Learn from trainers with practical Azure administration expertise.' },
      { title: 'Post Training Support', icon: '📈', description: 'Get support and guidance beyond the classroom.' },
      { title: 'Customized Training', icon: '🏆', description: 'Training plan aligned to your learning goals and responsibilities.' },
      { title: 'Flexible Schedule', icon: '📅', description: 'Choose weekday or weekend sessions as per your availability.' },
      { title: 'Access to Recorded Sessions', icon: '📹', description: 'Review class content anytime for better retention.' }
    ],
    faqs: [
      {
        question: 'Does any IT professional opt for the Azure Administrator Training program?',
        answer: 'Yes, IT professionals across administration, networking, support, and cloud operations can join this program to build strong Azure administration capabilities.'
      },
      {
        question: 'Why should I opt for the Azure Administrator Training program?',
        answer: 'The program helps you master real-world Azure management tasks including administration, security, networking, identity, and monitoring. It is designed to make you job-ready for Azure administration roles.'
      },
      {
        question: 'What are the prerequisites of your training?',
        answer: 'Familiarity with cloud concepts, networking, configuration, storage, and virtualization is recommended. Prior Azure experience is preferred but not mandatory.'
      },
      {
        question: 'Do I get 24X7 online support?',
        answer: 'Yes, learner support is available during the training journey, along with mentorship and doubt-clearing guidance.'
      },
      {
        question: 'Do you offer demo classes?',
        answer: 'Yes, free demo classes are available.'
      },
      {
        question: 'Is post-training mentorship available?',
        answer: 'Yes, post-training mentorship is part of the learning support model.'
      },
      {
        question: 'Do I access recorded sessions?',
        answer: 'Yes, recorded sessions are provided for revision and self-paced reinforcement.'
      },
      {
        question: 'Which exam do I sit for to obtain this certification?',
        answer: 'You should clear the AZ-104 exam to obtain Microsoft Azure Administrator certification.'
      },
      {
        question: 'What is the duration of your training program?',
        answer: 'The course duration is 20 hours.'
      },
      {
        question: 'Do I get a refund option?',
        answer: 'Refund eligibility depends on policy terms. Please contact the training support team for the latest refund guidelines.'
      }
    ],
    duration: '20 Hours',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'Azure Administrator'
  },

  'multi-cloud-devops-generative-ai': {
    slug: 'multi-cloud-devops-generative-ai',
    title: 'Multi Cloud Devops with Generative AI | AWS•Azure•GCP',
    category: 'DevOps & Cloud',
    heroDescription: 'This advanced training program provides learners with hands-on expertise in multi-cloud DevOps engineering combined with Generative AI automation. It covers infrastructure automation, CI/CD pipelines, Kubernetes orchestration, AI integration, and modern MLOps workflows—empowering engineers to design, deploy, and manage intelligent, automated, multi-cloud environments.',
    callToAction: 'Launch Your Career in Multi-Cloud DevOps',
    highlights: [
      '40 Hours of Live Online Sessions',
      'Learn DevOps with Gen AI',
      'Hands-On Project Based Learning',
      'Access to Recorded Sessions',
      'Industry Recognised Certification',
      'Lifetime Access',
      'Live Interactive Learning',
      'Expert Career Services to Help You Land a Job',
      '24x7 Support'
    ],
    description: {
      overview: 'DevOps Training Program equips learners to Master AI-integrated DevOps across the software delivery lifecycle with hands-on skills in building intelligent, automated, and secure pipelines. This DevOps course covers Git, Jenkins, Terraform, Ansible, Docker, Kubernetes, and monitoring, while integrating AI for code generation, testing, and analytics. Gain real-world experience by building scalable, AI powered CI/CD pipelines for future-ready DevOps.',
      whyChoose: 'The Multi Cloud Devops with Generative AI | AWS•Azure•GCP program is designed for IT professionals, developers, and cloud engineers who want to master the next generation of DevOps workflows. You\'ll learn how to build and manage applications across multiple cloud environments, use AI-driven tools to accelerate deployment, monitoring, and optimization, integrate Generative AI models into DevOps pipelines for intelligent automation, and implement CI/CD, IaC (Infrastructure as Code), and AIOps across platforms.',
      whyChooseTitle: 'Why choose Multi Cloud Devops with Generative AI | AWS•Azure•GCP from InsureTech Skills?',
      keyFeatures: [
        '40 Hours of Live Online Sessions',
        'Learn DevOps with Gen AI',
        'Hands-On Project Based Learning',
        'Access to Recorded Sessions',
        'Industry Recognised Certification',
        'Lifetime Access',
        'Live Interactive Learning',
        'Expert Career Services to Help You Land a Job',
        '24x7 Support'
      ],
      whatYouWillLearn: [
        'Multi-Cloud Architecture — Understand AWS, Azure, and GCP; design, deploy, and manage scalable cloud solutions across multiple clouds',
        'DevOps Pipelines (CI/CD) — Build end-to-end CI/CD pipelines using Jenkins, GitHub Actions, and GitLab; improve deployment speed, reliability, and automation',
        'Containerization & Orchestration — Deploy and manage applications with Docker and Kubernetes; apply best practices for scaling, monitoring, and reliability',
        'Infrastructure Automation (IaC) — Use Terraform and Ansible for automated provisioning and configuration; manage infrastructure consistently across multiple clouds',
        'AI Integration in DevOps — Use AI tools like ChatGPT, LangChain, and OpenAI APIs to automate coding, testing, and deployment tasks',
        'AIOps & Smart Monitoring — Apply AI-driven insights for predictive maintenance, anomaly detection, and system optimization; analyze logs and performance metrics using AIOps',
        'Collaboration & Productivity with AI — Use intelligent assistants to streamline communication and automate workflows; improve developer and operations team efficiency',
        'Multi-Cloud Security Fundamentals — Understand core security principles in multi-cloud environments',
        'AI-Powered DevOps Bots — Build conversational bots for monitoring pipelines, tracking performance, and auto-responding to DevOps alerts',
        'Identity & Access Management (IAM) — Manage user roles and permissions across AWS, Azure & GCP',
        'Cloud Cost Optimization with AI — Use ML and analytics to forecast cloud usage and reduce resource wastage; manage multi-cloud budgets more effectively',
        'Data Protection & Encryption — Apply encryption for data at rest and in transit',
        'Cloud-Native Security Tools — Use cloud-native tools to safeguard sensitive information',
        'Monitoring & Incident Response — Work with Google SCC, Azure Defender, and AWS Security Hub; use monitoring and logging tools to detect threats; apply incident-response methods to resolve cloud issues',
        'Secure Multi-Cloud Architecture — Design secure and scalable multi-cloud architectures; follow best practices for compliant cloud deployments'
      ],
      prerequisites: [
        'Basic familiarity with at least one cloud platform (AWS, Azure, or Google Cloud)',
        'Understanding of core IT concepts like servers, storage, and networking',
        'Comfort using Linux commands and navigating the command line',
        'Basic knowledge of scripting or programming languages (Python, Bash, or Shell)',
        'Awareness of the software development lifecycle (SDLC) and version control using Git/GitHub',
        'Interest in automation, problem-solving, and integrating intelligent systems into workflows'
      ],
      whoCanJoin: [
        'Cloud Engineers & Administrators',
        'DevOps Professionals',
        'Software Developers & Programmers',
        'System Administrators & IT Operations Teams',
        'AI & Machine Learning Enthusiasts',
        'Students & Fresh Graduates (Tech Background)',
        'Technology Consultants & Solution Architects'
      ],
      distinctness: 'Open to anyone eager to learn Multi Cloud Devops with Generative AI | AWS•Azure•GCP. Access to a comprehensive training library and practical resources. Focuses on real-world skills, not just certification. Builds expertise in designing and scaling cloud solutions across 70+ AWS services.'
    },
    modules: [
      {
        title: '1. Foundations of Multi-Cloud DevOps',
        topics: [
          'Understanding DevOps culture, lifecycle, and benefits',
          'Cloud computing overview — AWS, Azure, and GCP',
          'Multi-cloud strategy, interoperability, and governance',
          'Setting up accounts and CLI access for AWS, Azure, and GCP',
          'Hands-on: Configure and connect multi-cloud environments'
        ]
      },
      {
        title: '2. Version Control and Collaboration',
        topics: [
          'Git fundamentals: branching, merging, and versioning',
          'GitHub, GitLab, and Bitbucket integration',
          'CI/CD overview and source control best practices',
          'Hands-on: Create a multi-cloud project repository with GitHub Actions'
        ]
      },
      {
        title: '3. Continuous Integration and Delivery (CI/CD)',
        topics: [
          'Designing CI/CD pipelines across AWS, Azure, and GCP',
          'Jenkins, GitHub Actions, and Azure DevOps setup',
          'Automating build, test, and deploy processes',
          'Hands-on: Deploy a sample web app using Jenkins on AWS and Azure'
        ]
      },
      {
        title: '4. Containerization and Kubernetes',
        topics: [
          'Docker deep dive — images, containers, networks',
          'Kubernetes architecture — Pods, Deployments, Services, Ingress',
          'Multi-cloud orchestration with AKS (Azure), EKS (AWS), and GKE (Google)',
          'Hands-on: Deploy a microservice across AKS and EKS clusters'
        ]
      },
      {
        title: '5. Infrastructure as Code (IaC)',
        topics: [
          'Terraform fundamentals for AWS, Azure, and GCP',
          'Creating reusable Terraform modules',
          'Managing Terraform state and environments',
          'Hands-on: Provision infrastructure simultaneously in AWS and Azure'
        ]
      },
      {
        title: '6. Configuration Management and Automation',
        topics: [
          'Ansible fundamentals and YAML-based playbooks',
          'Integrating Ansible with Terraform for automation',
          'Cloud automation using Python & Boto3',
          'Hands-on: Deploy and configure servers automatically using Ansible Playbooks'
        ]
      },
      {
        title: '7. Monitoring, Logging, and DevSecOps',
        topics: [
          'Monitoring tools: Prometheus, Grafana, CloudWatch, Azure Monitor',
          'Security scanning tools: Snyk, Trivy, Aqua Security',
          'Building secure CI/CD pipelines with automated checks',
          'Hands-on: Create a DevSecOps pipeline with vulnerability scanning and alerts'
        ]
      },
      {
        title: '8. Generative AI in DevOps',
        topics: [
          'Introduction to AI/ML and Generative AI concepts',
          'Using GitHub Copilot and ChatGPT for DevOps scripting & documentation',
          'Understanding LLMs (OpenAI, Azure OpenAI, Gemini)',
          'AI frameworks: LangChain, LlamaIndex, Hugging Face',
          'Hands-on: Build an AI agent that monitors deployments and suggests fixes',
          'Hands-on: Use AI to generate Jenkins pipelines and debug errors',
          'Hands-on: Implement AI-driven incident management using Azure OpenAI'
        ]
      },
      {
        title: '9. MLOps and AIOps for Cloud Operations',
        topics: [
          'Overview of AIOps and MLOps concepts',
          'AI-assisted performance optimization',
          'Predictive failure detection using AI on logs',
          'Building AI assistants for cloud operations',
          'Hands-on: Use AI models to predict server or pipeline failures'
        ]
      },
      {
        title: '10. Multi-Cloud Deployment Project',
        topics: [
          'End-to-end multi-cloud CI/CD + IaC + Kubernetes deployment',
          'Implementing real-time monitoring and alerting',
          'AI-based change management and release automation',
          'Hands-on Project: Deploy a full-stack application with AI-driven automation across AWS, Azure, and GCP'
        ]
      },
      {
        title: '11. Capstone Project & Evaluation',
        topics: [
          'Peer review and project defense',
          'Final Capstone: AI-assisted DevOps automation for multi-cloud infrastructure',
          'Resume building and LinkedIn optimization for DevOps & Cloud roles',
          'Future of AI in DevOps — AIOps, FinOps, and AI-powered SRE'
        ]
      }
    ],
    learningModes: [
      {
        title: '1-TO-1 TRAINING',
        icon: '👥',
        description: 'Customized schedule, learn at your dedicated pace, and time-saving more.',
        buttonText: 'GET STARTED'
      },
      {
        title: 'ONLINE TRAINING',
        icon: '💻',
        description: 'Flexibility, convenience, and effective learning with instant doubt clarification and guaranteed sessions.',
        buttonText: 'ENROLL NOW'
      },
      {
        title: 'CORPORATE TRAINING',
        icon: '🏢',
        description: 'Learn anytime, anywhere, across the globe with customized corporate training. Have trainer and progress at your own pace.',
        buttonText: 'CONTACT US'
      }
    ],
    benefits: [
      {
        title: 'High Demand',
        icon: '✓',
        description: 'High demand for multi-cloud DevOps and AI-enabled professionals'
      },
      {
        title: 'Strong Job Growth',
        icon: '📈',
        description: 'Increased adoption of AWS, Azure, and GCP drives strong job growth'
      },
      {
        title: 'Competitive Salaries',
        icon: '💰',
        description: 'Competitive salaries due to combined DevOps, Kubernetes, and AI skills'
      },
      {
        title: 'Hands-On Expertise',
        icon: '🏆',
        description: 'Gain expertise in multi-cloud DevOps environments (AWS, Azure, GCP)'
      },
      {
        title: 'Industry Certification',
        icon: '📜',
        description: 'Achieving certifications positions you as a sought-after cloud expert'
      }
    ],
    faqs: [
      {
        question: 'Why should I opt for the Multi Cloud Devops with Generative AI | AWS•Azure•GCP course?',
        answer: 'Multi Cloud Devops with Generative AI | AWS•Azure•GCP provides hands-on expertise in multi-cloud DevOps engineering combined with Generative AI automation. With high demand for multi-cloud and AI-enabled professionals, this certification significantly enhances your career prospects and opens doors to roles in DevOps, cloud engineering, and AIOps.'
      },
      {
        question: 'How does this certification course help me?',
        answer: 'This program validates your ability to design, deploy, and manage intelligent, automated, multi-cloud environments. You will gain practical skills in CI/CD, Kubernetes, Terraform, Ansible, and AI integration—making you job-ready for modern DevOps and cloud roles.'
      },
      {
        question: 'Does this certification add value to my career?',
        answer: 'Yes. Multi-Cloud DevOps and AI skills are highly recognized. You can expect stronger job growth, competitive salaries, and broader career paths across DevOps, cloud, and AI roles with global career mobility.'
      },
      {
        question: 'Which topics are covered by your course?',
        answer: 'The course covers Foundations of Multi-Cloud DevOps, Version Control, CI/CD, Containerization & Kubernetes, IaC with Terraform, Configuration Management with Ansible, Monitoring & DevSecOps, Generative AI in DevOps, MLOps & AIOps, Multi-Cloud Deployment Project, and a Capstone Project.'
      },
      {
        question: 'Who is eligible for this course?',
        answer: 'Cloud Engineers, DevOps Professionals, Software Developers, System Administrators, IT Operations Teams, AI/ML Enthusiasts, Students & Fresh Graduates (Tech Background), and Technology Consultants. Basic familiarity with one cloud platform and scripting (Python/Bash) is recommended.'
      },
      {
        question: 'What types of jobs can I get after this course?',
        answer: 'You can pursue roles such as DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), Platform Engineer, AIOps Engineer, and Cloud Architect across organizations using AWS, Azure, and GCP.'
      },
      {
        question: 'Do you have any demo session options?',
        answer: 'Yes, we offer free demo sessions. You can register through the form on this page or contact support@insuretechskills.tech | +91 7902091373.'
      },
      {
        question: 'Do freshers have any job scope?',
        answer: 'Yes. Freshers with Multi-Cloud DevOps and Gen AI skills have good job opportunities. We provide career services, resume building, and LinkedIn optimization to help you land a job.'
      },
      {
        question: 'Do I get your support during the course?',
        answer: 'Yes. You get 24x7 support, access to recorded sessions, live interactive learning, and expert career services to help you land a job.'
      }
    ],
    duration: '40 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Multi-Cloud DevOps',
    heroBannerImage: '/course-banners/multi-cloud-devops.png',
    toolsBannerImage: '/images/courses/tools-technologies-multi-cloud-devops.png'
  },

  'multi-cloud-security-aws-azure-google': {
    slug: 'multi-cloud-security-aws-azure-google',
    title: 'Multi-Cloud Security Training | AWS, Azure & GCP',
    category: 'IT Security',
    heroDescription: 'The Multi-Cloud Security Training is designed to equip professionals with the knowledge and skills required to secure diverse cloud environments. This comprehensive program covers the security best practices, tools, and strategies across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).',
    heroBannerImage: '/course-banners/multi-cloud-security.png',
    callToAction: 'Request Callback',
    highlights: [
      'Duration: 40 Hrs',
      'Certified Trainers',
      'Flexible Schedule',
      'Real-time projects',
      'Job Assistance',
      'Self-Paced Learning (New)'
    ],
    description: {
      whyChooseTitle: 'Why choose Multi-Cloud Security Training from InsureTech Skills?',
      overview: 'The Multi-Cloud Security Training is designed to equip professionals with the knowledge and skills required to secure diverse cloud environments. This comprehensive program covers security best practices, tools, and strategies across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). From identity and access management to network security, data protection, compliance, incident response, and DevSecOps, you will learn how to build and defend secure cloud infrastructures across all three major platforms.',
      whyChoose: 'Get certified and boost your career in Multi-Cloud Security. Our program combines real-world labs, certified trainers, flexible schedules, real-time projects, job assistance, and self-paced learning options. Whether you are an IT professional, security analyst, cloud engineer, developer, or architect, this training unlocks opportunities in one of the fastest-growing fields in tech.',
      keyFeatures: [
        'Duration: 40 Hrs',
        'Certified Trainers',
        'Flexible Schedule',
        'Real-time projects',
        'Job Assistance',
        'Self-Paced Learning (New)'
      ],
      whatYouWillLearn: [
        'Introduction to Multi-Cloud Security — Core security principles across AWS, Azure, and GCP',
        'AWS Security — Security best practices, tools, and strategies on Amazon Web Services',
        'Azure Security — Securing Microsoft Azure environments and services',
        'GCP Security — Google Cloud Platform security controls and best practices',
        'Identity and Access Management — Manage user roles and permissions across all three clouds',
        'Network Security — Securing cloud networks, VPCs, firewalls, and connectivity',
        'Data Security — Encryption, data protection, and safeguarding sensitive information',
        'Compliance and Governance — Align with regulatory standards and cloud governance',
        'Incident Response — Detecting, responding to, and recovering from security incidents',
        'DevSecOps in Multi-Cloud — Integrating security into CI/CD and pipeline security',
        'Case Studies and Best Practices — Real-world scenarios and industry best practices',
        'Certification Preparation — Prepare for AWS, Azure, and GCP security certifications'
      ],
      prerequisites: [
        'Basic understanding of cloud computing',
        'Knowledge of IT infrastructure',
        'Familiarity with networking and security concepts',
        'Programming knowledge (optional but beneficial)'
      ],
      whoCanJoin: [
        'IT Professionals',
        'Security Analysts',
        'Cloud Engineers',
        'Developers',
        'Architects',
        'Those seeking Multi-Cloud Security certification'
      ],
      distinctness: 'Our Multi-Cloud Security Training covers AWS, Azure, and GCP with 40 hours of structured learning, certified trainers, real-time projects, job assistance, and self-paced options. Get certified and boost your career in Multi-Cloud Security.'
    },
    modules: [
      { title: 'Introduction to Multi-Cloud Security', topics: ['Overview of multi-cloud security', 'Security shared responsibility across AWS, Azure & GCP', 'Security best practices and frameworks'] },
      { title: 'AWS Security', topics: ['AWS security services and tools', 'IAM, KMS, and security best practices on AWS', 'AWS Security Hub and GuardDuty'] },
      { title: 'Azure Security', topics: ['Azure security center and Defender', 'Azure IAM and identity protection', 'Azure security best practices'] },
      { title: 'GCP Security', topics: ['Google Cloud security foundations', 'Cloud IAM and Security Command Center', 'GCP security best practices'] },
      { title: 'Identity and Access Management', topics: ['IAM across AWS, Azure, and GCP', 'Roles, policies, and least privilege', 'Multi-factor authentication and identity federation'] },
      { title: 'Network Security', topics: ['VPC and network segmentation', 'Firewalls, VPNs, and private connectivity', 'Network security across multi-cloud'] },
      { title: 'Data Security', topics: ['Encryption at rest and in transit', 'Data classification and protection', 'Key management and secrets'] },
      { title: 'Compliance and Governance', topics: ['Regulatory compliance (GDPR, HIPAA, etc.)', 'Cloud governance and policy', 'Audit and compliance reporting'] },
      { title: 'Incident Response', topics: ['Detection and monitoring', 'Incident response procedures', 'Recovery and post-incident review'] },
      { title: 'DevSecOps in Multi-Cloud', topics: ['Security in CI/CD pipelines', 'Automated security scanning', 'Secure deployment practices'] },
      { title: 'Case Studies and Best Practices', topics: ['Real-world multi-cloud security scenarios', 'Industry best practices', 'Designing secure multi-cloud architectures'] },
      { title: 'Certification Preparation', topics: ['AWS Security Specialty', 'Microsoft Azure AZ-500', 'Google Professional Cloud Security Engineer', 'Exam strategies and practice'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace, and time-saving more.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning with instant doubt clarification and guaranteed sessions.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Learn anytime, anywhere, across the globe with customized corporate training. Have trainer and progress at your own pace.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Enhanced Career Prospects', icon: '✓', description: 'Multi-cloud security certification opens doors to high-demand roles' },
      { title: 'High Demand in the Industry', icon: '📈', description: 'Organizations need experts to secure AWS, Azure, and GCP environments' },
      { title: 'Improved Security Posture', icon: '🏆', description: 'Learn to design and implement robust security across multiple clouds' },
      { title: 'Comprehensive Skill Set', icon: '📜', description: 'Master security best practices, tools, and strategies across all three major clouds' },
      { title: 'Validation of Expertise', icon: '✓', description: 'Get certified and boost your career in Multi-Cloud Security' }
    ],
    faqs: [
      { question: 'Why should I opt for the Multi-Cloud Security Training | AWS, Azure & GCP course?', answer: 'Multi-Cloud Security Training equips you with the knowledge and skills to secure diverse cloud environments across AWS, Azure, and GCP. With 40 hours of comprehensive coverage, certified trainers, real-time projects, and job assistance, this program opens doors to roles as Cloud Security Engineer, Security Architect, or Consultant. You will learn security best practices, tools, and strategies used in the industry.' },
      { question: 'How does this certification course help me?', answer: 'This program validates your ability to secure multi-cloud environments. You will gain practical skills in IAM, network security, data protection, compliance, incident response, and DevSecOps across AWS, Azure, and GCP—making you job-ready for cloud security roles. Get certified and boost your career in Multi-Cloud Security.' },
      { question: 'Does this certification add value to my career?', answer: 'Yes. Multi-cloud security professionals are in high demand. You can pursue roles such as Cloud Security Engineer, Security Architect, Security Consultant, and related positions in organizations using AWS, Azure, and GCP. The certification validates your expertise and improves career prospects.' },
      { question: 'Which topics are covered by your course?', answer: 'The course covers Introduction to Multi-Cloud Security, AWS Security, Azure Security, GCP Security, Identity and Access Management, Network Security, Data Security, Compliance and Governance, Incident Response, DevSecOps in Multi-Cloud, Case Studies and Best Practices, and Certification Preparation for AWS, Azure, and GCP security certifications.' },
      { question: 'Who is eligible for this course?', answer: 'IT professionals, security analysts, cloud engineers, developers, architects, and anyone seeking Multi-Cloud Security certification. Prerequisites include basic understanding of cloud computing, knowledge of IT infrastructure, familiarity with networking and security concepts, and programming knowledge is optional but beneficial.' },
      { question: 'What types of jobs can I get after this course?', answer: 'You can pursue roles such as Cloud Security Engineer, Security Architect, Security Consultant, Cloud Security Specialist, and security-focused positions in organizations using AWS, Azure, and Google Cloud Platform.' },
      { question: 'Do you have any demo session options?', answer: 'Yes, we offer free demo sessions. You can register through the form on this page or contact support@insuretechskills.tech | +91 7902091373.' },
      { question: 'Do freshers have any job scope?', answer: 'Yes. Freshers with Multi-Cloud Security certification have good job opportunities as demand for cloud security professionals continues to grow. We provide job assistance and career support to help you land a role.' },
      { question: 'Do I get your support during the course?', answer: 'Yes. You get 40 hours of training, access to certified trainers, flexible schedule, real-time projects, job assistance, and self-paced learning options. We are committed to your success.' }
    ],
    duration: '40 Hrs',
    mode: 'Online',
    icon: 'security',
    heroSubtitle: 'AWS, Azure & GCP'
  },

  'cyber-security-analyst-training': {
    slug: 'cyber-security-analyst-training',
    title: 'AI Powered Cybersecurity Analyst Training',
    category: 'IT Security',
    heroDescription: 'Hands-on lab experience and real-world projects. 30 Hour Live Virtual Training with industry-experienced instructors. Classes available on weekends and weekdays. Designed for IT Professionals, Security Architects, Network Administrators, Ethical Hackers, System Administrators, Vulnerability Analysts, Threat Intelligence Analysts, and Cybersecurity Consultants. Master key concepts in Risk Management, Incident Response, Vulnerability Management, and Cyber Threat Intelligence.',
    heroBannerImage: '/course-banners/cyber-security-analyst.png',
    callToAction: 'Launch your career as a Cybersecurity Analyst',
    highlights: [
      'Hands-on lab experience and real-world projects',
      '30 Hour Live Virtual Training',
      'Industry-experienced instructors',
      'Classes available on weekends and weekdays'
    ],
    description: {
      whyChooseTitle: 'Why choose Cybersecurity Analyst Training | Powered by AI from InsureTech Skills?',
      overview: 'Our Cybersecurity Analyst Training | Powered by AI is designed to equip you with the skills to identify threats, manage vulnerabilities, secure networks, and protect endpoints. You will learn networking concepts, threat and vulnerability management, network security and defensive techniques, cloud concepts and security, endpoint security, and risk management and security governance. The program uses industry tools including Nessus, Splunk, Wireshark, Nikto, CMSeek, OWASP ZAP, Burp Suite, Windows Firewall, and Windows Defender.',
      whyChoose: 'Gain hands-on experience with real-world projects and lab exercises. Learn from industry-experienced instructors with flexible weekend and weekday classes. The curriculum aligns with the role of a Cybersecurity Analyst and covers risk management, incident response, vulnerability management, and cyber threat intelligence.',
      keyFeatures: [
        'Hands-on lab experience and real-world projects',
        '30 Hour Live Virtual Training',
        'Industry-experienced instructors',
        'Classes available on weekends and weekdays'
      ],
      whatYouWillLearn: [
        'Role of a Cybersecurity Analyst and importance of cybersecurity in organizations',
        'Key concepts: Risk Management, Incident Response, Vulnerability Management, Cyber Threat Intelligence',
        'Networking: TCP/IP, OSI model, IP addressing (IPv4 & IPv6), client-server architecture',
        'Threat & Vulnerability Management: scanning, risk assessment, exploitation and mitigation, frameworks',
        'Network Security & Defensive Techniques: segmentation, firewall, IDS/IPS, monitoring, defense against lateral movement',
        'Cloud Concepts & Security: IaaS, PaaS, SaaS, cloud security risks, compliance and governance',
        'Endpoint Security: antivirus, EDR, patch management, BYOD, MDM',
        'Risk Management & Security Governance: NIST, PCI-DSS, HIPAA, GDPR, communicating security strategies'
      ],
      prerequisites: [
        'Familiarity with operating systems (e.g. Windows, Linux)',
        'Basic knowledge of networking and security concepts',
        'A minimum of 3–4 years of experience in the Information Security domain'
      ],
      whoCanJoin: [
        'IT Professionals',
        'IT Administrators',
        'Security Architects',
        'Network Administrators',
        'Network Analysts',
        'IT Architects',
        'IT Security Specialists',
        'Ethical Hackers',
        'System Administrators',
        'Vulnerability Analysts',
        'Threat Intelligence Analysts',
        'Cybersecurity Consultants',
        'Network Architects',
        'Cybersecurity Engineers',
        'Cloud Administrators',
        'Information Security Engineers',
        'Aspiring Cybersecurity Professionals',
        'Professionals preparing for the CompTIA CYSA+ (CSA-002) certification exam'
      ],
      distinctness: 'Our CompTIA CYSA+ training focuses on hands-on labs and real-world projects using industry tools: Nessus, Splunk, Wireshark, Nikto, CMSeek, OWASP ZAP, Burp Suite, Windows Firewall, and Windows Defender. Classes available on weekends and weekdays with industry-experienced instructors. The curriculum aligns with the role of a Cybersecurity Analyst and covers security frameworks, risk evaluation, penetration testing, and forensic tools for data analysis.'
    },
    modules: [
      {
        title: '1. Introduction to Cybersecurity',
        topics: [
          'Role of a Cybersecurity Analyst',
          'Importance of Cybersecurity in organizations',
          'Key concepts: Risk Management, Incident Response, Vulnerability Management',
          'Cyber Threat Intelligence'
        ]
      },
      {
        title: '2. Cyber Threats and Attack Vectors',
        topics: [
          'Identifying and evaluating threats',
          'Attack vectors and threat landscape',
          'Emerging threats and mitigation'
        ]
      },
      {
        title: '3. Risk Management and Incident Response',
        topics: [
          'Risk assessment and mitigation strategies',
          'Incident response planning and execution',
          'Cybersecurity frameworks'
        ]
      },
      {
        title: '4. Network Security',
        topics: [
          'Network segmentation & firewall configuration',
          'IDS/IPS implementation',
          'Monitoring traffic for malicious activity',
          'Lab Tools: Wireshark, Nmap'
        ]
      },
      {
        title: '5. Vulnerability Assessment and Penetration Testing',
        topics: [
          'Vulnerability scanning & risk assessment',
          'Exploitation and mitigation strategies',
          'Lab Tools: Nessus, Burp Suite, OWASP ZAP, Nikto, CMSeek'
        ]
      },
      {
        title: '6. Security Operations and Monitoring',
        topics: [
          'Security operations center (SOC) concepts',
          'Continuous monitoring and alerting',
          'SIEM and log analysis'
        ]
      },
      {
        title: '7. Security Compliance and Governance',
        topics: [
          'Governance & compliance (NIST, PCI-DSS, HIPAA, GDPR)',
          'Communicating security strategies'
        ]
      },
      {
        title: '8. Cybersecurity Tools and Technologies',
        topics: [
          'Industry tools and platforms',
          'Windows Firewall, Windows Defender',
          'Endpoint protection and EDR'
        ]
      },
      {
        title: '9. Ethical and Legal Issues in Cybersecurity',
        topics: [
          'Legal and regulatory considerations',
          'Ethical hacking and disclosure'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning with instant doubt clarification. Classes on weekends and weekdays.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Learn anytime, anywhere, with customized corporate training.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Hands-On Labs', icon: '✓', description: 'Hands-on lab experience and real-world projects' },
      { title: 'Live Training', icon: '📅', description: '30 Hour Live Virtual Training' },
      { title: 'Expert Instructors', icon: '🏆', description: 'Industry-experienced instructors' },
      { title: 'Flexible Schedule', icon: '📅', description: 'Classes available on weekends and weekdays' },
      { title: 'Industry Tools', icon: '🔧', description: 'Nessus, Splunk, Wireshark, OWASP ZAP, Burp Suite, and more' }
    ],
    faqs: [
      { question: 'Why should I opt for the Cybersecurity Analyst Training | Powered by AI course?', answer: 'This course equips you with hands-on lab experience and real-world projects to become a job-ready Cybersecurity Analyst. You will learn threat and vulnerability management, network security, endpoint security, cloud security, and risk management using industry tools like Nessus, Wireshark, and Burp Suite. Classes are available on weekends and weekdays with industry-experienced instructors.' },
      { question: 'Who is this course designed for?', answer: 'The course is designed for IT Professionals, Security Architects, Network Administrators, Ethical Hackers, System Administrators, Vulnerability Analysts, Threat Intelligence Analysts, and Cybersecurity Consultants.' },
      { question: 'Which tools are used in the course?', answer: 'Tools used include Nessus (vulnerability scanning), Splunk (SIEM/log aggregation), Wireshark (network traffic analysis), Nikto and CMSeek (web server testing), OWASP ZAP and Burp Suite (web app security testing), and Windows Firewall and Defender (endpoint protection).' },
      { question: 'What topics are covered?', answer: 'The curriculum covers Introduction to Cybersecurity, Networking Concepts, Threat & Vulnerability Management, Network Security & Defensive Techniques, Cloud Concepts & Security, Endpoint Security, and Risk Management & Security Governance. Each module includes relevant lab tools and hands-on exercises.' },
      { question: 'Do you have classes on weekends?', answer: 'Yes. Classes are available on both weekends and weekdays to suit your schedule.' },
      { question: 'Do I get hands-on lab experience?', answer: 'Yes. The course includes hands-on lab experience and real-world projects using industry-standard tools throughout the modules.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'security',
    heroSubtitle: 'Cybersecurity Analyst'
  },

  'soc-analyst-training': {
    slug: 'soc-analyst-training',
    title: 'SOC Analyst Training',
    category: 'IT Security',
    heroDescription: 'Diversified and dynamic training materials. 30 hours of Live Virtual Training with weekend and weekdays class availability. Learn from industry-recognized and highly qualified training professionals. Flexible schedule, post-training mentorship, simulation exams and unique exam question practices, and small group or one-on-one sessions. Master Security Operations Center (SOC) fundamentals, SIEM, threat detection, incident response, and hands-on labs with NMAP, Wireshark, Splunk, Nessus, Burp Suite, and OWASP.',
    heroBannerImage: '/course-banners/soc-analyst-training.png',
    callToAction: 'Launch your career as a SOC Analyst',
    highlights: [
      'Diversified and dynamic training materials',
      '30 hours of Live Virtual Training',
      'Weekend/Weekdays class availability',
      'Industry-recognized and highly qualified training professionals',
      'Flexible schedule',
      'Post-training mentorship',
      'Simulation exams and unique exam question practices',
      'Small group/One-on-One sessions'
    ],
    description: {
      whyChooseTitle: 'Why choose SOC Analyst Training from InsureTech Skills?',
      overview: 'Our SOC Analyst Training covers Security Operations and Management, cyber threats and attack methodology, networking and network security, incidents and logging, SIEM-based incident detection with Splunk, threat intelligence and threat hunting, and incident response. You will gain hands-on experience with NMAP, Wireshark, Syslog, OWASP, Burp Suite, Nessus, and Splunk in lab scenarios. The program is designed for flexible learning with weekend and weekday classes, post-training mentorship, and simulation exams.',
      whyChoose: 'Learn from industry-recognized professionals with diversified training materials. Benefit from small group or one-on-one sessions, flexible schedule, and post-training mentorship. Practice with simulation exams and unique exam question practices to prepare for SOC Analyst roles and certifications.',
      keyFeatures: [
        'Diversified and dynamic training materials',
        '30 hours of Live Virtual Training',
        'Weekend/Weekdays class availability',
        'Industry-recognized and highly qualified training professionals',
        'Flexible schedule',
        'Post-training mentorship',
        'Simulation exams and unique exam question practices',
        'Small group/One-on-One sessions'
      ],
      whatYouWillLearn: [
        'Security Operations and Management — SOC, SIEM, SOC team roles and models, entry-level trainings and certifications',
        'Cyber Threats, IoCs, and Attack Methodology — CIA Triad, major threats, malware types and labs, attack frameworks, Indicators of Compromise',
        'Networking and Network Security — Computer networks, OSI layers, protocols and ports, TCP/UDP, IP and MAC, DHCP/DNS/SMTP/VPNs, security components',
        'Incidents, Events, and Logging — Phishing analysis, MITRE Attack, port scanning and incident response, Syslog, OWASP, Burp Suite',
        'Incident Detection with SIEM — Splunk architecture and labs, log search, attack investigation, Nessus vulnerability scanning',
        'Threat Intelligence — Cyber Threat Intelligence, open and commercial feeds, threat hunting with Splunk and Zeek',
        'Incident Response — IR procedure, planning, investigative data, forensic procedures'
      ],
      prerequisites: [
        'Basic understanding of IT and computer systems',
        'Familiarity with networking concepts is helpful'
      ],
      whoCanJoin: [
        'Aspiring SOC Analysts',
        'IT Security Professionals',
        'Network Administrators',
        'Cybersecurity enthusiasts',
        'IT professionals seeking SOC roles'
      ],
      distinctness: 'Training includes hands-on labs with NMAP, Wireshark, Syslog, OWASP, Burp Suite, Nessus, and Splunk. Small group or one-on-one sessions, simulation exams, and post-training mentorship. Weekend and weekday class availability with industry-recognized instructors.'
    },
    modules: [
      {
        title: '1. Security Operations and Management',
        topics: [
          'What is SOC in Cyber Security?',
          'What is SIEM in Cyber Security?',
          'What is SOC Team and SOC roles and responsibilities. SOC models?',
          'SOC Analyst Entry Level Trainings and Certifications & job demand'
        ]
      },
      {
        title: '2. Understanding Cyber Threats, IoCs, and Attack Methodology',
        topics: [
          'CIA Triad',
          'Major Cyber Threats',
          'Malware and Types with Labs',
          'Malware pcap acquisition for Wireshark',
          'Cyber Attack Framework',
          'Indicators of compromise (IoCs)'
        ]
      },
      {
        title: '3. Basics of Networking and Network Security Components',
        topics: [
          'What are Computer Networks and its types',
          'OSI Layers and functions',
          'Protocols and Ports',
          'TCP & UDP, TCP Three-way handshake, Wireshark Packet Capturing',
          'Introduction of IP addresses and classes',
          'Concept of MAC Address',
          'DHCP, DNS, SMTP and VPNs',
          'Network Security Components'
        ]
      },
      {
        title: '4. Incidents, Events, and Logging',
        topics: [
          'Phishing Analysis',
          'MITRE Attack',
          'Port Scanning Lab and incident response phases',
          'Syslog Server Lab',
          'Introduction of OWASP',
          'Introduction of Burp Suite'
        ]
      },
      {
        title: '5. Incident Detection with Security Information and Event Management (SIEM)',
        topics: [
          'Splunk Architecture and Components',
          'Splunk Enterprise Home Lab overview and log search',
          'Splunk Incident Investigation: Attack Scenario',
          'Splunk Incident Investigation: Perform Attack Investigation',
          'Nessus Vulnerability Scanner'
        ]
      },
      {
        title: '6. Enhanced Incident Detection with Threat Intelligence',
        topics: [
          'Cyber Threat Intelligence (CTI)',
          'Threat Intelligence',
          'Open and Commercial Threat Intelligence Feeds',
          'Threat Hunting Labs with Splunk, Zeek'
        ]
      },
      {
        title: '7. Incident Response',
        topics: [
          'Incident Response Procedure',
          'Incident Response Planning',
          'Investigative Data',
          'Forensic Procedures'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'One-on-One sessions, customized pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: '30 hours Live Virtual Training. Weekend and weekdays class availability. Flexible schedule.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Small group or corporate batches. Customized training.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Dynamic Materials', icon: '✓', description: 'Diversified and dynamic training materials' },
      { title: 'Live Training', icon: '📅', description: '30 hours of Live Virtual Training' },
      { title: 'Expert Instructors', icon: '🏆', description: 'Industry-recognized and highly qualified professionals' },
      { title: 'Flexible Schedule', icon: '📅', description: 'Weekend/Weekdays class availability' },
      { title: 'Mentorship', icon: '📜', description: 'Post-training mentorship and simulation exams' },
      { title: 'Hands-On Tools', icon: '🔧', description: 'NMAP, Wireshark, Splunk, Nessus, Burp Suite, OWASP' }
    ],
    faqs: [
      { question: 'Why should I opt for the SOC Analyst Training course?', answer: 'This course prepares you for Security Operations Center (SOC) roles with 30 hours of live virtual training, hands-on labs with SIEM (Splunk), Wireshark, Nessus, Burp Suite, and OWASP. You get diversified training materials, flexible weekend/weekday classes, post-training mentorship, and simulation exams. Small group or one-on-one sessions are available.' },
      { question: 'What is SOC and SIEM?', answer: 'SOC (Security Operations Center) is a team that monitors and responds to security incidents. SIEM (Security Information and Event Management) is a technology that aggregates and analyzes log data for threat detection. The course covers both concepts, SOC team roles, and hands-on SIEM with Splunk.' },
      { question: 'Which tools are used in the course?', answer: 'Tools used include NMAP (network scanning), Wireshark (packet analysis), Syslog (logging), OWASP (web application security), Burp Suite (web app testing), Nessus (vulnerability scanning), and Splunk (SIEM and log analysis).' },
      { question: 'What topics are covered?', answer: 'The curriculum covers Security Operations and Management, Cyber Threats and Attack Methodology, Networking and Network Security, Incidents and Logging, SIEM-based Incident Detection (Splunk), Threat Intelligence and Threat Hunting, and Incident Response. Labs include Splunk, Wireshark, Nessus, and Burp Suite.' },
      { question: 'Are classes available on weekends?', answer: 'Yes. Classes are available on both weekends and weekdays with a flexible schedule.' },
      { question: 'Do I get post-training support?', answer: 'Yes. The course includes post-training mentorship and simulation exams with unique exam question practices to help you prepare for certifications and job roles.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'security',
    heroSubtitle: 'Security Operations Center'
  },

  'aws-devops-engineer-training': {
    slug: 'aws-devops-engineer-training',
    title: 'AWS DevOps Engineer Training',
    category: 'Cloud Computing',
    heroDescription: 'Hands-on experience with flexible scheduling and one-on-one sessions. Expert-led learning with 30–35 hours of live virtual training and post-training mentorship. Designed for DevOps Engineers, System Administrators, Solution Architects, Deployment Specialists, Server Administrators, IT Administrators, SysOps Professionals, Application Developers, Operations Engineers, and DevOps Architects. Master CI/CD with CodePipeline, CodeBuild, CodeDeploy, IaC with CloudFormation and Terraform, monitoring with CloudWatch and X-Ray, and the AWS Well-Architected Framework.',
    heroBannerImage: '/course-banners/aws-devops-engineer.png',
    callToAction: 'Launch your career as an AWS DevOps Engineer',
    highlights: [
      'Hands-on experience',
      'Flexible scheduling',
      'One-on-One Sessions',
      'Expert-led learning',
      'Duration: 30–35 Hours',
      'Live virtual training',
      'Post-training mentorship'
    ],
    description: {
      whyChooseTitle: 'Why choose AWS DevOps Engineer Training from InsureTech Skills?',
      overview: 'Our AWS DevOps Engineer Training covers DevOps fundamentals on AWS, CI/CD with CodePipeline/CodeBuild/CodeDeploy/CodeCommit/CodeArtifact, Infrastructure as Code with CloudFormation, CDK, Terraform, and Systems Manager, monitoring and observability with CloudWatch, X-Ray, CloudTrail, Config, Security Hub, and Prometheus/Grafana, high availability and disaster recovery, security and compliance in DevOps, containers and serverless (ECS, EKS, Fargate, Lambda), networking and performance, cost management, and the AWS Well-Architected Framework for DevOps.',
      whyChoose: 'Learn from expert instructors with hands-on experience, flexible scheduling, and one-on-one sessions. Benefit from 30–35 hours of live virtual training and post-training mentorship. The curriculum aligns with AWS DevOps practices and certification paths.',
      keyFeatures: [
        'Hands-on experience',
        'Flexible scheduling',
        'One-on-One Sessions',
        'Expert-led learning',
        '30–35 Hours Live virtual training',
        'Post-training mentorship'
      ],
      whatYouWillLearn: [
        'Introduction to AWS & DevOps — DevOps fundamentals, AWS cloud concepts, shared responsibility, security basics',
        'CI/CD Pipelines — CodePipeline, CodeBuild, CodeDeploy, CodeCommit, CodeArtifact, GitHub/Jenkins integration, Blue-Green & Canary deployments',
        'Infrastructure as Code — CloudFormation, AWS CDK, Terraform on AWS, Systems Manager, OpsWorks (Chef & Puppet)',
        'Monitoring & Observability — CloudWatch, X-Ray, CloudTrail, Config, Security Hub, Trusted Advisor, Prometheus & Grafana',
        'High Availability & Disaster Recovery — Auto Scaling, ELB, Multi-AZ/Multi-Region, Backup, Route 53 failover, DR strategies',
        'Security & Compliance — IAM, Secrets Manager, Parameter Store, KMS, Shield, WAF, Inspector, Audit Manager, DevSecOps',
        'Containers & Serverless — ECS, EKS, Fargate, Lambda, App Runner, Copilot',
        'Networking & Performance — VPC, Transit Gateway, PrivateLink, Global Accelerator, CloudFront, Direct Connect, VPN',
        'Cost Management — Cost Explorer, Budgets, Savings Plans, Reserved Instances, right-sizing',
        'AWS Well-Architected Framework — Operational Excellence, Reliability, Performance, Cost, Security'
      ],
      prerequisites: [
        'Basic understanding of AWS or cloud computing',
        'Familiarity with Linux/Windows and command line',
        'Knowledge of scripting or programming is helpful'
      ],
      whoCanJoin: [
        'DevOps Engineers',
        'System Administrators',
        'Solution Architects',
        'Deployment Specialists',
        'Server Administrators',
        'IT Administrators',
        'SysOps Professionals',
        'Application Developers',
        'Operations Engineers',
        'DevOps Architects'
      ],
      distinctness: 'Expert-led training with hands-on experience, flexible scheduling, and one-on-one sessions. Covers full AWS DevOps toolchain: CodePipeline, CodeBuild, CodeDeploy, CloudFormation, Terraform, CloudWatch, ECS/EKS, Lambda, and the Well-Architected Framework. Post-training mentorship included.'
    },
    modules: [
      {
        title: '1. Introduction to AWS & DevOps',
        topics: [
          'DevOps Fundamentals & Principles',
          'AWS Cloud Concepts & Global Infrastructure',
          'AWS Shared Responsibility Model',
          'AWS Security & Compliance Basics'
        ]
      },
      {
        title: '2. SDLC Automation & CI/CD Pipelines',
        topics: [
          'Continuous Integration & Continuous Deployment (CI/CD) Basics',
          'AWS CodePipeline – CI/CD Automation',
          'AWS CodeBuild – Build Automation',
          'AWS CodeDeploy – Deployment Automation',
          'AWS CodeCommit – Managed Git Repositories',
          'AWS CodeArtifact – Package Management',
          'Integration with GitHub, Jenkins, and other tools',
          'Blue-Green & Canary Deployments'
        ]
      },
      {
        title: '3. Infrastructure as Code (IaC) & Configuration Management',
        topics: [
          'AWS CloudFormation – Infrastructure Automation',
          'AWS CDK (Cloud Development Kit) – Programming Infrastructure',
          'Terraform on AWS',
          'AWS Systems Manager – Automation, Patch Management',
          'AWS OpsWorks (Chef & Puppet) – Configuration Management'
        ]
      },
      {
        title: '4. Monitoring, Logging & Observability',
        topics: [
          'Amazon CloudWatch – Metrics, Logs, Alarms, Dashboards',
          'AWS X-Ray – Distributed Tracing',
          'AWS CloudTrail – Auditing & Security Logging',
          'AWS Config – Compliance & Change Tracking',
          'AWS Security Hub & AWS Trusted Advisor',
          'Prometheus & Grafana for AWS Monitoring'
        ]
      },
      {
        title: '5. High Availability, Fault Tolerance & Disaster Recovery',
        topics: [
          'AWS Auto Scaling & Elastic Load Balancer (ELB)',
          'AWS Multi-AZ & Multi-Region Deployments',
          'AWS Backup Strategies',
          'AWS Route 53 & Failover Routing',
          'AWS Disaster Recovery (Pilot Light, Warm Standby, Multi-Site)'
        ]
      },
      {
        title: '6. Security & Compliance in DevOps',
        topics: [
          'AWS IAM (Identity and Access Management)',
          'AWS Secrets Manager & AWS Parameter Store',
          'AWS Key Management Service (KMS) & Encryption',
          'AWS Shield (DDoS Protection) & AWS WAF',
          'AWS Inspector & AWS Audit Manager',
          'Security Best Practices in CI/CD & DevSecOps'
        ]
      },
      {
        title: '7. Containers & Serverless DevOps',
        topics: [
          'Amazon ECS (Elastic Container Service) & EKS (Elastic Kubernetes Service)',
          'AWS Fargate (Serverless Containers)',
          'Amazon Lambda (Serverless Computing)',
          'AWS App Runner & AWS Copilot'
        ]
      },
      {
        title: '8. Networking & Performance Optimization',
        topics: [
          'Amazon VPC (Virtual Private Cloud) & Networking Basics',
          'AWS Transit Gateway & PrivateLink',
          'AWS Global Accelerator & CloudFront (CDN)',
          'AWS Direct Connect & Site-to-Site VPN'
        ]
      },
      {
        title: '9. Cost Management & Optimization',
        topics: [
          'AWS Cost Explorer & AWS Budgets',
          'AWS Compute Savings Plans & Reserved Instances',
          'Right-Sizing EC2 & Auto Scaling Best Practices'
        ]
      },
      {
        title: '10. AWS Well-Architected Framework for DevOps',
        topics: [
          'Operational Excellence & Reliability',
          'Performance Efficiency & Cost Optimization',
          'Security & Compliance'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'One-on-One sessions, customized pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: '30–35 hours Live virtual training. Flexible scheduling.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate batches.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Hands-On', icon: '✓', description: 'Hands-on experience with AWS DevOps tools' },
      { title: 'Flexible Schedule', icon: '📅', description: 'Flexible scheduling and one-on-one sessions' },
      { title: 'Expert Instructors', icon: '🏆', description: 'Expert-led learning' },
      { title: 'Live Training', icon: '📅', description: '30–35 hours of live virtual training' },
      { title: 'Mentorship', icon: '📜', description: 'Post-training mentorship' },
      { title: 'Full Stack DevOps', icon: '🔧', description: 'CI/CD, IaC, monitoring, security, containers, cost optimization' }
    ],
    faqs: [
      { question: 'Why should I opt for the AWS DevOps Engineer Training course?', answer: 'This course prepares you for AWS DevOps roles with 30–35 hours of live virtual training, hands-on experience with CodePipeline, CodeBuild, CodeDeploy, CloudFormation, Terraform, CloudWatch, ECS/EKS, and Lambda. You get flexible scheduling, one-on-one sessions, expert-led learning, and post-training mentorship. Designed for DevOps Engineers, System Administrators, Solution Architects, and related roles.' },
      { question: 'What topics are covered?', answer: 'The curriculum covers Introduction to AWS & DevOps, CI/CD Pipelines (CodePipeline, CodeBuild, CodeDeploy, CodeCommit, CodeArtifact), Infrastructure as Code (CloudFormation, CDK, Terraform, Systems Manager, OpsWorks), Monitoring & Observability (CloudWatch, X-Ray, CloudTrail, Config), High Availability & DR, Security & Compliance, Containers & Serverless (ECS, EKS, Fargate, Lambda), Networking, Cost Management, and the AWS Well-Architected Framework.' },
      { question: 'Who is this course designed for?', answer: 'The course is designed for DevOps Engineers, System Administrators, Solution Architects, Deployment Specialists, Server Administrators, IT Administrators, SysOps Professionals, Application Developers, Operations Engineers, and DevOps Architects.' },
      { question: 'Do you offer one-on-one sessions?', answer: 'Yes. One-on-one sessions are available along with flexible scheduling.' },
      { question: 'What is the duration?', answer: 'The course duration is 30–35 hours of live virtual training.' },
      { question: 'Do I get post-training support?', answer: 'Yes. The course includes post-training mentorship.' }
    ],
    duration: '30–35 Hours',
    mode: 'Online',
    icon: 'aws',
    heroSubtitle: 'DevOps on AWS'
  },

  'certified-ethical-hacker-ceh-training': {
    slug: 'certified-ethical-hacker-ceh-training',
    title: 'CEH v13 Training',
    category: 'IT Security',
    heroDescription: 'A deep dive into cybersecurity and ethical hacking with our Certified Ethical Hacker (CEH) Training. Achieve digital mastery over AI-driven cybersecurity techniques, gain insights into countering cyber threats and vulnerabilities, learn advanced AI-driven processes and tools to strengthen defenses, and leverage preventative countermeasures to protect organizations. 30 Hour Live virtual training with hands-on learning and real-world case studies.',
    callToAction: 'Acquire expertise in ethical hacking and promote your cybersecurity career',
    heroBannerImage: '/course-banners/ceh-training.png',
    highlights: [
      '30 Hour Live virtual training',
      'Build a solid foundation in cybersecurity and ethical hacking',
      'Well-integrated and online learning delivery model',
      'Industry-recognized and highly qualified training professionals',
      'Query-solving and doubt-clearing sessions',
      'Weekend/Weekdays class availability'
    ],
    description: {
      whyChooseTitle: 'Why choose Certified Ethical Hacker (CEH) Training from InsureTech Skills?',
      overview: 'Our comprehensive CEH training curriculum helps you achieve excellence in cybersecurity and ethical hacking. From vulnerability and malware analysis to network protection and cyber threat intelligence and response, you will ensure all-around growth. Work with industry-recognized training professionals in threat detection, ethical hacking techniques, network security, web and mobile application security, security automation, and emerging trends.',
      whyChoose: 'We offer an integrated learning process with hands-on learning and real-world case studies. Our highly qualified training professionals deliver a robust learning experience. By incorporating simulated lab environments and strong theoretical concepts, we support your continuous learning growth effectively.',
      keyFeatures: [
        '30 Hour Live virtual training',
        'Hands-on labs and real-world case studies',
        'Industry-recognized training professionals',
        'Query-solving and doubt-clearing sessions',
        'Weekend/Weekdays class availability',
        'Simulation exams and unique practice exam questions',
        'Post-training mentorship',
        'Access to recorded sessions'
      ],
      whatYouWillLearn: [
        'AI-driven cybersecurity and ethical hacking techniques',
        'Countering cyber threats, vulnerabilities, and attack vectors',
        'Advanced AI-driven processes and tools to strengthen defenses',
        'System weaknesses and security infrastructure setup',
        'Preventative countermeasures to protect organizations',
        'AI-enhanced analysis, AI-driven learning, and AI-powered insights',
        'Wireless Network Security and Mobile, IoT, and Web Security',
        'AI in cybersecurity and hacking AI systems',
        'AI-enhanced intrusion detection and prevention',
        'Advanced hacking techniques with intelligent tools'
      ],
      prerequisites: [
        'Strong practical working knowledge of TCP/IP is recommended',
        'Minimum 2 years of IT Security-related experience is required'
      ],
      whoCanJoin: [
        'Network Security Officers',
        'IT Security Officers',
        'Ethical Hackers',
        'Application Developers',
        'IS/IT Specialists and Analysts',
        'Cybersecurity Consultants',
        'Anyone who wants to validate their expertise in cybersecurity and ethical hacking'
      ],
      distinctness: 'Our CEH training emphasizes hands-on learning and real-world case studies with an integrated learning process. We help you excel in threat detection, ethical hacking techniques, network security, web and mobile application security, and security automation. Clear the CEH v12 or CEH v13 exam with our simulation exams and exam support.'
    },
    modules: [
      { title: '1. Introduction to Ethical Hacking', topics: ['Ethical hacking fundamentals', 'Legal and scope aspects'] },
      { title: '2. Footprinting and Reconnaissance', topics: ['Information gathering', 'Reconnaissance techniques'] },
      { title: '3. Scanning Networks', topics: ['Network scanning', 'Port and vulnerability scanning'] },
      { title: '4. Enumeration', topics: ['Enumeration techniques', 'Service identification'] },
      { title: '5. Vulnerability Analysis', topics: ['Vulnerability assessment', 'Risk analysis'] },
      { title: '6. System Hacking', topics: ['System compromise', 'Post-exploitation'] },
      { title: '7. Malware Threats', topics: ['Malware types', 'Analysis and mitigation'] },
      { title: '8. Sniffing', topics: ['Network sniffing', 'Traffic analysis'] },
      { title: '9. Social Engineering', topics: ['Social engineering tactics', 'Prevention'] },
      { title: '10. Denial-of-Service', topics: ['DoS concepts', 'Mitigation strategies'] },
      { title: '11. Session Hijacking', topics: ['Session attacks', 'Countermeasures'] },
      { title: '12. Evading IDS, Firewalls, and Honeypots', topics: ['Evasion techniques', 'Detection avoidance'] },
      { title: '13. Hacking Web Servers', topics: ['Web server vulnerabilities', 'Securing web servers'] },
      { title: '14. Hacking Web Applications', topics: ['Web app security', 'OWASP top 10'] },
      { title: '15. SQL Injection', topics: ['SQLi techniques', 'Prevention and detection'] },
      { title: '16. Hacking Wireless Networks', topics: ['Wireless security', 'WLAN attacks'] },
      { title: '17. Hacking Mobile Platforms', topics: ['Mobile security', 'Android and iOS'] },
      { title: '18. IoT Hacking', topics: ['IoT vulnerabilities', 'IoT security'] },
      { title: '19. Cloud Computing', topics: ['Cloud security', 'Cloud attack vectors'] },
      { title: '20. Cryptography', topics: ['Cryptography fundamentals', 'Encryption and hashing'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning with instant doubt clarification.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Learn anytime, anywhere with customized corporate training.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Learn from industry experts in cybersecurity and ethical hacking' },
      { title: 'Post Training Support', icon: '📅', description: 'Continuous support and post-training mentorship' },
      { title: 'Hands-On Labs', icon: '🏆', description: 'Simulated lab environments and real-world case studies' },
      { title: 'Flexible Schedule', icon: '📅', description: 'Weekend/Weekdays class availability' },
      { title: 'Access to Recorded Sessions', icon: '📹', description: 'Review concepts anytime with recorded session access' }
    ],
    faqs: [
      { question: 'What are the benefits of pursuing a Certified Ethical Hacker (CEH) Training Program?', answer: 'It will help you gain mastery over cybersecurity skills and ethical hacking techniques to counter potential threats and mitigate vulnerabilities within systems and networks.' },
      { question: 'Which topics are covered by this program?', answer: 'It covers comprehensive content to elevate your cybersecurity and ethical hacking skills—from decoding cyber threats to mastering ethical hacking techniques, with a robust learning experience in threat detection, network security, web and mobile application security, and security automation.' },
      { question: 'What is the duration of this program?', answer: 'The duration of this program is 30 hours.' },
      { question: 'Who can pursue this program?', answer: 'Network Security Officers, IT Security Officers, Ethical Hackers, Application Developers, IS/IT Specialists and Analysts, Cybersecurity Consultants, and others who want to pursue a career in this segment.' },
      { question: 'Do you provide demo classes?', answer: 'Yes, we provide demo classes.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide live virtual training.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You should clear the CEH v12 or CEH v13 exam to earn this certificate.' },
      { question: 'Do I get exam support?', answer: 'Yes, with our simulation exams and unique research exam questions, you will get proper support to clear the exam on the first attempt.' },
      { question: 'Do you provide post-training mentorship?', answer: 'Yes, we provide post-training mentorship.' },
      { question: 'Can I access recorded sessions?', answer: 'Yes, you will get access to recorded sessions.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'security',
    heroSubtitle: 'Certified Ethical Hacker (CEH)'
  },

  'jira-training': {
    slug: 'jira-training',
    title: 'JIRA Training',
    category: 'Project Management',
    heroDescription: 'Achieving competency in project management is possible with our JIRA Training program. Understand project management principles and boost your task management skills in Agile environments, streamline workflows, engage in effective team management with JIRA features, ensure real-time visibility with Live Dashboards, and make data-driven decisions with JIRA advanced analytics. 14 Hour Live virtual training with flexible schedule.',
    heroBannerImage: '/course-banners/jira-training.png',
    callToAction: 'Make your project management tasks effective with our JIRA Training program',
    highlights: [
      '14 Hour Live virtual training',
      'Flexible schedule to meet your exact needs',
      'A blend of practical insights and real-world case studies',
      'Industry-recognized experts and highly qualified training professionals',
      'Post-training mentorship',
      'Instant query-solving and doubt-clearing scope'
    ],
    description: {
      whyChooseTitle: 'Why choose JIRA Training from InsureTech Skills?',
      overview: 'Our updated JIRA training program is your stepping stone to excel in knowledge and career growth. By blending hands-on labs and real-world project studies, we help you master the art of customizing JIRA. Acquire expertise from fundamental to advanced levels, use real-time reporting for project tracking and identifying impediments, and manage projects effectively with JIRA 8.',
      whyChoose: 'Our effective JIRA training aligns your project management skills with JIRA expertise. We offer a customized approach to learning and mastering JIRA techniques and tools. Equip yourself with real-time project management skills to enhance team collaboration and make informed decisions in a JIRA-controlled environment.',
      keyFeatures: [
        '14 Hour Live virtual training',
        'Flexible schedule',
        'Practical insights and real-world case studies',
        'Industry-recognized experts',
        'Post-training mentorship',
        'Instant query-solving and doubt-clearing',
        'JIRA 8 coverage'
      ],
      whatYouWillLearn: [
        'JIRA terminology, installation, and best practices to control workflows and manage projects',
        'JIRA fundamentals, advantages, and effective use',
        'Implement JIRA effectively as per business needs and project requirements',
        'JIRA dashboards, backlog management, and more',
        'Scrum and Kanban processes, stakeholders, event management',
        'Identifying issues in JIRA and managing necessary modifications',
        'Managing projects and sub-projects and ensuring team collaboration',
        'Creating JIRA dashboards and implementing real-world JIRA scenarios',
        'JIRA Query Language (JQL) and live dashboards'
      ],
      prerequisites: [
        'No formal prerequisites required',
        'Basic knowledge of Agile principles, project management concepts, and software development processes is beneficial'
      ],
      whoCanJoin: [
        'Agile Teams',
        'Project Managers',
        'DevOps Professionals',
        'Software Developers',
        'Quality Assurance Engineers',
        'Business Analysts',
        'IT professionals engaged in project management and issue tracking',
        'Anyone who wants to validate their JIRA knowledge and skills'
      ],
      distinctness: 'Our JIRA training offers real-time project management skills, JIRA live dashboards and JQL to effectively lead high-performing teams. With instant query-solving and doubt-clearing sessions, we help you excel in the JIRA platform with the right support and guidance.'
    },
    modules: [
      { title: '1. Fundamental Concepts of JIRA', topics: ['JIRA basics', 'Terminology and concepts'] },
      { title: '2. Getting Started with JIRA Implementation and Best Practices', topics: ['Installation', 'Best practices'] },
      { title: '3. Working with Issues in JIRA', topics: ['Issue types', 'Workflow and status'] },
      { title: '4. Agile Project Management with JIRA', topics: ['Scrum and Kanban', 'Agile boards'] },
      { title: '5. Advanced JIRA Workflows', topics: ['Custom workflows', 'Automation'] },
      { title: '6. Reporting and Dashboards in JIRA', topics: ['Dashboards', 'Reports and filters'] },
      { title: '7. Application of JIRA Integrations and Extensions', topics: ['Integrations', 'Plugins'] },
      { title: '8. JIRA Administration and Maintenance', topics: ['Administration', 'Maintenance'] },
      { title: '9. Best Practices and Tips for Effective JIRA Usage', topics: ['Best practices', 'Tips'] },
      { title: '10. Jira Project Management Strategies', topics: ['Strategy', 'Scaling JIRA'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning with instant doubt clarification.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Industry-recognized experts and highly qualified training professionals' },
      { title: 'Post Training Support', icon: '📅', description: 'Post-training mentorship and instant query-solving' },
      { title: 'Flexible Schedule', icon: '🏆', description: '14 hours with flexible schedule to meet your needs' },
      { title: 'Practical Learning', icon: '📅', description: 'Blend of practical insights and real-world case studies' },
      { title: 'Access to Recorded Sessions', icon: '📹', description: 'Access recorded sessions for revision' }
    ],
    faqs: [
      { question: 'Why should I join the JIRA Training program?', answer: 'The successful completion of the JIRA training program will offer you the excellent option to learn and grow in the JIRA environment and boost your project management and Agile skills.' },
      { question: 'How much time does your program take?', answer: 'We cover this training in 14 hours.' },
      { question: 'Do you provide demo classes?', answer: 'Yes, we provide demo classes.' },
      { question: 'What are the prerequisites of this training?', answer: 'Although there are no formal prerequisites, basic knowledge of Agile principles, project management concepts, and software development processes is beneficial.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide live virtual training.' },
      { question: 'Do I get post-training support?', answer: 'Yes, you will get all types of support including post-training mentorship.' },
      { question: 'Do you provide study guides and proper exam support?', answer: 'Yes, you will get comprehensive support and simulation exam opportunities. We provide extensive guidance for clearing the exam successfully on the first attempt.' },
      { question: 'Can I access recorded sessions?', answer: 'Yes, you will get access to recorded sessions.' },
      { question: 'Do I get a refund option?', answer: 'Yes, you will get it, but only after fulfilling our policy conditions.' }
    ],
    duration: '14 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'JIRA'
  },

  'cisco-ccna-training': {
    slug: 'cisco-ccna-training',
    title: 'CISCO CCNA Training',
    category: 'Networking',
    heroDescription: 'Move ahead in your networking career with our recognized CISCO CCNA Training program. Raise your ability to navigate the IT landscape and troubleshoot and manage network issues, stay updated with the latest networking technology advancements and best practices, and leverage your excellence as an in-demand expert. 30 Hour Live virtual training with CISCO-covered content and flexible schedules.',
    callToAction: 'Validate your credentials with our CISCO CCNA Training program',
    heroBannerImage: '/course-banners/ccna-training.png',
    highlights: [
      '30 Hour Live virtual training',
      'CISCO-covered training content',
      'Fine blend of online learning delivery approaches',
      'Learn at your own pace with flexible schedules',
      'Interactive learning environment',
      'Versatile learning resources and best exam practices'
    ],
    description: {
      whyChooseTitle: 'Why choose CISCO CCNA Training from InsureTech Skills?',
      overview: 'Our student-oriented CCNA training includes diversified and dynamic content. Starting from identifying the computer network and its basic characteristics, the training covers a holistic understanding of networking infrastructure and implementation of CCNA Routing, Switching, basic security, and configuration. We enhance your expertise in Router and Switching technologies, infrastructure services, network troubleshooting, and industry-relevant projects.',
      whyChoose: 'We help you build a solid foundation in networking technologies and secure your dream job. Our industry experts make you proficient in tackling real-world challenges. Ideal for entry-level engineers or IT technicians, our training builds skills in networking and security fundamentals, IP services, and automation.',
      keyFeatures: [
        '30 Hour Live virtual training',
        'CISCO-covered content',
        'Flexible schedules',
        'Interactive learning environment',
        'Versatile learning resources',
        'Best exam practices'
      ],
      whatYouWillLearn: [
        'Network fundamentals, routing and switching, network security, and wireless networking',
        'Networking and internetworking: IP addresses, subnets, TCP/IP models, hubs, switches, routers, and bridges',
        'Installation, operation, and configuration of IPv4 and IPv6 networks',
        'Functions and basic configurations of a CISCO router',
        'Switching technologies (ISL, LANs, and others)',
        'Implementing, supporting, and troubleshooting LAN/WAN networks',
        'Network and device architectures and virtualization',
        'CISCO device management and current security threat landscape',
        'Cloud, Collaboration, Data Center, Network Programmability, Wireless, or Security'
      ],
      prerequisites: [
        'No formal prerequisites',
        'Basic computer literacy and desire to navigate the operating system',
        'Know-how regarding IP address is preferred'
      ],
      whoCanJoin: [
        'Entry-level IT Professionals (diploma holders, aspiring engineers, networking graduates)',
        'Experienced IT Professionals (Network Administrators, Technicians, IT managers)',
        'Anyone who wants to pursue a career in the networking segment'
      ],
      distinctness: 'Our CCNA training ensures you get a solid foundation in networking technologies with exclusive and practical learning resources. Validate your credentials and avail diversified career opportunities in network administration, engineering, and security. Clear the CISCO 200-301 CCNA exam with our support.'
    },
    modules: [
      { title: '1. Basic Concept of Network Fundamentals', topics: ['Network fundamentals', 'Concepts and protocols'] },
      { title: '2. Network Access', topics: ['Network access', 'VLANs and switching'] },
      { title: '3. IP Connectivity', topics: ['IP routing', 'Connectivity'] },
      { title: '4. IP Services', topics: ['IP services', 'DNS, DHCP, NTP'] },
      { title: '5. Security Fundamentals', topics: ['Security basics', 'ACLs and security'] },
      { title: '6. Network Management', topics: ['Network management', 'Monitoring'] },
      { title: '7. Automation and Programmability', topics: ['Automation', 'Programmability'] },
      { title: '8. Cloud Network Management', topics: ['Cloud networking', 'Integration'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Industry-recognized CCNA training professionals' },
      { title: 'CISCO-Aligned Content', icon: '📅', description: 'CISCO-covered training content' },
      { title: 'Flexible Schedule', icon: '🏆', description: 'Learn at your own pace with flexible schedules' },
      { title: 'Interactive Learning', icon: '📅', description: 'Interactive learning environment' },
      { title: 'Exam Support', icon: '📹', description: 'Versatile learning resources and best exam practices' }
    ],
    faqs: [
      { question: 'Is your CISCO CCNA Training program beneficial?', answer: 'After completing this certification program, you get a huge scope to advance your career in the ever-evolving IT industry.' },
      { question: 'Does your CCNA training program help me to stand out in the market?', answer: 'Yes, with our excellent course curriculum, you will get a higher pay scale and increased job opportunities.' },
      { question: 'What are the prerequisites of your training program?', answer: 'Although no formal prerequisites are required, some basic understanding of computers and navigation skills are essential to excel in the networking field.' },
      { question: 'Does your training material match the industry trend?', answer: 'Yes, we design our training content as per the needs, demands, and latest technology development in the networking field.' },
      { question: 'Do you provide 24X7 online support?', answer: 'Yes, to promote your consistent learning growth, we are available 24X7 to solve your queries and instant doubts.' },
      { question: 'What is the duration of your training program?', answer: 'The duration of this training is 30 hours.' },
      { question: 'Do you offer demo classes?', answer: 'Yes, you can get this facility.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You should clear the CISCO 200-301 CCNA exam to earn this certificate.' },
      { question: 'Do I get the self-paced learning opportunity?', answer: 'Yes, prioritizing your needs and requirements, we accommodate this facility to prosper your learning growth in your own time.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'CISCO CCNA'
  },

  'comptia-cloud-plus-training': {
    slug: 'comptia-cloud-plus-training',
    title: 'CompTIA Cloud+ Training',
    category: 'Cloud Computing',
    heroDescription: 'Elevate your knowledge and skills in cloud-built infrastructure services with our CompTIA Cloud+ Training. Develop practical skills to design and manage cloud solutions, equip yourself with vendor-neutral cloud expertise, learn cloud technologies and cybersecurity best practices, and understand comprehensive approaches for analyzing and troubleshooting cloud issues. 30 Hour Live Virtual Training with industry-recognized experts.',
    heroBannerImage: '/course-banners/comptia-cloud-plus.png',
    callToAction: 'Validate your cloud computing skills and enhance your career prospects',
    highlights: [
      'Comprehensive and industry-recognized training model',
      '30 Hour Live Virtual Training',
      'Highly qualified and experienced training professionals',
      'Weekend/Weekdays class availability',
      'Simulation exams and unique exam question practices'
    ],
    description: {
      whyChooseTitle: 'Why choose CompTIA Cloud+ Training from InsureTech Skills?',
      overview: 'Becoming job-ready in the cloud domain requires acquiring best practices in cloud architecture, networking, security, and more. Our training curriculum instills proactive skills to tackle real-world cloud challenges. We cover multifaceted aspects of cloud systems and services including data security, cloud maintenance, cloud resource provisioning, disaster recovery and business continuity.',
      whyChoose: 'With our unique training materials, you will acquire exclusive know-how of the cloud ecosystem. Our personalized sessions and instant query-solving help you secure, deploy, and automate multiple cloud environments. We promote your knowledge of troubleshooting connectivity and security issues to manage complex cloud environments.',
      keyFeatures: [
        '30 Hour Live Virtual Training',
        'Industry-recognized training model',
        'Weekend/Weekdays class availability',
        'Simulation exams and unique exam practices',
        'Hands-on lab experience and real-world case studies'
      ],
      whatYouWillLearn: [
        'Cloud systems and technologies to deliver excellent solutions',
        'Identity and access management for cloud deployments',
        'Analyzing workload characteristics for successful cloud migration',
        'Different cloud models and designing solutions for customized business requirements',
        'Protecting cloud environments with comprehensive security measures',
        'Optimizing cloud operations: automation, scaling, backup and recovery, lifecycle management',
        'Cloud environment life cycle and fundamental DevOps concepts',
        'Automating and deploying secure cloud domains'
      ],
      prerequisites: [
        'Basic understanding of networking, storage, and server technologies',
        '3 years of working experience with IT networking, network storage, and data center administration',
        'Familiarity with significant hypervisor technologies for server virtualization, standard cloud service models, and common cloud deployment models'
      ],
      whoCanJoin: [
        'System Administrators',
        'DevOps Engineers',
        'Cloud Engineers',
        'Network Administrators',
        'IT professionals responsible for cloud infrastructure services',
        'Anyone who wants to validate their expertise in the cloud computing domain'
      ],
      distinctness: 'Our CompTIA Cloud+ training prepares you for the CompTIA Cloud+ CV0-003 exam. We offer a continuous learning journey with hands-on lab experience and real-world case studies. Our top-notch training professionals help you gain confidence to streamline cloud operations and manage cloud resources effectively.'
    },
    modules: [
      { title: '1. Fundamental Ideas of Cloud Concepts and Models', topics: ['Cloud concepts', 'Service and deployment models'] },
      { title: '2. Application of Virtualization and Infrastructure Services', topics: ['Virtualization', 'Infrastructure services'] },
      { title: '3. Understanding of Infrastructure Configuration and Management', topics: ['Configuration', 'Management'] },
      { title: '4. Knowledge about Cloud Security', topics: ['Cloud security', 'Identity and access'] },
      { title: '5. Ideas of Cloud Deployment and Migration', topics: ['Deployment', 'Migration strategies'] },
      { title: '6. Different Aspects of Cloud Management and Maintenance', topics: ['Management', 'Maintenance'] },
      { title: '7. Exploring Troubleshooting and Optimization', topics: ['Troubleshooting', 'Optimization'] },
      { title: '8. Managing Industry Standards and Best Practices', topics: ['Standards', 'Best practices'] },
      { title: '9. Deployment and Performance Optimization', topics: ['Performance', 'Optimization'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Highly qualified and experienced training professionals' },
      { title: 'Vendor-Neutral', icon: '📅', description: 'Vendor-neutral cloud expertise for real-world applications' },
      { title: 'Flexible Schedule', icon: '🏆', description: 'Weekend/Weekdays class availability' },
      { title: 'Exam Support', icon: '📅', description: 'Simulation exams and unique exam question practices' },
      { title: 'Access to Recorded Sessions', icon: '📹', description: 'Access recorded sessions for revision' }
    ],
    faqs: [
      { question: 'Why should I join the CompTIA Cloud+ Training program?', answer: 'After completing this training program you will acquire the necessary skills to excel in the cloud environment.' },
      { question: 'What are the benefits of joining this program?', answer: 'With our exclusive training materials, you will gain comprehensive insights and practical experience in navigating complex cloud ecosystem challenges.' },
      { question: 'Do you provide demo classes?', answer: 'Yes, we provide demo classes.' },
      { question: 'How much time does your program take?', answer: 'We cover this training in 30 hours.' },
      { question: 'What are the prerequisites of this training?', answer: 'Understanding of basic networking, storage, and server technologies and 3 years of working experience with IT networking, network storage, and data center administration are required. Familiarity with hypervisor technologies, cloud service models, and cloud deployment models is preferred.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You should clear the CompTIA Cloud+ CV0-003 to earn this certificate.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide live virtual training.' },
      { question: 'Do you provide study guides and proper exam support?', answer: 'Yes, you will get all types of support to clear the exam successfully on the first attempt.' },
      { question: 'Do I get post-training support?', answer: 'Yes, you will get all types of support.' },
      { question: 'Can I access recorded sessions?', answer: 'Yes, you will get access to recorded sessions.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'CompTIA Cloud+'
  },

  'comptia-network-plus-training': {
    slug: 'comptia-network-plus-training',
    title: 'CompTIA Network+ Training',
    category: 'Networking',
    heroDescription: 'Validate your essential networking skills and boost your professional development with our CompTIA Network+ Training. Achieve competency in network infrastructure, operations, security, and troubleshooting; build skills in networking concepts, protocols, and security measures for today\'s multi-vendor landscapes; and enhance your network analysis, cloud computing, and virtualization skills. 25 hours of Live Virtual Training with comprehensive curriculum.',
    heroBannerImage: '/course-banners/comptia-network-plus.png',
    callToAction: 'Refine your networking skills and strengthen your professional advancements',
    highlights: [
      'Comprehensive training curriculum',
      '24X7 online learning delivery model',
      '25 hours of Live Virtual Training',
      'Flexible schedule',
      'Blend of practical insights and real-world case studies',
      'Industry-recognized experts and highly qualified training professionals',
      'Weekend/Weekdays class availability',
      'Post-training mentorship',
      'Simulation exams and unique exam question practices'
    ],
    description: {
      whyChooseTitle: 'Why choose CompTIA Network+ Training from InsureTech Skills?',
      overview: 'Ensure your expertise in managing and configuring networks in real-world scenarios. Our training equips you with the latest trends and technologies. We help you achieve long-term networking career success with customized training materials. Build a solid foundation in Computer Network Fundamentals, the OSI Reference Model, Network Components, Ethernet Technology, IPv4 and IPv6 Addresses, Routing IP Packets, and more.',
      whyChoose: 'We prepare your networking career with expert guidance and leading training strategies. Validating your knowledge and skills, our personalized training sessions boost your confidence to tackle complex real-world scenarios. Be part of our collaborative and knowledge-sharing community for continuous development.',
      keyFeatures: [
        '25 hours of Live Virtual Training',
        '24X7 online learning delivery',
        'Flexible schedule',
        'Practical insights and real-world case studies',
        'Post-training mentorship',
        'Simulation exams and exam question practices',
        'Personalized sessions',
        'Instant query-solving and doubt-clearing'
      ],
      whatYouWillLearn: [
        'Understanding of networking appliances, applications, and functions',
        'Cloud concepts and connectivity options',
        'Networking ports, protocols, services, and traffic types',
        'Network topologies, architectures, and types',
        'Implement and manage transmission media and transceivers',
        'Strategies for using appropriate IPv4 network addressing',
        'IPv6 addressing and Infrastructure as Code (IaC)',
        'Network security, operations, and troubleshooting',
        'Configure wireless devices and technologies',
        'Zero trust architecture (ZTA)'
      ],
      prerequisites: [
        'Basic understanding of operating systems',
        'Fundamental knowledge of networking concepts',
        '9–12 months of hands-on experience in networking or similar IT roles'
      ],
      whoCanJoin: [
        'Network Administrators',
        'IT Support Specialists',
        'IT professionals seeking a career transition in the networking domain',
        'Anyone who wants to validate their networking knowledge and skills'
      ],
      distinctness: 'Our CompTIA Network+ training validates your expertise in networking and cybersecurity. We promote fundamental networking concepts and equip you with job-ready skills. Clear the CompTIA Network+ (N10-008 or N10-009) exams with our comprehensive support and simulation exam opportunities.'
    },
    modules: [
      { title: '1. Fundamental Networking Concepts', topics: ['Networking fundamentals', 'Concepts and models'] },
      { title: '2. Knowledge about Network Implementation', topics: ['Network implementation', 'Deployment'] },
      { title: '3. Configuring Switching Technologies and Features', topics: ['Switching', 'Configuration'] },
      { title: '4. Knowledge about Wireless Devices and Technologies', topics: ['Wireless', 'Devices and technologies'] },
      { title: '5. Exploring Networking Operations', topics: ['Operations', 'Management'] },
      { title: '6. Implement and Manage Network Security', topics: ['Network security', 'Security measures'] },
      { title: '7. Execution of Network Troubleshooting', topics: ['Troubleshooting', 'Diagnostics'] },
      { title: '8. Proper study guide and mentor support for exam preparation', topics: ['Exam preparation', 'Study guide'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Industry-recognized experts and highly qualified professionals' },
      { title: 'Post Training Support', icon: '📅', description: 'Post-training mentorship and support' },
      { title: 'Flexible Schedule', icon: '🏆', description: '25 hours with flexible schedule and Weekend/Weekdays' },
      { title: 'Exam Support', icon: '📅', description: 'Simulation exams and unique exam question practices' },
      { title: 'Access to Recorded Sessions', icon: '📹', description: 'Access recorded sessions for revision' }
    ],
    faqs: [
      { question: 'Why should I join the CompTIA Network+ Training program?', answer: 'This certification program is an excellent opportunity to gain comprehensive networking knowledge and prepare you for future job roles in multi-vendor landscapes.' },
      { question: 'What are the benefits of joining this program?', answer: 'With our top-notch training materials, you will gain comprehensive knowledge and practical insights in networking infrastructure, services, and best security practices.' },
      { question: 'How much time does your program take?', answer: 'We cover this training in 25 hours.' },
      { question: 'Do you provide demo classes?', answer: 'Yes, we provide demo classes.' },
      { question: 'What are the prerequisites of this training?', answer: 'You are required to possess fundamental knowledge of operating systems and networking concepts, including 9–12 months of hands-on experience in networking or similar IT roles.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You should clear the CompTIA Network+ (N10-008 or N10-009) exams to earn this certificate.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide live virtual training.' },
      { question: 'Do I get post-training support?', answer: 'Yes, you will get all types of support.' },
      { question: 'Do you provide study guides and proper exam support?', answer: 'Yes, we provide comprehensive support and simulation exam opportunities for clearing the exam successfully on the first attempt.' },
      { question: 'Can I access recorded sessions?', answer: 'Yes, you will get access to recorded sessions.' }
    ],
    duration: '25 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'CompTIA Network+'
  },

  'aws-sysops-administrator-training': {
    slug: 'aws-sysops-administrator-training',
    title: 'AWS SysOps Administrator Training',
    category: 'Cloud Computing',
    heroDescription: 'Only an efficient AWS SysOps Administrator can ensure proper supervision and management of AWS cloud projects. Acquire expertise in AWS deployment, management, and operations to support the organization\'s objective of optimizing AWS environments. 20 Hour Live Virtual Training with industry-recognized experts, flexible schedule, and personalized doubt-clearing sessions.',
    heroBannerImage: '/course-banners/aws-sysops.png',
    callToAction: 'Stand out as an efficient AWS SysOps Administrator professional',
    highlights: [
      '20 Hour Live Virtual Training classes',
      'Industry-recognized experts and training professionals',
      'Flexible schedule',
      'Weekend/Weekdays class availability',
      'Personalized and doubt-clearing sessions'
    ],
    description: {
      whyChooseTitle: 'Why choose AWS SysOps Administrator Training from InsureTech Skills?',
      overview: 'We are committed to preparing competent and experienced AWS SysOps Administrators to tackle real-world challenges in AWS environments. Our training is curated to enhance your proficiency in AWS features and best practices, operating system administration, supervising auditing systems, and deploying fault-tolerant systems on AWS. We develop your skills in cost-effective AWS solutions, troubleshooting performance issues, maintaining automated solutions, and designing and enforcing security policies.',
      whyChoose: 'Our customized and high-quality learning models help you stand out in the competitive market as an efficient AWS SysOps Administrator. Our exclusivity builds your efficiency, critical thinking, and problem-solving skills for effective handling of AWS-based infrastructure and services.',
      keyFeatures: [
        '20 Hour Live Virtual Training',
        'Industry-recognized experts',
        'Flexible schedule',
        'Weekend/Weekdays class availability',
        'Personalized and doubt-clearing sessions'
      ],
      whatYouWillLearn: [
        'Basic concept of AWS Cloud Ecosystem',
        'Application of AWS Identity and Access Management (IAM)',
        'Implementation of monitoring and reporting of issues',
        'High Availability and Build-up of Resilient Environments and Fault Tolerance Systems',
        'Managing Automation and Optimization Strategies',
        'Implementing Networking and Connectivity Features; Security and Compliance Policies',
        'Data Management and Infrastructure Protection',
        'Cost Management and Performance Optimization',
        'Provisioning, Maintaining, and Managing AWS Cloud Resources',
        'Execution of Operational Best Practices'
      ],
      prerequisites: [
        'Basic knowledge of AWS-based infrastructure and services',
        'Experience with system administration',
        'Familiarity with networking and virtualization concepts'
      ],
      whoCanJoin: [
        'Software developers and engineers',
        'IT professionals engaged in the AWS cloud ecosystem',
        'DevOps Engineers',
        'Network Administrators',
        'System Administrators',
        'Cloud Engineers',
        'Cloud Architects',
        'Anyone interested in leveraging their AWS SysOps Administrator skills'
      ],
      distinctness: 'Our AWS SysOps Administrator training equips you with diversified knowledge and tools to operate scalable and secure AWS operations and optimize workflows. Delve deep into our immersive learning platform to earn a valid credential and boost your confidence to provide effective solutions that meet both organizational goals and customer requirements.'
    },
    modules: [
      { title: '1. Basic concept of AWS Cloud Ecosystem', topics: ['AWS Cloud', 'Ecosystem overview'] },
      { title: '2. Application of AWS Identity and Access Management (IAM)', topics: ['IAM', 'Access control'] },
      { title: '3. Implementation of monitoring and reporting of issues', topics: ['Monitoring', 'Reporting'] },
      { title: '4. High Availability and Build-up of Resilient Environments and Fault Tolerance Systems', topics: ['HA', 'Fault tolerance'] },
      { title: '5. Managing Automation and Optimization Strategies', topics: ['Automation', 'Optimization'] },
      { title: '6. Implementing Networking and Connectivity Features; Security and Compliance Policies', topics: ['Networking', 'Security and compliance'] },
      { title: '7. Data Management and Infrastructure Protection', topics: ['Data management', 'Infrastructure protection'] },
      { title: '8. Cost Management and Performance Optimization', topics: ['Cost management', 'Performance'] },
      { title: '9. Provisioning, Maintaining, and Managing AWS Cloud Resources', topics: ['Provisioning', 'Resource management'] },
      { title: '10. Execution of Operational Best Practices', topics: ['Operational best practices'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Personalized training sessions, enjoyable learning environment.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Qualitative, flexible, cost-effective, time-saving.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Online and offline training sessions; hire a trainer for innovative learning.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Industry-recognized experts and training professionals' },
      { title: 'Flexible Schedule', icon: '📅', description: '20 hours with flexible schedule and Weekend/Weekdays' },
      { title: 'Personalized Sessions', icon: '🏆', description: 'Personalized and doubt-clearing sessions' },
      { title: 'AWS Focus', icon: '📅', description: 'Focused on AWS deployment, management, and operations' },
      { title: 'Real-World Skills', icon: '📹', description: 'Tackle real-world challenges in AWS environments' }
    ],
    faqs: [
      { question: 'Who is this course for?', answer: 'Software developers and engineers, IT professionals in the AWS cloud ecosystem, DevOps Engineers, Network/System Administrators, Cloud Engineers and Architects, and anyone interested in AWS SysOps Administrator skills.' },
      { question: 'What are the prerequisites?', answer: 'Basic knowledge of AWS-based infrastructure and services, experience with system administration, and familiarity with networking and virtualization concepts.' },
      { question: 'What is the duration?', answer: 'The course duration is 20 hours of Live Virtual Training.' },
      { question: 'Do you offer flexible schedules?', answer: 'Yes, we offer flexible schedule and Weekend/Weekdays class availability.' },
      { question: 'Do I get personalized support?', answer: 'Yes, we offer personalized and doubt-clearing sessions.' }
    ],
    duration: '20 Hours',
    mode: 'Online',
    icon: 'aws',
    heroSubtitle: 'AWS SysOps Administrator'
  },

  'azure-devops-engineer-training': {
    slug: 'azure-devops-engineer-training',
    title: 'Azure DevOps Engineer Training',
    category: 'Cloud Computing',
    heroDescription: 'Gain expertise on the Azure DevOps platform and empower your data-driven experience through strong cloud fundamentals and technology applications. Understand cloud-based services to plan, test, and deploy technology and applications; use DevOps tools to collaborate for faster delivery; implement version control, continuous integration, and continuous delivery; and design dependency management and release strategy. 30 Hour Live virtual training.',
    heroBannerImage: '/course-banners/azure-devops-engineer.png',
    callToAction: 'Validate your DevOps Engineering expertise with Microsoft-certified Azure DevOps Training',
    highlights: [
      '30 Hour Live virtual training',
      'Azure Repos, Azure Artifacts, Azure Test Plans, Azure Kubernetes Service (AKS)',
      'Version control, continuous integration, and continuous delivery',
      'Source control with Git',
      'Dependency management and release strategy',
      'Container-build strategy'
    ],
    description: {
      whyChooseTitle: 'Why choose Azure DevOps Engineer Training from InsureTech Skills?',
      overview: 'Our comprehensive and updated training curriculum prepares you to design and implement strategies for collaboration, source code management, security, compliance, continuous integration, delivery, and monitoring. Our industry-recognized experts help you build efficient applications in an Azure cloud environment, achieve organizational goals smoothly, and respond to customer needs effectively.',
      whyChoose: 'Crossing the ordinary concept of building your efficiency as an Azure DevOps Professional, we boost confidence to tackle real-world challenges. This Azure DevOps training gives you a solid foundation. We equip you to implement continuous delivery of DevOps value and practices, with transparency, collaboration, visibility, and accountability.',
      keyFeatures: [
        '30 Hour Live virtual training',
        'Azure Repos, Artifacts, Test Plans, AKS',
        'Hands-on and real-world applications',
        'Industry-recognized experts',
        'Dedicated placement cell support'
      ],
      whatYouWillLearn: [
        'Cloud-based services to plan, test, and deploy technology and applications',
        'DevOps tools to collaborate and work together for faster delivery',
        'Version control, continuous integration, and continuous delivery',
        'Source control with Git',
        'Design a dependency management and release strategy',
        'Application of a container-build strategy',
        'Azure DevOps processes, technologies, and values',
        'Using each Azure DevOps service and integrating with existing DevOps tools',
        'Skills for cloud-based application development and deployment'
      ],
      prerequisites: [
        'Basic understanding of software development and cloud computing concepts',
        'Familiarity with Microsoft Azure services (preferred but not required)',
        'Experience with version control systems and basic scripting',
        'Deep desire to use course materials and hands-on project studies to improve efficiency'
      ],
      whoCanJoin: [
        'IT Professionals',
        'Cloud Engineers',
        'Security Architects',
        'Network Administrators',
        'Software Developers and Engineers',
        'DevOps Engineers',
        'Azure Administrator Associate',
        'Anyone preparing for the Microsoft Certified: Azure DevOps Engineer Expert exam'
      ],
      distinctness: 'Our Azure DevOps training promotes your knowledge of cloud-based collaboration skills and project management, software development, and deployment processes. With exclusive resources and continuous learning opportunities, become a skilled professional in the most demanding area of IT services. Clear the Microsoft Certified: Azure DevOps Engineer AZ-400 exam with our support.'
    },
    modules: [
      { title: '1. Introduction to DevOps on Azure', topics: ['DevOps on Azure', 'Culture and practices'] },
      { title: '2. Planning and Tracking with Azure Boards', topics: ['Azure Boards', 'Planning and tracking'] },
      { title: '3. Source Code Management with Azure Repos', topics: ['Azure Repos', 'Source control'] },
      { title: '4. Continuous Integration with Azure Pipelines', topics: ['CI', 'Azure Pipelines'] },
      { title: '5. Continuous Delivery with Azure Pipelines', topics: ['CD', 'Release management'] },
      { title: '6. Dependency Management with Azure Artifacts', topics: ['Azure Artifacts', 'Dependency management'] },
      { title: '7. Infrastructure as Code with Azure', topics: ['IaC', 'Automation'] },
      { title: '8. Configuration Management with Azure', topics: ['Configuration', 'Management'] },
      { title: '9. Monitoring and Logging with Azure', topics: ['Monitoring', 'Logging'] },
      { title: '10. Security and Compliance in DevOps', topics: ['Security', 'Compliance'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Industry-recognized experts' },
      { title: 'Hands-On', icon: '📅', description: 'Real-world applications and hands-on project studies' },
      { title: 'Placement Support', icon: '🏆', description: 'Dedicated placement cell until you get certificate-based job opportunities' },
      { title: 'Flexible Schedule', icon: '📅', description: '30 Hour Live virtual training' },
      { title: 'Exam Support', icon: '📹', description: 'Study guides and support to clear AZ-400 on first attempt' }
    ],
    faqs: [
      { question: 'Why should I opt for the Microsoft Azure DevOps Engineer Certification Training program?', answer: 'It will help you develop proficiency in Agile practices in the Azure Cloud environment and validate your DevOps Engineering expertise.' },
      { question: 'What is the duration of your Azure DevOps Engineer course?', answer: 'The duration of this course is 30 hours.' },
      { question: 'Which topics are covered by your course?', answer: 'We cover comprehensive topics on Azure DevOps culture, practices, and tools—including Azure Repos, Artifacts, Test Plans, Pipelines, Boards, and AKS.' },
      { question: 'What are the prerequisites for attending this course?', answer: 'You should possess knowledge regarding software development, cloud computing concepts, version control systems, and basic scripting. Familiarity with Microsoft Azure services is preferred but not required.' },
      { question: 'Do you constantly update your Azure DevOps Engineer course?', answer: 'Yes, we constantly revise our course curriculum with Microsoft\'s recent updates.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You have to sit for the Microsoft Certified: Azure DevOps Engineer AZ-400 exam.' },
      { question: 'Does this certification help me in my future career?', answer: 'Yes, within the Azure cloud environment, you will get promising career opportunities.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide live virtual training.' },
      { question: 'Do you provide study guides and proper exam support?', answer: 'Yes, you will get all types of support to clear the exam successfully on the first attempt.' },
      { question: 'Do I get post-training mentorship support?', answer: 'Yes, you will get post-training mentorship support.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'Azure DevOps Engineer'
  },

  'aws-security-specialty-training': {
    slug: 'aws-security-specialty-training',
    title: 'AWS Security Specialty Training',
    category: 'Cloud Computing',
    heroDescription: 'Gain expertise in AWS Certified Security – Specialty with our quality training program. Leverage your AWS security know-how and implement security best practices across AWS architecture; understand AWS concepts and components to resolve security incidents and mitigate threats; and achieve competency in data protection, encryption, infrastructure security, incident response, identity and access management, and monitoring and logging. 30 hours of Live Virtual Training.',
    heroBannerImage: '/course-banners/aws-security-specialty.png',
    callToAction: 'Fulfill your dream of working in the AWS security landscape with expertise',
    highlights: [
      'Diversified and dynamic training materials',
      '30 hours of Live Virtual Training',
      'Weekend/Weekdays class availability',
      'Industry-recognized and highly qualified training professionals',
      'Simulation exams and unique exam question practices'
    ],
    description: {
      whyChooseTitle: 'Why choose AWS Security Specialty Training from InsureTech Skills?',
      overview: 'We go beyond the ordinary concept to build your ability to design and implement security solutions across the AWS cloud environment. Our training empowers you with required knowledge in cloud computing, AWS application integration, threat detection and incident response, security logging and monitoring, infrastructure security, data protection, AWS management and security governance, advanced encryption methods, and automated security checks.',
      whyChoose: 'Our well-integrated training design promotes your growth in AWS security and services. We enhance your skills with expert guidance and holistic understanding of cloud security, governance, and compliance. Our customized learning approach ensures your knowledge and career growth in the AWS security landscape.',
      keyFeatures: [
        '30 hours of Live Virtual Training',
        'Weekend/Weekdays class availability',
        'Industry-recognized and highly qualified professionals',
        'Simulation exams and unique exam question practices',
        'Theoretical knowledge and hands-on lab activities'
      ],
      whatYouWillLearn: [
        'AWS Security Fundamentals',
        'Authentication and Authorization with AWS Identity and Access Management',
        'AWS Incident Response Plan and remediation of security-related incidents',
        'Design and implement security monitoring, alerting, and logging solution',
        'Troubleshoot secure network infrastructure and potential threat issues',
        'Data protection with advanced encryption methods and secure authentication',
        'Securing network communications within Amazon VPC',
        'Automating security responses and managing sensitive data'
      ],
      prerequisites: [
        'Basic understanding of AWS Security Fundamentals',
        'Familiarity with cloud computing, IT security practices, and infrastructure concepts',
        'AWS Certified Solutions Architect Associate or AWS Certified Developer Associate certification (recommended)',
        'Idea of AWS Cloud Practitioner Essentials or equivalent experience'
      ],
      whoCanJoin: [
        'Security Engineers',
        'Information Security Professionals',
        'Cloud Security Specialists',
        'IT Security Analysts',
        'Network Security Professionals',
        'IT Professionals responsible for AWS security',
        'Anyone who wants to validate their expertise in the AWS Security-Specialty domain'
      ],
      distinctness: 'Our AWS Security Specialty training helps you stay ahead in your knowledge and career in the AWS cloud environment. Work with our top-notch experts to increase your ability to handle real-world and complex AWS security challenges. Manage robust AWS security infrastructures and respond effectively to security incidents. Clear the AWS Certified Security – Specialty exam with our simulation exams and exam support.'
    },
    modules: [
      { title: '1. Fundamental Ideas of AWS Cloud Security', topics: ['AWS security fundamentals', 'Cloud security'] },
      { title: '2. Application of Identity and Access Management (IAM)', topics: ['IAM', 'Authentication and authorization'] },
      { title: '3. Managing AWS Security Services and Features', topics: ['Security services', 'Features'] },
      { title: '4. Different Aspects of Data Protection and Encryption', topics: ['Data protection', 'Encryption'] },
      { title: '5. Understanding of Infrastructure Security', topics: ['Infrastructure security', 'Network security'] },
      { title: '6. Knowledge about Incident Response', topics: ['Incident response', 'Remediation'] },
      { title: '7. Exploring Monitoring, Logging, and AWS Audit Skills', topics: ['Monitoring', 'Logging', 'Audit'] },
      { title: '8. Tackling Automation and Orchestration', topics: ['Automation', 'Orchestration'] },
      { title: '9. Effective knowledge of Security Best Practices and Design Patterns', topics: ['Best practices', 'Design patterns'] },
      { title: '10. Guidance for Exam Preparation and Practice', topics: ['Exam preparation', 'Practice'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Industry-recognized and highly qualified training professionals' },
      { title: 'Hands-On Labs', icon: '📅', description: 'Theoretical knowledge and hands-on lab activities' },
      { title: 'Flexible Schedule', icon: '🏆', description: '30 hours with Weekend/Weekdays class availability' },
      { title: 'Exam Support', icon: '📅', description: 'Simulation exams and unique exam question practices' },
      { title: 'Post-Training Mentorship', icon: '📹', description: 'Post-training mentorship and recorded sessions' }
    ],
    faqs: [
      { question: 'Why should I join the AWS Certified Security - Specialty Training program?', answer: 'This certification program will offer you an excellent career opportunity to manage a comprehensive suite of AWS security solutions.' },
      { question: 'What are the prerequisites of this training program?', answer: 'Basic understanding of AWS Security Fundamentals, familiarity with cloud computing and IT security practices, idea of AWS Cloud Practitioner Essentials or equivalent experience, and AWS Certified Solutions Architect Associate or AWS Certified Developer Associate certification (recommended).' },
      { question: 'What is the duration of this program?', answer: 'The duration of this program is 30 hours.' },
      { question: 'Who can pursue this program?', answer: 'Security Engineers, Information Security Professionals, Cloud Security Specialists, IT Security Analysts, Network Security Professionals, IT Professionals responsible for AWS security, and anyone who wants to validate their expertise in the AWS Security-Specialty domain.' },
      { question: 'Do you provide demo classes?', answer: 'Yes, we provide demo classes.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide live virtual training.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You should clear the AWS Certified Security – Specialty exam to earn this certificate.' },
      { question: 'Do I get exam support?', answer: 'Yes, with our simulation exams and unique research exam questions, you will get proper support to clear the exam on the first attempt.' },
      { question: 'Can I access recorded sessions?', answer: 'Yes, you will get access to recorded sessions.' },
      { question: 'Do you provide post-training mentorship?', answer: 'Yes, we provide post-training mentorship.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'aws',
    heroSubtitle: 'AWS Security Specialty'
  },

  'python-training': {
    slug: 'python-training',
    title: 'Python Training',
    category: 'Web Development',
    heroDescription: 'Python, a flexible and extensively used programming language, has grown in popularity thanks to its readability, simplicity, and powerful capabilities. Our Python Training Program provides critical skills and knowledge, from Python fundamentals to building web applications and diving into data science, with a hands-on approach to learning.',
    heroBannerImage: '/course-banners/python-training.png',
    callToAction: 'Join our program to become an expert Python programmer',
    highlights: [
      '20 Hour Live Virtual Training',
      'Hands-on approach from fundamentals to web and data science',
      'Django framework for dynamic web apps',
      'Flexible scheduling and one-on-one courses',
      '24x7 Learning assistance and support',
      'Industry-based knowledge'
    ],
    description: {
      whyChooseTitle: 'Why choose Python Training from InsureTech Skills?',
      overview: 'Our Python Training Program is meant to provide you with critical skills and knowledge, ranging from Python fundamentals to professional growth. From mastering fundamentals to building web applications and diving into data science, our course offers a hands-on approach to learning Python.',
      whyChoose: 'Joining InsureTech Skills gives you access to training resources, flexible scheduling, one-on-one courses, and personalised support. Our learning model by experts, practical exposure to projects, and live virtual training ensure comprehensive learning.',
      keyFeatures: [
        '20 Hour program with flexible scheduling',
        'Hands-on approach and real-world projects',
        'Live Virtual Training',
        '24x7 Learning assistance and support',
        'Industry-based knowledge'
      ],
      whatYouWillLearn: [
        'Mastery of Python syntax, variables, data types, operators, and control flow',
        'Ability to build dynamic web applications using the Django framework',
        'Proficiency in using Python libraries for data analysis, visualisation and machine learning',
        'Proficiency in using data structures and algorithms',
        'Organise and reuse code using modules and packages',
        'Core concepts of Python programming with common data structures and algorithms to write efficient and optimised code'
      ],
      prerequisites: [
        'While an undergraduate degree or diploma is not strictly necessary, it can be a helpful starting point',
        'Basic understanding of programming concepts would be beneficial'
      ],
      whoCanJoin: [
        'Anyone interested in learning Python',
        'Software Developers',
        'Software Engineers',
        'Architects, Technical Leads',
        'Programming enthusiasts'
      ],
      distinctness: 'Our Python training keeps you updated with the latest industry practices and trends. We incorporate the most recent Python libraries, frameworks, and development methodologies. We offer ongoing support and resources to help you apply your knowledge in real-world scenarios.'
    },
    modules: [
      { title: '1. Learning Python Basics', topics: ['Python syntax', 'Variables, data types', 'Control flow'] },
      { title: '2. What\'s new in Data Operations?', topics: ['Data operations', 'Data structures'] },
      { title: '3. Takeaways from Conditional Statements and Functions', topics: ['Conditionals', 'Functions'] },
      { title: '4. Learn about Handling Error and File Operations', topics: ['Error handling', 'File I/O'] },
      { title: '5. Python for Developers: Shell and Django', topics: ['Shell', 'Django framework'] },
      { title: '6. Logging Infrastructure with Python', topics: ['Logging', 'Infrastructure'] },
      { title: '7. Introduction to Unit Test Infrastructure', topics: ['Unit testing', 'Testing practices'] },
      { title: '8. Introduction to Python Networking Concepts', topics: ['Networking', 'APIs and sockets'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exposure to projects' },
      { title: 'Live Virtual Training', icon: '🏆', description: 'Live Virtual Training' },
      { title: '24x7 Support', icon: '📅', description: '24x7 Learning assistance and support' },
      { title: 'Industry Knowledge', icon: '📹', description: 'Industry-based knowledge' }
    ],
    faqs: [
      { question: 'Why should I pursue the Python Training program?', answer: 'Our Python training program will equip you with versatile skills needed to excel in programming. You\'ll learn to write efficient, maintainable, and scalable Python code, opening doors to opportunities in data science, web development, automation, and more.' },
      { question: 'What is the duration of your Python Training program?', answer: 'Our Python Training program typically lasts 20 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What prerequisites are required for enrollment?', answer: 'While no specific technical prerequisites are required, a basic understanding of programming concepts would be beneficial. We provide a comprehensive curriculum that caters to both beginners and experienced programmers.' },
      { question: 'How does this course benefit my future career?', answer: 'Completing our Python training program will enhance your career prospects and open doors to opportunities in data science, web development, and automation.' },
      { question: 'Does this course update me with recent practices?', answer: 'Yes, our Python training program keeps you updated with the latest industry practices and trends. We incorporate the most recent Python libraries, frameworks, and development methodologies.' },
      { question: 'Do you offer group discounts?', answer: 'Yes, we offer group discounts for organisations or individuals enrolling together.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced trainers.' },
      { question: 'Do you provide support after completion of the course?', answer: 'Yes, we offer ongoing support and resources. You can access additional learning materials, join our community forums, and receive assistance with any questions or challenges.' }
    ],
    duration: '20 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Python'
  },

  'pmp-training': {
    slug: 'pmp-training',
    title: 'PMP Training',
    category: 'Project Management',
    heroDescription: 'PMP certifications can open doors to higher-paying roles and leadership positions. Our PMP (Project Management Professional) Training provides full coverage with deeper understanding of project management methodologies and practices, aligned with the Project Management Body of Knowledge. Through one-on-one interactive training, hands-on exercises, and real-world case studies, we prepare you for the project management career and certification exam.',
    heroBannerImage: '/course-banners/pmp-training.png',
    callToAction: 'Prepare for the PMP certification exam and project management career',
    highlights: [
      '35 Hour PMP certification training',
      'Aligned with PMBOK and PMP exam',
      'One-on-one interactive training',
      'Hands-on exercises with real-world case studies',
      'Flexible scheduling',
      '24x7 Learning assistance and support'
    ],
    description: {
      whyChooseTitle: 'Why choose PMP Training from InsureTech Skills?',
      overview: 'Our PMP Training is designed to provide you full coverage with deeper understanding of project management methodologies and practices. Our curriculum is best aligned with the Project Management Body of Knowledge, ensuring that all learners are well-prepared for the PMP exam. Through a combination of one-on-one interactive training, hands-on exercises with real-world case studies, we prepare you for the project management career and certification exam.',
      whyChoose: 'Investing in our PMP Training program can significantly benefit your career. By gaining the skills and knowledge to manage projects effectively, you can improve project outcomes and increase your earning potential. PMP certification can enhance your job security in today\'s competitive market.',
      keyFeatures: [
        '35 Hour program (meets 35-hour PMP education requirement)',
        'PMBOK-aligned curriculum',
        'One-on-one interactive training',
        'Hands-on exercises and real-world case studies',
        'Flexible scheduling',
        'Ongoing support after completion'
      ],
      whatYouWillLearn: [
        'Fundamental concepts of project management',
        'Project life cycle and phases',
        'Roles and responsibilities of a project manager',
        'Planning and executing a project',
        'Making decisions based on project management principles',
        'Thorough understanding of project management approaches',
        'Practical skills to use in real-world projects',
        'Confidence to pass the PMP certification exam'
      ],
      prerequisites: [
        'No previous experience or knowledge required for the training itself',
        'To be eligible for the PMP exam: bachelor\'s degree, high school diploma, or associate degree',
        '36 to 60 months of project management experience within the last eight years (depending on education)',
        '35 hours of project management education or training (our course fulfils this)'
      ],
      whoCanJoin: [
        'Project Managers, Team Managers, Project Executives at all levels',
        'Software Developers and professionals aspiring to be Project Managers',
        'Anyone preparing for the PMP certification exam'
      ],
      distinctness: 'Our PMP Training program is designed to be accessible to individuals with no prior knowledge or experience in project management. The program is updated regularly to reflect the latest industry trends and best practices. We offer ongoing support and resources to help you apply your knowledge in real-world scenarios.'
    },
    modules: [
      { title: '1. Introduction to Project Management', topics: ['Fundamentals', 'Concepts and framework'] },
      { title: '2. Strategic Alignment with Business Environment', topics: ['Strategy', 'Business environment'] },
      { title: '3. Commencement of Project', topics: ['Project initiation', 'Kick-off'] },
      { title: '4. How Planning Takes Place?', topics: ['Planning processes', 'Scope, schedule, cost'] },
      { title: '5. Leadership skills to lead the Project', topics: ['Leadership', 'Team management'] },
      { title: '6. Evaluating, Supporting and Managing Project Issues', topics: ['Monitoring', 'Issue management'] },
      { title: '7. Closure of Project', topics: ['Closure', 'Lessons learned'] },
      { title: '8. Examination Overview', topics: ['PMP exam', 'Preparation strategy'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exposure to projects' },
      { title: 'Live Virtual Training', icon: '🏆', description: '35 Hour Live Virtual Training' },
      { title: '24x7 Support', icon: '📅', description: '24x7 Learning assistance and support' },
      { title: 'Exam Ready', icon: '📹', description: 'Meets 35-hour PMP education requirement' }
    ],
    faqs: [
      { question: 'Why should I pursue the PMP Training program?', answer: 'Investing in our PMP Training program can significantly benefit your career. By gaining the skills and knowledge to manage projects effectively, you can improve project outcomes and increase your earning potential. PMP certification can enhance your job security in today\'s competitive market.' },
      { question: 'What is the duration of your PMP Training program?', answer: 'Our PMP Training program is 35 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What prerequisites are required for enrollment?', answer: 'Our PMP Training program is designed to be accessible to individuals with no prior knowledge or experience in project management. For the PMP exam itself, you will need a degree, 36–60 months of project management experience, and 35 hours of project management education (our course fulfils this).' },
      { question: 'How does this course benefit my future career?', answer: 'Our PMP Training program can significantly benefit your future career. It equips you with the skills and knowledge needed to excel in project management roles, opens doors to higher-paying positions, and enhances your job security.' },
      { question: 'Does this course update me with recent practices?', answer: 'Yes, our PMP Training program is updated regularly to reflect the latest industry trends and best practices.' },
      { question: 'Do you offer group discounts?', answer: 'Yes, we offer group discounts for organisations or individuals enrolling together.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced trainers.' },
      { question: 'Do you provide support after completion?', answer: 'Yes, we offer ongoing support and resources to help you apply your knowledge and skills in real-world scenarios.' }
    ],
    duration: '35 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'PMP'
  },

  'manual-testing-training': {
    slug: 'manual-testing-training',
    title: 'Manual Testing Training',
    category: 'Software Testing',
    heroDescription: 'From understanding testing fundamentals to mastering advanced Manual Testing techniques, level up your software testing career and ensure the quality and reliability of software applications. Our Manual Testing Program gives you practical knowledge and know-how to excel in quality assurance through hands-on approach and expert guidance.',
    heroBannerImage: '/course-banners/manual-testing.png',
    callToAction: 'Excel in manual testing and quality assurance',
    highlights: [
      '20 Hour Live Virtual Training',
      'Hands-on approach and expert guidance',
      'Functional, non-functional and specialised testing methods',
      'Test planning, design to defect management',
      'Flexible scheduling and one-on-one courses',
      '24x7 Learning assistance and support'
    ],
    description: {
      whyChooseTitle: 'Why choose Manual Testing Training from InsureTech Skills?',
      overview: 'Manual Testing is a crucial step of quality assurance in software development. It involves manually testing software applications to identify defects or bugs and ensure they meet the specified requirements. With our Manual Testing Program you will gain practical experience in various testing techniques, including functional, non-functional and specialised testing methods. We cover test planning and design to defect management, ensuring you have a solid foundation to get started with manual testing.',
      whyChoose: 'Our manual testing training program will equip you with the essential skills and knowledge to ensure the quality and reliability of software applications. You\'ll learn how to effectively plan, design, execute, and manage tests, making you a valuable asset to any software development team.',
      keyFeatures: [
        '20 Hour Live Virtual Training',
        'Hands-on approach and expert guidance',
        'Practical experience in various testing techniques',
        'Test planning, design, execution, and defect management',
        'Flexible scheduling',
        '24x7 Learning assistance and support'
      ],
      whatYouWillLearn: [
        'Strong fundamentals of testing in software development',
        'Planning and designing tests along with test execution',
        'Managing defects in a clear and concise manner',
        'Learning various testing techniques',
        'Strategising testing as per the frameworks to ensure high-quality software delivery',
        'Effectively plan and design test cases, execute tests, report and track defects',
        'Concepts, principles and methodologies related to testing at a deeper level'
      ],
      prerequisites: [
        'No specific technical prerequisites required',
        'Basic understanding of software concepts and programming fundamentals would be beneficial'
      ],
      whoCanJoin: [
        'Individuals new to software testing',
        'Experienced software professionals looking to enhance their testing skills and knowledge',
        'Quality assurance engineers seeking to expand their expertise in manual testing methodologies',
        'Anyone interested in ensuring the quality and reliability of software applications'
      ],
      distinctness: 'Our Manual Testing Training Program keeps you updated with the latest industry practices and trends. We incorporate the most recent methodologies and techniques. We offer ongoing support and resources to help you apply your knowledge in real-world scenarios.'
    },
    modules: [
      { title: '1. Software Testing Fundamentals', topics: ['Testing basics', 'Concepts and principles'] },
      { title: '2. Introduction to Software Development Cycle (SDLC)', topics: ['SDLC', 'Phases and models'] },
      { title: '3. Models under Software Development Cycle (SDLC)', topics: ['SDLC models', 'Waterfall, Agile'] },
      { title: '4. Methodologies related to Software Testing', topics: ['Testing methodologies', 'Best practices'] },
      { title: '5. Level of Testing with Software Verification and Validation', topics: ['Test levels', 'V&V'] },
      { title: '6. Testing Tools and Non-Functioning Testing', topics: ['Tools', 'Non-functional testing'] },
      { title: '7. Introduction to Windows and Web Application', topics: ['Windows and web apps', 'Testing context'] },
      { title: '8. Learning about Software Testing Life Cycle (STLC)', topics: ['STLC', 'Phases'] },
      { title: '9. Test Case Planning, Designing and Execution', topics: ['Test cases', 'Design and execution'] },
      { title: '10. Delivery and Maintenance as to Manual Testing', topics: ['Delivery', 'Maintenance'] },
      { title: '11. Introduction to Agile Scrum Process', topics: ['Agile', 'Scrum in testing'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exposure to projects' },
      { title: 'Live Virtual Training', icon: '🏆', description: '20 Hour Live Virtual Training' },
      { title: '24x7 Support', icon: '📅', description: '24x7 Learning assistance and support' },
      { title: 'Industry Knowledge', icon: '📹', description: 'Industry-based knowledge' }
    ],
    faqs: [
      { question: 'Why should I pursue the Manual Testing Training program?', answer: 'Our manual testing training program will equip you with the essential skills and knowledge to ensure the quality and reliability of software applications. You\'ll learn how to effectively plan, design, execute, and manage tests, making you a valuable asset to any software development team.' },
      { question: 'What is the duration of your Manual Testing Training program?', answer: 'Our Manual Testing Training program typically lasts 20 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What prerequisites are required for enrollment?', answer: 'While no specific technical prerequisites are required, a basic understanding of software concepts and programming fundamentals would be beneficial. We provide a comprehensive curriculum that caters to both beginners and experienced professionals.' },
      { question: 'How does this course benefit my future career?', answer: 'Completing our Manual Testing Training Program will enhance your career prospects and open doors to opportunities in the software testing field. With the skills you acquire, you\'ll be well-equipped to contribute to the quality assurance of software products.' },
      { question: 'Does this course update me with recent practices?', answer: 'Yes, our Manual Testing Training Program keeps you updated with the latest industry practices and trends.' },
      { question: 'Do you offer group discounts?', answer: 'Yes, we offer group discounts for organisations or individuals enrolling together.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced trainers.' },
      { question: 'Do you provide support after completion?', answer: 'Yes, we offer ongoing support and resources. You can access additional learning materials, join our community forums, and receive assistance with any questions or challenges.' }
    ],
    duration: '20 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Manual Testing'
  },

  'certified-scrum-master-csm-training': {
    slug: 'certified-scrum-master-csm-training',
    title: 'Certified Scrum Master (CSM) Training',
    category: 'Project Management',
    heroDescription: 'Gain understanding of the Scrum framework including its values, principles and artefacts. By earning CSM Training enhance your career prospects, improve your project management skills and become a valuable asset to Agile teams. Learn how to manage projects more efficiently and effectively and develop better communications and collaboration skills with practical training.',
    heroBannerImage: '/course-banners/certified-scrum-master.png',
    callToAction: 'Become a successful Scrum Master with our CSM Training',
    highlights: [
      '16 Hour Live Virtual Training',
      'Scrum framework: values, principles and artefacts',
      'Practical experience: managing events, backlog, fostering collaboration',
      'Open to freshers and professionals; no prior experience required',
      'Flexible scheduling and one-on-one courses',
      '24x7 Learning assistance and support'
    ],
    description: {
      whyChooseTitle: 'Why choose Certified Scrum Master (CSM) Training from InsureTech Skills?',
      overview: 'This Certified Scrum Master Training is designed to teach you about Scrum, a popular Agile methodology used for project management, especially in software development. By the end of this training, you\'ll have a solid understanding and skills needed to become a successful Scrum Master. You will get practical experience in managing events, managing the backlog, and fostering collaborations within Agile teams.',
      whyChoose: 'CSM Training can enhance your career prospects, improve your project management skills, and make you a valuable asset to Agile Teams. It makes you capable with knowledge and skills to effectively facilitate Scrum projects and contribute to successful outcomes.',
      keyFeatures: [
        '16 Hour Live Virtual Training',
        'Scrum framework and Agile methodology',
        'Practical experience in Scrum events and backlog management',
        'Open to both freshers and professionals',
        'Flexible scheduling',
        '24x7 Learning assistance and support'
      ],
      whatYouWillLearn: [
        'Applying Scrum principles to real-world project scenarios',
        'Gaining Agile mindset',
        'Develop ability to lead teams effectively and diminish rough patches in the workflow',
        'Roles of Product Owner, Scrum Master and Development Team',
        'Managing events and backlog',
        'Fostering collaborations within Agile teams'
      ],
      prerequisites: [
        'Open to both freshers and professionals in the field of Project Management or anyone with no prior experience'
      ],
      whoCanJoin: [
        'Project Managers to Product Managers and Business Analytics',
        'Managers and Members of Scrum teams or anyone transitioning to Scrum',
        'Any professional who wants to enter this field'
      ],
      distinctness: 'CSM Training programs are typically updated regularly to reflect the latest trends and best practices in Scrum. We offer ongoing support and resources to help you apply your knowledge and skills in real-world scenarios.'
    },
    modules: [
      { title: '1. Fundamentals of Lean, Agile and Scrum', topics: ['Lean', 'Agile', 'Scrum basics'] },
      { title: '2. Agile Facilitation Techniques', topics: ['Facilitation', 'Techniques'] },
      { title: '3. The Art of Agile Coaching', topics: ['Agile coaching', 'Coaching mindset'] },
      { title: '4. Serving Agile Development Team', topics: ['Development team', 'Servant leadership'] },
      { title: '5. Serving Product Owner', topics: ['Product Owner', 'Collaboration'] },
      { title: '6. Serving Organization', topics: ['Organisation', 'Scaling'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exposure to projects' },
      { title: 'Live Virtual Training', icon: '🏆', description: '16 Hour Live Virtual Training' },
      { title: '24x7 Support', icon: '📅', description: '24x7 Learning assistance and support' },
      { title: 'Industry Knowledge', icon: '📹', description: 'Industry-based knowledge' }
    ],
    faqs: [
      { question: 'Why should I pursue the Certified Scrum Master (CSM) Training program?', answer: 'CSM Training can enhance your career prospects, improve your project management skills, and make you a valuable asset to Agile Teams. It also makes you capable with knowledge and skills to effectively facilitate Scrum projects and contribute to successful outcomes.' },
      { question: 'What is the duration of your Certified Scrum Master (CSM) Training program?', answer: 'Our Training program typically lasts 16 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What prerequisites are required for enrollment?', answer: 'Open to both freshers and professionals in the field of Project Management or anyone with no prior experience.' },
      { question: 'How does this course benefit my future career?', answer: 'CSM Training can significantly benefit your future career by providing you with the skills and knowledge needed to excel in Agile project management roles. As Scrum Masters are in high demand, this certification can open doors to new opportunities and improve your earning potential.' },
      { question: 'Does this course update me with recent practices?', answer: 'Yes, CSM Training programs are typically updated regularly to reflect the latest trends and best practices in Scrum.' },
      { question: 'Do you offer group discounts?', answer: 'Yes, we offer group discounts for organisations or individuals enrolling together.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced trainers.' },
      { question: 'Do you provide support after completion?', answer: 'Yes, we offer ongoing support and resources. You can access additional learning materials, join our community forums, and receive assistance with any questions or challenges.' }
    ],
    duration: '16 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Certified Scrum Master (CSM)'
  },

  'terraform-associate-training': {
    slug: 'terraform-associate-training',
    title: 'Terraform Associate Training',
    category: 'Cloud Computing',
    heroDescription: 'Give your DevOps career a boost with Terraform. Enhance your competence with Infrastructure as Code (IaC) concepts and Terraform tool and technique; familiarize yourself with automating infrastructure tasks and provisioning of cloud resources; gain in-depth expertise in deploying, managing, and orchestrating cloud resources across single, multi-, or customized environments. 12 Hour Live Virtual Training with industry-recognized professionals.',
    heroBannerImage: '/course-banners/terraform-associate.png',
    callToAction: 'Strengthen your understanding and learning in the Terraform domain',
    highlights: [
      '12 Hour Live Virtual Training',
      'Well-integrated and online learning delivery model',
      'Industry-recognized and highly qualified training professionals',
      'Infrastructure as Code (IaC) and Terraform workflow',
      'Hands-on labs and real-life project studies'
    ],
    description: {
      whyChooseTitle: 'Why choose Terraform Associate Training from InsureTech Skills?',
      overview: 'With our well-integrated training program design, accomplish the required Terraform skills to explore different facets of IT and cloud management. Our versatility and invaluable hands-on labs prepare you to manage and automate infrastructure effectively across various cloud platforms. We cover fundamentals, writing and managing Terraform configurations, implementing best practices for infrastructure provisioning, integrating Terraform with various cloud providers and services, and more.',
      whyChoose: 'Our expert guidance and effective training strategies will nurture your Terraform skills to move ahead in your future career. Get the most updated know-how and practical insights to achieve excellence in managing Infrastructure as Code (IaC) and cloud resources. We help you master hands-on approaches in the Terraform domain.',
      keyFeatures: [
        '12 Hour Live Virtual Training',
        'Well-integrated and online learning delivery model',
        'Industry-recognized and highly qualified training professionals',
        'HashiCorp-aligned training materials',
        'Hands-on labs and real-life project studies'
      ],
      whatYouWillLearn: [
        'Explore the basic commands and related tools of Terraform',
        'Acquaint yourself with Terraform modules',
        'Gain practical experience in writing, deploying, and managing Terraform configurations',
        'Modifying cloud resource configurations with Terraform',
        'Managing infrastructure needs and tracking state file of Terraform infrastructure',
        'Manage dependencies and implement remote state management in Terraform',
        'Configure RDS service, auto-scaling, and load balancing using Terraform',
        'Provisioning and integrating Terraform with various cloud providers and services (AWS, Azure, GCP)'
      ],
      prerequisites: [
        'Basic programming experience, e.g. Unix/Linux commands',
        'Familiarity with cloud computing and infrastructure (AWS, Azure, GCP)',
        'Understanding of fundamental command-line operations',
        'Idea of configuration management tools (preferred but not required)'
      ],
      whoCanJoin: [
        'System Administrators',
        'DevOps Engineers',
        'Cloud Engineers',
        'Developers',
        'Infrastructure Architects',
        'IT consultants',
        'Anyone who wants to validate their expertise in the Terraform domain'
      ],
      distinctness: 'Learning Terraform will equip you with the necessary skills to boost your IT and DevOps career. Our training follows HashiCorp comprehensive guidance and helps you dive deep into diversified applications across various domains and use cases. Clear the Terraform Associate (003) exam with our support.'
    },
    modules: [
      { title: '1. Fundamental ideas of Infrastructure as Code (IaC) and Terraform', topics: ['IaC concepts', 'Terraform introduction'] },
      { title: '2. Basic concepts Terraform', topics: ['Terraform basics', 'Core concepts'] },
      { title: '3. Managing and Implementing Terraform CLI', topics: ['CLI', 'Commands and workflow'] },
      { title: '4. Terraform Configuration Language - HashiCorp Configuration Language (HCL)', topics: ['HCL', 'Configuration syntax'] },
      { title: '5. Application of Terraform State Management', topics: ['State', 'State management'] },
      { title: '6. Different aspects of Terraform Modules', topics: ['Modules', 'Reusability'] },
      { title: '7. Understanding of Terraform Provisioners and Functions', topics: ['Provisioners', 'Functions'] },
      { title: '8. Exploring Terraform Cloud and Enterprise', topics: ['Terraform Cloud', 'Enterprise features'] },
      { title: '9. Managing complex Infrastructure in multiple environments', topics: ['Multi-environment', 'Complex infrastructure'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Industry-recognized and highly qualified training professionals' },
      { title: 'Hands-On Labs', icon: '📅', description: 'Hands-on labs and real-life project studies' },
      { title: 'HashiCorp-Aligned', icon: '🏆', description: 'HashiCorp-aligned training materials' },
      { title: '12 Hour Training', icon: '📅', description: '12 Hour Live Virtual Training' },
      { title: 'Exam Support', icon: '📹', description: 'Study guides and support to clear Terraform Associate (003) on first attempt' }
    ],
    faqs: [
      { question: 'Why should I join the Terraform Associate Training program?', answer: 'Understand the fundamentals and necessary tools and techniques in Terraform to get promising job opportunities in the DevOps landscape.' },
      { question: 'What are the benefits of joining this program?', answer: 'With our extensive training materials, you will acquire comprehensive insights and practical experience to navigate complex Terraform challenges with the optimum use of this tool.' },
      { question: 'Do you provide demo classes?', answer: 'Yes, we provide.' },
      { question: 'How much time does your program take?', answer: 'We cover this training in 12 hours.' },
      { question: 'What are the prerequisites of this training?', answer: 'Understanding of basic programming experience, cloud computing and infrastructure, and command-line operations are necessary. The idea of configuration management tools is preferred but not required.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You should clear the Terraform Associate (003) exam to earn this certificate.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide.' },
      { question: 'Do you provide study guides and proper exam support?', answer: 'Yes, you will get all types of support to clear the exam successfully on the first attempt.' },
      { question: 'Do I get post-training support?', answer: 'Yes, you will get all types of support.' },
      { question: 'Can I access recorded sessions?', answer: 'Yes, you will get it.' }
    ],
    duration: '12 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Terraform Associate'
  },

  'comptia-security-plus-training': {
    slug: 'comptia-security-plus-training',
    title: 'CompTIA Security+ Training',
    category: 'IT Security',
    heroDescription: 'Well-equip in the areas of network security, risk management, and compliance and master the essential skills to effectively secure an organization\'s information systems. Achieve competency in core concepts of securing systems, applications, and devices; learn about comprehensive risk management strategies, continuous monitoring, incident response, and ensuring compliance with regulations. 30 hours of Live Virtual Training with vendor-neutral course content.',
    heroBannerImage: '/course-banners/comptia-security-plus.png',
    callToAction: 'Apply strong information security skills and best practices',
    highlights: [
      '30 hours of Live Virtual Training',
      'Expert-guided sessions and flexible schedule',
      'Tailor-made course content',
      'Weekend/Weekdays class availability',
      'Instant query-solving and doubt-clearing opportunities',
      'Industry-recognized and highly qualified training professionals',
      'Hands-on labs and real-life project studies',
      '24X7 Online Learning Delivery model'
    ],
    description: {
      whyChooseTitle: 'Why choose CompTIA Security+ Training from InsureTech Skills?',
      overview: 'A well-designed training strategy can enhance your fineness in IT security operations, architecture, and networking areas. We promote an immersive learning environment to make you proficient in identifying sensitive information and assessing potential threats. Our training resources will build your confidence and assist you in detecting, analyzing, and responding to security incidents in real time. We cover comprehensive IT security programs to design secure systems and resilient infrastructures.',
      whyChoose: 'It is our excellent training program that promotes your expertise in the IT Security domain. We help you understand the key aspects of IT security architecture and operations and make you aware of security program management and oversight. We prepare you for real-life cybersecurity challenges with our top-grade study guides and simulation exams.',
      keyFeatures: [
        '30 hours of Live Virtual Training',
        'Flexible schedule and Weekend/Weekdays class availability',
        'Instant query-solving and doubt-clearing opportunities',
        'Industry-recognized and highly qualified training professionals',
        'Hands-on labs and real-life project studies',
        'Self-paced learning option',
        '24X7 Online Learning Delivery model'
      ],
      whatYouWillLearn: [
        'Understand the latest trends in organizational security strategies',
        'Navigate the complexities of secure systems and network design in diversified work environments',
        'Explore the threats, vulnerabilities, and mitigation tactics to safeguard organizational assets',
        'Comprehensive concepts of secure design principles, cloud security solutions, end-to-end protection, continuous monitoring, and risk management',
        'Implementation of zero trust architecture to reduce exposure to cyber threats, improve incident response, and better compliance',
        'Application of continuous monitoring and improvement to manage a robust security strategy',
        'Knowledge to build resilient IT security frameworks while ensuring regulatory compliance',
        'Ideas of a shared responsibility model to manage business continuity and consistent security posture across changing work environments'
      ],
      prerequisites: [
        'Familiarity with IT concepts, like networking basics and operating systems',
        'Some experience with the Linux command line is preferred',
        'CompTIA Network+ & A+ certification can be beneficial though not mandatory',
        'A background in information assurance is preferred'
      ],
      whoCanJoin: [
        'Security Administrators',
        'IT Auditors',
        'Network Administrators',
        'System Administrators',
        'Aspiring IT Security Professionals',
        'IT Support Specialists',
        'Anyone who wants to validate their expertise in the IT Security domain'
      ],
      distinctness: 'CompTIA Security+ Training is your stepping stone to building a successful cybersecurity career. Our vendor-neutral course helps you apply strong information security skills and best practices and move ahead proficiently in managing various IT security roles. Clear the CompTIA Sec+ SY0-701 exam with our simulation exams and support.'
    },
    modules: [
      { title: '1. Fundamental Ideas of Threats, Attacks, and Vulnerabilities', topics: ['Threats', 'Attacks', 'Vulnerabilities'] },
      { title: '2. Understanding of Security Technologies and Tools', topics: ['Security technologies', 'Tools'] },
      { title: '3. Exploring IT Security Architecture and Design', topics: ['Architecture', 'Design'] },
      { title: '4. Application of Identity and Access Management', topics: ['IAM', 'Identity management'] },
      { title: '5. Risk Management Strategies', topics: ['Risk management', 'Strategies'] },
      { title: '6. Different aspects of Cryptography and PKI (Public Key Infrastructure)', topics: ['Cryptography', 'PKI'] },
      { title: '7. Execution of Cybersecurity Operations', topics: ['Security operations', 'Incident response'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Industry-recognized and highly qualified training professionals' },
      { title: 'Hands-On Labs', icon: '📅', description: 'Hands-on labs and real-life project studies' },
      { title: 'Flexible Schedule', icon: '🏆', description: '30 hours with Weekend/Weekdays class availability' },
      { title: 'Exam Support', icon: '📅', description: 'Simulation exams to clear the exam on the first attempt' },
      { title: '24X7 Learning', icon: '📹', description: '24X7 Online Learning Delivery model' }
    ],
    faqs: [
      { question: 'Why should I join the CompTIA Security+ Training program?', answer: 'This program is an excellent platform to boost your aspiring cybersecurity career.' },
      { question: 'Does the CompTIA Security+ Training program provide advantages to my career prospects?', answer: 'With its comprehensive curriculum on IT security and networking aspects, this program will help you to stand out in the competitive job market.' },
      { question: 'What is the duration of this certification program?', answer: 'The duration of this program is 30 hours.' },
      { question: 'What are the prerequisites for attending this certification program?', answer: 'Fundamental knowledge of IT concepts, like networking basics and operating systems, including some experience with the Linux command line, knowledge in information assurance, and CompTIA Network+ certification or equivalent are preferred.' },
      { question: 'Do you provide demo classes?', answer: 'Yes, we provide.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You should clear the CompTIA Sec+ SY0-701 exam to earn this certificate.' },
      { question: 'Do you have provisions for simulation exams?', answer: 'Yes, you will get this opportunity to clear the final exam successfully on the first attempt.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide live virtual training.' },
      { question: 'Do I get post-training support?', answer: 'Yes, we provide post-training support.' },
      { question: 'Do I get a refund option?', answer: 'Yes, you will get it, but only after fulfilling our policy conditions.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'security',
    heroSubtitle: 'CompTIA Security+'
  },

  'microsoft-azure-security-engineer-training': {
    slug: 'microsoft-azure-security-engineer-training',
    title: 'Microsoft Azure Security Engineer Training',
    category: 'IT Security',
    heroDescription: 'Effectively address complex security challenges and build your proficiency in the latest Azure security resources. Equip yourself with specialized knowledge and skills relating to Azure\'s security features and best practices; gain in-depth expertise in implementing security controls and managing identity and access within the Azure environment; and learn to design and maintain strong security architecture. 30 hours of Live Virtual Training with hands-on lab training.',
    heroBannerImage: '/course-banners/azure-security-engineer-training.png',
    callToAction: 'Master yourself in implementing secure infrastructure solutions in the Microsoft Azure platform',
    highlights: [
      '30 hours of Live Virtual Training (32 hours with extended content)',
      'Maximized learning experience with personalized sessions',
      'Expert guidance and real-life project studies',
      'Threat detection and effective response in the Azure environment',
      'Hands-on lab training and interactive modules'
    ],
    description: {
      whyChooseTitle: 'Why choose Microsoft Azure Security Engineer Training from InsureTech Skills?',
      overview: 'Only a top-notch training program can enhance your understanding of the cybersecurity domain to the next level. Avail the benefits of nurturing your insights on implementing and deploying features like distributed denial-of-service (DDoS) protection, security alerts, and threat intelligence. Our highly qualified training professionals will enrich your understanding of Azure Network security with a well-designed training curriculum, including important principles and practices.',
      whyChoose: 'In our immersive learning environment, you will get an excellent opportunity to enhance your problem-solving and critical decision-making skills. Working with our industry experts will build your confidence, reinforce your theoretical knowledge, and help you understand different approaches to solving real-time security problems.',
      keyFeatures: [
        '30 hours of Live Virtual Training',
        'Personalized sessions',
        'Expert guidance and real-life project studies',
        'Hands-on lab training and interactive modules',
        'Simulation exams and exam support',
        '24X7 online support'
      ],
      whatYouWillLearn: [
        'Application of Azure Active Directory for users and authentication management, including implementation of identity protection and governance',
        'Microsoft Azure network and application security solutions and their mode of use',
        'Azure security posture management, including tools like Azure Defender and compliance policies and governance',
        'Monitoring tools like Azure Resource Monitor and Azure Monitor Application Insights',
        'Configuring Azure Monitor and Defender for cloud protection and monitoring security operations',
        'Deploy and configure Azure Key Vault',
        'Analyzing your platform security with Azure Sentinel'
      ],
      prerequisites: [
        'Fundamental knowledge of Microsoft Azure, its core services and capabilities',
        'Experience with cloud-specific security concepts, security protocols and best practices',
        'Knowledge of Windows and Linux operating systems',
        'Understanding of networking concepts and threat protection'
      ],
      whoCanJoin: [
        'Security professionals seeking to upgrade their skills',
        'System Administrators',
        'Software Developers',
        'Security Architects',
        'Cloud Engineers',
        'Cloud Administrators',
        'Any IT professional who wants to validate their expertise in the Azure Security domain'
      ],
      distinctness: 'Gaining expertise in the latest Azure security practices and tools will enable you to safeguard the entire infrastructure across the platforms, including multi-cloud and hybrid environments. We offer simulation of real-world scenarios and hands-on labs to identify, respond, and mitigate threats effectively. Clear the AZ-500 exam with our support.'
    },
    modules: [
      { title: '1. Fundamental Knowledge of Azure Security and its Services', topics: ['Azure security', 'Services overview'] },
      { title: '2. Application of Identity and Access Management', topics: ['IAM', 'Identity protection'] },
      { title: '3. Implementation of Security Technologies and Tools for Platform Protection', topics: ['Security tools', 'Platform protection'] },
      { title: '4. Managing Data and Application Security', topics: ['Data security', 'Application security'] },
      { title: '5. Different Aspects of Security Operations', topics: ['Security operations', 'Monitoring'] },
      { title: '6. Exploring Hybrid Cloud Security', topics: ['Hybrid cloud', 'Security'] },
      { title: '7. Proper study guidance for exam preparation', topics: ['AZ-500', 'Exam preparation'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Industry experts and highly qualified training professionals' },
      { title: 'Hands-On Labs', icon: '📅', description: 'Hands-on lab training and real-life project studies' },
      { title: 'Personalized Sessions', icon: '🏆', description: 'Maximized learning experience with personalized sessions' },
      { title: 'Exam Support', icon: '📅', description: 'Simulation exams to clear AZ-500 on first attempt' },
      { title: '24X7 Support', icon: '📹', description: '24X7 online support for self-paced learning' }
    ],
    faqs: [
      { question: 'Why should I join the Microsoft Azure Security Engineer Training program?', answer: 'This course is an excellent opportunity to gain knowledge regarding cloud security skills and Azure security tools and practices.' },
      { question: 'Does this training program offer me promising career growth?', answer: 'Yes, after completing this program, you will get promising career opportunities as an Azure Security Engineer in diversified industries.' },
      { question: 'What are the prerequisites of this training program?', answer: 'To pursue this course, you need to possess basic knowledge of Microsoft Azure, cloud-specific security and networking concepts, and Windows and Linux operating systems.' },
      { question: 'What is the duration of this training program?', answer: 'The duration of this program is 30 hours.' },
      { question: 'Which subjects are covered by this training?', answer: 'Our training curriculum comprehensively covers concepts of Azure security and cloud computing aspects.' },
      { question: 'Do you provide demo classes?', answer: 'Yes, we provide.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You should clear the AZ-500 exam to earn this certificate.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide.' },
      { question: 'Do you have provisions for simulation exams?', answer: 'Yes, with our support, you can prepare yourself very well to clear the exam successfully on the first attempt.' },
      { question: 'Do you provide online support?', answer: 'Yes, our students will get 24X7 online support to facilitate their self-paced learning.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'Azure Security Engineer'
  },

  'leading-safe-agilist-certification-training': {
    slug: 'leading-safe-agilist-certification-training',
    title: 'Leading SAFe® 6.0 Agilist Certification Training',
    category: 'Project Management',
    heroDescription: 'Only a Leading SAFe® 6.0 Agilist Certification Training can offer you the expertise to drive Lean-Agile transformation within the organization. Build your foundations of SAFe, gain in-depth insights into the principles and practices, develop your strategic skills and Lean-Agile mindset, and excel in SAFe implementation. 16 hours of Live Virtual Training with industry-recognized professionals.',
    heroBannerImage: '/course-banners/leading-safe-agilist-certification.png',
    callToAction: 'Enhance your ability to apply theoretical concepts in real-world scenarios',
    highlights: [
      '16 hours of Live Virtual Training',
      'Diversified and dynamic training materials',
      'Weekend/Weekdays class availability',
      'Industry-recognized and highly qualified training professionals',
      'Simulation exams and unique exam question practices',
      'Flexible schedule',
      'Post-training mentorship'
    ],
    description: {
      whyChooseTitle: 'Why choose Leading SAFe® 6.0 Agilist Certification Training from InsureTech Skills?',
      overview: 'Only an excellent and leading SAFe® 6.0 Agilist Certification Training program can enhance your expertise in Agile methodologies. We leverage your essential know-how and make you well-prepared for tackling complex challenges in a SAFe environment. Learn the techniques and facilitate key SAFe events like Program Increment (PI) planning only with our comprehensive training approaches. By achieving in-depth insights, you can make a significant impact on your professional trajectory.',
      whyChoose: 'By leveraging your SAFe know-how and best practices, our training experts give you effective guidance to facilitate your career growth in SAFe environment. It is our updated training materials and adherence to industry trends that set us apart. We not only enhance your skills but perfectly align your project-management knowledge with SAFe techniques.',
      keyFeatures: [
        '16 hours of Live Virtual Training',
        'Diversified and dynamic training materials',
        'Weekend/Weekdays class availability',
        'Simulation exams and unique exam question practices',
        'Flexible schedule',
        'Post-training mentorship'
      ],
      whatYouWillLearn: [
        'Understand the SAFe core values and Lean-Agile principles',
        'Acquire know-how of using SAFe as an operating system for business agility',
        'Ideas of seven core competencies of business agility',
        'Management of cross-functional Agile teams',
        'Apply the components of Planning Interval (PI)',
        'Build a continuous delivery pipeline with DevOps',
        'Establish a SAFe portfolio and its management',
        'Techniques to facilitate key SAFe events like Program Increment (PI) planning'
      ],
      prerequisites: [
        'Possession of an undergraduate degree or a high school diploma',
        'Basic understanding of Scrum',
        'Minimum five years of experience in software development, testing, business analysis, or project management'
      ],
      whoCanJoin: [
        'Security Project Managers',
        'Project Executives',
        'Quality Analysts',
        'Director and VPs',
        'Product Managers and Portfolio Managers',
        'Process and Enterprise Architects',
        'Program and Project Managers',
        'Solution Architects',
        'Anyone who wants to validate their expertise in the Lean-Agile Methodologies'
      ],
      distinctness: 'Our effective training program will empower you with the necessary skills to scale Agile methodologies across complex organizational structures. We offer experiential workshops for implementing best SAFe practices and avoiding potential pitfalls. Clear the Leading SAFe® 6.0 Agilist exam with our simulation exams and support.'
    },
    modules: [
      { title: '1. Fundamental Ideas of Scaled Agile Framework (SAFe)', topics: ['SAFe fundamentals', 'Framework overview'] },
      { title: '2. Application of Lean-Agile Mindset and Understanding of SAFe Principles', topics: ['Lean-Agile mindset', 'SAFe principles'] },
      { title: '3. Creating High-Performing Teams and Programs', topics: ['Teams', 'Programs'] },
      { title: '4. Experiencing Planning Interval (PI) Planning', topics: ['PI Planning', 'Events'] },
      { title: '5. Exploring, Executing, and Releasing Value', topics: ['Value flow', 'Execution', 'Release'] },
      { title: '6. Leading the Lean-Agile Enterprise', topics: ['Leadership', 'Enterprise'] },
      { title: '7. Empowering a Lean Portfolio', topics: ['Portfolio', 'Lean portfolio'] },
      { title: '8. Building Large Solutions and Leading the Change', topics: ['Large solutions', 'Change leadership'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, learn at your dedicated pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Flexibility, convenience, and effective learning.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Experienced Instructors', icon: '✓', description: 'Industry-recognized and highly qualified training professionals' },
      { title: 'SAFe Expertise', icon: '📅', description: 'Drive Lean-Agile transformation' },
      { title: 'Flexible Schedule', icon: '🏆', description: '16 hours with Weekend/Weekdays class availability' },
      { title: 'Exam Support', icon: '📅', description: 'Simulation exams to clear Leading SAFe® 6.0 Agilist exam on first attempt' },
      { title: 'Post-Training Mentorship', icon: '📹', description: 'Post-training mentorship' }
    ],
    faqs: [
      { question: 'Why should I join the Leading SAFe® 6.0 Agilist Certification Training program?', answer: 'By achieving comprehensive knowledge of SAFe practices and techniques, you can significantly enhance your career trajectory.' },
      { question: 'What are the prerequisites of this training program?', answer: 'Possession of an undergraduate degree or a high school diploma, a basic understanding of Scrum, and a minimum of five years of experience in software development, testing, business analysis, or project management.' },
      { question: 'What is the duration of this program?', answer: 'The duration of this program is 16 hours.' },
      { question: 'Who can pursue this program?', answer: 'Security Project Managers, Project Executives, Quality Analysts, Director and VPs, Product Managers and Portfolio Managers, Process and Enterprise Architects, Program and Project Managers, Solution Architects, and anyone who wants to validate their expertise in the Lean-Agile Methodologies.' },
      { question: 'Do you provide demo classes?', answer: 'Yes, we provide.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide live virtual training.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You should clear the Leading SAFe® 6.0 Agilist exam to earn this certificate.' },
      { question: 'Do I get exam support?', answer: 'Yes, with our simulation exams and unique research exam questions, you will get proper support to clear the exam on the first attempt.' },
      { question: 'Can I access recorded sessions?', answer: 'Yes, you will get it.' },
      { question: 'Do you provide post-training mentorship?', answer: 'Yes, we provide.' }
    ],
    duration: '16 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Leading SAFe® 6.0 Agilist'
  },

  'selenium-java-training': {
    slug: 'selenium-java-training',
    title: 'Selenium (Java) Training',
    category: 'Software Testing',
    heroDescription: 'Automate your web applications using the Selenium WebDriver framework and the Java programming language. Gain this in-demand skill to grow in your career. Master Selenium WebDriver and leverage Java\'s capabilities to write efficient and maintainable test scripts. 30 Hour Live Virtual Training with hands-on projects.',
    heroBannerImage: '/course-banners/selenium-training.png',
    callToAction: 'Become a proficient web automation engineer',
    highlights: [
      '30 Hour Live Virtual Training',
      'Selenium WebDriver and Java for web automation',
      'Page Object Model (POM) for maintainable test code',
      'Flexible scheduling and one-on-one courses',
      '24x7 Learning assistance and support',
      'Industry-based knowledge'
    ],
    description: {
      whyChooseTitle: 'Why choose Selenium (Java) Training from InsureTech Skills?',
      overview: 'Selenium along with Java makes web testing even more popular with the test automation framework. With this you master Selenium WebDriver and learn to leverage Java\'s capabilities to write efficient and maintainable test scripts. Building effective test frameworks will become easy after you know how to use Java and Selenium to design and implement such test frameworks.',
      whyChoose: 'Selenium with Java Training offers numerous benefits for individuals seeking to enhance their skills in web application testing and automation. By investing in this training, you\'ll equip yourself with valuable skills that can significantly benefit your career and contribute to the success of your projects.',
      keyFeatures: [
        '30 Hour Live Virtual Training',
        'Hands-on projects and practical exposure',
        'Selenium WebDriver API and Java fundamentals',
        'Element locators, web interactions, test frameworks',
        '24x7 Learning assistance and support'
      ],
      whatYouWillLearn: [
        'Automating repetitive and time-consuming test cases',
        'Interact with web elements using Selenium WebDriver',
        'Page Object Model (POM) to create reusable and maintainable test code',
        'HTML, CSS, and JavaScript for structure and behaviour of web applications',
        'Element locators, web interactions, test frameworks, and advanced Selenium techniques',
        'Functional testing, cross-browser testing, and integration with other tools'
      ],
      prerequisites: [
        'Strong foundation in Java programming',
        'General understanding of software development processes',
        'Basic knowledge of testing principles and strategies would be beneficial',
        'Familiarity with web technologies (HTML, CSS, JavaScript) and automation testing concepts'
      ],
      whoCanJoin: [
        'Software Testers',
        'Developers',
        'Quality Assurance Engineers',
        'Anyone interested in web applications testing and automation'
      ],
      distinctness: 'Our Selenium with Java training programs typically stay up-to-date with the latest practices and tools in the field of web application testing and automation. We offer ongoing support and resources to help you apply your knowledge in real-world scenarios.'
    },
    modules: [
      { title: '1. The Core of Selenium: Components and Object Identification', topics: ['Selenium components', 'Object identification'] },
      { title: '2. Mastering Java: Essential Concepts', topics: ['Java essentials', 'Programming for automation'] },
      { title: '3. Project Testing with WebDriver', topics: ['WebDriver', 'Project testing'] },
      { title: '4. Designing and Implementing Custom Frameworks', topics: ['Test frameworks', 'Design and implementation'] },
      { title: '5. Incorporating Third-party Tools into Frameworks', topics: ['Third-party tools', 'Integration'] },
      { title: '6. RESTful Services in Java', topics: ['RESTful services', 'API testing'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exposure to projects' },
      { title: 'Live Virtual Training', icon: '🏆', description: '30 Hour Live Virtual Training' },
      { title: '24x7 Support', icon: '📅', description: '24x7 Learning assistance and support' },
      { title: 'Industry Knowledge', icon: '📹', description: 'Industry-based knowledge' }
    ],
    faqs: [
      { question: 'Why should I pursue the Selenium With Java Training program?', answer: 'Selenium with Java Training offers numerous benefits for individuals seeking to enhance their skills in web application testing and automation. By investing in this training, you\'ll equip yourself with valuable skills that can significantly benefit your career and contribute to the success of your projects.' },
      { question: 'What is the duration of your Selenium With Java Training program?', answer: 'Our Training program typically lasts 30 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'How does this course benefit my future career?', answer: 'Selenium with Java Training will help you further your career by providing in-demand skills in web application testing and automation. This knowledge can lead to job advancement, higher earning potential, and the opportunity to work on new projects.' },
      { question: 'Does this course update me with the recent practices?', answer: 'Yes, Selenium with Java training programs typically stay up-to-date with the latest practices and tools in the field of web application testing and automation.' },
      { question: 'Do you offer group discounts?', answer: 'Yes, we offer group discounts for organisations or individuals enrolling together.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced trainers.' },
      { question: 'Do you provide support after completion?', answer: 'Yes, we offer ongoing support and resources. You can access extra resources, join discussions with other students, and ask for help if you get stuck.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Selenium (Java)'
  },

  'prince2-foundation-practitioner-training': {
    slug: 'prince2-foundation-practitioner-training',
    title: 'PRINCE2® Foundation and Practitioner Training',
    category: 'Project Management',
    heroDescription: 'Manage your projects effectively using the PRINCE2 methodology. Knowledge and skill in this project management field will provide individuals with credentials so valuable that will enhance their career prospects. Our training introduces PRINCE2 methodologies, its principles and various applications in project environments. 32 Hour Live Virtual Training.',
    heroBannerImage: '/course-banners/prince2-foundation-practitioner-training.png',
    callToAction: 'Acquire your PRINCE2 Foundation and Practitioner certifications',
    highlights: [
      '32 Hour Live Virtual Training',
      'PRINCE2 methodology, principles and applications',
      'Risk management, change control, and quality assurance',
      'Practical exercises and case studies',
      'Flexible scheduling and one-on-one courses',
      '24x7 Learning assistance and support'
    ],
    description: {
      whyChooseTitle: 'Why choose PRINCE2® Foundation and Practitioner Training from InsureTech Skills?',
      overview: 'Our training introduces the PRINCE2 methodologies, its principles and its various applications in various project environments, to get work done effectively and efficiently. Learners will also learn about the key processes involved in PRINCE2 project management from Initiation and Starting Up a Project to Managing Product Delivery and Closing the Project.',
      whyChoose: 'PRINCE2® Foundation and Practitioner Certification Training offers a structured approach to project management, enhancing your career prospects, improving project success rates, and providing a globally recognized credential. It includes exam preparation materials and resources to help you succeed.',
      keyFeatures: [
        '32 Hour Live Virtual Training',
        'PRINCE2 methodology and key processes',
        'Practical exercises and case studies',
        'Foundation and Practitioner exam preparation',
        'No prerequisites for Foundation; Practitioner requires Foundation (covered in training)'
      ],
      whatYouWillLearn: [
        'Applying PRINCE2 methodology in various project environments',
        'Core Project Management Skills',
        'Ensure your project deliverables meet predefined quality standards',
        'Process-Oriented Thinking with a structured approach',
        'Implement PRINCE2 principles',
        'Risk management, change control, and quality assurance',
        'Customise processes to meet the specific objectives of each project'
      ],
      prerequisites: [
        'The PRINCE2 Foundation course is open to anyone, regardless of their background',
        'The PRINCE2 Practitioner course requires completion of the Foundation course which is covered in this training'
      ],
      whoCanJoin: [
        'Product Owner to Project/ Program/ Product Manager',
        'Scrum Masters and Scrum Developers',
        'Project Sponsors and PMO Personnel',
        'Anyone wanting to manage projects effectively with PRINCE2'
      ],
      distinctness: 'This training program will provide you with the knowledge necessary to acquire your PRINCE2 Foundation and Practitioner certifications, which will allow you to demonstrate your commitment to project management and advance your career in the sector.'
    },
    modules: [
      { title: '1. Walk through the Course!!', topics: ['Course overview', 'Introduction'] },
      { title: '2. Foundations of PRINCE2', topics: ['PRINCE2 foundations', 'Concepts'] },
      { title: '3. PRINCE2 Guiding Principles', topics: ['Principles', 'Guidance'] },
      { title: '4. Tailoring PRINCE2 to Fit Your Projects', topics: ['Tailoring', 'Adaptation'] },
      { title: '5. The Core Components of PRINCE2', topics: ['Components', 'Core elements'] },
      { title: '6. PRINCE2 Core Themes', topics: ['Themes', 'Key themes'] },
      { title: '7. The PRINCE2 Process Framework for Project Delivery', topics: ['Processes', 'Project delivery'] },
      { title: '8. PRINCE2 Exam Preparation', topics: ['Exam prep', 'Foundation and Practitioner'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exercises and case studies' },
      { title: 'Live Virtual Training', icon: '🏆', description: '32 Hour Live Virtual Training' },
      { title: '24x7 Support', icon: '📅', description: '24x7 Learning assistance and support' },
      { title: 'Globally Recognized', icon: '📹', description: 'Globally recognized PRINCE2 credential' }
    ],
    faqs: [
      { question: 'Why should I pursue the PRINCE2® Foundation and Practitioner Certification Training program?', answer: 'PRINCE2® Foundation and Practitioner Certification Training offers a structured approach to project management, enhancing your career prospects, improving project success rates, and providing a globally recognized credential. Plus, it includes exam preparation materials and resources to help you succeed.' },
      { question: 'What is the duration of your PRINCE2® Foundation and Practitioner Certification Training program?', answer: 'Our Training program typically lasts 32 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What prerequisites are required for enrollment?', answer: 'PRINCE2 training does not have any prerequisites. The Practitioner course requires completion of the Foundation course, which is covered in this training.' },
      { question: 'How does this course benefit my future career?', answer: 'PRINCE2® Foundation and Practitioner Certification provides a globally recognized credential, enhancing your career prospects and making you a valuable asset in project management roles.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced trainers.' },
      { question: 'Do you provide support after completion?', answer: 'Yes, we offer ongoing support and resources to help you apply your knowledge and skills in real-world scenarios.' }
    ],
    duration: '32 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'PRINCE2® Foundation and Practitioner'
  },

  'microsoft-azure-data-fundamental-training': {
    slug: 'microsoft-azure-data-fundamental-training',
    title: 'Microsoft Azure Data Fundamental Training',
    category: 'Data Science',
    heroDescription: 'Data, as the prime foundation of innovation and growth in today\'s data-driven world, holds significant power. Learn how to use Microsoft Azure to create a strong data foundation. Become a skilled data learner and harness the potential of Microsoft Azure to build all-in-one and scalable data solutions. 20 Hour Live Virtual Training.',
    heroBannerImage: '/course-banners/azure-data-fundamentals.png',
    callToAction: 'Become a data architect of the future',
    highlights: [
      '20 Hour Live Virtual Training',
      'Azure data services: SQL Database, Cosmos DB, Data Lake, Synapse Analytics',
      'Design, deploy, and manage data pipelines, warehouses, and data lakes',
      'Post Training Mentorship',
      'Flexible scheduling and one-on-one lessons',
      'Industry-based knowledge'
    ],
    description: {
      whyChooseTitle: 'Why choose Microsoft Azure Data Fundamental Training from InsureTech Skills?',
      overview: 'Our comprehensive training program equips you with the essential knowledge and practical skills to navigate the complex landscape of data management and analytics in the cloud. We explore essential Azure data services such as Azure SQL Database, Azure Cosmos DB, Azure Data Lake Storage, and Azure Synapse Analytics, acquiring a thorough grasp of their capabilities and how to use them effectively.',
      whyChoose: 'Our thorough training program will help you experience the power of data. Learn how to use Azure\'s features to obtain important insights and make more informed decisions. Our skilled educators will walk you through real-world scenarios, preparing you to succeed in today\'s data-driven environment.',
      keyFeatures: [
        '20 Hour Live Virtual Training',
        'Azure data services and data solutions',
        'Hands-on labs and practical application',
        'Post Training Mentorship',
        'Beginner friendly; no prior experience required'
      ],
      whatYouWillLearn: [
        'Learning about Azure Data Services',
        'Implementing, designing and managing data pipelines',
        'Ensuring data protection with adherence to industry regulations',
        'Using and deriving data insights',
        'Design, deploy, and manage effective data pipelines, data warehouses, and data lakes',
        'Best practices for protecting sensitive data and following industry standards'
      ],
      prerequisites: [
        'No prior knowledge is needed',
        'Basic understanding of cloud computing concepts can be beneficial',
        'General background in IT will provide a solid starting point'
      ],
      whoCanJoin: [
        'Experienced data experts',
        'Aspiring analysts',
        'Anyone interested in the cloud and data in the Azure ecosystem'
      ],
      distinctness: 'Our comprehensive program is designed for learners at all levels, giving a solid foundation in core data ideas, Azure data services, and practical application. You will be able to work confidently with Azure data platforms and build strong data solutions.'
    },
    modules: [
      { title: '1. Travel through core data concepts!', topics: ['Core data concepts', 'Data fundamentals'] },
      { title: '2. Understand and explore fundamental concepts related to relational data', topics: ['Relational data', 'Concepts'] },
      { title: '3. Non-relational data concepts made easy to understand!', topics: ['Non-relational data', 'NoSQL concepts'] },
      { title: '4. Data Analytics Solutions with Data warehousing Concept', topics: ['Data warehousing', 'Analytics solutions'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exposure to projects' },
      { title: 'Live Virtual Training', icon: '🏆', description: '20 Hour Live Virtual Training' },
      { title: 'Post Training Mentorship', icon: '📅', description: 'Post Training Mentorship' },
      { title: 'Industry Knowledge', icon: '📹', description: 'Industry-based knowledge' }
    ],
    faqs: [
      { question: 'Why choose Microsoft Azure Data Fundamentals Training?', answer: 'Our thorough training program will help you experience the power of data. Learn how to use Azure\'s features to obtain important insights and make more informed decisions. Our skilled educators will walk you through real-world scenarios.' },
      { question: 'Is this course suitable for beginners?', answer: 'Absolutely! Whether you\'re new to Azure or have some prior experience, our training is tailored to meet your needs. Our instructors provide clear explanations and hands-on exercises to ensure you grasp the concepts effectively.' },
      { question: 'How can this training help me advance my career?', answer: 'Azure data skills are highly valued in the technology business. By finishing this course, you will improve your career chances and gain access to intriguing opportunities in data analysis, data engineering, and cloud computing.' },
      { question: 'What is the duration of your Microsoft Azure Data Fundamental Training program?', answer: 'Our Microsoft Azure Data Fundamental Training program typically lasts 20 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'Can I access course materials after completion?', answer: 'Yes, you\'ll have access to course materials, including slides, exercises, and practice exams, even after the training is complete.' },
      { question: 'Is prior programming experience necessary?', answer: 'While some programming knowledge can be helpful, it\'s not a strict requirement.' }
    ],
    duration: '20 Hours',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'Azure Data Fundamental'
  },

  'microsoft-azure-power-bi-training': {
    slug: 'microsoft-azure-power-bi-training',
    title: 'Microsoft Azure Power BI Training',
    category: 'Data Science',
    heroDescription:
      'Master Microsoft Power BI from data connection to enterprise dashboards — Power Query, DAX, Azure integration, Fabric, and advanced analytics. Fully aligned with Microsoft PL-300 Power BI Data Analyst Associate. Live instructor-led · 50+ hours · 10 modules · 8+ labs & projects · Beginner to Advanced.',
    heroBannerImage: '/course-banners/azure-power-bi-training.png',
    callToAction: 'Request Callback',
    highlights: [
      'PL-300 Power BI Data Analyst Associate exam-aligned syllabus',
      '50+ hours · 10 modules · 8+ hands-on dashboards & real projects',
      'Power Query (M), DAX, data modeling, Power BI Service, RLS & governance',
      'Azure Synapse, Data Lake, Fabric, streaming — enterprise-ready BI',
      'Live instructor-led · EST, GMT & IST batches · lifetime access to recordings & PBIX files',
      'Career support, mock exams, Copilot & AI Insights — 2025-ready skills'
    ],
    description: {
      whyChooseTitle: 'Why choose Microsoft Azure Power BI Training from InsureTech Skills?',
      overview:
        'Microsoft Power BI is a leading business intelligence and visualization platform — used by over 250,000 organizations globally, including Fortune 500 companies across the USA, Canada, and Europe. Combined with Microsoft Azure, Power BI enables real-time enterprise dashboards that support high-stakes decisions.\n\nThis training takes you from connecting data sources through advanced DAX, Azure Synapse and Fabric integration, to deploying enterprise-grade BI. It suits business analysts, data professionals, and developers seeking practical skills employers hire for. The programme is aligned with the Microsoft PL-300 Power BI Data Analyst Associate certification.',
      whyChoose:
        'Expert-led live sessions (not pre-recorded only), finance and retail–style datasets for labs, and a capstone enterprise BI project. You also prepare for PL-300 with mock tests and domain-aligned review while building a portfolio of PBIX work.',
      keyFeatures: [
        'Full PL-300 domain coverage: prepare data, model data, visualize & analyze, deploy & maintain',
        '8+ real dashboards and projects — sales, HR, finance KPIs, Azure-integrated BI',
        'Microsoft certification prep with mock assessments and study guidance',
        'Power BI Copilot, AI Insights, and Fabric-ready skills',
        'Row-level security, governance, deployment pipelines, and admin concepts'
      ],
      whatYouWillLearn: [
        'Connect to 100+ data sources — SQL, Excel, Azure, APIs, SharePoint',
        'Transform and clean data using Power Query (M language)',
        'Build star schema data models and manage relationships',
        'Write DAX — calculated columns, measures, KPIs, time intelligence',
        'Create interactive reports and dashboards in Power BI Desktop',
        'Publish and share using Power BI Service (cloud)',
        'Integrate Power BI with Azure Synapse, Data Lake, and Microsoft Fabric',
        'Row-Level Security (RLS) and data governance best practices',
        'Real-time dashboards with Azure Stream Analytics and Kafka concepts',
        'PL-300 Power BI Data Analyst Associate exam preparation'
      ],
      prerequisites: [
        'Basic Excel and SQL knowledge is helpful but not mandatory',
        'No prior Power BI experience required — starts from fundamentals to advanced enterprise topics',
        'Windows 10+ required for Power BI Desktop (Windows-only); Mac users can use VM or browser-first workflows with our setup help',
        'Minimum 4GB RAM (8GB recommended); free Power BI Desktop; stable internet for Service and live classes'
      ],
      whoCanJoin: [
        'Business analysts, data analysts, financial analysts, and IT professionals',
        'Project managers and anyone building dashboards for data-driven decisions',
        'Non-technical professionals from finance, HR, marketing, and operations — no coding background required'
      ],
      distinctness:
        'PL-300–aligned path with deep DAX and modeling, Azure and Fabric integration, streaming and real-time patterns, governance and admin, plus Copilot and AI visuals — packaged with 8+ portfolio projects and certification-focused mock exams.'
    },
    modules: [
      {
        title: '1. Introduction to Power BI & Business Intelligence',
        topics: [
          'What is Business Intelligence? — concepts, tools and the modern BI stack',
          'Introduction to Power BI — Desktop, Service, Mobile and Embedded',
          'Power BI architecture — components and workflow overview',
          'Installing Power BI Desktop and connecting to your first data source'
        ]
      },
      {
        title: '2. Data Connection & Power Query',
        topics: [
          'Connecting to 100+ data sources — Excel, CSV, SQL Server, Web, SharePoint, APIs',
          'Power Query Editor — interface, data preview and query steps',
          'Data transformation — remove duplicates, split columns, change types',
          'Merging and appending queries — combining multiple data sources',
          'M Language fundamentals — writing custom transformation steps',
          'Handling null values, errors and data quality issues',
          'Project: Cleaning and combining sales data from multiple Excel files'
        ]
      },
      {
        title: '3. Data Modeling & Relationships',
        topics: [
          'Star schema vs snowflake schema — best practices for Power BI models',
          'Creating and managing table relationships — one-to-many, many-to-many',
          'Relationship cardinality and cross-filter direction',
          'Date table creation and time intelligence setup',
          'Calculated columns vs measures — when to use each',
          'Model optimization — best practices for performance and scalability'
        ]
      },
      {
        title: '4. DAX — Data Analysis Expressions',
        topics: [
          'Introduction to DAX — syntax, evaluation context and operators',
          'Basic DAX functions — SUM, COUNT, AVERAGE, MIN, MAX, DISTINCTCOUNT',
          'Filter functions — CALCULATE, FILTER, ALL, ALLEXCEPT, KEEPFILTERS',
          'Time intelligence — DATEADD, SAMEPERIODLASTYEAR, YTD, QTD, MTD',
          'RELATED and RELATEDTABLE — working across relationships',
          'Variables in DAX — VAR and RETURN for complex formulas',
          'Advanced DAX patterns — ABC analysis, Pareto, running totals',
          'Project: Building a complete financial KPI dashboard with DAX'
        ]
      },
      {
        title: '5. Data Visualization & Reports',
        topics: [
          'Core visuals — bar, line, pie, scatter, map, table and matrix',
          'Slicers, filters and drill-through — interactive report design',
          'Conditional formatting, data bars and KPI cards',
          'Custom visuals from AppSource — Chiclet Slicer, Gantt, Bullet Chart',
          'Bookmarks, buttons and page navigation — storytelling with data',
          'Report themes, accessibility and design best practices',
          'Project: Building an interactive retail sales dashboard'
        ]
      },
      {
        title: '6. Power BI Service & Collaboration',
        topics: [
          'Publishing reports to Power BI Service (cloud)',
          'Workspaces, apps and content distribution to teams',
          'Scheduled data refresh — gateways and cloud refresh setup',
          'Row-Level Security (RLS) — implementing data access control',
          'Comments, subscriptions and alerts in Power BI Service',
          'Power BI Embedded — integrating reports into custom applications'
        ]
      },
      {
        title: '7. Azure Integration & Cloud Analytics',
        topics: [
          'Azure SQL Database — connecting Power BI to cloud databases',
          'Azure Synapse Analytics — DirectQuery and import mode',
          'Azure Data Lake Storage Gen2 — accessing big data in Power BI',
          'Microsoft Fabric — OneLake, Lakehouse and Dataflows Gen2',
          'Azure Stream Analytics — real-time data streaming into Power BI',
          'Power BI with Azure Active Directory — enterprise security setup'
        ]
      },
      {
        title: '8. Real-Time Dashboards & Advanced Features',
        topics: [
          'Real-time dashboard tiles — streaming datasets and push data',
          'Power BI with Apache Kafka — live streaming analytics',
          'What-If parameters and scenario analysis',
          'Decomposition tree and Key Influencers visual for AI insights',
          'Power BI Copilot — using AI to generate reports and summaries'
        ]
      },
      {
        title: '9. Power BI Administration & Governance',
        topics: [
          'Power BI Admin Portal — tenant settings and security policies',
          'Deployment pipelines — Development, Test and Production environments',
          'Data lineage, sensitivity labels and Microsoft Purview integration',
          'Capacity management — Power BI Premium vs Pro vs Free'
        ]
      },
      {
        title: '10. PL-300 Exam Prep & Capstone Project',
        topics: [
          'PL-300 exam structure — topics, question types and passing score',
          'Mock tests and practice assessments with detailed answers',
          'Common exam mistakes and tips from certified professionals',
          'How to schedule the PL-300 exam and explore available Microsoft exam discount programs (eligibility varies)',
          'Capstone: End-to-end enterprise BI solution (your choice of domain)'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Dedicated mentor for DAX, modeling, and PL-300 strategy.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live batches with hands-on Power BI Desktop and Service labs.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Custom BI programmes for analytics and finance teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'PL-300 Exam Path', icon: '📜', description: 'Aligned to Microsoft Power BI Data Analyst Associate — mock tests and domain review.' },
      { title: 'Live Instructor-Led', icon: '✓', description: 'Real-time sessions with practitioners — not pre-recorded only.' },
      { title: '8+ Labs & Projects', icon: '📊', description: 'Retail, finance, HR, Azure-integrated and streaming scenarios.' },
      { title: 'Azure & Fabric Ready', icon: '☁️', description: 'Synapse, Data Lake, Fabric, and enterprise security patterns.' },
      { title: 'AI & Copilot', icon: '🤖', description: 'AI Insights, Copilot, and modern visuals for 2025-ready roles.' },
      { title: 'Global Batches', icon: '🌍', description: 'EST, GMT, and IST options for flexible scheduling.' },
      { title: 'Lifetime Materials', icon: '♾️', description: 'Recordings, PBIX files, and notes retained after enrollment.' },
      { title: 'Career Support', icon: '💼', description: 'Resume, LinkedIn, mock interviews, and portfolio review.' }
    ],
    faqs: [
      {
        question: 'Do I need any prior experience with Power BI or Azure?',
        answer:
          'No prior Power BI or Azure experience is required. The course starts with installing Power BI Desktop and connecting your first source. Basic Excel helps but is not mandatory. It suits beginners and those advancing to enterprise BI.'
      },
      {
        question: 'Does this course prepare me for the Microsoft PL-300 certification?',
        answer:
          'Yes. It is aligned with PL-300 across all four domains: Prepare the Data, Model the Data, Visualize and Analyze the Data, and Deploy and Maintain Assets. Mock tests and practice questions are included. Microsoft exam pricing and discount programmes change over time — verify current offers on the Microsoft Certification site when you register.'
      },
      {
        question: 'What is the average salary for a Power BI professional in the USA?',
        answer:
          'Salaries vary by role and location. Analyst and BI developer roles often fall in broad bands commonly cited in market surveys; senior developers and architects typically earn more. Use recent job postings in your region for the most accurate picture.'
      },
      {
        question: 'Does Power BI Desktop work on Mac or Linux?',
        answer:
          'Power BI Desktop is Windows-based. Mac users typically use a Windows VM (e.g. Parallels or VMware) or focus on Power BI Service in the browser for certain workflows. We help Mac learners with setup guidance in early sessions.'
      },
      {
        question: 'How long is the course and what are the batch timings?',
        answer:
          '50+ hours total, typically 8–10 weeks. Batches run in EST, GMT, and IST with weekday and weekend options. Contact us for the current schedule.'
      },
      {
        question: 'What kind of projects will I build in this course?',
        answer:
          '8+ dashboards including retail sales, financial KPIs with DAX, HR analytics, real-time streaming scenarios, supply chain tracking, and a capstone enterprise BI project in a domain you choose.'
      },
      {
        question: 'Is placement assistance provided after the course?',
        answer:
          'We provide career support including Power BI–focused resume and LinkedIn help, technical mock interviews (DAX and modeling), portfolio review, and referrals. Outcomes depend on your background, market, and effort.'
      }
    ],
    duration: '50+ Hours',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'PL-300',
    toolsAndTechnologies: [
      { name: 'Power BI Desktop', desc: 'Report authoring' },
      { name: 'Power BI Service', desc: 'Cloud publishing' },
      { name: 'Power BI Mobile', desc: 'On-the-go reports' },
      { name: 'Power Query', desc: 'Data transformation' },
      { name: 'DAX', desc: 'Data expressions' },
      { name: 'Azure Synapse', desc: 'Cloud analytics' },
      { name: 'Azure Data Lake', desc: 'Big data storage' },
      { name: 'Microsoft Fabric', desc: 'Unified analytics' },
      { name: 'Azure SQL Database', desc: 'Cloud database' },
      { name: 'Excel & SharePoint', desc: 'Data sources' },
      { name: 'Azure Active Directory', desc: 'Security & access' },
      { name: 'Power BI + AI Insights', desc: 'AI visuals & ML' }
    ]
  },

  'kubernetes-administrator-cka-training': {
    slug: 'kubernetes-administrator-cka-training',
    title: 'Kubernetes Administrator (CKA) Training',
    category: 'Cloud Computing',
    heroDescription: 'In the world of cloud native applications, Kubernetes has emerged as the de facto standard for container orchestration. The Certified Kubernetes Administrator (CKA) credential is accepted around the world as the standard for experts looking to certify their knowledge. Our CKA training equips you with the fundamental knowledge and real-world expertise required to ace the certification test and succeed as Kubernetes administrators. 15 Hour Live Virtual Training.',
    heroBannerImage: '/course-banners/kubernetes-administrator-cka.png',
    callToAction: 'Succeed as a Kubernetes administrator',
    highlights: [
      '15 Hour Live Virtual Training',
      'Hands-on labs simulating real-world Kubernetes cluster administration',
      'Curriculum designed to meet official CKA test objectives',
      'Industry-relevant workshops and projects',
      'Expert-led meetings with certified Kubernetes experts',
      'Intensive exam preparation with practice questions and sample examinations'
    ],
    description: {
      whyChooseTitle: 'Why choose Kubernetes Administrator (CKA) Training from InsureTech Skills?',
      overview: 'The goal of CKA training is to make professionals proficient in handling complicated operations in containerised systems, setting security policies, administering Kubernetes clusters, and diagnosing problems. This thorough instruction includes hands-on labs, extensive curriculum covering networking, security, workloads, and cluster deployment, industry-relevant workshops and projects, and expert-led sessions.',
      whyChoose: 'Anyone hoping to become a Kubernetes specialist must enrol in the Certified Kubernetes Administrator (CKA) Training Program. This course provides hands-on learning, which is essential for learning how to manage Kubernetes clusters in practice.',
      keyFeatures: [
        '15 Hour Live Virtual Training',
        'Hands-on labs and real-world scenarios',
        'Covers Kubernetes architecture, workloads, networking, storage, security',
        'Logging, monitoring, and troubleshooting',
        'Exam preparation with practice questions and sample exams'
      ],
      whatYouWillLearn: [
        'Proficiency in Kubernetes fundamentals: architecture and elements including etcd, kube-apiserver, kube-scheduler, kubelet, kube-controller-manager',
        'Efficiency in cluster management: installing, configuring, and overseeing Kubernetes clusters',
        'Workload handling: Deployments, DaemonSets, StatefulSets, Jobs, CronJobs; autoscaling',
        'Networking: Services, DNS, service discovery, Network Policies, CNI plugins',
        'Storage: Persistent Volumes, PVC, StorageClasses',
        'Security: RBAC, security contexts, Secrets management',
        'Logging, monitoring, troubleshooting; cluster maintenance and upgrades'
      ],
      prerequisites: [
        'Basic understanding of containers and Docker is essential',
        'Experience with Linux command lines is helpful but not necessary',
        'High school diploma or college degree',
        'Curious mindset with motivation to learn'
      ],
      whoCanJoin: [
        'Cloud Administrators',
        'Linux Administrators',
        'Software Engineers',
        'System Administrators',
        'Software Developers',
        'DevOps Professionals'
      ],
      distinctness: 'We offer flexible learning options including instructor-led and self-paced training. You must take the CKA Exam (in partnership with the Linux Foundation) to become a Certified Kubernetes Administrator. We provide comprehensive support and simulation exam opportunities to clear the exam successfully on the first attempt.'
    },
    modules: [
      { title: '1. Fundamentals of Kubernetes', topics: ['Architecture', 'Pods', 'Namespaces'] },
      { title: '2. Mastering Kubernetes for Production Environment', topics: ['Cluster installation', 'Configuration', 'Multi-node setup'] },
      { title: '3. Workload Management with Kubernetes', topics: ['Deployments', 'DaemonSets', 'StatefulSets', 'Jobs', 'Autoscaling'] },
      { title: '4. Kubernetes Networking', topics: ['Services', 'DNS', 'Network Policies', 'CNI'] },
      { title: '5. Understanding Storage Objects of Kubernetes', topics: ['PV', 'PVC', 'StorageClasses'] },
      { title: '6. Advanced Orchestration with Kubernetes', topics: ['Scheduling', 'Advanced orchestration'] },
      { title: '7. Security and Troubleshooting Practices', topics: ['RBAC', 'Security', 'Troubleshooting'] },
      { title: '8. Exploring Cloud-Based Kubernetes Solutions', topics: ['EKS', 'AKS', 'GKE'] },
      { title: '9. Preparations for Kubernetes Certification Exam', topics: ['CKA exam', 'Preparation'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Hands-On Labs', icon: '✓', description: 'Hands-on labs simulating real-world Kubernetes administration' },
      { title: 'Expert-Led', icon: '📅', description: 'Expert-led meetings with certified Kubernetes experts' },
      { title: 'Exam Preparation', icon: '🏆', description: 'Intensive exam preparation with practice questions' },
      { title: 'Flexible Learning', icon: '📅', description: 'Instructor-led and self-paced training options' },
      { title: 'Post-Training Support', icon: '📹', description: 'Post-training support and recorded sessions' }
    ],
    faqs: [
      { question: 'Why should I join the Certified Kubernetes Administrator (CKA) Training Program?', answer: 'Anyone hoping to become a Kubernetes specialist must enrol in the Certified Kubernetes Administrator (CKA) Training Program. This course provides hands-on learning, which is essential for learning how to manage Kubernetes clusters in practice.' },
      { question: 'What are the benefits of joining this program?', answer: 'Enrolling in the CKA Training Program offers a number of advantages, such as increased job opportunities, industry recognition, hands-on experience, career advancement, expert guidance, and networking opportunities.' },
      { question: 'How much time does your program take?', answer: 'Our Training program typically lasts 15 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What are the prerequisites?', answer: 'To enrol in this training, you\'ll need a basic understanding of containers and Docker, along with a curious mind and a desire to learn. While experience with Linux command lines is helpful, it\'s not strictly necessary.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You must take the CKA Exam in order to become a Certified Kubernetes Administrator (CKA), in partnership with the Linux Foundation.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide.' },
      { question: 'Do I get post-training support?', answer: 'Yes, you will get all types of support.' },
      { question: 'Do you provide study guides and exam support?', answer: 'Yes, we provide comprehensive support and simulation exam opportunities to clear the exam successfully on the first attempt.' },
      { question: 'Can I access recorded sessions?', answer: 'Yes, you will get it.' }
    ],
    duration: '15 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Kubernetes Administrator (CKA)'
  },

  'certified-cloud-security-professional-training': {
    slug: 'certified-cloud-security-professional-training',
    title: 'Certified Cloud Security Professional Training',
    category: 'IT Security',
    heroDescription: 'Acquire expertise in cybersecurity knowledge and data protection strategies to tackle cloud security risks and challenges confidently. Learn real-world security challenges with well-integrated practical case studies and hands-on lab experiences. Achieve competence in designing, managing, and securing data, applications, and infrastructure. 35 Hour Live Virtual Training in collaboration with (ISC)².',
    heroBannerImage: '/course-banners/ccsp-training.png',
    callToAction: 'Gain proficiency in applying best practices to secure critical assets in the cloud',
    highlights: [
      '35 Hour Live Virtual Training',
      'Flexible schedule; Weekdays/Weekend class availability',
      'Customized training materials',
      'Instant query-solving and doubt-clearing sessions',
      'Blend of theoretical lessons and hands-on lab experiences',
      'Real-life project studies',
      'Industry-recognized and top-notch training professionals'
    ],
    description: {
      whyChooseTitle: 'Why choose Certified Cloud Security Professional (CCSP) Training from InsureTech Skills?',
      overview: 'In the constantly evolving cloud security field, it is crucial to equip you with updated knowledge and skills to manage complex challenges. Our leading training approaches cover comprehensive cloud security concepts to prepare you thoroughly for effectively managing and securing cloud environments. We validate your expertise in mastering the key security tools and techniques and develop your ability to implement and manage resilient cloud infrastructure.',
      whyChoose: 'We help to promote your cloud security knowledge and skills with our structured training approaches. Focusing on critical areas of cloud security principles and practices, our expert-led training will enhance your real-world insights and expertise in effectively securing cloud environments.',
      keyFeatures: [
        '35 Hour Live Virtual Training',
        'Flexible schedule; Weekdays/Weekend class availability',
        'Hands-on lab experiences and real-life project studies',
        'Cloud security concepts, architecture, data security, application security',
        'Legal, risk and compliance; threat modeling; disaster recovery',
        'Exam support to clear (ISC)² CCSP on first attempt'
      ],
      whatYouWillLearn: [
        'Secure software development practices and robust data protection measures',
        'Data encryption, access controls, and identity management',
        'Develop and implement effective incident response plans',
        'Continuous monitoring mechanisms for identifying vulnerabilities',
        'Improving security, reducing data security breaches, ensuring overall business resilience',
        'Legal, risk, and compliance features to avoid potential legal repercussions',
        'Cloud concepts architecture and design; cloud data lifecycle; disaster recovery planning and threat modeling'
      ],
      prerequisites: [
        'Five years of full-time, cumulative, paid working experience in IT, of which three must be in information security and one year in one or more of the six domains of the (ISC)² CCSP Common Body of Knowledge (CBK®)',
        'Failing to fulfill this eligibility criteria requires taking the exam to become an associate of (ISC)² and start working to gain experience and get the desired certification'
      ],
      whoCanJoin: [
        'Information Security Specialists',
        'Cloud Architects',
        'Risk and Compliance Officers',
        'Enterprise Architects',
        'Security Engineers',
        'Security Consultants',
        'Any IT Professionals who want to validate their expertise in the Cloud Security domain'
      ],
      distinctness: 'Our extensive training program on CCSP certification in collaboration with (ISC)² will equip you with the necessary skills to secure data centers, cloud environments, and cloud-based data access. Clear the (ISC)² CCSP exam with our comprehensive support and study guides.'
    },
    modules: [
      { title: '1. Fundamental Ideas of Cloud Computing Concepts', topics: ['Cloud concepts', 'Fundamentals'] },
      { title: '2. Application of Cloud Architecture and Design', topics: ['Architecture', 'Design'] },
      { title: '3. Managing and Implementing Cloud Infrastructure Security', topics: ['Infrastructure security'] },
      { title: '4. Understanding the Cloud Data Lifecycle', topics: ['Data lifecycle'] },
      { title: '5. Different Aspects of Cloud Application Security', topics: ['Application security'] },
      { title: '6. Exploring Vulnerabilities and Risk Management', topics: ['Vulnerabilities', 'Risk management'] },
      { title: '7. Knowledge of Threat Modeling', topics: ['Threat modeling'] },
      { title: '8. Working With Cloud Encryption', topics: ['Encryption'] },
      { title: '9. Identity and Access Management', topics: ['IAM'] },
      { title: '10. Handling of Cloud Security Operations', topics: ['Security operations'] },
      { title: '11. Execution of Risk Management and Analysis', topics: ['Risk management', 'Analysis'] },
      { title: '12. Strategies for Disaster Recovery', topics: ['Disaster recovery'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Instructors', icon: '✓', description: 'Industry-recognized and top-notch training professionals' },
      { title: 'Hands-On Labs', icon: '📅', description: 'Hands-on lab experiences and real-life project studies' },
      { title: 'Flexible Schedule', icon: '🏆', description: '35 hours with Weekdays/Weekend class availability' },
      { title: 'Exam Support', icon: '📅', description: 'Comprehensive support to clear (ISC)² CCSP on first attempt' },
      { title: 'Post-Training Support', icon: '📹', description: 'Post-training support and recorded sessions' }
    ],
    faqs: [
      { question: 'Why should I join the Certified Cloud Security Professional (CCSP) Training program?', answer: 'After completing this training program, you will get promising career opportunities in the cloud security domain.' },
      { question: 'Does this program offer comprehensive insights on cloud security?', answer: 'Yes, in multiple areas it will offer comprehensive insights.' },
      { question: 'Do you provide demo classes?', answer: 'Yes, we provide.' },
      { question: 'What is the duration of this training program?', answer: 'This training program schedule is 35 hours.' },
      { question: 'What are the prerequisites?', answer: 'Five years of full-time, cumulative, paid working experience in IT, of which three must be in information security and one year in one or more of the six domains of the (ISC)² CCSP CBK®. Failing to fulfill this requires taking the exam to become an associate of (ISC)² and gain experience for the desired certification.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we provide.' },
      { question: 'Do you provide post-training support?', answer: 'Yes, you will get it.' },
      { question: 'Which exam do I sit for to obtain this certification?', answer: 'You should clear the (ISC)² CCSP exam to earn this certificate.' },
      { question: 'Do you provide study guides and exam support?', answer: 'Yes, we provide comprehensive support to successfully clear the exam on the first attempt.' },
      { question: 'Can I access recorded sessions?', answer: 'Yes, you will get it.' }
    ],
    duration: '35 Hours',
    mode: 'Online',
    icon: 'security',
    heroSubtitle: 'Certified Cloud Security Professional (CCSP)'
  },

  'salesforce-platform-app-builder-training': {
    slug: 'salesforce-platform-app-builder-training',
    title: 'Salesforce Platform App Builder Training',
    category: 'Salesforce',
    heroDescription: 'Learn the essential features and best practices of Salesforce\'s App Builder. Our training program is designed to equip you with the skills and knowledge needed to design, develop, and deploy custom applications on the Salesforce platform. Covers business process automation, App Builder Methodology, Data Visualization, and more. 15 Hour Live Virtual Training.',
    heroBannerImage: '/course-banners/salesforce-platform-app-builder-training.png',
    callToAction: 'Excel in the Salesforce Certified Platform App Builder exam',
    highlights: [
      '15 Hour Live Virtual Training',
      'Salesforce Object Model, Apex programming',
      'Design, develop, and deploy custom applications',
      'Flexible scheduling and one-on-one lessons',
      '24x7 Learning assistance and support',
      'Industry-based knowledge'
    ],
    description: {
      whyChooseTitle: 'Why choose Salesforce Platform App Builder Training from InsureTech Skills?',
      overview: 'Our Salesforce Platform App Builder training program is designed to equip you with the skills and knowledge needed to design, develop, and deploy custom applications on the Salesforce platform. This comprehensive course covers essential concepts, tools, and best practices for app development, preparing you to excel in the Salesforce Certified Platform App Builder exam.',
      whyChoose: 'The Salesforce Platform App Builder training program offers numerous benefits for aspiring IT professionals. By investing in this program, you can advance your career, develop in-demand skills, earn a valuable certification, and meet the growing demand for Salesforce experts.',
      keyFeatures: [
        '15 Hour Live Virtual Training',
        'Salesforce Object Model and Apex programming',
        'Business process automation and data visualisation',
        'Practical project to test your learnings',
        'Curriculum updated with latest Salesforce features and best practices'
      ],
      whatYouWillLearn: [
        'Gain expertise to become a skilled Salesforce App Builder',
        'Core concepts of Salesforce',
        'Advanced concepts to make you ready for certification',
        'Practical project to test your learnings',
        'Salesforce App Builder and its efficient application'
      ],
      prerequisites: [
        'Basic information about Salesforce Platform',
        'Basic concepts of Cloud Computing',
        'Familiarity with concepts of data management and security principles'
      ],
      whoCanJoin: [
        'Professionals with a Salesforce background',
        'Developers with keen interest in Salesforce',
        'Salesforce Administrators looking for skill advancement'
      ],
      distinctness: 'Our Salesforce Platform App Builder training program is designed to keep you up-to-date with the latest Salesforce features and best practices. We regularly update our curriculum to incorporate new releases and industry trends.'
    },
    modules: [
      { title: '1. Fundamentals to Salesforce and App Builder Mastery', topics: ['Fundamentals', 'App Builder'] },
      { title: '2. Data Architecture and Management', topics: ['Data architecture', 'Management'] },
      { title: '3. User Experience Design and Customization', topics: ['UX', 'Customization'] },
      { title: '4. Business Process Automation and Optimization', topics: ['Automation', 'Optimization'] },
      { title: '5. Security and Access Management', topics: ['Security', 'Access'] },
      { title: '6. App Deployment and Management', topics: ['Deployment', 'Management'] },
      { title: '7. Data Visualization and Reporting', topics: ['Visualization', 'Reporting'] },
      { title: '8. Salesforce Certified App Builder Exam Preparation', topics: ['Exam prep'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced Salesforce trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exposure to projects' },
      { title: 'Live Virtual Training', icon: '🏆', description: '15 Hour Live Virtual Training' },
      { title: '24x7 Support', icon: '📅', description: '24x7 Learning assistance and support' },
      { title: 'Industry Knowledge', icon: '📹', description: 'Industry-based knowledge' }
    ],
    faqs: [
      { question: 'Why should I pursue the Salesforce Platform App Builder Training program?', answer: 'The Salesforce Platform App Builder training program offers numerous benefits for aspiring IT professionals. By investing in this program, you can advance your career, develop in-demand skills, earn a valuable certification, and meet the growing demand for Salesforce experts.' },
      { question: 'What is the duration of your Salesforce Platform App Builder Training program?', answer: 'Our Salesforce Platform App Builder Training program typically lasts 15 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What prerequisites are required for enrollment?', answer: 'While not mandatory, a basic understanding of Salesforce, cloud computing and data management principles can be helpful.' },
      { question: 'How does this course benefit my future career?', answer: 'Our Salesforce App Builder Training Program equips you with the skills to create custom applications, optimise business processes and drive digital transformation. This course can open doors to exciting career opportunities in Salesforce development, consulting and implementation.' },
      { question: 'Does this course update me with recent developments in Salesforce?', answer: 'Absolutely! Our Salesforce Platform App Builder training program is designed to keep you up-to-date with the latest Salesforce features and best practices. We regularly update our curriculum to incorporate new releases and industry trends.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced Salesforce Trainers.' },
      { question: 'Do you provide support after completion?', answer: 'Yes, we offer ongoing support and resources to help you apply your knowledge in real-world scenarios.' }
    ],
    duration: '15 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Salesforce Platform App Builder'
  },

  'salesforce-developer-training': {
    slug: 'salesforce-developer-training',
    title: 'Salesforce Developer Training',
    category: 'Salesforce',
    heroDescription: 'Our thorough Salesforce Developer training curriculum will prepare you to master Salesforce\'s fundamental features and best practices. You\'ll learn in-depth about Apex programming, Visualforce development, Lightning Components, and the Salesforce Object Model. 30 Hour Live Virtual Training with hands-on experience.',
    heroBannerImage: '/course-banners/salesforce-developer-training.png',
    callToAction: 'Advance your career in the dynamic world of Salesforce',
    highlights: [
      '30 Hour Live Virtual Training',
      'Apex programming, Visualforce, Lightning Components',
      'Salesforce Object Model and process automation',
      'Flexible scheduling and one-on-one lessons',
      '24x7 Learning assistance and support',
      'Industry-based knowledge'
    ],
    description: {
      whyChooseTitle: 'Why choose Salesforce Developer Training from InsureTech Skills?',
      overview: 'Our comprehensive Salesforce Developer training curriculum will provide you with the necessary skills for developing, customising, and optimising Salesforce applications. You\'ll discover the complex elements of Apex programming, create dynamic user interfaces with Visualforce and Lightning Components, and understand the Salesforce Object Model. Gain hands-on experience and advance your career in the dynamic world of Salesforce.',
      whyChoose: 'Becoming a Salesforce Developer can open doors to exciting career opportunities in software development, customization, and integration. It equips you with the skills to create custom applications, automate processes, and drive innovation within Salesforce environments.',
      keyFeatures: [
        '30 Hour Live Virtual Training',
        'Apex programming, Visualforce, Lightning Components',
        'Process automation, integration, testing, and deployment',
        'Best practices and industry standards',
        'Curriculum updated with latest Salesforce releases and Lightning Web Components'
      ],
      whatYouWillLearn: [
        'Mastering the Apex programming and building dynamic user interfaces with Visualforce and Lightning interface',
        'Automation as to business processes',
        'Deep understanding about the Salesforce Object Model',
        'Industry standards under Salesforce Developing',
        'Best practices for process automation, integration, testing, and deployment'
      ],
      prerequisites: [
        'Basic knowledge of the Salesforce Platform',
        'Experience with programming concepts',
        'Foundations of object-oriented programming (OOP)'
      ],
      whoCanJoin: [
        'Professionals looking to create custom applications on Salesforce',
        'Developers who are interested in Salesforce development',
        'Salesforce Administrators who want to improve their technical skills'
      ],
      distinctness: 'Our curriculum is regularly updated to align with the latest Salesforce releases, Lightning Web Components, and industry-standard development practices. You\'ll learn about new features, functionalities, and real-world applications.'
    },
    modules: [
      { title: '1. Salesforce Platform Fundamentals', topics: ['Platform fundamentals'] },
      { title: '2. Apex Programming Essentials', topics: ['Apex', 'Programming'] },
      { title: '3. Building Dynamic UIs with Visualforce', topics: ['Visualforce', 'UIs'] },
      { title: '4. The Power of Lightning Components', topics: ['Lightning Components'] },
      { title: '5. Navigating Salesforce Object Model', topics: ['Object Model'] },
      { title: '6. Automating Your Business with Processes and Integrations', topics: ['Automation', 'Integrations'] },
      { title: '7. Ensuring Quality with Testing and Debugging', topics: ['Testing', 'Debugging'] },
      { title: '8. Deploying and Managing Your Salesforce Application', topics: ['Deployment', 'Management'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced Salesforce developers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exposure to projects' },
      { title: 'Live Virtual Training', icon: '🏆', description: '30 Hour Live Virtual Training' },
      { title: '24x7 Support', icon: '📅', description: '24x7 Learning assistance and support' },
      { title: 'Industry Knowledge', icon: '📹', description: 'Industry-based knowledge' }
    ],
    faqs: [
      { question: 'Why should I pursue the Salesforce Developer training program?', answer: 'Becoming a Salesforce Developer can open doors to exciting career opportunities in software development, customization, and integration. It equips you with the skills to create custom applications, automate processes, and drive innovation within Salesforce environments.' },
      { question: 'What is the duration of your Salesforce Developer training program?', answer: 'Our Salesforce Developer training program typically lasts 30 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What prerequisites are required for enrollment?', answer: 'While no prior Salesforce experience is necessary, a basic understanding of programming concepts (e.g., object-oriented programming) and a familiarity with web development technologies can be beneficial.' },
      { question: 'How does this course benefit my future career?', answer: 'The Salesforce Developer certification can lead to lucrative career paths in software development, consulting, and Salesforce implementation. It demonstrates your ability to create custom solutions, optimise processes, and drive digital transformation within organisations.' },
      { question: 'Does this course update me with recent developments in Salesforce?', answer: 'Absolutely! Our curriculum is regularly updated to align with the latest Salesforce releases, Lightning Web Components, and industry-standard development practices.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced Salesforce developers.' },
      { question: 'Do you provide support after completion?', answer: 'Yes, we offer ongoing support and resources to help you apply your knowledge and skills in real-world scenarios.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Salesforce Developer'
  },

  'salesforce-administrator-training': {
    slug: 'salesforce-administrator-training',
    title: 'Salesforce Administrator Training',
    category: 'Salesforce',
    heroDescription: 'Gain a deep understanding about Salesforce\'s core features and best practices. Equip yourself with essential skills to efficiently configure, manage and optimise Salesforce for any organisation. Our comprehensive curriculum covers customising the platform, managing users, optimising processes, and troubleshooting common issues. 15 Hour Live Virtual Training.',
    heroBannerImage: '/course-banners/salesforce-administrator-training.png',
    callToAction: 'Contribute to your organisation\'s success as a Salesforce Administrator',
    highlights: [
      '15 Hour Live Virtual Training',
      'Customise the platform to meet specific business needs',
      'User Management, workflows, process efficiency',
      'Flexible scheduling and one-on-one lessons',
      'Industry-based knowledge'
    ],
    description: {
      whyChooseTitle: 'Why choose Salesforce Administrator Training from InsureTech Skills?',
      overview: 'Our Salesforce Administrator training course offers a comprehensive curriculum designed to equip you with the essential skills to effectively manage and configure Salesforce environments. You\'ll learn how to customise the platform, manage users, optimise processes, and troubleshoot common issues. Through hands-on exercises and expert guidance, you\'ll gain a deep understanding of Salesforce\'s core features and best practices.',
      whyChoose: 'Becoming a Salesforce Administrator can significantly enhance your career prospects. It equips you with the skills to manage and configure Salesforce environments, optimise processes, and support your organisation\'s goals.',
      keyFeatures: [
        '15 Hour Live Virtual Training',
        'Platform customisation, user management',
        'Data security, access control, reports and dashboards',
        'Workflows, automation, Mobile and AppExchange',
        'Curriculum updated with latest Salesforce releases and best practices'
      ],
      whatYouWillLearn: [
        'How to customise the platform to meet specific business needs',
        'The art of User Management',
        'Streamlining workflows and improving process efficiency',
        'Diagnosing and resolving common Salesforce issues',
        'Recommended Salesforce practices for optimal performance'
      ],
      prerequisites: [
        'No prior knowledge is required',
        'Basic understanding of CRM fundamentals can help you get the most out of our training',
        'Knowledge with business processes and fundamental computer abilities will serve as a solid foundation'
      ],
      whoCanJoin: [
        'System administrators',
        'IT specialists',
        'Sales operations managers',
        'Business analysts',
        'Anyone looking to enhance their Salesforce admin skills'
      ],
      distinctness: 'Our curriculum is regularly updated to align with the latest Salesforce releases and industry best practices. You\'ll learn about new features, functionalities, and real-world applications.'
    },
    modules: [
      { title: '1. Salesforce Fundamentals', topics: ['Fundamentals'] },
      { title: '2. Setting Up Your Salesforce Organization', topics: ['Setup', 'Organization'] },
      { title: '3. Understanding the Salesforce Data Model', topics: ['Data model'] },
      { title: '4. Ensuring Data Security and Access Control', topics: ['Security', 'Access control'] },
      { title: '5. Building with Standard and Custom Objects', topics: ['Objects'] },
      { title: '6. Sales and Marketing Automation', topics: ['Sales', 'Marketing automation'] },
      { title: '7. Providing Exceptional Customer Support', topics: ['Customer support'] },
      { title: '8. Managing Activities and Collaboration', topics: ['Activities', 'Collaboration'] },
      { title: '9. Maintaining Data Quality and Integrity', topics: ['Data quality'] },
      { title: '10. Visualizing Data with Reports and Dashboards', topics: ['Reports', 'Dashboards'] },
      { title: '11. Automating Processes with Workflows', topics: ['Workflows'] },
      { title: '12. Leveraging Mobile and AppExchange Solutions', topics: ['Mobile', 'AppExchange'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced instructors.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exposure to projects' },
      { title: 'Live Virtual Training', icon: '🏆', description: '15 Hour Live Virtual Training' },
      { title: 'Industry Knowledge', icon: '📅', description: 'Industry-based knowledge' },
      { title: 'Ongoing Support', icon: '📹', description: 'Ongoing support and resources after completion' }
    ],
    faqs: [
      { question: 'Why should I pursue the Salesforce Administrator training program?', answer: 'Becoming a Salesforce Administrator can significantly enhance your career prospects. It equips you with the skills to manage and configure Salesforce environments, optimise processes, and support your organisation\'s goals.' },
      { question: 'What is the duration of your Salesforce Administrator training program?', answer: 'Our Salesforce Administrator training program typically lasts 15 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What prerequisites are required for enrollment?', answer: 'While no prior Salesforce experience is necessary, a basic understanding of CRM concepts and a familiarity with business processes can be beneficial. A keen interest in learning and adapting to new technologies is essential.' },
      { question: 'How does this course benefit my future career?', answer: 'The Salesforce Administrator certification can open doors to exciting career opportunities in sales operations, customer service, and IT. It demonstrates your ability to leverage Salesforce to drive efficiency, improve customer satisfaction, and support business growth.' },
      { question: 'Does this course update me with recent developments in Salesforce?', answer: 'Absolutely! Our curriculum is regularly updated to align with the latest Salesforce releases and industry best practices.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced instructors.' },
      { question: 'Do you provide support after completion?', answer: 'Yes, we offer ongoing support and resources. You can access additional learning materials, join our community forums, and receive assistance with any questions or challenges you may encounter.' }
    ],
    duration: '15 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Salesforce Administrator'
  },

  'react-js-training': {
    slug: 'react-js-training',
    title: 'React Js Training',
    category: 'Web Development',
    heroDescription: 'Modern Web Development waiting to be explored! React, a popular JavaScript library, offers a component-based approach that simplifies development and enhances performance. This training program will advance your learning in building dynamic and interactive web applications and make you become a proficient React developer. 15 Hour Live Virtual Training with hands-on exercises and real-world projects.',
    heroBannerImage: '/course-banners/react-js-training.png',
    callToAction: 'Excel in the world of React Development',
    highlights: [
      '15 Hour Live Virtual Training',
      'Component-based approach, state management, JSX, routing',
      'Hands-on exercises and real-world projects',
      'Latest React trends and technologies',
      'Flexible scheduling and one-on-one lessons',
      '24x7 Learning assistance and support'
    ],
    description: {
      whyChooseTitle: 'Why choose React Js Training from InsureTech Skills?',
      overview: 'This training program is designed to advance your learning in building dynamic and interactive web applications and make you become a proficient React developer. Through hands-on exercises and real-world projects, you\'ll gain practical experience and apply your knowledge to build dynamic and interactive web applications. Our program will also keep you up-to-date with the latest React trends and technologies.',
      whyChoose: 'React JS training program will equip you with the skills and knowledge needed to succeed in the dynamic world of web development, opening doors to exciting career opportunities and personal growth.',
      keyFeatures: [
        '15 Hour Live Virtual Training',
        'Core concepts: components, state management, props, JSX, routing, forms, testing',
        'Hands-on exercises and real-world projects',
        'Latest React trends and technologies',
        'Redux, React Router, Webpack'
      ],
      whatYouWillLearn: [
        'Building dynamic and interactive websites',
        'Understand how to break down complex application',
        'Effectively managing state and data flow',
        'Create efficient React applications',
        'Stay up-to-date with the latest React trends',
        'Core concepts of React including components, state management, props, JSX, routing, forms, testing, and best practices'
      ],
      prerequisites: [
        'Fundamentals of HTML and CSS',
        'Practical knowledge related to JavaScript (Intermediate Level)'
      ],
      whoCanJoin: [
        'Web Developers and Mobile Developers',
        'Learners waiting to gain skill in building mobile apps using React',
        'Anyone who wants to add a new skill to their learning'
      ],
      distinctness: 'Our React JS training program is designed to keep you up-to-date with the latest practices and technologies. With these skills, you\'ll be well-prepared to contribute to a wide range of web development projects and advance your career in the field.'
    },
    modules: [
      { title: '1. JavaScript Fundamentals', topics: ['JavaScript', 'Fundamentals'] },
      { title: '2. What is React?', topics: ['React intro'] },
      { title: '3. Building Dynamics UIs with JSX', topics: ['JSX', 'UIs'] },
      { title: '4. Components in React', topics: ['Components'] },
      { title: '5. Props and State: The Dynamic Duo of React', topics: ['Props', 'State'] },
      { title: '6. Making your React Apps Interactive', topics: ['Interactivity'] },
      { title: '7. Building Powerful Forms with React', topics: ['Forms'] },
      { title: '8. Navigating your React App with React Router', topics: ['React Router'] },
      { title: '9. The Power of Redux and Immutable.js', topics: ['Redux', 'Immutable.js'] },
      { title: '10. Mastering React Redux', topics: ['React Redux'] },
      { title: '11. Enhancing Redux with Middleware', topics: ['Middleware'] },
      { title: '12. Testing React Components', topics: ['Testing'] },
      { title: '13. Exploring the New Features of React 16', topics: ['React 16 features'] },
      { title: '14. Understanding Webpack and Isomorphic React', topics: ['Webpack', 'Isomorphic React'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Expert Learning Model', icon: '✓', description: 'Learning model by our experts' },
      { title: 'Practical Exposure', icon: '📅', description: 'Practical exposure to projects' },
      { title: 'Live Virtual Training', icon: '🏆', description: '15 Hour Live Virtual Training' },
      { title: '24x7 Support', icon: '📅', description: '24x7 Learning assistance and support' },
      { title: 'Industry Knowledge', icon: '📹', description: 'Industry-based knowledge' }
    ],
    faqs: [
      { question: 'Why should I pursue the React JS Training program?', answer: 'React JS training program will equip you with the skills and knowledge needed to succeed in the dynamic world of web development, opening doors to exciting career opportunities and personal growth.' },
      { question: 'What is the duration of your React JS Training program?', answer: 'Our React JS Training program typically lasts 15 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What prerequisites are required for enrollment?', answer: 'While not mandatory, a basic understanding of HTML and CSS along with practical knowledge related to JavaScript at intermediate level will be great.' },
      { question: 'How does this course benefit my future career?', answer: 'By choosing our React JS training program, you\'ll be investing in your future and setting yourself up for success in the dynamic world of web development.' },
      { question: 'Does this course update me with the recent practices?', answer: 'Yes, our React JS training program is designed to keep you up-to-date with the latest practices and technologies.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced trainers.' },
      { question: 'Do you provide support after completion?', answer: 'Yes, we offer ongoing support and resources. You can access additional learning materials, join our community forums, and receive assistance with any questions or challenges you may encounter.' }
    ],
    duration: '15 Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'React Js'
  },

  'full-stack-web-development-mern-genai-2026': {
    slug: 'full-stack-web-development-mern-genai-2026',
    title: 'Full-Stack Web Development (MERN + GenAI 2026)',
    category: 'Web Development',
    heroDescription:
      'A comprehensive roadmap to becoming a modern full-stack developer. This programme blends the MERN stack (MongoDB, Express, React, Node.js) with Generative AI and Cursor AI so you can build, secure, and deploy high-performance applications—the way teams ship in 2026.',
    heroBannerImage: '/course-banners/react-js-training.png',
    callToAction: 'Start building with MERN + GenAI',
    highlights: [
      'COURSE SYLLABUS: FULL-STACK WEB DEVELOPMENT (MERN + GENAI 2026)',
      'Lead Trainer: Moksh Sarda · 90+ Hours of On-Demand Content',
      'Technical Stack: MongoDB, Express, React, Node.js, Cursor AI, GenAI',
      '10x productivity toolkit: Cursor AI, ChatGPT, Claude, MERN, Stripe, Cloudinary, Git/GitHub',
      '15+ hands-on projects including AI SaaS, MERN tracker, blog CMS, auth app, task manager',
      'Certificate of Completion · portfolio-ready cloud-hosted projects'
    ],
    description: {
      whyChooseTitle: 'Why choose Full-Stack Web Development (MERN + GenAI 2026) from InsureTech Skills?',
      overview:
        'COURSE SYLLABUS: FULL-STACK WEB DEVELOPMENT (MERN + GENAI 2026)\nLead Trainer: Moksh Sarda\nCourse Duration: 90+ Hours of On-Demand Content\nTechnical Stack: MongoDB, Express, React, Node.js, Cursor AI, GenAI',
      whyChoose:
        'You learn full-stack delivery end-to-end—modern React UI, secure Express APIs, MongoDB data modeling, and GenAI-assisted development with Cursor—so you can ship real features faster while keeping security and scalability in focus.',
      keyFeatures: [
        'AI Power Tools: Cursor AI (The AI-first Code Editor), ChatGPT & Claude (Prompt Engineering)',
        'Frontend: React.js, Redux Toolkit, React Query, HTML5, CSS3, Bootstrap 5',
        'Backend & Logic: Node.js, Express.js, JavaScript (ES6+)',
        'Database & Storage: MongoDB, Mongoose (Data Modeling), Cloudinary (Media)',
        'DevOps & Services: Git/GitHub, Stripe (Payments), Postman, Geolocation APIs',
        '15+ capstone projects: AI SAAS (ChatGPT API & Stripe), MERN income/expense tracker, blog CMS, auth app, task manager'
      ],
      whatYouWillLearn: [
        'GenAI & Cursor: prompts for code generation, debugging, refactoring; AI-pair programming with Cursor (The AI-first Code Editor)',
        'Frontend: ES6+, React (components, props, state, hooks), responsive UI with Flexbox/Grid and Bootstrap 5',
        'Backend: Node.js/Express, REST APIs, JWT & password hashing, Multer & Cloudinary file uploads',
        'Database: MongoDB & Mongoose—document storage, schemas, validation, indexing',
        'DevOps & integrations: Git/GitHub, Stripe, Postman, Geolocation APIs',
        'Capstone-style delivery: AI SAAS, MERN income/expense tracker, full-stack blog, auth portal, task manager',
        'Final outcome: Certificate of Completion in Full-Stack Development; 15+ live cloud projects; 2026 AI tooling for software engineering'
      ],
      prerequisites: [
        'Comfort with basic computer literacy and willingness to learn in a fast-paced, project-driven format',
        'Familiarity with HTML/CSS basics is helpful',
        'No prior MERN experience required—we build from fundamentals to production-style apps'
      ],
      whoCanJoin: [
        'Aspiring full-stack developers building a MERN + GenAI portfolio',
        'Frontend or backend developers leveling up to end-to-end ownership',
        'Career switchers and graduates targeting modern web engineering roles',
        'Teams upskilling on MERN, APIs, MongoDB, and AI-assisted development'
      ],
      distinctness:
        'Strategic benefits — For the Company (ROI & Efficiency): 10X Faster Delivery using Cursor AI and Prompting (features in 2 days vs 2 weeks); Enhanced Security via Auth & Data Encryption; Scalable Architecture with Node.js and MongoDB. For the Trainee (Skill Mastery): Full-Stack Independence (UI + logic/database); AI Literacy with 2026 tools; Clean Code Standards for folder structure and documentation.'
    },
    modules: [
      {
        title: '1. COURSE OVERVIEW & VISION',
        topics: [
          'This program is a comprehensive roadmap to becoming a modern Full-Stack Developer. In 2026, coding alone is not enough; this course integrates Generative AI to accelerate the development lifecycle. Trainees will learn to build, secure, and deploy high-performance applications using the industry-standard MERN stack.'
        ]
      },
      {
        title: '2. THE MODERN DEVELOPER’S TOOLKIT',
        topics: [
          'We will master the following tools to ensure 10x productivity:',
          'AI Power Tools: Cursor AI (The AI-first Code Editor), ChatGPT & Claude (Prompt Engineering).',
          'Frontend Technologies: React.js, Redux Toolkit, React Query, HTML5, CSS3, Bootstrap 5.',
          'Backend & Logic: Node.js, Express.js, JavaScript (ES6+).',
          'Database & Storage: MongoDB, Mongoose (Data Modeling), Cloudinary (Media).',
          'DevOps & Services: Git/GitHub, Stripe (Payments), Postman, Geolocation APIs.'
        ]
      },
      {
        title: 'Module 1: The AI-First Developer (Generative AI)',
        topics: [
          'Introduction to GenAI: Understanding how AI is transforming programming.',
          'Prompt Engineering for Developers: Learning to write prompts for code generation, debugging, and refactoring.',
          'Cursor AI Mastery: Using the world’s leading AI IDE to build projects faster.',
          'Project: Building an AI Content Detector using AI-pair programming.'
        ]
      },
      {
        title: 'Module 2: Frontend Excellence (React & Responsive UI)',
        topics: [
          'Modern JavaScript: ES6+ Syntax, DOM Manipulation, and Asynchronous JS.',
          'React Basics to Pro: Components, Props, State Management, and Hooks (useState, useEffect).',
          'Advanced UI: Responsive Design using Flexbox/Grid and Bootstrap 5.',
          'Project: Building a Professional React Portfolio and an Image Gallery App.'
        ]
      },
      {
        title: 'Module 3: Backend Engineering & API Design (Node.js/Express)',
        topics: [
          'Server Setup: Understanding the Node.js runtime and Express middleware.',
          'RESTful APIs: Designing scalable endpoints for data retrieval and submission.',
          'Security: Mastering Authentication & Authorization (JWT & Password Hashing).',
          'File Management: Master file uploads using Multer & Cloudinary.',
          'Project: Developing an Employees Database API.'
        ]
      },
      {
        title: 'Module 4: Database Intelligence (MongoDB)',
        topics: [
          'NoSQL Fundamentals: Understanding document-based storage.',
          'Data Modeling: Designing complex schemas with Mongoose.',
          'Advanced Logic: Error handling, data validation, and indexing for speed.'
        ]
      },
      {
        title: '4. MAJOR CAPSTONE PROJECTS',
        topics: [
          'The course is 100% hands-on, featuring 15+ projects, including:',
          'AI SAAS Application: A full-scale project using ChatGPT API & Stripe Payments.',
          'Income & Expenses Tracker: A financial management tool built with the MERN stack.',
          'Full-Stack Blog App: A content management system with image uploads.',
          'Real-World Authentication App: A secure portal built from scratch.',
          'Task Manager: A productivity tool using LocalStorage and Backend sync.'
        ]
      },
      {
        title: '5. STRATEGIC BENEFITS',
        topics: [
          'For the Company (ROI & Efficiency)',
          '10X Faster Delivery: By utilizing Cursor AI and Prompting, the team can deliver features in 2 days that previously took 2 weeks.',
          'Enhanced Security: Direct training on Auth & Data Encryption protects company and client data.',
          'Scalable Architecture: Using Node.js and MongoDB ensures the company’s platforms can scale to millions of users.',
          'For the Trainee (Skill Mastery)',
          'Full-Stack Independence: Ability to handle both the UI (Frontend) and the Logic/Database (Backend).',
          'AI Literacy: Mastering the tools of 2026, making the developer future-proof.',
          'Clean Code Standards: Learning industry best practices for folder structure and documentation.'
        ]
      },
      {
        title: '6. FINAL OUTCOME',
        topics: [
          'By the end of this training, the participant will have:',
          'A Certificate of Completion in Full-Stack Development.',
          'A portfolio of 15+ live projects hosted on the cloud.',
          'Expertise in the latest 2026 AI tools for software engineering.'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced trainers.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      {
        title: '10X Faster Delivery (Company)',
        icon: '✓',
        description: 'Cursor AI & Prompting—deliver in 2 days what used to take 2 weeks.'
      },
      {
        title: 'Enhanced Security (Company)',
        icon: '🔒',
        description: 'Auth & Data Encryption training to protect company and client data.'
      },
      {
        title: 'Scalable Architecture (Company)',
        icon: '📈',
        description: 'Node.js and MongoDB platforms that can scale to millions of users.'
      },
      {
        title: 'Full-Stack Independence (Trainee)',
        icon: '🧩',
        description: 'UI (Frontend) plus Logic/Database (Backend) in one skill set.'
      },
      {
        title: 'AI Literacy & Clean Code (Trainee)',
        icon: '🤖',
        description: '2026-ready tools and industry folder/documentation standards.'
      }
    ],
    faqs: [
      {
        question: 'What is the duration and format?',
        answer:
          'The programme includes 90+ hours of on-demand content, organized into guided modules, labs, and portfolio projects. Delivery options include online and tailored corporate batches.'
      },
      {
        question: 'Who is the lead trainer?',
        answer: 'The lead trainer for this programme is Moksh Sarda.'
      },
      {
        question: 'What stack and tools are covered?',
        answer:
          'MongoDB, Express, React, Node.js (MERN), plus Cursor AI and Generative AI workflows (ChatGPT & Claude), Git/GitHub, Postman, Stripe, Cloudinary, and related services.'
      },
      {
        question: 'What will I build?',
        answer:
          'The course is 100% hands-on with 15+ projects, including: an AI SAAS Application (ChatGPT API & Stripe Payments); an Income & Expenses Tracker (MERN); a Full-Stack Blog App (CMS with image uploads); a Real-World Authentication App; and a Task Manager (LocalStorage and backend sync).'
      },
      {
        question: 'What outcomes can I expect?',
        answer:
          'By the end, you should be able to ship full-stack MERN applications with GenAI-assisted workflows, present a strong cloud-hosted portfolio, and apply modern security and data modeling practices.'
      }
    ],
    duration: '90+ Hours',
    mode: 'On-Demand',
    icon: 'devops',
    heroSubtitle: 'MERN + GenAI'
  },

  'microsoft-fabric-analytics-engineer-associate-dp-600': {
    slug: 'microsoft-fabric-analytics-engineer-associate-dp-600',
    title: 'DP 600 Microsoft Fabric Training',
    category: 'Data Engineering',
    heroDescription:
      'This programme provides deep, hands-on expertise across the entire Microsoft Fabric platform. Microsoft\'s unified analytics solution is built on OneLake. You will design and implement lakehouses, build end-to-end data pipelines, create enterprise semantic models, work with KQL-based real-time analytics, and apply data governance using Microsoft Purview. Every module is aligned to the DP-600 examination and reinforced with guided lab exercises in a real Fabric workspace.',
    heroBannerImage: '/course-banners/microsoft-fabric-analytics-engineer-associate.png',
    callToAction: 'Request Callback',
    highlights: [
      'DP-600 aligned curriculum with guided lab exercises',
      'Lakehouse design with Delta Lake + shortcuts',
      'End-to-end data pipelines and orchestration',
      'Enterprise semantic modeling for analytics readiness',
      'Real-time analytics with EventStream and KQL',
      'Governance and compliance using Microsoft Purview'
    ],
    description: {
      whyChooseTitle: 'Why choose Microsoft Fabric DP-600 Training from InsureTech Skills?',
      overview:
        'Gain deep, practical expertise across the Microsoft Fabric platform through an end-to-end programme aligned to the DP-600 exam. Build lakehouses on OneLake, create enterprise semantic models, develop KQL-based real-time analytics, and apply governance with Microsoft Purview in hands-on labs inside a real Fabric workspace.',
      whyChoose:
        'You\'ll learn how all Fabric components work together as a unified analytics platform. The training is designed to be exam-ready and job-ready, with structured modules, guided lab exercises, and real-world scenarios that mirror how analytics engineers deliver solutions in enterprises. You will also develop practical governance habits using Microsoft Purview, including data lineage and security best practices.',
      keyFeatures: [
        'Hands-on Fabric labs in a real workspace',
        'OneLake + lakehouse development with Delta Lake',
        'KQL real-time analytics and dashboard concepts',
        'Purview governance, lineage, and security foundations'
      ],
      whatYouWillLearn: [
        'Design and implement lakehouses across OneLake',
        'Ingest and manage data using Delta Lake concepts and patterns',
        'Build end-to-end data pipelines and orchestrate workloads',
        'Create enterprise semantic models aligned for analytics consumption',
        'Develop KQL-based real-time analytics using EventStream',
        'Apply data governance using Microsoft Purview (lineage and controls)',
        'Understand Fabric workspaces, capacities, licensing tiers, and role-based access fundamentals',
        'Apply best practices that prepare you for DP-600 exam success'
      ],
      prerequisites: [
        'Familiarity with Power BI or Azure Data services is beneficial but not mandatory',
        'Basic to intermediate understanding of SQL and data warehousing concepts',
        'Working knowledge of Python for data engineering and transformation tasks',
        'General awareness of cloud analytics platforms and pipeline concepts'
      ],
      whoCanJoin: [
        'Analytics Engineers — building semantic models and integrated analytics solutions within the Microsoft Fabric ecosystem',
        'Data Engineers — designing lakehouse-based data pipelines and end-to-end data flows using Fabric\'s unified platform',
        'BI Developers — extending Power BI expertise into the full Microsoft Fabric analytics and data engineering stack',
        'Data Architects — designing enterprise-scale, cloud-native analytics architectures built on Microsoft Fabric and OneLake',
        'Azure Practitioners — migrating existing Azure Synapse, ADF, and Power BI workloads into the unified Fabric platform',
        'IT Professionals — transitioning into modern analytics engineering roles with a recognised Microsoft certification'
      ],
      distinctness:
        'A unified Fabric programme aligned to DP-600, focused on building lakehouses, orchestrating pipelines, creating semantic models, delivering KQL real-time analytics, and implementing Purview governance. You leave with practical, exam-ready experience gained through guided labs.'
    },
    modules: [
      {
        title: '1. Introduction to Microsoft Fabric',
        topics: [
          'Platform architecture and how Fabric components connect',
          'OneLake overview and unified storage concepts',
          'Workspaces, capacities, and licensing tiers',
          'Role-based access fundamentals and governance basics'
        ]
      },
      {
        title: '2. Data Engineering with Lakehouses',
        topics: [
          'Creating and managing lakehouses on Fabric',
          'Ingesting data from multiple sources',
          'Delta Lake format and lakehouse capabilities',
          'Shortcuts and how they help organize data',
          'Spark notebook development patterns'
        ]
      },
      {
        title: '3. Data Factory & Pipeline Orchestration',
        topics: [
          'Building data pipelines in Fabric',
          'Copy Activity configuration',
          'Dataflows Gen2 concepts and typical usage',
          'Scheduling strategies and pipeline orchestration',
          'Monitoring pipeline health and operational checks'
        ]
      },
      {
        title: '4. Data Warehouse in Microsoft Fabric',
        topics: [
          'SQL analytics endpoints and T-SQL development',
          'Warehouse schema design approaches',
          'Cross-database query patterns',
          'Warehouse security considerations'
        ]
      },
      {
        title: '5. Semantic Models & Power BI Integration',
        topics: [
          'Building and publishing semantic models',
          'DAX measures and calculated columns concepts',
          'Relationships and modeling best practices',
          'Integrating semantic models with Power BI reports'
        ]
      },
      {
        title: '6. Real-Time Analytics with KQL',
        topics: [
          'EventStream configuration and ingestion concepts',
          'KQL Database creation',
          'Kusto Query Language (KQL) fundamentals',
          'Real-time dashboards and alert configuration'
        ]
      },
      {
        title: '7. Data Science in Microsoft Fabric',
        topics: [
          'ML experiments using MLflow concepts',
          'Model training with notebooks',
          'SynapseML integration overview',
          'AI skills for data enrichment'
        ]
      },
      {
        title: '8. Security, Governance & Compliance',
        topics: [
          'Microsoft Purview integration for governance',
          'Row-level and column-level security concepts',
          'Sensitivity labels and compliance foundations',
          'Data lineage and workspace-level governance'
        ]
      },
      {
        title: '9. Performance Optimisation & Best Practices',
        topics: [
          'Delta table optimization techniques',
          'V-Order and partitioning strategies',
          'Query plan analysis basics',
          'Fabric capacity management fundamentals'
        ]
      },
      {
        title: '10. Exam Preparation & Mock Tests',
        topics: [
          'Full-length DP-600 practice papers',
          'Topic-by-topic review strategy',
          'Exam strategy guidance and time management',
          'Walkthroughs of official Microsoft documentation'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Dedicated one-to-one Fabric training with customized pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Instructor-led online batches with guided lab exercises.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate Fabric training for teams and enterprise workflows.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Unified Modern Analytics Platform', icon: '✓', description: 'End-to-end proficiency across data engineering, warehousing, real-time analytics, BI, and data science on Microsoft Fabric.' },
      { title: 'Globally Recognised Certification', icon: '📜', description: 'DP-600 validates analytics engineering on Fabric — a credential that signals job readiness to employers.' },
      { title: 'Hands-On Fabric Labs', icon: '🧪', description: 'Guided exercises in a real Fabric workspace: lakehouses, pipelines, semantic models, and real-time data.' },
      { title: 'High Demand, Strong Differentiation', icon: '📈', description: 'Fabric adoption is accelerating; certified professionals remain in short supply relative to demand.' },
      { title: 'Full Modern Data Stack', icon: '🗂️', description: 'One programme for warehousing, pipelines, BI, streaming, and governance — holistically on OneLake.' },
      { title: 'Career Progression', icon: '🚀', description: 'Position for Analytics Engineer, Senior Data Engineer, and Data Platform Architect roles with competitive compensation.' },
      { title: 'Governance & Compliance', icon: '🛡️', description: 'Enterprise-grade governance with Microsoft Purview — valued in regulated industries.' },
      { title: 'Immediate Business Impact', icon: '💼', description: 'Skills from semantic models to real-time dashboards you can apply from day one.' }
    ],
    faqs: [
      {
        question: 'Is prior Power BI or Azure experience required to enrol?',
        answer: 'No prior Power BI or Azure experience is mandatory. The programme covers all Microsoft Fabric components comprehensively from the ground up. Familiarity with SQL and basic cloud concepts will help you progress more quickly.'
      },
      {
        question: 'Will I receive access to recorded sessions?',
        answer: 'Yes. All enrolled students receive lifetime access to recorded class sessions, enabling flexible revision at any time after the live training concludes.'
      },
      {
        question: 'Is the Microsoft DP-600 exam fee included in the course fee?',
        answer: 'The training fee covers all instruction, lab environments, and exam preparation materials. The official Microsoft DP-600 examination fee is paid separately at the time of scheduling via the Microsoft Certification portal.'
      },
      {
        question: 'How quickly can I complete the certification?',
        answer: 'Most students complete the training within 4 to 6 weeks and are fully prepared for the DP-600 examination shortly thereafter. The timeline may vary based on prior experience and the chosen learning mode.'
      },
      {
        question: 'What roles can I target after earning the DP-600 certification?',
        answer: 'Certified graduates are well-positioned for Analytics Engineer, Data Engineer (Fabric), BI Architect, Data Platform Engineer, and Microsoft Fabric Consultant roles across enterprise and cloud-native organisations.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. We offer fully customized corporate training programs tailored to your organisation’s current tools, team skill levels, and business goals. Please contact us for a personalised proposal and team pricing.'
      }
    ],
    duration: '4 to 6 Weeks',
    mode: 'Online',
    icon: 'fabric',
    heroSubtitle: 'DP-600'
  },
  'aws-certified-machine-learning-engineer-associate-mlc01': {
    slug: 'aws-certified-machine-learning-engineer-associate-mlc01',
    title: 'AWS Certified Machine Learning Engineer Associate (MLA-C01)',
    category: 'Data Engineering',
    heroDescription:
      'AWS Certified Machine Learning Engineer Associate (MLA-C01). A rigorous, hands-on training programme that prepares you to design, build, train, deploy, and optimise machine learning workloads on Amazon Web Services — fully aligned to the MLA-C01 examination and real-world ML engineering practices. Through live instruction and hands-on Amazon SageMaker labs, you will ingest and prepare data, build and tune models, deploy scalable ML pipelines, monitor production workloads, and integrate generative AI using Amazon Bedrock — all within the AWS cloud ecosystem. Duration: 30–35 Hours. Exam: MLA-C01. Mode: Live Online / 1-to-1 / Corporate. Level: Intermediate to Advanced.',
    heroBannerImage: '/course-banners/aws-solutions-architect.png',
    callToAction: 'Request Callback',
    highlights: [
      'MLA-C01 aligned end-to-end ML engineering syllabus',
      'Amazon SageMaker labs for training and deployment',
      'Hyperparameter tuning and experiment tracking',
      'MLOps pipeline automation and CI/CD for ML',
      'Monitoring, security, and compliance for production ML',
      'Generative AI on AWS with Bedrock (prompt + RAG)'
    ],
    description: {
      whyChooseTitle: 'Why choose AWS MLA-C01 Training from InsureTech Skills?',
      overview:
        'This programme covers the complete MLA-C01 examination syllabus and equips you with the practical skills required for ML engineering roles on AWS. You will learn to ingest and prepare data, build and tune models, deploy scalable ML pipelines, monitor production workloads, and integrate generative AI using Amazon Bedrock through live instruction and hands-on Amazon SageMaker labs.',
      whyChoose:
        'You graduate with skills that span the full ML lifecycle: from data ingestion and feature engineering to model training, deployment, MLOps automation, and production monitoring. The training is designed to be exam-ready and job-ready by mirroring how ML engineers operationalize machine learning systems in AWS environments, including security and compliance fundamentals.',
      keyFeatures: [
        'Certification: AWS Certified Machine Learning Engineer Associate (MLA-C01)',
        'Training duration: 30–35 Hours of live, instructor-led content',
        'Hands-on labs: real SageMaker environment exercises in every module',
        'Session recordings: lifetime access to all recorded class sessions',
        'Mock examinations: full-length MLA-C01 practice papers with answer walkthroughs',
        '1-on-1 mentoring: dedicated doubt-clearing with certified AWS ML professionals',
        'Flexible scheduling: weekday, weekend, and self-paced options',
        'Post-training support: resume building, LinkedIn optimisation, and career guidance',
        'Corporate training: fully customised enterprise batches for teams of any size'
      ],
      whatYouWillLearn: [
        'Understand ML foundations and AWS shared responsibility for ML workloads',
        'Ingest and prepare data using S3, AWS Glue, Kinesis, and DynamoDB',
        'Perform Exploratory Data Analysis (EDA) with Athena, EMR, and Apache Spark',
        'Build feature engineering workflows using SageMaker Feature Store',
        'Train and select models using SageMaker algorithms, containers, and distributed training',
        'Apply hyperparameter tuning and model optimization with SageMaker tools',
        'Deploy models using real-time endpoints, batch transforms, and multi-model endpoints',
        'Automate ML pipelines using SageMaker Pipelines and CI/CD integration',
        'Monitor production workloads with SageMaker Model Monitor, drift detection, and CloudWatch',
        'Integrate generative AI with Amazon Bedrock using prompt engineering and RAG'
      ],
      prerequisites: [
        'At least 6-12 months of hands-on experience with AWS services such as S3, EC2, or IAM',
        'Working knowledge of Python, including data manipulation with NumPy and pandas',
        'Basic understanding of machine learning concepts (supervised/unsupervised and evaluation)',
        'Familiarity with SQL and data querying concepts is beneficial but not mandatory'
      ],
      whoCanJoin: [
        'ML Engineers seeking to validate expertise in production-grade ML pipelines on AWS',
        'Data Scientists looking to extend skills into MLOps, deployment, and cloud-native ML infrastructure',
        'Data Engineers building ingestion and transformation pipelines that feed ML workloads',
        'Backend Developers integrating ML inference endpoints and AI services into applications and microservices',
        'Cloud Architects designing enterprise ML architectures with scalability, security, and cost-efficiency',
        'DevOps Engineers extending CI/CD expertise into MLOps workflows and automated model lifecycle management'
      ],
      distinctness:
        'An exam-aligned AWS MLA-C01 programme built around live SageMaker labs. You learn the full ML engineering lifecycle, including training, deployment, MLOps automation, monitoring, security, and generative AI integration with Amazon Bedrock.'
    },
    modules: [
      {
        title: '1. Introduction to Machine Learning on AWS',
        topics: [
          'ML fundamentals',
          'AWS global infrastructure',
          'Amazon SageMaker overview',
          'Shared responsibility model for ML workloads'
        ]
      },
      {
        title: '2. Data Engineering & Ingestion',
        topics: [
          'Data collection with S3, AWS Glue, Kinesis, and DynamoDB',
          'ETL pipelines, data catalogues, and schema management'
        ]
      },
      {
        title: '3. Exploratory Data Analysis (EDA)',
        topics: [
          'Data profiling and statistical analysis',
          'Visualization with Athena, EMR, and Apache Spark',
          'Identifying bias and data quality issues'
        ]
      },
      {
        title: '4. Feature Engineering & Data Preparation',
        topics: [
          'Imputation, outlier handling, binning, normalization',
          'Encoding and dimensionality reduction techniques',
          'Working with SageMaker Feature Store'
        ]
      },
      {
        title: '5. Model Training & Selection',
        topics: [
          'Built-in SageMaker algorithms',
          'Custom containers with PyTorch and TensorFlow',
          'Distributed training jobs',
          'Experiment tracking'
        ]
      },
      {
        title: '6. Hyperparameter Tuning & Model Optimisation',
        topics: [
          'Automatic Model Tuning (AMT)',
          'SageMaker Experiments and SageMaker Debugger',
          'Performance benchmarking strategies'
        ]
      },
      {
        title: '7. Model Deployment & Inference',
        topics: [
          'Real-time endpoints and batch transform jobs',
          'Multi-model endpoints and serverless inference',
          'A/B deployment strategies'
        ]
      },
      {
        title: '8. MLOps & Pipeline Automation',
        topics: [
          'SageMaker Pipelines and model registry concepts',
          'CI/CD for ML (automation and release patterns)',
          'AWS CodePipeline integration',
          'Automated model retraining workflows'
        ]
      },
      {
        title: '9. Monitoring, Security & Compliance',
        topics: [
          'SageMaker Model Monitor and data drift detection',
          'CloudWatch monitoring concepts',
          'IAM for ML and access controls',
          'VPC isolation, encryption, and audit logging'
        ]
      },
      {
        title: '10. Generative AI & Amazon Bedrock',
        topics: [
          'Foundation models and prompt engineering',
          'Retrieval-Augmented Generation (RAG)',
          'Fine-tuning with Amazon Bedrock (where applicable)'
        ]
      },
      {
        title: '11. AWS AI Managed Services',
        topics: [
          'Comprehend, Rekognition, Translate, Polly, Transcribe, Lex',
          'Forecast and Personalize',
          'Integration patterns and representative use cases'
        ]
      },
      {
        title: '12. Exam Preparation & Mock Tests',
        topics: [
          'Full-length MLA-C01 practice papers',
          'Domain-wise review and learning strategy',
          'Exam strategy and time management',
          'AWS whitepaper analysis'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Dedicated one-on-one ML engineering training with customized pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live instructor-led batches with hands-on SageMaker labs.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Custom corporate batches tailored to your teams and AWS environment.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'End-to-End ML Engineering', icon: '✓', description: 'Full ML lifecycle from ingestion and feature engineering to training, deployment, and production monitoring.' },
      { title: 'Sought-After AWS ML Credential', icon: '📜', description: 'MLA-C01 validates implementation of ML solutions at scale on the world’s largest cloud provider.' },
      { title: 'Real SageMaker Labs', icon: '📌', description: 'Hands-on exercises: training jobs, inference endpoints, hyperparameter tuning, and deployments as in production.' },
      { title: 'Fast-Growing ML Job Market', icon: '📈', description: 'ML engineering on AWS is among the highest-paying, fastest-growing technology career paths.' },
      { title: 'MLOps & Production Pipelines', icon: '🔁', description: 'CI/CD for ML, automated retraining, model versioning, and drift monitoring — senior engineer differentiators.' },
      { title: 'Generative AI on AWS', icon: '✨', description: 'Amazon Bedrock, prompt engineering, and RAG — aligned to frontier enterprise AI adoption.' },
      { title: 'Security & Compliance', icon: '🛡️', description: 'IAM, VPC isolation, encryption, and CloudTrail audit logging for regulated environments.' },
      { title: 'Salary & Negotiation Leverage', icon: '💼', description: 'Certification as a quantifiable differentiator backed by market demand for AWS ML skills.' }
    ],
    faqs: [
      {
        question: 'Do I need prior machine learning experience to enrol?',
        answer: 'A basic understanding of ML concepts is recommended. The programme begins with foundational topics and progressively advances to production-level ML engineering. Candidates with some AWS experience and Python skills will be well-positioned from day one.'
      },
      {
        question: 'Will I receive access to recorded sessions?',
        answer: 'Yes. All enrolled students receive lifetime access to recorded class sessions, enabling flexible revision at any time after the live training concludes.'
      },
      {
        question: 'Is the AWS MLA-C01 exam fee included in the course fee?',
        answer: 'The training fee covers all instruction, lab environments, and exam preparation materials. The official AWS MLA-C01 examination fee is paid separately at the time of scheduling through the AWS Certification portal.'
      },
      {
        question: 'How long does it take to be exam-ready?',
        answer: 'Most students complete the training within 5-7 weeks and are fully prepared for the examination shortly thereafter. The timeline may vary based on prior background and the chosen learning mode.'
      },
      {
        question: 'What roles can I target after certification?',
        answer: 'Certified graduates are well-positioned for roles such as Machine Learning Engineer, MLOps Engineer, AI/ML Solutions Architect, Data Engineer (ML), and Applied Scientist across cloud-first organizations globally.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. We offer fully customized corporate training based on your organization\'s tools, team skills, and goals. Contact us for a personalised proposal and pricing.'
      }
    ],
    duration: '30-35 Hours',
    mode: 'Online',
    icon: 'aws',
    heroSubtitle: 'MLA-C01'
  },
  'angular-training': {
    slug: 'angular-training',
    title: 'Angular Training',
    category: 'Web Development',
    heroDescription:
      'A complete, structured training programme that takes you from absolute beginner to advanced Angular developer. Covering web fundamentals, TypeScript, core Angular concepts, reactive programming, state management, testing, performance optimisation, and full-stack deployment through hands-on projects at every stage.',
    heroBannerImage: '/course-banners/angular-training.png',
    callToAction: 'Request Callback',
    highlights: [
      'Scratch to advanced Angular with progressive tiers',
      'TypeScript mastery for production-ready development',
      'Reactive programming with RxJS and async streams',
      'State management at scale with NgRx',
      'Routing, forms, testing, performance, and SSR',
      'Full-stack capstone deployment for your portfolio'
    ],
    description: {
      whyChooseTitle: 'Why choose Angular Training from InsureTech Skills?',
      overview:
        'This programme is structured into three progressive tiers — Beginner, Intermediate, and Advanced — so students with zero prior experience can join and progress all the way to building production-grade, enterprise-level Angular applications. Each tier builds on the previous one, and every module includes guided coding exercises and real-world mini-projects.',
      distinctness:
        'One programme that takes you from zero to production-ready Angular. You gain deep TypeScript proficiency, reactive programming skills with RxJS, scalable state management with NgRx, and modern enterprise capabilities like testing, SSR (Angular Universal), micro-frontends, and CI/CD deployment.',
      whatYouWillLearn: [
        'Build web foundations and understand how browsers work (HTTP basics, DOM, and accessibility)',
        'Write modern Angular applications with TypeScript, components, templates, and data binding',
        'Master directives, pipes, modules, and lazy loading for scalable app structure',
        'Implement routing and navigation with route parameters, guards, and nested routing',
        'Develop both template-driven and reactive forms with validation patterns',
        'Integrate REST APIs using HttpClient and HTTP interceptors',
        'Learn RxJS fundamentals and production-ready Observable patterns',
        'Build robust apps with NgRx state management (actions, reducers, selectors, effects)',
        'Apply performance optimisation techniques (OnPush, trackBy, bundle and profiling)',
        'Prepare production features: authentication, security patterns, SSR, testing, and CI/CD deployment',
        'Deliver a full-stack capstone project with authentication and cloud deployment'
      ],
      prerequisites: [
        'Basic familiarity with computers and using a web browser',
        'Some exposure to HTML or CSS is helpful but not required',
        'No JavaScript, TypeScript, or Angular experience is necessary (covered from scratch)',
        'Willingness to practise with hands-on coding exercises throughout each module'
      ],
      whyChoose: 'Angular is built for complex, enterprise-grade front-ends. This programme gives you the skills employers look for: TypeScript depth, reactive programming, state management at scale, testing discipline, performance optimisation, and modern deployment practices.',
      keyFeatures: [
        'Progressive Beginner, Intermediate, and Advanced tiers',
        'Guided coding exercises and real-world mini-projects',
        'NgRx, SSR (Angular Universal), and micro-frontends coverage',
        'Testing with unit and end-to-end approaches',
        'Full-stack deployment through a capstone project'
      ],
      whoCanJoin: [
        'Complete beginners with no coding experience',
        'Junior developers transitioning into modern Angular development',
        'JavaScript developers moving from vanilla JS or other frameworks',
        'React or Vue developers adding Angular expertise for enterprise roles',
        'Full-stack developers strengthening Angular integration with APIs',
        'IT professionals and graduates pivoting into front-end development'
      ]
    },
    modules: [
      {
        title: '1. Web Development Fundamentals',
        topics: ['How browsers work', 'HTTP basics', 'DOM concepts', 'HTML/CSS/JavaScript interaction']
      },
      {
        title: '2. HTML5 Essentials',
        topics: ['Semantic HTML', 'Forms and input types', 'Accessibility with ARIA', 'Structuring content for web apps']
      },
      {
        title: '3. CSS3 & Responsive Design',
        topics: ['Box model and layout', 'Flexbox and CSS Grid', 'Media queries and mobile-first', 'CSS variables, animations, and pseudo-classes']
      },
      {
        title: '4. JavaScript Foundations',
        topics: ['Variables, types, and functions', 'Arrays, objects, and loops', 'Events and DOM manipulation', 'Console and debugging fundamentals']
      },
      {
        title: '5. Modern JavaScript (ES6+)',
        topics: ['Arrow functions and destructuring', 'Spread/rest operators', 'Template literals and modules', 'Promises, async/await, and optional chaining']
      },
      {
        title: '6. TypeScript for Angular Developers',
        topics: ['Types, interfaces, and enums', 'Generics and access modifiers', 'Decorators and type inference', 'tsconfig setup for Angular']
      },
      {
        title: '7. Introduction to Angular & Angular CLI',
        topics: ['What Angular is', 'Angular architecture overview', 'Setting up Node.js and Angular CLI', 'Project structure walkthrough']
      },
      {
        title: '8. Components, Templates & Data Binding',
        topics: ['Creating components and lifecycle hooks', 'Property, event, and two-way binding', 'Interpolation and template reference variables', 'ngModel basics']
      },
      {
        title: '9. Directives & Pipes',
        topics: ['ngIf, ngFor, ngSwitch', 'Attribute directives (ngClass, ngStyle)', 'Custom directives', 'Built-in and custom transformation pipes']
      },
      {
        title: '10. Angular Modules & Lazy Loading',
        topics: ['NgModules and feature modules', 'Shared modules', 'Lazy loading with Router', 'Preloading strategies and scalable structure']
      },
      {
        title: '11. Dependency Injection & Services',
        topics: ['DI system and creating services', 'providedIn scopes', 'Hierarchical injectors', 'Sharing data between components']
      },
      {
        title: '12. Routing & Navigation',
        topics: ['RouterModule setup', 'Route parameters and query parameters', 'Guards (CanActivate/CanDeactivate)', 'Resolve and navigation extras']
      },
      {
        title: '13. Template-Driven Forms',
        topics: ['ngForm and ngModel', 'Validation (required, minlength, pattern)', 'Submission handling', 'Displaying form errors']
      },
      {
        title: '14. Reactive Forms',
        topics: ['FormBuilder, FormGroup, FormControl', 'FormArray and custom validators', 'Async validators and cross-field validation', 'Dynamic form generation at runtime']
      },
      {
        title: '15. HTTP Client & REST API Integration',
        topics: ['HttpClientModule setup', 'GET/POST/PUT/DELETE patterns', 'HTTP interceptors', 'Loading state and error handling']
      },
      {
        title: '16. RxJS & Reactive Programming',
        topics: ['Observables vs Promises', 'Subject, BehaviorSubject, ReplaySubject', 'Core operators (map, filter, switchMap, debounceTime)', 'Unsubscribing and memory-safe patterns']
      },
      {
        title: '17. Component Communication Patterns',
        topics: ['@Input and @Output with EventEmitter', 'ViewChild and ContentChild', 'Content projection (ng-content)', 'Shared services with Subjects']
      },
      {
        title: '18. State Management with NgRx',
        topics: ['Redux-inspired architecture', 'Actions, reducers, and selectors', 'Effects for side effects', 'DevTools and time-travel debugging']
      },
      {
        title: '19. Advanced Routing Techniques',
        topics: ['Dynamic route matching', 'Custom route reuse strategies', 'Secondary/named outlets', 'Scroll restoration and multi-layout routing']
      },
      {
        title: '20. Performance Optimisation',
        topics: ['OnPush change detection', 'trackBy in ngFor', 'Pure vs impure pipes', 'Lazy loading and Angular DevTools profiling']
      },
      {
        title: '21. Authentication & Security',
        topics: ['JWT-based authentication', 'Route guards and role-based access', 'Token injection with interceptors', 'CSRF/XSS prevention fundamentals']
      },
      {
        title: '22. Angular Animations',
        topics: ['BrowserAnimationsModule', 'trigger/state/transition API', 'Keyframe and stagger animations', 'Route transition animations']
      },
      {
        title: '23. Unit Testing & End-to-End Testing',
        topics: ['Jasmine and Karma', 'TestBed and mocking dependencies', 'Mocking HTTP and services', 'End-to-end testing with Cypress']
      },
      {
        title: '24. Angular Universal (SSR)',
        topics: ['Setting up Angular Universal', 'SEO with server-side rendering', 'Dynamic meta tags', 'Hydration and TransferState concepts']
      },
      {
        title: '25. Micro-Frontends & Module Federation',
        topics: ['Module Federation concepts with Angular', 'Shared libraries and runtime architecture', 'Independently deployable apps', 'Shell and remote architecture patterns']
      },
      {
        title: '26. CI/CD, Deployment & Capstone Project',
        topics: ['Production build and optimisation', 'Deploying to Firebase/AWS Amplify/Vercel', 'GitHub Actions CI/CD pipeline setup', 'Capstone project build to deployment']
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Personalised mentoring and guided coding exercises.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live online batches with hands-on module work.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized enterprise training for development teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'One Programme — Zero to Production', icon: '✓', description: 'A single path from basics to deploying a production-grade Angular app — no patchwork of separate courses.' },
      { title: 'Master TypeScript', icon: '📘', description: 'Deep TypeScript proficiency — the standard for professional front-end and explicitly required in senior roles.' },
      { title: 'RxJS & Reactive Programming', icon: '⚡', description: 'Observables and operators — transferable across Angular, React, and Node.js ecosystems.' },
      { title: 'Full-Stack Integration', icon: '🔗', description: 'REST APIs, JWT auth, HTTP interceptors, and back-end integration patterns.' },
      { title: 'State Management at Scale', icon: '🧠', description: 'NgRx for predictable, maintainable applications with complex shared state.' },
      { title: 'High-Demand Front-End Roles', icon: '📈', description: 'Angular is widely used in banking, healthcare, insurance, and enterprise SaaS worldwide.' },
      { title: 'Portfolio Capstone', icon: '🚀', description: 'Deployable full-stack app with API integration, JWT, and cloud deployment for interviews.' },
      { title: 'Salary Growth Trajectory', icon: '💼', description: 'Enterprise Angular ecosystem skills — testing, performance, NgRx, SSR — map to upper compensation bands.' }
    ],
    faqs: [
      {
        question: 'Can I join with absolutely no prior coding experience?',
        answer: 'Yes. The programme is designed to start from zero. The first three modules cover HTML, CSS, and JavaScript fundamentals before introducing TypeScript and Angular.'
      },
      {
        question: 'How is the programme structured across the three levels?',
        answer: 'It is divided into three progressive tiers. Modules 01-08 cover web fundamentals and Angular basics, modules 09-17 go deeper into Angular core features, and modules 18-26 cover advanced topics including NgRx, SSR, micro-frontends, testing, and CI/CD deployment.'
      },
      {
        question: 'Will I receive access to recorded sessions?',
        answer: 'Yes. All enrolled students receive lifetime access to recorded class sessions for flexible revision.'
      },
      {
        question: 'Will I build a real project during the course?',
        answer: 'Yes. The programme concludes with a full-stack capstone project: a deployable Angular application integrated with a REST API, secured with JWT authentication, and deployed to a cloud platform.'
      },
      {
        question: 'What roles can I target after completing this training?',
        answer: 'Graduates can target roles such as Angular Developer, Front-End Engineer, Full-Stack Developer (Angular + Node.js), UI Engineer, and Software Engineer across product and service organisations.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. Fully customised corporate training programmes are available for development teams, tailored to your organisation\'s existing tech stack, team skill levels, and project requirements. Please contact us for a dedicated proposal.'
      }
    ],
    duration: '30-45 Hours',
    mode: 'Online',
    icon: 'angular',
    heroSubtitle: 'Scratch to Advanced',
    tools: [
      'Angular (v17+)', 'TypeScript', 'Angular CLI', 'RxJS', 'NgRx', 'Angular Universal (SSR)', 'Webpack Module Federation',
      'Angular Material', 'Bootstrap 5', 'Tailwind CSS', 'SCSS/SASS', 'PrimeNG', 'CDK',
      'Jasmine', 'Karma', 'Cypress', 'Angular DevTools', 'ESLint', 'Prettier', 'Webpack Bundle Analyser',
      'REST APIs', 'Node.js/Express', 'JWT', 'Firebase', 'AWS Amplify', 'Vercel', 'Docker', 'GitHub Actions'
    ]
  },
  'microsoft-azure-sql-solution-training': {
    slug: 'microsoft-azure-sql-solution-training',
    title: 'Microsoft Azure SQL Solution Training',
    category: 'Database',
    heroDescription:
      'Microsoft Azure · DP-300 · Scratch to Advanced — Azure SQL Solution Training. A comprehensive, structured training programme that takes you from relational database fundamentals all the way to designing, deploying, securing, and optimising enterprise-grade SQL solutions on Microsoft Azure — aligned to the DP-300 (Administering Relational Databases on Microsoft Azure) certification. Duration: 25–40 Hours. Exam: DP-300. Mode: Live Online / 1-to-1 / Corporate. Level: Scratch to Advanced.',
    heroBannerImage: '/course-banners/azure-sql-solution-training.png',
    callToAction: 'Request Callback',
    highlights: [
      'Scratch-to-advanced SQL on Azure (DP-300 aligned)',
      'Planning, deploying, administering, and optimising Azure SQL',
      'Advanced T-SQL, indexing, and query optimisation',
      'Security, identity, RLS, masking, and Always Encrypted',
      'Backups, restore, PITR, and monitoring/alerting',
      'HA/DR, Hyperscale architecture, and performance tuning',
      'Infrastructure as Code with Bicep and Terraform',
      'Capstone project covering security, HA, monitoring, and tuning'
    ],
    description: {
      whyChooseTitle: 'Why choose Microsoft Azure SQL DP-300 Training from InsureTech Skills?',
      overview:
        'This programme is structured across three progressive tiers (Beginner, Intermediate, Advanced) to enable students with no prior database experience to reach full proficiency in planning, deploying, administering, and optimising Azure SQL solutions. Every module includes guided lab exercises in a real Azure environment, and the programme culminates in a production-ready capstone project.',
      whyChoose:
        'Instead of learning Azure SQL in isolation, you follow a complete end-to-end path: relational fundamentals to intermediate SQL, then Azure SQL administration and development, and finally enterprise architecture for HA, security, performance, and governance. The curriculum is aligned to DP-300 objectives and designed around hands-on deployment, tuning, monitoring, and recovery workflows.',
      keyFeatures: [
        'Guided labs in a live Azure portal environment',
        'DP-300 aligned coverage with capstone project',
        'Security and compliance patterns for Azure SQL',
        'High availability and disaster recovery design',
        'Performance tuning with Query Store and execution plans'
      ],
      whatYouWillLearn: [
        'Relational database fundamentals and normalisation concepts',
        'SQL fundamentals and advanced T-SQL programming',
        'Designing, deploying, and configuring Azure SQL databases and managed instances',
        'Indexing strategies, execution plans, and query optimisation',
        'Security, identity, RLS, dynamic data masking, and Always Encrypted',
        'Backups, restore, and point-in-time recovery (PITR)',
        'Monitoring, alerting, and operational insights with Azure tools',
        'Connectivity, private endpoints, and secure networking patterns',
        'Enterprise HA/DR design including geo-replication and auto-failover groups',
        'Hyperscale architecture internals and scaling approaches',
        'IaC deployments using Bicep and Terraform with CI/CD integration',
        'DP-300 mock exams and exam strategy with a production capstone'
      ],
      prerequisites: [
        'Basic computer literacy and comfort using a web browser',
        'Any prior exposure to spreadsheets or tabular data (e.g., Excel) helps but not required',
        'No prior SQL, database, or Azure experience is necessary (taught comprehensively from Module 01)',
        'Willingness to practise with guided hands-on lab exercises throughout each module'
      ],
      whoCanJoin: [
        'Complete beginners starting with relational fundamentals and moving into Azure SQL administration',
        'SQL/database developers extending on-premises SQL Server knowledge to Azure',
        'Database administrators migrating to Azure SQL with cloud-native HA and automation',
        'Cloud/Azure engineers adding Azure SQL solution design and administration to their portfolio',
        'Data engineers building transactional data platforms on Azure SQL',
        'IT professionals and graduates pivoting into cloud data roles'
      ],
      distinctness:
        'One structured programme that takes you from scratch to DP-300 readiness and production-ready Azure SQL expertise. You will learn not only how to build and administer Azure SQL, but how to secure it, design HA/DR, tune performance, and operationalise with monitoring and IaC.',
    },
    modules: [
      {
        title: '1. Introduction to Databases & Relational Concepts',
        topics: [
          'Relational vs non-relational models',
          'Tables, rows, columns, keys',
          'Normalization (1NF, 2NF, 3NF)'
        ]
      },
      {
        title: '2. SQL Fundamentals',
        topics: [
          'SELECT, WHERE, ORDER BY',
          'Aggregate functions and NULL handling',
          'GROUP BY and HAVING'
        ]
      },
      {
        title: '3. Intermediate SQL',
        topics: [
          'Joins: INNER, LEFT/RIGHT/FULL OUTER, CROSS',
          'Subqueries, CTEs, and UNION patterns',
          'DML with INSERT, UPDATE, DELETE'
        ]
      },
      {
        title: '4. Introduction to Microsoft Azure',
        topics: [
          'Azure Regions and Availability Zones',
          'IaaS, PaaS, SaaS overview',
          'Azure Portal basics and Azure CLI'
        ]
      },
      {
        title: '5. Azure SQL - Platform Options Overview',
        topics: [
          'Azure SQL Database vs Managed Instance vs SQL on Azure VMs',
          'When to use each option',
          'Deployment considerations and pricing models'
        ]
      },
      {
        title: '6. Deploying Your First Azure SQL Database',
        topics: [
          'Create databases in Portal and CLI',
          'Server/database settings and firewall rules',
          'Connection strings with Azure Data Studio and SSMS'
        ]
      },
      {
        title: '7. Database Design & Schema Management',
        topics: [
          'Create/alter tables and constraints',
          'Indexes overview and schema versioning',
          'PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, DEFAULT'
        ]
      },
      {
        title: '8. Advanced T-SQL Programming',
        topics: [
          'Stored procedures, functions, triggers',
          'Views, temporary tables, table variables',
          'TRY/CATCH error handling and dynamic SQL'
        ]
      },
      {
        title: '9. Indexing Strategies & Query Optimisation',
        topics: [
          'Clustered vs non-clustered indexes',
          'Filtered and covering indexes',
          'Statistics, execution plans, and Query Store regression checks'
        ]
      },
      {
        title: '10. Azure SQL Database Configuration & Scaling',
        topics: [
          'Service tiers and purchasing models (DTU vs vCore)',
          'Elastic pools and serverless compute concepts',
          'Auto-scaling configuration approaches'
        ]
      },
      {
        title: '11. Security & Identity Management',
        topics: [
          'Azure AD authentication',
          'RBAC and role management',
          'RLS, Dynamic Data Masking, and Always Encrypted'
        ]
      },
      {
        title: '12. Backup, Restore & Point-in-Time Recovery',
        topics: [
          'Automated backups and retention policies',
          'PITR and geo-redundant backup concepts',
          'Long-term retention (LTR) and restore procedures'
        ]
      },
      {
        title: '13. Azure SQL Managed Instance',
        topics: [
          'Managed Instance architecture and network integration',
          'Migration patterns from on-premises SQL Server',
          'Cross-instance queries and support components'
        ]
      },
      {
        title: '14. Monitoring & Alerting',
        topics: [
          'Azure Monitor, Metrics, and Diagnostic Logs',
          'Log Analytics workspace integration',
          'Alerts for CPU/DTU/storage and Intelligent Insights concepts'
        ]
      },
      {
        title: '15. Data Migration to Azure SQL',
        topics: [
          'Azure DMS and SSMA concepts',
          'Offline vs online migration strategies',
          'Post-migration schema and data validation'
        ]
      },
      {
        title: '16. Connectivity, Networking & Private Endpoints',
        topics: [
          'Public vs private endpoint configuration',
          'Private Link and firewall rules',
          'TLS/SSL enforcement and secure connectivity patterns'
        ]
      },
      {
        title: '17. High Availability & Disaster Recovery',
        topics: [
          'Active Geo-Replication and auto-failover groups',
          'Zone-redundant configuration',
          'RTO/RPO planning and failover testing'
        ]
      },
      {
        title: '18. Advanced Performance Tuning',
        topics: [
          'In-Memory OLTP and columnstore indexes',
          'Automatic tuning and plan correction concepts',
          'Wait statistics, adaptive query processing, and IQP'
        ]
      },
      {
        title: '19. Azure SQL Hyperscale Architecture',
        topics: [
          'Hyperscale service tier internals',
          'Page server and read scale-out replicas',
          'Rapid scaling and adoption scenarios for OLTP/HTAP'
        ]
      },
      {
        title: '20. Advanced Security & Compliance',
        topics: [
          'Microsoft Defender for SQL and vulnerability assessment',
          'SQL Audit pipelines to Storage/Log Analytics/Event Hub',
          'TDE and customer-managed keys (CMK) fundamentals'
        ]
      },
      {
        title: '21. Azure Synapse Analytics Integration',
        topics: [
          'Hybrid OLTP + analytics architecture patterns',
          'PolyBase and CETAS concepts',
          'Movement to dedicated SQL pools'
        ]
      },
      {
        title: '22. Infrastructure as Code for Azure SQL',
        topics: [
          'Deploy using Bicep and Terraform',
          'ARM templates and parameterised deployments',
          'CI/CD integration with DACPAC/BACPAC'
        ]
      },
      {
        title: '23. Cost Management & Governance',
        topics: [
          'Cost optimisation strategies and reserved capacity',
          'Azure Hybrid Benefit and resource tagging',
          'Azure Policy for SQL compliance and budgeting'
        ]
      },
      {
        title: '24. DP-300 Exam Preparation & Capstone Project',
        topics: [
          'Full-length DP-300 mock exams and domain review',
          'Exam strategy guidance',
          'Production capstone covering deployment, security, HA, monitoring, and tuning'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Dedicated mentor support with guided lab sessions for Azure SQL.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live instructor-led Azure SQL batches with hands-on portal labs.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized enterprise training with tailored Azure environments for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'DP-300 Aligned Curriculum', icon: '📚', description: 'Coverage designed around DP-300 objectives and exam readiness.' },
      { title: 'Real Azure SQL Labs', icon: '🧪', description: 'Guided deployments, tuning, monitoring, and recovery in Azure.' },
      { title: 'Security and Compliance Focus', icon: '🛡️', description: 'RLS, masking, Always Encrypted, Defender for SQL, and audit pipelines.' },
      { title: 'Enterprise HA/DR Design', icon: '🏗️', description: 'Geo-replication, failover planning, and mission-critical resilience.' },
      { title: 'Performance and Cost Optimisation', icon: '⚙️', description: 'Query Store, execution plans, automatic tuning, and governance.' },
      { title: 'IaC and CI/CD for DatabaseOps', icon: '🔧', description: 'Bicep/Terraform deployments and CI/CD schema change workflows.' }
    ],
    faqs: [
      {
        question: 'Do I need prior SQL, database, or Azure experience to enrol?',
        answer: 'No. The programme starts from scratch with beginner-friendly modules that build foundational SQL and Azure knowledge before moving into advanced administration.'
      },
      {
        question: 'Will I get hands-on labs in a real Azure environment?',
        answer: 'Yes. Each module includes guided lab exercises in an Azure environment so you can deploy databases, configure security, tune performance, and validate monitoring.'
      },
      {
        question: 'Does the DP-300 exam fee come included in the training fee?',
        answer: 'The training fee covers instruction, labs, and exam preparation materials. The official Microsoft DP-300 exam fee is typically paid separately through the Microsoft Certification portal at scheduling time.'
      },
      {
        question: 'How long does it take to be exam-ready?',
        answer: 'Most students complete the training within the 5 to 7 week window (depending on schedule) and become exam-ready shortly after. Exact timing depends on your background and learning mode.'
      },
      {
        question: 'What kind of capstone project will I build?',
        answer: 'You will complete a production-ready capstone that covers end-to-end Azure SQL deployment, security, HA/DR design, monitoring/alerting, and performance tuning.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. We offer fully customised corporate training programmes tailored to your organization\'s tools, team skill levels, and Azure SQL goals. Please contact us for a dedicated proposal.'
      }
    ],
    duration: '25-40 Hours',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'DP-300'
  },
  'grc-training': {
    slug: 'grc-training',
    title: 'GRC Training',
    category: 'IT Security',
    heroDescription:
      'Governance · Risk · Compliance · Scratch to Advanced — GRC Training. A comprehensive, structured training programme that takes you from foundational GRC concepts all the way to designing, implementing, and managing enterprise-grade Governance, Risk, and Compliance frameworks — covering global standards, regulatory requirements, risk management methodologies, and audit practices across IT and business environments. Duration: 30–45 Hours. Mode: Live Online / 1-to-1 / Corporate. Certifications: CRISC · CISA · ISO 27001 · CGRC (ISC²). Level: Scratch to Advanced. Rating: 4.8 / 5.0.',
    heroBannerImage: '/course-banners/grc-training.png',
    callToAction: 'Request Callback',
    highlights: [
      'CRISC, CISA, CGRC (ISC²), ISO 27001 aligned preparation',
      'Scratch to advanced GRC programme with real-world frameworks',
      'Risk assessment, ISO 27001, NIST CSF, and RMF coverage',
      'Privacy, financial, and third-party/vendor risk management',
      'Internal controls, IT audit, and BC/DR planning',
      'Enterprise GRC design, metrics, and board communication',
      'Cloud GRC and cyber risk quantification'
    ],
    description: {
      whyChooseTitle: 'Why choose GRC Training (Governance, Risk & Compliance) from InsureTech Skills?',
      overview:
        'This programme is structured across three progressive tiers (Beginner, Intermediate, Advanced) to enable students with no prior GRC experience to reach full proficiency in designing and operating enterprise governance, risk, and compliance programmes. Each module is grounded in real-world frameworks, regulatory environments, and practical implementation scenarios. The programme culminates in a capstone project simulating end-to-end GRC implementation for an enterprise organisation.',
      whyChoose:
        'Rather than treating governance, risk, and compliance as isolated topics, you learn how the three integrate into a unified enterprise function. You build practical skills to create GRC strategy and operating models, perform risk assessment and treatment, implement control frameworks, manage third-party risk, run IT audits, and communicate results to executives and boards. The curriculum also includes cloud GRC, continuous controls monitoring, regulatory change management, incident and breach notification thinking, and certification exam readiness.',
      keyFeatures: [
        '27 modules across progressive GRC tiers',
        'Case studies and scenario exercises in every module',
        'CRISC, CISA, CGRC (ISC²), and ISO 27001 Lead Implementer preparation',
        'Cloud GRC, CCM automation, and cyber risk analytics concepts',
        'Enterprise GRC capstone project simulating multi-jurisdiction scenarios'
      ],
      whatYouWillLearn: [
        'Define governance, risk, and compliance roles and responsibilities (including EGIT concepts)',
        'Apply risk assessment methodologies (matrices, FAIR, OCTAVE, TARA) and manage risk registers',
        'Design and implement ISO 27001 ISMS elements including Statement of Applicability (SoA)',
        'Apply NIST CSF 2.0 functions and NIST RMF steps to enterprise contexts',
        'Implement privacy compliance thinking (GDPR) and financial sector compliance (PCI-DSS, SOX IT controls)',
        'Build third-party and vendor risk management (TPRM) lifecycles',
        'Design internal controls using COSO and conduct control testing and remediation tracking',
        'Plan and execute IT audits using IT General Controls (ITGC) and evidence practices',
        'Create BC/DR plans using BIA, RPO/RTO concepts, and ISO 22301 alignment',
        'Apply enterprise governance frameworks such as COBIT 2019',
        'Quantify cyber risk using FAIR and risk analytics (including Monte Carlo concepts)',
        'Design cloud GRC and compliance workflows across AWS, Azure, and GCP shared responsibility models',
        'Plan and implement Continuous Controls Monitoring (CCM) and GRC automation',
        'Run regulatory change management processes and map new requirements to existing controls',
        'Integrate incident management and regulatory breach notification thinking',
        'Build GRC metrics frameworks and board-level reporting with risk translated into business language',
        'Prepare for multiple certifications and deliver an enterprise GRC capstone project'
      ],
      prerequisites: [
        'No prior GRC, risk management, or regulatory knowledge is necessary; concepts are introduced from the ground up',
        'Basic awareness of how organisations operate (business functions, departments, and IT role) is helpful but not required',
        'Any prior exposure to IT, cybersecurity, audit, legal, or compliance work helps you progress faster',
        'A genuine interest in governance, risk, compliance, or cybersecurity as a career path'
      ],
      whoCanJoin: [
        'Complete beginners entering the GRC field for the first time',
        'IT and cybersecurity professionals adding governance and compliance depth',
        'Compliance and legal professionals structuring compliance into formal GRC frameworks',
        'Internal auditors expanding into integrated GRC programme oversight',
        'Risk managers formalising enterprise risk management and integrating IT/cyber risk',
        'Graduates and career changers seeking certification-aligned GRC readiness'
      ],
      distinctness:
        'One programme that takes you from zero to enterprise GRC expertise. You learn how governance, risk, and compliance integrate end-to-end: frameworks, control design and testing, audit practices, business continuity, cloud GRC, CCM automation, regulatory change management, incident and breach notification thinking, board reporting, and certification exam readiness.'
    },
    modules: [
      { title: '1. Introduction to GRC - Governance, Risk & Compliance', topics: ['What GRC is and why it matters', 'Relationship between governance, risk, and compliance', 'Key roles and responsibilities', 'Business case for a structured GRC programme', 'GRC ecosystem overview'] },
      { title: '2. Corporate Governance Fundamentals', topics: ['Corporate governance principles and board oversight', 'Accountability and separation of duties', 'Enterprise governance of IT (EGIT)', 'Ethical governance practices'] },
      { title: '3. Introduction to Information Security', topics: ['CIA triad: confidentiality, integrity, availability', 'Asset classification and threat/vulnerability basics', 'Security controls and defense-in-depth', 'Security governance hierarchy'] },
      { title: '4. Risk Management Fundamentals', topics: ['Risk appetite vs risk tolerance vs risk threshold', 'Risk types: strategic, operational, financial, compliance, reputational, cyber', 'Risk lifecycle and terminology'] },
      { title: '5. Compliance Fundamentals', topics: ['What compliance means in a business context', 'Regulatory vs contractual vs voluntary obligations', 'Compliance obligations mapping and consequences', 'Role of a compliance function'] },
      { title: '6. Key Regulatory & Legal Frameworks Overview', topics: ['GDPR, HIPAA, SOX, PCI-DSS, ISO 27001', 'NIST and COBIT overview', 'Applicability by industry', 'How regulations interact in multi-jurisdiction organisations'] },
      { title: '7. Policies, Standards, Procedures & Guidelines', topics: ['Policy hierarchy and effective security policy writing', 'Policy governance cycles, ownership, and exceptions', 'Difference between policies, standards, baselines, procedures'] },
      { title: '8. Introduction to GRC Tools & Platforms', topics: ['ServiceNow GRC, RSA Archer, MetricStream', 'OneTrust and LogicGate overview', 'How technology enables scalable GRC programmes', 'Typical use cases for GRC platforms'] },
      { title: '9. Risk Assessment Methodologies', topics: ['Qualitative vs quantitative risk assessment', 'Risk matrices and scoring', 'FAIR (Factor Analysis of Information Risk)', 'OCTAVE and TARA approaches', 'Inherent vs residual risk and heat maps'] },
      { title: '10. Risk Treatment & Risk Register Management', topics: ['Risk treatment: accept, avoid, transfer, mitigate', 'Maintaining a risk register and ownership', 'Key Risk Indicators (KRIs)', 'Risk reporting cadence and escalation'] },
      { title: '11. ISO 27001 - Information Security Management System (ISMS)', topics: ['ISO 27001 structure and Annex A controls', 'ISMS scope definition and Statement of Applicability (SoA)', 'Gap analysis and implementing controls', 'Internal audit requirements and certification process'] },
      { title: '12. NIST Cybersecurity Framework (CSF 2.0) & NIST RMF', topics: ['NIST CSF 2.0 functions: Govern, Identify, Protect, Detect, Respond, Recover', 'NIST RMF steps', 'Categorise and select controls', 'Assess and authorise with continuous monitoring concepts'] },
      { title: '13. GDPR & Data Privacy Compliance', topics: ['GDPR principles and lawful bases', 'Data subject rights', 'DPIAs and RoPA', 'DPO role and breach notification', 'International data transfers'] },
      { title: '14. PCI-DSS & Financial Sector Compliance', topics: ['PCI-DSS v4.0 and its domain model', 'Cardholder data environment (CDE) scoping', 'Network segmentation concepts', 'QSA process overview', 'SOX IT controls (ITGC) fundamentals'] },
      { title: '15. Third-Party & Vendor Risk Management', topics: ['TPRM lifecycle: onboarding, assessment, monitoring, offboarding', 'Vendor due diligence and questionnaires', 'SOC 2 and report-based assurance', 'Fourth-party risk and concentration risk', 'Building a TPRM programme'] },
      { title: '16. Internal Controls & Control Frameworks', topics: ['COSO internal control framework', 'Control design vs operating effectiveness', 'Control testing methodologies', 'Deficiency classification and remediation tracking'] },
      { title: '17. IT Audit Fundamentals', topics: ['Audit lifecycle: planning, fieldwork, reporting, follow-up', 'Audit objectives and scope', 'Gathering audit evidence', 'IT General Controls (ITGCs) and application controls', 'Finding classification and working with external auditors'] },
      { title: '18. Business Continuity & Disaster Recovery Planning', topics: ['BIA (Business Impact Analysis)', 'RPO and RTO definitions', 'BCP and DRP development', 'Crisis communication planning and tabletop exercises', 'Testing methodologies and ISO 22301 alignment'] },
      { title: '19. Enterprise GRC Programme Design', topics: ['Integrated GRC programme design from scratch', 'Programme charter and governance structure', 'RACI roles and responsibilities', 'GRC operating model', 'Integration with enterprise risk management (ERM)', 'Board-level reporting'] },
      { title: '20. COBIT 2019 - IT Governance Framework', topics: ['COBIT 2019 principles and governance system', 'Governance vs management objectives', 'Design factors and focus areas', 'Performance management', 'Implementing COBIT enterprise-wide'] },
      { title: '21. Cyber Risk Quantification & Advanced Risk Analytics', topics: ['FAIR model applied to cyber risk', 'Monte Carlo simulation concepts', 'Risk aggregation across the enterprise', 'Integrating cyber risk into financial reporting', 'Executive cyber risk dashboard concepts'] },
      { title: '22. Cloud GRC & Security in the Cloud', topics: ['GRC considerations across AWS, Azure, and GCP', 'Shared responsibility in cloud compliance', 'CSA STAR and cloud-specific risk assessment', 'Data sovereignty considerations', 'Managing compliance in multi-cloud environments'] },
      { title: '23. Continuous Controls Monitoring (CCM) & GRC Automation', topics: ['Designing a CCM programme', 'Automated evidence collection', 'Integrating GRC with SIEM and SOAR', 'Real-time risk dashboards', 'Using AI/ML for anomaly detection in compliance workflows'] },
      { title: '24. Regulatory Change Management', topics: ['Horizon scanning for regulatory change', 'Building a regulatory change management process', 'Mapping new regulations to existing controls', 'Impact assessments and engaging regulators', 'Maintaining compliance over time'] },
      { title: '25. Incident Management & Regulatory Breach Notification', topics: ['Incident response lifecycle integration with GRC', 'Regulatory notification obligations', 'GDPR 72-hour rule and SEC-style disclosure thinking', 'Post-incident lessons learned', 'Root cause analysis for compliance failures'] },
      { title: '26. GRC Metrics, Reporting & Board Communication', topics: ['Designing a GRC metrics framework', 'KPIs vs KRIs', 'Executive and board reporting', 'Communicating risk in business language', 'GRC maturity model for continuous improvement'] },
      { title: '27. Certification Preparation & Enterprise Capstone Project', topics: ['Mock examinations for CRISC, CISA, CGRC (ISC²), and ISO 27001 Lead Implementer', 'Exam strategy per certification', 'Enterprise capstone: end-to-end GRC programme design for a simulated multi-jurisdiction organisation'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Live 1-to-1 mentoring with guided GRC case study sessions.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live instructor-led sessions with practical governance, risk, and audit exercises.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized enterprise GRC training for risk, audit, and compliance teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Multi-Certification Readiness', icon: 'cert', description: 'Preparation for CRISC, CISA, CGRC (ISC²), and ISO 27001 Lead Implementer paths.' },
      { title: 'Real-World Case Studies', icon: 'case', description: 'Scenario exercises in every module to build practical judgement.' },
      { title: 'Risk and Control Implementation Skills', icon: 'shield', description: 'Design controls, assess risk, test effectiveness, and track remediation.' },
      { title: 'Audit and BC/DR Competence', icon: 'audit', description: 'IT audit lifecycle and continuity planning with RPO/RTO concepts.' },
      { title: 'Cloud GRC and CCM Automation', icon: 'cloud', description: 'Cloud compliance thinking plus continuous controls monitoring design.' },
      { title: 'Enterprise Capstone', icon: 'capstone', description: 'End-to-end GRC programme design for a simulated enterprise organisation.' }
    ],
    faqs: [
      {
        question: 'Can I join with no prior GRC or compliance experience?',
        answer: 'Yes. The programme begins from absolute fundamentals: what GRC is, why it exists, and how governance, risk, and compliance relate.'
      },
      {
        question: 'How is the curriculum structured across the three levels?',
        answer: 'Modules 01-08 cover GRC concepts, corporate governance, information security basics, risk and compliance fundamentals, key regulatory frameworks, and GRC tools. Modules 09-18 cover risk assessment, ISO 27001, NIST, GDPR, PCI-DSS, vendor risk, internal controls, IT audit, and business continuity and disaster recovery. Modules 19-27 cover enterprise GRC design, COBIT 2019, cyber risk quantification, cloud GRC, continuous controls monitoring, regulatory change, incident management, board reporting, and certification exam preparation with a capstone project.'
      },
      {
        question: 'Which certifications does this programme prepare me for?',
        answer: 'CRISC, CISA, CGRC (ISC²), and ISO 27001 Lead Implementer. Eligibility requirements are covered in the certification preparation module.'
      },
      {
        question: 'Are the certification exam fees included in the course fee?',
        answer: 'No. The training fee covers instruction, frameworks, case study materials, and mock examination preparation. Official exam fees for CRISC, CISA, CGRC, and ISO 27001 are paid separately via the respective certification body portals.'
      },
      {
        question: 'What roles can I target after completing this programme?',
        answer: 'GRC Analyst, Risk Manager, Compliance Officer, IT Auditor, Information Security Manager, GRC Consultant, Chief Risk Officer (CRO), and Data Protection Officer (DPO) across banking, financial services, healthcare, technology, and professional services.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. Fully customised corporate GRC training programmes are available for risk, compliance, and audit teams tailored to your organisation, industry sector, existing frameworks, regulatory environment, and team skill levels.'
      }
    ],
    duration: '30-45 Hours',
    mode: 'Online',
    icon: 'grc',
    heroSubtitle: 'Governance, Risk & Compliance'
  },
  'certified-information-systems-security-professional-training-cissp': {
    slug: 'certified-information-systems-security-professional-training-cissp',
    title: 'Certified Information Systems Security Professional Training (CISSP)',
    category: 'IT Security',
    heroDescription:
      'ISC² · Certified Information Systems Security Professional · Scratch to Advanced. A comprehensive, structured training programme that takes you from foundational cybersecurity and information security concepts to mastering all eight CISSP domains — equipping you with the knowledge, depth, and strategic mindset required to pass the ISC² CISSP examination and operate as a senior security professional. Duration: 40–55 Hours. Exam: ISC² CISSP. Mode: Live Online / 1-to-1 / Corporate. Level: Scratch to Advanced. Rating: 4.9 / 5.0.',
    heroBannerImage: '/course-banners/cissp-training.png',
    callToAction: 'Request Callback',
    highlights: [
      'All eight CISSP domains covered end-to-end',
      'ISC² CISSP CAT exam strategy and mindset',
      'Scenario-based exercises with domain practice focus',
      'Security governance, risk, and compliance foundation',
      'Security operations, assessment, and testing mastery',
      'Secure software development security (Domain 8)',
      'Cross-domain integration for enterprise security leadership',
      'Full mock examinations and exam-day preparation'
    ],
    description: {
      whyChooseTitle: 'Why choose CISSP Training (ISC²) from InsureTech Skills?',
      overview:
        'This programme is structured across three progressive tiers (Beginner, Intermediate, Advanced) to enable students with limited security experience to build the broad, deep knowledge required to pass the CISSP examination and function as a senior information security practitioner. All eight CISSP Common Body of Knowledge (CBK) domains are covered comprehensively, with scenario-based exercises, domain-specific practice questions, and real-world application examples. The programme concludes with full mock examinations and exam-day strategy.',
      whyChoose:
        'CISSP is designed to test managerial and strategic thinking, not only technical recall. This programme trains you to approach security decisions like a senior manager would by prioritising business risk, legal obligations, and organisational objectives. You learn how all eight domains integrate into a cohesive enterprise security programme, which is essential for passing CAT and for thriving in leadership roles.',
      keyFeatures: [
        '28 modules across 3 tiers aligned to CISSP coverage needs',
        'Complete CBK breadth (no domain left behind)',
        'Dedicated CAT exam strategy and timing practice',
        'Two full 125-question CISSP mock examinations with walkthroughs',
        'Scenario-based exercises across the eight domains',
        'Emphasis on cross-domain integration for senior security leadership'
      ],
      whatYouWillLearn: [
        'Core information security concepts including CIA and security lifecycle',
        'Networking, OS, application, and cryptography foundations',
        'Identity and access management models and implementation patterns',
        'Security governance, policies, risk management, and threat modelling',
        'Security architecture models and cryptography implementation depth',
        'Communication and network security including segmentation and ZTNA',
        'Security assessment and testing strategies with risk-informed approaches',
        'Security operations and incident response with evidence handling',
        'Business continuity and disaster recovery planning with RTO/RPO',
        'Secure SDLC and Domain 8 software security practices',
        'Cross-domain integration and CISSP CAT exam mindset'
      ],
      prerequisites: [
        'Basic IT literacy: familiarity with operating systems and using a web browser',
        'Some exposure to networking or IT concepts is helpful but taught from scratch',
        'No prior cybersecurity or CISSP knowledge is required (foundations are taught in Module 01)',
        'Note: ISC² requires experience for certification, but this programme prepares you for the CISSP examination'
      ],
      whoCanJoin: [
        'Security analysts and engineers building the managerial security knowledge required for CISSP',
        'IT professionals transitioning into an information security career',
        'GRC and compliance professionals adding technical security depth for CISO-track roles',
        'Security architects formalising architecture knowledge across all domains with CISSP',
        'Consultants and auditors validating broad security expertise with a globally recognised credential',
        'Professionals targeting CISO and senior security leadership roles'
      ],
      distinctness:
        'CISSP trains how to think like an executive security leader. You build domain breadth across governance, risk, operations, networking, cryptography, and secure software development. Then you connect the dots across all eight domains so you can design and manage an enterprise security programme and succeed in CAT scenario-based decision making.'
    },
    modules: [
      { title: '1. Introduction to Information Security', topics: ['CIA triad', 'Authentication, authorisation, accountability, non-repudiation concepts', 'Threat vs vulnerability vs risk', 'Security management lifecycle concepts'] },
      { title: '2. Cybersecurity Terminology & Concepts', topics: ['Attack types: passive vs active; insider vs outsider', 'Malware categories: virus, worm, ransomware, spyware, rootkit', 'Social engineering and phishing', 'Defense-in-depth and control categories'] },
      { title: '3. Networking Fundamentals for Security Professionals', topics: ['OSI and TCP/IP models', 'IP addressing, DNS, HTTP/HTTPS concepts', 'Common protocols and network segmentation', 'Firewall types, VPNs, NAT, and security implications'] },
      { title: '4. Operating System & Application Security Basics', topics: ['Windows and Linux security fundamentals', 'User accounts, privileges, and patch management', 'Hardening concepts', 'OWASP Top 10 overview and secure software development basics'] },
      { title: '5. Cryptography Fundamentals', topics: ['Symmetric vs asymmetric encryption', 'Hashing and digital signatures', 'PKI basics', 'SSL/TLS and where cryptography is applied', 'Common algorithms (AES, RSA, SHA)'] },
      { title: '6. Identity & Access Management Fundamentals', topics: ['Authentication factors: know/have/are', 'SSO concepts', 'Multi-Factor Authentication (MFA)', 'Directory services (LDAP, Active Directory)', 'Access control models (DAC, MAC, RBAC, ABAC)', 'Identity lifecycle management'] },
      { title: '7. Security Governance & Risk Basics', topics: ['Security governance structures', 'Security policies and standards hierarchy', 'Risk management: identify, assess, treat, monitor', 'Risk appetite and strategy alignment'] },
      { title: '8. Introduction to the CISSP Certification & CBK', topics: ['ISC² CISSP overview', 'CISSP eligibility and endorsement process concepts', 'Eight CISSP domains', 'CAT exam format and passing concepts', 'Study strategy overview'] },
      { title: '9. Domain 1 — Security & Risk Management (Part 1)', topics: ['Security governance principles', 'Legal and regulatory requirements examples', 'ISC² Code of Ethics', 'Security policies and procedures', 'Business continuity planning concepts'] },
      { title: '10. Domain 1 — Security & Risk Management (Part 2)', topics: ['Risk management frameworks (NIST RMF, ISO 31000, FAIR)', 'Threat modelling (STRIDE, PASTA, DREAD)', 'Quantitative and qualitative risk analysis', 'Risk treatment options', 'Personnel security and security awareness'] },
      { title: '11. Domain 2 — Asset Security', topics: ['Information and asset classification', 'Data lifecycle management concepts', 'Data remanence and secure disposal', 'Privacy protection concepts', 'Data localisation and protecting PII'] },
      { title: '12. Domain 3 — Security Architecture & Engineering (Part 1)', topics: ['Security architecture models (Zachman, SABSA, TOGAF)', 'Security design principles (least privilege, fail-safe defaults, separation of duties)', 'Trusted computing concepts', 'Secure hardware architecture basics'] },
      { title: '13. Domain 3 — Security Architecture & Engineering (Part 2)', topics: ['Cryptography in depth: symmetric algorithms (AES, DES, 3DES)', 'Asymmetric algorithms (RSA, ECC, Diffie-Hellman)', 'Hashing (SHA family, MD5)', 'PKI implementation and certificate lifecycle', 'Key management and cryptographic attacks concepts'] },
      { title: '14. Domain 3 — Security Architecture & Engineering (Part 3)', topics: ['Physical security controls', 'Site and facility design and perimeter security', 'Environmental controls and access mechanisms', 'CCTV and physical security countermeasures'] },
      { title: '15. Domain 4 — Communication & Network Security (Part 1)', topics: ['Network architecture design (OSI/TCP-IP)', 'Secure network components and transmission media', 'Network attacks: DoS/DDoS, MITM, ARP spoofing, DNS poisoning', 'Wireless security concepts (WPA3, 802.1X, EAP)', 'Network segmentation strategies'] },
      { title: '16. Domain 4 — Communication & Network Security (Part 2)', topics: ['Firewalls: stateful, NGFW, WAF', 'IDS/IPS, proxies, NAC', 'VPN types: IPSec, SSL/TLS, MPLS', 'SD-WAN security', 'Micro-segmentation and ZTNA for secure remote access'] },
      { title: '17. Domain 5 — Identity & Access Management (IAM)', topics: ['IAM architecture and access governance', 'Federated identity: SAML, OAuth 2.0, OpenID Connect', 'Privileged Access Management (PAM) concepts', 'Just-in-time access concepts', 'Directory services and IGA (Identity Governance and Administration)'] },
      { title: '18. Domain 5 — Access Control Models & Implementation', topics: ['MAC, DAC, RBAC, ABAC concepts', 'Rule-based access control concepts', 'Bell-LaPadula, Biba, Clark-Wilson, Chinese Wall, Graham-Denning models'] },
      { title: '19. Domain Review & Mid-Programme Practice Assessment', topics: ['Comprehensive review of Domains 1-5', '125-question mid-programme practice exam', 'Question analysis and identification of weak areas', 'Exam thinking strategy: think like a manager', 'Study plan adjustment'] },
      { title: '20. Domain 6 — Security Assessment & Testing (Part 1)', topics: ['Assessment and testing strategies', 'Vulnerability scanning vs penetration testing', 'Penetration testing phases and reporting', 'Vulnerability databases (CVE, CVSS)', 'Security testing methodologies'] },
      { title: '21. Domain 6 — Security Assessment & Testing (Part 2)', topics: ['Internal vs external security audits', 'Log reviews and synthetic transactions', 'Code reviews and misuse case testing', 'Interface testing and security metric reporting', 'Breach and attack simulation (BAS) concepts'] },
      { title: '22. Domain 7 — Security Operations (Part 1)', topics: ['SOC functions', 'Need-to-know vs least privilege', 'Separation of duties and job rotation', 'Logging and monitoring requirements', 'SIEM architecture and threat intelligence', 'Incident detection and triage'] },
      { title: '23. Domain 7 — Security Operations (Part 2)', topics: ['Incident response lifecycle (NIST SP 800-61)', 'Digital forensics and evidence handling', 'Chain of custody and order of volatility', 'E-discovery and disaster recovery operations', 'Patch and vulnerability management, plus change management'] },
      { title: '24. Domain 7 — Business Continuity & Disaster Recovery', topics: ['BIA methodology', 'RTO and RPO definitions', 'Hot/warm/cold site recovery strategies', 'Backup types and DR testing', 'Tabletop, simulation, parallel, and full interruption testing', 'Aligning BC/DR with enterprise risk management'] },
      { title: '25. Domain 8 — Software Development Security (Part 1)', topics: ['Secure SDLC (Waterfall, Agile, DevSecOps)', 'Security in requirements, design, coding, testing, and deployment', 'OWASP Top 10 in depth', 'SAST/DAST and code review processes'] },
      { title: '26. Domain 8 — Software Development Security (Part 2)', topics: ['Database security: SQL injection prevention and stored procedure security', 'API security patterns', 'Software supply chain security', 'Containerisation and Kubernetes security basics', 'Cloud-native application security and third-party/open-source risk management'] },
      { title: '27. Emerging Security Topics & Cross-Domain Integration', topics: ['Cloud security architecture and shared responsibility', 'CASB and CSPM concepts', 'IoT and OT/ICS security overview', 'AI and machine learning security risks', 'Zero trust architecture implementation', 'Integrating all eight CISSP domains coherently'] },
      { title: '28. CISSP CAT Exam Preparation & Full Mock Examinations', topics: ['CAT mechanics: 125-175 adaptive questions', 'Time management and elimination strategies', 'Think like a manager exam mindset', 'Two full-length CISSP practice exams with walkthroughs', 'Final exam-day preparation'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: 'mentor', description: 'Dedicated doubt clearing with CISSP-certified instructors.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: 'online', description: 'Live instructor-led sessions with scenario-based domain practice.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: 'corp', description: 'Custom enterprise training for security, audit, and risk teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Complete CISSP CBK Coverage', icon: 'cbk', description: 'All eight domains covered with depth.' },
      { title: 'CAT Exam Mindset Training', icon: 'cat', description: 'Adaptive testing strategy and time management.' },
      { title: 'Scenario-Based Practice', icon: 'scenario', description: 'Exercises that train higher-order thinking.' },
      { title: 'Mock Exams & Walkthroughs', icon: 'mock', description: 'Full mock exams with detailed answer review.' },
      { title: 'Strategic Senior Security Focus', icon: 'leadership', description: 'Managerial decision making for leadership readiness.' },
      { title: 'Cross-Domain Integration Skills', icon: 'integration', description: 'Connect domains into a cohesive enterprise security programme.' }
    ],
    faqs: [
      {
        question: 'Can I join with limited security experience?',
        answer: 'Yes. The programme begins with information security fundamentals, networking basics, and cryptography concepts from scratch. Some IT background helps, but it is not required.'
      },
      {
        question: 'What is the ISC² experience requirement for CISSP?',
        answer: 'ISC² requires at least five years of cumulative paid work experience in two or more CISSP domains for certification. You can still take the exam and, upon passing, become an Associate of ISC² until the experience requirement is fulfilled.'
      },
      {
        question: 'How is the CISSP exam structured?',
        answer: 'CISSP uses Computerised Adaptive Testing (CAT). The exam presents between 125 and 175 questions over four hours, with question difficulty adapting to your responses. It includes scenario-based questions requiring higher-order thinking.'
      },
      {
        question: 'Is the CISSP exam fee included in the course fee?',
        answer: 'No. The official ISC² CISSP examination fee is paid separately via the Pearson VUE portal at the time of scheduling.'
      },
      {
        question: 'What roles can I target after earning CISSP?',
        answer: 'CISSP-certified professionals can pursue roles such as CISO, Security Director, Security Architect, Information Security Manager, GRC Lead, Security Consultant, and Head of Cyber Risk across industries.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. Fully customised corporate CISSP training is available for security, risk, and IT teams, tailored to your organisation\'s industry, regulatory environment, and team skill levels.'
      }
    ],
    duration: '40-55 Hours',
    mode: 'Online',
    icon: 'cissp',
    heroSubtitle: 'CISSP'
  }
  ,
  'microsoft-azure-data-scientist-training': {
    slug: 'microsoft-azure-data-scientist-training',
    title: 'Microsoft Azure Data Scientist Training',
    category: 'Data Science',
    heroDescription:
      'Microsoft Azure · DP-100 · Scratch to Advanced — Azure Data Scientist Associate Training. A comprehensive, structured training programme that takes you from Python and mathematics fundamentals all the way to designing, training, deploying, and monitoring machine learning solutions using Azure Machine Learning — fully aligned to the Microsoft DP-100 (Designing and Implementing a Data Science Solution on Azure) certification examination. Duration: 35–50 Hours. Exam: DP-100. Mode: Live Online / 1-to-1 / Corporate. Level: Scratch to Advanced. Rating: 4.8 / 5.0.',
    heroBannerImage: '/course-banners/azure-data-scientist-training.png',
    callToAction: 'Request Callback',
    highlights: [
      'DP-100 aligned curriculum and exam readiness',
      'Azure Machine Learning workspace labs',
      'AutoML and HyperDrive for training optimization',
      'Managed online endpoints and batch inference',
      'MLOps with Azure ML and Azure DevOps CI/CD',
      'Responsible AI and generative AI integration with Azure OpenAI'
    ],
    description: {
      whyChooseTitle: 'Why choose Microsoft DP-100 Training from InsureTech Skills?',
      overview:
        'Structured across three progressive tiers (Beginner, Intermediate, Advanced) so students with no prior data science or Azure experience can reach full proficiency in designing and implementing end-to-end machine learning solutions on Azure Machine Learning. Every module includes hands-on coding exercises and Azure ML workspace labs. The programme culminates in a production-ready capstone project and comprehensive DP-100 exam preparation.',
      whyChoose:
        'Most data science programmes stop at model building. This programme adds the production and operational skills required for Azure ML deployments: pipelines, model monitoring, CI/CD for ML, and responsible AI practices. You also learn how to integrate generative AI using Azure OpenAI and RAG architectures, so you can deliver end-to-end solutions.',
      keyFeatures: [
        '28 module end-to-end Azure ML data science syllabus',
        'Hands-on Python notebooks and Azure ML workspace labs',
        'AutoML and HyperDrive for model training optimisation',
        'Deployment to managed online and batch endpoints',
        'Responsible AI and explainability with Azure ML',
        'DP-100 mock exams and full capstone project'
      ],
      whatYouWillLearn: [
        'Data science workflow: problem definition, EDA, modeling, and deployment',
        'Python for data science using NumPy, pandas, and visualization libraries',
        'Mathematics for machine learning: linear algebra, probability, and calculus concepts',
        'Azure ML data management with datastores, datasets, labeling, and versioning',
        'Feature engineering and preprocessing pipelines for reproducible training',
        'Training, tuning, and experimentation with AutoML and HyperDrive',
        'Model registration and deployment to managed endpoints (real-time and batch)',
        'MLOps with Azure ML and Azure DevOps CI/CD for retraining and release workflows',
        'Model monitoring, data drift detection, and operational alerting',
        'Responsible AI and model explainability using SHAP and LIME'
      ],
      prerequisites: [
        'Basic computer literacy and comfort using a web browser',
        'No prior Azure or machine learning experience required; taught from Module 01 onward',
        'Python is taught from scratch in Module 02',
        'Willingness to engage with hands-on coding exercises and Azure ML workspace labs'
      ],
      whoCanJoin: [
        'Complete beginners: start from Python fundamentals and progress to deployed Azure ML solutions',
        'Data analysts: extend SQL and BI skills into predictive modeling and ML on Azure',
        'Software developers: add data science and ML engineering capabilities using Azure ML',
        'Data engineers: complement pipeline and infrastructure skills with MLOps for ML',
        'IT and cloud professionals: formalize Azure ML data science skills aligned to DP-100',
        'Graduates and career changers entering the data science profession'
      ],
      distinctness:
        'End-to-end Azure Machine Learning training aligned to DP-100: you learn the full path from Python and mathematics to training, deployment, monitoring, and MLOps automation, including responsible AI and generative AI integration with Azure OpenAI.'
    },
    modules: [
      { title: '1. Introduction to Data Science & AI', topics: ['Data science workflow: define, collect, EDA, model, deploy', 'AI vs ML vs deep learning', 'Real-world use cases and career paths'] },
      { title: '2. Python Programming for Data Science', topics: ['Python syntax and control flow', 'OOP basics and file I/O', 'NumPy, pandas, Matplotlib, and scikit-learn'] },
      { title: '3. Mathematics for Machine Learning', topics: ['Linear algebra: vectors and matrices', 'Statistics and hypothesis testing', 'Probability (Bayes theorem) and calculus for gradients'] },
      { title: '4. Data Wrangling with pandas & NumPy', topics: ['Loading datasets (CSV/JSON/Excel)', 'Cleaning: missing values and type conversions', 'Preparing clean data for modeling'] },
      { title: '5. Exploratory Data Analysis (EDA) & Visualisation', topics: ['Univariate and bivariate analysis', 'Correlation and distribution analysis', 'Plotting with Matplotlib, Seaborn, and Plotly'] },
      { title: '6. Introduction to Machine Learning Concepts', topics: ['Supervised vs unsupervised vs reinforcement learning', 'Bias-variance tradeoff and overfitting', 'Evaluation metrics: precision/recall/F1/AUC/RMSE/MAE'] },
      { title: '7. Introduction to Microsoft Azure & Azure ML', topics: ['Azure fundamentals: portal, subscriptions, resource groups', 'Azure Machine Learning workspace setup', 'Compute instances, clusters, and Studio interface'] },
      { title: '8. Data Management in Azure ML', topics: ['Datastores and datasets (File and Tabular)', 'Labeling and dataset versioning', 'Connecting to Blob Storage and Data Lake'] },
      { title: '9. Feature Engineering & Data Preprocessing', topics: ['Missing value imputation and outlier handling', 'Encoding and scaling (normalisation/standardisation)', 'Feature selection and preprocessing pipelines'] },
      { title: '10. Supervised Learning - Regression', topics: ['Linear and polynomial regression', 'Regularisation: Ridge, Lasso, ElasticNet', 'Evaluation: R2/RMSE/MAE and scikit-learn + Azure ML'] },
      { title: '11. Supervised Learning - Classification', topics: ['Logistic regression and Decision Trees', 'Random Forest, Gradient Boosting, SVM, KNN, Naive Bayes', 'Classification metrics and model evaluation'] },
      { title: '12. Unsupervised Learning', topics: ['K-Means and hierarchical clustering', 'DBSCAN, PCA, and anomaly detection', 'Use cases: segmentation and fraud detection'] },
      { title: '13. Training & Running Experiments in Azure ML', topics: ['Submitting training runs', 'Logging with MLflow and tracking experiments', 'Environment management and reproducibility'] },
      { title: '14. Automated Machine Learning (AutoML)', topics: ['Configuring AutoML for classification/regression/forecasting', 'Featurisation and primary metrics', 'Reviewing explanations and deploying best models'] },
      { title: '15. Hyperparameter Tuning with Azure ML', topics: ['Hyperparameter search spaces', 'Sampling: random/grid/Bayesian', 'HyperDrive execution and early termination policies'] },
      { title: '16. Deep Learning Fundamentals', topics: ['Neural network concepts and backpropagation', 'Optimizers: SGD/Adam/RMSProp', 'CNNs for image tasks and RNN/LSTM concepts'] },
      { title: '17. Natural Language Processing (NLP)', topics: ['Tokenisation, stopword removal, stemming/lemmatisation', 'TF-IDF and embeddings (Word2Vec/GloVe)', 'Sentiment analysis and text classification', 'Azure AI Language service for NLP tasks'] },
      { title: '18. Azure ML Pipelines', topics: ['Building pipelines with Azure ML SDK v2', 'Passing data between steps', 'Running and scheduling end-to-end training workflows'] },
      { title: '19. Model Interpretability & Responsible AI', topics: ['Explainability with SHAP and LIME', 'Fairness analysis concepts', 'Error analysis, counterfactual thinking, and responsible AI practices'] },
      { title: '20. Model Registration & Management', topics: ['Model registry and versioning', 'Tags and lineage concepts', 'Staging and promoting model versions'] },
      { title: '21. Model Deployment - Real-Time & Batch Inference', topics: ['Managed online endpoints', 'Batch endpoints for large-scale scoring', 'Testing and deployment strategies'] },
      { title: '22. MLOps with Azure ML & Azure DevOps', topics: ['MLOps principles and maturity model', 'CI/CD pipelines for ML with Azure DevOps and GitHub Actions', 'Automated training/deployment and approval gates'] },
      { title: '23. Model Monitoring & Data Drift Detection', topics: ['Model Monitoring for production endpoints', 'Data drift and prediction drift', 'Automated retraining triggers'] },
      { title: '24. Generative AI & Azure OpenAI Integration', topics: ['LLM concepts and prompt engineering', 'RAG architecture', 'Responsible generative AI integration with Azure OpenAI'] },
      { title: '25. Distributed Training & Large-Scale Compute', topics: ['Data/model parallelism concepts', 'Azure ML compute clusters for distributed jobs', 'GPU configuration and cost optimisation'] },
      { title: '26. Security, Governance & Cost Management in Azure ML', topics: ['Private endpoints and VNet integration concepts', 'Managed identity and role-based access control', 'Encryption, audit logging, and Azure Policy compliance'] },
      { title: '27. Capstone Project - End-to-End ML Solution on Azure', topics: ['Problem framing, EDA, and feature engineering', 'Training with AutoML and HyperDrive', 'Production deployment and CI/CD pipeline setup'] },
      { title: '28. DP-100 Exam Preparation & Full Mock Examinations', topics: ['Full-length DP-100 mock examinations', 'Domain-wise review and question focus', 'Exam strategy, time management, and Microsoft Learn walkthroughs'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '1to1', description: 'Guided mentor sessions and coding labs for DP-100 readiness.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: 'online', description: 'Live instructor-led batches with hands-on Azure ML workspace labs.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: 'corp', description: 'Customized enterprise training for data science and MLOps teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'DP-100 Exam Readiness', icon: 'dp', description: 'Curriculum mapped to DP-100 domain focus areas.' },
      { title: 'Hands-on Azure ML Labs', icon: 'lab', description: 'Build and deploy real models in Azure ML.' },
      { title: 'AutoML and HyperDrive', icon: 'tune', description: 'Train and optimize models with tuning and experiment workflows.' },
      { title: 'MLOps and CI/CD Skills', icon: 'mlops', description: 'Production skills for retraining, release automation, and monitoring.' },
      { title: 'Responsible AI and Explainability', icon: 'rai', description: 'Explainability and responsible practices with Azure ML.' },
      { title: 'Capstone Portfolio Project', icon: 'cap', description: 'End-to-end deployable ML artefact for interviews.' }
    ],
    faqs: [
      {
        question: 'Can I join with no prior Python or data science experience?',
        answer: 'Yes. The programme begins from absolute scratch. Module 02 covers Python fundamentals, Module 03 covers mathematics, and Module 04 covers data wrangling.'
      },
      {
        question: 'How is the curriculum structured across the three levels?',
        answer: 'Modules 01-09 cover data science concepts, Python, mathematics, EDA, Azure ML basics, data management, and feature engineering. Modules 10-19 cover supervised learning, unsupervised learning, deep learning, NLP, Azure ML experiments, AutoML, and HyperDrive. Modules 20-28 cover model registry, deployment, MLOps, monitoring, generative AI, and DP-100 exam preparation.'
      },
      {
        question: 'Is the Microsoft DP-100 exam fee included in the course fee?',
        answer: 'No. The training fee covers instruction, labs, and exam preparation materials. The official Microsoft DP-100 exam fee is paid separately at scheduling through the Microsoft Certification portal.'
      },
      {
        question: 'Will I build a real portfolio project?',
        answer: 'Yes. Module 27 is a dedicated end-to-end capstone project that covers data ingestion, EDA, feature engineering, training with AutoML and HyperDrive, responsible AI analysis, deployment to a managed endpoint, and CI/CD pipeline setup.'
      },
      {
        question: 'What roles can I target after completing this programme?',
        answer: 'Graduates are well-positioned for roles such as Data Scientist, ML Engineer, AI/ML Solutions Architect, MLOps Engineer, Applied Scientist, and Senior Data Scientist.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. Fully customised corporate training programmes are available for data science, AI, and analytics teams, tailored to your organisation and business use cases.'
      }
    ],
    duration: '35-50 Hours',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'DP-100'
  },
    'google-professional-cloud-architect-training': {
    slug: 'google-professional-cloud-architect-training',
    title: 'Google Professional Cloud Architect Training',
    category: 'Cloud Computing',
    heroDescription:
      'Google Cloud · Professional Cloud Architect · Scratch to Advanced. A comprehensive, structured training programme that takes you from cloud computing fundamentals all the way to designing, securing, and governing scalable, highly available enterprise solutions on Google Cloud Platform — fully aligned to the Google Professional Cloud Architect (PCA) certification examination. Duration: 35–50 Hours. Exam: Google Professional Cloud Architect. Mode: Live Online / 1-to-1 / Corporate. Level: Scratch to Advanced. Rating: 4.8 / 5.0. Every module includes hands-on lab exercises in a real GCP environment; the programme culminates in an end-to-end capstone project mirroring the Professional Cloud Architect case study format.',
    heroBannerImage: '/course-banners/google-professional-cloud-architect.png',
    callToAction: 'Request Callback',
    highlights: [
      '28 modules across Beginner, Intermediate, and Advanced tiers',
      'Hands-on GCP Console and gcloud CLI labs every module',
      'Full PCA exam prep including all four official Google case studies',
      'Enterprise architecture: HA, Zero Trust, FinOps, org hierarchy',
      'Data lakes, BigQuery, Dataflow, Vertex AI, and Anthos coverage',
      'Mock examinations and capstone architecture project'
    ],
    description: {
      whyChooseTitle: 'Why choose Google Professional Cloud Architect Training from InsureTech Skills?',
      overview:
        'Structured across three progressive tiers — Beginner, Intermediate, and Advanced — so learners with no prior cloud experience can reach proficiency in designing and delivering enterprise-grade solutions on GCP. Reinforced with hands-on labs and a capstone aligned to PCA case studies.',
      whyChoose:
        'Google Cloud leads in data-intensive and AI-driven workloads. This programme gives you one coherent path from fundamentals to expert architecture — compute, networking, storage, data, AI, security, governance, hybrid/multi-cloud with Anthos, FinOps, and the GCP Well-Architected Framework.',
      keyFeatures: [
        'PCA-aligned syllabus with case study module (EHR, HRL, Mountkirk, TerramEarth)',
        '28 modules with tiered progression',
        'Real GCP environment labs',
        'Mock exams and exam strategy',
        'Capstone mirroring PCA case format'
      ],
      whatYouWillLearn: [
        'Cloud economics, shared responsibility, and GCP resource hierarchy',
        'IAM, service accounts, and Workload Identity Federation',
        'Compute, GKE, Cloud Run, serverless options and trade-offs',
        'GCS, networking, load balancing, hybrid connectivity',
        'BigQuery, Dataflow, Pub/Sub, Vertex AI, and data lakehouse patterns',
        'Security: Cloud Armor, KMS, VPC-SC, SCC, BeyondCorp Enterprise',
        'Anthos, Terraform on GCP, Cloud Build, and migration strategies',
        'HA, scalability, org design, microservices, FinOps, and Well-Architected reviews',
        'PCA exam preparation with full case study analysis'
      ],
      prerequisites: [
        'Basic computer literacy and comfort navigating a web browser',
        'Any prior exposure to networking, Linux, or IT administration is helpful but not required',
        'No prior GCP or cloud platform experience is necessary — introduced from Module 01',
        'Willingness to engage with hands-on GCP Console and gcloud CLI lab exercises'
      ],
      whoCanJoin: [
        'Complete beginners — start from fundamentals to enterprise GCP architectures',
        'Cloud / IT engineers deepening GCP expertise and PCA certification',
        'AWS / Azure professionals adding GCP for multi-cloud careers',
        'Solutions architects designing scalable, secure, cost-efficient cloud solutions',
        'DevOps engineers extending CI/CD into GCP platform and architecture design',
        'IT graduates and career changers building a PCA-aligned foundation'
      ],
      distinctness:
        'One programme from zero to PCA-ready architect: AI and data strengths (Vertex AI, BigQuery, Dataflow), Zero Trust and org-level governance, Anthos for hybrid/multi-cloud, dedicated module on all four official PCA case studies, and FinOps plus Well-Architected design reviews — fewer prep courses cover case studies at this depth.'
    },
    modules: [
      { title: '1. Introduction to Cloud Computing', topics: ['What cloud computing is', 'IaaS vs PaaS vs SaaS', 'Public, private, hybrid, and multi-cloud models', 'Shared responsibility model', 'Cloud economics and total cost of ownership (TCO) fundamentals'] },
      { title: '2. Google Cloud Platform Overview & Console Navigation', topics: ['GCP global infrastructure: Regions, Zones, Points of Presence', 'GCP Console walkthrough', 'Cloud Shell', 'gcloud CLI basics', 'Projects, billing accounts, and the GCP resource hierarchy'] },
      { title: '3. Identity & Access Management (IAM)', topics: ['Principals, roles (primitive, predefined, custom), policies', 'Resource-level bindings', 'Service accounts', 'Workload Identity Federation', 'IAM best practices including least privilege'] },
      { title: '4. Google Compute Engine (GCE)', topics: ['VM instance types and machine families', 'Creating and managing VMs', 'Instance templates and managed instance groups (MIGs)', 'Preemptible and Spot VMs', 'Startup scripts'] },
      { title: '5. Google Cloud Storage (GCS)', topics: ['Storage classes: Standard, Nearline, Coldline, Archive', 'Bucket configuration', 'Object lifecycle policies', 'Versioning', 'Uniform bucket-level access', 'Signed URLs', 'IAM vs ACL access control'] },
      { title: '6. Virtual Private Cloud (VPC) Networking Fundamentals', topics: ['VPC architecture', 'Subnets (auto vs custom mode)', 'IP addressing', 'Firewall rules', 'Routes', 'Cloud DNS', 'Cloud NAT', 'Default vs custom VPC networks'] },
      { title: '7. GCP Billing, Cost Management & Quotas', topics: ['Billing accounts', 'Budgets and alerts', 'GCP Pricing Calculator', 'Committed use discounts (CUDs) and sustained use discounts (SUDs)', 'Quota management', 'Cost allocation with labels'] },
      { title: '8. Google Cloud Databases — Fundamentals', topics: ['Cloud SQL, Cloud Spanner, Firestore, Bigtable, Memorystore', 'Choosing the right database for structured, semi-structured, and unstructured workloads'] },
      { title: '9. Advanced Networking', topics: ['Cloud Load Balancing (HTTP(S), TCP/SSL, Internal)', 'Cloud CDN', 'VPC Peering, Shared VPC', 'Cloud Interconnect (Dedicated and Partner)', 'Cloud VPN (HA VPN)', 'Network Intelligence Center'] },
      { title: '10. Google Kubernetes Engine (GKE)', topics: ['Kubernetes fundamentals', 'GKE Standard vs Autopilot', 'Node pools, workloads, services, ingress', 'Helm', 'Cluster security', 'GKE Monitoring'] },
      { title: '11. Serverless & PaaS Compute', topics: ['Cloud Run', 'Cloud Functions', 'App Engine (Standard and Flexible)', 'Cloud Endpoints', 'Choosing serverless options by workload'] },
      { title: '12. Data & Analytics Services', topics: ['BigQuery', 'Cloud Dataflow (Apache Beam)', 'Cloud Dataproc', 'Pub/Sub', 'Looker Studio', 'End-to-end analytics pipelines'] },
      { title: '13. AI & ML on Google Cloud', topics: ['Vertex AI: AutoML, custom training, model serving', 'Pre-built AI APIs (Vision, NL, Speech, Translation)', 'BigQuery ML', 'Integrating AI into architecture designs'] },
      { title: '14. GCP Security Services', topics: ['Cloud Armor (DDoS and WAF)', 'Secret Manager', 'Cloud KMS', 'VPC Service Controls', 'Binary Authorization', 'Security Command Center (SCC)', 'Defence-in-depth on GCP'] },
      { title: '15. Monitoring, Logging & Observability', topics: ['Cloud Monitoring: metrics, dashboards, uptime checks, alerting', 'Cloud Logging: sinks, log-based metrics, audit logs', 'Cloud Trace', 'Cloud Profiler', 'Error Reporting'] },
      { title: '16. Hybrid & Multi-Cloud with Anthos', topics: ['Anthos architecture', 'Anthos Config Management', 'Anthos Service Mesh (Istio)', 'GKE on-premises with Anthos clusters', 'Extending GCP governance to multi-cloud'] },
      { title: '17. DevOps & CI/CD on GCP', topics: ['Cloud Build', 'Cloud Deploy (progressive delivery)', 'Artifact Registry', 'Source Repositories', 'Container Registry', 'GitOps with Argo CD on GKE'] },
      { title: '18. Infrastructure as Code with Terraform on GCP', topics: ['Terraform GCP provider', 'State backend with GCS', 'Modules, workspaces, import', 'Reusable infrastructure modules'] },
      { title: '19. Migration Strategies to GCP', topics: ['The 6 Rs migration framework', 'Google Cloud Migration Centre', 'Migrate to Virtual Machines', 'Database Migration Service', 'Transfer Appliance', 'Phased enterprise migrations'] },
      { title: '20. Designing Highly Available & Resilient Architectures', topics: ['Multi-region and multi-zone patterns', 'Global load balancing', 'Cloud Spanner for multi-region consistency', 'RTO/RPO planning', 'Health checks, failover strategies', 'GCP SLA composition model'] },
      { title: '21. Scalability & Performance Architecture', topics: ['Auto-scaling for GCE, GKE, Cloud Run', 'Caching with Memorystore and CDN', 'Cloud Bigtable for low-latency throughput', 'Right-sizing for cost-performance balance'] },
      { title: '22. Enterprise Security Architecture & Zero Trust', topics: ['BeyondCorp Enterprise', 'Context-aware access', 'VPC Service Controls perimeters', 'Organisation-level security policies', 'Data residency', 'CMEK with Cloud KMS', 'GDPR/HIPAA compliance on GCP'] },
      { title: '23. Google Cloud Organisation & Resource Hierarchy Design', topics: ['Organisation structure', 'Folder hierarchy', 'Project naming', 'Policy inheritance', 'Shared VPC for enterprise', 'Constraints for governance at scale'] },
      { title: '24. Microservices & Event-Driven Architecture on GCP', topics: ['Microservices on Cloud Run and GKE', 'Anthos Service Mesh', 'Pub/Sub and Eventarc', 'Apigee for API design', 'Asynchronous decoupled patterns'] },
      { title: '25. Data Architecture & Lakehouse Design on GCP', topics: ['Data lakes with GCS + BigQuery', 'Streaming with Dataflow + Pub/Sub', 'BigLake', 'Dataplex for governance', 'OLAP + OLTP hybrid architectures'] },
      { title: '26. Cost Optimisation & FinOps on GCP', topics: ['GCP FinOps framework', 'CUD and SUD strategy', 'Spot VM patterns', 'Active Assist rightsizing', 'Billing export to BigQuery', 'Tagging-based chargeback'] },
      { title: '27. GCP Well-Architected Framework & Design Reviews', topics: ['Operational Excellence, Security, Reliability, Performance, Cost, Sustainability pillars', 'Applying the framework to evaluate and improve designs'] },
      { title: '28. PCA Exam Preparation, Case Studies & Capstone Project', topics: ['Full-length PCA mock examinations', 'Official case study analysis: EHR Healthcare, Helicopter Racing League, Mountkirk Games, TerramEarth', 'Exam strategy', 'End-to-end capstone architecture project'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Dedicated mentor support with guided GCP architecture labs.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live instructor-led batches with hands-on GCP exercises.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customised enterprise training for architecture and engineering teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'One Programme — Zero to PCA Architect', icon: '✓', description: 'Single structured path from cloud basics to production-grade GCP architecture.' },
      { title: 'Google’s Premier Cloud Credential', icon: '📜', description: 'PCA is consistently among the highest-paying IT certifications globally.' },
      { title: 'Hands-On GCP Labs', icon: '🧪', description: 'Real Console and gcloud exercises in every module.' },
      { title: 'AI & Data Strength', icon: '🤖', description: 'Vertex AI, BigQuery, Dataflow, Pub/Sub — aligned to enterprise demand.' },
      { title: 'Zero Trust & Compliance', icon: '🛡️', description: 'BeyondCorp, VPC-SC, SCC, and org-level policies for regulated industries.' },
      { title: 'Official Case Studies', icon: '📋', description: 'All four Google PCA case studies analysed — a differentiator on the exam.' },
      { title: 'Anthos & Multi-Cloud', icon: '☁️', description: 'Hybrid and multi-cloud skills for enterprise architect roles.' },
      { title: 'Top-Tier Salary Potential', icon: '💼', description: 'PCA features in global salary surveys for certified architects.' }
    ],
    faqs: [
      {
        question: 'Can I join with no prior cloud or GCP experience?',
        answer: 'Yes. The programme begins from cloud computing fundamentals and GCP basics in Module 01. No prior knowledge of GCP or infrastructure is required to enrol and succeed.'
      },
      {
        question: 'How is the curriculum structured across the three levels?',
        answer: 'Modules 01–08 cover cloud fundamentals, core GCP services (compute, storage, networking, IAM, databases), and cost management. Modules 09–19 cover GKE, serverless, data and analytics, security, Anthos, DevOps, Terraform, and migration. Modules 20–28 cover advanced architecture — HA design, scalability, Zero Trust security, org governance, microservices, data lakes, FinOps, the GCP Well-Architected Framework, and full PCA exam preparation with case study analysis.'
      },
      {
        question: 'What makes this programme different for PCA exam preparation?',
        answer: 'The PCA exam includes real-world case studies that many courses skim. This programme dedicates a full module to analysing all four official Google PCA case studies — EHR Healthcare, Helicopter Racing League, Mountkirk Games, and TerramEarth — giving you a structured approach to case-based questions.'
      },
      {
        question: 'Is the Google PCA exam fee included in the course fee?',
        answer: 'The training fee covers all instruction, lab environments, and exam preparation materials. The official Google Professional Cloud Architect exam fee is paid separately via the Google Cloud Certification portal at the time of scheduling.'
      },
      {
        question: 'What roles can I target after completing this programme?',
        answer: 'Graduates are well-positioned for Google Cloud Architect, Cloud Solutions Architect, Platform Engineer, Cloud Infrastructure Architect, GCP Consultant, and Principal Cloud Engineer roles globally.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. Fully customised corporate training is available for cloud architecture and engineering teams, tailored to your organisation’s GCP environment, migration objectives, and skill levels. Contact us for a dedicated proposal and team pricing.'
      }
    ],
    duration: '35-50 Hours',
    mode: 'Online',
    icon: 'gcp',
    tools: [
      'Compute Engine', 'GKE', 'Cloud Run', 'Cloud Functions', 'App Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Spanner', 'Cloud VPC',
      'BigQuery', 'Cloud Dataflow', 'Cloud Dataproc', 'Pub/Sub', 'Vertex AI', 'BigLake', 'Dataplex', 'Looker Studio',
      'Cloud Load Balancing', 'Cloud Armor', 'Cloud KMS', 'Secret Manager', 'Security Command Center', 'BeyondCorp Enterprise', 'VPC Service Controls', 'Anthos',
      'Terraform (GCP)', 'Cloud Build', 'Cloud Deploy', 'Artifact Registry', 'Cloud Monitoring', 'Cloud Logging', 'gcloud CLI', 'GitHub Actions'
    ],
    heroSubtitle: 'Google Professional Cloud Architect (PCA)'
  },
  'tableau-data-analyst-training': {
    slug: 'tableau-data-analyst-training',
    title: 'Tableau Data Analyst Training',
    category: 'Data Analytics',
    heroDescription:
      'Tableau · Salesforce · Data Analytics · Scratch to Advanced. A comprehensive, structured training programme that takes you from data analysis fundamentals and Tableau basics all the way to designing enterprise-grade dashboards, building advanced calculated fields, working with complex data models, and publishing production-ready analytics solutions — aligned to the Tableau Desktop Specialist and Tableau Certified Data Analyst certifications. Duration: 25–40 Hours. Certifications: Tableau Desktop Specialist · Tableau Certified Data Analyst. Mode: Live Online / 1-to-1 / Corporate. Level: Scratch to Advanced. Rating: 4.8 / 5.0.',
    heroBannerImage: '/course-banners/azure-power-bi-training.png',
    callToAction: 'Request Callback',
    highlights: [
      'Tableau Desktop Specialist & Certified Data Analyst exam alignment',
      '27 modules across Beginner, Intermediate, and Advanced tiers',
      'SQL, Excel, Tableau Prep, and enterprise publishing on Server/Cloud',
      'LOD expressions, table calculations, and dashboard interactivity',
      'Capstone: multi-source executive dashboard with row-level security',
      'Full mock exams for Specialist and Analyst certifications'
    ],
    description: {
      whyChooseTitle: 'Why choose Tableau Data Analyst Training from InsureTech Skills?',
      overview:
        'Structured across three tiers so learners with no prior analytics or Tableau experience can reach proficiency in visual analytics, dashboard design, and data storytelling — with hands-on Tableau Desktop exercises using real-world datasets and a production-ready capstone.',
      whyChoose:
        'Tableau is used by over 100,000 organisations worldwide. This programme takes you from data fundamentals, SQL, and Excel through advanced LOD expressions, statistical analytics, Tableau Server/Cloud governance, and integration with modern cloud warehouses — in one journey.',
      keyFeatures: [
        'Dual certification prep: Desktop Specialist and Certified Data Analyst',
        'Hands-on labs with real business datasets',
        'Tableau Prep Builder and complex data modelling',
        'Publishing, permissions, and row-level security (RLS)',
        'Mock examinations with answer reviews'
      ],
      whatYouWillLearn: [
        'Data analytics types, workflow, and visualisation for decisions',
        'Excel, SQL, and data preparation for Tableau',
        'Tableau workspace, connections, extracts, and data cleaning',
        'Calculated fields, table calculations, and LOD expressions (FIXED, INCLUDE, EXCLUDE)',
        'Maps, dashboard design, actions, and data storytelling',
        'Tableau Server/Cloud publishing, governance, and cloud data stack integration',
        'Statistical analysis, performance optimisation, and certification readiness'
      ],
      prerequisites: [
        'Basic computer literacy and comfort with spreadsheets (Excel or Google Sheets)',
        'Prior BI or reporting exposure is helpful but not required',
        'No prior Tableau, SQL, or programming required — taught progressively from Module 01',
        'Willingness to practise hands-on Tableau Desktop exercises throughout'
      ],
      whoCanJoin: [
        'Complete beginners entering data analytics',
        'Business analysts turning data into decisions',
        'Excel/reporting analysts upgrading to interactive Tableau dashboards',
        'Data professionals adding Tableau on top of SQL or Python',
        'Finance and operations professionals building self-service KPI dashboards',
        'Graduates and career changers entering analytics with certification alignment'
      ],
      distinctness:
        'Earn two Salesforce-backed credentials while mastering LOD expressions (the most powerful Tableau feature), enterprise Server/Cloud skills most courses skip, and integration with Snowflake, BigQuery, Synapse, Redshift, and Databricks — plus a portfolio-ready capstone dashboard with RLS.'
    },
    modules: [
      { title: '1. Introduction to Data Analytics', topics: ['What data analytics is', 'Descriptive, diagnostic, predictive, prescriptive analytics', 'Data analytics workflow', 'Roles: analyst, engineer, scientist', 'Why visualisation matters for business decisions'] },
      { title: '2. Data Fundamentals — Types, Structures & Sources', topics: ['Structured vs unstructured vs semi-structured data', 'Quantitative vs qualitative; discrete vs continuous', 'Sources: databases, spreadsheets, APIs, flat files', 'Data quality dimensions', 'Introduction to the data pipeline'] },
      { title: '3. Introduction to Excel & Spreadsheet Analytics', topics: ['Formulas and functions (SUM, VLOOKUP, IF, INDEX/MATCH)', 'Pivot tables', 'Charts, sorting, filtering', 'Conditional formatting', 'Preparing structured datasets for Tableau'] },
      { title: '4. SQL for Data Analysts', topics: ['SELECT, WHERE, ORDER BY, GROUP BY, HAVING', 'Aggregates', 'JOINs (INNER, LEFT, RIGHT, FULL)', 'Subqueries and CTEs', 'Queries to prepare data for visual analysis'] },
      { title: '5. Introduction to Tableau Desktop', topics: ['Tableau product family (Desktop, Public, Server, Online, Prep)', 'Installing Tableau Desktop', 'Workspace layout', 'Connecting to data', 'Dimensions vs measures', 'First visualisations'] },
      { title: '6. Core Chart Types in Tableau', topics: ['Bar, line, area, scatter, pie, treemap, heat map, highlight table', 'When to use each', 'Basic formatting for readability'] },
      { title: '7. Connecting to & Managing Data Sources', topics: ['Excel, CSV, PDF, Google Sheets, SQL databases', 'Live vs extracts (.hyper)', 'Extract refresh scheduling', 'Data source management'] },
      { title: '8. Data Preparation & Cleaning in Tableau', topics: ['Nulls, renaming, hiding fields', 'Data types, splitting, pivoting', 'Grouping, aliases', 'Data interpreter for messy data'] },
      { title: '9. Sorting, Filtering & Grouping', topics: ['Dimension and measure filters', 'Context filters and order of operations', 'Quick filters, relative date, top N', 'Filter actions', 'Sets for dynamic comparisons'] },
      { title: '10. Calculated Fields & Basic Calculations', topics: ['String, date, number, logical functions', 'IF/THEN, IIF, CASE', 'Profit margin, YoY growth, running totals'] },
      { title: '11. Table Calculations', topics: ['Scope and direction', 'Running total, percent of total, rank, moving average', 'LOOKUP and WINDOW functions', 'Partitions'] },
      { title: '12. Level of Detail (LOD) Expressions', topics: ['FIXED, INCLUDE, EXCLUDE', 'Cohort analysis', 'Customer vs order metrics', 'LOD with filters'] },
      { title: '13. Parameters & Dynamic Analysis', topics: ['Parameter-driven filters and chart types', 'Top N with parameters', 'What-if analysis'] },
      { title: '14. Maps & Geospatial Analytics', topics: ['Symbol, filled, density maps', 'Dual-axis maps', 'Custom geocoding', 'Shapefiles and GeoJSON', 'Regional performance dashboards'] },
      { title: '15. Dashboard Design Principles', topics: ['Tiled vs floating, containers, device previews', 'Colour and typography', 'Reducing chart junk', 'Gestalt and accessibility', 'Mobile-responsive dashboards'] },
      { title: '16. Dashboard Actions & Interactivity', topics: ['Filter, highlight, URL, set, and parameter actions', 'Chaining actions', 'Drill-down navigation', 'Self-service analytics'] },
      { title: '17. Data Blending & Multi-Source Analysis', topics: ['Blending vs joins vs relationships', 'Blend configuration and limitations', 'Cross-database joins', 'Multi-source analyses'] },
      { title: '18. Tableau Prep Builder — Data Wrangling', topics: ['Flow-based preparation', 'Pivot, aggregate, join, union', 'Profile pane', 'Output to extract', 'Scheduling Prep on Server/Online'] },
      { title: '19. Advanced Chart Types & Visual Best Practices', topics: ['Waterfall, Gantt, bullet, box-and-whisker, bump, slope, dumbbell', 'Custom shapes, dual-axis', 'Pixel-perfect formatting'] },
      { title: '20. Statistical Analysis in Tableau', topics: ['Trend lines', 'Reference lines/bands', 'Forecasting', 'Box plots', 'Clusters', 'R and Python via TabPy and Rserve'] },
      { title: '21. Advanced Data Modelling — Relationships & Logical Layer', topics: ['Logical vs physical layer', 'Relationships, cardinality, integrity', 'Multi-table models', 'Context-aware aggregation', 'Performance implications'] },
      { title: '22. Performance Optimisation', topics: ['Performance Recorder', 'Slow queries', 'Extract vs live', 'Reducing marks', 'Optimising LOD and table calcs', 'Query caching'] },
      { title: '23. Tableau Server & Tableau Online — Publishing & Governance', topics: ['Publishing workbooks and data sources', 'Permissions, projects, sites', 'RLS', 'Usage analytics', 'Embedding', 'Scheduled refreshes'] },
      { title: '24. Storytelling with Data & Executive Reporting', topics: ['Tableau Stories', 'Narratives for executives', 'Annotations', 'Progressive disclosure', 'Board-level dashboards'] },
      { title: '25. Tableau with Cloud & Modern Data Stacks', topics: ['BigQuery, Snowflake, Azure Synapse, Amazon Redshift, Databricks', 'Virtual connections', 'Accelerators', 'dbt and cloud warehouses'] },
      { title: '26. Capstone Project — End-to-End Analytics Dashboard', topics: ['Multi-source connection', 'Prep cleaning', 'Complex model', 'LOD and table calcs', 'Interactive executive dashboard', 'Publishing to Tableau Cloud with RLS'] },
      { title: '27. Certification Preparation & Mock Examinations', topics: ['Mock exams for Desktop Specialist and Certified Data Analyst', 'Domain review', 'Exam strategy and scheduling guidance'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Personalised Tableau mentoring and portfolio feedback.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live online batches with hands-on Tableau Desktop labs.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Custom enterprise analytics training for teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Two Salesforce Certifications', icon: '📜', description: 'Prepare for Tableau Desktop Specialist and Tableau Certified Data Analyst.' },
      { title: '27-Module Curriculum', icon: '📚', description: 'Beginner, Intermediate, and Advanced tiers with progressive complexity.' },
      { title: 'Real-World Datasets', icon: '📊', description: 'Authentic business scenarios for your portfolio.' },
      { title: 'LOD Mastery', icon: '🎯', description: 'Dedicated module on FIXED, INCLUDE, and EXCLUDE expressions.' },
      { title: 'Data Storytelling', icon: '💬', description: 'Executive narratives, progressive disclosure, and board-ready dashboards.' },
      { title: 'Modern Data Stack', icon: '☁️', description: 'Connect to Snowflake, BigQuery, Synapse, Redshift, Databricks.' },
      { title: 'Server & Governance', icon: '🛡️', description: 'Publishing, RLS, and enterprise analytics operations.' },
      { title: 'High-Demand Analyst Roles', icon: '📈', description: 'Tableau certification is widely listed in analyst job descriptions globally.' }
    ],
    faqs: [
      {
        question: 'Can I join with no prior Tableau or data analytics experience?',
        answer: 'Yes. The programme begins with data analytics fundamentals, data types, and Excel basics before introducing Tableau Desktop. No prior Tableau, SQL, or analytics tool experience is required.'
      },
      {
        question: 'How is the curriculum structured across the three levels?',
        answer: 'Modules 01–08 cover analytics concepts, Excel, SQL, Tableau introduction, chart types, connections, and cleaning. Modules 09–18 cover filtering, calculations, table calculations, LOD, parameters, maps, dashboards, blending, and Prep. Modules 19–27 cover advanced charts, statistics, data modelling, performance, Server/Cloud, storytelling, modern stacks, capstone, and certification prep.'
      },
      {
        question: 'Which Tableau certifications does this programme prepare me for?',
        answer: 'The Tableau Desktop Specialist (foundational) and the Tableau Certified Data Analyst (advanced analytics design, LOD, and dashboard practices). Both are issued by Salesforce.'
      },
      {
        question: 'Will I build a real dashboard project I can show employers?',
        answer: 'Yes. Module 26 is an end-to-end capstone: multi-source data, Prep, complex model, LOD and table calculations, interactive executive dashboard, and publishing to Tableau Cloud with row-level security.'
      },
      {
        question: 'Will I receive access to recorded sessions?',
        answer: 'Yes. Enrolled learners receive lifetime access to recorded class sessions for flexible revision after live training concludes.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. Fully customised corporate Tableau programmes are available for analytics, BI, and reporting teams. Contact us for a dedicated proposal and team pricing.'
      }
    ],
    duration: '25-40 Hours',
    mode: 'Online',
    icon: 'tableau',
    tools: [
      'Tableau Desktop', 'Tableau Prep', 'Tableau Server', 'Tableau Cloud', 'SQL', 'Excel',
      'Snowflake', 'BigQuery', 'Azure Synapse', 'Amazon Redshift', 'Databricks'
    ],
    heroSubtitle: 'Desktop Specialist & Data Analyst'
  },

  'databricks-associate-training': {
    slug: 'databricks-associate-training',
    title: 'Databricks Associate Training',
    category: 'Data Engineering',
    heroDescription:
      'Databricks Lakehouse Platform — master Delta Lake, Apache Spark, PySpark, LakeFlow Pipelines, Unity Catalog, and Databricks SQL. Fully aligned with the Databricks Certified Data Engineer Associate (DCDEA) exam (July 2025 syllabus). Live instructor-led · 55+ hours · multi-cloud (AWS, Azure, GCP) · 10+ labs · 2 capstone projects · mock exam with 45 scenario-based questions.',
    heroBannerImage: '/course-banners/microsoft-fabric-analytics-engineer-associate.png',
    callToAction: 'Request Callback',
    highlights: [
      'DCDEA exam prep — July 2025 updated syllabus with 45-question mock exam',
      '55+ hours live instructor-led · Intermediate to Advanced',
      'Multi-cloud concepts: AWS, Azure & GCP (labs on Azure free trial)',
      '11 modules · 10+ hands-on labs · 2 capstone projects (Medallion + Databricks SQL)',
      'Delta Lake, PySpark, LakeFlow Pipelines & Jobs, Unity Catalog, Databricks SQL',
      '1-on-1 mentoring, lifetime access to materials, and career support'
    ],
    description: {
      whyChooseTitle: 'Why choose Databricks Associate Training from InsureTech Skills?',
      overview:
        'Databricks is the world\'s leading Data and AI company — used by over 10,000 organizations globally, including more than 60% of the Fortune 500. Founded by the creators of Apache Spark, Delta Lake, and MLflow, Databricks has built the Lakehouse Platform — a unified architecture that combines the best of data warehouses and data lakes into a single, open platform for data engineering, analytics, and AI. It runs natively on AWS, Azure, and Google Cloud.\n\nThis comprehensive training covers the complete Databricks Data Engineer Associate syllabus — fully updated for the July 2025 exam guide. You will learn Lakehouse architecture, Delta Lake ACID transactions and time travel, PySpark and Spark SQL for ETL, LakeFlow Pipelines and Jobs, structured streaming with Autoloader, Unity Catalog governance, and Databricks SQL dashboards. By the end, you will be fully prepared for the Databricks Certified Data Engineer Associate (DCDEA) certification and enterprise-level data engineering roles across the USA, Canada, and Europe.',
      whyChoose:
        'You train with Databricks-certified expert instructors in live sessions with hands-on guidance. The programme balances exam readiness with job-ready skills: real pipelines in Databricks, portfolio-worthy capstones, mock exams with full explanations, and career support including resume and interview prep.',
      keyFeatures: [
        'Live instructor-led training with Databricks-certified experts',
        'July 2025 DCDEA syllabus — Lakehouse, Delta ETL, incremental processing, pipelines, governance',
        '10+ hands-on labs and 2 capstone projects (Medallion architecture + Databricks SQL analytics)',
        'Mock exams: 45 scenario-based questions with detailed explanations',
        'Multi-cloud coverage; hands-on labs use Databricks on Azure (14-day trial) with skills transferable to AWS and GCP',
        'EST, GMT, and IST batch options · lifetime access to notebooks, recordings, and materials'
      ],
      whatYouWillLearn: [
        'Databricks Lakehouse Platform — architecture, workspace and clusters',
        'Delta Lake — ACID transactions, time travel, schema evolution and Z-ordering',
        'Apache Spark fundamentals — RDDs, DataFrames, transformations and actions',
        'PySpark and Spark SQL — ETL pipelines for batch and incremental processing',
        'Multi-hop (Medallion) architecture — Bronze, Silver and Gold layers',
        'LakeFlow Declarative Pipelines — streaming tables and materialized views',
        'Structured Streaming with Autoloader — incremental file ingestion at scale',
        'LakeFlow Jobs — orchestrating and scheduling ETL workflows',
        'Unity Catalog — data governance, permissions, lineage and data sharing',
        'Databricks SQL — warehouses, dashboards, alerts and parameterized queries',
        'Databricks Asset Bundles — CI/CD for Databricks workflows with Git',
        'DCDEA certification exam preparation — July 2025 updated syllabus'
      ],
      prerequisites: [
        'Basic Python and SQL — loops, functions, SELECT queries and JOINs',
        'Some exposure to data engineering or big data tools (Spark, Hadoop, cloud) is helpful but not mandatory',
        'No prior Databricks experience required',
        'System: modern PC or Mac with a web browser; 4GB RAM minimum; stable internet; VS Code recommended',
        'Education: engineering, computer science or data background; 1–2 years of data engineering or software development experience is recommended'
      ],
      whoCanJoin: [
        'Data engineers, software developers, data analysts, and ETL developers',
        'Cloud architects and professionals moving from on-premises stacks to the Databricks Lakehouse',
        'Those with Spark, Hadoop, Hive, or SQL Server backgrounds',
        'Professionals switching from Oracle, SQL Server, Hive, or traditional ETL tools'
      ],
      distinctness:
        'Full alignment to the July 2025 DCDEA exam guide with domain-weighted coverage — Lakehouse Platform (24%), Delta Lake ETL (29%), Incremental Processing (22%), Production Pipelines (16%), Data Governance (9%). Includes LakeFlow (successor to classic DLT naming in the exam context), Autoloader, Unity Catalog, Asset Bundles, liquid clustering, and AI/BI dashboards — plus two capstones and a 45-question mock exam with explanations.'
    },
    modules: [
      {
        title: '1. Databricks Lakehouse Platform & Workspace',
        topics: [
          'What is a Data Lakehouse? — combining data lake flexibility with data warehouse reliability',
          'Databricks platform architecture — cloud provider integration, control plane and data plane',
          'Workspace navigation — clusters, notebooks, repos, jobs, SQL and machine learning',
          'Cluster types and configuration — all-purpose vs job clusters, runtime versions',
          'Databricks File System (DBFS) — storage abstraction and mounts'
        ]
      },
      {
        title: '2. Delta Lake Fundamentals',
        topics: [
          'What is Delta Lake? — open-source storage layer built on Parquet',
          'ACID transactions on data lakes — atomicity, consistency, isolation, durability',
          'Delta table creation — managed vs external tables, CREATE TABLE syntax',
          'Reading and writing Delta tables — batch and streaming modes',
          'Delta table history and time travel — DESCRIBE HISTORY, VERSION AS OF, TIMESTAMP AS OF',
          'Schema enforcement and schema evolution — mergeSchema and overwriteSchema',
          'Lab: Creating a Delta Lake pipeline with time travel and schema evolution'
        ]
      },
      {
        title: '3. Delta Lake Advanced — Optimization & Operations',
        topics: [
          'Delta Lake file management — small file problem and OPTIMIZE command',
          'Z-ordering — multi-dimensional clustering for query performance',
          'Liquid Clustering — the modern replacement for partitioning in Databricks',
          'VACUUM — removing old Delta files and managing storage costs',
          'CLONE — deep and shallow table cloning for testing and backups',
          'Table constraints and data quality enforcement in Delta Lake'
        ]
      },
      {
        title: '4. Apache Spark & PySpark for Data Engineers',
        topics: [
          'Spark architecture — Driver, Executors, shuffle and the DAG execution model',
          'PySpark DataFrames — creation, transformations (select, filter, join, groupBy) and actions',
          'Reading and writing data — CSV, JSON, Parquet, Delta with PySpark',
          'Handling null values, data type casting and complex data types (arrays, structs, maps)',
          'User Defined Functions (UDFs) — Python UDFs and Pandas UDFs (vectorized)',
          'Spark SQL — running SQL queries from Python notebooks with createOrReplaceTempView',
          'Lab: Building an ETL transformation pipeline using PySpark and Spark SQL'
        ]
      },
      {
        title: '5. Multi-Hop (Medallion) Architecture — ELT in Databricks',
        topics: [
          'Medallion architecture overview — Bronze, Silver and Gold layers and their purposes',
          'Bronze layer — raw data ingestion from cloud storage with schema-on-read',
          'Silver layer — data cleansing, deduplication, joins and data quality enforcement',
          'Gold layer — business-level aggregations, KPIs and reporting tables',
          'MERGE (UPSERT) operations — slowly changing dimensions (SCD Type 1 and Type 2)',
          'Lab: Building a complete 3-layer Medallion pipeline on real e-commerce data'
        ]
      },
      {
        title: '6. Structured Streaming & Autoloader',
        topics: [
          'Structured Streaming fundamentals — micro-batch and continuous processing',
          'Reading streams — from Delta Lake, Kafka and cloud storage',
          'Streaming operations — stateful aggregations, watermarks and late data handling',
          'Writing streams — append, complete and update output modes, checkpointing',
          'Autoloader (cloudFiles) — incrementally ingesting new files from cloud storage',
          'Lab: Building a real-time streaming pipeline with Autoloader into a Delta table'
        ]
      },
      {
        title: '7. LakeFlow Declarative Pipelines',
        topics: [
          'LakeFlow Pipelines overview — the evolution of Delta Live Tables (DLT)',
          'Streaming Tables and Materialized Views — low-code declarative pipeline authoring',
          'Data quality constraints — EXPECT, EXPECT OR FAIL, EXPECT OR DROP',
          'Pipeline modes — continuous vs triggered, development vs production',
          'Lab: Building a declarative LakeFlow pipeline with data quality rules'
        ]
      },
      {
        title: '8. LakeFlow Jobs — Orchestration & CI/CD',
        topics: [
          'LakeFlow Jobs overview — multi-task workflow orchestration in Databricks',
          'Job tasks — notebooks, Python scripts, SQL queries, DLT pipelines and more',
          'Job scheduling — cron, triggers, dependencies and task clusters',
          'Databricks Asset Bundles (DABs) — CI/CD for Databricks with Git integration',
          'Lab: Building a multi-task LakeFlow Job with dependencies and failure alerts'
        ]
      },
      {
        title: '9. Unity Catalog — Data Governance',
        topics: [
          'Unity Catalog architecture — three-level namespace: catalog, schema, table',
          'Metastore, workspaces and identity federation in Unity Catalog',
          'Data object permissions — GRANT, REVOKE and SHOW GRANTS',
          'Row-level security (RLS) and column-level masking for sensitive data',
          'Data lineage — tracking data origin and transformations automatically',
          'Delta Sharing — securely sharing data across organizations and clouds'
        ]
      },
      {
        title: '10. Databricks SQL — Warehouses & Dashboards',
        topics: [
          'Databricks SQL overview — running SQL workloads at scale with serverless warehouses',
          'SQL Editor — writing, saving and scheduling parameterized queries',
          'AI/BI Dashboards — building interactive visualizations and reports',
          'Alerts — setting up query-based threshold alerts and notifications',
          'Lab: Building a sales analytics dashboard with Databricks SQL and AI/BI'
        ]
      },
      {
        title: '11. DCDEA Exam Prep & Capstone Project',
        topics: [
          'DCDEA exam structure — 45 questions, 90 minutes, passing score 70%, Python and SQL',
          'Exam domain breakdown — Lakehouse (24%), ETL (29%), Incremental (22%), Pipelines (16%), Governance (9%)',
          'Full mock exam with 45 scenario-based questions and detailed answer explanations',
          'Common exam traps — Delta Lake operations, streaming concepts and governance nuances',
          'Capstone: End-to-end Medallion architecture pipeline with LakeFlow Jobs and Unity Catalog'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Dedicated mentor for doubt clearing, exam strategy, and custom pace.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live instructor-led batches with hands-on Databricks labs.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Custom enterprise Lakehouse training for data engineering teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'DCDEA Exam Prep', icon: '📜', description: 'July 2025 syllabus, domain-weighted coverage, 45-question mock exam with explanations.' },
      { title: 'Multi-Cloud Skills', icon: '☁️', description: 'Core concepts apply across AWS, Azure, and GCP; labs use Azure trial with transferable skills.' },
      { title: 'Live Instructor-Led', icon: '✓', description: 'Databricks-certified expert trainers — real-time sessions with hands-on guidance.' },
      { title: '10+ Hands-On Labs', icon: '🧪', description: 'Build real pipelines — Delta Lake, Autoloader, LakeFlow, and Unity Catalog.' },
      { title: '2 Capstone Projects', icon: '🏗️', description: 'End-to-end Medallion pipeline and a Databricks SQL reporting solution.' },
      { title: 'Delta Lake Deep Dive', icon: '⚡', description: 'Time travel, ACID, Z-ordering, liquid clustering, and schema evolution.' },
      { title: 'Global Batch Timings', icon: '🌍', description: 'EST, GMT, and IST options for USA, UK, Canada, and India learners.' },
      { title: 'Career Support', icon: '💼', description: 'Resume, LinkedIn, mock interviews, referrals — plus lifetime access to materials.' }
    ],
    faqs: [
      {
        question: 'What is the Databricks Certified Data Engineer Associate (DCDEA) exam?',
        answer:
          'The DCDEA is Databricks\' foundational data engineering certification. The exam has 45 scored questions (plus possible unscored preview items), 90 minutes, 70% passing score, in Python and SQL. Domains: Lakehouse Platform (24%), Delta Lake ETL (29%), Incremental Processing (22%), Production Pipelines (16%), Data Governance (9%).'
      },
      {
        question: 'Is this course updated for the July 2025 exam syllabus?',
        answer:
          'Yes. The course follows the July 2025 Databricks Certified Data Engineer Associate exam guide, including LakeFlow Declarative Pipelines, LakeFlow Jobs, Databricks Asset Bundles (DABs), Liquid Clustering, Unity Catalog enhancements, and Databricks AI/BI dashboards. Content is updated as the platform evolves.'
      },
      {
        question: 'Do I need prior Spark or Databricks experience?',
        answer:
          'No prior Databricks experience is required. You need basic Python and SQL comfort. Module 4 covers Apache Spark and PySpark in depth. Backgrounds in Hadoop, Hive, AWS Glue, Azure Data Factory, or traditional ETL map well to this course.'
      },
      {
        question: 'What is the average salary for a Databricks Data Engineer in the USA?',
        answer:
          'In the USA, Databricks-certified engineers often see roughly $130,000–$170,000+ annually depending on role and location (e.g. LinkedIn & Indeed, 2025). Senior platform architects can exceed that range. Canada and UK/Europe have strong bands as well; exact figures vary by market and experience.'
      },
      {
        question: 'Does this course cover Databricks on AWS, Azure, and GCP?',
        answer:
          'Yes. Databricks core concepts — Delta Lake, Spark, LakeFlow, Unity Catalog — are consistent across clouds. Hands-on labs use Databricks on Azure (14-day free trial); skills transfer directly to AWS and GCP deployments, with cloud-specific notes where useful.'
      },
      {
        question: 'What hands-on projects will I build?',
        answer:
          'You will complete 10+ labs and two capstones: (1) an end-to-end Medallion pipeline with Autoloader, Delta, LakeFlow, Jobs, and Unity Catalog; (2) a Databricks SQL analytics solution with parameterized queries, AI/BI dashboards, and alerts. Both are portfolio-ready.'
      },
      {
        question: 'How long is the course and what are the batch timings?',
        answer:
          'Total training is 55+ hours, typically over 9–11 weeks. Batches run in EST, GMT, and IST with weekday and weekend options. Contact us for upcoming dates.'
      },
      {
        question: 'Is placement assistance available after the course?',
        answer:
          'We provide career support including Databricks-focused resume and LinkedIn help, technical mock interviews (PySpark and Delta architecture), capstone portfolio review, and referrals through our hiring partner network. Placement outcomes depend on individual effort and market conditions.'
      }
    ],
    duration: '55+ Hours',
    mode: 'Online',
    icon: 'databricks',
    heroSubtitle: 'DCDEA · July 2025',
    toolsAndTechnologies: [
      { name: 'Databricks Platform', desc: 'Unified Lakehouse' },
      { name: 'Delta Lake', desc: 'ACID storage layer' },
      { name: 'Apache Spark', desc: 'Distributed engine' },
      { name: 'PySpark', desc: 'Python Spark API' },
      { name: 'Spark SQL', desc: 'SQL on Spark' },
      { name: 'Structured Streaming', desc: 'Real-time pipelines' },
      { name: 'Autoloader', desc: 'Incremental ingestion' },
      { name: 'LakeFlow Pipelines', desc: 'Declarative ETL' },
      { name: 'LakeFlow Jobs', desc: 'Workflow orchestration' },
      { name: 'Unity Catalog', desc: 'Data governance' },
      { name: 'Databricks SQL', desc: 'BI & dashboards' },
      { name: 'Databricks Asset Bundles', desc: 'CI/CD for Databricks' }
    ]
  },

  'aws-ai-practitioner-training': {
    slug: 'aws-ai-practitioner-training',
    title: 'AWS AI Practitioner Training',
    category: 'AI',
    heroDescription:
      'Master AI, ML, and Generative AI on AWS — Amazon Bedrock, SageMaker, Rekognition, Comprehend, Lex, and more. Fully aligned with AWS Certified AI Practitioner (AIF-C01). Live instructor-led · 40+ hours · Beginner to Intermediate · 10 modules · 8+ labs · mock exam (65 questions). Exam fee $100; AWS often includes a free retake on foundational certs.',
    heroBannerImage: '/course-banners/aws-solutions-architect.png',
    callToAction: 'Request Callback',
    highlights: [
      'AIF-C01 exam prep — all 5 domains (20% / 24% / 28% / 14% / 14%)',
      '40+ hours live training · 10 modules · 8+ hands-on AWS Console labs',
      'Amazon Bedrock, SageMaker, Rekognition, Comprehend, Lex, Transcribe, Polly, Kendra, QuickSight, Amazon Q',
      'Generative AI, Foundation Models, prompt engineering, Responsible AI, IAM & Guardrails',
      '65-question mock exams with explanations · $100 exam · free retake offer where AWS applies',
      'EST, GMT & IST batches · lifetime access · 1-on-1 mentoring & career support'
    ],
    description: {
      whyChooseTitle: 'Why choose AWS AI Practitioner Training from InsureTech Skills?',
      overview:
        'Amazon Web Services (AWS) powers AI workloads for over 1 million active customers globally — including most Fortune 500 companies across the USA, Canada, and Europe. The AWS Certified AI Practitioner (AIF-C01) is AWS\'s foundational AI certification, validating broad knowledge of AI, ML, and Generative AI and the AWS services behind them.\n\nThis training walks through all five AIF-C01 domains — from AI/ML fundamentals to Generative AI, Foundation Models, Responsible AI, and AWS AI security. You gain hands-on experience with Amazon Bedrock, SageMaker, Rekognition, Comprehend, Lex, Polly, Transcribe, and more. Whether you are a business professional, developer, data analyst, or IT leader, this course builds the AI foundation employers want. The AIF-C01 exam is $100 USD and is a strong entry point into the AWS AI career path.',
      whyChoose:
        'AWS-certified instructors deliver live sessions (not canned videos) with guided Console labs. You prepare with domain-aligned notes, scenario-style practice, and full mock exams — plus projects such as a Lex chatbot, Rekognition image workflows, and a Bedrock GenAI assistant.',
      keyFeatures: [
        'Full AIF-C01 syllabus — AI/ML fundamentals, GenAI, foundation models, responsible AI, security & governance',
        'Hands-on labs on real AWS accounts (Free Tier; new accounts may receive promotional credits per AWS policies)',
        '65-question mock examinations with answer explanations',
        'Career support: resume, LinkedIn, mock interviews, and hiring referrals',
        'Flexible global batches and lifetime access to recordings and materials'
      ],
      whatYouWillLearn: [
        'Core AI, ML and Deep Learning concepts and terminology',
        'AWS AI services ecosystem — Bedrock, SageMaker, Rekognition and more',
        'Generative AI fundamentals — LLMs, Foundation Models and diffusion',
        'Amazon Bedrock — deploying, invoking and customizing foundation models',
        'Prompt Engineering — zero-shot, few-shot, chain-of-thought techniques',
        'ML lifecycle — data preparation, model training, evaluation and deployment',
        'Computer Vision with Amazon Rekognition — images, video and faces',
        'NLP with Amazon Comprehend, Translate, Lex and Transcribe',
        'Responsible AI — bias, fairness, explainability and transparency on AWS',
        'AI security, compliance and governance using AWS IAM and guardrails',
        'AWS AI cost optimization and choosing the right AI service for each use case',
        'AIF-C01 full exam preparation with mock tests and practice questions'
      ],
      prerequisites: [
        'No prior AWS or AI experience required — course starts from basics',
        'Basic familiarity with cloud concepts is helpful',
        'Up to 6 months of general IT or data exposure is recommended but not mandatory',
        'System: modern PC/Mac, browser; AWS Free Tier account for labs; stable internet',
        'AWS Cloud Practitioner (CLF-C02) knowledge is helpful but not required'
      ],
      whoCanJoin: [
        'Business analysts, project managers, developers, data professionals, and IT leaders',
        'Product owners and anyone who works with or wants to leverage AI/ML on AWS',
        'Technical and non-technical professionals — inclusive of finance, HR, marketing, legal, healthcare backgrounds'
      ],
      distinctness:
        'Foundational AIF-C01 focus (not a deep coding exam): all five exam domains with weighted coverage, Bedrock and GenAI depth, Responsible AI and governance, plus 8+ Console labs and a capstone architecture design — aligned to how AWS tests practical service selection and responsible use.'
    },
    modules: [
      {
        title: '1. Introduction to AI, ML & AWS Cloud',
        topics: [
          'What is Artificial Intelligence? — definitions, history and modern applications',
          'AI vs Machine Learning vs Deep Learning vs Generative AI — clear distinctions',
          'AWS Cloud fundamentals — Regions, Availability Zones, core services overview',
          'AWS AI services portfolio overview — the full ecosystem at a glance',
          'AWS Free Tier setup — creating your account and navigating the AWS Console'
        ]
      },
      {
        title: '2. Machine Learning Fundamentals',
        topics: [
          'ML concepts — supervised, unsupervised and reinforcement learning',
          'ML lifecycle — business problem, data collection, preparation, training, evaluation, deployment',
          'Common ML algorithms — linear regression, decision trees, random forests, neural networks',
          'Overfitting, underfitting, bias-variance tradeoff and regularization',
          'Model evaluation metrics — accuracy, precision, recall, F1 score, AUC-ROC',
          'Feature engineering — selection, transformation and encoding techniques',
          'Lab: Exploring datasets and running AutoML with Amazon SageMaker Canvas'
        ]
      },
      {
        title: '3. Amazon SageMaker — ML Build & Deploy',
        topics: [
          'SageMaker overview — unified ML platform for build, train and deploy',
          'SageMaker Studio — integrated IDE for ML workflows',
          'SageMaker Canvas — no-code ML for business users',
          'SageMaker Autopilot — automated ML model creation',
          'SageMaker Pipelines — MLOps and CI/CD for ML workflows',
          'Model monitoring — detecting data drift and model degradation',
          'Lab: Training and deploying a classification model with SageMaker'
        ]
      },
      {
        title: '4. Generative AI Fundamentals',
        topics: [
          'What is Generative AI? — LLMs, Foundation Models and diffusion models',
          'Transformer architecture basics — attention mechanisms and tokenization',
          'Large Language Models (LLMs) — GPT, Claude, Llama, Titan and Mistral',
          'Text-to-image models — Stable Diffusion, DALL-E and image generation on AWS',
          'Multimodal models — handling text, images, audio and video together',
          'GenAI use cases — content creation, code generation, summarization, Q&A'
        ]
      },
      {
        title: '5. Amazon Bedrock — Foundation Models on AWS',
        topics: [
          'Amazon Bedrock overview — fully managed foundation model service',
          'Available models — Amazon Titan, Claude (Anthropic), Llama (Meta), Mistral',
          'Bedrock API — invoking models via AWS SDK and Console Playground',
          'Prompt Engineering on Bedrock — system prompts, few-shot and chain-of-thought',
          'Knowledge Bases for Amazon Bedrock — RAG with your own data',
          'Bedrock Agents — building autonomous AI agents on AWS',
          'Lab: Build a GenAI Q&A assistant using Amazon Bedrock and Knowledge Bases'
        ]
      },
      {
        title: '6. AWS AI Services — Vision, Language & Speech',
        topics: [
          'Amazon Rekognition — image and video analysis, face detection, text in images',
          'Amazon Textract — extracting text and structured data from documents',
          'Amazon Comprehend — sentiment analysis, entity recognition, key phrases',
          'Amazon Comprehend Medical — clinical NLP for healthcare use cases',
          'Amazon Translate — real-time and batch language translation',
          'Amazon Transcribe — speech-to-text for audio and video files',
          'Amazon Polly — text-to-speech with neural voices',
          'Lab: Build an end-to-end document analysis pipeline with Rekognition and Textract'
        ]
      },
      {
        title: '7. Conversational AI — Amazon Lex & Amazon Q',
        topics: [
          'Amazon Lex — building chatbots with intents, slots and fulfillment',
          'Lex integration with Lambda, Connect and Kendra',
          'Amazon Kendra — intelligent enterprise search powered by ML',
          'Amazon Q — generative AI assistant for business productivity',
          'Lab: Build and deploy a customer service chatbot using Amazon Lex'
        ]
      },
      {
        title: '8. Responsible AI on AWS',
        topics: [
          'Responsible AI principles — fairness, transparency, accountability, privacy',
          'AI bias — sources, types and detection methods',
          'Model explainability — SageMaker Clarify for bias detection and explainability',
          'Human-in-the-loop — Amazon A2I (Augmented AI) for human review workflows',
          'AWS AI service cards — transparency documentation for AWS AI services'
        ]
      },
      {
        title: '9. AI Security, Compliance & Governance on AWS',
        topics: [
          'AWS shared responsibility model for AI workloads',
          'Securing AI services — AWS IAM, resource policies and VPC endpoints',
          'Amazon Bedrock Guardrails — content filtering, topic denial and PII redaction',
          'AWS compliance frameworks relevant to AI — GDPR, HIPAA, SOC 2',
          'AI cost governance — monitoring and optimizing AI service costs on AWS'
        ]
      },
      {
        title: '10. AIF-C01 Exam Prep & Capstone Project',
        topics: [
          'AIF-C01 exam structure — 65 questions, 90 minutes, passing score 700',
          'Domain weightings review — key topics and common question patterns',
          'Full mock exam with 65 scenario-based questions and detailed explanations',
          'Choosing the right AWS AI service — decision-making frameworks for the exam',
          'Capstone: Design an end-to-end AI solution architecture on AWS for a real business case'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Personalized mentoring, exam strategy, and flexible pacing.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live instructor-led batches with AWS Console labs.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Team training for organizations adopting AWS AI services.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'AIF-C01 Aligned', icon: '📜', description: 'All 5 exam domains with mock exams (65 questions) and explanations.' },
      { title: '$100 Exam & Retake', icon: '💵', description: 'Affordable certification; AWS foundational free retake where offered.' },
      { title: 'Live Instructor-Led', icon: '✓', description: 'AWS-certified experts — real-time sessions, not pre-recorded only.' },
      { title: '8+ Hands-On Labs', icon: '🧪', description: 'Bedrock, SageMaker, Rekognition, Lex, Textract, and more on real AWS.' },
      { title: 'Real-World Projects', icon: '🏗️', description: 'Chatbot (Lex), vision workflows (Rekognition), GenAI app (Bedrock).' },
      { title: 'Responsible & Secure AI', icon: '🛡️', description: 'Bias, explainability, IAM, Guardrails, and compliance context.' },
      { title: 'Global Batches', icon: '🌍', description: 'EST, GMT, and IST options for worldwide learners.' },
      { title: 'Career Support', icon: '💼', description: 'Resume, LinkedIn, interviews, and referrals for AI/cloud roles.' }
    ],
    faqs: [
      {
        question: 'What is the AIF-C01 certification and who is it for?',
        answer:
          'AWS Certified AI Practitioner (AIF-C01) validates broad knowledge of AI, ML, and Generative AI and their AWS implementations. It suits technical and non-technical roles: analysts, developers, PMs, and cloud professionals. It is not a deep coding exam.'
      },
      {
        question: 'Do I need prior AWS or AI experience?',
        answer:
          'No strict prerequisite. Basic cloud awareness helps. The course starts from fundamentals. AWS Cloud Practitioner (CLF-C02) gives a slight edge but is not required.'
      },
      {
        question: 'How much does the AIF-C01 exam cost?',
        answer:
          'The exam is $100 USD. AWS often provides a free retake on foundational certifications including AIF-C01 (confirm current terms on the AWS Certification site). Training fee is separate from the exam fee.'
      },
      {
        question: 'How is this different from AWS Cloud Practitioner (CLF-C02)?',
        answer:
          'CLF-C02 covers general AWS cloud fundamentals. AIF-C01 focuses on AI, ML, GenAI, Bedrock, SageMaker, Rekognition, Comprehend, Responsible AI, and Foundation Models — not covered at that depth in CLF-C02. You can take AIF-C01 without CLF-C02.'
      },
      {
        question: 'What AWS hands-on experience will I gain?',
        answer:
          '8+ labs including a Lex chatbot, Rekognition image analysis, SageMaker classification, Bedrock + Knowledge Bases GenAI assistant, Textract document processing, and a capstone AI architecture design.'
      },
      {
        question: 'What salaries can I expect after this certification?',
        answer:
          'Roles such as AI Project Manager, Solutions Architect, ML Engineer, BI Analyst, and AI Strategy Consultant vary by market. Indicative USA ranges are often cited around $90k–$130k+ for entry to mid-level (sources vary; experience matters). Senior roles can exceed that band.'
      },
      {
        question: 'How long is the course and what are the batch timings?',
        answer:
          '40+ hours total, typically 6–8 weeks. Batches in EST, GMT, and IST with weekday and weekend options. Contact us for the current schedule.'
      },
      {
        question: 'Is placement assistance available after the course?',
        answer:
          'We provide career support including AWS AI-focused resume and LinkedIn help, mock interviews, and referrals to hiring partners. Individual outcomes depend on experience, location, and effort.'
      }
    ],
    duration: '40+ Hours',
    mode: 'Online',
    icon: 'aws',
    heroSubtitle: 'AIF-C01',
    toolsAndTechnologies: [
      { name: 'Amazon Bedrock', desc: 'Foundation model hub' },
      { name: 'Amazon SageMaker', desc: 'ML build & deploy' },
      { name: 'Amazon Rekognition', desc: 'Computer vision' },
      { name: 'Amazon Comprehend', desc: 'NLP & text analysis' },
      { name: 'Amazon Lex', desc: 'Conversational AI' },
      { name: 'Amazon Transcribe', desc: 'Speech to text' },
      { name: 'Amazon Polly', desc: 'Text to speech' },
      { name: 'Amazon Translate', desc: 'Language translation' },
      { name: 'Amazon Kendra', desc: 'Intelligent search' },
      { name: 'Amazon QuickSight', desc: 'BI & ML insights' },
      { name: 'AWS IAM & Guardrails', desc: 'Security & governance' },
      { name: 'Amazon Q', desc: 'GenAI assistant' }
    ]
  },

  'spark-hadoop-developer-training': {
    slug: 'spark-hadoop-developer-training',
    title: 'Spark & Hadoop Developer Training',
    category: 'Big Data',
    heroDescription:
      'Big Data engineering with Apache Spark and Hadoop — distributed pipelines, streaming with Kafka, Hive, Pig, HBase, ETL at scale, and cloud deployment (AWS EMR, Azure HDInsight, GCP Dataproc, Databricks). Aligned with Cloudera CCA 175 Spark and Hadoop Developer. Live instructor-led · 55+ hours · 10 modules · 6+ projects · cloud lab access.',
    heroBannerImage: '/course-banners/multi-cloud-devops.png',
    callToAction: 'Request Callback',
    highlights: [
      'CCA 175 Spark and Hadoop Developer exam-aligned preparation',
      '55+ hours · 10 modules · Hadoop Cloud Lab (browser access, no heavy local install)',
      'HDFS, YARN, MapReduce, Hive, Pig, HBase, Sqoop, Flume, Oozie, Kafka, Spark Core & SQL, MLlib',
      'PySpark & Scala basics · Structured Streaming · EMR, HDInsight, Dataproc, Databricks',
      '6+ projects — NYSE/Hive, Twitter sentiment, e-commerce streaming, fraud detection, capstone',
      'Live training · EST, GMT, IST · lifetime access · 1-on-1 mentoring & career support'
    ],
    description: {
      whyChooseTitle: 'Why choose Spark & Hadoop Developer Training from InsureTech Skills?',
      overview:
        'Big Data is central to how enterprises operate today. This programme teaches you to build distributed data processing systems from the ground up using Apache Spark and the Hadoop ecosystem.\n\nAt InsureTech Skills you work on realistic projects spanning finance, healthcare, and e-commerce — from HDFS and MapReduce through Spark Streaming and Kafka. By completion you will be prepared for the Cloudera Certified Associate (CCA) Spark and Hadoop Developer exam (CCA175) and for enterprise data engineering roles globally.',
      whyChoose:
        'Live expert-led sessions, a hosted Hadoop cloud lab for hands-on work, performance-style practice aligned to CCA 175, and portfolio projects you can discuss in interviews — plus structured exam tips and mock tasks.',
      keyFeatures: [
        'Full-stack Hadoop and Spark curriculum with hosted lab environment',
        'Real-time streaming, Kafka integration, and MLlib at scale',
        'Cloud deployment patterns on major managed Spark/Hadoop services',
        'CCA 175-focused review, mocks, and hands-on performance tasks',
        'Career support: resume, interviews, and hiring partner referrals'
      ],
      whatYouWillLearn: [
        'Hadoop architecture — HDFS, YARN and MapReduce',
        'Apache Spark core — RDDs, DataFrames and Datasets',
        'Spark SQL for structured data querying at scale',
        'Real-time streaming with Spark Streaming and Kafka',
        'Hive, Pig, HBase and Sqoop for data processing',
        'PySpark — Python API for Apache Spark',
        'ETL pipeline design and big data workflow automation',
        'Spark MLlib for machine learning at scale',
        'Cloud deployment — AWS EMR, Azure HDInsight, GCP Dataproc',
        'CCA 175 Spark and Hadoop Developer exam preparation'
      ],
      prerequisites: [
        'Basic Python or Java/Scala; SQL and Linux command line recommended',
        'No prior Spark or Hadoop required — starts from fundamentals',
        'Windows 10+ or macOS 11+; 8GB RAM minimum (16GB recommended); ~50GB free disk if using local VM (optional — cloud lab provided)',
        'Stable broadband for live sessions and lab access'
      ],
      whoCanJoin: [
        'Software developers, data analysts, database admins, and IT professionals',
        'Anyone moving into Big Data or data engineering at global enterprises',
        'Graduates and freshers with strong programming fundamentals'
      ],
      distinctness:
        'CCA 175–aligned path combining classic Hadoop (HDFS, MapReduce, Hive, Pig, HBase) with modern Spark (SQL, streaming, MLlib) and production-style cloud deployment — with a dedicated cloud lab so you spend time learning, not fighting cluster installs.'
    },
    modules: [
      {
        title: '1. Introduction to Big Data & Hadoop Ecosystem',
        topics: [
          'What is Big Data? — 5 V\'s: Volume, Velocity, Variety, Veracity, Value',
          'Introduction to Hadoop — history, use cases and ecosystem overview',
          'Hadoop vs traditional RDBMS — when to use what',
          'Setting up Hadoop environment — single node and multi-node cluster concepts',
          'Introduction to Linux for Big Data — essential commands'
        ]
      },
      {
        title: '2. HDFS — Hadoop Distributed File System',
        topics: [
          'HDFS architecture — NameNode, DataNode, Secondary NameNode',
          'HDFS read and write pipeline — block replication and fault tolerance',
          'HDFS commands — file operations, permissions and administration',
          'HDFS federation and high availability setup',
          'Data storage formats — Avro, Parquet, ORC, JSON on HDFS'
        ]
      },
      {
        title: '3. MapReduce & YARN',
        topics: [
          'MapReduce programming model — Map, Shuffle and Reduce phases',
          'Writing MapReduce programs in Java and Python',
          'YARN architecture — ResourceManager, NodeManager, ApplicationMaster',
          'Job scheduling and resource management in YARN',
          'MapReduce optimization — combiners, partitioners and counters'
        ]
      },
      {
        title: '4. Hive, Pig & HBase',
        topics: [
          'Apache Hive — architecture, HiveQL, tables and partitions',
          'Hive joins, views, UDFs and optimization techniques',
          'Apache Pig — Pig Latin scripting and data flow model',
          'Pig operators — LOAD, FILTER, GROUP, JOIN, STORE',
          'HBase — NoSQL architecture, column families and row keys',
          'HBase CRUD operations and integration with Hadoop',
          'Project: NYSE stock data analysis using Hive'
        ]
      },
      {
        title: '5. Data Ingestion — Sqoop & Flume',
        topics: [
          'Apache Sqoop — importing/exporting data between RDBMS and HDFS',
          'Sqoop import commands, incremental imports and filters',
          'Apache Flume — architecture for streaming log data into HDFS',
          'Flume agents, sources, channels and sinks configuration'
        ]
      },
      {
        title: '6. Apache Spark Core',
        topics: [
          'Spark architecture — Driver, Executors and Cluster Manager',
          'RDDs (Resilient Distributed Datasets) — creation, transformations and actions',
          'Lazy evaluation, DAG execution and lineage graph',
          'Spark deployment modes — Local, Standalone, YARN, Kubernetes',
          'PySpark — Python API deep dive with hands-on labs',
          'Spark performance tuning — caching, partitioning and broadcast variables',
          'Spark with Scala — basics for enterprise development'
        ]
      },
      {
        title: '7. Spark SQL & DataFrames',
        topics: [
          'Spark DataFrames vs RDDs — when to use which',
          'Creating DataFrames — from CSV, JSON, Parquet, Hive tables',
          'Spark SQL — querying structured data at scale',
          'DataFrame operations — filter, select, groupBy, join, agg',
          'User Defined Functions (UDFs) in PySpark and Scala',
          'Catalyst optimizer and Tungsten execution engine internals'
        ]
      },
      {
        title: '8. Spark Streaming & Apache Kafka',
        topics: [
          'Introduction to real-time stream processing concepts',
          'Apache Kafka — producers, consumers, topics and brokers',
          'Spark Structured Streaming — reading from Kafka streams',
          'Windowed operations, watermarks and late data handling',
          'Micro-batch vs continuous streaming modes',
          'Project: Real-time e-commerce analytics dashboard'
        ]
      },
      {
        title: '9. Spark MLlib & GraphX',
        topics: [
          'Introduction to Spark MLlib — ML pipelines at scale',
          'Classification and regression with Spark ML',
          'Clustering and recommendation systems using MLlib',
          'Feature engineering and model evaluation in Spark',
          'GraphX for large-scale graph data processing'
        ]
      },
      {
        title: '10. Cloud Deployment, Oozie & Capstone Project',
        topics: [
          'Apache Oozie — workflow scheduler for Hadoop jobs',
          'Deploying Spark on AWS EMR — cluster setup and job submission',
          'Azure HDInsight and GCP Dataproc — managed Hadoop/Spark clusters',
          'Databricks platform — unified Spark workspace on cloud',
          'CCA 175 exam tips, mock tests and practice tasks',
          'Capstone: End-to-end Big Data pipeline (fraud detection / log analytics)'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Personal mentor for Spark, Hadoop, and CCA 175 prep.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live batches with cloud lab and real projects.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Enterprise Big Data upskilling for engineering teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'CCA 175 Prep', icon: '📜', description: 'Aligned to Cloudera Spark and Hadoop Developer — mocks and hands-on tasks.' },
      { title: 'Live Instructor-Led', icon: '✓', description: 'Expert-led sessions with live doubt clearing.' },
      { title: 'Hadoop Cloud Lab', icon: '☁️', description: 'Practice on a live cluster through your browser — minimal local setup.' },
      { title: '6+ Industry Projects', icon: '🏗️', description: 'NYSE/Hive, sentiment, streaming, fraud, and capstone pipeline.' },
      { title: 'Spark Performance', icon: '⚡', description: 'In-memory processing — why Spark dominates batch and iterative workloads.' },
      { title: 'Global Batches', icon: '🌍', description: 'EST, GMT, and IST scheduling for worldwide learners.' },
      { title: 'Lifetime Access', icon: '♾️', description: 'Recordings, code, and study materials after enrollment.' },
      { title: 'Career Support', icon: '💼', description: 'Resume, mock interviews, and hiring partner referrals.' }
    ],
    faqs: [
      {
        question: 'Do I need prior Big Data or Hadoop experience to join?',
        answer:
          'No prior Spark or Hadoop experience is required. Python or Java/Scala basics and familiarity with SQL and Linux help. The course progresses from fundamentals to advanced topics.'
      },
      {
        question: 'Does this course prepare me for the CCA 175 certification?',
        answer:
          'Yes. Content aligns with the Cloudera Certified Associate Spark and Hadoop Developer (CCA175) exam. We include mock tests and performance-based practice similar to the exam format. Verify current exam availability and format on Cloudera\'s official certification pages.'
      },
      {
        question: 'What is the average salary for a Spark/Hadoop developer in the USA?',
        answer:
          'Compensation varies widely by seniority, company, and location. Big data and Spark roles are typically well-paid; check recent job postings and surveys for current ranges in your market.'
      },
      {
        question: 'Will I get a Hadoop cluster to practice on?',
        answer:
          'Yes. We provide access to a hosted Hadoop cloud lab during the course so you can practice without building a complex local cluster. Requirements may vary by cohort — confirm details at enrollment.'
      },
      {
        question: 'How long is the course and what are the batch timings?',
        answer:
          '55+ hours total, typically 8–10 weeks. Batches in EST, GMT, and IST with weekend options. Contact us for the current schedule.'
      },
      {
        question: 'What real-world projects will I work on?',
        answer:
          '6+ projects including NYSE analysis with Hive, Twitter sentiment with Spark Streaming and Kafka, real-time e-commerce analytics, fraud detection with MLlib, and an end-to-end capstone (e.g. fraud or log analytics).'
      },
      {
        question: 'Is placement assistance available after the course?',
        answer:
          'We offer career support including Big Data–focused resume help, LinkedIn optimization, technical mock interviews (including Spark coding), and referrals to partners. Outcomes depend on your background and the job market.'
      }
    ],
    duration: '55+ Hours',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'CCA 175',
    toolsAndTechnologies: [
      { name: 'Apache Spark', desc: 'Core engine' },
      { name: 'Apache Hadoop', desc: 'Distributed storage' },
      { name: 'PySpark', desc: 'Python Spark API' },
      { name: 'Scala', desc: 'Spark native lang' },
      { name: 'Apache Hive', desc: 'SQL on Hadoop' },
      { name: 'Apache Pig', desc: 'Data flow scripts' },
      { name: 'Apache Kafka', desc: 'Real-time streaming' },
      { name: 'HBase', desc: 'NoSQL on Hadoop' },
      { name: 'Sqoop and Flume', desc: 'Data ingestion' },
      { name: 'Oozie', desc: 'Workflow scheduler' },
      { name: 'AWS EMR / GCP', desc: 'Cloud clusters' },
      { name: 'Databricks', desc: 'Spark platform' }
    ]
  },
  'digital-marketing-training-with-ai-integrated': {
    slug: 'digital-marketing-training-with-ai-integrated',
    title: 'AI Integrated Digital Marketing Training',
    category: 'Digital Marketing',
    heroDescription:
      'Master modern On-Page SEO with AI-integrated digital marketing strategies. Learn how Google ranks pages, map search intent, write high-impact SEO content, run real website audits, and build a portfolio-ready project with measurable results.',
    heroBannerImage: '/course-banners/digital-marketing-ai.png',
    callToAction: 'Build SEO skills that rank and convert',
    highlights: [
      'Understand how Google ranks pages using relevance, quality, and UX',
      'Write SEO content optimized for both AI overviews and search engines',
      'Perform practical on-page SEO audits on real websites',
      'Apply featured snippet, CTR, and topical authority strategies',
      'Execute a 4-week workflow from keyword research to performance tracking',
      'Build a portfolio-ready SEO project'
    ],
    description: {
      whyChooseTitle: 'Why choose Digital Marketing Training with AI Integrated from InsureTech Skills?',
      overview:
        'This practical digital marketing module is focused on On-Page SEO (2026) and designed for learners who want real-world ranking skills. You will learn search intent mapping, SEO content planning, keyword placement, internal linking, UX optimization, snippet targeting, and AI-first optimization methods that align with modern search behavior.',
      whyChoose:
        'At InsureTech Skills, we focus on implementation over theory. You will work with real examples, structured workflows, and audit checklists to confidently optimize web pages, improve visibility, and drive sustainable organic growth.',
      keyFeatures: [
        'AI + Search optimized content strategy',
        'Hands-on audit framework for real websites',
        'Step-by-step on-page SEO workflow',
        'Featured snippet and CTR optimization techniques',
        'Portfolio-ready implementation project',
        'Trainer support and practical guidance'
      ],
      whatYouWillLearn: [
        'How Google ranks pages using relevance, quality, and user experience',
        'How to map search intent: informational, commercial, and transactional',
        'How to create SEO content blueprints with title, H1, H2/H3, and FAQs',
        'How to use the Hook -> Value -> Proof -> CTA writing framework',
        'How to place keywords naturally across title, H1, first 100 words, body, and ALT text',
        'How to improve internal linking with descriptive anchors',
        'How to optimize UX: speed, mobile friendliness, and readability',
        'How to structure content for featured snippets (40-60 word answers + bullets)',
        'How to apply advanced strategies: AI optimization (SGE), topical authority, content depth, and CTR improvements',
        'How to run a complete on-page SEO audit and track engagement metrics'
      ],
      prerequisites: [
        'Basic understanding of websites and content publishing',
        'No prior SEO experience required',
        'Willingness to practice with real webpages and tools'
      ],
      whoCanJoin: [
        'Beginners in digital marketing',
        'Content writers and bloggers',
        'Business owners and founders',
        'Freelancers and consultants',
        'Students building career-ready SEO skills',
        'Marketing professionals upskilling for AI-era search'
      ],
      distinctness:
        'This module combines practical On-Page SEO with AI-aware optimization methods. Instead of shortcuts, learners build ranking capability through intent-first strategy, quality content architecture, and user-centric experience improvements.'
    },
    modules: [
      {
        title: '1. How Google Ranks a Page',
        topics: [
          'Relevance: matching content with search intent',
          'Quality: depth, trust, and competitive value',
          'User Experience (UX): engagement, readability, and usefulness',
          'Golden rule: better problem-solving content ranks better'
        ]
      },
      {
        title: '2. Modern On-Page SEO Framework',
        topics: [
          'Search intent mapping: informational, commercial, transactional',
          'Content blueprint: SEO title, one H1, optimized H2/H3, and FAQs',
          'SEO writing formula: Hook, Value, Proof, CTA',
          'Keyword placement strategy: title, H1, first 100 words, body, and image ALT text',
          'Internal linking using relevant pages and descriptive anchor text',
          'UX optimization: load speed, mobile-friendliness, clean layout, readability',
          'Featured snippet optimization with direct answers and bullet structure'
        ]
      },
      {
        title: '3. Advanced On-Page SEO Strategies',
        topics: [
          'AI optimization (SGE): clear direct answers, FAQs, and structured headings',
          'Topical authority: one core topic with interlinked subtopics',
          'Content depth: examples, use cases, and step-by-step clarity',
          'CTR optimization: use numbers, strong words, and current year in titles'
        ]
      },
      {
        title: '4. Practical Workflow (4 Weeks)',
        topics: [
          'Week 1: keyword research and competitor analysis',
          'Week 2: content writing and structural drafting',
          'Week 3: on-page optimization implementation',
          'Week 4: publish, monitor, and track ranking progress'
        ]
      },
      {
        title: '5. On-Page SEO Audit Framework',
        topics: [
          'Content check: intent match and competitive value',
          'Technical check: loading speed and mobile responsiveness',
          'SEO elements: title, meta description, and heading structure',
          'Engagement metrics: bounce rate and time on page'
        ]
      },
      {
        title: '6. Essential Tools and Common Mistakes',
        topics: [
          'Tools: Google Search Console, Google Analytics, SEMrush, Google PageSpeed Insights',
          'Common mistakes: ignoring intent, copying competitors, keyword stuffing, poor UX, no internal linking',
          'Professional insights: SEO takes 2-8 weeks, consistency matters, quality over quantity, update old content regularly',
          'Core formula: Intent + Content Quality + User Experience = Ranking'
        ]
      }
    ],
    learningModes: [
      {
        title: '1-TO-1 TRAINING',
        icon: '👥',
        description: 'Personalized SEO mentorship with one-on-one implementation support.',
        buttonText: 'GET STARTED'
      },
      {
        title: 'ONLINE TRAINING',
        icon: '💻',
        description: 'Live instructor-led sessions with practical assignments and audits.',
        buttonText: 'ENROLL NOW'
      },
      {
        title: 'CORPORATE TRAINING',
        icon: '🏢',
        description: 'Team upskilling for modern SEO, content quality, and organic growth.',
        buttonText: 'CONTACT US'
      }
    ],
    benefits: [
      {
        title: 'Practical SEO Execution',
        icon: '✓',
        description: 'Learn by doing real optimizations, not just theory.'
      },
      {
        title: 'AI-Ready Content Strategy',
        icon: '🤖',
        description: 'Build pages optimized for both AI-generated summaries and classic search results.'
      },
      {
        title: 'Audit Confidence',
        icon: '🔍',
        description: 'Use a structured checklist to evaluate and improve any webpage.'
      },
      {
        title: 'Portfolio Project',
        icon: '📁',
        description: 'Complete an SEO project you can showcase to employers or clients.'
      }
    ],
    faqs: [
      {
        question: 'How long does it take to see SEO results?',
        answer: 'Most learners see early SEO movement within 2-8 weeks, depending on competition, content quality, and consistency.'
      },
      {
        question: 'Do I need technical coding skills for this module?',
        answer: 'No advanced coding is required. You will focus on practical on-page implementation, content structure, and optimization workflows.'
      },
      {
        question: 'Will this module help with AI-era search trends?',
        answer: 'Yes. The module includes AI optimization practices such as clear answers, structured headings, and FAQ-based formatting for modern search experiences.'
      },
      {
        question: 'Is this useful for freelancers and business owners?',
        answer: 'Absolutely. The framework helps freelancers, marketers, and business owners improve organic visibility and attract qualified traffic.'
      }
    ],
    duration: '4 Weeks',
    mode: 'Online',
    icon: 'seo',
    heroSubtitle: 'On-Page SEO (2026)',
    toolsAndTechnologies: [
      { name: 'Google Search Console', desc: 'Performance and index insights' },
      { name: 'Google Analytics', desc: 'Traffic and behavior metrics' },
      { name: 'SEMrush', desc: 'Keyword and competitor research' },
      { name: 'Google PageSpeed Insights', desc: 'Speed and UX diagnostics' },
      { name: 'Google Search', desc: 'SERP and intent analysis' },
      { name: 'AI Assistants', desc: 'Content ideation and structure support' }
    ]
  },
  'data-engineer-professional-training': {
    slug: 'data-engineer-professional-training',
    title: 'Data Engineer Professional Training',
    category: 'Big Data',
    heroDescription:
      'Master the full data engineering lifecycle — from raw ingestion to scalable pipelines, cloud warehouses, and real-time analytics. This 6-month, industry-aligned program includes 200+ hours of live training, 10+ hands-on projects across three cloud platforms, placement support, and live mentorship. Build end-to-end pipelines with SQL, Python, Spark, Kafka, Airflow, dbt, and modern lakehouse patterns on AWS, Azure, and GCP.',
    heroBannerImage: '/course-banners/multi-cloud-devops.png',
    callToAction: 'Become a job-ready Data Engineer',
    highlights: [
      '6 months · 200+ hrs live training · 10+ real projects',
      'Batch & real-time streaming — Kafka, Spark, Delta Lake',
      'Cloud data engineering on AWS, Azure & GCP',
      'Apache Airflow orchestration & dbt transformations',
      'Placement support, mock interviews & portfolio on GitHub',
      'Free Python & SQL pre-bootcamp for beginners (enrolled students)'
    ],
    description: {
      whyChooseTitle: 'Why choose Data Engineer Professional Training from InsureTech Skills?',
      overview:
        'The Data Engineer Professional Training is a comprehensive programme designed to make you job-ready: you will design, build, and optimise robust data pipelines, work with distributed systems and cloud platforms, and use the modern data stack that powers real-world analytics and AI applications — with guided cloud sandboxes and a production-style capstone.',
      whyChoose:
        'At InsureTech Skills you get live expert-led sessions (not recorded-only), hands-on cloud labs on AWS and Azure at no extra cost, 4+ portfolio projects on GitHub, resume and LinkedIn support, certification guidance (AWS, Azure, Databricks, dbt), lifetime LMS access, and a dedicated placement team with cohort community support.',
      keyFeatures: [
        'Project-based learning with a production-grade capstone',
        'Live mentorship from Data Engineers with 5–15+ years experience',
        'Cloud lab access — practice on real environments',
        'InsureTech Skills certificate + external certification prep',
        'Placement assistance and peer community (Slack/WhatsApp)',
        'Structured curriculum across 10 modules over 6 months'
      ],
      whatYouWillLearn: [
        'Python for data engineering: APIs, Pandas, Parquet/Avro, testing and logging',
        'Advanced SQL, PostgreSQL, NoSQL (MongoDB, Cassandra), OLTP vs OLAP, dimensional modelling',
        'Data warehousing: Kimball/Inmon, Snowflake, Redshift, BigQuery, dbt on Snowflake',
        'ETL/ELT pipelines: Airflow DAGs, Prefect/Dagster, Fivetran/Airbyte/Stitch',
        'Big data: Hadoop ecosystem, PySpark, Structured Streaming, Delta Lake lakehouse patterns',
        'Real-time streaming: Kafka, Kinesis, Event Hubs, lambda/kappa architectures',
        'Cloud data engineering: AWS (S3, Glue, Lambda, Redshift, EMR), Azure (ADF, Databricks, Synapse), GCP (BigQuery, Dataflow, Composer)',
        'Data quality & governance: Great Expectations, Glue Catalog, lineage, GDPR-aware practices',
        'DevOps for data: Git, Docker, Kubernetes basics, CI/CD for dbt and Airflow',
        'Capstone plus career prep: system design, mocks, and certification pathways'
      ],
      prerequisites: [
        'Graduate in any stream (B.Tech / BCA / BSc / B.Com / BA)',
        'Basic computer literacy; no prior coding required for the Beginner track',
        'Advanced track: familiarity with Python or SQL is preferred',
        'Optional: databases or Excel/BI — InsureTech offers a free Python & SQL bootcamp for enrolled students'
      ],
      whoCanJoin: [
        'Freshers and recent graduates entering data engineering',
        'Software / IT professionals specialising in data infrastructure',
        'BI and analysts moving into engineering roles',
        'Cloud enthusiasts targeting AWS, Azure, or GCP data services'
      ],
      distinctness:
        'This programme emphasises end-to-end pipeline ownership — ingestion through orchestration, transformation with dbt and Spark, streaming with Kafka, cloud-native deployment, data quality, and DevOps practices — so you graduate with a portfolio and interview-ready skills, not just theory.'
    },
    modules: [
      {
        title: '1. Python for Data Engineering',
        topics: [
          'Python recap: data types, OOP, file I/O',
          'APIs and web scraping (requests, BeautifulSoup)',
          'Pandas, NumPy; JSON, CSV, Parquet, Avro, ORC',
          'Error handling, logging, unit testing',
          'Project: data ingestion script from a public API'
        ]
      },
      {
        title: '2. SQL & Databases for Data Engineers',
        topics: [
          'Advanced SQL: window functions, CTEs, indexes, optimisation',
          'PostgreSQL deep dive; MongoDB and Cassandra — when and why',
          'OLTP vs OLAP; normalisation and schema design',
          'Project: star-schema warehouse from an OLTP source'
        ]
      },
      {
        title: '3. Data Warehousing & Modelling',
        topics: [
          'Kimball vs Inmon; facts, dimensions, SCDs',
          'Snowflake: architecture, virtual warehouses, time travel',
          'Redshift and BigQuery overview',
          'dbt: models, tests, sources, documentation',
          'Project: dbt project on Snowflake'
        ]
      },
      {
        title: '4. Data Pipelines & ETL/ELT',
        topics: [
          'ETL vs ELT; idempotency, fault tolerance, backfilling',
          'Apache Airflow: DAGs, operators, sensors, XComs',
          'Prefect and Dagster overview',
          'Fivetran, Airbyte, Stitch',
          'Project: multi-step Airflow DAG end-to-end'
        ]
      },
      {
        title: '5. Big Data: Spark & Hadoop',
        topics: [
          'Hadoop: HDFS, YARN, MapReduce (conceptual)',
          'Spark: RDDs, DataFrames, PySpark transformations and actions',
          'Structured Streaming; Delta Lake: ACID, schema evolution, time travel',
          'Project: large dataset with PySpark on Databricks'
        ]
      },
      {
        title: '6. Real-Time Data Streaming',
        topics: [
          'Event-driven architecture; Apache Kafka topics, partitions, producers, consumers',
          'Kafka Streams and ksqlDB',
          'AWS Kinesis / Azure Event Hubs',
          'Stream-batch lambda and kappa architectures',
          'Project: real-time fraud detection with Kafka and Spark'
        ]
      },
      {
        title: '7. Cloud Data Engineering',
        topics: [
          'AWS: S3, Glue, Lambda, Redshift, EMR, Athena, Step Functions',
          'Azure: Data Factory, Databricks, Synapse, ADLS Gen2',
          'GCP: Cloud Storage, BigQuery, Dataflow, Cloud Composer',
          'Terraform basics for data infrastructure; cost optimisation'
        ]
      },
      {
        title: '8. Data Quality, Governance & Observability',
        topics: [
          'Data quality dimensions; Great Expectations',
          'Cataloguing: Apache Atlas, AWS Glue Catalog',
          'Lineage: OpenLineage / Marquez',
          'Observability concepts; GDPR and privacy for engineers'
        ]
      },
      {
        title: '9. DevOps for Data Engineers',
        topics: [
          'Git branching; Docker for data apps and pipelines',
          'Kubernetes basics for data workloads',
          'CI/CD: GitHub Actions for dbt and Airflow',
          'Monitoring: Grafana and Prometheus basics',
          'Project: automate dbt deployment via GitHub Actions'
        ]
      },
      {
        title: '10. Capstone Project & Career Readiness',
        topics: [
          'End-to-end capstone: production-style data platform',
          'Resume, GitHub, LinkedIn; mock interviews (SQL, Python, system design)',
          'Certification prep: AWS, Azure, dbt, Databricks',
          'Placement drive and referral connections'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Custom schedule with dedicated mentorship for pipeline and cloud labs.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live online batches with recordings in LMS within 24 hours.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Upskill teams on modern data stack and cloud data platforms.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Live Expert-Led Sessions', icon: '✓', description: 'Learn from practising Data Engineers, not recordings only.' },
      { title: 'Cloud Lab Access', icon: '☁️', description: 'Hands-on AWS and Azure sandboxes for real pipelines.' },
      { title: '10+ Real Projects', icon: '🏗️', description: 'Portfolio-ready work including capstone and GitHub profile.' },
      { title: 'Placement Support', icon: '💼', description: 'Resume, mocks, referrals, and job portal access.' },
      { title: 'Lifetime LMS', icon: '♾️', description: 'Recordings and updated materials after completion.' },
      { title: 'Certification Path', icon: '📜', description: 'InsureTech certificate plus guidance for industry certs.' }
    ],
    faqs: [
      {
        question: 'Do I need a coding background to enrol?',
        answer:
          'No prior coding is required for the Beginner track. A free Python & SQL pre-bootcamp is included for absolute beginners. Basic Python or SQL helps for the Advanced track.'
      },
      {
        question: 'Is the program online or offline?',
        answer:
          'Delivered live online via Zoom or Google Meet. Sessions are recorded to your LMS within 24 hours. Weekend batches are available.'
      },
      {
        question: 'What is the duration and weekly commitment?',
        answer:
          'The program runs six months. Plan for roughly 8–10 hours per week including live sessions, assignments, and projects. Weekday and weekend batch options exist.'
      },
      {
        question: 'Will I get placement support?',
        answer:
          'Yes. You receive resume preparation, LinkedIn optimisation, mock interviews, job portal access, and referral support. Placement depends on individual performance and market conditions.'
      },
      {
        question: 'What certifications can I pursue?',
        answer:
          'You receive an InsureTech Skills Data Engineer Professional Certificate. The programme also prepares you for paths such as AWS Certified Data Engineer, Azure Data Engineer Associate, Databricks Certified Data Engineer, and dbt Analytics Engineering Certification.'
      },
      {
        question: 'Do I get access to cloud platforms?',
        answer:
          'Yes. Enrolled learners get guided sandbox access on AWS and Azure for hands-on exercises on real cloud setups.'
      }
    ],
    duration: '6 Months (200+ Hours)',
    mode: 'Online',
    icon: 'devops',
    heroSubtitle: 'Data Engineering',
    toolsAndTechnologies: [
      { name: 'Python & SQL', desc: 'Core engineering languages' },
      { name: 'Apache Spark & Hadoop', desc: 'Distributed processing' },
      { name: 'Apache Kafka', desc: 'Event streaming' },
      { name: 'Apache Airflow', desc: 'Workflow orchestration' },
      { name: 'dbt', desc: 'Analytics engineering' },
      { name: 'Snowflake / Redshift / BigQuery', desc: 'Cloud warehouses' },
      { name: 'Delta Lake', desc: 'Lakehouse on data lakes' },
      { name: 'AWS & Azure & GCP', desc: 'Cloud data services' },
      { name: 'Docker & Kubernetes', desc: 'Containerised workloads' },
      { name: 'Great Expectations', desc: 'Data quality tests' }
    ]
  },
  'python-data-scientist-training': {
    slug: 'python-data-scientist-training',
    title: 'Python Data Scientist Training',
    category: 'Data Science',
    heroDescription:
      'From Python basics to machine learning, deep learning, and AI — become a job-ready Data Scientist with 12+ real projects. This 6-month programme includes 200+ hours of live training, deployment skills (Flask, FastAPI, Docker, MLflow), NLP, computer vision, time series, MLOps, and placement support with live mentorship.',
    heroBannerImage: '/course-banners/python-training.png',
    callToAction: 'Become a job-ready Python Data Scientist',
    highlights: [
      '6 months · 200+ hrs · 12+ projects incl. capstone',
      'ML, DL, NLP, CV, time series, and MLOps',
      'GenAI tools: ChatGPT, Copilot, Hugging Face Transformers',
      'Deploy models as REST APIs on AWS, Azure, or GCP',
      'Free Python & Maths foundations bootcamp for enrolled students',
      'Kaggle participation, GitHub portfolio, and interview prep'
    ],
    description: {
      whyChooseTitle: 'Why choose Python Data Scientist Training from InsureTech Skills?',
      overview:
        'The Python Data Scientist Professional Training is a structured six-month journey through the full data science lifecycle: data wrangling, exploratory analysis, supervised and unsupervised learning, deep learning, NLP, computer vision, time series, deployment, and storytelling — with a capstone that mirrors a real client engagement.',
      whyChoose:
        'You learn from Data Scientists and ML engineers with years of industry experience, use notebooks and cloud sandboxes (including Colab for GPU work), build 12+ portfolio projects, participate in Kaggle-style work, and receive placement assistance plus certification guidance for Google, IBM, AWS, and Azure role-based certs.',
      keyFeatures: [
        'Live classes with GenAI-integrated workflow training',
        '12+ projects and end-to-end deployed ML API',
        'MLOps: MLflow, DVC, Docker, GitHub Actions',
        'InsureTech certificate + external certification prep',
        'Placement team support and peer hackathons',
        'Lifetime access to LMS materials and recordings'
      ],
      whatYouWillLearn: [
        'Python for DS: core syntax, OOP, file I/O, clean code (PEP 8)',
        'Mathematics and statistics: linear algebra, probability, inference, hypothesis tests',
        'NumPy, Pandas, Polars; EDA, feature engineering, visualisation (Matplotlib, Seaborn, Plotly)',
        'Supervised learning: regression, classification, ensembles, XGBoost/LightGBM/CatBoost, tuning',
        'Unsupervised learning: clustering, PCA, recommendations, anomaly detection',
        'Deep learning: ANNs, CNNs, RNNs/LSTM, transfer learning',
        'NLP: SpaCy, Hugging Face Transformers, BERT/GPT-style models',
        'Computer vision: OpenCV, YOLO-style detection, augmentation',
        'Time series: ARIMA, Prophet, LSTM forecasting',
        'MLOps: Flask, FastAPI, Docker, MLflow, DVC, cloud deployment (SageMaker, Azure ML, Vertex AI)'
      ],
      prerequisites: [
        'Graduate in any stream (B.Tech / BCA / BSc / B.Com / BA / MBA)',
        'Basic computer literacy; no programming required for the Beginner track',
        'Logical thinking and willingness to practise daily',
        'Optional: any programming basics or Excel — free Python & Maths bootcamp for enrolled students'
      ],
      whoCanJoin: [
        'Freshers and graduates starting a data science career',
        'IT professionals transitioning to Data Scientist or ML Engineer roles',
        'Analysts and BI professionals moving to predictive analytics',
        'Domain experts in healthcare, finance, marketing adding ML skills'
      ],
      distinctness:
        'Unlike unstructured online playlists, this programme pairs rigorous fundamentals with deployment-ready projects, GenAI-augmented workflows, and career services so you can present a credible GitHub and Kaggle profile to employers.'
    },
    modules: [
      {
        title: '1. Python for Data Science',
        topics: [
          'Anaconda, Jupyter, VS Code, Colab',
          'Core Python: types, collections, control flow, comprehensions',
          'Functions, lambda, map/filter/reduce, decorators',
          'OOP: classes, inheritance, polymorphism',
          'File I/O: CSV, JSON, Excel; error handling and PEP 8',
          'Project: web scraper and data cleaner'
        ]
      },
      {
        title: '2. Mathematics & Statistics for Data Science',
        topics: [
          'Linear algebra: vectors, matrices, eigenvalues',
          'Calculus: gradients and chain rule (intuition for ML)',
          'Probability, Bayes, distributions',
          'Descriptive and inferential statistics; hypothesis testing',
          'Project: EDA with statistical inference'
        ]
      },
      {
        title: '3. Data Wrangling & Exploratory Data Analysis',
        topics: [
          'NumPy arrays and broadcasting',
          'Pandas: DataFrames, merge, groupby, pivot',
          'Missing data and outliers; feature engineering',
          'Matplotlib, Seaborn; Plotly and Streamlit',
          'Project: full EDA and data story'
        ]
      },
      {
        title: '4. Machine Learning — Supervised Learning',
        topics: [
          'ML pipeline: prep, selection, evaluation, tuning',
          'Regression and classification algorithms',
          'Ensembles and gradient boosting',
          'Metrics: ROC-AUC, RMSE, R²; GridSearchCV, RandomSearchCV, Optuna',
          'Project: churn or house price prediction end-to-end'
        ]
      },
      {
        title: '5. Machine Learning — Unsupervised Learning',
        topics: [
          'Clustering: K-Means, DBSCAN, hierarchical',
          'PCA, t-SNE, UMAP',
          'Association rules; anomaly detection',
          'Recommendation systems; LDA overview',
          'Project: segmentation and recommendation engine'
        ]
      },
      {
        title: '6. Deep Learning & Neural Networks',
        topics: [
          'Perceptron, activations, backpropagation',
          'Keras/TensorFlow ANNs; optimisers and regularisation',
          'CNNs for images; RNNs, LSTMs, GRUs',
          'Transfer learning: VGG, ResNet, EfficientNet',
          'Project: image classification and LSTM sentiment'
        ]
      },
      {
        title: '7. Natural Language Processing',
        topics: [
          'Tokenisation, stemming, lemmatisation; BoW, TF-IDF',
          'Word2Vec, GloVe, FastText',
          'NER with SpaCy; sentiment and classification',
          'Transformers, BERT, GPT intuition',
          'Hugging Face fine-tuning',
          'Project: news classification and chatbot'
        ]
      },
      {
        title: '8. Computer Vision',
        topics: [
          'OpenCV: filters and transforms',
          'Object detection: YOLO, SSD, Faster R-CNN (concepts)',
          'Segmentation; face detection',
          'GANs overview; augmentation',
          'Project: real-time object detection (e.g. YOLOv8)'
        ]
      },
      {
        title: '9. Time Series Analysis & Forecasting',
        topics: [
          'Trend, seasonality; stationarity and differencing',
          'ARIMA, SARIMA, exponential smoothing',
          'Prophet; LSTM forecasting',
          'Anomaly detection in series',
          'Project: stock or energy demand forecasting'
        ]
      },
      {
        title: '10. MLOps & Model Deployment',
        topics: [
          'Pickle, Joblib, ONNX',
          'Flask and FastAPI REST APIs',
          'Docker; MLflow; DVC',
          'CI/CD with GitHub Actions',
          'Cloud: SageMaker, Azure ML, Vertex AI, Streamlit Cloud',
          'Project: deployed live ML API'
        ]
      },
      {
        title: '11. Data Visualisation & Storytelling',
        topics: [
          'Storytelling principles; Matplotlib and Seaborn',
          'Plotly Dash and Streamlit dashboards',
          'Power BI and Tableau essentials for DS',
          'Presenting to stakeholders',
          'Project: interactive BI dashboard'
        ]
      },
      {
        title: '12. Capstone Project & Career Readiness',
        topics: [
          'End-to-end capstone: sourcing, EDA, modelling, deployment',
          'GitHub and Kaggle portfolio',
          'Mock interviews and ML system design at scale',
          'Certification prep: Google, IBM, AWS, Azure',
          'Placement drive and referrals'
        ]
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Personalised mentoring for projects and deployment.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live online with recordings and weekend batches.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Team programmes for analytics and ML upskilling.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: '12+ Real Projects', icon: '✓', description: 'Including capstone and deployed API.' },
      { title: 'GenAI-Ready Skills', icon: '🤖', description: 'Use Copilot, ChatGPT, and Transformers in workflow.' },
      { title: 'Cloud & GPU Labs', icon: '☁️', description: 'Colab and cloud sandboxes for deep learning.' },
      { title: 'Portfolio & Kaggle', icon: '📁', description: 'Guided GitHub and competition participation.' },
      { title: 'Placement Assistance', icon: '💼', description: 'Mocks, referrals, and hiring partner network.' },
      { title: 'Maths from Scratch', icon: '📐', description: 'Module 2 builds intuition without requiring a maths degree.' }
    ],
    faqs: [
      {
        question: 'Do I need to know Python before joining?',
        answer:
          'No. The programme starts from Python basics and includes a free Python & Maths Foundations Bootcamp before the main cohort for enrolled students.'
      },
      {
        question: 'Is the course online?',
        answer:
          'Yes — fully live online via Zoom or Google Meet. Recordings are in the LMS within 24 hours. Weekend batches suit working professionals.'
      },
      {
        question: 'What is the weekly time commitment?',
        answer:
          'About 8–12 hours per week over six months, including live sessions, assignments, and projects.'
      },
      {
        question: 'What projects will I build?',
        answer:
          '12+ projects including churn prediction, house price modelling, NLP sentiment, image tasks, object detection, time series forecasting, and a full deployed ML API — published to GitHub.'
      },
      {
        question: 'Will I get placement support?',
        answer:
          'Yes: resume and LinkedIn support, technical and HR mock interviews, job portal access, and referrals. Outcomes depend on your effort and the job market.'
      },
      {
        question: 'What about certifications?',
        answer:
          'You earn the InsureTech Skills Data Scientist Professional Certificate and receive preparation guidance for Google Professional ML Engineer, IBM Data Science, AWS ML Specialty, and Azure Data Scientist Associate.'
      },
      {
        question: 'Do I need a powerful GPU laptop?',
        answer:
          'A standard laptop (about 8 GB RAM) is enough. Heavy deep learning exercises use Google Colab or provided cloud sandboxes.'
      }
    ],
    duration: '6 Months (200+ Hours)',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'Python Data Science',
    toolsAndTechnologies: [
      { name: 'Python & SQL', desc: 'Core stack' },
      { name: 'NumPy & Pandas', desc: 'Data manipulation' },
      { name: 'Scikit-learn & XGBoost', desc: 'Classical ML' },
      { name: 'TensorFlow & PyTorch', desc: 'Deep learning' },
      { name: 'Hugging Face', desc: 'NLP and Transformers' },
      { name: 'OpenCV', desc: 'Computer vision' },
      { name: 'MLflow & DVC', desc: 'MLOps and versioning' },
      { name: 'Flask & FastAPI', desc: 'Model APIs' },
      { name: 'Docker', desc: 'Container deployment' },
      { name: 'AWS / Azure / GCP', desc: 'Cloud ML services' }
    ]
  }

};

const DISABLED_COURSE_TITLES = new Set([
  'Microsoft Azure SQL Solution Training',
  'Oracle Cloud Infrastructure (OCI)',
  'Microsoft DP-300 – Azure Database Administrator Associate',
  'Oracle Database SQL Associate',
  'Azure Data Fundamentals',
  'Azure Data Fundamentals Training',
  'Microsoft Azure Data Fundamental Training',
  'AI Program Manager (EC-Council)',
  'AI Specialist with Python – PCEI / PCAI / Advanced Professional',
  'Certified Cloud Security Professional Training',
  'CompTIA Sec+ Training',
  'CompTIA Cloud+ Training',
]);

function isCourseDisabledByTitle(title) {
  return DISABLED_COURSE_TITLES.has(title);
}

function isCourseDisabled(course) {
  return Boolean(course?.title && isCourseDisabledByTitle(course.title));
}

export function getCourseBySlug(slug) {
  const course = courses[slug];
  if (!course || isCourseDisabled(course)) return null;
  return course;
}

export function getAllCourseSlugs() {
  return Object.values(courses)
    .filter((course) => !isCourseDisabled(course))
    .map((course) => course.slug);
}

export function getAllCourses() {
  return Object.values(courses).filter((course) => !isCourseDisabled(course));
}

/** All courses that can be selected in the enrollment form (includes courses with detail pages + all courses listed on /courses). */
const ADDITIONAL_ENROLLABLE_COURSES = [
  'Microsoft Azure Fundamental Training',
  'Microsoft Azure Administrator Training',
  'Microsoft Azure SQL Solution Training',
  'Microsoft Azure Infrastructure Solution Training',
  'Google Professional Cloud Architect Training',
  'GRC Training',
  'Certified Information Systems Security Professional Training (CISSP)',
  'Microsoft Azure Data Scientist Training',
  'Java Training',
  'Angular Training',
];

export function getAllEnrollableCourses() {
  const fromCourses = Object.values(courses)
    .filter((c) => !isCourseDisabled(c))
    .map((c) => ({ slug: c.slug, title: c.title }));
  const existingTitles = new Set(fromCourses.map((c) => c.title));
  const additional = ADDITIONAL_ENROLLABLE_COURSES
    .filter((t) => !isCourseDisabledByTitle(t) && !existingTitles.has(t))
    .map((title) => ({
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      title,
    }));
  return [...fromCourses, ...additional];
}

/** Display titles used in nav/dropdown that differ from course.title (nav title -> slug). */
const TITLE_ALIASES = {
  'Multi-Cloud Security (AWS, Azure & Google)': 'multi-cloud-security-aws-azure-google',
  'Multi-Cloud Security with Gen AI Training | AWS, Azure & GCP': 'multi-cloud-security-aws-azure-google',
  'Leading SAFe® 6.0 Agilist Certification Training': 'leading-safe-agilist-certification-training',
  'Leading SAFe 6.0 Agilist Certification Training': 'leading-safe-agilist-certification-training',
  'Digital Marketing Training with AI Integrated': 'digital-marketing-training-with-ai-integrated',
  'AI Integrated Digital Marketing Training': 'digital-marketing-training-with-ai-integrated',
  'Digital Marketing Training with AI Integrated (On-Page SEO 2026)': 'digital-marketing-training-with-ai-integrated',
  'SEO Training': 'digital-marketing-training-with-ai-integrated',
  'PPC Training': 'digital-marketing-training-with-ai-integrated',
  'Social Media Marketing Training': 'digital-marketing-training-with-ai-integrated',
  'Content Marketing Training': 'digital-marketing-training-with-ai-integrated',
  'Email Marketing Training': 'digital-marketing-training-with-ai-integrated',
  'Affiliate Marketing Training': 'digital-marketing-training-with-ai-integrated',
  // Support both older and updated display labels for this course.
  'Cybersecurity Analyst Training': 'cyber-security-analyst-training',
  'Cybersecurity Analyst Training | Powered by AI': 'cyber-security-analyst-training',
  'AI Powered Cybersecurity Analyst Training': 'cyber-security-analyst-training',
  // Database category uses a shorter nav label that should point to the full Azure Data Fundamentals course.
  'Azure Data Fundamentals': 'microsoft-azure-data-fundamental-training',
  // Big Data category label omits the DP-600 suffix.
  'Microsoft Fabric Analytics Engineer Associate': 'microsoft-fabric-analytics-engineer-associate-dp-600',
  'Microsoft Fabric Analytics Engineer Associate (DP-600)': 'microsoft-fabric-analytics-engineer-associate-dp-600',
  'DP 600 Microsoft Fabric Training': 'microsoft-fabric-analytics-engineer-associate-dp-600',
  // Database category label includes the certification name; our course page uses the Azure SQL Solution title.
  'Microsoft DP-300 – Azure Database Administrator Associate': 'microsoft-azure-sql-solution-training',
  'Tableau Certified Data Analyst Training': 'tableau-data-analyst-training',
  'Databricks Associate Training': 'databricks-associate-training',
  'AWS AI Practitioner': 'aws-ai-practitioner-training',
  'AWS Solutions Architect Training': 'aws-solution-architect-training',
  'Multi Cloud Devops with Generative AI | AWS•Azure•GCP': 'multi-cloud-devops-generative-ai',
  'Certified Information Systems Security Professional (CISSP) Training':
    'certified-information-systems-security-professional-training-cissp',
  'Certified Ethical Hacker (CEH v13) Training': 'certified-ethical-hacker-ceh-training',
  'CEH v13 Training': 'certified-ethical-hacker-ceh-training',
  'BigQuery & Data Analytics Fundamentals': 'google-professional-cloud-architect-training',
  'Azure AI Engineer Associate': 'microsoft-azure-data-scientist-training',
  'Java Training': 'selenium-java-training',
  'AWS Machine Learning – Specialty': 'aws-certified-machine-learning-engineer-associate-mlc01',
  'Data Engineer Professional Training': 'data-engineer-professional-training',
  'Python Data Scientist Training': 'python-data-scientist-training',
  // Nav label used in Web Development mega menu → full MERN + GenAI syllabus course.
  'Front-End & Back-End Developer Training': 'full-stack-web-development-mern-genai-2026',
};

/** Get course slug by exact title (for nav links to course detail page). */
export function getSlugByTitle(title) {
  if (!title) return null;
  if (isCourseDisabledByTitle(title)) return null;
  const slugFromAlias = TITLE_ALIASES[title];
  if (slugFromAlias && courses[slugFromAlias] && !isCourseDisabled(courses[slugFromAlias])) return slugFromAlias;
  const entry = Object.entries(courses).find(([, c]) => c.title === title);
  return entry && !isCourseDisabled(entry[1]) ? entry[0] : null;
}
