/*
    netacad-automation
    Copyright (C) 2026 Saurabh Kumar Yadav

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const RAW_DB = {};

const QUIZ_DB = {
    'module-1': [
        {
            question: "Which of the following methods is used to check the integrity of data?",
            answers: [
                "Hashes or checksums",
            ],
        },
        {
            question: "Which of the following statements describes cyberwarfare?",
            answers: [
                "Cyberwarfare is an Internet-based conflict that involves the penetration of information systems of other nations",
            ],
        },
        {
            question: "Which of the following methods can be used to ensure confidentiality of information? (Choose three correct answers)",
            answers: [
                "Data encryption",
                "Two-factor authentication",
                "Username ID and password",
            ],
        },
        {
            question: "Which of the following pieces of information would be classified as personal data? (Select three correct answers)",
            answers: [
                "Social security number",
                "Driver license number",
                "Date and place of birth",
            ],
        },
        {
            question: "Why might internal security threats cause greater damage to an organization than external security threats?",
            answers: [
                "Internal users have direct access to the infrastructure devices",
            ],
        },
        {
            question: "Which of the following is a key motivation of a white hat attacker?",
            answers: [
                "Discovering weaknesses of networks and systems to improve the security level of these systems",
            ],
        },
        {
            question: "An individual user profile on a social network site is an example of an ______ identity.",
            answers: [
                "Online",
            ],
        },
        {
            question: "Cybersecurity is the ongoing effort to protect individuals, organizations and governments from digital attacks by protecting networked systems and data from unauthorized use or harm. What level of cyber protection does each of the following factors require?",
            answers: [
            ],
        },
        {
            question: "Your neighbor tells you that they don’t have an online identity. They have no social media accounts and only use the Internet to browse. Is your neighbor right?",
            answers: [
                "No",
            ],
        },
        {
            question: "What are the foundational principles for protecting information systems as outlined in the McCumber Cube? (Choose three correct answers)",
            answers: [
                "Integrity",
                "Availability",
                "Confidentiality",
            ],
        },
        {
            question: "Can you identify why each of the following organizations might be interested in your online identity?",
            answers: [
                "Internet service providers: – They may be legally required to share your online information with government surveillance agencies or authorities",
                "Advertisers: – To monitor your online activities and send targeted ads your way",
                "Social media platforms: – To gather information based on your online activity, which is then shared with or sold to advertisers for a profit",
                "Websites: – To track your activities using cookies in order to provide a more personalized experience",
            ],
        },
        {
            question: "Can you identify the cyber attacker type from the following descriptions?",
            answers: [
                "Hacktivists",
                "State-sponsored attackers",
                "Script kiddies",
            ],
        },
        {
            question: "Stuxnet malware was designed for which primary purpose?",
            answers: [
                "To cause physical damage to equipment controlled by computers",
            ],
        },
    ],
    'module-2': [
        {
            question: "Which of the following examples illustrates how malware might be concealed?",
            answers: [
                "An email is sent to the employees of an organization with an attachment that looks like an antivirus update, but the attachment actually consists of spyware",
            ],
        },
        {
            question: "What is the purpose of a rootkit?",
            answers: [
                "To gain privileged access to a device while concealing itself",
            ],
        },
        {
            question: "What type of attack allows an attacker to use a brute-force approach?",
            answers: [
                "Password cracking",
            ],
        },
        {
            question: "What is the most common goal of search engine optimization (SEO) poisoning?",
            answers: [
                "To increase web traffic to malicious sites",
            ],
        },
        {
            question: "What do you call a program written to take advantage of a known security vulnerability?",
            answers: [
                "An exploit",
            ],
        },
        {
            question: "Which of the following security vulnerabilities could result in the receipt of malicious information that could force a program to behave in an unintended way?",
            answers: [
                "Non-validated input",
            ],
        },
        {
            question: "A set of changes done to any program or application with the aim of updating, fixing or improving it is often referred to as what?",
            answers: [
                "A patch",
            ],
        },
        {
            question: "Can you identify the software vulnerability from the following descriptions?",
            answers: [
                "Occurs when an ordered or timed set of processes is disrupted or altered by an exploit – Race condition",
                "Occurs through the improper use of practices that manage equipment, data or applications – Access control",
            ],
        },
        {
            question: "What is a miner?",
            answers: [
                "A person that solves complex mathematical puzzles to verify a transaction",
            ],
        },
        {
            question: "What is the primary goal of a DoS attack?",
            answers: [
                "To prevent the target server from being able to handle additional requests",
            ],
        },
        {
            question: "Which of the following should be carried out to address known software vulnerabilities of a specific application?",
            answers: [
                "Install a security patch",
            ],
        },
        {
            question: "Which of the following characteristics describe a worm? (Select two correct answers)",
            answers: [
                "Travels to new computers without any intervention or knowledge of the user",
                "Is self-replicating",
            ],
        },
        {
            question: "Who is responsible for overseeing a blockchain electronic ledger?",
            answers: [
                "Anyone belonging to the blockchain network",
            ],
        },
        {
            question: "‘Securing physical access to target equipment is an organization’s best defense against a cyber attack.’ Is this true or false?",
            answers: [
                "True",
            ],
        },
        {
            question: "Where is cryptocurrency stored?",
            answers: [
                "In a wallet",
            ],
        },
    ],
    'module-3': [
        {
            question: "You have stored your data on a local hard disk. Which method would secure this data from unauthorized access?",
            answers: [
                "Data encryption",
            ],
        },
        {
            question: "How can you keep your personal browsing history hidden from other users on a shared computer?",
            answers: [
                "Operate the web browser in private browser mode",
            ],
        },
        {
            question: "Which type of technology can prevent malicious software from monitoring user activities, collecting personal information and producing unwanted pop-up ads on a user computer?",
            answers: [
                "Antispyware",
            ],
        },
        {
            question: "Why do IoT devices pose a greater security risk than other computing devices on a network?",
            answers: [
                "Most IoT devices do not receive frequent software updates",
            ],
        },
        {
            question: "What should you do in order to make sure that people you live with do not have access to your secure data?",
            answers: [
                "Set up password protection",
            ],
        },
        {
            question: "Which of the following is an example of two factor authentication?",
            answers: [
                "Your fingerprint and your password",
            ],
        },
        {
            question: "You are looking to print photos that you have saved on a cloud storage account using a third-party online printing service. After successfully logging into the cloud account, you are automatically given access to the third-party online printing service. What allowed this automatic authentication to occur?",
            answers: [
                "The cloud storage service is an approved application for the online printing service",
            ],
        },
        {
            question: "You are having difficulty remembering passwords for all of your online accounts. What should you do?",
            answers: [
                "Save the passwords in a centralized password manager program",
            ],
        },
        {
            question: "Which of the following is a requirement of a strong password?",
            answers: [
                "Use special characters such as ! @ or $",
            ],
        },
        {
            question: "Which of the following passwords would most likely take the longest for an attacker to guess or break?",
            answers: [
                "mk$cittykat104#",
            ],
        },
        {
            question: "What is the best method to prevent Bluetooth from being exploited?",
            answers: [
                "Always disable Bluetooth when it is not being used",
            ],
        },
        {
            question: "How can you prevent others from eavesdropping on network traffic when operating a PC on a public Wi-Fi hotspot?",
            answers: [
                "Connect with a VPN service",
            ],
        },
        {
            question: "Which configuration on a wireless router is not considered to be adequate security for a wireless network?",
            answers: [
                "Preventing the broadcast of an SSID",
            ],
        },
        {
            question: "Which technology removes direct equipment and maintenance costs from the user for data backups?",
            answers: [
                "A cloud service",
            ],
        },
        {
            question: "What is the only way of ensuring that deleted files on your computer are irrecoverable?",
            answers: [
                "Physically destroying your computer’s hard drive",
            ],
        },
    ],
    'module-4': [
        {
            question: "What is the correct definition of risk management?",
            answers: [
                "The process of identifying and assessing risk to reduce the impact of threats and vulnerabilities",
            ],
        },
        {
            question: "Which of the following tools can be used to provide a list of open ports on network devices?",
            answers: [
                "Nmap",
            ],
        },
        {
            question: "Which of the following tools can perform real-time traffic and port analysis, and can also detect port scans, fingerprinting and buffer overflow attacks?",
            answers: [
                "Snort",
            ],
        },
        {
            question: "‘Today, there are single security appliances that will solve all the network security needs of an organization.’",
            answers: [
                "False",
            ],
        },
        {
            question: "What name is given to a device that controls or filters traffic going in or out of the network?",
            answers: [
                "Firewall",
            ],
        },
        {
            question: "What tool can identify malicious traffic by comparing packet contents to known attack signatures?",
            answers: [
                "IDS",
            ],
        },
        {
            question: "What protocol is used to collect information about traffic traversing a network?",
            answers: [
                "NetFlow",
            ],
        },
        {
            question: "Behavior-based analysis involves using baseline information to detect what?",
            answers: [
                "Anomalies",
            ],
        },
        {
            question: "What is the last stage of a pen test?",
            answers: [
                "Analysis and reporting",
            ],
        },
        {
            question: "‘With careful planning and consideration, some risks can be completely eliminated.’",
            answers: [
                "False",
            ],
        },
        {
            question: "What is a security playbook?",
            answers: [
                "A collection of repeatable queries or reports that outline a standardized process for incident detection and response",
            ],
        },
        {
            question: "What is the main aim of a Cyber Security Incident Response Team (CSIRT)?",
            answers: [
                "To help ensure organization, system and data preservation by performing investigations into computer security incidents",
            ],
        },
        {
            question: "How do Cisco ISE and TrustSec work?",
            answers: [
                "They enforce access to network resources by creating role-based access control policies",
            ],
        },
        {
            question: "The risk management process consists of four steps. Can you put these in the right order?",
            answers: [
                "Monitor the risk Frame the risk Respond to the risk Assess the risk",
            ],
        },
        {
            question: "Which of the following actions should an organization take in the event of a security breach? (Choose two.)",
            answers: [
                "Communicate a call to action to all employees",
                "Carry out research to uncover what caused the breach",
            ],
        },
    ],
    'module-5': [
        {
            question: "What is the difference between a hacker and a cybersecurity professional?",
            answers: [
                "Cybersecurity professionals must work within legal boundaries",
            ],
        },
        {
            question: "What can the skills developed by cybersecurity professionals be used for?",
            answers: [
                "Cybersecurity professionals develop many skills that can be used for good or evil",
            ],
        },
    ],
};

const FINAL_EXAM_DB = [
    {
      "question": "Which of the following firewalls hides or masquerades the private addresses of network hosts?",
      "answers": [
        "Network address translation firewall",
      ],
    },
    {
      "question": "Carrying out a multi-phase, long-term, stealthy and advanced operation against a specific target is often referred to as what?",
      "answers": [
        "Advanced persistent threat",
      ],
    },
    {
      "question": "You are configuring access settings to require employees in your organization to authenticate first before accessing certain web pages. Which requirement of information security is addressed through this configuration?",
      "answers": [
        "Confidentiality",
      ],
    },
    {
      "question": "What are two objectives of ensuring data integrity? (Choose two correct answers)",
      "answers": [
        "Data is unaltered during transit",
        "Data is not changed by unauthorized entities",
      ],
    },
    {
      "question": "An organization is experiencing overwhelming visits to a main web server. You are developing a plan to add a couple of more web servers for load balancing and redundancy. Which requirement of information security is addressed by implementing the plan?",
      "answers": [
        "Availability",
      ],
    },
    {
      "question": "What of the following are examples of cracking an encrypted password? (Choose four correct answers)",
      "answers": [
        "Brute force attack",
        "Rainbow tables",
        "Spraying",
        "Dictionary attack",
      ],
    },
    {
      "question": "Improper management of physical access to a resource, such as a file, can lead to what type of security vulnerability?",
      "answers": [
        "Access control problems",
      ],
    },
    {
      "question": "A medical office employee sends emails to patients about their recent visits to the facility. What information would put the privacy of the patients at risk if it was included in the email?",
      "answers": [
        "Patient records",
      ],
    },
    {
      "question": "What is the best way to avoid getting spyware on a machine?",
      "answers": [
        "Install software only from trusted websites",
      ],
    },
    {
      "question": "You are surfing the Internet using a laptop at a public Wi-Fi cafe. What should you check first before you connect to the public network?",
      "answers": [
        "If the laptop requires user authentication for file and media sharing",
      ],
    },
    {
      "question": "What is one main function of the Cisco Security Incident Response Team?",
      "answers": [
        "To ensure company, system and data preservation",
      ],
    },
    {
      "question": "Which of the following firewalls are placed in front of web services to protect, hide, offload and distribute access to web servers?",
      "answers": [
        "Reverse proxy server",
      ],
    },
    {
      "question": "Which of the following certifications meets the U.S. Department of Defense Directive 8570.01-M requirements, which is important for anyone looking to work in IT security for the federal government?",
      "answers": [
        "CompTIA Security+",
      ],
    },
    {
      "question": "One of your colleagues has lost her identification badge. She is in a hurry to get to a meeting and does not have time to visit Human Resources to get a temporary badge. You lend her your identification badge until she can obtain a replacement.",
      "answers": [
        "Unethical",
      ],
    },
    {
      "question": "Which of the following certifications tests your understanding and knowledge in how to look for weaknesses and vulnerabilities in target systems using the same knowledge and tools as a malicious hacker, but in a lawful and legitimate manner?",
      "answers": [
        "EC Council Certified Ethical Hacker",
      ],
    },
    {
      "question": "What is the main purpose of cyberwarfare?",
      "answers": [
        "To gain advantage over adversaries",
      ],
    },
    {
      "question": "What vulnerability occurs when the output of an event depends on ordered or timed outputs?",
      "answers": [
        "Race conditions",
      ],
    },
    {
      "question": "What do you call the vulnerabilities discovered by Google security researchers that affect almost all CPUs released since 1995? (Select two correct answers)",
      "answers": [
        "Spectre",
        "Meltdown",
      ],
    },
    {
      "question": "If developers attempt to create their own security algorithms, it will likely introduce what type of vulnerabilities?",
      "answers": [
        "Weaknesses in security practices",
      ],
    },
    {
      "question": "Which technology creates a security token that allows a user to log in to a desired web application using credentials from a social media website?",
      "answers": [
        "Open authorization",
      ],
    },
    {
      "question": "What are two security implementations that use biometrics? (Choose two.)",
      "answers": [
        "Fingerprint",
        "Voice recognition",
      ],
    },
    {
      "question": "Which of the following firewalls filters traffic based on source and destination IP addresses?",
      "answers": [
        "Network layer firewall",
      ],
    },
    {
      "question": "Which of the following firewalls filters web content requests such as URLs and domain names?",
      "answers": [
        "Proxy server",
      ],
    },
    {
      "question": "A port scan returns a ‘dropped’ response. What does this mean?",
      "answers": [
        "There was no reply from the host",
      ],
    },
    {
      "question": "During a meeting with the Marketing department, a representative from IT discusses features of an upcoming product that will be released next year. Is this employee’s behavior ethical or unethical?",
      "answers": [
        "Ethical",
      ],
    },
    {
      "question": "Which of the following is an entry-level certification for newcomers who are preparing to start their career in cybersecurity?",
      "answers": [
        "Palo Alto Networks Certified Cybersecurity Associate",
      ],
    },
    {
      "question": "‘Cybersecurity certifications are a way for you to verify your skills and knowledge and can also boost your career.’ Is this statement true or false?",
      "answers": [
        "True",
      ],
    },
    {
      "question": "When describing malware, what is a difference between a virus and a worm?",
      "answers": [
        "A virus replicates itself by attaching to another file, whereas a worm can replicate itself independently.",
      ],
    },
    {
      "question": "An employee is laid off after fifteen years with the same organization. The employee is then hired by another organization within a week. In the new organization, the employee shares documents and ideas for products that the employee proposed at the original organization. Is the employee’s behavior ethical or unethical?",
      "answers": [
        "Unethical",
      ],
    },
    {
      "question": "Which of the following firewalls filters traffic based on the user, device, role, application type and threat profile?",
      "answers": [
        "Context aware application firewall",
      ],
    },
    {
      "question": "What names are given to a database where all cryptocurrency transactions are recorded? (Select two correct answers)",
      "answers": [
        "Blockchain",
        "Ledger",
      ],
    },
    {
      "question": "Which of the following items are states of data? (Choose three correct answers)",
      "answers": [
        "Storage",
        "Transmission",
        "Processing",
      ],
    },
    {
      "question": "‘Internet-based cameras and gaming gear are not subject to security breaches.’",
      "answers": [
        "False",
      ],
    },
    {
      "question": "What vulnerability occurs when data is written beyond the memory areas allocated to an application?",
      "answers": [
        "Buffer overflow",
      ],
    },
    {
      "question": "An organization’s IT department reports that their web server is receiving an abnormally high number of web page requests from different locations simultaneously. What type of security attack is occurring?",
      "answers": [
        "DDoS",
      ],
    },
    {
      "question": "Which of the following are commonly used port scanning applications? (Select two correct answers)",
      "answers": [
        "Zenmap",
        "Nmap",
      ],
    },
    {
      "question": "What action will an IDS take upon detection of malicious traffic?",
      "answers": [
        "Create a network alert and log the detection",
      ],
    },
    {
      "question": "Which statement describes cybersecurity?",
      "answers": [
        "It is an ongoing effort to protect Internet-connected systems and the data associated with those systems from unauthorized use or harm",
      ],
    },
    {
      "question": "‘After a data breach, it’s important to educate employees, partners and customers on how to prevent future breaches.’ Is this statement true or false?",
      "answers": [
        "True",
      ],
    },
    {
      "question": "An employee points out a design flaw in a new product to the department manager. Is this employee’s behavior ethical or unethical?",
      "answers": [
        "Ethical",
      ],
    },
    {
      "question": "‘Data coming into a program should be sanitized, as it could have malicious content, designed to force the program to behave in an unintended way.’ This statement describes what security vulnerability?",
      "answers": [
        "Non-validated input",
      ],
    },
    {
      "question": "Which of the following are examples of on-path attacks? (Choose two correct answers)",
      "answers": [
        "Man-in-the-Mobile",
        "Man-in-the-Middle",
      ],
    },
    {
      "question": "Which of the following firewalls filters traffic based on application, program or service?",
      "answers": [
        "Application layer firewall",
      ],
    },
    {
      "question": "A port scan returns a ‘closed’ response. What does this mean?",
      "answers": [
        "Connections to the port will be denied",
      ],
    },
    {
      "question": "‘Cryptocurrency transactions are digital.’ Is this statement true or false?",
      "answers": [
        "True",
      ],
    },
    {
      "question": "What do you call a digital asset designed to work as a medium of exchange that uses strong encryption to secure a financial transaction?",
      "answers": [
        "Cryptocurrency",
      ],
    },
    {
      "question": "Which two tools used for incident detection can be used to detect anomalous behavior, to detect command and control traffic, and to detect infected hosts? (Choose two.)",
      "answers": [
        "Intrusion detection system",
        "NetFlow",
      ],
    },
    {
      "question": "What name is given to a group of bots, connected through the Internet, with the ability to be controlled by a malicious individual or group?",
      "answers": [
        "Botnet",
      ],
    },
    {
      "question": "What is the best approach for preventing a compromised IoT device from maliciously accessing data and devices on a local network?",
      "answers": [
        "Place all IoT devices that have access to the Internet on an isolated network",
      ],
    },
    {
      "question": "What name is given to the emerging threat that hides on a computer or mobile device and uses that machine’s resources to mine cryptocurrencies?",
      "answers": [
        "Cryptojacking",
      ],
    },
    {
      "question": "A port scan returns an ‘open’ response. What does this mean?",
      "answers": [
        "A service is listening on the port",
      ],
    },
    {
      "question": "An employee is at a restaurant with friends and tells them about an exciting new video game that is under development at the organization they work for. Is this employee’s behavior ethical or unethical?",
      "answers": [
        "Unethical",
      ],
    },
    {
      "question": "‘An advanced persistent threat (APT) is usually well funded.’ Is this statement true or false?",
      "answers": [
        "True",
      ],
    },
    {
      "question": "In networking, what name is given to the identifier at both ends of a transmission to ensure that the right data is passed to the correct application?",
      "answers": [
        "Port number",
      ],
    },
    {
      "question": "‘An employee does something as an organization representative with the knowledge of that organization and this action is deemed illegal. The organization is legally responsible for this action.’ Is this statement true or false?",
      "answers": [
        "True",
      ],
    },
    {
      "question": "What tool is used to lure an attacker so that an administrator can capture, log and analyze the behavior of the attack?",
      "answers": [
        "Honeypot",
      ],
    },
    {
      "question": "‘A data breach does not impact the reputation of an organization.’ Is this statement true or false?",
      "answers": [
        "False",
      ],
    },
    {
      "question": "Which of the following certifications is aimed at high school and early college students, as well as anyone interested in a career change?",
      "answers": [
        "Microsoft Technology Associate Security Fundamentals",
      ],
    },
    {
      "question": "Which of the following firewalls filters traffic based on source and destination data ports and filtering based on connection states?",
      "answers": [
        "Transport layer firewall",
      ],
    },
    {
      "question": "Which of the following are categories of security measures or controls? (Choose three correct answers)",
      "answers": [
        "Policy and procedure",
        "Technology",
        "Awareness, training and education",
      ],
    },
    {
      "question": "‘A botnet can have tens of thousands of bots, or even hundreds of thousands.’ Is this statement true or false?",
      "answers": [
        "True",
      ],
    },
    {
      "question": "For what purpose would a network administrator use the Nmap tool?",
      "answers": [
        "detection and identification of open ports",
      ],
    },
    {
      "question": "Which of the following certifications does not expire or require periodic recertification and is geared towards post-secondary graduates and those interested in a career change?",
      "answers": [
        "ISACA CSX Cybersecurity Fundamentals",
      ],
    },
    {
      "question": "What type of attack uses zombies?",
      "answers": [
        "DDoS",
      ],
    },
    {
      "question": "What is the purpose of a backdoor?",
      "answers": [
        "To gain unauthorized access to a system without normal authentication procedures",
      ],
    },
    {
      "question": "Which firewall filters ports and system service calls on a single computer operating system?",
      "answers": [
        "Host-based Firewall",
      ],
    },
    {
      "question": "What type of attack disrupts services by overwhelming network devices with bogus traffic?",
      "answers": [
        "DDoS",
      ],
    },
    {
      "question": "‘Cryptocurrencies are handled on a centralized exchange.’ Is this statement true or false?",
      "answers": [
        "False",
      ],
    },
    {
      "question": "Several @Apollo employees have reported that the network access is slow. After investigation, the network administrator has learned that one employee downloaded a third-party scanning program for the printer. What type of malware might have been introduced that is causing slow performance of the network?",
      "answers": [
        "Worm",
      ],
    },
    {
      "question": "What is an example of the cyber kill chain?",
      "answers": [
        "a planned process of cyber attack",
      ],
    },
    {
      "question": "An organization’s process of identifying and assessing risk with the goal of reducing these threats to an acceptable level is known as what?",
      "answers": [
        "Risk management",
      ],
    },
    {
      "question": "An employee is laid off after fifteen years with the same organization. The employee is then hired by another organization within a week. In the new organization, the employee shares documents and ideas for products that the employee proposed at the original organization.\nIs the employee’s behavior ethical or unethical?",
      "answers": [
        "Unethical",
      ],
    },
    {
      "question": "Which stage of the kill chain used by attackers focuses on the identification and selection of targets?",
      "answers": [
        "reconnaissance",
      ],
    },
    {
      "question": "An employee does something as a company representative with the knowledge of that company and this action is deemed illegal. The company would be legally responsible for this action. Is this statement true or false?",
      "answers": [
        "True",
      ],
    },
    {
      "question": "Which term describes the private browser mode for Google Chrome?",
      "answers": [
        "Incognito",
      ],
    },
    {
      "question": "What type of infiltration method allows attackers to quietly capture two-step verification SMS messages sent to users in a Man-in-the-Mobile (MITMO) attack?",
      "answers": [
        "On-Path attack",
      ],
    },
    {
      "question": "A web server administrator is configuring access settings to require users to authenticate first before accessing certain web pages. Which requirement of information security is addressed through the configuration?",
      "answers": [
        "Confidentiality",
      ],
    },
    {
      "question": "An operating system-style window pops up on a Windows user screen. The pop-up message warns the user that the system is at risk and that a specific program needs to run to return the system to routine operation. Name the kind of malware used.",
      "answers": [
        "Scareware",
      ],
    },
    {
      "question": "An attacker requests personal information from a person in exchange for a gift. Identify the infiltration method.",
      "answers": [
        "Quid Pro Quo",
      ],
    },
    {
      "question": "Which type of firewall hides or masquerades the private address of network hosts?",
      "answers": [
        "NAT Firewall",
      ],
    },
    {
      "question": "Which activity typically happens at the first stage of a penetration test?",
      "answers": [
        "Conducting passive or active reconnaissance and vulnerability research",
      ],
    },
    {
      "question": "Which type of software vulnerability describes a situation where the required ordered events do not occur in the correct order?",
      "answers": [
        "Race Conditions",
      ],
    },
    {
      "question": "A security technician configures access settings to require employees to authenticate before accessing certain web pages. Which requirement of information security is addressed through this configuration?",
      "answers": [
        "Confidentiality",
      ],
    },
    {
      "question": "Which of the following statements best describes cybersecurity?",
      "answers": [
        "It is an ongoing effort to protect Internet-connected systems and the data associated with those systems from unauthorized use or harm",
      ],
    },
    {
      "question": "Which of the following security implementations use biometrics?",
      "answers": [
        "Voice recognition",
        "Fingerprint",
      ],
    },
    {
      "question": "What are two objectives of ensuring data integrity? (Choose two.)",
      "answers": [
        "Data is unaltered during transit",
        "Data is not changed by unauthorized entities",
      ],
    },
    {
      "question": "A company is experiencing overwhelming visits to a main web server. The IT department is developing a plan to add a couple more web servers for load balancing and redundancy. Which requirement of information security is addressed by implementing the plan?",
      "answers": [
        "Availability",
      ],
    },
    {
      "question": "True or False? An employee does something as a company representative with the knowledge of that company and this action is deemed illegal. The company would be legally responsible for this action.",
      "answers": [
        "True",
      ],
    },
    {
      "question": "The IT department is reporting that a company web server is receiving an abnormally high number of web page requests from different locations simultaneously. Which type of security attack is occurring?",
      "answers": [
        "DDoS",
      ],
    },
    {
      "question": "What is the best method to avoid getting spyware on a machine?",
      "answers": [
        "Install software only from trusted websites",
      ],
    },
    {
      "question": "A medical office employee sends emails to patients about recent patient visits to the facility. What information would put the privacy of the patients at risk if it was included in the email?",
      "answers": [
        "Patient records",
      ],
    },
    {
      "question": "What is an example of the Cyber Kill Chain?",
      "answers": [
        "a planned process of cyber attack",
      ],
    },
    {
      "question": "What are three states of data? (Choose three.)",
      "answers": [
        "Processing",
        "Storage",
        "Transmission",
      ],
    },
    {
      "question": "True or False: Internet-based cameras and gaming gear are not subject to security breaches.",
      "answers": [
        "False",
      ],
    },
    {
      "question": "True or False: An advanced persistent threat (APT) is usually well-funded.",
      "answers": [
        "True",
      ],
    },
    {
      "question": "All IoT devices are potentially vulnerable to security breaches. What is the best approach for preventing an IoT device from becoming compromised and maliciously accessing data and devices on a local network?",
      "answers": [
        "Place all IoT devices that have access to the Internet on an isolated network",
      ],
    },
    {
      "question": "Which type of firewall filters web content requests such as URLs and domain names?",
      "answers": [
        "Application Layer Firewall",
      ],
    },
    {
      "question": "Which firewall filters traffic based on source and destination data ports, including connection states?",
      "answers": [
        "Network Layer Firewall",
      ],
    },
    {
      "question": "True or False: Cybersecurity certifications are a way for you to verify your skills and knowledge and boost your career.",
      "answers": [
        "True",
      ],
    },
    {
      "question": "An employee is laid off after fifteen years with the same organization. Another organization then hires the employee within a week. In the new organization, the employee shares documents and ideas for products that the employee proposed at the original organization. Is the employee's behavior ethical or unethical?",
      "answers": [
        "Unethical",
      ],
    },
    {
      "question": "What are two examples of on-path attacks? (Choose two.)",
      "answers": [
        "Man-in-the-Mobile",
        "Man-in-the-Middle",
      ],
    },
];
