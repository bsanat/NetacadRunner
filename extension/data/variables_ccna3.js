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

const RAW_DB = {
    "1.1.7": [
      {
        "question": "Which of the following OSPF components is associated with the neighbor table?",
        "answers": [
          "Adjacency database"
        ]
      },
      {
        "question": "Which of the following OSPF components is responsible for computing the cost of each route?",
        "answers": [
          "Dijkstra’s algorithm"
        ]
      },
      {
        "question": "Which of the following OSPF components is associated with the topology table?",
        "answers": [
          "Link-State database"
        ]
      },
      {
        "question": "Which of the following OSPF components is associated with the routing table?",
        "answers": [
          "Forwarding database"
        ]
      },
      {
        "question": "What is the correct order in the steps for Link-State operation?",
        "answers": [
          "1. Establish Neighbor Adjacencies\n2. Exchange Link-State Advertisements\n3. Build the Topology Table\n4. Execute the SPF Algorithm\n5. Choose the Best Route"
        ]
      }
    ],
    "1.2.5": [
      {
        "question": "Which of the following OSPF packets contains an abbreviated list of the LSDB of the sending router?",
        "answers": [
          "Type 2: DBD packet"
        ]
      },
      {
        "question": "Which of the following OSPF packets is used by routers to announce new information?",
        "answers": [
          "Type 4: LSU packet"
        ]
      },
      {
        "question": "Which of the following OSPF packets is used by routers to request more information?",
        "answers": [
          "Type 3: LSR packet"
        ]
      },
      {
        "question": "Which of the following OSPF packets is responsible for establishing and maintaining adjacency with other OSPF routers?",
        "answers": [
          "Type 1: Hello packet"
        ]
      },
      {
        "question": "Which of the following OSPF packets is used to confirm receipt of an LSA?",
        "answers": [
          "Type 5: LSAck packet"
        ]
      },
      {
        "question": "Which of the following is used with the Hello Packet to uniquely identify the originating router?",
        "answers": [
          "Router ID"
        ]
      }
    ],
    "1.3.7": [
      {
        "question": "During this OSPF state on multiaccess networks, the routers elect a Designated Router (DR) and a Backup Designated Router (BDR).",
        "answers": [
          "Two-Way State"
        ]
      },
      {
        "question": "During this OSPF state, routers send each other DBD packets.",
        "answers": [
          "Exchange State"
        ]
      },
      {
        "question": "An OSPF router enters this state when it has received a Hello packet from a neighbor, containing the sending Router ID.",
        "answers": [
          "Init State"
        ]
      },
      {
        "question": "During this OSPF state on point-to-point networks, the routers decide which router initiates the exchange of DBD packets.",
        "answers": [
          "ExStart State"
        ]
      },
      {
        "question": "During this OSPF state, routers have converged link-state databases.",
        "answers": [
          "Full State"
        ]
      },
      {
        "question": "During this OSPF state, no Hello packets are received.",
        "answers": [
          "Down State"
        ]
      },
      {
        "question": "During this OSPF state, routes are processed using the SPF algorithm.",
        "answers": [
          "Full State"
        ]
      }
    ],
    "2.1.9": [
      {
        "question": "True or False? In the router ospf process-id command, the process ID value, which can any number between 1 and 65,535, is locally significant. It must be the same on all routers in the OSPF area.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which of the following applies to the router ID? (Choose two)",
        "answers": [
          "The router ID is used to determine the DR.",
          "The router ID uniquely identifies the router."
        ]
      },
      {
        "question": "Which of the following is the order of precedence for choosing the router ID?",
        "answers": [
          "1. Router ID that is explicitly configured\n2. Highest IPv4 loopback address\n3. Highest active configured IPv4 address"
        ]
      }
    ],
    "3.1.4": [
      {
        "question": "Which security term is used to describe anything of value to the organization? It includes people, equipment, resources, and data.",
        "answers": [
          "Asset"
        ]
      },
      {
        "question": "Which security term is used to describe a weakness in a system, or its design, that could be exploited by a threat?",
        "answers": [
          "Vulnerability"
        ]
      },
      {
        "question": "Which security term is used to describe a potential danger to a company’s assets, data, or network functionality?",
        "answers": [
          "Threat"
        ]
      },
      {
        "question": "Which security term is used to describe a mechanism that takes advantage of a vulnerability?",
        "answers": [
          "Exploit"
        ]
      },
      {
        "question": "Which security term is used to describe the counter-measure for a potential threat or risk?",
        "answers": [
          "Mitigation"
        ]
      },
      {
        "question": "Which security term is used to describe the likelihood of a threat to exploit the vulnerability of an asset, with the aim of negatively affecting an organization?",
        "answers": [
          "Risk"
        ]
      }
    ],
    "3.2.6": [
      {
        "question": "Which type of hacker is described in the scenario: After hacking into ATM machines remotely using a laptop, I worked with ATM manufacturers to resolve the security vulnerabilities that I discovered.",
        "answers": [
          "Gray Hat"
        ]
      },
      {
        "question": "Which type of hacker is described in the scenario: From my laptop, I transferred $10 million to my bank account using victim account numbers and PINs after viewing recordings of victims entering the numbers.",
        "answers": [
          "Black Hat"
        ]
      },
      {
        "question": "Which type of hacker is described in the scenario: My job is to identify weaknesses in my company’s network.",
        "answers": [
          "White Hat"
        ]
      },
      {
        "question": "Which type of hacker is described in the scenario: I used malware to compromise several corporate systems to steal credit card information. I then sold that information to the highest bidder.",
        "answers": [
          "Black Hat"
        ]
      },
      {
        "question": "Which type of hacker is described in the scenario: During my research for security exploits, I stumbled across a security vulnerability on a corporate network that I am authorized to access.",
        "answers": [
          "White Hat"
        ]
      },
      {
        "question": "Which type of hacker is described in the scenario It is my job to work with technology companies to fix a flaw with DNS.",
        "answers": [
          "White Hat"
        ]
      }
    ],
    "3.3.5": [
      {
        "question": "Which penetration testing tool uses algorithm schemes to encode the data, which then prevents access to the data?",
        "answers": [
          "Encryption Tools"
        ]
      },
      {
        "question": "Which penetration testing tool is used by black hats to reverse engineer binary files when writing exploits? They are also used by white hats when analyzing malware.",
        "answers": [
          "Debuggers"
        ]
      },
      {
        "question": "Which penetration testing tool is used to probe and test a firewall’s robustness?",
        "answers": [
          "Packet Crafting Tools"
        ]
      },
      {
        "question": "Which penetration testing tool is used by white hat hackers to sniff out any trace of evidence existing in a computer?",
        "answers": [
          "Forensic Tools"
        ]
      },
      {
        "question": "Which penetration testing tool identifies whether a remote host is susceptible to a security attack?",
        "answers": [
          "Vulnerability Exploitation Tools"
        ]
      }
    ],
    "3.4.4": [
      {
        "question": "Which malware executes arbitrary code and installs copies of itself in the memory of the infected computer? The main purpose of this malware is to automatically replicate from system to system across the network.",
        "answers": [
          "Worm"
        ]
      },
      {
        "question": "Which malware is non-self-replicating type of malware? It often contains malicious code that is designed to look like something else, such as a legitimate application or file. It attacks the device from within.",
        "answers": [
          "Trojan Horse"
        ]
      },
      {
        "question": "Which malware is used to gather information about a user and then, without the user’s consent, sends the information to another entity?",
        "answers": [
          "Spyware"
        ]
      },
      {
        "question": "Which malware typically displays annoying pop-ups to generate revenue for its author?",
        "answers": [
          "Adware"
        ]
      },
      {
        "question": "Which malware is installed on a compromised system and provides privileged access to the threat actor?",
        "answers": [
          "Rootkit"
        ]
      },
      {
        "question": "Which malware denies access to the infected computer system and demands payment before the restriction is removed?",
        "answers": [
          "Ransomware"
        ]
      }
    ],
    "3.5.10": [
      {
        "question": "What type of attack is tailgating?",
        "answers": [
          "Social Engineering"
        ]
      },
      {
        "question": "What type of attack is a password attack?",
        "answers": [
          "Access"
        ]
      },
      {
        "question": "What type of attack is port scanning?",
        "answers": [
          "Reconnaissance"
        ]
      },
      {
        "question": "What type of attack is man-in-the-middle?",
        "answers": [
          "Access"
        ]
      },
      {
        "question": "What type of attack is address spoofing?",
        "answers": [
          "Access"
        ]
      }
    ],
    "3.6.7": [
      {
        "question": "Which attack is being used when threat actors position themselves between a source and destination to transparently monitor, capture, and control the communication?",
        "answers": [
          "MiTM Attack"
        ]
      },
      {
        "question": "Which attack is being used when threat actors gain access to the physical network, and then use an MiTM attack to capture and manipulate a legitimate user’s traffic?",
        "answers": [
          "Session Hijacking"
        ]
      },
      {
        "question": "Which attack is being used when threat actors initiate a simultaneous, coordinated attack from multiple source machines?",
        "answers": [
          "Amplification and Reflection Attacks"
        ]
      },
      {
        "question": "Which attack is being used when threat actors use pings to discover subnets and hosts on a protected network, to generate flood attacks, and to alter host routing tables?",
        "answers": [
          "ICMP Attack"
        ]
      },
      {
        "question": "Which attack being used is when a threat actor creates packets with false source IP address information to either hide the identity of the sender, or to pose as another legitimate user?",
        "answers": [
          "Address Spoofing Attack"
        ]
      }
    ],
    "3.7.6": [
      {
        "question": "Which attack exploits the three-way handshake?",
        "answers": [
          "TCP SYN Flood attack"
        ]
      },
      {
        "question": "Two hosts have established a TCP connection and are exchanging data. A threat actor sends a TCP segment with the RST bit set to both hosts informing them to immediately stop using the TCP connection. Which attack is this?",
        "answers": [
          "TCP reset attack"
        ]
      },
      {
        "question": "Which attack is being used when the threat actor spoofs the IP address of one host, predicts the next sequence number, and sends an ACK to the other host?",
        "answers": [
          "TCP session hijacking"
        ]
      },
      {
        "question": "A program sends a flood of UDP packets from a spoofed host to a server on the subnet sweeping through all the known UDP ports looking for closed ports. This will cause the server to reply with an ICMP port unreachable message. Which attack is this?",
        "answers": [
          "UDP flood attack"
        ]
      }
    ],
    "3.9.6": [
      {
        "question": "Which network security device ensures that internal traffic can go out and come back, but external traffic cannot initiate connections to inside hosts?",
        "answers": [
          "ASA Firewall"
        ]
      },
      {
        "question": "Which network security device contains a secure database of who is authorized to access and manage network devices?",
        "answers": [
          "AAA Server"
        ]
      },
      {
        "question": "Which network security device filters known and suspicious internet malware sites?",
        "answers": [
          "ESA/WSA"
        ]
      },
      {
        "question": "Which network security device is used to provide secure services with corporate sites and remote access support for remote users using secure encrypted tunnels?",
        "answers": [
          "VPN"
        ]
      },
      {
        "question": "Which network security device monitors incoming and outgoing traffic looking for malware, network attack signatures, and if it recognizes a threat, it can immediately stop it?",
        "answers": [
          "IPS"
        ]
      }
    ],
    "3.10.10": [
      {
        "question": "Which encryption method repeats an algorithm process three times and is considered very trustworthy when implemented using very short key lifetimes?",
        "answers": [
          "Triple DES"
        ]
      },
      {
        "question": "Which encryption method encrypts plaintext one byte or one bit at a time?",
        "answers": [
          "Stream Cipher"
        ]
      },
      {
        "question": "Which encryption method uses the same key to encrypt and decrypt data?",
        "answers": [
          "Symmetric"
        ]
      },
      {
        "question": "Which encryption method is a stream cipher and is used to secure web traffic in SSL and TLS?",
        "answers": [
          "Rivest Cipher"
        ]
      }
    ],
    "4.1.5": [
      {
        "question": "What are the permit or deny statements in an ACL called?",
        "answers": [
          "access control entries"
        ]
      },
      {
        "question": "Which packet filtering statement is true?",
        "answers": [
          "Standard ACLs filter at Layer 3 only."
        ]
      },
      {
        "question": "Which statement about the operation of a standard ACL is incorrect?",
        "answers": [
          "When a match is made, the ACE either permits or denies the packet, and any remaining ACEs are not analyzed."
        ]
      }
    ],
    "4.2.5": [
      {
        "question": "Which wildcard mask would permit only host 10.10.10.1?",
        "answers": [
          "0.0.0.0"
        ]
      },
      {
        "question": "Which wildcard mask would permit only hosts from the 10.10.0.0/16 network?",
        "answers": [
          "0.0.255.255"
        ]
      },
      {
        "question": "Which wildcard mask would permit all hosts?",
        "answers": [
          "255.255.255.255"
        ]
      },
      {
        "question": "Which wildcard mask would permit all hosts from the 192.168.10.0/24 network?",
        "answers": [
          "0.0.0.255"
        ]
      }
    ],
    "4.3.3": [
      {
        "question": "How many total ACLs (both IPv4 and IPv6) can be configured on an interface?",
        "answers": [
          "4"
        ]
      },
      {
        "question": "Which of the following is an ACL best practice?",
        "answers": [
          "Write the ACL before configuring it on a router."
        ]
      }
    ],
    "4.4.6": [
      {
        "question": "Which ACL is capable of filtering based on TCP port number?",
        "answers": [
          "extended ACL"
        ]
      },
      {
        "question": "Which statement about ACLs is true?",
        "answers": [
          "Named ACLs can be standard or extended."
        ]
      },
      {
        "question": "Where should a standard ACL be placed?",
        "answers": [
          "Standard ACLs should be placed as close to the destination as possible."
        ]
      },
      {
        "question": "Where should an extended ACL be placed?",
        "answers": [
          "Extended ACLs should be located as close to the source as possible."
        ]
      }
    ],
    "6.1.5": [
      {
        "question": "Refer to the exhibit. What type of NAT address is the IP address of PC1 (i.e., 192.168.10.10)?",
        "answers": [
          "Inside Local"
        ]
      },
      {
        "question": "Refer to the exhibit. Into what type of address has the IPv4 address for PC1 been translated (i.e., 209.165.200.226)?",
        "answers": [
          "Inside Global"
        ]
      },
      {
        "question": "Refer to the exhibit. What type of NAT address is the IP address of the Web Server (i.e., 209.165.201.10)?",
        "answers": [
          "Outside Global"
        ]
      }
    ],
    "6.3.3": [
      {
        "question": "True or False? A side effect of NAT is that it hides the inside local IP address of a host from the outside network.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "True or False? With NAT overload, each inside local IP address is translated to a unique inside global IP address on a one-for-one basis.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "True or False? The use of NAT makes end-to-end traceability between source and destination easier.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "True or False? Tunneling protocols such as IPsec do not work well through NAT.",
        "answers": [
          "True"
        ]
      }
    ],
    "7.1.6": [
      {
        "question": "Which two options describe a WAN? (Choose two.)",
        "answers": [
          "A WAN provides networking services over large geographical areas.",
          "WAN services are provided for a fee."
        ]
      },
      {
        "question": "Which topology type describes the virtual connection between source to destination?",
        "answers": [
          "logical topology"
        ]
      },
      {
        "question": "Which type of WAN network design is the most fault-tolerant?",
        "answers": [
          "fully meshed topology"
        ]
      },
      {
        "question": "Which is a type of WAN carrier connection that provides redundancy?",
        "answers": [
          "dual-carrier WAN connection"
        ]
      }
    ],
    "7.2.9": [
      {
        "question": "Which two statements about the WAN OSI Layer 1 are true? (Choose two.)",
        "answers": [
          "It describes the electrical, mechanical, and operational components needed to transmit bits.",
          "It includes protocols such as SDH, SONET, and DWDM."
        ]
      },
      {
        "question": "Which WAN term defines the point where the subscriber connects to the service providers network.",
        "answers": [
          "Point-of-Presence (POP)"
        ]
      },
      {
        "question": "Which two devices operate in a similar manner to the voiceband modem but use higher broadband frequencies and transmission speeds. (Choose two.)",
        "answers": [
          "Cable Modem",
          "DSL Modem"
        ]
      },
      {
        "question": "Which communication method is used in all WAN connections?",
        "answers": [
          "Serial"
        ]
      },
      {
        "question": "Which two WAN connectivity options are circuit-switched technologies? (Choose two.)",
        "answers": [
          "ISDN",
          "PSTN"
        ]
      },
      {
        "question": "Which two WAN connectivity options are packet-switched technologies? (Choose two.)",
        "answers": [
          "Ethernet WAN",
          "Frame Relay"
        ]
      },
      {
        "question": "Which service provider fiber-optic technology increases the data-carrying capacity using different wavelengths?",
        "answers": [
          "DWDM"
        ]
      }
    ],
    "7.3.5": [
      {
        "question": "Which traditional WAN connectivity option uses T-Carrier or E-Carrier lines?",
        "answers": [
          "Leased lines"
        ]
      },
      {
        "question": "Which two traditional WAN connectivity options are circuit-switched? (Choose two.)",
        "answers": [
          "ISDN",
          "PSTN"
        ]
      },
      {
        "question": "Which two traditional WAN connectivity options are packet-switched? (Choose two.)",
        "answers": [
          "ATM",
          "Frame Relay"
        ]
      }
    ],
    "7.4.5": [
      {
        "question": "Which WAN connectivity option is based on Ethernet LAN technology?",
        "answers": [
          "Metro Ethernet"
        ]
      },
      {
        "question": "Which is a service provider WAN solution that uses labels to direct the flow of packets through the provider network?",
        "answers": [
          "MPLS"
        ]
      }
    ],
    "8.1.5": [
      {
        "question": "Which VPN benefit allows an enterprise to easily add more users to the network?",
        "answers": [
          "Scalability"
        ]
      },
      {
        "question": "Which VPN benefit allows an enterprise to increase the bandwidth for remote sites without necessarily adding more equipment or WAN links?",
        "answers": [
          "Cost Savings"
        ]
      },
      {
        "question": "Which VPN benefit uses advanced encryption and authentication protocols to protect data from unauthorized access?",
        "answers": [
          "Security"
        ]
      },
      {
        "question": "Which type of VPN is used to connect a mobile user?",
        "answers": [
          "Remote-access"
        ]
      },
      {
        "question": "Which VPN solutions are typically managed by an enterprise? (Choose three)",
        "answers": [
          "IPsec",
          "SSL",
          "DMVPN"
        ]
      }
    ],
    "8.2.8": [
      {
        "question": "What type of VPN can be established with a web browser using HTTPS?",
        "answers": [
          "Clientless VPN"
        ]
      },
      {
        "question": "Which feature describes SSL VPNs?",
        "answers": [
          "Only requires a web browser on a host"
        ]
      },
      {
        "question": "What type of protocol is GRE?",
        "answers": [
          "Carrier protocol"
        ]
      },
      {
        "question": "What type of VPN enables an enterprise to rapidly scale secure access across the organization?",
        "answers": [
          "DMVPN"
        ]
      },
      {
        "question": "What type of VPN enables an enterprise to emulate an Ethernet multiaccess LAN with remote sites?",
        "answers": [
          "MPLS VPN"
        ]
      }
    ],
    "8.3.9": [
      {
        "question": "IPsec can protect traffic in which OSI layers? (Choose four.)",
        "answers": [
          "Layer 4",
          "Layer 5",
          "Layer 6",
          "Layer 7"
        ]
      },
      {
        "question": "Which IPsec function uses pre-shared passwords, digital certificates, or RSA certificates?",
        "answers": [
          "Authentication"
        ]
      },
      {
        "question": "True or False: The IPsec framework must be updated each time a new standard is developed.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which choices are packet encapslation options suported by IPsec? (Choose two.)",
        "answers": [
          "AH",
          "ESP"
        ]
      },
      {
        "question": "Which choices provide for the Confidentiality function in the IPsec framework? (Choose three.)",
        "answers": [
          "3DES",
          "AES",
          "SEAL"
        ]
      },
      {
        "question": "Which choices provide for the Integrity function in the IPsec framework? (Choose two.)",
        "answers": [
          "MD5",
          "SHA"
        ]
      },
      {
        "question": "Which choices are available for the Authentication function in the IPsec framework? (Choose two.)",
        "answers": [
          "PSK",
          "RSA"
        ]
      },
      {
        "question": "Which Diffie-Hellman group choices are no longer recommended?",
        "answers": [
          "DH groups 1, 2, and 5"
        ]
      }
    ],
    "9.1.5": [
      {
        "question": "What is the variable amount of time it takes for a frame to traverse the links between the source and destination?",
        "answers": [
          "propagation delay"
        ]
      },
      {
        "question": "What happens when congestion occurs?",
        "answers": [
          "packet loss"
        ]
      },
      {
        "question": "What is the fixed amount of time it takes to transmit a frame from the NIC to the wire?",
        "answers": [
          "serialization delay"
        ]
      },
      {
        "question": "What is caused by variation in delay?",
        "answers": [
          "jitter"
        ]
      }
    ],
    "9.2.6": [
      {
        "question": "Which type of traffic tends to consume a large portion of network capacity?",
        "answers": [
          "data"
        ]
      },
      {
        "question": "Which type of traffic requires at least 384 Kbs of bandwidth?",
        "answers": [
          "video"
        ]
      },
      {
        "question": "Which type of traffic is unpredictable, inconsistent, and bursty?",
        "answers": [
          "video"
        ]
      },
      {
        "question": "Which type of traffic can be predictable and smooth?",
        "answers": [
          "voice"
        ]
      },
      {
        "question": "Which type of traffic cannot be retransmitted if lost?",
        "answers": [
          "voice"
        ]
      },
      {
        "question": "Which type of traffic must receive a higher UDP priority?",
        "answers": [
          "voice"
        ]
      }
    ],
    "9.3.7": [
      {
        "question": "Which queuing algorithm simultaneously schedules interactive traffic to the front of a queue to reduce response time?",
        "answers": [
          "WFQ"
        ]
      },
      {
        "question": "Which queuing algorithm provides support for user-defined traffic classes?",
        "answers": [
          "CBWFQ"
        ]
      },
      {
        "question": "Which queuing algorithm is effective for large links that have little delay and minimal congestion?",
        "answers": [
          "FIFO"
        ]
      },
      {
        "question": "Which queuing algorithm classifies traffic into different flows based on packet header addressing?",
        "answers": [
          "WFQ"
        ]
      },
      {
        "question": "Which queuing algorithm allows delay-sensitive data such as voice to be sent before packets in other queues?",
        "answers": [
          "LLQ"
        ]
      },
      {
        "question": "Which queuing algorithm applies priority, or weights, to identify traffic and classify it?",
        "answers": [
          "WFQ"
        ]
      }
    ],
    "9.4.6": [
      {
        "question": "Which QoS model provides per-request policy admission control?",
        "answers": [
          "integrated services"
        ]
      },
      {
        "question": "Which QoS model requires no special QoS mechanisms?",
        "answers": [
          "best effort"
        ]
      },
      {
        "question": "Which QoS model provides many different levels of quality?",
        "answers": [
          "differential services"
        ]
      },
      {
        "question": "Which QoS model uses explicit end-to-end resource admission control?",
        "answers": [
          "integrated services"
        ]
      },
      {
        "question": "Which QoS model is the most scalable?",
        "answers": [
          "differential services"
        ]
      }
    ],
    "9.5.14": [
      {
        "question": "Which detects when traffic rates reach a configured maximum rate and drops excess traffic?",
        "answers": [
          "traffic policing"
        ]
      },
      {
        "question": "Which determines what class of traffic packets or frames belong to?",
        "answers": [
          "classification"
        ]
      },
      {
        "question": "Which adds a value to the packet header?",
        "answers": [
          "marking"
        ]
      },
      {
        "question": "Which provides buffer management and allows TCP traffic to throttle back before buffers are exhausted?",
        "answers": [
          "WRED"
        ]
      },
      {
        "question": "Which retains excess packets in a queue and then schedules the excess for later transmission over increments of time?",
        "answers": [
          "traffic shaping"
        ]
      }
    ],
    "10.2.5": [
      {
        "question": "Which protocol is used to gather information about Cisco devices which share the same data link?",
        "answers": [
          "CDP"
        ]
      },
      {
        "question": "Which protocol works with network devices, such as routers, switches, and wireless LAN access points across multiple manufacturers’ devices?",
        "answers": [
          "LLDP"
        ]
      }
    ],
    "10.4.5": [
      {
        "question": "Which SNMP version authenticates the source of management messages?",
        "answers": [
          "Version 3"
        ]
      },
      {
        "question": "Which SNMP version provides services for security models?",
        "answers": [
          "Both"
        ]
      },
      {
        "question": "Which SNMP version does not provide encrypted management messages?",
        "answers": [
          "Version 2"
        ]
      },
      {
        "question": "Which SNMP version is supported by Cisco IOS software?",
        "answers": [
          "Both"
        ]
      },
      {
        "question": "Which SNMP version includes expanded error codes with types?",
        "answers": [
          "Version 2"
        ]
      },
      {
        "question": "Which SNMP version uses community-based forms of security?",
        "answers": [
          "Version 2"
        ]
      },
      {
        "question": "Which SNMP version is used for interoperability and includes message integrity reporting?",
        "answers": [
          "Version 3"
        ]
      }
    ],
    "10.5.6": [
      {
        "question": "Refer to the syslog output. What security level generated the message?",
        "answers": [
          "Debugging"
        ]
      },
      {
        "question": "Refer to the syslog output. What is the mnemonic for this syslog message?",
        "answers": [
          "NO_IFINDEX_FILE"
        ]
      },
      {
        "question": "Refer to the syslog output. What is the syslog reporting facility?",
        "answers": [
          "IFMGR"
        ]
      }
    ],
    "11.1.8": [
      {
        "question": "Which term is used to describe a network that is always accessible?",
        "answers": [
          "Resilient"
        ]
      },
      {
        "question": "Which characteristic of a network allows it to expand and provide on-demand services?",
        "answers": [
          "Modularity"
        ]
      },
      {
        "question": "Which term describes the ability of a network to use all available network resources and to provide data load sharing?",
        "answers": [
          "Flexible"
        ]
      },
      {
        "question": "Which network layer provides fault isolation and high-speed backbone switch connectivity?",
        "answers": [
          "Core"
        ]
      },
      {
        "question": "Which network layer provides direct, switched network connectivity to the user?",
        "answers": [
          "Access"
        ]
      },
      {
        "question": "Which network layer integrates with the backbone and users to provide intelligent switching, routing, and security?",
        "answers": [
          "Distribution"
        ]
      }
    ],
    "11.2.7": [
      {
        "question": "Which three recommendations may be included in a network design strategy that is focused on scalability? (Choose three.)",
        "answers": [
          "Design a hierarchical network.",
          "Choose routers or multilayer switches to limit broadcasts and filter other undesirable traffic from the network.",
          "Use expandable, modular equipment, or clustered devices that can be easily upgraded to increase capabilities."
        ]
      },
      {
        "question": "True or false? OSPF is well-suited for larger networks because it can be deployed using a hierarchical design.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "What are three important features that should be considered for implementation in a well-designed, scalable network? (Choose three.)",
        "answers": [
          "redundant links",
          "multiple links",
          "expandable, modular equipment"
        ]
      }
    ],
    "11.3.8": [
      {
        "question": "Which category of switch is used to aggregate traffic at the edge of the network?",
        "answers": [
          "service provider switches"
        ]
      },
      {
        "question": "Field replaceable line cards are a feature found on which type of switch?",
        "answers": [
          "modular"
        ]
      },
      {
        "question": "This is the term used to describe switches that can be interconnected and managed as one larger single switch.",
        "answers": [
          "stackable"
        ]
      },
      {
        "question": "This is the term used to describe the number of ports available on a single switch.",
        "answers": [
          "density"
        ]
      },
      {
        "question": "This is the term used to describe how much data a switch can process per second.",
        "answers": [
          "forwarding rate"
        ]
      },
      {
        "question": "Which type of switch supports routing protocols and can forward IP packets at close to Layer 2 forwarding rates?",
        "answers": [
          "multilayer"
        ]
      }
    ],
    "11.4.4": [
      {
        "question": "This type of router provides fast performance with high security for data centers, campus, and branch networks.",
        "answers": [
          "network edge routers"
        ]
      },
      {
        "question": "This type of router provides end-to-end delivery of subscriber services.",
        "answers": [
          "service provider routers"
        ]
      },
      {
        "question": "This type of router provides simple network configuration and management for LANs and WANs.",
        "answers": [
          "branch routers"
        ]
      },
      {
        "question": "This type of router is designed to provide enterprise-class features in rugged and harsh environments.",
        "answers": [
          "industrial routers"
        ]
      },
      {
        "question": "This type of router delivers next-generation internet experience across all devices and locations.",
        "answers": [
          "service provider routers"
        ]
      }
    ],
    "12.1.9": [
      {
        "question": "Which topology diagram displays IP addresses?",
        "answers": [
          "logical topology"
        ]
      },
      {
        "question": "Which document could be referenced to identify the OS on a server?",
        "answers": [
          "End-system Documentation"
        ]
      },
      {
        "question": "Which three statements will a network baseline answer? (Choose three.)",
        "answers": [
          "How does the network perform during a normal or average day?",
          "What part of the network is least used?",
          "What part of the network is most heavily used?"
        ]
      },
      {
        "question": "True or False? A network baseline never ends and continually gathers information on a yearly basis.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which command could be used to get detailed information about directly connected Cisco neighbor devices?",
        "answers": [
          "show cdp neighbor"
        ]
      }
    ],
    "12.2.8": [
      {
        "question": "Which option lists the three troubleshooting stages in the correct order?",
        "answers": [
          "Gather symptoms, isolate the problem, and implement corrective action."
        ]
      },
      {
        "question": "In which step of the seven-step troubleshooting process, would you create a rollback plan identifying how to quickly reverse a solution?",
        "answers": [
          "Test hypothesis"
        ]
      },
      {
        "question": "Which are recommendations to be used when communicate with a user?",
        "answers": [
          "All the above"
        ]
      },
      {
        "question": "During the gathering information step, which command would display the configured protocols and the global and interface-specific status of any configured Layer 3 protocol?",
        "answers": [
          "show protocols"
        ]
      },
      {
        "question": "What is the highest OSI layer that should be considered when troubleshooting routers and Layer 3 switches?",
        "answers": [
          "Layer 4"
        ]
      },
      {
        "question": "Which structured troubleshooting method should be used when a cabling problem is suspected?",
        "answers": [
          "Bottom-up Troubleshooting Method"
        ]
      },
      {
        "question": "Which structured troubleshooting method should be used when a software orientated problem occurs?",
        "answers": [
          "Top-down Troubleshooting Method"
        ]
      },
      {
        "question": "In which step, of the seven-step troubleshooting process, would you create a rollback plan identifying how to quickly reverse a solution?",
        "answers": [
          "test hypothesis"
        ]
      }
    ],
    "12.3.5": [
      {
        "question": "Which of these is an on-line network device vendor resource that can be used as a source of information?",
        "answers": [
          "Knowledge base"
        ]
      },
      {
        "question": "Which tool is useful to investigate packet content while flowing through the network?",
        "answers": [
          "Protocol analyzer"
        ]
      },
      {
        "question": "Which hardware troubleshooting tool is a multifunctional handheld device used to test and certify copper and fiber cables for different services and standards?",
        "answers": [
          "Cable Analyzer"
        ]
      },
      {
        "question": "Cisco IOS log messages fall into one of eight levels. Which syslog logging level is used to log the highest severity level?",
        "answers": [
          "0"
        ]
      }
    ],
    "12.4.7": [
      {
        "question": "Which OSI layer are you troubleshooting when the cause of network transmission errors is due to late collisions, short frames, and jabber?",
        "answers": [
          "Physical"
        ]
      },
      {
        "question": "Which OSI layer are you troubleshooting when investigating a spanning-tree loop?",
        "answers": [
          "Data link"
        ]
      },
      {
        "question": "Which OSI layer are you troubleshooting when investigating a routing protocol loop?",
        "answers": [
          "Network"
        ]
      },
      {
        "question": "Which OSI layer are you troubleshooting when investigating an extended ACL related problem?",
        "answers": [
          "Transport"
        ]
      },
      {
        "question": "Which OSI layer are you troubleshooting when investigating a DNS related problem?",
        "answers": [
          "Application"
        ]
      },
      {
        "question": "Which IOS command can be used to test if other network protocols are working?",
        "answers": [
          "telnet"
        ]
      }
    ],
    "13.1.6": [
      {
        "question": "Which cloud service provides programmers access to the development tool and services used to deliver applications?",
        "answers": [
          "PaaS"
        ]
      },
      {
        "question": "Which cloud service provides users with access to services such as email, communications, and Office 365 delivered over the internet?",
        "answers": [
          "SaaS"
        ]
      },
      {
        "question": "Which cloud service provides IT managers with access to network equipment, virtualized services, and a supporting network infrastructure?",
        "answers": [
          "IaaS"
        ]
      },
      {
        "question": "Which cloud model represents two or more clouds where each part remains a distinctive object, but both are connected using a single architecture?",
        "answers": [
          "hybrid cloud"
        ]
      },
      {
        "question": "Which cloud model is used to meet the needs of a specific industry, such as healthcare or media?",
        "answers": [
          "community cloud"
        ]
      }
    ],
    "13.2.7": [
      {
        "question": "What technology separates the OS from the hardware?",
        "answers": [
          "virtualization"
        ]
      },
      {
        "question": "What device uses all the RAM, processing power, and hard drive space devoted to one service?",
        "answers": [
          "dedicated server"
        ]
      },
      {
        "question": "Which technology is a program, firmware, or hardware that adds an abstraction layer on top of the physical hardware?",
        "answers": [
          "hypervisor"
        ]
      },
      {
        "question": "What are the major advantages of virtualization? (Choose three)",
        "answers": [
          "requires less equipment",
          "faster provisioning",
          "increased server uptime"
        ]
      },
      {
        "question": "Which technology is installed on top of the existing OS to create and run VM instances?",
        "answers": [
          "Type 2 Hypervisor"
        ]
      }
    ],
    "13.3.4": [
      {
        "question": "True or False. A Type 1 hypervisor is installed on top of the existing OS and is called the hosted approach.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "True of False. A Type 1 hypervisor requires a management console to manage the hypervisor.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "True or False. Management consoles prevent server over allocation.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "True of False. East-West traffic is exchanged between virtual servers in the same data center.",
        "answers": [
          "True"
        ]
      }
    ],
    "13.4.5": [
      {
        "question": "Which characteristic best describes the control plane of a networking device? (Choose three.)",
        "answers": [
          "Information sent to this plane is processed by the CPU.",
          "This plane makes forwarding decisions.",
          "This plane contains router protocol neighbor and topology tables."
        ]
      },
      {
        "question": "Which characteristics best describe the data plane of a networking device? (Choose three.)",
        "answers": [
          "This plane is used to forward traffic flows.",
          "Information in this plane is typically processed by a special processor.",
          "This plane is typically made up of a switch fabric connecting the various ports on a device."
        ]
      },
      {
        "question": "True of False. A network administrator accesses the control plane to configure a device.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "This network architecture offers a new approach to network administration and management that seeks to simplify and streamline the administration process.",
        "answers": [
          "SDN"
        ]
      },
      {
        "question": "This is a logical entity that enables network administrators to manage and dictate how the data plane of switches and routers should handle network traffic.",
        "answers": [
          "SDN controller"
        ]
      },
      {
        "question": "This is a standardized request from the SDN controller to define the behavior of the data plane.",
        "answers": [
          "Southbound APIs"
        ]
      }
    ],
    "13.5.8": [
      {
        "question": "This is a table that matches incoming packets to a particular flow and specifies the functions that are to be performed on the packet.",
        "answers": [
          "flow table"
        ]
      },
      {
        "question": "This is a table that triggers a variety of performance-related actions on a flow including the ability to rate-limit the traffic.",
        "answers": [
          "meter table"
        ]
      },
      {
        "question": "This type of SDN, a centralized location is responsible for managing devices throughout the network.",
        "answers": [
          "controller-based SDN"
        ]
      },
      {
        "question": "In this type of SDN, the devices are programmable by applications running on the device itself or on a server in the network.",
        "answers": [
          "device-based SDN"
        ]
      },
      {
        "question": "This type of SDN uses built-in applications that automate advanced configuration tasks via a guided workflow and user-friendly GUI. No programming skills are required.",
        "answers": [
          "policy-based SDN"
        ]
      }
    ],
    "14.1.4": [
      {
        "question": "You use online banking to pay a bill.",
        "answers": [
          "Not automation"
        ]
      },
      {
        "question": "Production levels are automatically tied to demand, eliminating unneeded product and reducing the impact on the environment.",
        "answers": [
          "Automation"
        ]
      },
      {
        "question": "Your GPS recalculates the best route to a destination based on current traffic congestion.",
        "answers": [
          "Automation"
        ]
      },
      {
        "question": "The temperature and lighting in your home is adjusted based on your daily routine.",
        "answers": [
          "Automation"
        ]
      },
      {
        "question": "A refrigerator senses that you are out of milk and places an order for more.",
        "answers": [
          "Automation"
        ]
      },
      {
        "question": "You adjust the volume on the television set with a remote control.",
        "answers": [
          "Not automation"
        ]
      },
      {
        "question": "Robots are used in dangerous conditions to reduce safety risks to humans.",
        "answers": [
          "Automation"
        ]
      },
      {
        "question": "You open your car door with a remote control.",
        "answers": [
          "Not automation"
        ]
      }
    ],
    "14.2.9": [
      {
        "question": "Which of the following data formats is typically used to display web pages?",
        "answers": [
          "HTML"
        ]
      },
      {
        "question": "Which of the following describes a key/value pair?",
        "answers": [
          "A key describes the data and the value is the data itself."
        ]
      },
      {
        "question": "TRUE or FALSE: White space in JSON format is significant and must be correctly formatted.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "This data format is a minimalist format that is very easy to read and is considered a superset of another data format.",
        "answers": [
          "YAML"
        ]
      },
      {
        "question": "This data format is self-descriptive through the use of the data structure.",
        "answers": [
          "XML"
        ]
      }
    ],
    "14.3.6": [
      {
        "question": "True or False: An API is a set of rules describing how one application can interact with another, and the instructions to allow the interaction to occur.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "Which of the following APIs would be used exclusively between Google and Cisco?",
        "answers": [
          "Partner API"
        ]
      },
      {
        "question": "Which of the following APIs is used by Cisco to provide access to students to complete labs?",
        "answers": [
          "Open or Public API"
        ]
      },
      {
        "question": "Which of the following APIs would be used exclusively between computing devices within Cisco?",
        "answers": [
          "Internal or Private API"
        ]
      },
      {
        "question": "Which of the following APIs provides flexible formatting and is the most widely used?",
        "answers": [
          "REST"
        ]
      }
    ],
    "14.4.7": [
      {
        "question": "An API in considered RESTful if it has which of the following features? (Choose three.)",
        "answers": [
          "Stateless",
          "Cacheable",
          "Client-Server"
        ]
      },
      {
        "question": "Which of the following is a URL?",
        "answers": [
          "https://www.cisco.com/c/en/us/solutions/design-zone.html"
        ]
      },
      {
        "question": "Which of the following is a URN?",
        "answers": [
          "www.cisco.com/c/en/us/solutions/design-zone.html"
        ]
      },
      {
        "question": "Which of the following is a URI?",
        "answers": [
          "https://www.cisco.com/c/en/us/solutions/design-zone.html#~all-guides"
        ]
      },
      {
        "question": "Which of the following make up the query portion of a RESTful request? (Choose three.)",
        "answers": [
          "Key",
          "Format",
          "Parameters"
        ]
      }
    ],
    "14.5.6": [
      {
        "question": "Which of the following are not typically used as configuration tools? (Choose two.)",
        "answers": [
          "API",
          "SNMP"
        ]
      },
      {
        "question": "Identify the term for the following definition in relationship to configuration management tools: Programmatically performing a task on a system such as configuring an interface or deploying a VLAN.",
        "answers": [
          "Automation"
        ]
      },
      {
        "question": "Identify the term for the following definition in relationship to configuration management tools: The process of how all automated activities need to happen, such as the order they must be done and what must be completed before another task is begun.",
        "answers": [
          "Orchestration"
        ]
      },
      {
        "question": "True or False: Agentless means that the controller or master pushes the configuration to the controlled device.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "Which of the following configuration management tools use Python? (Choose all that apply.)",
        "answers": [
          "Ansible",
          "SaltStack"
        ]
      }
    ],
    "14.6.10": [
      {
        "question": "Which IBN feature is responsible for continuous validation and verification that the network is meeting the expressed intent?",
        "answers": [
          "Assurance"
        ]
      },
      {
        "question": "Which IBN feature enables the network administrator to express the expected networking behavior that will best support the business intent?",
        "answers": [
          "Translation"
        ]
      },
      {
        "question": "Which IBN feature installs policies that capture intent into the physical and virtual network infrastructure using networkwide automation?",
        "answers": [
          "Activation"
        ]
      },
      {
        "question": "True or False: The underlay limits the number of devices the network administrator must program. It also provides services and alternative forwarding methods not controlled by the underlying physical devices.",
        "answers": [
          "False"
        ]
      }
    ]
};

