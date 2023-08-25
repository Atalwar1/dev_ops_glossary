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
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 DevOpsGlossary', 
    subtitle: 'Welcome to the website that showcases microservices and provides explanations for new terms', 
    terms: termsData });
});

module.exports = router;
