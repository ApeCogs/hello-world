# Build Automation

**Build automation**: automation of the process of preparing code for deployement to a live environmemnt

* Depends on language code may need to be:
    * compiled
    * linted (Linting is the process of checking the source code for Programmatic as well as Stylistic errors)
    * minified (Minification refers to the process of removing unnecessary or redundant data without affecting how the resource is processed)
    * transformed
    * unit tested
    (etc...)
* Achived using scripts, configuration files or tools
* This is independant of IDE
* Should be agnostic of the configuration of the machine it is being built on

**WHY DO BUILD AUTOMATION**

* Fast
* Consistent
* Reapeatable
* Portable

# Continuous Integration

**CI**: the practice of frequently merging code changes done by developpers

Commit -> Build -> Test -> Notify

**WHY DO CI**

* Early Detection
* Eliminates the scramble ot integrate
* Frequent Releases
* Continuous Testing
* Encourages good coding practices

# Continuous Delivery

**Continuous Delivery (CD)**: the practice of continously maintaing code in a deployable state
**Continous Deployement**: the practice of frequently deploying small code changes to production

**WHY DO CI/CD**

* Faster time-to-market
* Fewer problems caused by the deployement
* Lower risk
* Reliable rollbacks
* Fearless Deployements

# Infrastructure as Code

**Infrastructure as code (IaC)**: manage and provision infrastrucuture through code and automation

Need a change: change code/configuration -> commit to source control -> automated deployement

**Why do IaC**

* Consistency
* Reusability
* Scalability
* Self-documenting
* Simplify Complexity

# Configuration Management

**Configuration Management**: maintaining and changing the state of pieces of infrastructure in a consistent, maintanable and stable way

==> Avoid **configuration drift**

# Orchestration

**Orchestration**: automation that supports processes and workflows, such as provisioning ressources

**Why do Orchestration**

* scalability
* stability
* save time
* self-service
* granular insight into resource usage

# Monitoring

**Monitoring**: The collection and presentation of data about the performance and stability of services and infrastructure

* Real-time notifications
* Postmortem analysis

**Why do monitoring**

* Fast recovery
* Better root cause analysis
* Visbility across teams
* Automated response

# Microservices

**Microservices**: a microservice architecture breaks an application up into a collection of small loosely-coupled services

**SMALL**: implements only a small piece of an applications overall functionality
**Loosely coupled**: interact with each other using stable and well-defined APIs. (Indepedant of one another)

**Why use microservices**

* Modularity
* Technological flexbility
* Optimized scalability

# Tools

The Periodic Table of DevOps Tools: https://xebialabs.com/periodic-table-of-devops-tools/

## Build Automation

* Java: ant, maven, gradle
* Javascript: npm, grunt, gulp
* Linux: make


## Continuous Integration

* Jenkins 
    * Opensource fork of Hudson (Oracle)
    * Java servlet-based
* TravisCI
    * Opensource
    * Built around GitHub Integration
    * Exectures builds in clean VMs
* Bamboo
    * Enterprise product by Atlassian
    * Good out of the box integration with other Atlassian products (JIRA, Confluence)

## Configuration Management

* Ansible
    * Opensource
    * Declarative configuration (describe the state you want to be in)
    * YAML config files
    * No control server needed (Ansible Tower can be used as control server if needed)
    * No agents needed: just python + ssh
* Puppet
    * Declarative Configuration
    * Manage state through a UI
    * Custom modules use Puppet DSL
    * Pushes changes to clients using a control server and agents insalled on clients
* Chef
    * Procedural configuration
    * Agent/Server
    * Uses Chef domain specific language
* Salt
    * Declarative configurations
    * Agents(minions)/server(master) - but now can support agentless
    * YAML config
    * Support for event-driven automation

## Virtualization and containerization

* Hypervisors: ESXI, Hyper-V, Xenserver
* Containers: Docker

## Monitoring

Infrastructure monitoring vs Application Performance Monitoring (APM)

* SenSu
    * Designed as a moderm replacement for Nagios
    * Server/agent
    * Agents push data to an AMQP broker
* NewRelic
    * SaaS + agent
    * Wide variety of metrics (also does APM)
* AppDynamics
    * Code-level diagnostics - able to identify performance issues at the code leve
    * Server/Agent

Aggregation & Analytics

* ELK. Can add on Beats Agent for monitoring as well

## Tools for Orchestration

* Scale up and scale down applications on request
* autoscale application based on usage

* Docker Swarm
    * Docker-native
    * Orchestration for docker containers
* Kubernetes
    * Opensource
    * Orchestration server
    * Manage containerized apps accorss multiple hosts
* Zookeeper
    * From Apache
    * Can work alongside kubernetes
    * Offers centralized service registry
* Terraform
    * combines orchestration and infrastructure-as-code
    * works well with other tools (like Ansible)
    * Workes well with AWS
    * Integrates with Kubernetess