const QUIZ_DB = {
    "1.4.2": [
      {
        "question": "What is a function of OSPF hello packets?",
        "answers": [
          "to discover neighbors and build adjacencies between them"
        ]
      },
      {
        "question": "Which OSPF packet contains the different types of link-state advertisements?",
        "answers": [
          "LSU"
        ]
      },
      {
        "question": "Which statements describe features of the OSPF topology table? (Choose three.)",
        "answers": [
          "The table can be viewed via the show ip ospf database command.",
          "It is a link-state database that represents the network topology.",
          "When converged, all routers in an area have identical topology tables."
        ]
      },
      {
        "question": "What does an OSPF area contain?",
        "answers": [
          "routers that have the same link-state information in their LSDBs"
        ]
      },
      {
        "question": "A router is participating in an OSPFv2 domain. What will always happen if the dead interval expires before the router receives a hello packet from an adjacent DROTHER OSPF router?",
        "answers": [
          "OSPF will remove that neighbor from the router link-state database."
        ]
      },
      {
        "question": "What is the order of packet types used by an OSPF router to establish convergence?",
        "answers": [
          "Hello, DBD, LSR, LSU, LSAck"
        ]
      },
      {
        "question": "What is a feature of the OSPF routing protocol?​",
        "answers": [
          "It scales well in both small and large networks."
        ]
      },
      {
        "question": "What is used to create the OSPF neighbor table?",
        "answers": [
          "adjacency database"
        ]
      },
      {
        "question": "What is identical on all OSPF routers within a single area?",
        "answers": [
          "link-state database"
        ]
      },
      {
        "question": "What function is performed by the OSPF designated router?",
        "answers": [
          "dissemination of LSAs"
        ]
      },
      {
        "question": "What are two reasons for creating an OSPF network with multiple areas? (Choose two.)",
        "answers": [
          "to reduce use of memory and processor resources",
          "to reduce SPF calculations"
        ]
      },
      {
        "question": "At which OSPF state are neighbor routers converged and able to exchange routing updates?",
        "answers": [
          "Full"
        ]
      },
      {
        "question": "The OSPF hello timer has been set to 15 seconds on a router in a point-to-point network. By default, what is the dead interval on this router?",
        "answers": [
          "60 seconds"
        ]
      },
      {
        "question": "What happens immediately after two OSPF routers have exchanged hello packets and have formed a neighbor adjacency?",
        "answers": [
          "They exchange abbreviated lists of their LSDBs."
        ]
      },
      {
        "question": "Which statement is correct about multiarea OSPF?",
        "answers": [
          "Arranging routers into areas partitions a large autonomous system in order to lighten the load on routers."
        ]
      },
      {
        "question": "Which OSPF data structure is identical in all routers in an OSPF area after convergence?",
        "answers": [
          "Link-state database"
        ]
      },
      {
        "question": "What are the purposes of an OSPF router ID? (Choose two.)",
        "answers": [
          "To facilitate router participation in the election of the designated router",
          "To uniquely identify the router within the OSPF domain"
        ]
      },
      {
        "question": "Which statement describes a multiarea OSPF network?",
        "answers": [
          "It has a core backbone area with other areas connected to the backbone area."
        ]
      },
      {
        "question": "What are the advantages of using multiarea OSPF? (Choose two.)",
        "answers": [
          "It improves routing efficiency by reducing the routing table and linkstate update overhead.",
          "Topology changes in one area do not cause SPF recalculations in other areas."
        ]
      },
      {
        "question": "Which command can be used to verify the contents of the LSDB in an OSPF area?",
        "answers": [
          "show ip ospf database"
        ]
      },
      {
        "question": "Which of the following facilitates hierarchical routing in OSPF?",
        "answers": [
          "4. The use of multiple areas"
        ]
      },
      {
        "question": "Which step does an OSPF-enabled router take immediately after the OSPF router builds the topology table?",
        "answers": [
          "Executes the SPF algorithm"
        ]
      },
      {
        "question": "Which type of OSPFv2 packet contains an abbreviated list of the LSDB of a sending router and is used by receiving routers to check against the local LSDB?",
        "answers": [
          "Database Description"
        ]
      },
      {
        "question": "Which OSPF states are performed prior to two routers forming a neighbor adjacency? (Choose three.)",
        "answers": [
          "Down",
          "Init",
          "Two-Way"
        ]
      },
      {
        "question": "In an OSPF network, when are DR and BDR elections required?",
        "answers": [
          "When the routers are interconnected over a common Ethernet network"
        ]
      },
      {
        "question": "When an OSPF network is converged and no network topology change has been detected by a router, how often are LSU packets sent to neighboring routers?",
        "answers": [
          "Every 30 minutes"
        ]
      }
    ],
    "2.7.5": [
      {
        "question": "Which criterion is preferred by the router to choose a router ID?",
        "answers": [
          "the router-id rid command"
        ]
      },
      {
        "question": "Which wildcard mask would be used to advertise the 192.168.5.96/27 network as part of an OSPF configuration?",
        "answers": [
          "0.0.0.31"
        ]
      },
      {
        "question": "The following three networks are directly connected to an OSPF router; 192.168.0.0/24, 192.168.1.0/24, and 192.168.2.0/24. Which OSPF network command would advertise only the 192.168.1.0 network to neighbors?",
        "answers": [
          "router(config-router)# network 192.168.1.0 0.0.0.255 area 0"
        ]
      },
      {
        "question": "Which three parameters should match in order for a pair of routers to form an adjacency when running OSPFv2? (Choose three.)",
        "answers": [
          "OSPFv2 type of network",
          "hello timer",
          "subnet mask"
        ]
      },
      {
        "question": "What are two features of the OSPF routing protocol? (Choose two.)",
        "answers": [
          "uses Dijkstra’s algorithm to build the SPF tree",
          "calculates its metric using bandwidth"
        ]
      },
      {
        "question": "A router with two LAN interfaces, two WAN interfaces, and one configured loopback interface is operating with OSPF as its routing protocol. What does the router OSPF process use to assign the router ID?",
        "answers": [
          "the loopback interface IP address"
        ]
      },
      {
        "question": "Which verification command would identify the specific interfaces on a router that were configured with the passive-interface command?",
        "answers": [
          "show ip protocols"
        ]
      },
      {
        "question": "Which command, if applied on an OSPF router, would give a Gigabit Ethernet interface a lower cost than a Fast Ethernet interface?",
        "answers": [
          "(config-router)# auto-cost reference-bandwidth 1000"
        ]
      },
      {
        "question": "A network administrator has just changed the router ID on a router that is working in an OSPFv2 environment. What should the administrator do to reset the adjacencies and use the new router ID?",
        "answers": [
          "Issue the clear ip ospf process privileged mode command."
        ]
      },
      {
        "question": "Which command can be used to view the OSPF hello and dead time intervals?",
        "answers": [
          "show ip ospf interface"
        ]
      },
      {
        "question": "What does the SPF algorithm consider to be the best path to a network?",
        "answers": [
          "The path that includes the fastest cumulative bandwidth links."
        ]
      },
      {
        "question": "What is one use of the router ID in OSPF routing?",
        "answers": [
          "The router ID can be used to break a tie in the election process."
        ]
      },
      {
        "question": "What is the first criterion used by OSPF routers to elect a DR?",
        "answers": [
          "highest priority"
        ]
      },
      {
        "question": "Which command could be used on a router to ensure that an OSPF adjacency is formed with another router?",
        "answers": [
          "show ip ospf neighbor"
        ]
      },
      {
        "question": "A router in an OSPF enterprise network has a default static route that has been configured via the interface that connects to the ISP. Which command would the network administrator apply on this router so that other routers in the OSPF network will use this default route?",
        "answers": [
          "default-information originate"
        ]
      },
      {
        "question": "A router is participating in an OSPFv2 domain. What will always happen if the Dead interval expires before the router receives a Hello packet from an adjacent OSPF router?",
        "answers": [
          "OSPF will remove that neighbor from the router’s link-state database."
        ]
      },
      {
        "question": "Which command would be used to determine if an OSPF routing protocol- initiated relationship had been made with an adjacent router?",
        "answers": [
          "show ip ospf neighbor"
        ]
      },
      {
        "question": "Which command is used to verify the OSPFv2 router ID, the interfaces explicitly configured to advertise OSPF routes, the passive interfaces, the neighbors the router is receiving updates from, and the default administrative distance, which is 110 for OSPF?",
        "answers": [
          "show ip protocols"
        ]
      },
      {
        "question": "Two OSPFv2 routers are interconnected using a point-to-point WAN link.Which command could be used to verify the configured Hello and Dead timer intervals?",
        "answers": [
          "show ip ospf interface serial 0/0/0"
        ]
      },
      {
        "question": "You are troubleshooting convergence and adjacency issues in an OSPFv2 network and have noticed that network route entries are missing from the routing table. Which commands provide additional information about the state of router adjacencies, timer intervals, and the area ID? (Choose two.)",
        "answers": [
          "show ip ospf interface",
          "show ip ospf neighbor"
        ]
      },
      {
        "question": "A network engineer has manually configured the Hello interval to 15 seconds on an interface of a router that is running OSPFv2. By default, how will the Dead interval on the interface be affected?",
        "answers": [
          "The Dead interval will now be 60 seconds."
        ]
      },
      {
        "question": "To establish a neighbor adjacency, two OSPF routers exchange Hello packets. Which values in the Hello packets must match on the two routers? (Choose two.)",
        "answers": [
          "1. Dead interval",
          "2. Hello interval"
        ]
      },
      {
        "question": "What is the default router priority value for all Cisco OSPF routers?",
        "answers": [
          "1"
        ]
      },
      {
        "question": "What indicates to a link-state router that a neighbor is unreachable?",
        "answers": [
          "The router no longer receives Hello packets."
        ]
      },
      {
        "question": "Which of the following will OSPF use when it chooses its router ID?",
        "answers": [
          "A loopback interface that is configured with the highest IP address on the router"
        ]
      },
      {
        "question": "An OSPF router has three directly connected networks; 10.1.0.0/16, 10.1.1.0/16, and 10.1.2.0/16. Which OSPF network command would advertise only the 10.1.1.0 network to neighbors?",
        "answers": [
          "router(config-router)# network 10.1.1.0 0.0.0.255 area 0"
        ]
      },
      {
        "question": "By default, what is the OSPF cost for a link with Gigabit Ethernet interfaces?",
        "answers": [
          "1"
        ]
      },
      {
        "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 64.100.1.64 255.255.255.192. Which OSPF network statement should be configured?",
        "answers": [
          "network 64.100.1.64 0.0.0.63 area 0"
        ]
      },
      {
        "question": "Which of these factors will prevent two routers from forming an OSPFv2 adjacency? (Choose two.)",
        "answers": [
          "Mismatched OSPF Hello or Dead timers",
          "Mismatched subnet masks on the link interfaces"
        ]
      }
    ],
    "3.11.3": [
      {
        "question": "The IT department is reporting that a company web server is receiving an abnormally high number of web page requests from different locations simultaneously. Which type of security attack is occurring?",
        "answers": [
          "DDoS"
        ]
      },
      {
        "question": "What causes a buffer overflow?",
        "answers": [
          "attempting to write more data to a memory location than that location can hold"
        ]
      },
      {
        "question": "Which objective of secure communications is achieved by encrypting data?",
        "answers": [
          "confidentiality"
        ]
      },
      {
        "question": "What type of malware has the primary objective of spreading across the network?",
        "answers": [
          "worm"
        ]
      },
      {
        "question": "Which algorithm can ensure data confidentiality?",
        "answers": [
          "AES"
        ]
      },
      {
        "question": "What three items are components of the CIA triad? (Choose three.)",
        "answers": [
          "confidentiality",
          "integrity",
          "availability"
        ]
      },
      {
        "question": "Which cyber attack involves a coordinated attack from a botnet of zombie computers?",
        "answers": [
          "DDoS"
        ]
      },
      {
        "question": "What specialized network device is responsible for enforcing access control policies between networks?",
        "answers": [
          "firewall"
        ]
      },
      {
        "question": "To which category of security attacks does man-in-the-middle belong?",
        "answers": [
          "access"
        ]
      },
      {
        "question": "What is the role of an IPS?",
        "answers": [
          "to detect patterns of malicious traffic by the use of signature files"
        ]
      },
      {
        "question": "Which type of DNS attack involves the cybercriminal compromising a parent domain and creating multiple subdomains to be used during the attacks?",
        "answers": [
          "shadowing"
        ]
      },
      {
        "question": "Which two types of hackers are typically classified as grey hat hackers? (Choose two.)",
        "answers": [
          "vulnerability brokers",
          "hacktivists"
        ]
      },
      {
        "question": "What is a significant characteristic of virus malware?",
        "answers": [
          "A virus is triggered by an event on the host system."
        ]
      },
      {
        "question": "A cleaner attempts to enter a computer lab but is denied entry by the receptionist because there is no scheduled cleaning for that day. What type of attack was just prevented?",
        "answers": [
          "social engineering"
        ]
      },
      {
        "question": "Which network security statement is true?",
        "answers": [
          "Internal threats can cause greater damage than external threats."
        ]
      },
      {
        "question": "What commonly motivates cybercriminals to attack networks as compared to hacktivists or statesponsored hackers?",
        "answers": [
          "Financial gain"
        ]
      },
      {
        "question": "Which type of hacker is motivated by protesting political and social issues?",
        "answers": [
          "Hacktivist"
        ]
      },
      {
        "question": "What is Trojan horse malware?",
        "answers": [
          "It is software that appears useful but includes malicious code."
        ]
      },
      {
        "question": "A user receives a call from someone in IT services, asking her to confirm her username and password for auditing purposes. Which security threat does this represent?",
        "answers": [
          "Social engineering"
        ]
      },
      {
        "question": "What is a ping sweep?",
        "answers": [
          "A network scanning technique that involves identifying active IP addresses"
        ]
      },
      {
        "question": "How are zombies used in security attacks?",
        "answers": [
          "Zombies are infected machines that carry out a DDoS attack."
        ]
      },
      {
        "question": "What is used to decrypt data that has been encrypted using an asymmetric encryption algorithm public key?",
        "answers": [
          "A private key"
        ]
      },
      {
        "question": "What are the SHA hash generating algorithms used for?",
        "answers": [
          "Integrity"
        ]
      },
      {
        "question": "Which of the following is true of an IPS?",
        "answers": [
          "It can stop malicious packets."
        ]
      },
      {
        "question": "What is the term used to describe unethical criminals who compromise computer and network security for personal gain or for malicious reasons?",
        "answers": [
          "Black hat hackers"
        ]
      },
      {
        "question": "What is the term used to describe a potential danger to a company’s assets, data, or network functionality?",
        "answers": [
          "Threat"
        ]
      },
      {
        "question": "What term is used to describe a guarantee that a message is not a forgery and does actually come from the person who is supposed to have sent it?",
        "answers": [
          "Origin authentication"
        ]
      },
      {
        "question": "What term is used to describe a mechanism that takes advantage of a vulnerability?",
        "answers": [
          "Exploit"
        ]
      },
      {
        "question": "Which of the following guarantees that the sender cannot repudiate, or refute, the validity of a message sent?",
        "answers": [
          "Data nonrepudiation"
        ]
      }
    ],
    "4.5.2": [
      {
        "question": "Which two conditions would cause a router to drop a packet? (Choose two.)",
        "answers": [
          "No routing table entry exists for the packet destination, but the packet matches a permitted address in an outbound ACL.",
          "The packet source address does not match the source as permitted in a standard inbound ACE."
        ]
      },
      {
        "question": "A network administrator configures an ACL with the command R1(config)# access-list 1 permit 172.16.0.0 0.0.15.255. Which two IP addresses will match this ACL statement? (Choose two.)",
        "answers": [
          "172.16.0.255",
          "172.16.15.36"
        ]
      },
      {
        "question": "Which two statements describe appropriate general guidelines for configuring and applying ACLs? (Choose two.)",
        "answers": [
          "The most specific ACL statements should be entered first because of the top-down sequential nature of ACLs.",
          "If an ACL contains no permit statements, all traffic is denied by default."
        ]
      },
      {
        "question": "What single access list statement matches all of the following networks?",
        "answers": [
          "access-list 10 permit 192.168.16.0 0.0.3.255"
        ]
      },
      {
        "question": "Which three statements describe ACL processing of packets? (Choose three.)",
        "answers": [
          "A packet can either be rejected or forwarded as directed by the ACE that is matched.",
          "Each statement is checked only until a match is detected or until the end of the ACE list.",
          "An implicit deny any rejects any packet that does not match any ACE."
        ]
      },
      {
        "question": "A network administrator is configuring an ACL to restrict access to certain servers in the data center. The intent is to apply the ACL to the interface connected to the data center LAN. What happens if the ACL is incorrectly applied to an interface in the inbound direction instead of the outbound direction?",
        "answers": [
          "The ACL does not perform as designed."
        ]
      },
      {
        "question": "Which scenario would cause an ACL misconfiguration and deny all traffic?",
        "answers": [
          "Apply an ACL that has all deny ACE statements."
        ]
      },
      {
        "question": "In applying an ACL to a router interface, which traffic is designated as outbound?",
        "answers": [
          "traffic that is leaving the router and going toward the destination host"
        ]
      },
      {
        "question": "When creating an ACL, which keyword should be used to document and interpret the purpose of the ACL statement on a Cisco device?​",
        "answers": [
          "remark"
        ]
      },
      {
        "question": "Which location is recommended for extended numbered or extended named ACLs?",
        "answers": [
          "a location as close to the source of traffic as possible"
        ]
      },
      {
        "question": "Which range represents all the IP addresses that are affected when network 10.120.160.0 with a wildcard mask of 0.0.7.255 is used in an ACE?",
        "answers": [
          "10.120.160.0 to 10.120.167.255"
        ]
      },
      {
        "question": "A college student is studying for the Cisco CCENT certification and is visualizing extended access lists. Which three keywords could immediately follow the keywords permit or deny as part of an extended access list? (Choose three.)",
        "answers": [
          "tcp",
          "udp",
          "icmp"
        ]
      },
      {
        "question": "If the provided ACEs are in the same ACL, which ACE should be listed first in the ACL according to best practice?",
        "answers": [
          "permit udp 172.16.0.0 0.0.255.255 host 172.16.1.5 eq snmptrap"
        ]
      },
      {
        "question": "Which operator is used in an ACL statement to match packets of a specific application?",
        "answers": [
          "eq"
        ]
      },
      {
        "question": "What two functions describe uses of access control lists? (Choose two.)",
        "answers": [
          "ACLs can control which areas a host can access on a network.",
          "ACLs provide a basic level of security for network access."
        ]
      },
      {
        "question": "Which three statements describe how an ACL processes packets? (Choose three.)",
        "answers": [
          "An implicit deny at the end of an ACL rejects any packet that does not match an ACE.",
          "Each ACE is checked only until a match is detected or until the end of the ACL.",
          "If an ACE is matched, the packet is either rejected or forwarded, as directed by the ACE."
        ]
      },
      {
        "question": "Which three statements are best practices related to placement of ACLs? (Choose three.)",
        "answers": [
          "Filter unwanted traffic before it travels onto a low-bandwidth link.",
          "Place extended ACLs close to the source IP address of the traffic.",
          "Place standard ACLs close to the destination IP address of the traffic."
        ]
      },
      {
        "question": "Which two characteristics are shared by standard and extended ACLs? (Choose two.)",
        "answers": [
          "Both include an implicit deny as a final entry.",
          "They can be created by using either descriptive names or numbers."
        ]
      },
      {
        "question": "Which two statement describes a difference between the operation of inbound and outbound ACLs? (Choose two.)",
        "answers": [
          "Inbound ACLs are processed before the packets are routed.",
          "Outbound ACLs are processed after the routing is completed."
        ]
      },
      {
        "question": "In which configuration would an outbound ACL placement be preferred over an inbound ACL placement?",
        "answers": [
          "When the ACL is applied to an outbound interface to filter packets coming from multiple inbound interfaces before the packets exit the interface"
        ]
      },
      {
        "question": "What wildcard mask will match networks 10.16.0.0 through 10.19.0.0?",
        "answers": [
          "0.3.255.255"
        ]
      },
      {
        "question": "What type of ACL offers increased flexibility and control over network traffic?",
        "answers": [
          "Extended"
        ]
      },
      {
        "question": "Which statement describes a characteristic of standard IPv4 ACLs?",
        "answers": [
          "They filter traffic based on source IP addresses only."
        ]
      },
      {
        "question": "What wildcard mask will match network 10.10.100.64/26?",
        "answers": [
          "0.0.0.63"
        ]
      }
    ],
    "5.5.4": [
      {
        "question": "The computers used by the network administrators for a school are on the 10.7.0.0/27 network. Which two commands are needed at a minimum to apply an ACL that will ensure that only devices that are used by the network administrators will be allowed Telnet access to the routers? (Choose two.)",
        "answers": [
          "access-class 5 in",
          "access-list 5 permit 10.7.0.0 0.0.0.31"
        ]
      },
      {
        "question": "Consider the configured access list.",
        "answers": [
          "Any device on the 10.1.1.0/24 network (except the 10.1.1.2 device) can telnet to the router that has the IP address 10.1.1.1 assigned.",
          "The access list has been applied to an interface."
        ]
      },
      {
        "question": "Which command will verify the number of packets that are permitted or denied by an ACL that restricts SSH access?",
        "answers": [
          "show access-lists"
        ]
      },
      {
        "question": "Which access list statement permits HTTP traffic that is sourced from host 10.1.129.100 port 4300 and destined to host 192.168.30.10?",
        "answers": [
          "access-list 101 permit tcp 10.1.128.0 0.0.1.255 eq 4300 192.168.30.0 0.0.0.15 eq www"
        ]
      },
      {
        "question": "When configuring router security, which statement describes the most effective way to use ACLs to control Telnet traffic that is destined to the router itself?",
        "answers": [
          "The ACL should be applied to all vty lines in the in direction to prevent an unwanted user from connecting to an unsecured port."
        ]
      },
      {
        "question": "What packets would match the access control list statement that is shown below?",
        "answers": [
          "SSH traffic from the 172.16.0.0 network to any destination network"
        ]
      },
      {
        "question": "Consider the access list command applied outbound on a router serial interface.",
        "answers": [
          "No traffic will be allowed outbound on the serial interface."
        ]
      },
      {
        "question": "Consider the following output for an ACL that has been applied to a router via the access-class in command. What can a network administrator determine from the output that is shown?",
        "answers": [
          "Two devices were able to use SSH or Telnet to gain access to the router."
        ]
      },
      {
        "question": "Which two commands will configure a standard ACL? (Choose two.)",
        "answers": [
          "Router(config)# access-list 35 permit host 172.31.22.7",
          "Router(config)# access-list 90 permit 192.168.10.5 0.0.0.0"
        ]
      },
      {
        "question": "To facilitate the troubleshooting process, which inbound ICMP message should be permitted on an outside interface?",
        "answers": [
          "echo reply"
        ]
      },
      {
        "question": "What two ACEs could be used to deny IP traffic from a single source host 10.1.1.1 to the 192.168.0.0/16 network? (Choose two.)",
        "answers": [
          "access-list 100 deny ip host 10.1.1.1 192.168.0.0 0.0.255.255",
          "access-list 100 deny ip 10.1.1.1 0.0.0.0 192.168.0.0 0.0.255.255"
        ]
      },
      {
        "question": "An administrator has configured an access list on R1 to allow SSH administrative access from host 172.16.1.100. Which command correctly applies the ACL?",
        "answers": [
          "R1(config-line)# access-class 1 in"
        ]
      },
      {
        "question": "Which two keywords can be used in an access control list to replace a wildcard mask or address and wildcard mask pair? (Choose two.)",
        "answers": [
          "any",
          "host"
        ]
      },
      {
        "question": "Which two packet filters could a network administrator use on an IPv4 extended ACL? (Choose two.)",
        "answers": [
          "Destination UDP port number",
          "ICMP message type"
        ]
      },
      {
        "question": "In the second ACE shown in the following example, port 400 was incorrectly specified instead of port 443. What is the best way to correct this error?",
        "answers": [
          "Enter the no 20 keyword, and then enter permit tcp 192.168.10.0 0.0.0.255 any eq 443."
        ]
      },
      {
        "question": "A network administrator needs to configure a standard ACL so that only the workstation of the administrator with the IP address 10.1.1.10 can access the virtual terminal of the main router. Which two configuration commands can achieve the task? (Choose two.)",
        "answers": [
          "R1(config)# access-list 10 permit host 10.1.1.10",
          "R1(config)# access-list 10 permit 10.1.1.10 0.0.0.0"
        ]
      },
      {
        "question": "A network administrator is writing a standard ACL to deny any traffic from the 10.10.0.0/16 network but permit all other traffic. Which two commands should be used? (Choose two.)",
        "answers": [
          "R1(config)# access-list 55 permit any",
          "R1(config)# access-list 55 deny 10.10.0.0 0.0.255.255"
        ]
      },
      {
        "question": "In the following example, you forgot to enter an ACE to deny the user at IP address 192.168.10.10. Which command would correctly enter the ACE to filter this address?",
        "answers": [
          "5 deny ip host 192.168.10.10"
        ]
      },
      {
        "question": "You create a standard ACL called PERMIT-VTY to permit only an administrative host vty access to the router. Which line configuration command would correctly apply this ACL to the vty lines?",
        "answers": [
          "access-class PERMIT-VTY in"
        ]
      },
      {
        "question": "What effect does the permit tcp 10.10.100 0.0.0.255 any eq www extended named ACE have when implemented inbound on a G0/0 interface?",
        "answers": [
          "Traffic originating from 10.10.100/24 is permitted to all TCP port 80 destinations."
        ]
      },
      {
        "question": "What does the CLI prompt change to after you enter the command ip access-list extended AAAFILTER in global configuration mode?",
        "answers": [
          "R1(config-ext-nacl)#"
        ]
      }
    ],
    "6.8.4": [
      {
        "question": "Which two statements accurately describe an advantage or a disadvantage when deploying NAT for IPv4 in a network? (Choose two.)",
        "answers": [
          "NAT introduces problems for some applications that require end-to-end connectivity.",
          "NAT provides a solution to slow down the IPv4 address depletion."
        ]
      },
      {
        "question": "A network administrator wants to examine the active NAT translations on a border router. Which command would perform the task?",
        "answers": [
          "Router# show ip nat translations"
        ]
      },
      {
        "question": "What are two tasks to perform when configuring static NAT? (Choose two.)",
        "answers": [
          "Identify the participating interfaces as inside or outside interfaces.",
          "Create a mapping between the inside local and inside global addresses."
        ]
      },
      {
        "question": "What is a disadvantage of NAT?",
        "answers": [
          "There is no end-to-end addressing."
        ]
      },
      {
        "question": "What is one advantage of using NAT at the edge of the network?",
        "answers": [
          "Changing ISPs is simpler because the devices on the inside network do not have to be configured with new addresses when the outside address changes."
        ]
      },
      {
        "question": "What benefit does NAT64 provide?",
        "answers": [
          "It allows sites to connect IPv6 hosts to an IPv4 network by translating the IPv6 addresses to IPv4 addresses."
        ]
      },
      {
        "question": "What address translation is performed by static NAT?",
        "answers": [
          "An inside local address is translated to a specified inside global address."
        ]
      },
      {
        "question": "Using NAT terminology, what is the address of the source host on a private network as seen from inside the network?",
        "answers": [
          "inside local"
        ]
      },
      {
        "question": "Which statement accurately describes dynamic NAT?",
        "answers": [
          "It provides an automated mapping of inside local to inside global IP addresses."
        ]
      },
      {
        "question": "Why is NAT not needed in IPv6?​",
        "answers": [
          "Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large."
        ]
      },
      {
        "question": "A company designs its network so that the PCs in the internal network are assigned IP addresses from DHCP servers, and the packets that are sent to the Internet are translated through a NAT-enabled router. What type of NAT enables the router to populate the translation table from a pool of unique public addresses, as the PCs send packets through the router to the Internet?",
        "answers": [
          "dynamic NAT"
        ]
      },
      {
        "question": "What is a security feature of using NAT on a network?",
        "answers": [
          "allows internal IP addresses to be concealed from external users"
        ]
      },
      {
        "question": "When dynamic NAT without overloading is being used, what happens if seven users attempt to access a public server on the Internet when only six addresses are available in the NAT pool?",
        "answers": [
          "The request to the server for the seventh user fails."
        ]
      },
      {
        "question": "A company has been assigned the 203.0.113.0/27 block of IP addresses by the ISP. The company has over 6000 internal devices. What type of NAT would be most appropriate for the employee workstations of the company?",
        "answers": [
          "dynamic NAT overload using the pool of addresses"
        ]
      },
      {
        "question": "Which version of NAT allows many hosts inside a private network to simultaneously use a single inside global address for connecting to the Internet?",
        "answers": [
          "PAT"
        ]
      },
      {
        "question": "Typically, which network device would be used to perform NAT for a corporate environment?",
        "answers": [
          "Router"
        ]
      },
      {
        "question": "When NAT is used in a small office, which address type or types are typically used for hosts on the local LAN?",
        "answers": [
          "Private IPv4 addresses"
        ]
      },
      {
        "question": "Which type of NAT maps a single inside local address to a single inside global address?",
        "answers": [
          "Static NAT"
        ]
      },
      {
        "question": "A network administrator configures the border router with the ip nat inside source list 4 pool NAT-POOL global configuration command. What is required to be configured in order for this particular command to be functional?",
        "answers": [
          "A NAT pool named NAT-POOL that defines the starting and ending public IPv4 addresses"
        ]
      },
      {
        "question": "Which configuration would be appropriate for a small business that has the public IPv4 address 209.165.200.225/30 assigned to the external interface on the router that connects to the internet?",
        "answers": [
          "access-list 1 permit 10.0.0.0 0.255.255.255\nip nat inside source list 1 interface serial 0/0/0 overload"
        ]
      },
      {
        "question": "What are two of the required steps to configure PAT? (Choose two.)",
        "answers": [
          "Define a pool of global addresses to be used for overload translation.",
          "Identify the inside interface."
        ]
      },
      {
        "question": "What is the name for the public IPv4 addresses used on a NAT-enabled router?",
        "answers": [
          "Inside global addresses"
        ]
      }
    ],
    "7.6.3": [
      {
        "question": "A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this scenario?",
        "answers": [
          "WAN"
        ]
      },
      {
        "question": "What is the recommended technology to use over a public WAN infrastructure when a branch office is connected to the corporate site?",
        "answers": [
          "VPN"
        ]
      },
      {
        "question": "Which medium do service providers use to transmit data over WAN connections with SONET, SDH, and DWDM?",
        "answers": [
          "fiber optic"
        ]
      },
      {
        "question": "Which statement describes a characteristic of a WAN?",
        "answers": [
          "WAN networks are owned by service providers."
        ]
      },
      {
        "question": "Which type of network would be used by a company to connect locations across the country?",
        "answers": [
          "WAN"
        ]
      },
      {
        "question": "A small company with 10 employees uses a single LAN to share information between computers. Which type of connection to the Internet would be appropriate for this company?",
        "answers": [
          "a broadband service, such as DSL, through their local service provider"
        ]
      },
      {
        "question": "To which two layers of the OSI model do WAN technologies provide services? (Choose two.)",
        "answers": [
          "data link layer",
          "physical layer"
        ]
      },
      {
        "question": "A customer needs a metropolitan area WAN connection that provides high-speed, dedicated bandwidth between two sites. Which type of WAN connection would best fulfill this need?",
        "answers": [
          "Ethernet WAN"
        ]
      },
      {
        "question": "An intercity bus company wants to offer constant Internet connectivity to the users traveling on the buses. Which two types of WAN infrastructure would meet the requirements? (Choose two.)",
        "answers": [
          "cellular",
          "public infrastructure"
        ]
      },
      {
        "question": "An enterprise has four branches. The headquarters needs full connectivity to all branches. The branches do not need to be connected directly to each other. Which WAN topology is most suitable?",
        "answers": [
          "hub and spoke"
        ]
      },
      {
        "question": "What is a characteristic of a WAN?",
        "answers": [
          "WAN service providers include carriers such as a telephone network or satellite service."
        ]
      },
      {
        "question": "What are two common types of circuit-switched WAN technologies? (Choose two.)",
        "answers": [
          "ISDN",
          "PSTN"
        ]
      },
      {
        "question": "A new corporation needs a data network that must meet certain requirements. The network must provide a low cost connection to sales people dispersed over a large geographical area. Which two types of WAN infrastructure would meet the requirements? (Choose two.)",
        "answers": [
          "public infrastructure",
          "Internet"
        ]
      },
      {
        "question": "Which type of internet connection would be suitable for a small 10-employee company with one local LAN?",
        "answers": [
          "A broadband DSL or cable connection to a service provider"
        ]
      },
      {
        "question": "Which network scenario requires the use of a WAN?",
        "answers": [
          "Traveling employees must connect to the corporate email server using a VPN."
        ]
      },
      {
        "question": "Which device is needed when a digital leased line is used to provide a connection between a customer and a service provider?",
        "answers": [
          "CSU/DSU"
        ]
      },
      {
        "question": "What is a requirement of a connectionless packetswitched network?",
        "answers": [
          "Full addressing information must be carried in each data packet."
        ]
      },
      {
        "question": "What is an advantage of packet-switching technology over circuit-switching technology?",
        "answers": [
          "Packet-switched networks can efficiently use multiple routes inside a service provider network."
        ]
      },
      {
        "question": "What is a long-distance fiber-optic media technology that supports both SONET and SDH and assigns incoming optical signals to specific wavelengths of light?",
        "answers": [
          "DWDM"
        ]
      },
      {
        "question": "What are two common high-bandwidth fiber-optic media standards? (Choose two.)",
        "answers": [
          "SDH",
          "SONET"
        ]
      },
      {
        "question": "Which WAN technology establishes a dedicated constant point-to-point connection between two sites?",
        "answers": [
          "Leased lines"
        ]
      },
      {
        "question": "A hospital is looking for a solution to connect multiple newly established remote branch medical offices. Which of the following is most important when selecting a private WAN connection rather than a public WAN connection?",
        "answers": [
          "Data security and confidentiality during transmission"
        ]
      },
      {
        "question": "Which wireless technology provides internet access through cellular networks?",
        "answers": [
          "LTE"
        ]
      },
      {
        "question": "Which equipment is needed for an ISP to provide internet connections through cable service?",
        "answers": [
          "CMTS"
        ]
      }
    ],
    "8.4.2": [
      {
        "question": "Which two statements describe a remote access VPN? (Choose two.)",
        "answers": [
          "It is used to connect individual hosts securely to a company network over the Internet.",
          "It may require VPN client software on hosts."
        ]
      },
      {
        "question": "The use of 3DES within the IPsec framework is an example of which of the five IPsec building blocks?",
        "answers": [
          "confidentiality"
        ]
      },
      {
        "question": "Which type of VPN may require the Cisco VPN Client software?",
        "answers": [
          "remote access VPN"
        ]
      },
      {
        "question": "Which technique is necessary to ensure a private transfer of data using a VPN?",
        "answers": [
          "encryption"
        ]
      },
      {
        "question": "What are the two fundamental Dynamic Multipoint VPN tunnel types? (Choose two.)",
        "answers": [
          "hub-to-spoke",
          "spoke-to-spoke"
        ]
      },
      {
        "question": "What are two reasons a company would use a VPN? (Choose two.)",
        "answers": [
          "to connect remote users to the network",
          "to allow suppliers to access the network"
        ]
      },
      {
        "question": "True or False? All VPNs securely transmit clear text across the Internet.",
        "answers": [
          "false"
        ]
      },
      {
        "question": "Which solution allows workers to telecommute effectively and securely?",
        "answers": [
          "remote-access VPN"
        ]
      },
      {
        "question": "Which VPN type is a service provider managed VPN?",
        "answers": [
          "Layer 3 MPLS VPN"
        ]
      },
      {
        "question": "Which IPsec framework protocol provides data integrity and data authentication, but does not provide data confidentiality?",
        "answers": [
          "AH"
        ]
      },
      {
        "question": "What algorithm is used to provide data integrity of a message through the use of a calculated hash value?",
        "answers": [
          "HMAC"
        ]
      },
      {
        "question": "Which statement describes the effect of key length in deterring an attacker from hacking through an encryption key?",
        "answers": [
          "The longer the key, the more key possibilities exist."
        ]
      },
      {
        "question": "What is a type of VPN that is generally transparent to the end user?",
        "answers": [
          "site-to-site"
        ]
      },
      {
        "question": "A network design engineer is planning the implementation of a cost-effective method to interconnect multiple networks securely over the internet. Which type of technology is required?",
        "answers": [
          "a VPN gateway"
        ]
      },
      {
        "question": "Which statement is true of site-to-site VPNs?",
        "answers": [
          "Internal hosts send normal, unencapsulated packets."
        ]
      },
      {
        "question": "How is the hash message authentication code (HMAC) algorithm used in an IPsec VPN?",
        "answers": [
          "to guarantee message integrity"
        ]
      },
      {
        "question": "What IPsec algorithm is used to provide data confidentiality?",
        "answers": [
          "AES"
        ]
      },
      {
        "question": "What are two hashing algorithms used with IPsec to guarantee authenticity? (Choose two.)",
        "answers": [
          "MD5",
          "SHA"
        ]
      },
      {
        "question": "What two IPsec algorithms provide encryption and hashing to protect interesting traffic? (Choose two.)",
        "answers": [
          "AES",
          "SHA"
        ]
      },
      {
        "question": "Which protocol creates a virtual unencrypted pointto-point VPN tunnel between Cisco routers?",
        "answers": [
          "GRE"
        ]
      },
      {
        "question": "Which VPN solution allows the use of a web browser to establish a secure, remote-access VPN tunnel to a VPN gateway?",
        "answers": [
          "clientless SSL"
        ]
      },
      {
        "question": "Which IPsec security function utilizes encryption to protect data transfers with a key?",
        "answers": [
          "confidentiality"
        ]
      },
      {
        "question": "Which of the following are service provider managed VPN solutions? (Choose two.)",
        "answers": [
          "Frame Relay",
          "Layer 3 MPLS VPN"
        ]
      },
      {
        "question": "Which of the following are enterprise-managed remote-access VPNs? (Choose two.)",
        "answers": [
          "client-based IPsec VPN",
          "clientless SSL VPN"
        ]
      },
      {
        "question": "Which is a requirement of a site-to-site VPN?",
        "answers": [
          "VPN gateways at each end of the tunnel"
        ]
      },
      {
        "question": "How is the Diffie-Hellman algorithm used in the IPsec framework?",
        "answers": [
          "allows peers to exchange shared keys"
        ]
      },
      {
        "question": "Which type of VPN involves passenger, carrier, and transport protocols?",
        "answers": [
          "GRE over IPsec"
        ]
      },
      {
        "question": "Which type of VPN supports multiple sites by applying configurations to virtual interfaces instead of physical interfaces?",
        "answers": [
          "IPsec virtual tunnel interface"
        ]
      },
      {
        "question": "Which type of VPN connects using the Transport Layer Security (TLS) feature?",
        "answers": [
          "SSL VPN"
        ]
      },
      {
        "question": "Which description correctly identifies an MPLS VPN?",
        "answers": [
          "has both Layer 2 and Layer 3 implementations"
        ]
      },
      {
        "question": "Which description correctly identifies an SSL VPN?",
        "answers": [
          "uses the public key infrastructure and digital certificates"
        ]
      },
      {
        "question": "Which two descriptions correctly identify an IPsec VTI VPN? (Choose two.)",
        "answers": [
          "allows multicast and broadcast traffic over a secure site-to-site VPN",
          "routes packets through virtual tunnel interfaces for encryption and forwarding"
        ]
      },
      {
        "question": "Which two descriptions correctly identify a GRE over IPsec VPN? (Choose two.)",
        "answers": [
          "allows multicast and broadcast traffic over a secure site-to-site VPN",
          "involves a nonsecure tunneling protocol being encapsulated by IPsec"
        ]
      }
    ],
    "9.6.2": [
      {
        "question": "What is the term used to indicate a variation of delay?",
        "answers": [
          "jitter"
        ]
      },
      {
        "question": "A network engineer performs a ping test and receives a value that shows the time it takes for a packet to travel from a source to a destination device and return. Which term describes the value?",
        "answers": [
          "latency"
        ]
      },
      {
        "question": "What role do network devices play in the IntServ QoS model?",
        "answers": [
          "Network devices ensure that resources are available before traffic is allowed to be sent by a host through the network."
        ]
      },
      {
        "question": "Which device would be classified as a trusted endpoint?",
        "answers": [
          "IP phone"
        ]
      },
      {
        "question": "Under which condition does congestion occur on a converged network with voice, video, and data traffic?",
        "answers": [
          "if the request for bandwidth exceeds the amount of bandwidth available"
        ]
      },
      {
        "question": "Which type of traffic does Cisco recommend be placed in the strict priority queue (PQ) when low latency queuing (LLQ) is being used?",
        "answers": [
          "voice"
        ]
      },
      {
        "question": "Which model is the only QoS model with no mechanism to classify packets?",
        "answers": [
          "best-effort"
        ]
      },
      {
        "question": "What happens when the memory queue of a device fills up and new network traffic is received?",
        "answers": [
          "The network device will drop the arriving packets."
        ]
      },
      {
        "question": "What are two characteristics of voice traffic? (Choose two.)",
        "answers": [
          "It consumes few network resources.",
          "It is delay sensitive."
        ]
      },
      {
        "question": "What happens when an edge router using IntServ QoS determines that the data pathway cannot support the level of QoS requested?",
        "answers": [
          "Data is not forwarded along the pathway."
        ]
      },
      {
        "question": "In QoS models, which type of traffic is commonly provided the most preferential treatment over all other application traffic?",
        "answers": [
          "voice traffic"
        ]
      },
      {
        "question": "Which queuing mechanism supports user-defined traffic classes?",
        "answers": [
          "CBWFQ"
        ]
      },
      {
        "question": "What mechanism compensates for jitter in an audio stream by buffering packets and then replaying them outbound in a steady stream?",
        "answers": [
          "playout delay buffer"
        ]
      },
      {
        "question": "What functionality is required on routers to provide remote workers with VoIP and video-conferencing capabilities?",
        "answers": [
          "QoS"
        ]
      },
      {
        "question": "What happens when a router interface ingress queue is full and new network traffic is received?",
        "answers": [
          "The router drops the arriving packets."
        ]
      },
      {
        "question": "Which queuing method provides user-defined traffic classes where each traffic class has a FIFO queue?",
        "answers": [
          "CBWFQ"
        ]
      },
      {
        "question": "Which type of traffic does Cisco recommend be placed in the strict priority queue when Low Latency Queuing (LLQ) is being used?",
        "answers": [
          "Voice"
        ]
      },
      {
        "question": "What is the default queuing method used on the LAN interfaces of Cisco devices?",
        "answers": [
          "FIFO"
        ]
      },
      {
        "question": "What is the default queuing method used on the slower WAN interfaces of Cisco devices?",
        "answers": [
          "WFQ"
        ]
      },
      {
        "question": "Which statement describes the QoS classification and marking tools?",
        "answers": [
          "Marking involves adding a value to a packet header."
        ]
      },
      {
        "question": "Which device would be classified as a trusted endpoint?",
        "answers": [
          "IP conferencing station"
        ]
      },
      {
        "question": "How many bits are used to identify the Class of Service (CoS) marking in a frame?",
        "answers": [
          "3"
        ]
      },
      {
        "question": "How many levels of priority are possible when using Class of Service (CoS) marking on frames?",
        "answers": [
          "64"
        ]
      }
    ],
    "10.8.4": [
      {
        "question": "What are two reasons for an administrator to issue the copy running-config tftp command on a switch or router? (Choose two.)",
        "answers": [
          "to transfer the current configuration file to a server",
          "to save the running configuration file to a remote location"
        ]
      },
      {
        "question": "What information can be gathered about a neighbor device from the show cdp neighbors detail command that cannot be found with the show cdp neighbors command?",
        "answers": [
          "the IP address of the neighbor"
        ]
      },
      {
        "question": "When SNMPv1 or SNMPv2 is being used, which feature provides secure access to MIB objects?",
        "answers": [
          "community strings"
        ]
      },
      {
        "question": "What command must be issued on a Cisco router that will serve as an authoritative NTP server?",
        "answers": [
          "ntp master 1"
        ]
      },
      {
        "question": "Which protocol or service can be configured to send unsolicited messages to alert the network administrator about a network event such as an extremely high CPU utilization on a router?",
        "answers": [
          "SNMP"
        ]
      },
      {
        "question": "Which statement describes a syslog message severity level?",
        "answers": [
          "Severity level 0 is the most critical severity level."
        ]
      },
      {
        "question": "What is an SNMP management agent?",
        "answers": [
          "software that is installed on devices managed by SNMP"
        ]
      },
      {
        "question": "What are two characteristics of SNMP community strings? (Choose two.)",
        "answers": [
          "SNMP read-only community strings can be used to get information from an SNMP-enabled device.",
          "SNMP read-write community strings can be used to set information on an SNMP-enabled device."
        ]
      },
      {
        "question": "A network administrator issues the copy tftp running-config command on a router. What is the administrator trying to achieve?",
        "answers": [
          "copy the configuration file from the TFTP server to the RAM of the router"
        ]
      },
      {
        "question": "What is a characteristic of the MIB?",
        "answers": [
          "The OIDS are organized in a hierarchical structure."
        ]
      },
      {
        "question": "What data would be saved and where would the data be placed if a network administrator issued the following command? (Choose two.)",
        "answers": [
          "The data will be saved to a TFTP server.",
          "The data to be saved is the configuration that is stored in NVRAM."
        ]
      },
      {
        "question": "Which command would a network engineer use to restore the IOS image c1900-universalk9-mz.SPA.152-4.M3.bin to a router?",
        "answers": [
          "copy tftp: flash0:"
        ]
      },
      {
        "question": "Why would a network administrator issue the show cdp neigbors command on a router?",
        "answers": [
          "to display device ID and other information about directly connected Cisco devices"
        ]
      },
      {
        "question": "What are SNMP trap messages?",
        "answers": [
          "unsolicited messages that are sent by the SNMP agent and alert the NMS to a condition on the network"
        ]
      },
      {
        "question": "Which of the following is one difference between CDP and LLDP?",
        "answers": [
          "CDP is a proprietary protocol, whereas LLDP is a vendor-neutral\nprotocol."
        ]
      },
      {
        "question": "A network administrator wants to configure a router so that only a specific interface will send and receive CDP information. Which two configuration steps accomplish this? (Choose two.)",
        "answers": [
          "R1(config)# no cdp run",
          "R1(config-if)# cdp enable"
        ]
      },
      {
        "question": "What is the configuration command to globally enable LLDP on a Cisco Catalyst switch?",
        "answers": [
          "lldp run"
        ]
      },
      {
        "question": "Which option correctly enables LLDP on an interface?",
        "answers": [
          "R1(config-if)# lldp receive\nR1(config-if)# lldp transmit"
        ]
      },
      {
        "question": "What are the most common syslog messages?",
        "answers": [
          "Link up and link down messages"
        ]
      },
      {
        "question": "Which syslog logging severity level indicates that a device is unusable?",
        "answers": [
          "Level 0-Emergency"
        ]
      },
      {
        "question": "Which protocol or service allows network administrators to receive system messages that are provided by network devices?",
        "answers": [
          "Syslog"
        ]
      },
      {
        "question": "Which syslog message type is accessible only to an administrator via the Cisco CLI?",
        "answers": [
          "Debugging"
        ]
      },
      {
        "question": "Which default destination do Cisco routers and switches use to send Syslog messages?",
        "answers": [
          "Console"
        ]
      },
      {
        "question": "What is the result of configuring the logging trap 4 global configuration command?",
        "answers": [
          "The syslog client sends to the syslog server any event message that has a severity level of 4 or lower."
        ]
      },
      {
        "question": "The ntp server 10.1.1.1 global configuration command is issued on router R1. What impact does this command have?",
        "answers": [
          "Synchronizes the clock of R1 with the time server at IP address 10.1.1.1"
        ]
      },
      {
        "question": "Which two statements are true about NTP servers in an enterprise network? (Choose two.)",
        "answers": [
          "NTP servers at stratum 1 are directly connected to an authoritative time source.",
          "NTP servers ensure an accurate timestamp on logging and debugging information."
        ]
      },
      {
        "question": "What can a network administrator do to access a router if the password has been lost?",
        "answers": [
          "From ROMMON mode, configure the router to ignore the startup configuration when the router initializes."
        ]
      },
      {
        "question": "What is the result of configuring the confreg 0x2142 command at the rommon 1> prompt?",
        "answers": [
          "Contents in NVRAM are ignored."
        ]
      },
      {
        "question": "A network technician is attempting a password recovery on a router. From ROMMON mode, which command must be entered to bypass the startup configuration file?",
        "answers": [
          "rommon> confreg 0x2142"
        ]
      },
      {
        "question": "What must an administrator have in order to reset a lost password on a router?",
        "answers": [
          "Physical access to the router"
        ]
      },
      {
        "question": "A network engineer is upgrading the Cisco IOS image on a 2900 Series ISR. What command could the engineer use to verify the total amount of flash memory as well as how much flash memory is currently available?",
        "answers": [
          "show flash0:"
        ]
      },
      {
        "question": "Which two conditions should a network administrator verify before attempting to upgrade a Cisco IOS image using a TFTP server? (Choose two.)",
        "answers": [
          "Verify connectivity between the router and TFTP server by using the ping command.",
          "Verify that there is enough flash memory for the new Cisco IOS image by using the show flash command."
        ]
      },
      {
        "question": "Which statement describes SNMP operation?",
        "answers": [
          "The NMS uses a set request to change configuration variables in the agent device."
        ]
      },
      {
        "question": "Which SNMP feature provides a solution to the main disadvantage of SNMP polling?",
        "answers": [
          "SNMP trap messages"
        ]
      },
      {
        "question": "Which SNMP version uses weak community stringbased access control and supports bulk retrieval?",
        "answers": [
          "SNMPv2c"
        ]
      }
    ],
    "11.5.3": [
      {
        "question": "Which cost-effective physical network topology design is recommended when building a three-tier campus network that connects three buildings?​",
        "answers": [
          "extended star"
        ]
      },
      {
        "question": "How much traffic is a 48-port gigabit switch capable of switching when operating at full wire speed?",
        "answers": [
          "48 Gb/s, by providing full bandwidth to each port"
        ]
      },
      {
        "question": "What is the term that is used for the area of a network that is affected when a device or network service experiences problems?",
        "answers": [
          "failure domain"
        ]
      },
      {
        "question": "Which type of router would an enterprise use to allow customers to access content anytime and anyplace, regardless of whether they are at home or work?",
        "answers": [
          "network edge routers"
        ]
      },
      {
        "question": "Which design feature will limit the size of a failure domain in an enterprise network?",
        "answers": [
          "the use of the building switch block approach"
        ]
      },
      {
        "question": "What is a function of the distribution layer?",
        "answers": [
          "interconnection of large-scale networks in wiring closets"
        ]
      },
      {
        "question": "What is the function of PoE pass-through?",
        "answers": [
          "allows switches, phones, and wireless access points to receive power over existing Ethernet cables from an upstream switch"
        ]
      },
      {
        "question": "Which function is supplied by the access layer in a three-layer network design?",
        "answers": [
          "network access"
        ]
      },
      {
        "question": "Which action should be taken when planning for redundancy on a hierarchical network design?",
        "answers": [
          "Add alternate physical paths for data to traverse the network."
        ]
      },
      {
        "question": "What is a collapsed core in a network design?",
        "answers": [
          "a combination of the functionality of the distribution and core layers"
        ]
      },
      {
        "question": "What is the name of the layer in the Cisco borderless switched network design that is considered to be the backbone used for high-speed connectivity and fault isolation?",
        "answers": [
          "core"
        ]
      },
      {
        "question": "Which technology is required when switched networks are designed to include redundant links?",
        "answers": [
          "Spanning Tree Protocol"
        ]
      },
      {
        "question": "Which feature could be used in a network design to increase the bandwidth by combining multiple physical links into a single logical link?",
        "answers": [
          "EtherChannel"
        ]
      },
      {
        "question": "Which statement describes a characteristic of Cisco Catalyst 2960 switches?",
        "answers": [
          "New Cisco Catalyst 2960-C switches support PoE pass-through."
        ]
      },
      {
        "question": "Which network design solution will best extend access layer connectivity to host devices?",
        "answers": [
          "implementing wireless connectivity"
        ]
      },
      {
        "question": "What is a basic function of the Cisco Borderless Networks architecture distribution layer?",
        "answers": [
          "Aggregating Layer 2 and Layer 3 routing boundaries"
        ]
      },
      {
        "question": "Which two previously independent technologies should a network administrator attempt to combine after choosing to upgrade to a converged network infrastructure? (Choose two.)",
        "answers": [
          "User data traffic",
          "VoIP phone traffic"
        ]
      },
      {
        "question": "How is a two-tier LAN network design implemented?",
        "answers": [
          "The distribution and core layers are collapsed into one tier, and the access layer is on a separate tier."
        ]
      },
      {
        "question": "A local law firm is redesigning the company network so that all 20 employees can be connected to a LAN and to the internet. The law firm would prefer a low-cost and easy solution for the project. What type of switch should be selected?",
        "answers": [
          "fixed configuration"
        ]
      },
      {
        "question": "What is one function of a Layer 2 switch?",
        "answers": [
          "determining which interface is used to forward a frame, based on the destination MAC address"
        ]
      },
      {
        "question": "Which network device can be used to eliminate collisions on an Ethernet network?",
        "answers": [
          "Switch"
        ]
      },
      {
        "question": "Which type of address does a switch use to build the MAC address table?",
        "answers": [
          "Source MAC address"
        ]
      },
      {
        "question": "What are two reasons a network administrator would segment a network with a Layer 2 switch? (Choose two.)",
        "answers": [
          "To enhance user bandwidth",
          "To isolate traffic between segments"
        ]
      },
      {
        "question": "Which statement describes the microsegmentation feature of a LAN switch?",
        "answers": [
          "Each port forms a collision domain."
        ]
      },
      {
        "question": "A ____________________ network is one that uses the same infrastructure to carry voice, data, and video signals.",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "In the Cisco enterprise architecture, which two functional parts of the network are combined to form a collapsed core design? (Choose two.)",
        "answers": [
          "Core layer",
          "Distribution layer"
        ]
      },
      {
        "question": "What are two benefits of extending access layer connectivity to users through a wireless medium? (Choose two.)",
        "answers": [
          "Increased flexibility",
          "Reduced costs"
        ]
      },
      {
        "question": "As the network administrator, you have been asked to implement EtherChannel on the corporate network. What does this configuration involve?",
        "answers": [
          "Grouping multiple physical ports to increase bandwidth between two switches"
        ]
      },
      {
        "question": "Which statement describes Cisco Meraki switches?",
        "answers": [
          "They are cloud-managed access switches that enable virtual stacking of switches."
        ]
      },
      {
        "question": "What term is used to describe the thickness or height of a switch?",
        "answers": [
          "Rack unit"
        ]
      },
      {
        "question": "What are two functions of a router? (Choose two.)",
        "answers": [
          "It connects multiple IP networks.",
          "It determines the best path for sending packets."
        ]
      }
    ],
    "12.6.4": [
      {
        "question": "Which statement describes the physical topology for a LAN?",
        "answers": [
          "It defines how hosts and network devices connect to the LAN."
        ]
      },
      {
        "question": "A network engineer is troubleshooting a network problem where users cannot access the FTP server at the same IP address where a website can be successfully accessed. Which troubleshooting method would be the best to apply in this case?",
        "answers": [
          "top-down"
        ]
      },
      {
        "question": "A computer technician performed a number of actions to correct a problem. Some actions did not solve the problem, but eventually a solution was found. What should be documented?",
        "answers": [
          "everything that was done to try to solve the problem"
        ]
      },
      {
        "question": "A network engineer is troubleshooting a network problem and can successfully ping between two devices. However, Telnet between the same two devices does not work. Which OSI layers should the administrator investigate next?",
        "answers": [
          "from the network layer to the application layer"
        ]
      },
      {
        "question": "While designing changes to a data center because of a new IoE implementation, a network administrator has the job of diagramming the new physical topology of the area. What should be included in the physical topology diagram?",
        "answers": [
          "cable locations and lengths between servers and switches"
        ]
      },
      {
        "question": "A network technician is troubleshooting an email connection problem. Which question to the end-user will provide clear information to better define the problem?",
        "answers": [
          "When did you first notice your email problem?"
        ]
      },
      {
        "question": "Which troubleshooting tool can be used to pinpoint the distance to a break in a network cable?",
        "answers": [
          "cable tester"
        ]
      },
      {
        "question": "Which troubleshooting software is an example of a network management system tool?",
        "answers": [
          "WhatsUp Gold"
        ]
      },
      {
        "question": "What is the purpose of establishing a network baseline?",
        "answers": [
          "to help monitor and troubleshoot network performance"
        ]
      },
      {
        "question": "After which step in the network troubleshooting process would one of the layered troubleshooting methods be used?",
        "answers": [
          "gathering symptoms from suspect devices"
        ]
      },
      {
        "question": "A company is setting up a website with SSL technology to protect the authentication credentials required to access the website. A network engineer needs to verify that the setup is correct and that the authentication is indeed encrypted. Which tool should be used?",
        "answers": [
          "protocol analyzer"
        ]
      },
      {
        "question": "When should a network performance baseline be measured?",
        "answers": [
          "during normal work hours of an organization"
        ]
      },
      {
        "question": "A networked PC is having trouble accessing the Internet, but can print to a local printer and ping other computers in the area. Other computers on the same network are not having any issues. What is the problem?",
        "answers": [
          "The PC has a missing or incorrect default gateway."
        ]
      },
      {
        "question": "A technician installed a network adapter in a computer and wants to test network connectivity. The ping command can receive responses from workstations on the same subnet but not from remote workstations. What could be causing the problem?",
        "answers": [
          "The default gateway is incorrect."
        ]
      },
      {
        "question": "What network troubleshooting capability is provided by a cable analyzer?",
        "answers": [
          "testing and certifying of copper and fiber cables"
        ]
      },
      {
        "question": "In which step of gathering symptoms does a network engineer determine whether the problem is at the core, distribution, or access layer of the network?",
        "answers": [
          "Narrow the scope."
        ]
      },
      {
        "question": "A team of engineers has identified a solution to a significant network problem. The proposed solution is likely to affect critical network infrastructure components. What should the team follow while implementing the solution to avoid interfering with other processes and infrastructure?",
        "answers": [
          "Change-control procedures"
        ]
      },
      {
        "question": "Which troubleshooting method begins by examining cable connections and wiring issues?",
        "answers": [
          "Bottom-up troubleshooting"
        ]
      },
      {
        "question": "An administrator is troubleshooting an Internet connectivity problem on a router. The output of the show interfaces gigabitethernet 0/0 command reveals higher-than-normal framing errors on the interface that connects to the Internet. At what layer of the OSI model is the problem likely occurring?",
        "answers": [
          "Layer 2"
        ]
      },
      {
        "question": "Users report that the new website http://www.company1.biz cannot be accessed. The help desk technician checks and verifies that the website can be accessed with http://www.company1.biz:90. Which layer in the TCP/IP model is involved in troubleshooting this issue?",
        "answers": [
          "Transport"
        ]
      },
      {
        "question": "A user reports that after an OS patch of the networking subsystem has been applied to a workstation, the workstation performs very slowly when connecting to network resources. A network technician tests the link with a cable analyzer and notices that the workstation sends an excessive number of frames smaller than 64 bytes and also other meaningless frames. What is the possible cause of the problem?",
        "answers": [
          "Corrupted NIC driver"
        ]
      },
      {
        "question": "Which three pieces of information are typically recorded in a logical topology diagram? (Choose three.)",
        "answers": [
          "IP addresses and prefix lengths",
          "Routing protocols",
          "Static routes"
        ]
      },
      {
        "question": "Which number represents the most severe level of syslog logging?",
        "answers": [
          "0"
        ]
      }
    ],
    "13.6.3": [
      {
        "question": "A company uses a cloud-based payroll system. Which cloud computing technology is this company using?",
        "answers": [
          "software as a service (SaaS)"
        ]
      },
      {
        "question": "For a data center, what is the difference in the server virtualization data traffic compared with the traditional client-server model?",
        "answers": [
          "There are significant data exchanges between virtual servers."
        ]
      },
      {
        "question": "Which component in a traditional infrastructure device provides Layer 2 and Layer 3 functions to create data paths within a network?",
        "answers": [
          "control plane"
        ]
      },
      {
        "question": "Which network traffic management technology is a basic element in SDN implementations?",
        "answers": [
          "OpenFlow"
        ]
      },
      {
        "question": "Which two technologies are core components of Cisco ACI architecture? (Choose two.)",
        "answers": [
          "Application Network Profile",
          "Application Policy Infrastructure Controller"
        ]
      },
      {
        "question": "Which Cloud computing service would be best for a new organization that cannot afford physical servers and networking equipment and must purchase network services on-demand?",
        "answers": [
          "Iaas"
        ]
      },
      {
        "question": "Which services are provided by a private cloud?",
        "answers": [
          "multiple internal IT services in an enterprise"
        ]
      },
      {
        "question": "What are two reasons an organization might use cloud computing? (Choose two.)",
        "answers": [
          "enables global access to corporate data",
          "provides power and physical plants capable of meeting increased requirements"
        ]
      },
      {
        "question": "What is a characteristic of data flow processing in SDN?",
        "answers": [
          "Each data flow through the network must be approved by the SDN controller first."
        ]
      },
      {
        "question": "What are three abstraction layers of a computer system? (Choose three.)",
        "answers": [
          "firmware",
          "hardware",
          "services"
        ]
      },
      {
        "question": "In software defined network architecture, what function is removed from network devices and performed by an SDN controller?",
        "answers": [
          "control plane"
        ]
      },
      {
        "question": "Which term describes the data exchanges between virtual servers in a data center?",
        "answers": [
          "east-west traffic"
        ]
      },
      {
        "question": "How is the control plane modified to operate with network virtualization?",
        "answers": [
          "The control plane function is consolidated into a centralized controller."
        ]
      },
      {
        "question": "Which Cloud computing service would be best for an organization that needs to collaboratively create applications and deliver them over the web?",
        "answers": [
          "PaaS"
        ]
      },
      {
        "question": "Which of the following is the term for the extension of the internet structure to billions of connected devices?",
        "answers": [
          "IoT"
        ]
      },
      {
        "question": "Which cloud computing service would provide the use of network hardware such as routers and switches for a particular company?",
        "answers": [
          "Infrastructure as a service (IaaS)"
        ]
      },
      {
        "question": "What technology allows users to access data anywhere and at any time?",
        "answers": [
          "cloud computing"
        ]
      },
      {
        "question": "Which cloud model provides services for a specific organization or entity?",
        "answers": [
          "private cloud"
        ]
      },
      {
        "question": "What is a benefit of virtualization?",
        "answers": [
          "support of live migration"
        ]
      },
      {
        "question": "What is a difference between the functions of cloud computing and virtualization?",
        "answers": [
          "Cloud computing separates the application from the hardware, whereas virtualization separates the OS from the underlying hardware."
        ]
      },
      {
        "question": "Which of the following applies to a Type 2 hypervisor?",
        "answers": [
          "does not require management console software"
        ]
      },
      {
        "question": "Which is a characteristic of a Type 1 hypervisor?",
        "answers": [
          "installed directly on a server"
        ]
      },
      {
        "question": "Which technology virtualizes the control plane and moves it to a centralized controller?",
        "answers": [
          "SDN"
        ]
      },
      {
        "question": "Which two layers of the OSI model are associated with SDN network control plane functions that make forwarding decisions? (Choose two.)",
        "answers": [
          "Layer 2",
          "Layer 3"
        ]
      },
      {
        "question": "Which type of hypervisor would most likely be used in a data center?",
        "answers": [
          "Type 1"
        ]
      },
      {
        "question": "Which type of hypervisor would most likely be used by a consumer?",
        "answers": [
          "Type 2"
        ]
      },
      {
        "question": "What component is considered the brains of the ACI architecture and translates application policies?",
        "answers": [
          "Application Policy Infrastructure Controller"
        ]
      }
    ],
    "14.7.2": [
      {
        "question": "What is JSON?",
        "answers": [
          "It is a data format for storing and transporting data."
        ]
      },
      {
        "question": "What is an architectural constraint to which a true RESTful API web service must adhere?",
        "answers": [
          "It runs as client/server model."
        ]
      },
      {
        "question": "In the RESTful API request example, ht​tp://ww​w.mapquestapi.com/directions/v2/route?outFormat=json&key=KEY&from=San+Jose,Ca&to=Monterey,Ca, which term describes the component directions/v2/route?",
        "answers": [
          "resources"
        ]
      },
      {
        "question": "Which statement describes an API?",
        "answers": [
          "It is a set of functions and procedures that allows a client application to access the data of the service application."
        ]
      },
      {
        "question": "Which term describes the process of managing configuration changes of network devices in an orderly fashion?",
        "answers": [
          "orchestration"
        ]
      },
      {
        "question": "Which web service API can use multiple data formats including JSON, XML, and YAML?",
        "answers": [
          "REST"
        ]
      },
      {
        "question": "What are two reasons that most RESTful APIs require a key in the request? (Choose two.)",
        "answers": [
          "to authenticate the requesting source",
          "to gather information on the people using the API"
        ]
      },
      {
        "question": "What is a difference between the XML and HTML data formats?",
        "answers": [
          "XML uses a self-descriptive data structure but HTML uses a standard document structure."
        ]
      },
      {
        "question": "A programmer is using Ansible as the configuration management tool. Which term is used to describe a set of instructions for execution?",
        "answers": [
          "Playbook"
        ]
      },
      {
        "question": "Which term is used to describe a set of instructions for execution by the configuration management tool Chef?",
        "answers": [
          "Cookbook"
        ]
      },
      {
        "question": "Which two configuration management tools are developed using Python? (Choose two.)",
        "answers": [
          "Ansible",
          "SaltStack"
        ]
      },
      {
        "question": "Which function of the Cisco intent-based networking system (IBNS) enables network operators to express the expected networking behavior that will best support the business intent?",
        "answers": [
          "translation"
        ]
      },
      {
        "question": "Which types of APIs are suitable for the data communication between a travel website and a hotel chain inquiring about room availability data?",
        "answers": [
          "partner APIs"
        ]
      },
      {
        "question": "Which characters are used to enclose a JSON key?",
        "answers": [
          "quotation marks"
        ]
      },
      {
        "question": "Which character is used to separate JSON key/value pairs?",
        "answers": [
          "(comma) ,"
        ]
      },
      {
        "question": "In the following example, which data format is used?",
        "answers": [
          "YAML"
        ]
      },
      {
        "question": "In the following example, which data format is used?",
        "answers": [
          "JSON"
        ]
      },
      {
        "question": "A RESTful API (for example, a public API) mat require a key. What is the function of the key?",
        "answers": [
          "It is used to authenticate the requesting source."
        ]
      },
      {
        "question": "Which configuration management tool combines a set of instructions in a manifest?",
        "answers": [
          "Puppet"
        ]
      },
      {
        "question": "Which RESTful operation corresponds to the HTTP POST method?",
        "answers": [
          "create"
        ]
      },
      {
        "question": "How does the YAML data format structure differ from JSON?",
        "answers": [
          "YAML uses indentations."
        ]
      },
      {
        "question": "Which configuration management tool combines a set of instructions in a playbook?",
        "answers": [
          "Ansible"
        ]
      },
      {
        "question": "In the following example, which data format is used?",
        "answers": [
          "XML"
        ]
      },
      {
        "question": "What is a difference between the HTML and XML data formats?",
        "answers": [
          "HTML uses predefined tags, and XML does not."
        ]
      },
      {
        "question": "What is REST?",
        "answers": [
          "It is an architecture style for designing web service applications."
        ]
      },
      {
        "question": "Which RESTful operation corresponds to the HTTP PUT method?",
        "answers": [
          "update"
        ]
      },
      {
        "question": "What is JSON?",
        "answers": [
          "It is a data format that is simpler than XML."
        ]
      },
      {
        "question": "Which scenario describes the use of a public API?",
        "answers": [
          "It can be used with no restrictions."
        ]
      }
    ],
};

