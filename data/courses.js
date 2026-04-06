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
      'This programme is structured across three progressive tiers (Beginner, Intermediate, Advanced) enabling students with no prior cloud experience to reach full proficiency in administering and architecting Azure infrastructure solutions. Every module is reinforced with guided lab exercises in a live Azure environment, and the programme culminates in an end-to-end capstone project aligned to real enterprise scenarios. Fully aligned to the AZ-104 (Azure Administrator) and AZ-305 (Azure Infrastructure Solutions) certifications.',
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
    title: 'Multi-Cloud DevOps with Generative AI',
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
      whyChoose: 'The Multi-Cloud DevOps with Generative AI program is designed for IT professionals, developers, and cloud engineers who want to master the next generation of DevOps workflows. You\'ll learn how to build and manage applications across multiple cloud environments, use AI-driven tools to accelerate deployment, monitoring, and optimization, integrate Generative AI models into DevOps pipelines for intelligent automation, and implement CI/CD, IaC (Infrastructure as Code), and AIOps across platforms.',
      whyChooseTitle: 'Why choose Multi-Cloud DevOps with Generative AI from InsureTech Skills?',
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
      distinctness: 'Open to anyone eager to learn Multi-Cloud DevOps with Generative AI. Access to a comprehensive training library and practical resources. Focuses on real-world skills, not just certification. Builds expertise in designing and scaling cloud solutions across 70+ AWS services.'
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
        question: 'Why should I opt for the Multi-Cloud DevOps with Generative AI course?',
        answer: 'Multi-Cloud DevOps with Generative AI provides hands-on expertise in multi-cloud DevOps engineering combined with Generative AI automation. With high demand for multi-cloud and AI-enabled professionals, this certification significantly enhances your career prospects and opens doors to roles in DevOps, cloud engineering, and AIOps.'
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
    title: 'Cyber Security Analyst Training',
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
      whyChooseTitle: 'Why choose Cyber Security Analyst Training from InsureTech Skills?',
      overview: 'Our Cyber Security Analyst Training is designed to equip you with the skills to identify threats, manage vulnerabilities, secure networks, and protect endpoints. You will learn networking concepts, threat and vulnerability management, network security and defensive techniques, cloud concepts and security, endpoint security, and risk management and security governance. The program uses industry tools including Nessus, Splunk, Wireshark, Nikto, CMSeek, OWASP ZAP, Burp Suite, Windows Firewall, and Windows Defender.',
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
      { question: 'Why should I opt for the Cyber Security Analyst Training course?', answer: 'This course equips you with hands-on lab experience and real-world projects to become a job-ready Cybersecurity Analyst. You will learn threat and vulnerability management, network security, endpoint security, cloud security, and risk management using industry tools like Nessus, Wireshark, and Burp Suite. Classes are available on weekends and weekdays with industry-experienced instructors.' },
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
    title: 'Certified Ethical Hacker (CEH) Training',
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
    heroDescription: 'Microsoft Azure Power BI, a cornerstone of the Microsoft Power Platform, is a comprehensive business analytics tool that empowers organisations to harness the potential of their data. Learn how to link data from diverse sources, organise, transform, and clean data, and create interactive dashboards, charts, and reports. 30 Hour Live Virtual Training.',
    heroBannerImage: '/course-banners/azure-power-bi-training.png',
    callToAction: 'Transform raw data into valuable insights',
    highlights: [
      '30 Hour Live Virtual Training',
      'Data integration, modelling, and visualisation',
      'Interactive dashboards, charts, and reports',
      'Flexible scheduling and one-on-one lessons',
      '24x7 Learning assistance and support',
      'Industry-based knowledge'
    ],
    description: {
      whyChooseTitle: 'Why choose Microsoft Azure Power BI Training from InsureTech Skills?',
      overview: 'Learn how to link data from diverse sources with Power BI, and then use this tool to improve your work by organising, transforming, and cleaning data to ensure consistency and accuracy. One of the other major highlights is data modelling, which is developing data models to establish links between various data items. You\'ll learn about data visualisation through interactive dashboards, charts, and reports.',
      whyChoose: 'Mastering Microsoft Azure Power BI can significantly enhance your career prospects as a data analyst, business intelligence professional, or data scientist. It equips you with the skills to transform raw data into valuable insights, make data-driven decisions, and create interactive visualisations that effectively communicate complex information.',
      keyFeatures: [
        '30 Hour Live Virtual Training',
        'Data integration from diverse sources',
        'Data modelling and visualisation',
        'Dashboard design and reporting',
        'DAX and Power BI Services'
      ],
      whatYouWillLearn: [
        'Working with advanced Power BI',
        'Enhanced decision making skills with accurate data interpretation',
        'Increased efficiency in terms of data utilisation',
        'Communicate complex data to others in an easy understandable way',
        'Career Advancement when the course is completed',
        'Data modelling to establish links between various data items',
        'Data visualisation through interactive dashboards, charts, and reports'
      ],
      prerequisites: [
        'All you need is a computer with Windows',
        'Download the free Power BI Desktop software (we\'ll guide you through setup)',
        'No prior experience required; basic understanding of data concepts and familiarity with Microsoft Excel is beneficial'
      ],
      whoCanJoin: [
        'Data Analytics and Business Intelligence Professionals',
        'IT Professionals',
        'Anyone interested in data visualisation and analytics'
      ],
      distinctness: 'Our curriculum is regularly updated to align with the latest advancements in cloud computing and Power BI. You\'ll learn about new features, best practices, and real-world applications.'
    },
    modules: [
      { title: '1. Introduction to Microsoft Azure Power BI', topics: ['Power BI intro', 'Overview'] },
      { title: '2. Getting started with Power BI (Overview)', topics: ['Getting started', 'Setup'] },
      { title: '3. Getting Data from different Data Sources', topics: ['Data sources', 'Connection'] },
      { title: '4. Designing, Developing and Optimising Data Models', topics: ['Data models', 'Optimisation'] },
      { title: '5. Building Reports and Dashboards (Data Visualization)', topics: ['Reports', 'Dashboards'] },
      { title: '6. Data Analysis Expressions (DAX) along Datasheet Management', topics: ['DAX', 'Datasheet management'] },
      { title: '7. Power BI Services', topics: ['Power BI Services', 'Cloud'] },
      { title: '8. Advanced Power BI Features', topics: ['Advanced features'] },
      { title: '9. Power BI Integration with Azure Data Services', topics: ['Azure integration'] },
      { title: '10. Power BI Administration and Governance', topics: ['Administration', 'Governance'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Customized schedule, personalised support.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live virtual training by experienced instructors.', buttonText: 'ENROLL NOW' },
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
      { question: 'Why should I pursue the Microsoft Azure Power BI training program?', answer: 'Mastering Microsoft Azure Power BI can significantly enhance your career prospects as a data analyst, business intelligence professional, or data scientist. It equips you with the skills to transform raw data into valuable insights and create interactive visualisations.' },
      { question: 'What is the duration of your Microsoft Azure Power BI training program?', answer: 'Our Microsoft Azure Power BI training program typically lasts 30 hours, with flexible scheduling options to accommodate your learning pace.' },
      { question: 'What prerequisites are required for enrollment?', answer: 'While no prior programming experience is necessary, a basic understanding of data concepts and familiarity with Microsoft Excel is beneficial. A keen interest in data analysis and visualisation is essential.' },
      { question: 'How does this course benefit my future career?', answer: 'The Microsoft Azure Power BI certification can open doors to exciting career opportunities in various industries. It demonstrates your ability to leverage data for business intelligence, improve decision-making, and drive innovation.' },
      { question: 'Do you provide live virtual training?', answer: 'Yes, we offer live virtual training sessions conducted by experienced instructors.' },
      { question: 'Do you offer group discounts?', answer: 'Yes, we offer group discounts for organisations or individuals enrolling together.' }
    ],
    duration: '30 Hours',
    mode: 'Online',
    icon: 'azure',
    heroSubtitle: 'Microsoft Azure Power BI'
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
  'microsoft-fabric-analytics-engineer-associate-dp-600': {
    slug: 'microsoft-fabric-analytics-engineer-associate-dp-600',
    title: 'Microsoft Fabric Analytics Engineer Associate (DP-600)',
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
        'Analytics Engineers building Fabric semantic models and integrated analytics solutions',
        'Data Engineers designing lakehouse-based pipelines and end-to-end data flows',
        'BI Developers extending Power BI skills into the Fabric analytics stack',
        'Data Architects designing enterprise-scale analytics architectures on Fabric and OneLake',
        'Azure Practitioners migrating Synapse/ADF/Power BI workloads into Fabric',
        'IT Professionals transitioning into modern analytics engineering roles'
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
      { title: 'End-to-End Fabric Expertise', icon: '✓', description: 'Unified coverage across lakehouses, pipelines, semantic models, real-time analytics, and governance.' },
      { title: 'Exam-Aligned Labs', icon: '📚', description: 'Every module supports DP-600 objectives with guided lab delivery.' },
      { title: 'OneLake & Lakehouse Skills', icon: '🗄️', description: 'Hands-on development patterns for lakehouse-based analytics.' },
      { title: 'Real-Time KQL Readiness', icon: '⚡', description: 'KQL and EventStream foundations for operational analytics.' },
      { title: 'Purview Governance Focus', icon: '🛡️', description: 'Governance, lineage, and compliance concepts for enterprise readiness.' }
    ],
    faqs: [
      {
        question: 'Is prior Microsoft Fabric experience required to enrol?',
        answer: 'No. All Fabric platform-specific concepts are covered from the ground up, and the programme includes module-level labs inside a real Fabric workspace.'
      },
      {
        question: 'Is familiarity with Power BI or Azure Data services helpful?',
        answer: 'Yes, it can help you progress faster, but it is not mandatory. The programme covers relevant concepts needed to succeed in DP-600.'
      },
      {
        question: 'Does the training cover guided labs in a real Fabric workspace?',
        answer: 'Yes. Every module includes guided lab exercises in a Fabric environment so you build lakehouses, pipelines, semantic models, and real-time analytics as you learn.'
      },
      {
        question: 'What is included in the course fee?',
        answer: 'The course fee covers instruction, lab environments, and exam preparation materials. The official Microsoft DP-600 exam fee is paid separately when scheduling via the Microsoft Certification portal.'
      },
      {
        question: 'How quickly can I prepare for the DP-600 exam?',
        answer: 'Most students complete the programme within 4 to 6 weeks and are prepared to take the DP-600 exam shortly after. Your timeline may vary based on prior experience and your learning mode.'
      },
      {
        question: 'What roles can I target after earning DP-600?',
        answer: 'You can target roles such as Analytics Engineer, Senior Data Engineer (Fabric), BI Architect, Data Platform Engineer, and Fabric Consultant across enterprise and cloud-native organisations.'
      },
      {
        question: 'Is corporate or team training available?',
        answer: 'Yes. We offer customized corporate training programs tailored to your organisation\'s current tools, team skill levels, and business goals.'
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
      'A rigorous, hands-on training programme that prepares you to design, build, train, deploy, and optimise machine learning workloads on AWS, fully aligned to the MLA-C01 examination and real-world ML engineering practices. Through live instruction and hands-on Amazon SageMaker labs, you will ingest and prepare data, build and tune models, deploy scalable ML pipelines, monitor production workloads, and integrate generative AI using Amazon Bedrock within the AWS cloud ecosystem.',
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
        'Hands-on Amazon SageMaker environment labs',
        'MLOps skills: pipelines, model registry, and CI/CD for ML',
        'Production monitoring: drift, security, and audit logging',
        'Generative AI module with Amazon Bedrock (prompting and RAG)',
        'Full-length MLA-C01 practice papers and mock tests'
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
          'ML fundamentals and the AWS shared responsibility model for ML workloads',
          'AWS global infrastructure concepts',
          'Amazon SageMaker overview'
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
      { title: 'End-to-End MLA-C01 Coverage', icon: '✓', description: 'From data ingestion and feature engineering to deployment and monitoring.' },
      { title: 'Real SageMaker Labs', icon: '📌', description: 'Build training jobs, endpoints, and tuning workflows in a live environment.' },
      { title: 'MLOps and CI/CD Skills', icon: '🔁', description: 'Model lifecycle automation, retraining, and release patterns for production.' },
      { title: 'Security and Compliance Focus', icon: '🛡️', description: 'IAM, VPC isolation, encryption, and audit logging for enterprise readiness.' },
      { title: 'Generative AI with Bedrock', icon: '✨', description: 'Prompt engineering and RAG integration patterns on AWS.' }
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
      overview:
        'This programme is structured into three progressive tiers (Beginner, Intermediate, Advanced) so students with zero prior experience can join and progress all the way to building production-grade, enterprise-level Angular applications. Each tier builds on the previous one, and every module includes guided coding exercises and real-world mini-projects.',
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
      { title: 'Zero to Production Ready', icon: '✓', description: 'Progress from absolute scratch to deployable Angular applications.' },
      { title: 'TypeScript Depth', icon: '📘', description: 'Industry-standard TypeScript proficiency for professional front-end work.' },
      { title: 'RxJS Reactive Programming', icon: '⚡', description: 'Hands-on mastery of Observables and async data streams.' },
      { title: 'NgRx State Management', icon: '🧠', description: 'Predictable, maintainable apps with scalable shared state.' },
      { title: 'Enterprise Testing and SSR', icon: '🛡️', description: 'Unit and E2E testing plus SSR fundamentals with Angular Universal.' },
      { title: 'Capstone Portfolio Project', icon: '🚀', description: 'A deployable full-stack capstone project for interviews and technical assessments.' }
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
    heroSubtitle: 'Angular Training'
  },
  'microsoft-azure-sql-solution-training': {
    slug: 'microsoft-azure-sql-solution-training',
    title: 'Microsoft Azure SQL Solution Training',
    category: 'Database',
    heroDescription:
      'A comprehensive, structured training programme that takes you from relational database fundamentals all the way to designing, deploying, securing, and optimising enterprise-grade SQL solutions on Microsoft Azure, aligned to the DP-300 (Administering Relational Databases on Microsoft Azure) certification. Duration: 25-40 Hours. Exam: DP-300. Mode: Live Online / 1-to-1 / Corporate.',
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
      'A comprehensive, structured training programme that takes you from foundational GRC concepts to designing, implementing, and managing enterprise-grade Governance, Risk, and Compliance frameworks. You will cover global standards, regulatory requirements, risk management methodologies, and audit practices across IT and business environments.',
    heroBannerImage: '/course-banners/grc-training.png',
    callToAction: 'Request Callback',
    highlights: [
      'CRISC, CISA, CGRC (ISC2), ISO 27001 aligned preparation',
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
        'CRISC, CISA, CGRC (ISC2), and ISO 27001 Lead Implementer preparation',
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
      { title: '27. Certification Preparation & Enterprise Capstone Project', topics: ['Mock examinations for CRISC, CISA, CGRC (ISC2), and ISO 27001 Lead Implementer', 'Exam strategy per certification', 'Enterprise capstone: end-to-end GRC programme design for a simulated multi-jurisdiction organisation'] }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Live 1-to-1 mentoring with guided GRC case study sessions.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live instructor-led sessions with practical governance, risk, and audit exercises.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized enterprise GRC training for risk, audit, and compliance teams.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Multi-Certification Readiness', icon: 'cert', description: 'Preparation for CRISC, CISA, CGRC (ISC2), and ISO 27001 Lead Implementer paths.' },
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
        answer: 'CRISC, CISA, CGRC (ISC2), and ISO 27001 Lead Implementer. Eligibility requirements are covered in the certification preparation module.'
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
      'A comprehensive, structured training programme that takes you from foundational cybersecurity and information security concepts to mastering all eight CISSP domains. It equips you with the knowledge, depth, and strategic mindset required to pass the ISC2 CISSP examination and operate as a senior security professional.',
    heroBannerImage: '/course-banners/cissp-training.png',
    callToAction: 'Request Callback',
    highlights: [
      'All eight CISSP domains covered end-to-end',
      'ISC2 CISSP CAT exam strategy and mindset',
      'Scenario-based exercises with domain practice focus',
      'Security governance, risk, and compliance foundation',
      'Security operations, assessment, and testing mastery',
      'Secure software development security (Domain 8)',
      'Cross-domain integration for enterprise security leadership',
      'Full mock examinations and exam-day preparation'
    ],
    description: {
      whyChooseTitle: 'Why choose CISSP Training (ISC2) from InsureTech Skills?',
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
        'Note: ISC2 requires experience for certification, but this programme prepares you for the CISSP examination'
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
      { title: '8. Introduction to the CISSP Certification & CBK', topics: ['ISC2 CISSP overview', 'CISSP eligibility and endorsement process concepts', 'Eight CISSP domains', 'CAT exam format and passing concepts', 'Study strategy overview'] },
      { title: '9. Domain 1 — Security & Risk Management (Part 1)', topics: ['Security governance principles', 'Legal and regulatory requirements examples', 'ISC2 Code of Ethics', 'Security policies and procedures', 'Business continuity planning concepts'] },
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
        question: 'What is the ISC2 experience requirement for CISSP?',
        answer: 'ISC2 requires at least five years of cumulative paid work experience in two or more CISSP domains for certification. You can still take the exam and, upon passing, become an Associate until the experience requirement is fulfilled.'
      },
      {
        question: 'How is the CISSP exam structured?',
        answer: 'CISSP uses Computerised Adaptive Testing (CAT). The exam presents between 125 and 175 questions over four hours, with question difficulty adapting to your responses. It includes scenario-based questions requiring higher-order thinking.'
      },
      {
        question: 'Is the CISSP exam fee included in the course fee?',
        answer: 'No. The official ISC2 CISSP examination fee is paid separately via the Pearson VUE portal at the time of scheduling.'
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
      'A comprehensive, structured training programme that takes you from Python and mathematics fundamentals to designing, training, deploying, and monitoring machine learning solutions using Azure Machine Learning, fully aligned to Microsoft DP-100 (Designing and Implementing a Data Science Solution on Azure).',
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
      { title: '17. Natural Language Processing (NLP)', topics: ['Tokenisation, stopword removal, stemming/lemmatisation', 'TF-IDF and embeddings (Word2Vec/GloVe)', 'Sentiment analysis and text classification'] },
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
      'A comprehensive, hands-on training programme that helps you design, deploy, and manage enterprise-grade cloud architecture on Google Cloud. Learn architecture patterns, reliability and scalability practices, security and IAM foundations, networking, data services, and cost/performance optimisation — aligned to the Google Professional Cloud Architect certification objectives.',
    heroBannerImage: '/course-banners/google-professional-cloud-architect.png',
    callToAction: 'Request Callback',
    highlights: [
      'Hands-on GCP architecture labs',
      'Cloud design patterns for production systems',
      'Reliability, security, and scalability focus',
      'Networking, IAM, and data architecture coverage',
      'Cost management and performance optimisation',
      'Exam preparation and architecture capstone project'
    ],
    description: {
      whyChooseTitle: 'Why choose Google Professional Cloud Architect Training from InsureTech Skills?',
      overview:
        'This programme provides structured, real-world training across the key areas required to architect solutions on Google Cloud. You will learn how to design secure, reliable, scalable, and cost-efficient architectures using core GCP services and cloud-native patterns. Each module is reinforced with practical labs and scenario-based exercises that reflect how cloud architects work in enterprises.',
      whyChoose:
        'Instead of focusing on isolated features, you build end-to-end architecture skills. You will practice designing reference architectures, applying best practices for reliability and security, and validating trade-offs in performance and cost. The curriculum also includes exam preparation support and a capstone architecture project to strengthen job-ready confidence.',
      keyFeatures: [
        'Architecture-first learning approach',
        'Real-world labs and scenario exercises',
        'Reliability, security, and IAM best practices',
        'Networking design and hybrid connectivity concepts',
        'Data architecture patterns and operational readiness',
        'Exam preparation and capstone project'
      ],
      whatYouWillLearn: [
        'Design cloud architecture on Google Cloud: reference patterns and trade-offs',
        'Plan compute solutions using autoscaling and load balancing',
        'Build storage and data architecture using core GCP services',
        'Design VPC networking, routing, DNS, and secure connectivity patterns',
        'Implement identity and access with IAM and service accounts',
        'Apply reliability practices (SRE concepts), monitoring, and incident readiness',
        'Use security and compliance approaches including encryption and key management',
        'Govern cloud resources using organisation policies and governance guardrails',
        'Optimise cost and performance with budgeting, right-sizing, and workload strategies',
        'Prepare for certification with mock exam practice and architecture reviews',
        'Deliver a capstone project: an enterprise-grade architecture design'
      ],
      prerequisites: [
        'Basic understanding of cloud computing and networking concepts',
        'Comfort with the command line is helpful but not mandatory',
        'No prior Google Cloud experience required; concepts are taught from fundamentals'
      ],
      whoCanJoin: [
        'Cloud architects and solution architects designing on Google Cloud',
        'Cloud engineers and platform engineers working on enterprise GCP environments',
        'DevOps engineers aiming to strengthen architecture and reliability expertise',
        'Security and compliance professionals building cloud architecture governance skills',
        'IT professionals and career changers preparing for cloud architect roles'
      ],
      distinctness:
        'You graduate with architecture-ready skills: you can design, secure, and operate production workloads on Google Cloud while making informed decisions across reliability, security, performance, and cost. The capstone project demonstrates practical readiness for real enterprise scenarios.'
    },
    modules: [
      {
        title: '1. Introduction to Cloud Architecture on Google Cloud',
        topics: ['Cloud architecture principles', 'Key GCP services overview', 'Architecture design workflow and reference patterns']
      },
      {
        title: '2. Compute Architecture & Autoscaling',
        topics: ['Compute options and selection', 'Autoscaling strategies', 'Load balancing patterns and traffic management']
      },
      {
        title: '3. Storage & Data Architecture',
        topics: ['Storage service selection', 'Data lifecycle and organisation', 'Data architecture patterns and integration points']
      },
      {
        title: '4. Networking & Connectivity',
        topics: ['VPC, subnets, and routing', 'DNS and traffic routing concepts', 'Secure connectivity patterns and hybrid scenarios']
      },
      {
        title: '5. Identity, Access, and IAM',
        topics: ['IAM model and role strategy', 'Service accounts and workload identity concepts', 'Access governance and least privilege']
      },
      {
        title: '6. Reliability, Monitoring, and Operations',
        topics: ['Reliability concepts and SRE practices', 'Monitoring and alerting readiness', 'Logging and operational workflows']
      },
      {
        title: '7. Security & Governance in GCP',
        topics: ['Security architecture foundations', 'Encryption and key management concepts', 'Organisation policies and governance guardrails']
      },
      {
        title: '8. Cost & Performance Optimisation',
        topics: ['Cost management strategies', 'Right-sizing and workload tuning', 'Performance considerations and optimisation approaches']
      },
      {
        title: '9. Solution Review Scenarios & Architecture Pattern Practice',
        topics: ['Scenario-based architecture reviews', 'Trade-off analysis', 'Applying best practices across domains']
      },
      {
        title: '10. Exam Preparation & Architecture Capstone Project',
        topics: ['Certification exam preparation and mock exams', 'Domain-wise review strategy', 'Capstone: design an enterprise-grade cloud architecture']
      }
    ],
    learningModes: [
      { title: '1-TO-1 TRAINING', icon: '👥', description: 'Dedicated mentor support with guided architecture labs.', buttonText: 'GET STARTED' },
      { title: 'ONLINE TRAINING', icon: '💻', description: 'Live instructor-led batches with practical GCP architecture exercises.', buttonText: 'ENROLL NOW' },
      { title: 'CORPORATE TRAINING', icon: '🏢', description: 'Customized corporate training for teams designing solutions on GCP.', buttonText: 'CONTACT US' }
    ],
    benefits: [
      { title: 'Architecture-Ready Skills', icon: 'arch', description: 'Design secure and reliable cloud architectures with confidence.' },
      { title: 'Production-Grade Mindset', icon: 'prod', description: 'Reliability, operations, and governance practices for enterprise readiness.' },
      { title: 'Security and IAM Focus', icon: 'sec', description: 'Least privilege access design and security foundations.' },
      { title: 'Networking & Data Design', icon: 'net', description: 'Networking, connectivity, and data architecture patterns.' },
      { title: 'Cost and Performance Optimisation', icon: 'cost', description: 'Practical strategies for efficient cloud operations.' },
      { title: 'Capstone Project', icon: 'cap', description: 'Deliver an architecture capstone to showcase your readiness.' }
    ],
    faqs: [
      {
        question: 'Do I need prior Google Cloud experience to join?',
        answer: 'No. Basic cloud and networking understanding is helpful, but the programme starts with fundamentals and teaches Google Cloud concepts from the ground up.'
      },
      {
        question: 'Is this course aligned to the Google Professional Cloud Architect exam?',
        answer: 'Yes. The curriculum focuses on the areas expected from cloud architects, and includes exam preparation support and architecture scenario practice.'
      },
      {
        question: 'Will I work on real architecture scenarios?',
        answer: 'Yes. You will complete scenario-based exercises and a capstone project to design an enterprise-grade architecture.'
      },
      {
        question: 'Is corporate training available?',
        answer: 'Yes. We offer customized corporate training programmes tailored to your teams and cloud architecture goals.'
      }
    ],
    duration: '35-45 Hours',
    mode: 'Online',
    icon: 'gcp',
    heroSubtitle: 'Google Professional Cloud Architect'
  }
};

export function getCourseBySlug(slug) {
  return courses[slug] || null;
}

export function getAllCourseSlugs() {
  return Object.keys(courses);
}

export function getAllCourses() {
  return Object.values(courses);
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
  'Tableau Certified Data Analyst Training',
  'Java Training',
  'Angular Training',
];

export function getAllEnrollableCourses() {
  const fromCourses = Object.values(courses).map((c) => ({ slug: c.slug, title: c.title }));
  const existingTitles = new Set(fromCourses.map((c) => c.title));
  const additional = ADDITIONAL_ENROLLABLE_COURSES.filter((t) => !existingTitles.has(t)).map((title) => ({
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    title,
  }));
  return [...fromCourses, ...additional];
}

/** Display titles used in nav/dropdown that differ from course.title (nav title -> slug). */
const TITLE_ALIASES = {
  'Multi-Cloud Security (AWS, Azure & Google)': 'multi-cloud-security-aws-azure-google',
  'Leading SAFe® 6.0 Agilist Certification Training': 'leading-safe-agilist-certification-training',
  'Leading SAFe 6.0 Agilist Certification Training': 'leading-safe-agilist-certification-training',
  // Header dropdown uses "Cybersecurity Analyst Training" (no space) while the course title is
  // "Cyber Security Analyst Training" – map this nav label to the correct course slug.
  'Cybersecurity Analyst Training': 'cyber-security-analyst-training',
  // Database category uses a shorter nav label that should point to the full Azure Data Fundamentals course.
  'Azure Data Fundamentals': 'microsoft-azure-data-fundamental-training',
  // Big Data category label omits the DP-600 suffix.
  'Microsoft Fabric Analytics Engineer Associate': 'microsoft-fabric-analytics-engineer-associate-dp-600',
  // Database category label includes the certification name; our course page uses the Azure SQL Solution title.
  'Microsoft DP-300 – Azure Database Administrator Associate': 'microsoft-azure-sql-solution-training',
};

/** Get course slug by exact title (for nav links to course detail page). */
export function getSlugByTitle(title) {
  if (!title) return null;
  const slugFromAlias = TITLE_ALIASES[title];
  if (slugFromAlias && courses[slugFromAlias]) return slugFromAlias;
  const entry = Object.entries(courses).find(([, c]) => c.title === title);
  return entry ? entry[0] : null;
}
