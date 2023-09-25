// routes/index.js

var express = require('express');
var router = express.Router();

// Sample data: id, terms descriptions, and references
var termsData = [
  { id: 1,
    term: 'Microservice', 
    description: 'Microservices refer to compact programs that possess a singular task and may be independently deployed, scaled, and tested.' , 
    references: 'Unlu, Huseyin & Kılınç Soylu, Görkem & Ahmad, Isra & Demirors, Onur. (2023). [Supplementary Material] Size Measurement and Effort Estimation in Microservice- based Projects: Results from Pakistan. '
  },
  {id: 2,
    term: 'Distributed application',
    description:'A distributed system refers to an application that employs a series of protocols to effectively manage the activities of various processes inside a communication network. The objective is to ensure that all components collaborate harmoniously in order to accomplish a singular or limited set of interconnected tasks.',
    references: 'THAMPI, S.M. (no date) Introduction to distributed systems - arxiv.org. Available at: https://arxiv.org/pdf/0911.4395.pdf (Accessed: 24 August 2023).'
  },
  {
    id: 3,
    term:'Orchestration',
    description:'It is the automated management of our services refers to the utilization of automated systems and processes to oversee and control the many aspects of our service offerings. Orchestration refers to the process through which Kubernetes facilitates the deployment and management of services.',
    references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023).',
  },
  {
    id: 4,
    term:'Kubernetes',
    description:'Kubernetes, often referred to as K8s, is a freely available software system designed to automate the process of deploying, scaling, and managing applications that are encapsulated within containers.',
    references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023).',
  },
  {
    id: 5,
    term: 'monolith systems',
    description: 'A monolithic architecture refers to a unified and extensive computing network that incorporates all business concerns by utilizing a single code base.',
    references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023). ',
  },
  {
    id: 6,
    term:'cloud technology',
    description:'Cloud computing, or the cloud, has changed how we store and exchange data. It has expanded the internet beyond physical devices and helped us share.',
    references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023). ',
  },
  {
    id: 7,
    term: 'virtualization',
    description:'Virtualization allows for the partitioning of the physical resources of a solitary computer into numerous virtual computers, commonly referred to as virtual machines (VMs).',
    references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023). ',
  },
  {
    id: 8,
    term: 'cost-effective',
    description:'One reason for this is that, in addition to its scalability benefits, a microservices-based platform generally incurs lower operational costs compared to its monolithic counterpart. This is mostly due to the payment structure, where owners are only charged when a request is made to execute a specific function as a service. ',
    references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023). ',
  }  ,
  {
    id:9,
    term: 'prototype',
    description:'A prototype refers to a basic functioning model of a product or information system, typically constructed for the purpose of demonstration or as an integral component of the developmental phase.',
    references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023). ',
  }  ,
  {
    id: 10,
    term: 'cloud vendor',
    description: 'A cloud service provider (CSP) refers to an information technology (IT) organization that offers internet-based, scalable computing resources such as processing power, data storage, and applications on a flexible, as-needed basis.',
    references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023). ',
  },
  {
  id: 11,
  term: 'Docker',
  description: 'service packaging and deployment system',
  references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023). ',
}
,
{
  id: 12,
  term: 'Docker Compose',
  description: 'used our development station to test our microservices application',
  references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023). ',
}
,
{
  id: 13,
  term: 'Terraform',
  description: 'To build our cloud infrastructure, our Kubernetes cluster, and to launch our application.',
  references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023). ',
}
,
{
  id: 14,
  term: 'loosely coupled',
  description: 'The concept of loose coupling refers to a state in which there is low interdependence and information sharing across services, hence promoting strong cohesiveness.',
  references:'Ashley, D. (2021) Books - proquest. Available at: https://about.proquest.com/en/content-solutions/books/ (Accessed: 24 August 2023). ',
}
,
{
  id: 15,
  term: 'domain driven design',
  description: 'Domain-Driven Design (DDD) is a software development approach that places emphasis on the construction of a domain model, which possesses a comprehensive comprehension of the procedures and regulations inside a given domain.',
  references:'Evans, E. and Fowler, M. (2019) Domain-driven design tackling complexity in the heart of software. Upper Saddle River, NJ: Addison-Wesley.',
}
,
{
  id: 16,
  term: 'distributed computing',
  description: 'Distributed computing is a term used to describe the practice of connecting multiple computers in a network to collaboratively perform computing tasks. The primary aim of distributed computing is to distribute and allocate tasks among several computer systems.  ',
  references:'Khan, Rafiqul Zaman. (2015). Distributed Computing: An Overview. Int. J. Advanced Networking and Applications. 07. 2630-2635.',
}
,
{
  id: 17,
  term: 'load balancer',
  description: 'A load balancer refers to a specialized device or server that functions as an intermediary between clients and service instances, effectively distributing requests based on a predetermined algorithm.',
  references:'Wang, Hao & Wang, Yong & Liang, Guanying & Gao, Yunfan & Gao, Weijian & Zhang, Wenping. (2021). Research on load balancing technology for microservice architecture. MATEC Web of Conferences. 336. 08002. 10.1051/matecconf/202133608002.',
}
,
{
  id: 18,
  term: 'spaghetti code',
  description: 'The term "spaghetti code" is a derogatory phrase commonly used in the field of information technology. It arises due to various factors such as an unclear project scope, insufficient experience and planning, an inability to adhere to programming style guidelines, and a cumulative effect of seemingly minor errors that gradually degrade the efficiency of the code over time.',
  references:'Meerbaum-Salant, O. (2022) Spaghetti for the main course? observations on naturalness of scenario-based programming, Proceedings of the 17th ACM annual conference on Innovation and technology in computer science education. Available at: https://www.academia.edu/69919858/Spaghetti_for_the_Main_Course_Observations_on_Naturalness_of_Scenario_Based_Programming (Accessed: 24 August 2023). ',
}
,
{
  id: 19,
  term: 'ubiquitous',
  description: 'Ubiquitous computing, alternatively referred to as "pervasive computing," encompasses the integration of computing capabilities into commonplace things and settings within the realm of computer science and technology. This integration facilitates smooth interaction and communication among these objects, as well as between these objects and individuals. The objective of ubiquitous computing is to establish an environment in which computer is seamlessly incorporated into our surroundings, rendering it inconspicuous and facilitating uninterrupted and nonintrusive access to information and services.',
  references:'Weiser, M. (1991). The Computer for the 21st Century. Scientific American, 265(3), 94-104.',
}
,
{
  id: 20,
  term: 'fault-tolerant',
  description: 'Fault tolerance refers to the capacity of a system to effectively manage and withstand breakdowns without experiencing a total collapse.',
  references:'Bala, Anju & Chana, Inderveer. (2012). Fault Tolerance-Challenges, Techniques and Implementation in Cloud Computing. International Journal of Computer Science Issues. 9. ',
}
,
  {
    id: 21,
    term: 'Azure Kubernetes Service (AKS)',
    description: 'Managed Kubernetes container orchestration service provided by Azure.',
    references:'Managed kubernetes service (AKS): Microsoft azure (no date) Managed Kubernetes Service (AKS) | Microsoft Azure. Available at: https://azure.microsoft.com/en-us/products/kubernetes-service/ (Accessed: 10 September 2023). ',
  },
  {
    id: 22,
    term: 'Azure DevOps',
    description: 'A set of development tools and services for software development, including CI/CD (Continuous Integration/Continuous Deployment) pipelines.',
    references:'Azure Devops Services: Microsoft Azure (no date) Services | Microsoft Azure. Available at: https://azure.microsoft.com/en-us/products/devops/ (Accessed: 10 September 2023). ',
  },
  {
    id: 23,
    term: 'Azure Functions',
    description: 'Serverless compute service in Azure that allows you to run event-driven code without managing infrastructure.',
    references:'Azure functions – serverless functions in computing: Microsoft Azure (no date) – Serverless Functions in Computing | Microsoft Azure. Available at: https://azure.microsoft.com/en-us/products/functions/ (Accessed: 10 September 2023). ',
  },
  {
    id: 24,
    term: 'Docker Volume',
    description: ' A way to manage data persistence in Docker containers by creating a mountable storage volume.',
    references:'Volumes (2023) Docker Documentation. Available at: https://docs.docker.com/storage/volumes/ (Accessed: 10 September 2023). ',
  },
  {
    id: 25,
    term: 'Dockerfile',
    description: 'A script used to create a Docker image. It specifies the base image, application code, dependencies, and configuration. ',
    references:'Dockerfile reference (2023) Docker Documentation. Available at: https://docs.docker.com/engine/reference/builder/ (Accessed: 10 September 2023). ',
  },
  {
    id: 26,
    term: 'Docker Registry',
    description: 'A repository for storing and distributing Docker images, such as Docker Hub or Azure Container Registry. ',
    references:'Docker Registry (2023) Docker Documentation. Available at: https://docs.docker.com/registry/ (Accessed: 10 September 2023). ',
  },
  {
    id: 27,
    term: 'Azure Logic Apps',
    description: 'Service for creating workflows and automating tasks using a visual designer.',
    references:'Logic App Service – ipaas: Microsoft azure (no date) Logic App Service – IPaaS | Microsoft Azure. Available at: https://azure.microsoft.com/en-us/products/logic-apps/ (Accessed: 10 September 2023). ',
  },
  {
    id: 28,
    term: 'Azure Virtual Machines (VMs)',
    description: ' On-demand scalable virtual machines in the Azure cloud, allowing you to run various operating systems and applications.',
    references:'Virtual Machines (VMS) for linux and windows: Microsoft azure (no date) (VMs) for Linux and Windows | Microsoft Azure. Available at: https://azure.microsoft.com/en-us/products/virtual-machines/ (Accessed: 10 September 2023). ',
  },
  {
    id: 29,
    term: 'Docker Compose',
    description: 'Tool for defining and running multi-container Docker applications using a single configuration file',
    references:'Docker compose Overview (2023) Docker Documentation. Available at: https://docs.docker.com/compose/ (Accessed: 10 September 2023). ',
  },
  {
    id: 30,
    term: ' Docker Swarm',
    description: 'A native clustering and orchestration solution for Docker, used to manage a cluster of Docker nodes',
    references:'Swarm mode overview (2023) Docker Documentation. Available at: https://docs.docker.com/engine/swarm/ (Accessed: 10 September 2023).',
  },
  ,
  {
    id: 31,
    term: ' Azure Virtual Machine (VM)',
    description: 'An Azure Virtual Machine (VM) is a scalable and flexible computing resource in Microsoft Azure, providing on-demand virtualized hardware for running applications.',
    references:'Microsoft Azure. (2023). Virtual Machines. Retrieved from https://azure.microsoft.com/en-us/services/virtual-machines/',
  }
  ,
  {
    id: 32,
    term: 'Kubernetes Namespace',
    description: 'A Kubernetes Namespace is a logical partition within a Kubernetes cluster that provides scope and isolation for resources and objects.',
    references:' Kubernetes. (2023). Namespaces. Retrieved from https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/',
  }
  ,
  {
    id: 33,
    term: 'Terraform State File',
    description: 'The Terraform State File is a JSON file that stores the current state of the managed infrastructure, allowing Terraform to plan and apply changes incrementally.',
    references:'HashiCorp. (2023). State. Retrieved from https://www.terraform.io/docs/state/index.html',
  },
  {
    id: 34,
    term: 'Cloud-Native Architecture',
    description: 'Cloud-Native Architecture is an approach to software development that leverages cloud computing principles, emphasizing microservices, containerization, and scalability.',
    references:'The New Stack. (2023). What is Cloud-Native? Retrieved from https://thenewstack.io/what-is-cloud-native/',
  }
  ,
  {
    id: 35,
    term: 'Azure App Service',
    description: 'Azure App Service is a fully managed platform for building, deploying, and scaling web apps, mobile apps, and API apps using various programming languages.',
    references:'Microsoft Azure. (2023). App Service. Retrieved from https://azure.microsoft.com/en-us/services/app-service/',
  }
  ,
  {
    id: 36,
    term: 'Kubernetes Pod',
    description: 'A Kubernetes Pod is the smallest deployable unit in Kubernetes, representing a single instance of a running process in a cluster.',
    references:'Kubernetes. (2023). Pods. Retrieved from https://kubernetes.io/docs/concepts/workloads/pods/',
  }
  ,
  {
    id: 37,
    term: 'Terraform Provider',
    description: 'A Terraform Provider is an extension used to interact with specific services or resource types in various cloud providers, allowing Terraform to manage those resources.',
    references:' HashiCorp. (2023). Providers. Retrieved from https://www.terraform.io/docs/language/providers/index.html',
  }
  ,
  {
    id: 38,
    term: 'Cloud Computing Service Models',
    description: 'Cloud Computing Service Models refer to the various ways cloud services are delivered, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).',
    references:'TechTarget. (2023). Cloud service models. Retrieved from https://searchcloudcomputing.techtarget.com/definition/Cloud-service-models',
  }
  ,
  {
    id: 39,
    term: 'Azure Resource Group',
    description: 'An Azure Resource Group is a logical container for Azure resources, used to manage and organize related resources.',
    references:'Microsoft Azure. (2023). Resource Groups. Retrieved from https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview',
  }
  ,
  {
    id: 40,
    term: 'Kubernetes Horizontal Pod Autoscaler (HPA)',
    description: 'A Kubernetes Horizontal Pod Autoscaler (HPA) is a resource that automatically adjusts the number of pods in a deployment or replica set based on resource utilization or custom metrics.',
    references:' Kubernetes. (2023). Horizontal Pod Autoscaler. Retrieved from https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/',
  }
  ,
  {
    id: 41,
    term: 'Serverless Computing',
    description: 'Serverless Computing is a cloud computing model where the cloud provider manages the infrastructure, allowing developers to focus solely on writing code for their applications. It eliminates the need to provision or manage servers manually.',
    references: 'Microsoft Azure. (2023). Serverless computing. Retrieved from https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-serverless-computing/'
  },
  {
    id: 42,
    term: 'Serverless Function',
    description: 'A Serverless Function, often referred to as a function-as-a-service (FaaS), is a small, single-purpose piece of code that is executed in response to an event trigger. It is a fundamental component of serverless computing architectures.',
    references: 'AWS. (2023). AWS Lambda. Retrieved from https://aws.amazon.com/lambda/'
  },
  {
    id: 43,
    term: 'Continuous Monitoring',
    description: 'Continuous Monitoring is a practice of regularly and automatically observing and assessing the health, performance, and security of systems and applications. It helps detect issues and vulnerabilities in real-time.',
    references: 'NIST. (2023). Continuous Monitoring. Retrieved from https://csrc.nist.gov/guidance/ssp/800-137'
  },
  {
    id: 44,
    term: 'Natural Language Processing (NLP)',
    description: 'Natural Language Processing (NLP) is a subfield of artificial intelligence (AI) that focuses on the interaction between computers and human language. It involves the development of algorithms and models for understanding and processing human language.',
    references: 'Jurafsky, D., & Martin, J. H. (2020). Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics, and Speech Recognition. Pearson.'
  },
  {
    id: 45,
    term: 'Container Registry',
    description: 'A Container Registry is a storage system that hosts and manages Docker containers and related artifacts. It provides a centralized location for storing, sharing, and distributing container images.',
    references: 'Docker. (2023). Docker Container Registry. Retrieved from https://docs.docker.com/samples/container_registry/'
  },
  {
    id: 46,
    term: 'Containerization',
    description: 'Containerization is a lightweight form of virtualization that allows applications and their dependencies to be packaged into containers. Containers provide consistency and isolation, making it easier to deploy and run applications across different environments.',
    references: 'Red Hat. (2023). What Is Containerization? Retrieved from https://www.redhat.com/en/topics/cloud-native-apps/what-is-containerization'
  },
  {
    id: 47,
    term: 'Artificial Intelligence (AI)',
    description: 'Artificial Intelligence (AI) is a branch of computer science that focuses on creating systems and machines capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, and natural language understanding.',
    references: 'Russell, S. J., & Norvig, P. (2021). Artificial Intelligence: A Modern Approach. Pearson.'
  },
  {
    id: 48,
    term: 'Machine Learning Model',
    description: 'A Machine Learning Model is a mathematical representation of a real-world process or system. It is created through the training of machine learning algorithms and can be used for making predictions or classifications based on new data.',
    references: 'Géron, A. (2019). Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow. O`Reilly Media.'
  },
  {
    id: 49,
    term: 'Cloud Native',
    description: 'Cloud Native refers to an approach in software development that leverages cloud computing services and technologies to build and deploy applications. Cloud-native applications are designed to be scalable, resilient, and highly adaptable to cloud environments.',
    references: 'Pivotal. (2023). What is Cloud Native? Retrieved from https://www.vmware.com/cloud-native-apps/what-is-cloud-native.html'
  },
  {
    id: 50,
    term: 'Continuous Integration/Continuous Deployment (CI/CD)',
    description: 'Continuous Integration (CI) and Continuous Deployment (CD) are software development practices that involve automating the building, testing, and deployment of code changes. CI/CD pipelines help teams deliver software updates quickly and reliably.',
    references: 'Fowler, M. (2006). Continuous Integration. Retrieved from https://martinfowler.com/articles/continuousIntegration.html'
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 DevOpsGlossary', 
    subtitle: 'Welcome to the website that showcases microservices and provides explanations for new terms', 
    terms: termsData });
});

module.exports = router;
