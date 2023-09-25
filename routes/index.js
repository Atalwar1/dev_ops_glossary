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
];

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 DevOpsGlossary', 
    subtitle: 'Welcome to the website that showcases microservices and provides explanations for new terms', 
    terms: termsData });
});

module.exports = router;