const CHECKPOINT_DB = {
    "1-2": [
      {
        "question": "What is a function of OSPF hello packets?",
        "answers": [
          "to discover neighbors and build adjacencies between them"
        ]
      },
      {
        "question": "Which OSPF packet contains the different types of link-state advertisements?",
        "answers": [
          "LSU"
        ]
      },
      {
        "question": "Which three statements describe features of the OSPF topology table? (Choose three.)",
        "answers": [
          "It is a link-state database that represents the network topology.",
          "When converged, all routers in an area have identical topology tables.",
          "The table can be viewed via the show ip ospf database command."
        ]
      },
      {
        "question": "What does an OSPF area contain?",
        "answers": [
          "routers that have the same link-state information in their LSDBs"
        ]
      },
      {
        "question": "Which OSPF data structure is identical on all OSPF routers that share the same area?",
        "answers": [
          "link-state database"
        ]
      },
      {
        "question": "Which step does an OSPF-enabled router take immediately after establishing an adjacency with another router?",
        "answers": [
          "exchanges link-state advertisements"
        ]
      },
      {
        "question": "A network engineer has manually configured the hello interval to 15 seconds on an interface of a router that is running OSPFv2. By default, how will the dead interval on the interface be affected?",
        "answers": [
          "The dead interval will now be 60 seconds."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator has configured the OSPF timers to the values that are shown in the graphic. What is the result of having those manually configured timers?",
        "answers": [
          "The R1 dead timer expires between hello packets from R2."
        ]
      },
      {
        "question": "To establish a neighbor adjacency two OSPF routers will exchange hello packets. Which two values in the hello packets must match on both routers? (Choose two.)",
        "answers": [
          "dead interval",
          "hello interval"
        ]
      },
      {
        "question": "What is the default router priority value for all Cisco OSPF routers?",
        "answers": [
          "1"
        ]
      },
      {
        "question": "Which type of OSPFv2 packet contains an abbreviated list of the LSDB of a sending router and is used by receiving routers to check against the local LSDB?",
        "answers": [
          "database description"
        ]
      },
      {
        "question": "In an OSPF network when are DR and BDR elections required?",
        "answers": [
          "when the routers are interconnected over a common Ethernet network"
        ]
      },
      {
        "question": "When an OSPF network is converged and no network topology change has been detected by a router, how often will LSU packets be sent to neighboring routers?",
        "answers": [
          "every 30 minutes"
        ]
      },
      {
        "question": "What will an OSPF router prefer to use first as a router ID?",
        "answers": [
          "any IP address that is configured using the router-id command"
        ]
      },
      {
        "question": "What are the two purposes of an OSPF router ID? (Choose two.)",
        "answers": [
          "to uniquely identify the router within the OSPF domain",
          "to facilitate router participation in the election of the designated router"
        ]
      },
      {
        "question": "Refer to the exhibit. If no router ID was manually configured, what would router Branch1 use as its OSPF router ID?",
        "answers": [
          "192.168.1.100"
        ]
      },
      {
        "question": "A network technician issues the following commands when configuring a router:",
        "answers": [
          "the OSPF process ID on R1"
        ]
      },
      {
        "question": "An OSPF router has three directly connected networks; 172.16.0.0/16, 172.16.1.0/16, and 172.16.2.0/16. Which OSPF network command would advertise only the 172.16.1.0 network to neighbors?",
        "answers": [
          "router(config-router)# network 172.16.1.0 0.0.0.0 area 0"
        ]
      },
      {
        "question": "Refer to the exhibit. Which three statements describe the results of the OSPF election process of the topology that is shown in the exhibit? (Choose three.)",
        "answers": [
          "R3 will be elected BDR.",
          "The R4 router ID is 172.16.1.1.",
          "R2 will be elected DR."
        ]
      },
      {
        "question": "Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?",
        "answers": [
          "Router R4 will become the DR and router R1 will become the BDR."
        ]
      },
      {
        "question": "By default, what is the OSPF cost for any link with a bandwidth of 100 Mb/s or greater?",
        "answers": [
          "1"
        ]
      },
      {
        "question": "Refer to the exhibit. What is the OSPF cost to reach the router A LAN 172.16.1.0/24 from B?",
        "answers": [
          "65"
        ]
      },
      {
        "question": "Refer to the exhibit. On which router or routers would a default route be statically configured in a corporate environment that uses single area OSPF as the routing protocol?",
        "answers": [
          "R0-A"
        ]
      },
      {
        "question": "What command would be used to determine if a routing protocol-initiated relationship had been made with an adjacent router?",
        "answers": [
          "show ip ospf neighbor"
        ]
      },
      {
        "question": "Refer to the exhibit. Which command did an administrator issue to produce this output?",
        "answers": [
          "R1# show ip ospf interface serial0/0/1"
        ]
      },
      {
        "question": "Which command is used to verify that OSPF is enabled and also provides a list of the networks that are being advertised by the network?​",
        "answers": [
          "show ip protocols"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers but PC1 is unable to connect to PC2. What is the most likely problem?",
        "answers": [
          "Interface Fa0/0 has not been activated for OSPFv2 on router R2."
        ]
      },
      {
        "question": "What is the recommended Cisco best practice for configuring an OSPF-enabled router so that each router can be easily identified when troubleshooting routing issues?",
        "answers": [
          "Configure a value using the router-id command."
        ]
      },
      {
        "question": "Which step in the link-state routing process is described by a router running an algorithm to determine the best path to each destination?",
        "answers": [
          "executing the SPF algorithm"
        ]
      },
      {
        "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.223.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?",
        "answers": [
          "0.0.1.255"
        ]
      },
      {
        "question": "What is the format of the router ID on an OSPF-enabled router?",
        "answers": [
          "a 32-bit number formatted like an IPv4 address"
        ]
      },
      {
        "question": "Question as presented:",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "After modifying the router ID on an OSPF router, what is the preferred method to make the new router ID effective?",
        "answers": [
          "HQ# clear ip ospf process"
        ]
      },
      {
        "question": "In an OSPFv2 configuration, what is the effect of entering the command network 192.168.1.1 0.0.0.0 area 0 ?",
        "answers": [
          "It tells the router which interface to turn on for the OSPF routing process."
        ]
      },
      {
        "question": "What is the reason for a network engineer to alter the default reference bandwidth parameter when configuring OSPF?",
        "answers": [
          "to more accurately reflect the cost of links greater than 100 Mb/s"
        ]
      },
      {
        "question": "Which task has to be performed on Router 1 for it to establish an OSPF adjacency with Router 2?",
        "answers": [
          "Change the subnet mask of interface FastEthernet 0/0 to 255.255.255.0."
        ]
      },
      {
        "question": "Match the description to the term. (Not all options are used.)",
        "answers": [
          "This is the algorithm used by OSPF. -> Shortest Path First",
          "This is where the details of the neighboring routers can be found. -> Adjacency database",
          "All the routers are in the backbone area. -> Single-area OSPF",
          "This is where you can find the topology table. -> Link-state database"
        ]
      },
      {
        "question": "What is a benefit of multiarea OSPF routing?",
        "answers": [
          "Topology changes in one area do not cause SPF recalculations in other areas."
        ]
      },
      {
        "question": "Match the OSPF state with the order in which it occurs. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2025-02-12_111248.jpg"
      },
      {
        "question": "What indicates to a link-state router that a neighbor is unreachable?",
        "answers": [
          "if the router no longer receives hello packets"
        ]
      },
      {
        "question": "Which three OSPF states are involved when two routers are forming an adjacency? (Choose three.)",
        "answers": [
          "Init",
          "Two-way",
          "Down"
        ]
      },
      {
        "question": "Refer to the exhibit. Suppose that routers B, C, and D have a default priority, and router A has a priority 0. Which conclusion can be drawn from the DR/BDR election process?​",
        "answers": [
          "If the DR fails, the new DR will be router B."
        ]
      },
      {
        "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 64.102.0.0 255.255.255.128. What wildcard mask would the administrator use in the OSPF network statement?",
        "answers": [
          "0.0.0.127"
        ]
      },
      {
        "question": "Which command will a network engineer issue to verify the configured hello and dead timer intervals on a point-to-point WAN link between two routers that are running OSPFv2?",
        "answers": [
          "show ip ospf interface serial 0/0/0"
        ]
      },
      {
        "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 128.107.0.0 255.255.255.192. What wildcard mask would the administrator use in the OSPF network statement?",
        "answers": [
          "0.0.0.63"
        ]
      },
      {
        "question": "Match each OSPF packet type to how it is used by a router. (Not all options are used.)",
        "answers": [
          "link-state request packet -> query another router for additional information",
          "hello packet -> establish and maintain adjacencies",
          "database description packet -> compare local topology to that sent by another router",
          "link-state update packet -> advertise new information"
        ]
      },
      {
        "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.181.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?",
        "answers": [
          "0.0.1.255"
        ]
      },
      {
        "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 198.19.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
        "answers": [
          "0.0.3.255"
        ]
      },
      {
        "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 64.100.0.0 255.255.255.0. What wildcard mask would the administrator use in the OSPF network statement?",
        "answers": [
          "0.0.0.255"
        ]
      },
      {
        "question": "An OSPF router has three directly connected networks; 172.16.0.0/24, 172.16.1.0/24, and 172.16.2.0/24. Which OSPF network command would advertise only the 172.16.1.0 network to neighbors?",
        "answers": [
          "router(config-router)# network 172.16.1.0 0.0.0.255 area 0"
        ]
      }
    ],
    "3-5": [
      {
        "question": "The IT department is reporting that a company web server is receiving an abnormally high number of web page requests from different locations simultaneously. Which type of security attack is occurring?",
        "answers": [
          "DDoS"
        ]
      },
      {
        "question": "What causes a buffer overflow?",
        "answers": [
          "attempting to write more data to a memory location than that location can hold"
        ]
      },
      {
        "question": "Which objective of secure communications is achieved by encrypting data?",
        "answers": [
          "confidentiality"
        ]
      },
      {
        "question": "What type of malware has the primary objective of spreading across the network?",
        "answers": [
          "worm"
        ]
      },
      {
        "question": "What commonly motivates cybercriminals to attack networks as compared to hactivists or state-sponsored hackers?",
        "answers": [
          "financial gain"
        ]
      },
      {
        "question": "Which type of hacker is motivated to protest against political and social issues?",
        "answers": [
          "hacktivist"
        ]
      },
      {
        "question": "What is a ping sweep?",
        "answers": [
          "a network scanning technique that indicates the live hosts in a range of IP addresses."
        ]
      },
      {
        "question": "In what type of attack is a cybercriminal attempting to prevent legitimate users from accessing network services?",
        "answers": [
          "DoS"
        ]
      },
      {
        "question": "Which requirement of secure communications is ensured by the implementation of MD5 or SHA hash generating algorithms?​",
        "answers": [
          "integrity"
        ]
      },
      {
        "question": "If an asymmetric algorithm uses a public key to encrypt data, what is used to decrypt it?",
        "answers": [
          "a private key"
        ]
      },
      {
        "question": "Refer to the exhibit. Which two ACLs would permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface? (Choose two.)",
        "answers": [
          "access-list 1 permit 192.168.10.0 0.0.0.127",
          "access-list 5 permit 192.168.10.0 0.0.0.63"
        ]
      },
      {
        "question": "Which two packet filters could a network administrator use on an IPv4 extended ACL? (Choose two.)",
        "answers": [
          "destination UDP port number",
          "ICMP message type"
        ]
      },
      {
        "question": "What type of ACL offers greater flexibility and control over network access?",
        "answers": [
          "extended"
        ]
      },
      {
        "question": "What is the quickest way to remove a single ACE from a named ACL?",
        "answers": [
          "Use the no keyword and the sequence number of the ACE to be removed."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is configuring a standard IPv4 ACL. What is the effect after the command no access-list 10 is entered?",
        "answers": [
          "ACL 10 is removed from the running configuration."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator has configured ACL 9 as shown. Users on the 172.31.1.0 /24 network cannot forward traffic through router CiscoVille. What is the most likely cause of the traffic failure?",
        "answers": [
          "The sequence of the ACEs is incorrect."
        ]
      },
      {
        "question": "A network administrator needs to configure a standard ACL so that only the workstation of the administrator with the IP address 192.168.15.23 can access the virtual terminal of the main router. Which two configuration commands can achieve the task? (Choose two.)",
        "answers": [
          "Router1(config)# access-list 10 permit 192.168.15.23 0.0.0.0",
          "Router1(config)# access-list 10 permit host 192.168.15.23"
        ]
      },
      {
        "question": "Refer to the exhibit. Which command would be used in a standard ACL to allow only devices on the network attached to R2 G0/0 interface to access the networks attached to R1?",
        "answers": [
          "access-list 1 permit 192.168.10.96 0.0.0.31"
        ]
      },
      {
        "question": "A network administrator is writing a standard ACL that will deny any traffic from the 172.16.0.0/16 network, but permit all other traffic. Which two commands should be used? (Choose two.)",
        "answers": [
          "Router(config)# access-list 95 permit any",
          "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255"
        ]
      },
      {
        "question": "Refer to the exhibit. An ACL was configured on R1 with the intention of denying traffic from subnet 172.16.4.0/24 into subnet 172.16.3.0/24. All other traffic into subnet 172.16.3.0/24 should be permitted. This standard ACL was then applied outbound on interface Fa0/0. Which conclusion can be drawn from this configuration?​",
        "answers": [
          "All traffic will be blocked, not just traffic from the 172.16.4.0/24 subnet."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator needs to add an ACE to the TRAFFIC-CONTROL ACL that will deny IP traffic from the subnet 172.23.16.0/20. Which ACE will meet this requirement?",
        "answers": [
          "5 deny 172.23.16.0 0.0.15.255"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator configures an ACL on the router. Which statement describes the result of the configuration?",
        "answers": [
          "An SSH connection is allowed from a workstation with IP 192.168.25.18 to a device with IP 172.16.45.16."
        ]
      },
      {
        "question": "Refer to the exhibit. What can be determined from this output?",
        "answers": [
          "The router has not had any Telnet packets from 10.35.80.22 that are destined for 10.23.77.101."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator wants to permit only host 192.168.1.1 /24 to be able to access the server 192.168.2.1 /24. Which three commands will achieve this using best ACL placement practices? (Choose three.)",
        "answers": [
          "R2(config-if)# ip access-group 101 in",
          "R2(config)# interface fastethernet 0/0",
          "R2(config)# access-list 101 permit ip host 192.168.1.1 host 192.168.2.1"
        ]
      },
      {
        "question": "Consider the following access list.",
        "answers": [
          "A Telnet or SSH session is allowed from any device on the 192.168.10.0 into the router with this access list assigned.",
          "Devices on the 192.168.10.0/24 network are not allowed to ping other devices on the 192.168.11.0 network."
        ]
      },
      {
        "question": "Refer to the exhibit. The named ACL “Managers” already exists on the router. What will happen when the network administrator issues the commands that are shown in the exhibit?",
        "answers": [
          "The commands are added at the end of the existing Managers ACL."
        ]
      },
      {
        "question": "In which TCP attack is the cybercriminal attempting to overwhelm a target host with half-open TCP connections?",
        "answers": [
          "SYN flood attack"
        ]
      },
      {
        "question": "Which protocol is attacked when a cybercriminal provides an invalid gateway in order to create a man-in-the-middle attack?",
        "answers": [
          "DHCP"
        ]
      },
      {
        "question": "Refer to the exhibit. An administrator has configured a standard ACL on R1 and applied it to interface serial 0/0/0 in the outbound direction. What happens to traffic leaving interface serial 0/0/0 that does not match the configured ACL statements?",
        "answers": [
          "The traffic is dropped."
        ]
      },
      {
        "question": "Refer to the exhibit. The Gigabit interfaces on both routers have been configured with subinterface numbers that match the VLAN numbers connected to them. PCs on VLAN 10 should be able to print to the P1 printer on VLAN 12. PCs on VLAN 20 should print to the printers on VLAN 22. What interface and in what direction should you place a standard ACL that allows printing to P1 from data VLAN 10, but stops the PCs on VLAN 20 from using the P1 printer? (Choose two.)",
        "answers": [
          "R1 Gi0/1.12",
          "outbound"
        ]
      },
      {
        "question": "Which statement describes a characteristic of standard IPv4 ACLs?",
        "answers": [
          "They filter traffic based on source IP addresses only."
        ]
      },
      {
        "question": "What is considered a best practice when configuring ACLs on vty lines?",
        "answers": [
          "Place identical restrictions on all vty lines."
        ]
      },
      {
        "question": "Refer to the exhibit. An administrator first configured an extended ACL as shown by the output of the show access-lists command. The administrator then edited this access-list by issuing the commands below.",
        "answers": [
          "Ping packets will be permitted.",
          "SSH packets will be permitted."
        ]
      },
      {
        "question": "Which set of access control entries would allow all users on the 192.168.10.0/24 network to access a web server that is located at 172.17.80.1, but would not allow them to use Telnet?",
        "answers": [
          "access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80"
        ]
      },
      {
        "question": "What is the term used to describe a mechanism that takes advantage of a vulnerability?",
        "answers": [
          "exploit"
        ]
      },
      {
        "question": "Refer to the exhibit. The network administrator has an IP address of 192.168.11.10 and needs access to manage R1. What is the best ACL type and placement to use in this situation?",
        "answers": [
          "standard ACL inbound on R1 vty lines"
        ]
      },
      {
        "question": "A technician is tasked with using ACLs to secure a router. When would the technician use the any configuration option or command?",
        "answers": [
          "to identify any IP address"
        ]
      },
      {
        "question": "Which statement accurately characterizes the evolution of threats to network security?",
        "answers": [
          "Internal threats can cause even greater damage than external threats."
        ]
      },
      {
        "question": "A user receives a phone call from a person who claims to represent IT services and then asks that user for confirmation of username and password for auditing purposes. Which security threat does this phone call represent?",
        "answers": [
          "social engineering"
        ]
      },
      {
        "question": "In what way are zombies used in security attacks?",
        "answers": [
          "They are infected machines that carry out a DDoS attack."
        ]
      },
      {
        "question": "Which attack involves threat actors positioning themselves between a source and destination with the intent of transparently monitoring, capturing, and controlling the communication?",
        "answers": [
          "man-in-the-middle attack"
        ]
      },
      {
        "question": "Which two keywords can be used in an access control list to replace a wildcard mask or address and wildcard mask pair? (Choose two.)",
        "answers": [
          "host",
          "any"
        ]
      },
      {
        "question": "Which statement describes a difference between the operation of inbound and outbound ACLs?",
        "answers": [
          "Inbound ACLs are processed before the packets are routed while outbound ACLs are processed after the routing is completed."
        ]
      },
      {
        "question": "What effect would the Router1(config-ext-nacl)# permit tcp 172.16.4.0 0.0.0.255 any eq www command have when implemented inbound on the f0/0 interface?",
        "answers": [
          "Traffic originating from 172.16.4.0/24 is permitted to all TCP port 80 destinations."
        ]
      },
      {
        "question": "Which ACE will permit a packet that originates from any network and is destined for a web server at 192.168.1.1?",
        "answers": [
          "access-list 101 permit tcp any host 192.168.1.1 eq 80"
        ]
      },
      {
        "question": "Refer to the exhibit. A new network policy requires an ACL denying FTP and Telnet access to a Corp file server from all interns. The address of the file server is 172.16.1.15 and all interns are assigned addresses in the 172.18.200.0/24 network. After implementing the ACL, no one in the Corp network can access any of the servers. What is the problem?",
        "answers": [
          "The ACL is implicitly denying access to all the servers."
        ]
      },
      {
        "question": "A technician is tasked with using ACLs to secure a router. When would the technician use the access-class 20 in configuration option or command?",
        "answers": [
          "to secure administrative access to the router"
        ]
      },
      {
        "question": "What is the term used to describe the same pre-shared key or secret key, known by both the sender and receiver to encrypt and decrypt data?",
        "answers": [
          "symmetric encryption algorithm"
        ]
      },
      {
        "question": "Refer to the exhibit. Internet privileges for an employee have been revoked because of abuse but the employee still needs access to company resources. What is the best ACL type and placement to use in this situation?",
        "answers": [
          "standard ACL outbound on R2 WAN interface towards the internet"
        ]
      },
      {
        "question": "Refer to the exhibit. The student on the H1 computer continues to launch an extended ping with expanded packets at the student on the H2 computer. The school network administrator wants to stop this behavior, but still allow both students access to web-based computer assignments. What would be the best plan for the network administrator?",
        "answers": [
          "Apply an inbound extended ACL on R1 Gi0/0."
        ]
      },
      {
        "question": "A technician is tasked with using ACLs to secure a router. When would the technician use the ‘ip access-group 101 in’ configuration option or command?",
        "answers": [
          "to apply an extended ACL to an interface"
        ]
      },
      {
        "question": "In which type of attack is falsified information used to redirect users to malicious Internet sites?",
        "answers": [
          "DNS cache poisoning"
        ]
      },
      {
        "question": "What is a feature of an IPS?",
        "answers": [
          "It can stop malicious packets."
        ]
      },
      {
        "question": "What is the term used to describe a potential danger to a company’s assets, data, or network functionality?",
        "answers": [
          "threat"
        ]
      },
      {
        "question": "Refer to the exhibit. Network 192.168.30.0/24 contains all of the company servers. Policy dictates that traffic from the servers to both networks 192.168.10.0 and 192.168.11.0 be limited to replies for original requests. What is the best ACL type and placement to use in this situation?",
        "answers": [
          "extended ACL inbound on R3 G0/0"
        ]
      },
      {
        "question": "What does the CLI prompt change to after entering the command ip access-list standard aaa from global configuration mode?",
        "answers": [
          "Router(config-std-nacl)#"
        ]
      },
      {
        "question": "Refer to the exhibit. Many employees are wasting company time accessing social media on their work computers. The company wants to stop this access. What is the best ACL type and placement to use in this situation?",
        "answers": [
          "extended ACLs inbound on R1 G0/0 and G0/1"
        ]
      },
      {
        "question": "A technician is tasked with using ACLs to secure a router. When would the technician use the 40 deny host 192.168.23.8 configuration option or command?",
        "answers": [
          "to create an entry in a numbered ACL"
        ]
      },
      {
        "question": "What is the best description of Trojan horse malware?",
        "answers": [
          "It appears as useful software but hides malicious code."
        ]
      },
      {
        "question": "What wild card mask will match networks 172.16.0.0 through 172.19.0.0?",
        "answers": [
          "0.3.255.255"
        ]
      },
      {
        "question": "A technician is tasked with using ACLs to secure a router. When would the technician use the remark configuration option or command?",
        "answers": [
          "to add a text entry for documentation purposes"
        ]
      },
      {
        "question": "A technician is tasked with using ACLs to secure a router. When would the technician use the host configuration option or command?",
        "answers": [
          "to identify one specific IP address"
        ]
      }
    ],
    "6-8": [
      {
        "question": "Which two statements accurately describe an advantage or a disadvantage when deploying NAT for IPv4 in a network? (Choose two.)",
        "answers": [
          "NAT provides a solution to slow down the IPv4 address depletion.",
          "NAT introduces problems for some applications that require end-to-end connectivity."
        ]
      },
      {
        "question": "A network administrator wants to examine the active NAT translations on a border router. Which command would perform the task?",
        "answers": [
          "Router# show ip nat translations"
        ]
      },
      {
        "question": "What are two tasks to perform when configuring static NAT? (Choose two.)",
        "answers": [
          "Create a mapping between the inside local and outside local addresses.",
          "Identify the participating interfaces as inside or outside interfaces."
        ]
      },
      {
        "question": "What is a disadvantage of NAT?",
        "answers": [
          "There is no end-to-end addressing."
        ]
      },
      {
        "question": "Refer to the exhibit. From the perspective of R1, the NAT router, which address is the inside global address?",
        "answers": [
          "209.165.200.225"
        ]
      },
      {
        "question": "Refer to the exhibit. Given the commands as shown, how many hosts on the internal LAN off R1 can have simultaneous NAT translations on R1?",
        "answers": [
          "1"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator has just configured address translation and is verifying the configuration. What three things can the administrator verify? (Choose three.)",
        "answers": [
          "A standard access list numbered 1 was used as part of the configuration process.",
          "Address translation is working.",
          "Two types of NAT are enabled."
        ]
      },
      {
        "question": "Refer to the exhibit. NAT is configured on RT1 and RT2. The PC is sending a request to the web server. What IPv4 address is the source IP address in the packet between RT2 and the web server?",
        "answers": [
          "209.165.200.245"
        ]
      },
      {
        "question": "Refer to the exhibit. Based on the output that is shown, what type of NAT has been implemented?",
        "answers": [
          "PAT using an external interface"
        ]
      },
      {
        "question": "Refer to the exhibit. From the perspective of users behind the NAT router, what type of NAT address is 209.165.201.1?",
        "answers": [
          "inside global"
        ]
      },
      {
        "question": "Refer to the exhibit. Static NAT is being configured to allow PC 1 access to the web server on the internal network. What two addresses are needed in place of A and B to complete the static NAT configuration? (Choose two.)",
        "answers": [
          "A = 10.1.0.13",
          "B = 209.165.201.1"
        ]
      },
      {
        "question": "What is the purpose of the overload keyword in the ip nat inside source list 1 pool NAT_POOL overload command?",
        "answers": [
          "It allows many inside hosts to share one or a few inside global addresses."
        ]
      },
      {
        "question": "Refer to the exhibit. Which source address is being used by router R1 for packets being forwarded to the Internet?",
        "answers": [
          "209.165.200.225"
        ]
      },
      {
        "question": "Refer to the exhibit. The NAT configuration applied to the router is as follows:",
        "answers": [
          "Not enough information is given to determine if both static and dynamic NAT are working."
        ]
      },
      {
        "question": "Which situation describes data transmissions over a WAN connection?",
        "answers": [
          "An employee shares a database file with a co-worker who is located in a branch office on the other side of the city."
        ]
      },
      {
        "question": "Which two technologies are categorized as private WAN infrastructures? (Choose two.)",
        "answers": [
          "Frame Relay",
          "MetroE"
        ]
      },
      {
        "question": "Which network scenario will require the use of a WAN?",
        "answers": [
          "Employees need to connect to the corporate email server through a VPN while traveling."
        ]
      },
      {
        "question": "What are two hashing algorithms used with IPsec AH to guarantee authenticity? (Choose two.)",
        "answers": [
          "SHA",
          "MD5"
        ]
      },
      {
        "question": "What two algorithms can be part of an IPsec policy to provide encryption and hashing to protect interesting traffic? (Choose two.)",
        "answers": [
          "SHA",
          "AES"
        ]
      },
      {
        "question": "Which VPN solution allows the use of a web browser to establish a secure, remote-access VPN tunnel to the ASA?",
        "answers": [
          "clientless SSL"
        ]
      },
      {
        "question": "Which IPsec security function provides assurance that the data received via a VPN has not been modified in transit?",
        "answers": [
          "integrity"
        ]
      },
      {
        "question": "Which two types of VPNs are examples of enterprise-managed remote access VPNs? (Choose two.)",
        "answers": [
          "clientless SSL VPN",
          "client-based IPsec VPN"
        ]
      },
      {
        "question": "Which is a requirement of a site-to-site VPN?",
        "answers": [
          "It requires a VPN gateway at each end of the tunnel to encrypt and decrypt traffic."
        ]
      },
      {
        "question": "What is the function of the Diffie-Hellman algorithm within the IPsec framework?",
        "answers": [
          "allows peers to exchange shared keys"
        ]
      },
      {
        "question": "What does NAT overloading use to track multiple internal hosts that use one inside global address?",
        "answers": [
          "port numbers"
        ]
      },
      {
        "question": "What type of address is 192.168.7.98?",
        "answers": [
          "private"
        ]
      },
      {
        "question": "Refer to the exhibit. R1 is configured for static NAT. What IP address will Internet hosts use to reach PC1?",
        "answers": [
          "209.165.200.225"
        ]
      },
      {
        "question": "Which type of VPN uses the public key infrastructure and digital certificates?​",
        "answers": [
          "SSL VPN"
        ]
      },
      {
        "question": "Which two WAN infrastructure services are examples of private connections? (Choose two.)",
        "answers": [
          "Frame Relay",
          "T1/E1"
        ]
      },
      {
        "question": "Which two statements about the relationship between LANs and WANs are true? (Choose two.)",
        "answers": [
          "WANs are typically operated through multiple ISPs, but LANs are typically operated by single organizations or individuals.",
          "WANs connect LANs at slower speed bandwidth than LANs connect their internal end devices.​"
        ]
      },
      {
        "question": "Which statement describes an important characteristic of a site-to-site VPN?",
        "answers": [
          "It must be statically set up."
        ]
      },
      {
        "question": "How is “tunneling” accomplished in a VPN?",
        "answers": [
          "New headers from one or more VPN protocols encapsulate the original packets."
        ]
      },
      {
        "question": "Which statement describes a VPN?",
        "answers": [
          "VPNs use virtual connections to create a private network through a public network."
        ]
      },
      {
        "question": "What problem is causing PC-A to be unable to communicate with the Internet?",
        "answers": [
          "The NAT interfaces are not correctly assigned."
        ]
      },
      {
        "question": "What type of address is 64.100.190.189?",
        "answers": [
          "public"
        ]
      },
      {
        "question": "Which type of VPN routes packets through virtual tunnel interfaces for encryption and forwarding?",
        "answers": [
          "IPsec virtual tunnel interface"
        ]
      },
      {
        "question": "Match the scenario to the WAN solution. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-21_004658.jpg"
      },
      {
        "question": "Question as presented:",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/i249830v1n1_212288-1.png"
      },
      {
        "question": "Refer to the exhibit. What has to be done in order to complete the static NAT configuration on R1?",
        "answers": [
          "Interface S0/0/0 should be configured with the command ip nat outside."
        ]
      },
      {
        "question": "In NAT terms, what address type refers to the globally routable IPv4 address of a destination host on the Internet?",
        "answers": [
          "outside global"
        ]
      },
      {
        "question": "Refer to the exhibit. Which two statements are correct based on the output as shown in the exhibit? (Choose two.)",
        "answers": [
          "The output is the result of the show ip nat translations command.",
          "The host with the address 209.165.200.235 will respond to requests by using a source address of 192.168.10.10."
        ]
      },
      {
        "question": "Which circumstance would result in an enterprise deciding to implement a corporate WAN?",
        "answers": [
          "when its employees become distributed across many branch locations"
        ]
      },
      {
        "question": "What is the function of the Hashed Message Authentication Code (HMAC) algorithm in setting up an IPsec VPN?",
        "answers": [
          "guarantees message integrity"
        ]
      },
      {
        "question": "What algorithm is used with IPsec to provide data confidentiality?",
        "answers": [
          "AES"
        ]
      },
      {
        "question": "Which two technologies provide enterprise-managed VPN solutions? (Choose two.)",
        "answers": [
          "remote access VPN",
          "site-to-site VPN"
        ]
      },
      {
        "question": "Which two end points can be on the other side of an ASA site-to-site VPN? (Choose two.)",
        "answers": [
          "router",
          "another ASA"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is viewing the output from the command show ip nat translations. Which statement correctly describes the NAT translation that is occurring on router RT2?​",
        "answers": [
          "The traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by means of static NAT."
        ]
      },
      {
        "question": "What type of address is 10.100.126.126?",
        "answers": [
          "private"
        ]
      },
      {
        "question": "Which type of VPN connects using the Transport Layer Security (TLS) feature?",
        "answers": [
          "SSL VPN"
        ]
      },
      {
        "question": "Which two end points can be on the other side of an ASA site-to-site VPN configured using ASDM? (Choose two.)",
        "answers": [
          "ISR router",
          "another ASA"
        ]
      },
      {
        "question": "Which protocol creates a virtual point-to-point connection to tunnel unencrypted traffic between Cisco routers from a variety of protocols?",
        "answers": [
          "GRE"
        ]
      },
      {
        "question": "What is a disadvantage when both sides of a communication use PAT?",
        "answers": [
          "End-to-end IPv4 traceability is lost."
        ]
      },
      {
        "question": "What two addresses are specified in a static NAT configuration?",
        "answers": [
          "the inside local and the inside global"
        ]
      },
      {
        "question": "A company is considering updating the campus WAN connection. Which two WAN options are examples of the private WAN architecture? (Choose two.)",
        "answers": [
          "leased line",
          "Ethernet WAN"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator has configured R2 for PAT. Why is the configuration incorrect?",
        "answers": [
          "NAT-POOL2 is bound to the wrong ACL"
        ]
      },
      {
        "question": "Which type of VPN supports multiple sites by applying configurations to virtual interfaces instead of physical interfaces?",
        "answers": [
          "IPsec virtual tunnel interface"
        ]
      },
      {
        "question": "Which type of VPN involves a nonsecure tunneling protocol being encapsulated by IPsec?",
        "answers": [
          "GRE over IPsec"
        ]
      }
    ],
    "9-12": [
      {
        "question": "What is the term used to indicate a variation of delay?",
        "answers": [
          "jitter"
        ]
      },
      {
        "question": "A network engineer performs a ping test and receives a value that shows the time it takes for a packet to travel from a source to a destination device and return. Which term describes the value?",
        "answers": [
          "latency"
        ]
      },
      {
        "question": "What role do network devices play in the IntServ QoS model?",
        "answers": [
          "Network devices ensure that resources are available before traffic is allowed to be sent by a host through the network."
        ]
      },
      {
        "question": "Which device would be classified as a trusted endpoint?",
        "answers": [
          "IP phone"
        ]
      },
      {
        "question": "What is the benefit of deploying Layer 3 QoS marking across an enterprise network?",
        "answers": [
          "Layer 3 marking can carry the QoS information end-to-end."
        ]
      },
      {
        "question": "What is the function of a QoS trust boundary?",
        "answers": [
          "A trust boundary identifies which devices trust the marking on packets that enter a network."
        ]
      },
      {
        "question": "What are two approaches to prevent packet loss due to congestion on an interface? (Choose two.)",
        "answers": [
          "Drop lower-priority packets.",
          "Increase link capacity."
        ]
      },
      {
        "question": "What configuration scenario would offer the most protection to SNMP get and set messages?",
        "answers": [
          "SNMPv3 configured with the auth security level"
        ]
      },
      {
        "question": "Refer to the exhibit. The network administrator enters these commands into the R1 router:",
        "answers": [
          "192.168.11.252"
        ]
      },
      {
        "question": "The command ntp server 10.1.1.1 is issued on a router. What impact does this command have?",
        "answers": [
          "synchronizes the system clock with the time source with IP address 10.1.1.1"
        ]
      },
      {
        "question": "As the network administrator you have been asked to implement EtherChannel on the corporate network. What does this configuration consist of?",
        "answers": [
          "grouping multiple physical ports to increase bandwidth between two switches"
        ]
      },
      {
        "question": "What is a definition of a two-tier LAN network design?",
        "answers": [
          "distribution and core layers collapsed into one tier, and the access layer on a separate tier"
        ]
      },
      {
        "question": "What are two reasons to create a network baseline? (Choose two.)",
        "answers": [
          "to identify future abnormal network behavior",
          "to determine if the network can deliver the required policies"
        ]
      },
      {
        "question": "A computer can access devices on the same network but cannot access devices on other networks. What is the probable cause of this problem?",
        "answers": [
          "The computer has an invalid default gateway address."
        ]
      },
      {
        "question": "In which step of gathering symptoms does the network engineer determine if the problem is at the core, distribution, or access layer of the network?",
        "answers": [
          "Narrow the scope."
        ]
      },
      {
        "question": "A network administrator is deploying QoS with the ability to provide a special queue for voice traffic so that voice traffic is forwarded before network traffic in other queues. Which queuing method would be the best choice?",
        "answers": [
          "LLQ"
        ]
      },
      {
        "question": "What are two characteristics of voice traffic? (Choose two.)",
        "answers": [
          "Voice traffic latency should not exceed 150 ms.",
          "Dropped voice packets are not retransmitted."
        ]
      },
      {
        "question": "Which type of network traffic cannot be managed using congestion avoidance tools?",
        "answers": [
          "UDP"
        ]
      },
      {
        "question": "When QoS is implemented in a converged network, which two factors can be controlled to improve network performance for real-time traffic? (Choose two.)",
        "answers": [
          "delay",
          "jitter"
        ]
      },
      {
        "question": "An administrator wants to replace the configuration file on a Cisco router by loading a new configuration file from a TFTP server. What two things does the administrator need to know before performing this task? (Choose two.)",
        "answers": [
          "name of the configuration file that is stored on the TFTP server",
          "TFTP server IP address"
        ]
      },
      {
        "question": "Refer to the exhibit. Which of the three Cisco IOS images shown will load into RAM?",
        "answers": [
          "The router selects an image depending on the boot system command in the configuration."
        ]
      },
      {
        "question": "Refer to the exhibit. What two types of devices are connected to R1? (Choose two.)",
        "answers": [
          "switch",
          "router"
        ]
      },
      {
        "question": "What are three functions provided by the syslog service? (Choose three.)",
        "answers": [
          "to select the type of logging information that is captured",
          "to gather logging information for monitoring and troubleshooting",
          "to specify the destinations of captured messages"
        ]
      },
      {
        "question": "What is the function of the MIB element as part of a network management system?",
        "answers": [
          "to store data about a device"
        ]
      },
      {
        "question": "What network design would contain the scope of disruptions on a network should a failure occur?",
        "answers": [
          "the deployment of distribution layer switches in pairs and the division of access layer switch connections between them"
        ]
      },
      {
        "question": "Which action should be taken when planning for redundancy on a hierarchical network design?",
        "answers": [
          "add alternate physical paths for data to traverse the network"
        ]
      },
      {
        "question": "What are two benefits of extending access layer connectivity to users through a wireless medium? (Choose two.)",
        "answers": [
          "increased flexibility",
          "reduced costs"
        ]
      },
      {
        "question": "What is a basic function of the Cisco Borderless Architecture access layer?",
        "answers": [
          "provides access to the user"
        ]
      },
      {
        "question": "Which characteristic would most influence a network design engineer to select a multilayer switch over a Layer 2 switch?",
        "answers": [
          "ability to build a routing table"
        ]
      },
      {
        "question": "Refer to the exhibit. Why are routers R1 and R2 not able to establish an OSPF adjacency?​",
        "answers": [
          "The serial interfaces are not in the same area."
        ]
      },
      {
        "question": "When is the most appropriate time to measure network operations to establish a network performance baseline?",
        "answers": [
          "at the same time each day across a set period of average working days, so that typical traffic patterns can be established"
        ]
      },
      {
        "question": "Refer to the exhibit. A user has configured a NIC on the PC as shown but finds that the PC is unable to access the Internet. What is the problem?",
        "answers": [
          "The default gateway address is incorrect."
        ]
      },
      {
        "question": "Refer to the exhibit. A network engineer configured an ACL preventing Telnet and HTTP access to the HQ web server from guest users in the Branch LAN. The address of the web server is 192.168.1.10 and all guest users are assigned addresses in the 192.168.10.0/24 network. After implementing the ACL, no one can access any of the HQ servers. What is the problem?",
        "answers": [
          "The ACL is implicitly denying access to all the servers."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers as shown. PC1 is unable to connect to PC2. What should the administrator do first when troubleshooting the OSPFv2 implementation?",
        "answers": [
          "Test Layer 3 connectivity between the directly connected routers."
        ]
      },
      {
        "question": "What type of traffic is described as requiring latency to be no more than 150 milliseconds (ms)?",
        "answers": [
          "voice"
        ]
      },
      {
        "question": "A network manager wants to add a time to log messages so that there is record of when the message was generated. What command should the administrator use on a Cisco router?",
        "answers": [
          "service timestamps log datetime"
        ]
      },
      {
        "question": "Match the functions to the corresponding layers. (Not all options are used.)",
        "answers": [
          "represents the network edge -> access layer",
          "provides network access to the user -> access layer",
          "implements network access policy -> distribution layer",
          "establishes Layer 3 routing boundaries -> distribution layer",
          "provides high-speed backbone connectivity -> core layer",
          "functions as an aggregator for all the campus blocks -> core layer"
        ]
      },
      {
        "question": "Match the borderless switched network guideline description to the principle. (Not all options are used.)",
        "answers": [
          "facilitates understanding the role of each device at every tier, simplifies deployment, operation, management, and reduces fault domains at every tier -> hierarchical",
          "satisfies user expectations for keeping the network always on -> resiliency",
          "allows seamless network expansion and integrated service enablement on an on-demand basis -> modularity",
          "allows intelligent traffic load sharing by using all network resources -> flexibility"
        ]
      },
      {
        "question": "What are two characteristics of the best-effort QoS model? (Choose two.)",
        "answers": [
          "It does not provide a delivery guarantee for packets.",
          "It treats all network packets in the same way."
        ]
      },
      {
        "question": "Why is QoS an important issue in a converged network that combines voice, video, and data communications?",
        "answers": [
          "Voice and video communications are more sensitive to latency."
        ]
      },
      {
        "question": "A network administrator configures a router with the command sequence:",
        "answers": [
          "The router will load IOS from the TFTP server. If the image fails to load, it will load the IOS image from ROM."
        ]
      },
      {
        "question": "Which statement describes SNMP operation?",
        "answers": [
          "A set request is used by the NMS to change configuration variables in the agent device."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator issues the show lldp neighbors command on a switch. What are two conclusions that can be drawn? (Choose two.)",
        "answers": [
          "Dev1 is connected to interface Fa0/5 of S1.",
          "Dev2 is a switch."
        ]
      },
      {
        "question": "What are the three layers of the switch hierarchical design model? (Choose three.)",
        "answers": [
          "distribution",
          "access",
          "core"
        ]
      },
      {
        "question": "Refer to the exhibit. Which devices exist in the failure domain when switch S3 loses power?",
        "answers": [
          "PC_3 and AP_2"
        ]
      },
      {
        "question": "A network designer is considering whether to implement a switch block on the company network. What is the primary advantage of deploying a switch block?",
        "answers": [
          "The failure of a switch block will not impact all end users."
        ]
      },
      {
        "question": "Which troubleshooting tool would a network administrator use to check the Layer 2 header of frames that are leaving a particular host?",
        "answers": [
          "protocol analyzer"
        ]
      },
      {
        "question": "Refer to the exhibit. R1 and R3 are connected to each other via the local serial 0/0/0 interface. Why are they not forming an adjacency?",
        "answers": [
          "They are in different subnets."
        ]
      },
      {
        "question": "What type of traffic is described as not resilient to loss?",
        "answers": [
          "video"
        ]
      },
      {
        "question": "A network manager wants lists the contents of flash. What command should the administrator use on a Cisco router?",
        "answers": [
          "dir"
        ]
      },
      {
        "question": "Voice packets are being received in a continuous stream by an IP phone, but because of network congestion the delay between each packet varies and is causing broken conversations. What term describes the cause of this condition?",
        "answers": [
          "jitter"
        ]
      },
      {
        "question": "What type of traffic is described as being able to tolerate a certain amount of latency, jitter, and loss without any noticeable effects?",
        "answers": [
          "voice"
        ]
      },
      {
        "question": "A network manager wants to view the amount of available and free memory, the type of file system, and its permissions. What command should the administrator use on a Cisco router?",
        "answers": [
          "show file systems"
        ]
      },
      {
        "question": "What type of traffic is described as requiring latency to be no more than 400 milliseconds (ms)?",
        "answers": [
          "video"
        ]
      },
      {
        "question": "What type of traffic is described as consisting of traffic that requires a higher priority if interactive?",
        "answers": [
          "data"
        ]
      }
    ],
    "13-14": [
      {
        "question": "A company uses a cloud-based payroll system. Which cloud computing technology is this company using?",
        "answers": [
          "software as a service (SaaS)"
        ]
      },
      {
        "question": "For a data center, what is the difference in the server virtualization data traffic compared with the traditional client-server model?",
        "answers": [
          "There are significant data exchanges between virtual servers."
        ]
      },
      {
        "question": "Which component in a traditional infrastructure device provides Layer 2 and Layer 3 functions to create data paths within a network?",
        "answers": [
          "control plane"
        ]
      },
      {
        "question": "Which network traffic management technology is a basic element in SDN implementations?",
        "answers": [
          "OpenFlow"
        ]
      },
      {
        "question": "Which type of hypervisor would most likely be used in a data center?",
        "answers": [
          "Type 1"
        ]
      },
      {
        "question": "Which is a characteristic of a Type 1 hypervisor?​",
        "answers": [
          "installed directly on a server​"
        ]
      },
      {
        "question": "Which two layers of the OSI model are associated with SDN network control plane functions that make forwarding decisions? (Choose two.)​",
        "answers": [
          "Layer 2",
          "Layer 3"
        ]
      },
      {
        "question": "What pre-populates the FIB on Cisco devices that use CEF to process packets?",
        "answers": [
          "the routing table"
        ]
      },
      {
        "question": "What is a function of the data plane of a network device?",
        "answers": [
          "forwarding traffic flows"
        ]
      },
      {
        "question": "Which statement describes the concept of cloud computing?",
        "answers": [
          "separation of application from hardware"
        ]
      },
      {
        "question": "Which cloud model provides services for a specific organization or entity?",
        "answers": [
          "a private cloud"
        ]
      },
      {
        "question": "What two benefits are gained when an organization adopts cloud computing and virtualization? (Choose two.)",
        "answers": [
          "provides a “pay-as-you-go” model, allowing organizations to treat computing and storage expenses as a utility",
          "enables rapid responses to increasing data volume requirements"
        ]
      },
      {
        "question": "Which type of Hypervisor is implemented when a user with a laptop running the Mac OS installs a Windows virtual OS instance?",
        "answers": [
          "type 2"
        ]
      },
      {
        "question": "A small company is considering moving many of its data center functions to the cloud. What are three advantages of this plan? (Choose three.)",
        "answers": [
          "The company only needs to pay for the amount of processing and storage capacity that it uses.",
          "The company does not need to be concerned about how to handle increasing data storage and processing demands with in-house data center equipment.",
          "The company can increase processing and storage capacity as needed and then decrease capacity when it is no longer needed."
        ]
      },
      {
        "question": "How does virtualization help with disaster recovery within a data center?",
        "answers": [
          "support of live migration"
        ]
      },
      {
        "question": "What technology allows users to access data anywhere and at any time?",
        "answers": [
          "Cloud computing"
        ]
      },
      {
        "question": "Which action takes place in the assurance element of the IBN model?",
        "answers": [
          "verification and corrective action"
        ]
      },
      {
        "question": "Refer to the exhibit. Which data format is used to represent the data for network automation applications?",
        "answers": [
          "JSON"
        ]
      },
      {
        "question": "What is the function of the key contained in most RESTful APIs?",
        "answers": [
          "It is used to authenticate the requesting source."
        ]
      },
      {
        "question": "Which two configuration management tools are developed using Ruby? (Choose two.)",
        "answers": [
          "Puppet",
          "Chef"
        ]
      },
      {
        "question": "Which term is used to describe a set of instructions for execution by the configuration management tool Puppet?",
        "answers": [
          "Manifest"
        ]
      },
      {
        "question": "Which term is used to describe a set of instructions for execution by the configuration management tool SaltStack?",
        "answers": [
          "Pillar"
        ]
      },
      {
        "question": "Which scenario describes the use of a public API?",
        "answers": [
          "It can be used with no restrictions."
        ]
      },
      {
        "question": "What is YAML?",
        "answers": [
          "It is a data format and superset of JSON."
        ]
      },
      {
        "question": "Which RESTFul operation corresponds to the HTTP GET method?",
        "answers": [
          "read"
        ]
      },
      {
        "question": "Which technology virtualizes the network control plane and moves it to a centralized controller?​",
        "answers": [
          "SDN"
        ]
      },
      {
        "question": "What are two functions of hypervisors? (Choose two.)",
        "answers": [
          "to manage virtual machines",
          "to allocate physical system resources to virtual machines"
        ]
      },
      {
        "question": "What is a difference between the functions of Cloud computing and virtualization?",
        "answers": [
          "Cloud computing separates the application from the hardware whereas virtualization separates the OS from the underlying hardware."
        ]
      },
      {
        "question": "How is the YAML data format structure different from JSON?",
        "answers": [
          "It uses indentations."
        ]
      },
      {
        "question": "What is the most widely used API for web services?",
        "answers": [
          "REST"
        ]
      },
      {
        "question": "What is REST?",
        "answers": [
          "It is an architecture style for designing web service applications."
        ]
      },
      {
        "question": "What is a difference between the XML and HTML data formats?",
        "answers": [
          "XML does not use predefined tags whereas HTML does use predefined tags."
        ]
      },
      {
        "question": "To avoid purchasing new hardware, a company wants to take advantage of idle system resources and consolidate the number of servers while allowing for multiple operating systems on a single hardware platform. What service or technology would support this requirement?",
        "answers": [
          "virtualization"
        ]
      },
      {
        "question": "Match the term to the RESTful API request http://www.mapquestapi.com/directions/v2/route?outFormat=json&key=KEY&from=San+Jose,Ca&to=Monterey,Ca component. (Not all options are used.)",
        "answers": [
          "resources -> directions/v2/route",
          "parameters -> from=San+Jose,Ca&to=Monterey,Ca",
          "query -> outFormat=json&key=KEY&from=San+Jose,Ca&to=Monterey,Ca",
          "API server -> http://www.mapquestapi.com",
          "format -> outFormat=json",
          "key -> key=KEY"
        ]
      },
      {
        "question": "Which cloud computing opportunity would provide the use of network hardware such as routers and switches for a particular company?",
        "answers": [
          "infrastructure as a service (IaaS)"
        ]
      },
      {
        "question": "What component is considered the brains of the ACI architecture and translates application policies​?",
        "answers": [
          "the Application Policy Infrastructure Controller"
        ]
      },
      {
        "question": "Which statement describes the concept of cloud computing?",
        "answers": [
          "separation of application from hardware"
        ]
      },
      {
        "question": "In which situation would a partner API be appropriate?",
        "answers": [
          "a vacation service site interacting with hotel databases to display information from all the hotels on its web site"
        ]
      },
      {
        "question": "Because of enormous growth in web traffic, a company has planned to purchase additional servers to help handle the web traffic. What service or technology would support this requirement?",
        "answers": [
          "cloud services"
        ]
      },
      {
        "question": "ABCTech is investigating the use of automation for some of its products. In order to control and test these products, the programmers require Windows, Linux, and MAC OS on their computers. What service or technology would support this requirement?",
        "answers": [
          "virtualization"
        ]
      },
      {
        "question": "What are three components used in the query portion of a typical RESTful API request? (Choose three.)",
        "answers": [
          "format",
          "parameters",
          "key"
        ]
      },
      {
        "question": "A company has recently become multinational. Employees are working remotely, in different time zones, and they need access to company services from any place at any time. What service or technology would support this requirement?",
        "answers": [
          "cloud services"
        ]
      },
      {
        "question": "Following a multicontinent advertising campaign for a new product, a company finds its client database and volume of orders are overloading its on-site computer systems but the company does not have any room to expand. What service or technology would support this requirement?",
        "answers": [
          "cloud services"
        ]
      },
      {
        "question": "A network administrator has been tasked with creating a disaster recovery plan. As part of this plan, the administrator is looking for a backup site for all of the data on the company servers. What service or technology would support this requirement?",
        "answers": [
          "data center"
        ]
      },
      {
        "question": "Which is a requirement of a site-to-site VPN?",
        "answers": [
          "It requires a VPN gateway at each end of the tunnel to encrypt and decrypt traffic."
        ]
      },
      {
        "question": "Which statement describes an important characteristic of a site-to-site VPN?",
        "answers": [
          "It must be statically set up."
        ]
      },
      {
        "question": "Which protocol is attacked when a cybercriminal provides an invalid gateway in order to create a man-in-the-middle attack?",
        "answers": [
          "DHCP"
        ]
      },
      {
        "question": "In which TCP attack is the cybercriminal attempting to overwhelm a target host with half-open TCP connections?",
        "answers": [
          "SYN flood attack"
        ]
      },
      {
        "question": "Which statement describes a VPN?",
        "answers": [
          "VPNs use virtual connections to create a private network through a public network."
        ]
      }
    ]
};

const PRACTICE_EXAM_DB = [
    [
    {
      "question": "An instructor is reviewing student answers on a previous term exam to prepare for a lecture on IPv6. What would be a good point for the instructor to make when explaining an IPv6 GUA (global unicast address)?",
      "answers": [
        "It is routable on the IPv6 internet."
      ]
    },
    {
      "question": "An administrator needs to implement a 2.4GHz WLAN that requires multiple APs. Which two are characteristics of the 2.4GHz channels? (Choose two.)",
      "answers": [
        "There are 11 channels for North America identified by the 802.11b standard.",
        "Each channel is allotted 22 MHz bandwidth."
      ]
    },
    {
      "question": "A technician must accommodate at least 500 subnets from address 172.16.0.0/16. What is an appropriate subnet mask and corresponding number of available host IP addresses per subnet to meet the requirement?",
      "answers": [
        "255.255.255.128 and 126 hosts"
      ]
    },
    {
      "question": "Refer to the exhibit. A PC with the MAC address of 0800.069d.3841 attached to port Fa0/8 is sending data to a device that has the MAC address of 6400.6a5a.6821. What will the switch do first to handle the data transfer?",
      "answers": [
        "The switch will add the address 0800.069d.3841 to the MAC address table."
      ]
    },
    {
      "question": "A network engineer is giving a tour of the company network operations center to a college class. The engineer is trying to describe how a WAN and connectivity to the internet relate to the network infrastructure. Which statement correctly describes network infrastructure and network communication?",
      "answers": [
        "Communication across the internet requires application of recognized technologies and standards."
      ]
    },
    {
      "question": "A network engineer is designing a borderless switched network in a hierarchical fashion. Which guideline might cause the engineer to implement a three-tier layer model?",
      "answers": [
        "Access layer L2 switches connect to distribution layer L3 switches, which implement routing, quality of service, and security."
      ]
    },
    {
      "question": "Two students are discussing routers and one statement that is said between them is accurate. Which statement is that?",
      "answers": [
        "A default route provides a way for packets that do not match a specific route in the routing table to be forwarded."
      ]
    },
    {
      "question": "What are two benefits of using virtualization? (Choose two.)",
      "answers": [
        "The virtual machine is no longer dependent on a specific hardware platform.",
        "Multiple virtual machines can be running simultaneously on a single physical device."
      ]
    },
    {
      "question": "Students in a data networking class are reviewing materials in preparation for a quiz. Which statement describes the operation of an access control method for shared network media?",
      "answers": [
        "The CSMA/CA method attempts to avoid collisions by having each device informing others how long the media will be unavailable."
      ]
    },
    {
      "question": "A network administrator is designing an IPv4 addressing scheme and requires these subnets.",
      "answers": [
        "3 subnets of 126 hosts with a 255.255.255.128 mask\n6 subnets of 30 hosts with a 255.255.255.224 mask"
      ]
    },
    {
      "question": "A group of network technicians is discussing IPv6 multicast processes. What is a feature of one type of IPv6 multicast address that should be discussed?",
      "answers": [
        "The all-nodes multicast group has the same effect as an IPv4 broadcast address."
      ]
    },
    {
      "question": "Which LAN attack allows for identification of connected Cisco devices which are sending unencrypted broadcasts?",
      "answers": [
        "CDP reconnaissance"
      ]
    },
    {
      "question": "What is a characteristic of the REST API?",
      "answers": [
        "most widely used API for web services"
      ]
    },
    {
      "question": "A network administrator is using the Cisco DNA Center to monitor network health and to troubleshoot network issues. Which area should the administrator use to perform these tasks?",
      "answers": [
        "ASSURANCE"
      ]
    },
    {
      "question": "Which term describes the process of managing configuration changes of network devices in an orderly fashion?",
      "answers": [
        "orchestration"
      ]
    },
    {
      "question": "Which function of the Cisco intent-based networking system (IBNS) enables network operators to express the expected networking behavior that will best support the business intent?",
      "answers": [
        "translation"
      ]
    },
    {
      "question": "Which type of API would be used to allow authorized salespeople of an organization access to internal sales data from their mobile devices?",
      "answers": [
        "private"
      ]
    },
    {
      "question": "Refer to the exhibit. In the displayed JSON data representation, which symbol should be used to replace the question mark in lines 2 and 15?",
      "answers": [
        "square brackets [ ]"
      ]
    },
    {
      "question": "What action takes place when a frame entering a switch has a multicast destination MAC address?",
      "answers": [
        "The switch will forward the frame out all ports except the incoming port."
      ]
    },
    {
      "question": "A network engineer is configuring secure remote access to a Cisco router. Which two commands would be issued in the line configuration mode of the router to implement SSH? (Choose two.)",
      "answers": [
        "login local",
        "transport input ssh"
      ]
    },
    {
      "question": "When an end device requests services from a DHCPv4 server it receives a host IPv4 address and a subnet mask. Which two other IPv4 addresses are also typically provided to a DCHPv4 client? (Choose two.)",
      "answers": [
        "DNS server address",
        "LAN default gateway address"
      ]
    },
    {
      "question": "A network engineer wants to synchronize the time of a router with an NTP server at the IPv4 address 209.165.200.225. The exit interface of the router is configured with an IPv4 address of 192.168.212.11. Which global configuration command should be used to configure the NTP server as the time source for this router?",
      "answers": [
        "ntp server 209.165.200.225"
      ]
    },
    {
      "question": "When testing a new web server, a network administrator cannot access the home page when the server name is entered into a web browser on a PC. Pings to both the IPv4 and IPv6 addresses of the server are successful. What could be the problem?",
      "answers": [
        "DNS is not resolving the server name to an IPv4 or IPv6 address."
      ]
    },
    {
      "question": "A network engineer is using SNMP manager software to monitor and manage network performance. In addition to polling network devices at regular time intervals, the engineer is configuring the devices to generate messages that inform the SNMP manager of specified events. What message type is configured on those devices that allows them to send unsolicited messages?",
      "answers": [
        "trap"
      ]
    },
    {
      "question": "A wireless network engineer is implementing updated wireless equipment within the company. Which statement describes a wireless security protocol?",
      "answers": [
        "WPA2-Enterprise is intended for enterprise networks and users must authenticate using 802.1X standard."
      ]
    },
    {
      "question": "Refer to the exhibit. Which access list configuration on router R1 will prevent traffic from the 192.168.2.0 LAN from reaching the Restricted LAN while permitting traffic from any other LAN?",
      "answers": [
        "R1(config-std-nacl)# deny 192.168.2.0\nR1(config-std-nacl)# permit any\nR1(config)# interface G0/2\nR1(config-if)# ip access-group BLOCK_LAN2 out"
      ]
    },
    {
      "question": "An administrator who is troubleshooting connectivity issues on a switch notices that a switch port configured for port security is in the err-disabled state. After verifying the cause of the violation, how should the administrator re-enable the port without disrupting network operation?",
      "answers": [
        "Issue the shutdown command followed by the no shutdown command on the interface."
      ]
    },
    {
      "question": "An IT security specialist enables port security on a switch port of a Cisco switch. What is the default violation mode in use until the switch port is configured to use a different violation mode?",
      "answers": [
        "shutdown"
      ]
    },
    {
      "question": "Refer to the exhibit. Which interface on switch S1 should be configured as a DHCP snooping trusted port to help mitigate DHCP spoofing attacks?",
      "answers": [
        "G0/23"
      ]
    },
    {
      "question": "Which statement is an accurate description of a VPN type?",
      "answers": [
        "In a site-to-site VPN internal hosts have no knowledge that a VPN is being used."
      ]
    },
    {
      "question": "A network administrator of a college is configuring WLAN security with WPA2 Enterprise authentication. Which server is required when deploying this type of authentication?",
      "answers": [
        "RADIUS"
      ]
    },
    {
      "question": "When configuring a switch for SSH access, what other command that is associated with the login local command is required to be entered on the switch?",
      "answers": [
        "username,secret username,secret"
      ]
    },
    {
      "question": "What term describes a process where a router simply discards any packet that arrives at the end of a queue that has completely used up its packet-holding resources?",
      "answers": [
        "tail drop"
      ]
    },
    {
      "question": "In an OSPF network when are DR and BDR elections required?",
      "answers": [
        "when the routers are interconnected over a common Ethernet network"
      ]
    },
    {
      "question": "A network engineer has been asked to prepare a router and to ensure that it can route IPv6 packets. Which command should the network engineer ensure has been entered on the router?",
      "answers": [
        "ipv6 unicast-routing"
      ]
    },
    {
      "question": "Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router. (Not all targets are used.)",
      "answers": [
        "packets with destination of 172.17.6.15 -> FastEthernet0/0",
        "packets with destination of 172.17.14.8 -> FastEthernet0/1",
        "packets with destination of 172.17.12.10 -> FastEthernet1/0",
        "packets with destination of 172.17.10.5 -> FastEthernet1/1",
        "packets with destination of 172.17.8.20 -> Serial0/0/0"
      ]
    },
    {
      "question": "Consider the following static route configured on a Cisco router:",
      "answers": [
        "2001:db8:acad:4::/64"
      ]
    },
    {
      "question": "A network administrator configures a router with the ipv6 route ::/0 Serial2/0 command. What is the purpose of this command?",
      "answers": [
        "to enable a router to forward packets for which there is no route in the routing table"
      ]
    },
    {
      "question": "What is the purpose of a First Hop Redundancy Protocol?",
      "answers": [
        "to provide two or more routers working together, sharing an IP and MAC address of a virtual default gateway"
      ]
    },
    {
      "question": "A network engineer examining the configuration of a Cisco router sees a network entry in a routing table listed with a code O. Which kind of route is this?",
      "answers": [
        "a route dynamically learned through the OSPF routing protocol"
      ]
    },
    {
      "question": "What defines a host route on a Cisco router?",
      "answers": [
        "An IPv4 static host route configuration uses a destination IP address of a specific device and a /32 subnet mask."
      ]
    },
    {
      "question": "Refer to the exhibit. Packets destined to which two networks will require the router to perform a recursive lookup? (Choose two.)",
      "answers": [
        "10.0.0.0/8",
        "192.168.2.0/24"
      ]
    },
    {
      "question": "The routing table of a Cisco router has four static routes for network 10.0.0.0. Which route is the best match for a packet entering the router with a destination of 10.16.0.10?",
      "answers": [
        "S 10.16.0.0/24 [1/0] via 202.16.0.2"
      ]
    },
    {
      "question": "Match the FHRP protocols to the appropriate description. (Not all options are used.)",
      "answers": [
        "GLBP -> a Cisco proprietary FHRP that provides load sharing in addition to redundancy",
        "HSRP -> a Cisco proprietary FHRP that provides redundancy through use of an active device and standby device",
        "VRRP -> an open standard FHRP that provides redundancy through use of a virtual routers master and one or more backups"
      ]
    },
    {
      "question": "Which task has to be performed on Router 1 for it to establish an OSPF adjacency with Router 2?",
      "answers": [
        "Change the subnet mask of interface FastEthernet 0/0 to 255.255.255.0."
      ]
    },
    {
      "question": "What is the recommended Cisco best practice for configuring an OSPF-enabled router so that each router can be easily identified when troubleshooting routing issues?",
      "answers": [
        "a route dynamically learned through the OSPF routing protocol"
      ]
    },
    {
      "question": "In FHRP terminology, what represents a set of routers that present the illusion of a single router to hosts?",
      "answers": [
        "virtual router"
      ]
    },
    {
      "question": "A network administrator is configuring the SNMP function on a Cisco 3500 series WLC. The task is to add an SNMP trap server to which this WLC will forward SNMP log messages. Which tab should the administrator use to add the SNMP trap server information?",
      "answers": [
        "MANAGEMENT"
      ]
    },
    {
      "question": "Match the STP port state with the appropriate description. (Not all options are used.)",
      "answers": [
        "disabled -> The port does not participate in spanning tree and does not forward frames.",
        "blocking -> The port receives BPDU frames but does not forward frames.",
        "learning -> The port prepares to participate in frame forwarding and begins to populate the MAC address table."
      ]
    },
    {
      "question": "Refer to the exhibit. All the displayed switches are Cisco 2960 switches with the same default priority and operating at the same bandwidth. Which three ports will be STP designated ports? (Choose three.)",
      "answers": [
        "fa0/21",
        "fa0/10",
        "fa0/13"
      ]
    },
    {
      "question": "Refer to the exhibit. A network technician issues the command show vlan to verify the VLAN configuration. Based on the output, which port should be assigned with native VLAN?",
      "answers": [
        "Fa0/20"
      ]
    },
    {
      "question": "What is the purpose of setting the native VLAN separate from data VLANs?",
      "answers": [
        "A separate VLAN should be used to carry uncommon untagged frames to avoid bandwidth contention on data VLANs."
      ]
    },
    {
      "question": "Which is a characteristic of EtherChannel?",
      "answers": [
        "STP treats all interfaces in an EtherChannel bundle as a single logical link."
      ]
    },
    {
      "question": "What characteristic describes how data or voice VLANs are configured on a network?",
      "answers": [
        "A switch port that has been configured in access mode can only belong to one data VLAN at a time."
      ]
    },
    {
      "question": "What are two load-balancing methods in the EtherChannel technology? (Choose two.)",
      "answers": [
        "source IP to destination IP",
        "source MAC to destination MAC"
      ]
    },
    {
      "question": "A network administrator is configuring a WLAN with WPA2 Enterprise on a Cisco 3500 series WLC. Client authentications will be handled by a RADIUS server. Which tab should the administrator use to add the RADIUS server information?",
      "answers": [
        "SECURITY"
      ]
    },
    {
      "question": "An administrator issues the show vlan brief command on a Cisco switch and the output shows that all ports are currently assigned to the default VLAN. What conclusion can be drawn?",
      "answers": [
        "There is a security risk because the management VLAN and the native VLAN are the same."
      ]
    },
    {
      "question": "If no bridge priority is configured in PVST, which criteria is considered when electing the root bridge?",
      "answers": [
        "lowest MAC address"
      ]
    },
    {
      "question": "Refer to the exhibit. A network administrator issues the show lldp neighbors command to display information about neighboring devices. What can be determined based on the information?",
      "answers": [
        "Device C1 is a switch."
      ]
    },
    {
      "question": "What characteristic completes the following statement?",
      "answers": [
        "the next-hop address of two different adjacent routers."
      ]
    },
    {
      "question": "Which two protocols provide gateway redundancy at Layer 3? (Choose two.)",
      "answers": [
        "VRRP",
        "HSRP"
      ]
    },
    {
      "question": "Which security solution identifies incoming threats and blocks them from entering the corporate network?",
      "answers": [
        "intrusion prevention systems"
      ]
    },
    {
      "question": "Refer to the exhibit. What does the hyphen symbol (-) indicate in the YAML data structure?",
      "answers": [
        "an element in an array"
      ]
    },
    {
      "question": "In an Intent-Based Networking architecture, which two items are considered parts of an overlay fabric? (Choose two.)",
      "answers": [
        "IPsec protocol",
        "CAPWAP"
      ]
    },
    {
      "question": "What is an architectural constraint to which a true RESTful API web service must adhere?",
      "answers": [
        "It runs as client/server model."
      ]
    },
    {
      "question": "A programmer is using Ansible as the configuration management tool. Which term is used to describe a set of instructions for execution?",
      "answers": [
        "Playbook"
      ]
    },
    {
      "question": "What action takes place when the source MAC address of a frame entering a switch is not in the MAC address table?",
      "answers": [
        "The switch adds the MAC address and incoming port number to the table."
      ]
    },
    {
      "question": "In a controller-based wireless network, a Cisco WLC device has four ports connected to a switch to form a bundle. This bundle will provide load balancing and redundancy. Which two configurations must be performed on the four switch ports that connect to the WLC? (Choose two.)",
      "answers": [
        "trunking mode",
        "EtherChannel"
      ]
    },
    {
      "question": "When configuring a wireless LAN, to which category does a home wireless router belong?",
      "answers": [
        "autonomous AP"
      ]
    },
    {
      "question": "Which feature or function does an AP provide in a wireless LAN?",
      "answers": [
        "A wireless device has to be associated to an AP in order to have access to network resources."
      ]
    },
    {
      "question": "A network engineer is designing a borderless switched network in a hierarchical fashion. Why might the engineer consider using a two-tier layer model?",
      "answers": [
        "It is recommended in smaller campus locations where there are fewer users accessing the network."
      ]
    },
    {
      "question": "A technician is troubleshooting a network device and suspects there might be a duplex mismatch. What could cause a duplex mismatch?",
      "answers": [
        "interface misconfiguration"
      ]
    },
    {
      "question": "A pharmaceutical company wants to contract the services of a cloud provider to store employee data and company-specific applications with strict access security. Which type of cloud would be the most appropriate for this scenario?",
      "answers": [
        "private cloud"
      ]
    },
    {
      "question": "Which LAN attack involves the sending of a double-tagged 802.1Q frame to the switch?",
      "answers": [
        "VLAN double-tagging attack"
      ]
    },
    {
      "question": "SNMP has been implemented on a network to monitor and manage devices. Which SNMP authentication process is preferred when SNMP managers communicate with SNMP agents?",
      "answers": [
        "MD5 or SHA authentication"
      ]
    },
    {
      "question": "What characteristic completes the following statement?",
      "answers": [
        "the interface type and interface number."
      ]
    },
    {
      "question": "A network engineer is examining the routing table of a Cisco router. Consider the following routing table entry:",
      "answers": [
        "It is the interface R4 uses to send data that is destined for 10.2.2.0/30."
      ]
    },
    {
      "question": "When creating an IPv6 static route, when must a next-hop IPv6 address and an exit interface both be specified?",
      "answers": [
        "when the next hop is a link-local address"
      ]
    },
    {
      "question": "What characterizes a floating static route?",
      "answers": [
        "It is a less trustworthy route than the primary route."
      ]
    },
    {
      "question": "Which feature on a Cisco router permits the forwarding of traffic for which there is no specific route?",
      "answers": [
        "gateway of last resort"
      ]
    },
    {
      "question": "Which ACE would permit traffic from hosts only on the 192.168.8.0/22 subnet?",
      "answers": [
        "permit 192.168.8.0 0.0.3.255"
      ]
    },
    {
      "question": "Refer to the exhibit. A network administrator needs to add an ACE to the TRAFFIC-CONTROL ACL that will deny IP traffic from the subnet 172.23.16.0/20. Which ACE will meet this requirement?",
      "answers": [
        "5 deny 172.23.16.0 0.0.15.255"
      ]
    },
    {
      "question": "What are two syntax rules for writing a JSON array? (Choose two.)",
      "answers": [
        "Values are enclosed in square brackets.",
        "Each value in the array is separated by a comma."
      ]
    },
    {
      "question": "What is the most likely cause when the output of the show interface command shows that a switch interface is up but the line protocol is down?",
      "answers": [
        "An encapsulation type mismatch exists."
      ]
    },
    {
      "question": "Refer to the exhibit. A network administrator is reviewing the configuration of switch S1. Which protocol has been implemented to group multiple physical ports into one logical link?",
      "answers": [
        "PAGP"
      ]
    },
    {
      "question": "A network administrator is considering whether PoE features are required in a specific network installation. Which option provides valid information about PoE?",
      "answers": [
        "It can be used by IP phones, allowing them to be installed anywhere that there is an Ethernet cable."
      ]
    },
    {
      "question": "How are network data transmissions calculated?",
      "answers": [
        "goodput + traffic overhead = throughput"
      ]
    },
    {
      "question": "Refer to the exhibit. A corporate network is using NTP to synchronize the time across devices. What can be determined from the displayed output?",
      "answers": [
        "Router03 is a stratum 2 device that can provide NTP service to other devices in the network."
      ]
    },
    {
      "question": "Refer to the exhibit. Which source address is being used by router R1 for packets being forwarded to the Internet?",
      "answers": [
        "209.165.200.225"
      ]
    },
    {
      "question": "A user is reading a book from the website https://www.books-info.com/author50/book1.html#page150. Which term is used to describe the component www.books-info.com/author50/book1.html?",
      "answers": [
        "URN"
      ]
    },
    {
      "question": "What are three components used in the query portion of a typical RESTful API request? (Choose three.)",
      "answers": [
        "key",
        "format",
        "parameters"
      ]
    },
    {
      "question": "Which two configuration management tools are developed using Python? (Choose two.)",
      "answers": [
        "Ansible",
        "SaltStack"
      ]
    },
    {
      "question": "What characteristic completes the following statement? When an IPv6 static route is configured, and traffic is to be directed to one specific server, the static route requires …",
      "answers": [
        "a destination host route with a /128 prefix."
      ]
    },
    {
      "question": "When two or more routes to the same destination are learned from different routing protocols, what does a router use to choose between the routes?",
      "answers": [
        "administrative distance"
      ]
    },
    {
      "question": "Which LAN attack enables traffic from one VLAN to be seen by another VLAN without the aid of a router?",
      "answers": [
        "VLAN hopping attack"
      ]
    },
    {
      "question": "What are the three categories of tools that can be used in IP networks to implement QoS? (Choose three.)",
      "answers": [
        "classification and marking",
        "congestion management",
        "congestion avoidance"
      ]
    },
    {
      "question": "Which is a QoS model that a network engineer would implement to ensure a source to destination quality of service standard for a specified data flow?",
      "answers": [
        "integrated services"
      ]
    },
    {
      "question": "A network engineer is configuring a Cisco switch when this message is displayed.",
      "answers": [
        "Error"
      ]
    },
    {
      "question": "In a controller-based wireless network, the WLC device may have multiple ports connected to a switch to form a bundle that provides load-balancing and redundancy. Which protocol supports the port bundle between a Cisco WLC and a Cisco switch?",
      "answers": [
        "LAG"
      ]
    },
    {
      "question": "In a controller-based wireless network, a Cisco WLC device has four ports connected to a switch to form a bundle. This bundle will provide load-balancing and redundancy. Which two configurations must be performed on the four switch ports that connect to the WLC? (Choose two.)",
      "answers": [
        "trunking mode",
        "EtherChannel"
      ]
    },
    {
      "question": "What is a benefit of PortFast configured on a Cisco switch port?",
      "answers": [
        "It allows a device connected to this port to access the network without waiting for STP convergence on each VLAN."
      ]
    },
    {
      "question": "A network administrator is configuring security for new WLANs on a Cisco 3500 series WLC. What is the default protocol used for authentication key management?",
      "answers": [
        "802.1X"
      ]
    },
    {
      "question": "Which two statements describe an Internet-based connectivity option? (Choose two.)",
      "answers": [
        "When using a satellite to connect to the internet, the reception of signals can be affected by storms.",
        "VPNs provide security for teleworkers who use DSL to access the corporate network through the internet."
      ]
    },
    {
      "question": "What is a difference between autonomous APs and controller-based APs in wireless LANs?",
      "answers": [
        "When wireless demands increase, controller-based APs provide a better solution than do autonomous APs."
      ]
    },
    {
      "question": "Two recent networking graduates from a local college have just been hired by a communication company to work on various network cabling projects throughout the state. Why would the company consider using fiber-optic cabling in long-haul networks?",
      "answers": [
        "to provide connectivity between countries or between cities"
      ]
    },
    {
      "question": "An employee is logging into a company account and another employee stands in such a way to see the account ID and password. Which kind of threat is this?",
      "answers": [
        "identity theft"
      ]
    },
    {
      "question": "What is the purpose of the overload keyword in the ip nat inside source list 1 pool NAT_POOL overload command?",
      "answers": [
        "It allows many inside hosts to share one or a few inside global addresses."
      ]
    },
    {
      "question": "What two types of always-on internet connections are commonly used by teleworkers to communicate with a company? (Choose two.)",
      "answers": [
        "cable",
        "DSL"
      ]
    },
    {
      "question": "A technician needs to add a new wireless device to a small WLAN. The WLAN is a mixture of old and newer 802.11b and 802.11g devices. What choice for the new device would provide the most interoperability for present and future growth?",
      "answers": [
        "Add a new 802.11n device."
      ]
    },
    {
      "question": "What action takes place when a frame entering a switch has a unicast destination MAC address appearing in the MAC address table?",
      "answers": [
        "The switch forwards the frame out of the specified port."
      ]
    },
    {
      "question": "A technician is reviewing a report of slowness during peak traffic periods and is looking at performance on a particular switch. What should the technician be aware of about memory buffering on a switch?",
      "answers": [
        "Shared memory allows traffic received on one port to be transmitted to another port without moving the data to a different queue."
      ]
    },
    {
      "question": "A company deploys FlexConnect APs in the remote office and uses CAPWAP to allow a WLC in their corporate headquarters office to manage WLANs in the remote office. One day the network administrator in the remote office notices that the FlexConnect APs are operating in the standalone mode. Which two functions can these APs perform in this mode? (Choose two.)",
      "answers": [
        "switching client data traffic locally",
        "client authentication locally"
      ]
    },
    {
      "question": "What term describes a default queuing method where packets are sent out of an interface in the order in which they arrive?",
      "answers": [
        "first-in, first-out (FIFO)"
      ]
    },
    {
      "question": "An employee who travels constantly for work needs to access the company network remotely. Which security mechanism offers a secure connection?",
      "answers": [
        "virtual private network"
      ]
    },
    {
      "question": "Which protocol defines port-based authentication to restrict unauthorized hosts from connecting to the LAN through publicly accessible switch ports?",
      "answers": [
        "802.1x"
      ]
    },
    {
      "question": "What is a spyware threat?",
      "answers": [
        "Software installed on a user device secretly collects information about the user."
      ]
    },
    {
      "question": "What characteristic completes the following statement? When an IPv6 static route is configured, a fully-specified configuration should be used with …",
      "answers": [
        "a directly connected multiaccess network."
      ]
    },
    {
      "question": "Which LAN attack spoofs the root bridge to change the topology of a network?",
      "answers": [
        "STP attack"
      ]
    },
    {
      "question": "Refer to the exhibit. A network administrator is reviewing port and VLAN assignments on switch S2 and notices that interfaces Gi0/1 and Gi0/2 are not included in the output. Why would the interfaces be missing from the output?",
      "answers": [
        "They are configured as trunk interfaces."
      ]
    },
    {
      "question": "Data is being sent from a source PC to a destination server. Which three statements correctly describe the function of TCP or UDP in this situation? (Choose three.)",
      "answers": [
        "The source port field identifies the running application or service that will handle data returning to the PC.",
        "UDP segments are encapsulated within IP packets for transport across the network.",
        "The UDP destination port number identifies the application or service on the server which will handle the data."
      ]
    },
    {
      "question": "Which two 802.11 WLAN standards operate in both the 2.4 GHz and in the 5 GHz frequency bands? (Choose two.)",
      "answers": [
        "802.11ax",
        "802.11n"
      ]
    },
    {
      "question": "Which two protocols are used to provide server-based AAA authentication? (Choose two.)",
      "answers": [
        "TACACS+",
        "RADIUS"
      ]
    },
    {
      "question": "A network engineer is examining Cisco router configurations across an internetwork. Consider the following routing table entry",
      "answers": [
        "110"
      ]
    },
    {
      "question": "What term describes allowing delay-sensitive packets such as voice to be sent before packets in other queues based on strict priority queuing (PQ)?",
      "answers": [
        "low latency queuing (LLQ)"
      ]
    },
    {
      "question": "Which two 802.11 WLAN standards operate in both the 2.4 Ghz and in the 5Ghz frequency bands?(Choose two)",
      "answers": [
        "802.11ax",
        "802.11n"
      ]
    },
    {
      "question": "A network engineer is configuring a Cisco router as a DHCP relay. When issuing the ip helper-address command in the interface configuration mode which IPv4 address is added to the command?",
      "answers": [
        "DHCPv4 server address"
      ]
    },
    {
      "question": "What action takes place when the source MAC address of a frame entering a switch appears in the MAC address table associated with a different port?",
      "answers": [
        "The switch replaces the old entry and uses the more current port."
      ]
    },
    {
      "question": "Refer to the exhibit. Static NAT is being configured to allow PC 1 access to the web server on the internal network. What two addresses are needed in place of A and B to complete the static NAT configuration? (Choose two.)",
      "answers": [
        "A = 10.1.0.13",
        "B = 209.165.201.1"
      ]
    },
    {
      "question": "In computer network communications which data transfer process does the application layer protocol FTP use?",
      "answers": [
        "client-server"
      ]
    },
    {
      "question": "What action takes place when a frame entering a switch has a broadcast destination MAC address?",
      "answers": [
        "The switch will forward the frame out all ports except the incoming port."
      ]
    },
    {
      "question": "Which LAN attack involves sending unsolicited ARP replies, with the MAC Address of the threat actor and the IP address of the default gateway, to other hosts on a subnet?",
      "answers": [
        "ARP attack"
      ]
    },
    {
      "question": "A network engineer is examining the configuration of a router and notices that interface Gi0/0 has been configured with the ip address dhcp command. Which statement describes the IP address condition of this interface?",
      "answers": [
        "The router interface is configured as a DHCPv4 client."
      ]
    },
    {
      "question": "What term describes holding packets in memory until resources become available to transmit them?",
      "answers": [
        "queuing"
      ]
    },
    {
      "question": "What defines a two-tier spine-leaf topology?",
      "answers": [
        "The Cisco APICs and all other devices in the network physically attach to leaf switches."
      ]
    },
    {
      "question": "What characteristic completes the following statement?\nWhen an IPv6 static route is configured, as a default route, the destination network is …",
      "answers": [
        "::/0."
      ]
    },
    {
      "question": "Which LAN attack involves a rogue server connected to the network providing false IP configuration parameters to legitimate clients?",
      "answers": [
        "DHCP starvation attack"
      ]
    },
    {
      "question": "Which LAN attack prevents hosts from obtaining dynamically assigned IP addresses?",
      "answers": [
        "DHCP starvation attack"
      ]
    },
    {
      "question": "What term describes adding a value to the packet header, as close to the source as possible, so that the packet matches a defined policy?",
      "answers": [
        "traffic marking"
      ]
    },
    {
      "question": "What action takes place when the source MAC address of a frame entering a switch is in the MAC address table?",
      "answers": [
        "The switch updates the refresh timer for the entry."
      ]
    },
    {
      "question": "What action takes place when a frame entering a switch has a unicast destination MAC address that is not in the MAC address table?",
      "answers": [
        "The switch will forward the frame out all ports except the incoming port."
      ]
    }
],
[
    {
      "question": "Which QoS mechanism allows delay-sensitive data, such as voice, to be sent first before packets in other queues are sent?",
      "answers": [
        "LLQ"
      ]
    },
    {
      "question": "Which QoS technique retains excess packets in a separate queue for later transmission?",
      "answers": [
        "shaping"
      ]
    },
    {
      "question": "What term describes adding a value to the packet header, as close to the source as possible, so that the packet matches a defined policy?",
      "answers": [
        "traffic marking"
      ]
    },
    {
      "question": "What is a characteristic of the distribution layer in the three layer hierarchical model?",
      "answers": [
        "provides access to the rest of the network through switching, routing, and network access policies"
      ]
    },
    {
      "question": "Which two methods help to prevent the disruption of network services? (Choose two.)",
      "answers": [
        "installing duplicate equipment to provide failover services",
        "using redundant connections to provide alternate physical paths"
      ]
    },
    {
      "question": "Which technology provides laptops the ability to function on a cellular network?",
      "answers": [
        "mobile hotspot"
      ]
    },
    {
      "question": "Which two types of devices are specific to WAN environments and are not found on a LAN? (Choose two.)",
      "answers": [
        "broadband modem",
        "CSU/DSU"
      ]
    },
    {
      "question": "Which three traffic-related factors would influence selecting a particular WAN link type? (Choose three.)",
      "answers": [
        "amount of traffic",
        "security needs",
        "type of traffic"
      ]
    },
    {
      "question": "Which type of NAT maps a single inside local address to a single inside global address?",
      "answers": [
        "static"
      ]
    },
    {
      "question": "Refer to the exhibit. What has to be done in order to complete the static NAT configuration on R1?",
      "answers": [
        "Interface S0/0/0 should be configured with the command ip nat outside."
      ]
    },
    {
      "question": "Refer to the exhibit. R1 is configured for static NAT. What IP address will Internet hosts use to reach PC1?",
      "answers": [
        "209.165.200.225"
      ]
    },
    {
      "question": "A network administrator is troubleshooting the dynamic NAT that is configured on router R2. Which command can the administrator use to see the total number of active NAT translations and the number of addresses that are allocated from the NAT pool?",
      "answers": [
        "R2# show ip nat statistics"
      ]
    },
    {
      "question": "What is correct in relation to NAT for IPv6?",
      "answers": [
        "It is a temporary mechanism to assist in the migration from IPv4 to IPv6."
      ]
    },
    {
      "question": "Which three statements are generally considered to be best practices in the placement of ACLs? (Choose three.)",
      "answers": [
        "Filter unwanted traffic before it travels onto a low-bandwidth link.",
        "Place standard ACLs close to the destination IP address of the traffic.",
        "Place extended ACLs close to the source IP address of the traffic."
      ]
    },
    {
      "question": "Refer to the exhibit. The Gigabit interfaces on both routers have been configured with subinterface numbers that match the VLAN numbers connected to them. PCs on VLAN 10 should be able to print to the P1 printer on VLAN 12. PCs on VLAN 20 should print to the printers on VLAN 22. What interface and in what direction should you place a standard ACL that allows printing to P1 from data VLAN 10, but stops the PCs on VLAN 20 from using the P1 printer? (Choose two.)",
      "answers": [
        "R1 Gi0/1.12",
        "outbound"
      ]
    },
    {
      "question": "If a router has two interfaces and is routing both IPv4 and IPv6 traffic, how many ACLs could be created and applied to it?",
      "answers": [
        "8"
      ]
    },
    {
      "question": "Which type of Hypervisor is implemented when a user with a laptop running the Mac OS installs a Windows virtual OS instance?",
      "answers": [
        "type 2"
      ]
    },
    {
      "question": "Which two layers of the OSI model are associated with SDN network control plane functions that make forwarding decisions? (Choose two.)​",
      "answers": [
        "Layer 2",
        "Layer 3"
      ]
    },
    {
      "question": "What defines a two-tier spine-leaf topology?",
      "answers": [
        "The Cisco APICs and all other devices in the network physically attach to leaf switches."
      ]
    },
    {
      "question": "Which SNMP message type informs the network management system (NMS) immediately of certain specified events?",
      "answers": [
        "Trap"
      ]
    },
    {
      "question": "Which number represents the most severe level of syslog logging?",
      "answers": [
        "0"
      ]
    },
    {
      "question": "Which command will backup the configuration that is stored in NVRAM to a TFTP server?",
      "answers": [
        "copy startup-config tftp"
      ]
    },
    {
      "question": "Which statement describes a feature of site-to-site VPNs?",
      "answers": [
        "Internal hosts send normal, unencapsulated packets."
      ]
    },
    {
      "question": "Which VPN solution allows the use of a web browser to establish a secure, remote-access VPN tunnel to the ASA?",
      "answers": [
        "clientless SSL"
      ]
    },
    {
      "question": "Which two types of VPNs are examples of enterprise-managed remote access VPNs? (Choose two.)",
      "answers": [
        "clientless SSL VPN",
        "client-based IPsec VPN"
      ]
    },
    {
      "question": "When JSON data format is being used, what characters are used to hold objects?",
      "answers": [
        "double braces { }"
      ]
    },
    {
      "question": "Which two statements describe remote access VPNs? (Choose two.)",
      "answers": [
        "Client software is usually required to be able to access the network.",
        "Remote access VPNs support the needs of telecommuters and mobile users."
      ]
    },
    {
      "question": "Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?",
      "answers": [
        "Router R4 will become the DR and router R1 will become the BDR."
      ]
    },
    {
      "question": "Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers as shown. The routers are unable to form a neighbor adjacency. What should be done to fix the problem?",
      "answers": [
        "Change the IP address on S0/0 of router R2 to 192.168.20.2."
      ]
    },
    {
      "question": "What are the two purposes of an OSPF router ID? (Choose two.)",
      "answers": [
        "to uniquely identify the router within the OSPF domain",
        "to facilitate router participation in the election of the designated router"
      ]
    },
    {
      "question": "Which command will a network engineer issue to verify the configured hello and dead timer intervals on a point-to-point WAN link between two routers that are running OSPFv2?",
      "answers": [
        "show ip ospf interface serial 0/0/0"
      ]
    },
    {
      "question": "Refer to the exhibit. What is the OSPF cost to reach the router A LAN 172.16.1.0/24 from B?",
      "answers": [
        "65"
      ]
    },
    {
      "question": "Refer to the exhibit. Which data format is used to represent the data for network automation applications?",
      "answers": [
        "YAML"
      ]
    },
    {
      "question": "A user is reading a book from the website https://www.books-info.com/author1a/book2.html#page100 . Which part of the web link is called a fragment?",
      "answers": [
        "#page100"
      ]
    },
    {
      "question": "Refer to the exhibit. Why are routers R1 and R2 not able to establish an OSPF adjacency?",
      "answers": [
        "The serial interfaces are not in the same area."
      ]
    },
    {
      "question": "A network technician has used the access-list 1 permit 172.16.0.0 0.0.0.255 command to configure NAT on an edge router to translate only four networks, 172.16.0.0 /24, 172.16.1.0 /24, 172.16.2.0 /24, and 172.16.3.0 /24. After receiving complaints about limited access to the Internet, issuing the show ip nat translations command reveals that some networks are missing from the output. Which change will resolve the problem?",
      "answers": [
        "The access list should be replaced with access-list 1 permit 172.16.0.0 0.0.3.255"
      ]
    },
    {
      "question": "Which type of tool would an administrator use to capture packets that are going to and from a particular device?",
      "answers": [
        "protocol analyzer"
      ]
    },
    {
      "question": "A user reports that the workstation cannot connect to a networked printer in the office in order to print a report created with word processing software. Which troubleshooting action by the helpdesk technician would follow the divide-and-conquer approach?",
      "answers": [
        "Ask the user to issue the ipconfig command."
      ]
    },
    {
      "question": "Match the OSPF state with the order in which it occurs. (Not all options are used.)",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2025-02-12_111248.jpg"
    },
    {
      "question": "When an OSPF network is converged and no network topology change has been detected by a router, how often will LSU packets be sent to neighboring routers?",
      "answers": [
        "every 30 minutes"
      ]
    },
    {
      "question": "Which type of OSPFv2 packet contains an abbreviated list of the LSDB of a sending router and is used by receiving routers to check against the local LSDB?",
      "answers": [
        "database description"
      ]
    },
    {
      "question": "Which step in the link-state routing process is described by a router building a link-state database based on received LSAs?",
      "answers": [
        "building the topology table"
      ]
    },
    {
      "question": "Refer to the exhibit. A network administrator has configured ACL 9 as shown. Users on the 172.31.1.0 /24 network cannot forward traffic through router CiscoVille. What is the most likely cause of the traffic failure?",
      "answers": [
        "The sequence of the ACEs is incorrect."
      ]
    },
    {
      "question": "A technician is tasked with using ACLs to secure a router. When would the technician use the access-class 20 in configuration option or command?",
      "answers": [
        "to secure administrative access to the router"
      ]
    },
    {
      "question": "Refer to the exhibit. A network administrator is configuring a standard IPv4 ACL. What is the effect after the command no access-list 10 is entered?",
      "answers": [
        "ACL 10 is removed from the running configuration."
      ]
    },
    {
      "question": "An administrator has configured an access list on R1 to allow SSH administrative access from host 172.16.1.100. Which command correctly applies the ACL?",
      "answers": [
        "R1(config-line)# access-class 1 in"
      ]
    },
    {
      "question": "Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server.",
      "answers": [
        "access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20 access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21 access-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www access-list 105 deny ip any host 10.0.54.5 access-list 105 permit ip any any",
        "R1(config)# interface gi0/0 R1(config-if)# ip access-group 105 out"
      ]
    },
    {
      "question": "What is a feature of an IPS?",
      "answers": [
        "It can stop malicious packets."
      ]
    },
    {
      "question": "Which type of security threat can be described as software that attaches itself to another program to execute a specific unwanted function?",
      "answers": [
        "virus"
      ]
    },
    {
      "question": "What is the significant characteristic of worm malware?",
      "answers": [
        "A worm can execute independently of the host system."
      ]
    },
    {
      "question": "What is the best description of Trojan horse malware?",
      "answers": [
        "It appears as useful software but hides malicious code."
      ]
    },
    {
      "question": "What is the function of ASICs in a multilayer switch?",
      "answers": [
        "They streamline forwarding of IP packets in a multilayer switch by bypassing the CPU."
      ]
    },
    {
      "question": "What is the port density of a switch?",
      "answers": [
        "the number of available ports on a switch"
      ]
    },
    {
      "question": "What is a difference between the functions of Cloud computing and virtualization?",
      "answers": [
        "Cloud computing separates the application from the hardware whereas virtualization separates the OS from the underlying hardware."
      ]
    },
    {
      "question": "Why would a network administrator use the config-register 0x2102 command on a Cisco network device?",
      "answers": [
        "to ensure that the device loads the startup configuration file during startup"
      ]
    },
    {
      "question": "Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server. Which extended ACL would be used to filter this traffic, and how would this ACL be applied? (Choose two.)",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2015/06/i209858v1n1_209858.png"
    }
  ]
];

const FINAL_EXAM_DB = [
  {
    "question": "Which design feature will limit the size of a failure domain in an enterprise network?",
    "answers": [
      "the use of the building switch block approach"
    ]
  },
  {
    "question": "Which two things should a network administrator modify on a router to perform password recovery? (Choose two.)",
    "answers": [
      "the configuration register value",
      "the startup configuration file"
    ]
  },
  {
    "question": "What type of network uses one common infrastructure to carry voice, data, and video signals?",
    "answers": [
      "converged"
    ]
  },
  {
    "question": "What are three advantages of using private IP addresses and NAT? (Choose three.)",
    "answers": [
      "hides private LAN addressing from outside devices that are connected to the Internet",
      "permits LAN expansion without additional public IP addresses",
      "conserves registered public IP addresses"
    ]
  },
  {
    "question": "Which two scenarios are examples of remote access VPNs? (Choose two.)",
    "answers": [
      "A mobile sales agent is connecting to the company network via the Internet connection at a hotel.",
      "An employee who is working from home uses VPN client software on a laptop in order to connect to the company network."
    ]
  },
  {
    "question": "What are three benefits of cloud computing? (Choose three.)",
    "answers": [
      "It streamlines the IT operations of an organization by subscribing only to needed services.",
      "It enables access to organizational data anywhere and at any time.",
      "It eliminates or reduces the need for onsite IT equipment, maintenance, and management."
    ]
  },
  {
    "question": "What is a characteristic of a single-area OSPF network?",
    "answers": [
      "All routers are in the backbone area."
    ]
  },
  {
    "question": "What is a WAN?",
    "answers": [
      "a network infrastructure that provides access to other networks over a large geographic area"
    ]
  },
  {
    "question": "A network administrator has been tasked with creating a disaster recovery plan. As part of this plan, the administrator is looking for a backup site for all of the data on the company servers. What service or technology would support this requirement?",
    "answers": [
      "data center"
    ]
  },
  {
    "question": "Which type of OSPF packet is used by a router to discover neighbor routers and establish neighbor adjacency?",
    "answers": [
      "hello"
    ]
  },
  {
    "question": "Which two statements are characteristics of a virus? (Choose two.)",
    "answers": [
      "A virus can be dormant and then activate at a specific time or date.",
      "A virus typically requires end-user activation."
    ]
  },
  {
    "question": "Which public WAN access technology utilizes copper telephone lines to provide access to subscribers that are multiplexed into a single T3 link connection?",
    "answers": [
      "DSL"
    ]
  },
  {
    "question": "A customer needs a metropolitan area WAN connection that provides high-speed, dedicated bandwidth between two sites. Which type of WAN connection would best fulfill this need?",
    "answers": [
      "Ethernet WAN"
    ]
  },
  {
    "question": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use debuggers?",
    "answers": [
      "to reverse engineer binary files when writing exploits and when analyzing malware"
    ]
  },
  {
    "question": "Consider the following output for an ACL that has been applied to a router via the access-class in command. What can a network administrator determine from the output that is shown?",
    "answers": [
      "Two devices were able to use SSH or Telnet to gain access to the router."
    ]
  },
  {
    "question": "What command would be used as part of configuring NAT or PAT to clear dynamic entries before the timeout has expired?",
    "answers": [
      "clear ip nat translation"
    ]
  },
  {
    "question": "What are two characteristics of video traffic? (Choose two.)",
    "answers": [
      "Video traffic latency should not exceed 400 ms.",
      "Video traffic is unpredictable and inconsistent."
    ]
  },
  {
    "question": "Refer to the exhibit. A technician is configuring R2 for static NAT to allow the client to access the web server. What is a possible reason that the client PC cannot access the web server?",
    "answers": [
      "Interface S0/0/0 should be identified as the outside NAT interface."
    ]
  },
  {
    "question": "In setting up a small office network, the network administrator decides to assign private IP addresses dynamically to workstations and mobile devices. Which feature must be enabled on the company router in order for office devices to access the internet?",
    "answers": [
      "NAT"
    ]
  },
  {
    "question": "A data center has recently updated a physical server to host multiple operating systems on a single CPU. The data center can now provide each customer with a separate web server without having to allocate an actual discrete server for each customer. What is the networking trend that is being implemented by the data center in this situation?",
    "answers": [
      "virtualization"
    ]
  },
  {
    "question": "Refer to the exhibit. Which address or addresses represent the inside global address?",
    "answers": [
      "209.165.20.25"
    ]
  },
  {
    "question": "Which two IPsec protocols are used to provide data integrity?",
    "answers": [
      "MD5",
      "SHA"
    ]
  },
  {
    "question": "If an outside host does not have the Cisco AnyConnect client preinstalled, how would the host gain access to the client image?",
    "answers": [
      "The host initiates a clientless VPN connection using a compliant web browser to download the client."
    ]
  },
  {
    "question": "A company is considering updating the campus WAN connection. Which two WAN options are examples of the private WAN architecture? (Choose two.)",
    "answers": [
      "leased line",
      "Ethernet WAN"
    ]
  },
  {
    "question": "Which type of QoS marking is applied to Ethernet frames?",
    "answers": [
      "CoS"
    ]
  },
  {
    "question": "Refer to the exhibit. Routers R1 and R2 are connected via a serial link. One router is configured as the NTP master, and the other is an NTP client. Which two pieces of information can be obtained from the partial output of the show ntp associations detail command on R2? (Choose two.)",
    "answers": [
      "Router R1 is the master, and R2 is the client",
      "The IP address of R1 is 192.168.1.2"
    ]
  },
  {
    "question": "Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server. Which extended ACL would be used to filter this traffic, and how would this ACL be applied? (Choose two.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2015/06/i209858v1n1_209858.png"
  },
  {
    "question": "Refer to the exhibit. If the network administrator created a standard ACL that allows only devices that connect to the R2 G0/0 network access to the devices on the R1 G0/1 interface, how should the ACL be applied?",
    "answers": [
      "outbound on the R1 G0/1 interface"
    ]
  },
  {
    "question": "Which is a characteristic of a Type 2 hypervisor?​",
    "answers": [
      "does not require management console software"
    ]
  },
  {
    "question": "What are the two types of VPN connections? (Choose two.)",
    "answers": [
      "site-to-site",
      "remote access"
    ]
  },
  {
    "question": "Refer to the exhibit. What three conclusions can be drawn from the displayed output? (Choose three.)",
    "answers": [
      "The DR can be reached through the GigabitEthernet 0/0 interface.",
      "There have been 9 seconds since the last hello packet sent.",
      "The router ID values were not the criteria used to select the DR and the BDR."
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator is configuring an ACL to limit the connection to R1 vty lines to only the IT group workstations in the network 192.168.22.0/28. The administrator verifies the successful Telnet connections from a workstation with IP 192.168.22.5 to R1 before the ACL is applied. However, after the ACL is applied to the interface Fa0/0, Telnet connections are denied. What is the cause of the connection failure?",
    "answers": [
      "The IT group network is included in the deny statement."
    ]
  },
  {
    "question": "What functionality does mGRE provide to the DMVPN technology?",
    "answers": [
      "It allows the creation of dynamically allocated tunnels through a permanent tunnel source at the hub and dynamically allocated tunnel destinations at the spokes."
    ]
  },
  {
    "question": "What is used to pre-populate the adjacency table on Cisco devices that use CEF to process packets?",
    "answers": [
      "the ARP table"
    ]
  },
  {
    "question": "What command would be used as part of configuring NAT or PAT to display information about NAT configuration parameters and the number of addresses in the pool?",
    "answers": [
      "show ip nat statistics"
    ]
  },
  {
    "question": "What is a purpose of establishing a network baseline?",
    "answers": [
      "It creates a point of reference for future network evaluations."
    ]
  },
  {
    "question": "Match the type of WAN device or service to the description. (Not all options are used.)",
    "answers": [
      "CPE -> devices and inside wiring that are located on the enterprise edge and connect to a carrier link",
      "DCE -> devices that provide an interface for customers to connect to within the WAN cloud",
      "DTE -> customer devices that pass the data from a customer network for transmission over the WAN",
      "local loop -> a physical connection from the customer to the service provider POP"
    ]
  },
  {
    "question": "Which statement describes a characteristic of standard IPv4 ACLs?",
    "answers": [
      "They filter traffic based on source IP addresses only."
    ]
  },
  {
    "question": "Refer to the exhibit. R1 is configured for NAT as displayed. What is wrong with the configuration?",
    "answers": [
      "NAT-POOL2 is not bound to ACL 1."
    ]
  },
  {
    "question": "Refer to the exhibit. What method can be used to enable an OSPF router to advertise a default route to neighboring OSPF routers?",
    "answers": [
      "Use the default-information originate command on R0-A."
    ]
  },
  {
    "question": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use applications such as John the Ripper,THC Hydra, RainbowCrack, and Medusa?",
    "answers": [
      "to make repeated guesses in order to crack a password"
    ]
  },
  {
    "question": "What are two syntax rules for writing a JSON array? (Choose two.)",
    "answers": [
      "Each value in the array is separated by a comma.",
      "Values are enclosed in square brackets."
    ]
  },
  {
    "question": "What is a characteristic of a Trojan horse as it relates to network security?",
    "answers": [
      "Malware is contained in a seemingly legitimate executable program."
    ]
  },
  {
    "question": "An attacker is redirecting traffic to a false default gateway in an attempt to intercept the data traffic of a switched network. What type of attack could achieve this?",
    "answers": [
      "DHCP spoofing"
    ]
  },
  {
    "question": "A company is developing a security policy for secure communication. In the exchange of critical messages between a headquarters office and a branch office, a hash value should only be recalculated with a predetermined code, thus ensuring the validity of data source. Which aspect of secure communications is addressed?",
    "answers": [
      "origin authentication"
    ]
  },
  {
    "question": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use packet sniffers?",
    "answers": [
      "to capture and analyze packets within traditional Ethernet LANs or WLANs"
    ]
  },
  {
    "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 172.20.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "answers": [
      "0.0.3.255"
    ]
  },
  {
    "question": "Match the HTTP method with the RESTful operation.",
    "answers": [
      "POST -> Create",
      "GET -> Read",
      "PUT/PATCH -> Update/Replace?Modify",
      "Delete -> Delete"
    ]
  },
  {
    "question": "Refer to the exhibit. What is the OSPF cost to reach the West LAN 172.16.2.0/24 from East?​",
    "answers": [
      "65"
    ]
  },
  {
    "question": "What is one reason to use the ip ospf priority command when the OSPF routing protocol is in use?",
    "answers": [
      "to influence the DR/BDR election process"
    ]
  },
  {
    "question": "An ACL is applied inbound on a router interface. The ACL consists of a single entry:",
    "answers": [
      "permitted"
    ]
  },
  {
    "question": "What is a characteristic of the two-tier spine-leaf topology of the Cisco ACI fabric architecture?​",
    "answers": [
      "The leaf switches always attach to the spines, but they never attach to each other."
    ]
  },
  {
    "question": "Which two scenarios would result in a duplex mismatch? (Choose two.)",
    "answers": [
      "connecting a device with autonegotiation to another that is manually set to full-duplex",
      "manually setting the two connected devices to different duplex modes"
    ]
  },
  {
    "question": "A network technician is configuring SNMPv3 and has set a security level of auth . What is the effect of this setting?",
    "answers": [
      "authenticates a packet by using either the HMAC with MD5 method or the SHA method"
    ]
  },
  {
    "question": "What are two types of attacks used on DNS open resolvers? (Choose two.)",
    "answers": [
      "amplification and reflection",
      "resource utilization"
    ]
  },
  {
    "question": "An ACL is applied inbound on a router interface. The ACL consists of a single entry:",
    "answers": [
      "denied",
      "denied"
    ]
  },
  {
    "question": "Which type of resources are required for a Type 1 hypervisor?",
    "answers": [
      "a management console"
    ]
  },
  {
    "question": "In JSON, what is held within square brackets [ ]?",
    "answers": [
      "an array"
    ]
  },
  {
    "question": "What are three components used in the query portion of a typical RESTful API request? (Choose three.)",
    "answers": [
      "format",
      "key",
      "parameters"
    ]
  },
  {
    "question": "A user reports that when the corporate web page URL is entered on a web browser, an error message indicates that the page cannot be displayed. The help-desk technician asks the user to enter the IP address of the web server to see if the page can be displayed. Which troubleshooting method is being used by the technician?",
    "answers": [
      "divide-and-conquer"
    ]
  },
  {
    "question": "Which protocol provides authentication, integrity, and confidentiality services and is a type of VPN?",
    "answers": [
      "IPsec"
    ]
  },
  {
    "question": "Which statement describes a characteristic of Cisco Catalyst 2960 switches?",
    "answers": [
      "New Cisco Catalyst 2960-C switches support PoE pass-through."
    ]
  },
  {
    "question": "Which component of the ACI architecture translates application policies into network programming?",
    "answers": [
      "the Application Policy Infrastructure Controller"
    ]
  },
  {
    "question": "Which two pieces of information should be included in a logical topology diagram of a network? (Choose two.)",
    "answers": [
      "interface identifier",
      "connection type"
    ]
  },
  {
    "question": "Refer to the exhibit. A PC at address 10.1.1.45 is unable to access the Internet. What is the most likely cause of the problem?",
    "answers": [
      "The NAT pool has been exhausted."
    ]
  },
  {
    "question": "What are two benefits of using SNMP traps? (Choose two.)",
    "answers": [
      "They eliminate the need for some periodic polling requests.",
      "They reduce the load on network and agent resources."
    ]
  },
  {
    "question": "Which statement accurately describes a characteristic of IPsec?",
    "answers": [
      "IPsec is a framework of open standards that relies on existing algorithms."
    ]
  },
  {
    "question": "In a large enterprise network, which two functions are performed by routers at the distribution layer? (Choose two.)",
    "answers": [
      "connect remote networks",
      "provide data traffic security"
    ]
  },
  {
    "question": "Which two statements describe the use of asymmetric algorithms? (Choose two.)",
    "answers": [
      "If a private key is used to encrypt the data, a public key must be used to decrypt the data.",
      "If a public key is used to encrypt the data, a private key must be used to decrypt the data."
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator has deployed QoS and has configured the network to mark traffic on the VoIP phones as well as the Layer 2 and Layer 3 switches. Where should initial marking occur to establish the trust boundary?",
    "answers": [
      "Trust Boundary 1"
    ]
  },
  {
    "question": "What are two benefits of extending access layer connectivity to users through a wireless medium? (Choose two.)",
    "answers": [
      "reduced costs",
      "increased flexibility"
    ]
  },
  {
    "question": "What are two purposes of launching a reconnaissance attack on a network? (Choose two.)",
    "answers": [
      "to scan for accessibility",
      "to gather information about the network and devices"
    ]
  },
  {
    "question": "A group of users on the same network are all complaining about their computers running slowly. After investigating, the technician determines that these computers are part of a zombie network. Which type of malware is used to control these computers?",
    "answers": [
      "botnet"
    ]
  },
  {
    "question": "An ACL is applied inbound on a router interface. The ACL consists of a single entry:",
    "answers": [
      "denied"
    ]
  },
  {
    "question": "Refer to the exhibit. From which location did this router load the IOS?",
    "answers": [
      "flash memory"
    ]
  },
  {
    "question": "Refer to the exhibit. Which data format is used to represent the data for network automation applications?",
    "answers": [
      "JSON"
    ]
  },
  {
    "question": "What QoS step must occur before packets can be marked?",
    "answers": [
      "classifying"
    ]
  },
  {
    "question": "What is the main function of a hypervisor?",
    "answers": [
      "It is used to create and manage multiple VM instances on a host machine."
    ]
  },
  {
    "question": "A company needs to interconnect several branch offices across a metropolitan area. The network engineer is seeking a solution that provides high-speed converged traffic, including voice, video, and data on the same network infrastructure. The company also wants easy integration to their existing LAN infrastructure in their office locations. Which technology should be recommended?",
    "answers": [
      "Ethernet WAN"
    ]
  },
  {
    "question": "Refer to the exhibit. As traffic is forwarded out an egress interface with QoS treatment, which congestion avoidance technique is used?",
    "answers": [
      "traffic policing"
    ]
  },
  {
    "question": "An ACL is applied inbound on a router interface. The ACL consists of a single entry:",
    "answers": [
      "denied"
    ]
  },
  {
    "question": "Refer to the exhibit. What is the purpose of the command marked with an arrow shown in the partial configuration output of a Cisco broadband router?",
    "answers": [
      "defines which addresses can be translated"
    ]
  },
  {
    "question": "If a router has two interfaces and is routing both IPv4 and IPv6 traffic, how many ACLs could be created and applied to it?",
    "answers": [
      "8"
    ]
  },
  {
    "question": "Refer to the exhibit. An administrator first configured an extended ACL as shown by the output of the show access-lists command. The administrator then edited this access-list by issuing the commands below.",
    "answers": [
      "Ping packets will be permitted.",
      "SSH packets will be permitted."
    ]
  },
  {
    "question": "Which troubleshooting approach is more appropriate for a seasoned network administrator rather than a less-experienced network administrator?",
    "answers": [
      "a less-structured approach based on an educated guess"
    ]
  },
  {
    "question": "Refer to the exhibit. Many employees are wasting company time accessing social media on their work computers. The company wants to stop this access. What is the best ACL type and placement to use in this situation?",
    "answers": [
      "extended ACLs inbound on R1 G0/0 and G0/1"
    ]
  },
  {
    "question": "Refer to the exhibit. An administrator is trying to configure PAT on R1, but PC-A is unable to access the Internet. The administrator tries to ping a server on the Internet from PC-A and collects the debugs that are shown in the exhibit. Based on this output, what is most likely the cause of the problem?",
    "answers": [
      "The inside global address is not on the same subnet as the ISP"
    ]
  },
  {
    "question": "Why is QoS an important issue in a converged network that combines voice, video, and data communications?",
    "answers": [
      "Voice and video communications are more sensitive to latency."
    ]
  },
  {
    "question": "Which statement describes a VPN?",
    "answers": [
      "VPNs use virtual connections to create a private network through a public network."
    ]
  },
  {
    "question": "In which OSPF state is the DR/BDR election conducted?",
    "answers": [
      "Two-Way"
    ]
  },
  {
    "question": "Two corporations have just completed a merger. The network engineer has been asked to connect the two corporate networks without the expense of leased lines. Which solution would be the most cost effective method of providing a proper and secure connection between the two corporate networks?",
    "answers": [
      "site-to-site VPN"
    ]
  },
  {
    "question": "What is the final operational state that will form between an OSPF DR and a DROTHER once the routers reach convergence?",
    "answers": [
      "full"
    ]
  },
  {
    "question": "Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?",
    "answers": [
      "Router R3 will become the DR and router R1 will become the BDR."
    ]
  },
  {
    "question": "Which type of server would be used to keep a historical record of messages from monitored network devices?",
    "answers": [
      "syslog"
    ]
  },
  {
    "question": "When QoS is implemented in a converged network, which two factors can be controlled to improve network performance for real-time traffic? (Choose two.)",
    "answers": [
      "delay",
      "jitter"
    ]
  },
  {
    "question": "In which step of gathering symptoms does the network engineer determine if the problem is at the core, distribution, or access layer of the network?",
    "answers": [
      "Narrow the scope."
    ]
  },
  {
    "question": "What protocol sends periodic advertisements between connected Cisco devices in order to learn device name, IOS version, and the number and type of interfaces?",
    "answers": [
      "CDP"
    ]
  },
  {
    "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "answers": [
      "0.0.3.255"
    ]
  },
  {
    "question": "Refer to the exhibit. An administrator configures the following ACL in order to prevent devices on the 192.168.1.0 subnet from accessing the server at 10.1.1.5:",
    "answers": [
      "inbound on router A Fa0/0"
    ]
  },
  {
    "question": "Which type of OSPFv2 packet is used to forward OSPF link change information?",
    "answers": [
      "link-state update"
    ]
  },
  {
    "question": "What protocol synchronizes with a private master clock or with a publicly available server on the internet?",
    "answers": [
      "NTP"
    ]
  },
  {
    "question": "Which type of VPN allows multicast and broadcast traffic over a secure site-to-site VPN?",
    "answers": [
      "GRE over IPsec"
    ]
  },
  {
    "question": "An OSPF router has three directly connected networks; 10.0.0.0/16, 10.1.0.0/16, and 10.2.0.0/16. Which OSPF network command would advertise only the 10.1.0.0 network to neighbors?",
    "answers": [
      "router(config-router)# network 10.1.0.0 0.0.255.255 area 0"
    ]
  },
  {
    "question": "Refer to the exhibit. Which sequence of commands should be used to configure router A for OSPF?",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2021/02/i386046n1v2-1613220070.9736.gif"
  },
  {
    "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.0.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "answers": [
      "0.0.1.255"
    ]
  },
  {
    "question": "How does virtualization help with disaster recovery within a data center?",
    "answers": [
      "support of live migration"
    ]
  },
  {
    "question": "How does virtualization help with disaster recovery within a data center?",
    "answers": [
      "Hardware does not have to be identical.",
      "(Other case) Hardware at the recovery site does not have to be identical to production equipment."
    ]
  },
  {
    "question": "Refer to the exhibit. Which devices exist in the failure domain when switch S3 loses power?",
    "answers": [
      "PC_3 and AP_2"
    ]
  },
  {
    "question": "Which set of access control entries would allow all users on the 192.168.10.0/24 network to access a web server that is located at 172.17.80.1, but would not allow them to use Telnet?",
    "manual": true,
    "answers": [],
    "missingAnswers": true
  },
  {
    "question": "Refer to the exhibit. A network administrator needs to add an ACE to the TRAFFIC-CONTROL ACL that will deny IP traffic from the subnet 172.23.16.0/20. Which ACE will meet this requirement?",
    "answers": [
      "5 deny 172.23.16.0 0.0.15.255"
    ]
  },
  {
    "question": "Which step in the link-state routing process is described by a router building a link-state database based on received LSAs?",
    "answers": [
      "building the topology table"
    ]
  },
  {
    "question": "What protocol uses agents, that reside on managed devices, to collect and store information about the device and its operation?",
    "answers": [
      "SNMP"
    ]
  },
  {
    "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 10.27.27.0 255.255.255.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "answers": [
      "0.0.0.255"
    ]
  },
  {
    "question": "When will an OSPF-enabled router transition from the Down state to the Init state?",
    "answers": [
      "when an OSPF-enabled interface becomes active"
    ]
  },
  {
    "question": "What type of traffic is described as having a high volume of data per packet?",
    "answers": [
      "video"
    ]
  },
  {
    "question": "What protocol is a vendor-neutral Layer 2 protocol that advertises the identity and capabilities of the host device to other connected network devices?",
    "answers": [
      "LLDP"
    ]
  },
  {
    "question": "Which step in the link-state routing process is described by a router running an algorithm to determine the best path to each destination?",
    "answers": [
      "executing the SPF algorithm"
    ]
  },
  {
    "question": "Refer to the exhibit. Which conclusion can be drawn from this OSPF multiaccess network?",
    "answers": [
      "With an election of the DR, the number of adjacencies is reduced from 6 to 3."
    ]
  },
  {
    "question": "Refer to the exhibit. The network administrator has an IP address of 192.168.11.10 and needs access to manage R1. What is the best ACL type and placement to use in this situation?",
    "answers": [
      "standard ACL inbound on R1 vty lines"
    ]
  },
  {
    "question": "Which type of VPN connects using the Transport Layer Security (TLS) feature?",
    "answers": [
      "SSL VPN"
    ]
  },
  {
    "question": "Which group of APIs are used by an SDN controller to communicate with various applications?",
    "answers": [
      "northbound APIs"
    ]
  },
  {
    "question": "A company has consolidated a number of servers and it is looking for a program or firmware to create and control virtual machines which have access to all the hardware of the consolidated servers. What service or technology would support this requirement?",
    "answers": [
      "Type-1 hypervisor"
    ]
  },
  {
    "question": "What command would be used as part of configuring NAT or PAT to identify inside local addresses that are to be translated?",
    "answers": [
      "access-list 10 permit 172.19.89.0 0.0.0.255"
    ]
  },
  {
    "question": "Anycompany has decided to reduce its environmental footprint by reducing energy costs, moving to a smaller facility, and promoting telecommuting, what service or technology would support requirement?",
    "answers": [
      "Cloud services"
    ]
  },
  {
    "question": "Refer to the exhibit. An administrator is trying to back up the current running configuration of the router to a USB drive, and enters the command copy usbflash0:/R1-config running-config on the router command line. After removing the USB drive and connecting it to a PC, the administrator discovers that the running configuration was not properly backed up to the R1-config file. What is the problem?",
    "answers": [
      "The command that the administrator used was incorrect."
    ]
  },
  {
    "question": "Which three types of VPNs are examples of enterprise-managed site-to-site VPNs? (Choose three.)",
    "answers": [
      "IPsec VPN",
      "Cisco Dynamic Multipoint VPN",
      "GRE over IPsec VPN"
    ]
  },
  {
    "question": "Refer to the exhibit. Employees on 192.168.11.0/24 work on critically sensitive information and are not allowed access off their network. What is the best ACL type and placement to use in this situation?",
    "answers": [
      "standard ACL inbound on R1 G0/1"
    ]
  },
  {
    "question": "In an OSPF network which two statements describe the link-state database (LSDB)? (Choose two.)",
    "answers": [
      "It can be viewed by using the show ip ospf database command.",
      "All routers within an area have an identical link-state database."
    ]
  },
  {
    "question": "In an OSPF network which OSPF structure is used to create the neighbor table on a router?",
    "answers": [
      "adjacency database"
    ]
  },
  {
    "question": "What protocol is used in a system that consists of three elements--a manager, agents, and an information database?",
    "answers": [
      "SNMP"
    ]
  },
  {
    "question": "What type of traffic is described as not resilient to loss?",
    "answers": [
      "video"
    ]
  },
  {
    "question": "Refer to the exhibit. Router R1 is configured with static NAT. Addressing on the router and the web server are correctly configured, but there is no connectivity between the web server and users on the Internet. What is a possible reason for this lack of connectivity?",
    "answers": [
      "The router NAT configuration has an incorrect inside local address."
    ]
  },
  {
    "question": "Which type of API would be used to allow authorized salespeople of an organization access to internal sales data from their mobile devices?",
    "answers": [
      "private"
    ]
  },
  {
    "question": "Refer to the exhibit. Which data format is used to represent the data for network automation applications?",
    "answers": [
      "XML"
    ]
  },
  {
    "question": "An ACL is applied inbound on a router interface. The ACL consists of a single entry:",
    "answers": [
      "denied"
    ]
  },
  {
    "question": "Refer to the exhibit. If no router ID was manually configured, what would router R1 use as its OSPF router ID?",
    "answers": [
      "192.168.1.100"
    ]
  },
  {
    "question": "What protocol is a vendor-neutral Layer 2 protocol that advertises the identity and capabilities of the host device to other connected network devices?",
    "answers": [
      "LLDP"
    ]
  },
  {
    "question": "Which type of VPN uses a hub-and-spoke configuration to establish a full mesh topology?",
    "answers": [
      "dynamic multipoint VPN"
    ]
  },
  {
    "question": "What is a characteristic of the REST API?",
    "answers": [
      "most widely used API for web services"
    ]
  },
  {
    "question": "A student, doing a summer semester of study overseas, has taken hundreds of pictures on a smartphone and wants to back them up in case of loss. What service or technology would support this requirement?",
    "answers": [
      "cloud services"
    ]
  },
  {
    "question": "Consider the following access list that allows IP phone configuration file transfers from a particular host to a TFTP server:",
    "manual": true,
    "answers": [],
    "missingAnswers": true
  },
  {
    "question": "Which three statements are generally considered to be best practices in the placement of ACLs? (Choose three.)",
    "answers": [
      "Filter unwanted traffic before it travels onto a low-bandwidth link.",
      "Place standard ACLs close to the destination IP address of the traffic.",
      "Place extended ACLs close to the source IP address of the traffic."
    ]
  },
  {
    "question": "Match the term to the web link http://www.buycarsfromus.com/2020models/ford/suv.html#Escape component. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/2020-07-11_172522.jpg"
  },
  {
    "question": "What command would be used as part of configuring NAT or PAT to display all static translations that have been configured?",
    "answers": [
      "show ip nat translations"
    ]
  },
  {
    "question": "A network administrator modified an OSPF-enabled router to have a hello timer setting of 20 seconds. What is the new dead interval time setting by default?",
    "answers": [
      "80 seconds"
    ]
  },
  {
    "question": "Which type of VPN is the preferred choice for support and ease of deployment for remote access?",
    "answers": [
      "SSL VPN"
    ]
  },
  {
    "question": "What type of traffic is described as predictable and smooth?",
    "answers": [
      "voice"
    ]
  },
  {
    "question": "Which queuing mechanism has no provision for prioritizing or buffering but simply forwards packets in the order they arrive?",
    "answers": [
      "FIFO"
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers. The routers are unable to form a neighbor adjacency. What should be done to fix the problem on router R2?",
    "answers": [
      "Implement the command no passive-interface Serial0/1."
    ]
  },
  {
    "question": "A network administrator is troubleshooting an OSPF problem that involves neighbor adjacency. What should the administrator do?",
    "answers": [
      "Make sure that the hello and dead interval timers are the same on all routers."
    ]
  },
  {
    "question": "Refer to the exhibit. Internet privileges for an employee have been revoked because of abuse but the employee still needs access to company resources. What is the best ACL type and placement to use in this situation?",
    "answers": [
      "standard ACL outbound on R2 WAN interface towards the internet"
    ]
  },
  {
    "question": "An ACL is applied inbound on a router interface. The ACL consists of a single entry:",
    "answers": [
      "permitted"
    ]
  },
  {
    "question": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use applications such as Nmap, SuperScan, and Angry IP Scanner?",
    "answers": [
      "to probe network devices, servers, and hosts for open TCP or UDP ports"
    ]
  },
  {
    "question": "What command would be used as part of configuring NAT or PAT to display any dynamic PAT translations that have been created by traffic?",
    "answers": [
      "show ip nat translations"
    ]
  },
  {
    "question": "An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 172.16.91.0 255.255.255.192. What wildcard mask would the administrator use in the OSPF network statement?",
    "answers": [
      "0.0.0.63"
    ]
  },
  {
    "question": "What type of traffic is described as requiring latency to be no more than 400 milliseconds (ms)?",
    "answers": [
      "video"
    ]
  },
  {
    "question": "Refer to the exhibit. Which two configurations would be used to create and apply a standard access list on R1, so that only the 10.0.70.0/25 network devices are allowed to access the internal database server? (Choose two.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/06/ccna-5.0-s2-43.jpg"
  },
  {
    "question": "A network administrator is writing a standard ACL that will deny any traffic from the 172.16.0.0/16 network, but permit all other traffic. Which two commands should be used? (Choose two.)",
    "answers": [
      "Router(config)# access-list 95 permit any",
      "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255"
    ]
  },
  {
    "question": "Refer to the exhibit. The company has decided that no traffic initiating from any other existing or future network can be transmitted to the Research and Development network. Furthermore, no traffic that originates from the Research and Development network can be transmitted to any other existing or future networks in the company. The network administrator has decided that extended ACLs are better suited for these requirements. Based on the information given, what will the network administrator do?",
    "answers": [
      "Two ACLs (one in each direction) will be placed on the R2 Gi0/0 interface."
    ]
  },
  {
    "question": "What protocol uses smaller stratum numbers to indicate that the server is closer to the authorized time source than larger stratum numbers?",
    "answers": [
      "NTP"
    ]
  },
  {
    "question": "Refer to the exhibit. If no router ID was manually configured, what would router Branch1 use as its OSPF router ID?",
    "answers": [
      "192.168.1.100"
    ]
  },
  {
    "question": "Match the HTTP method with the RESTful operation.",
    "answers": [
      "POST -> create",
      "GET -> read",
      "PUT/PATCH -> update",
      "DELETE -> delete"
    ]
  },
  {
    "question": "Refer to the exhibit. A web designer calls to report that the web server web-s1.cisco.com is not reachable through a web browser. The technician uses command line utilities to verify the problem and to begin the troubleshooting process. Which two things can be determined about the problem? (Choose two.)",
    "answers": [
      "The web server at 192.168.0.10 is reachable from the source host.",
      "DNS cannot resolve the IP address for the server web-s1.cisco.com."
    ]
  },
  {
    "question": "What type of traffic is described as tending to be unpredictable, inconsistent, and bursty?",
    "answers": [
      "video"
    ]
  },
  {
    "question": "Match the functions to the corresponding layers. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/2020-07-11_174231.jpg"
  },
  {
    "question": "What type of traffic is described as consisting of traffic that requires a higher priority if interactive?",
    "answers": [
      "data"
    ]
  },
  {
    "question": "Which type of VPN provides a flexible option to connect a central site with branch sites?",
    "answers": [
      "dynamic multipoint VPN"
    ]
  },
  {
    "question": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use fuzzers?",
    "answers": [
      "to discover security vulnerabilities of a computer"
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator has configured a standard ACL to permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface, but not the G0/0 interface. When following the best practices, in what location should the standard ACL be applied?",
    "answers": [
      "R2 G0/0 outbound"
    ]
  },
  {
    "question": "Two OSPF-enabled routers are connected over a point-to-point link. During the ExStart state, which router will be chosen as the first one to send DBD packets?",
    "answers": [
      "the router with the highest router ID"
    ]
  },
  {
    "question": "Which step in the link-state routing process is described by a router sending Hello packets out all of the OSPF-enabled interfaces?",
    "answers": [
      "establishing neighbor adjacencies"
    ]
  },
  {
    "question": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use forensic tools?",
    "answers": [
      "to detect any evidence of a hack or malware in a computer or network"
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers but PC1 is unable to connect to PC2. What is the most likely problem?",
    "answers": [
      "Interface Fa0/0 has not been activated for OSPFv2 on router R2."
    ]
  },
  {
    "question": "ABCTech is investigating the use of automation for some of its products. In order to control and test these products, the programmers require Windows, Linux, and MAC OS on their computers. What service or technology would support this requirement?",
    "answers": [
      "virtualization"
    ]
  },
  {
    "question": "A network engineer has noted that some expected network route entries are not displayed in the routing table. Which two commands will provide additional information about the state of router adjacencies, timer intervals, and the area ID? (Choose two.)",
    "answers": [
      "show ip ospf neighbor",
      "show ip ospf interface"
    ]
  },
  {
    "question": "Which type of VPN involves the forwarding of traffic over the backbone through the use of labels distributed among core routers?",
    "answers": [
      "MPLS VPN"
    ]
  },
  {
    "question": "Which type of VPN involves a nonsecure tunneling protocol being encapsulated by IPsec?",
    "answers": [
      "GRE over IPsec"
    ]
  },
  {
    "question": "A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use hacking operation systems?",
    "answers": [
      "to obtain specially designed operating systems preloaded with tools optimized for hacking"
    ]
  },
  {
    "question": "What command would be used as part of configuring NAT or PAT to identify an interface as part of the external global network?",
    "answers": [
      "ip nat outside"
    ]
  },
  {
    "question": "To avoid purchasing new hardware, a company wants to take advantage of idle system resources and consolidate the number of servers while allowing for multiple operating systems on a single hardware platform. What service or technology would support this requirement?",
    "answers": [
      "virtualization"
    ]
  },
  {
    "question": "Which type of VPN routes packets through virtual tunnel interfaces for encryption and forwarding?",
    "answers": [
      "IPsec virtual tunnel interface"
    ]
  },
  {
    "question": "Which step in the link-state routing process is described by a router flooding link-state and cost information about each directly connected link?",
    "answers": [
      "exchanging link-state advertisements"
    ]
  },
  {
    "question": "What type of traffic is described as using either TCP or UDP depending on the need for error recovery?",
    "answers": [
      "data"
    ]
  },
  {
    "question": "Refer to the exhibit. The company CEO demands that one ACL be created to permit email traffic to the internet and deny FTP access. What is the best ACL type and placement to use in this situation?",
    "answers": [
      "extended ACL outbound on R2 WAN interface towards the internet"
    ]
  },
  {
    "question": "What command would be used as part of configuring NAT or PAT to define a pool of addresses for translation?",
    "answers": [
      "ip nat pool POOL-STAT 64.100.14.17 64.100.14.30 netmask 255.255.255.240"
    ]
  },
  {
    "question": "What is the name of the layer in the Cisco borderless switched network design that is considered to be the backbone used for high-speed connectivity and fault isolation?",
    "answers": [
      "core"
    ]
  },
  {
    "question": "An ACL is applied inbound on router interface. The ACL consists of a single entry:",
    "answers": [
      "permitted"
    ]
  },
  {
    "question": "What type of traffic is described as consisting of traffic that gets a lower priority if it is not mission-critical?",
    "answers": [
      "data"
    ]
  },
  {
    "question": "Which OSPF table is identical on all converged routers within the same OSPF area?",
    "answers": [
      "topology"
    ]
  },
  {
    "question": "An ACL is applied inbound on a router interface. The ACL consists of a single entry:\naccess-list 100 permit tcp 192.168.10.0 0.0.0.255 any eq www .",
    "answers": [
      "permitted"
    ]
  },
  {
    "question": "What protocol allows the manager to poll agents to access information from the agent MIB?",
    "answers": [
      "SNMP"
    ]
  },
  {
    "question": "Match each component of a WAN connection to its description. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/08/Match-each-component-of-a-WAN-connection-to-its-description.jpg"
  },
  {
    "question": "What type of traffic is described as being able to tolerate a certain amount of latency, jitter, and loss without any noticeable effects?",
    "answers": [
      "voice"
    ]
  },
  {
    "question": "What term describes adding a value to the packet header, as close to the source as possible, so that the packet matches a defined policy?",
    "answers": [
      "traffic marking"
    ]
  },
  {
    "question": "Which three traffic-related factors would influence selecting a particular WAN link type? (Choose three.)",
    "answers": [
      "amount of traffic",
      "security needs",
      "type of traffic"
    ]
  },
  {
    "question": "What command would be used as part of configuring NAT or PAT to link the inside local addresses to the pool of addresses available for PAT translation?",
    "answers": [
      "ip nat inside source list 14 pool POOL-STAT overload"
    ]
  },
  {
    "question": "What protocol is a vendor-neutral Layer 2 discovery protocol that must be configured separately to transmit and receive information packets?",
    "answers": [
      "LLDP"
    ]
  },
  {
    "question": "An ACL is applied inbound on a router interface. The ACL consists of a single entry:",
    "answers": [
      "denied"
    ]
  },
  {
    "question": "Refer to the exhibit. Corporate policy demands that access to the server network be restricted to internal employees only. What is the best ACL type and placement to use in this situation?",
    "answers": [
      "extended ACL outbound on R2 S0/0/1"
    ]
  },
  {
    "question": "A technician is working on a Layer 2 switch and notices that a %CDP-4-DUPLEX_MISMATCH message keeps appearing for port G0/5. What command should the technician issue on the switch to start the troubleshooting process?",
    "answers": [
      "show interface g0/5"
    ]
  },
  {
    "question": "Which virtual resource would be installed on a network server to provide direct access to hardware resources?",
    "answers": [
      "a Type 1 hypervisor"
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator has configured a standard ACL to permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface. When following the best practices, in what location should the standard ACL be applied?",
    "answers": [
      "R2 G0/1 outbound"
    ]
  },
  {
    "question": "Which OSPF database is identical on all converged routers within the same OSPF area?",
    "answers": [
      "link-state"
    ]
  },
  {
    "question": "What are two features to consider when creating a named ACL? (Choose two.)",
    "answers": [
      "Use alphanumeric characters if needed.",
      "Be descriptive when creating the ACL name."
    ]
  },
  {
    "question": "Match the RESTful API method to CRUD function.",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/2020-10-25_185415.jpg"
  },
  {
    "question": "What type of traffic is described as requiring at least 384 Kbps of bandwidth?",
    "answers": [
      "video"
    ]
  },
  {
    "question": "Which step in the link-state routing process is described by a router inserting best paths into the routing table?",
    "answers": [
      "choosing the best route"
    ]
  },
  {
    "question": "Anycompany has decided to reduce its environmental footprint by reducing energy costs, moving to a smaller facility, and promoting telecommuting. What service or technology would support this requirement?",
    "answers": [
      "cloud services"
    ]
  },
  {
    "question": "A network technician is configuring SNMPv3 and has set a security level of SNMPv3 authPriv. What is a feature of using this level?",
    "answers": [
      "authenticates a packet by using either the HMAC MD5 or HMAC SHA algorithms and a username"
    ]
  }
]