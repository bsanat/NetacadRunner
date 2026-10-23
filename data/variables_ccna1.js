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
    "1.2.6": [
      {
        "question": "Which of the following is the name for all computers connected to a network that participate directly in network communication?",
        "answers": [
          "hosts"
        ]
      },
      {
        "question": "When data is encoded as pulses of light, which media is being used to transmit the data?",
        "answers": [
          "Fiber-optic cable"
        ]
      },
      {
        "question": "Which two devices are intermediary devices? (Choose two)",
        "answers": [
          "routers",
          "switches"
        ]
      }
    ],
    "1.3.3": [
      {
        "question": "Which connection physically connects the end device to the network?",
        "answers": [
          "NIC"
        ]
      },
      {
        "question": "Which connections are specialized ports on a networking device that connect to individual networks?",
        "answers": [
          "Interface"
        ]
      },
      {
        "question": "Which type of network topology lets you see which end devices are connected to which intermediary devices and what media is being used?",
        "answers": [
          "Logical topology"
        ]
      },
      {
        "question": "Which type of network topology lets you see the actual location of intermediary devices and cable installation?",
        "answers": [
          "Physical topology"
        ]
      }
    ],
    "1.4.5": [
      {
        "question": "Which network infrastructure provides access to users and end devices in a small geographical area, which is typically a network in a department in an enterprise, a home, or small business?",
        "answers": [
          "LAN"
        ]
      },
      {
        "question": "Which network infrastructure might an organization use to provide secure and safe access to individuals who work for a different organization but require access to the organization’s data?",
        "answers": [
          "Extranet"
        ]
      },
      {
        "question": "Which network infrastructure provides access to other networks over a large geographical area, which is often owned and managed by a telecommunications service provider?",
        "answers": [
          "WAN"
        ]
      }
    ],
    "1.6.6": [
      {
        "question": "When designers follow accepted standards and protocols, which of the four basic characteristics of network architecture is achieved?",
        "answers": [
          "Scalability"
        ]
      },
      {
        "question": "Confidentiality, integrity, and availability are requirements of which of the four basic characteristics of network architecture?",
        "answers": [
          "Security"
        ]
      },
      {
        "question": "With which type of policy, a router can manage the flow of data and voice traffic, giving priority to voice communications if the network experiences congestion?",
        "answers": [
          "QoS"
        ]
      },
      {
        "question": "Having multiple paths to a destination is known as redundancy. This is an example of which characteristic of network architecture?",
        "answers": [
          "fault tolerance"
        ]
      }
    ],
    "1.7.10": [
      {
        "question": "Which feature is a good conferencing tool to use with others who are located elsewhere in your city, or even in another country?",
        "answers": [
          "Video communications"
        ]
      },
      {
        "question": "Which feature describes using personal tools to access information and communicate across a business or campus network?",
        "answers": [
          "BYOD"
        ]
      },
      {
        "question": "Which feature contains options such as Public, Private, Custom and Hybrid?",
        "answers": [
          "Cloud computing"
        ]
      },
      {
        "question": "Which feature is being used when connecting a device to the network using an electrical outlet?",
        "answers": [
          "Powerline"
        ]
      },
      {
        "question": "Which feature uses the same cellular technology as a smart phone?",
        "answers": [
          "Wireless broadband"
        ]
      }
    ],
    "1.8.3": [
      {
        "question": "Which attack slows down or crashes equipment and programs?",
        "answers": [
          "Denial of Service (DoS)"
        ]
      },
      {
        "question": "Which option creates a secure connection for remote workers?",
        "answers": [
          "Virtual Private Network (VPN)"
        ]
      },
      {
        "question": "Which option blocks unauthorized access to your network?",
        "answers": [
          "Firewall"
        ]
      },
      {
        "question": "Which option describes a network attack that occurs on the first day that a vulnerability becomes known?",
        "answers": [
          "Zero-day or Zero-hour"
        ]
      },
      {
        "question": "Which option describes malicious code running on user devices?",
        "answers": [
          "Virus, worm, or Trojan horse"
        ]
      }
    ],
    "2.1.6": [
      {
        "question": "Which access method would be most appropriate if you were in the equipment room with a new switch that needs to be configured?",
        "answers": [
          "Console"
        ]
      },
      {
        "question": "Which access method would be most appropriate if your manager gave you a special cable and told you to use it to configure the switch?",
        "answers": [
          "Console"
        ]
      },
      {
        "question": "Which access method would be the most appropriate in-band access to the IOS over a network connection?",
        "answers": [
          "Telnet/SSH"
        ]
      },
      {
        "question": "Which access method would be the most appropriate if you call your manager to tell him you cannot access your router in another city over the internet and he provides you with the information to access the router through a telephone connection?",
        "answers": [
          "Aux"
        ]
      }
    ],
    "2.2.8": [
      {
        "question": "Which IOS mode allows access to all commands and features?",
        "answers": [
          "privileged EXEC mode"
        ]
      },
      {
        "question": "Which IOS mode are you in if the Switch(config)# prompt is displayed?",
        "answers": [
          "global configuration mode"
        ]
      },
      {
        "question": "Which IOS mode are you in if the Switch> prompt is displayed?",
        "answers": [
          "user EXEC mode"
        ]
      },
      {
        "question": "Which two commands would return you to the privileged EXEC prompt regardless of the configuration mode you are in? (Choose two.)",
        "answers": [
          "CTRL+Z",
          "end"
        ]
      }
    ],
    "2.4.8": [
      {
        "question": "What is the command to assign the name “Sw-Floor-2” to a switch?",
        "answers": [
          "hostname Sw-Floor-2"
        ]
      },
      {
        "question": "How is the privileged EXEC mode access secured on a switch?",
        "answers": [
          "enable secret class"
        ]
      },
      {
        "question": "Which command enables password authentication for user EXEC mode access on a switch?",
        "answers": [
          "login"
        ]
      },
      {
        "question": "Which command encrypts all plaintext passwords access on a switch?",
        "answers": [
          "service password-encryption"
        ]
      },
      {
        "question": "Which is the command to configure a banner to be displayed when connecting to a switch?",
        "answers": [
          "banner motd $ Keep out $"
        ]
      }
    ],
    "2.6.3": [
      {
        "question": "What is the structure of an IPv4 address called?",
        "answers": [
          "dotted-decimal format"
        ]
      },
      {
        "question": "How is an IPv4 address represented?",
        "answers": [
          "four decimal numbers between 0 and 255 separated by periods."
        ]
      },
      {
        "question": "What type of interface has no physical port associated with it?",
        "answers": [
          "switch virtual interface (SVI)"
        ]
      }
    ],
    "3.1.12": [
      {
        "question": "What is the process of converting information into the proper form for transmission?",
        "answers": [
          "Encoding"
        ]
      },
      {
        "question": "Which step of the communication process is concerned with properly identifying the address of the sender and receiver?",
        "answers": [
          "Formatting"
        ]
      },
      {
        "question": "Which three are components of message timing? (Choose three.)",
        "answers": [
          "Flow control",
          "Access method",
          "Response timeout"
        ]
      },
      {
        "question": "Which delivery method is used to transmit information to one or more end devices, but not all devices on the network?",
        "answers": [
          "Multicast"
        ]
      }
    ],
    "3.2.4": [
      {
        "question": "BGP and OSPF are examples of which type of protocol?",
        "answers": [
          "routing"
        ]
      },
      {
        "question": "Which two protocols are service discovery protocols? (Choose two.)",
        "answers": [
          "DNS",
          "DHCP"
        ]
      },
      {
        "question": "What is the purpose of the sequencing function in network communication?",
        "answers": [
          "to uniquely label transmitted segments of data for proper reassembly by the receiver"
        ]
      },
      {
        "question": "This protocol is responsible for guaranteeing the reliable delivery of information.",
        "answers": [
          "TCP"
        ]
      }
    ],
    "3.3.6": [
      {
        "question": "UDP and TCP belong to which layer of the TCP/IP protocol?",
        "answers": [
          "transport"
        ]
      },
      {
        "question": "Which two protocols belong in the TCP/IP model application layer?",
        "answers": [
          "DNS",
          "DHCP"
        ]
      },
      {
        "question": "Which protocol operates at the network access layer of the TCP/IP model?",
        "answers": [
          "Ethernet"
        ]
      },
      {
        "question": "Which of the following are protocols that provide feedback from the destination host to the source host regarding errors in packet delivery? (Choose two.)",
        "answers": [
          "ICMPv4",
          "ICMPv6"
        ]
      },
      {
        "question": "A device receives a data link frame with data and processes and removes the Ethernet information. What information would be the next to be processed by the receiving device?",
        "answers": [
          "IP at the internet layer"
        ]
      },
      {
        "question": "Which services are provided by the internet layer of the TCP/IP protocol suite? (Choose three.)",
        "answers": [
          "Routing Protocols",
          "Messaging",
          "Internet Protocol"
        ]
      }
    ],
    "3.4.5": [
      {
        "question": "True or false. Standards organizations are usually vendor-neutral.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "This standards organization is concerned with the Request for Comments (RFC) documents that specify new protocols and update existing ones.",
        "answers": [
          "Internet Engineering Task Force (IETF)"
        ]
      },
      {
        "question": "This standards organization is responsible for IP address allocation and domain name management.",
        "answers": [
          "Internet Assigned Numbers Authority (IANA)"
        ]
      },
      {
        "question": "What types of standards are developed by the Electronics Industries Alliance (EIA)?",
        "answers": [
          "electric wiring and connectors"
        ]
      }
    ],
    "3.6.6": [
      {
        "question": "What is the process of dividing a large data stream into smaller pieces prior to transmission?",
        "answers": [
          "segmentation"
        ]
      },
      {
        "question": "What is the PDU associated with the transport layer?",
        "answers": [
          "segment"
        ]
      },
      {
        "question": "Which protocol stack layer encapsulates data into frames?",
        "answers": [
          "data link"
        ]
      },
      {
        "question": "What is the name of the process of adding protocol information to data as it moves down the protocol stack?",
        "answers": [
          "encapsulation"
        ]
      }
    ],
    "3.7.11": [
      {
        "question": "True or false? Frames exchanged between devices in different IP networks must be forwarded to a default gateway.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "True or false? The right-most part of an IP address is used to identify the network that a device belongs to.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "What is used to determine the network portion of an IPv4 address?",
        "answers": [
          "subnet mask"
        ]
      },
      {
        "question": "Which of the following statements are true regarding network layer and data link layer addresses? (Choose three.)",
        "answers": [
          "Network layer addresses are logical and data link addresses are expressed as 12 hexadecimal digits.",
          "Data link layer addresses are physical and network layer addresses are logical.",
          "Network layer addresses are either 32 or 128 bits in length."
        ]
      },
      {
        "question": "What is the order of the two addresses in the data link frame?",
        "answers": [
          "destination MAC, source MAC"
        ]
      },
      {
        "question": "True or False? Data Link addresses are physical so they never change in the data link frame from source to destination.",
        "answers": [
          "False"
        ]
      }
    ],
    "4.1.3": [
      {
        "question": "True or false? The physical layer is only concerned with wired network connections.",
        "answers": [
          "false"
        ]
      },
      {
        "question": "True or false? When a frame is encoded by the physical layer, all bits are sent over the media at the same time.",
        "answers": [
          "false"
        ]
      },
      {
        "question": "The physical layer of the receiving device passes bits up to which higher level layer?",
        "answers": [
          "data link"
        ]
      },
      {
        "question": "What PDU is received by the physical layer for encoding and transmission?",
        "answers": [
          "frame"
        ]
      }
    ],
    "4.2.7": [
      {
        "question": "Which media uses patterns of microwaves to represent bits?",
        "answers": [
          "wireless"
        ]
      },
      {
        "question": "Which media uses patterns of light to represent bits?",
        "answers": [
          "fiber-optic"
        ]
      },
      {
        "question": "Which media uses electrical pulses to represent bits?",
        "answers": [
          "copper"
        ]
      },
      {
        "question": "Which of these is the name for the capacity of a medium to carry data?",
        "answers": [
          "bandwidth"
        ]
      },
      {
        "question": "Which of these is a measure of the transfer of bits across the media?",
        "answers": [
          "throughput"
        ]
      }
    ],
    "4.3.6": [
      {
        "question": "Which of the following attaches antennas to wireless devices? It can also be bundled with fiber-optic cabling for two-way data transmission.",
        "answers": [
          "coaxial"
        ]
      },
      {
        "question": "Which of the following counters EMI and RFI by using shielding techniques and special connectors?",
        "answers": [
          "STP"
        ]
      },
      {
        "question": "Which of the following is the most common network media?",
        "answers": [
          "UTP"
        ]
      },
      {
        "question": "Which of the following terminates with BNC, N type and F type connectors?",
        "answers": [
          "coaxial"
        ]
      }
    ],
    "4.5.7": [
      {
        "question": "Which of the following fiber-optic cable types can help data travel approximately 500 meters?",
        "answers": [
          "multimode"
        ]
      },
      {
        "question": "Which of the following fiber-optic cable types use light emitting diodes (LEDs) as a data light source transmitter?",
        "answers": [
          "multimode"
        ]
      },
      {
        "question": "Which of the following fiber-optic cable types use lasers in a single stream as a data light source transmitter?",
        "answers": [
          "single-mode"
        ]
      },
      {
        "question": "Which of the following fiber-optic cable types is used to connect long-distance telephony and cable TV applications?",
        "answers": [
          "single-mode"
        ]
      },
      {
        "question": "Which of the following fiber-optic cable types can travel approximately 100 km?",
        "answers": [
          "single-mode"
        ]
      },
      {
        "question": "Which of the following fiber-optic cable types is used within a campus network?",
        "answers": [
          "multimode"
        ]
      }
    ],
    "4.6.4": [
      {
        "question": "True or false. Wireless is not well suited for enterprise networks.",
        "answers": [
          "false"
        ]
      },
      {
        "question": "True or false. Wireless LANs operate in full-duplex allowing all devices to send or receive data at the same time so the number of users does not impact performance.",
        "answers": [
          "false"
        ]
      },
      {
        "question": "Which of the following wireless standards is best suited for industrial and IoT environments?",
        "answers": [
          "Zigbee"
        ]
      },
      {
        "question": "Which of the following wireless standards is used for Personal Area Networks (PANs) and allows devices to communicate over distances of 1 to 100 meters?",
        "answers": [
          "Bluetooth"
        ]
      }
    ],
    "5.1.4": [
      {
        "question": "Which is the binary equivalent to the 192.168.11.10 IP address?",
        "answers": [
          "11000000.10101000‬.00001011‬.‭00001010"
        ]
      },
      {
        "question": "Which of the following is the binary equivalent to the 172.16.31.30 IP address?",
        "answers": [
          "10101100.00010000‬.00011111‬.‭00011110‬‬"
        ]
      }
    ],
    "5.2.5": [
      {
        "question": "Which is the hexadecimal equivalent of 202?",
        "answers": [
          "CA"
        ]
      },
      {
        "question": "Which is the hexadecimal equivalent of 254?",
        "answers": [
          "FE"
        ]
      },
      {
        "question": "Which is the decimal equivalent of A9?",
        "answers": [
          "169"
        ]
      },
      {
        "question": "Which of the following is the decimal equivalent of 7D?",
        "answers": [
          "125"
        ]
      }
    ],
    "6.1.5": [
      {
        "question": "What is another name for the OSI data link layer?",
        "answers": [
          "Layer 2"
        ]
      },
      {
        "question": "The IEEE 802 LAN/MAN data link layer consists of which two sublayers? (Choose two.)",
        "answers": [
          "Logical Link Control",
          "Media Access Control"
        ]
      },
      {
        "question": "What is the responsibility of the MAC sublayer?",
        "answers": [
          "Provides the method to get the frame on and off the media"
        ]
      },
      {
        "question": "What Layer 2 function does a router perform? (Choose three.)",
        "answers": [
          "Accepts a frame from a medium",
          "De-encapsulates the frame",
          "Re-encapsulates the packet into a new frame"
        ]
      },
      {
        "question": "The media access control method used depends on which two criteria?",
        "answers": [
          "Media sharing",
          "Topology"
        ]
      },
      {
        "question": "Which organization defines standards for the network access layer (i.e., the OSI physical and data link layers)?",
        "answers": [
          "IEEE"
        ]
      }
    ],
    "6.2.9": [
      {
        "question": "Which topology displays networking device layer IP addresses?",
        "answers": [
          "logical topology"
        ]
      },
      {
        "question": "What kind of network would use point-to-point, hub and spoke, or mesh topologies?",
        "answers": [
          "WAN"
        ]
      },
      {
        "question": "Which LAN topology is a hybrid topology?",
        "answers": [
          "extended star"
        ]
      },
      {
        "question": "Which duplex communication method is used in WLANs?",
        "answers": [
          "half-duplex"
        ]
      },
      {
        "question": "Which media access control method is used in legacy Ethernet LANs?",
        "answers": [
          "carrier sense multiple access/collision detection"
        ]
      }
    ],
    "6.3.5": [
      {
        "question": "What does the data link layer add to a Layer 3 packet to create a frame? (Choose two.)",
        "answers": [
          "header",
          "trailer"
        ]
      },
      {
        "question": "What is the function of the last field in a data link layer frame?",
        "answers": [
          "To determine whether the frame experienced transmission errors"
        ]
      },
      {
        "question": "Which lists the Layer 2 and Layer 3 address fields in the correct order?",
        "answers": [
          "destination NIC address, source NIC address, source IP address, destination IP address"
        ]
      },
      {
        "question": "Which of the following are data link layer protocols? (Choose three)",
        "answers": [
          "802.11",
          "Ethernet",
          "PPP"
        ]
      }
    ],
    "7.1.5": [
      {
        "question": "Which part of an Ethernet Frame uses a pad to increase the frame field to at least 64 bytes?",
        "answers": [
          "Data field"
        ]
      },
      {
        "question": "Which part of an Ethernet frame detects errors in the frame?",
        "answers": [
          "Frame Check Sequence"
        ]
      },
      {
        "question": "Which part of an Ethernet Frame describes the higher-layer protocol that is encapsulated?",
        "answers": [
          "EtherType"
        ]
      },
      {
        "question": "Which part of an Ethernet Frame notifies the receiver to get ready for a new frame?",
        "answers": [
          "Preamble"
        ]
      },
      {
        "question": "Which data link sublayer controls the network interface through software drivers?",
        "answers": [
          "LLC"
        ]
      },
      {
        "question": "Which data link sublayer works with the upper layers to add application information for delivery of data to higher level protocols?",
        "answers": [
          "LLC"
        ]
      },
      {
        "question": "What is a function of the MAC sublayer? (Choose three.)",
        "answers": [
          "controls access to the media",
          "checks for errors in received bits",
          "uses CSMA/CD or CSMA/CA to support Ethernet technology"
        ]
      }
    ],
    "7.4.6": [
      {
        "question": "What are two methods for switching data between ports on a switch? (Choose two.)",
        "answers": [
          "cut-through switching",
          "store-and-forward switching"
        ]
      },
      {
        "question": "Which switching method can be implemented using fast-forward switching or fragment-free switching?",
        "answers": [
          "cut-through switching"
        ]
      },
      {
        "question": "Which two types of memory buffering techniques are used by switches? (Choose two.)",
        "answers": [
          "port-based memory buffering",
          "shared memory buffering"
        ]
      },
      {
        "question": "What feature automatically negotiates the best speed and duplex setting between interconnecting devices?",
        "answers": [
          "autonegotiation"
        ]
      }
    ],
    "8.1.7": [
      {
        "question": "Which OSI layer sends segments to be encapsulated in an IPv4 or IPv6 packet?",
        "answers": [
          "transport layer"
        ]
      },
      {
        "question": "Which layer is responsible for taking an IP packet and preparing it for transmission over the communications medium?",
        "answers": [
          "data link layer"
        ]
      },
      {
        "question": "What is the term for splitting up an IP packet when forwarding it from one medium to another medium with a smaller MTU?",
        "answers": [
          "fragmentation"
        ]
      },
      {
        "question": "Which delivery method does not guarantee that the packet will be delivered fully without errors?",
        "answers": [
          "best effort"
        ]
      }
    ],
    "8.2.4": [
      {
        "question": "What are the two most commonly referenced fields in an IPv4 packet header that indicate where the packet is coming from and where it is going? (Choose two.)",
        "answers": [
          "destination IP address",
          "source IP address"
        ]
      },
      {
        "question": "Which statement is correct about IPv4 packet header fields?",
        "answers": [
          "The source and destination IPv4 addresses remain the same while travelling from source to destination."
        ]
      },
      {
        "question": "Which field is used to detect corruption in the IPv4 header?",
        "answers": [
          "Header Checksum"
        ]
      },
      {
        "question": "Which field includes common values such as ICMP (1), TCP (6), and UDP (17)?",
        "answers": [
          "Protocol"
        ]
      }
    ],
    "8.3.6": [
      {
        "question": "Which three options are major issues associated with IPv4? (Choose three.)",
        "answers": [
          "IP address depletion",
          "increased network complexity and Internet routing table expansion",
          "lack of end-to-end connectivity"
        ]
      },
      {
        "question": "Which two options are improvements provided by IPv6 as compared to IPv4? (Choose two.)",
        "answers": [
          "increased the IP address space",
          "uses a simpler header to provide improved packet handling"
        ]
      },
      {
        "question": "Which is true of the IPv6 header?",
        "answers": [
          "it consists of 40 octets.",
          "it contains 8 header fields."
        ]
      },
      {
        "question": "Which is true of the IPv6 packet header?",
        "answers": [
          "The Hop Limit field replaces the IPv4 Time to Live field."
        ]
      }
    ],
    "8.4.5": [
      {
        "question": "Which statement about host forwarding decisions is true?",
        "answers": [
          "Local hosts can reach each other without the need of a router."
        ]
      },
      {
        "question": "Which default gateway statement is true?",
        "answers": [
          "The default gateway address is the IP address of the router on the local network."
        ]
      },
      {
        "question": "Which two commands could be entered on a Windows host to view its IPv4 and IPv6 routing table? (Choose two.)",
        "answers": [
          "netstat -r",
          "route print"
        ]
      }
    ],
    "8.5.7": [
      {
        "question": "What is the command used on a Cisco IOS router to view the routing table?",
        "answers": [
          "show ip route"
        ]
      },
      {
        "question": "What does a code of “O” indicate next to a route in the routing table?",
        "answers": [
          "a route learned dynamically from OSPF"
        ]
      },
      {
        "question": "This type of route is also known as a gateway of last resort.",
        "answers": [
          "default route"
        ]
      },
      {
        "question": "Which is a characteristic of static routes?",
        "answers": [
          "They are manually configured."
        ]
      },
      {
        "question": "True or False? A router can be configured with a combination of both static routes and a dynamic routing protocol.",
        "answers": [
          "True"
        ]
      }
    ],
    "9.1.4": [
      {
        "question": "What destination MAC address would be included in a frame sent from a source device to a destination device on the same local network?",
        "answers": [
          "The MAC address of the destination device."
        ]
      },
      {
        "question": "What destination MAC address would be included in a frame sent from a source device to a destination device on a remote local network?",
        "answers": [
          "The MAC address of the local router interface."
        ]
      },
      {
        "question": "What two protocols are used to determine the MAC address of a known destination device IP address (IPv4 and IPv6)?",
        "answers": [
          "ARP",
          "ND"
        ]
      }
    ],
    "9.2.10": [
      {
        "question": "What two functions are provided by ARP? (Choose two.)",
        "answers": [
          "Maintains a table of IPv4 to MAC address mappings",
          "Resolves IPv4 addresses to MAC addresses"
        ]
      },
      {
        "question": "Where is the ARP table stored on a device?",
        "answers": [
          "RAM"
        ]
      },
      {
        "question": "Which statement is true about ARP?",
        "answers": [
          "ARP entries are cached temporarily."
        ]
      },
      {
        "question": "Which command could be used on a Cisco router to view its ARP table?",
        "answers": [
          "show ip arp"
        ]
      },
      {
        "question": "What is an attack using ARP?",
        "answers": [
          "ARP poisoning"
        ]
      }
    ],
    "9.3.5": [
      {
        "question": "Which two ICMPv6 messages are used in SLAAC?",
        "answers": [
          "Router Advertisement",
          "Router Solicitation"
        ]
      },
      {
        "question": "Which two ICMPv6 messages are used in to determine the MAC address of a known IPv6 address?",
        "answers": [
          "Neighbor Advertisement",
          "Neighbor Solicitation"
        ]
      },
      {
        "question": "To what type of address are ICMPv6 neighbor solicitation messages sent?",
        "answers": [
          "multicast"
        ]
      }
    ],
    "11.1.8": [
      {
        "question": "Host-A has the IPv4 address and subnet mask 10.5.4.100 255.255.255.0. What is the network address of Host-A?",
        "answers": [
          "10.5.4.0"
        ]
      },
      {
        "question": "Host-A has the IPv4 address and subnet mask 172.16.4.100 255.255.0.0. What is the network address of Host-A?",
        "answers": [
          "172.16.0.0"
        ]
      },
      {
        "question": "Host-A has the IPv4 address and subnet mask 10.5.4.100 255.255.255.0. Which of the following IPv4 addresses would be on the same network as Host-A? (Choose all that apply)",
        "answers": [
          "10.5.4.1",
          "10.5.4.99"
        ]
      },
      {
        "question": "Host-A has the IPv4 address and subnet mask 172.16.4.100 255.255.0.0. Which of the following IPv4 addresses would be on the same network as Host-A? (Choose all that apply)",
        "answers": [
          "172.16.4.99",
          "172.16.0.1"
        ]
      },
      {
        "question": "Host-A has the IPv4 address and subnet mask 192.168.1.50 255.255.255.0. Which of the following IPv4 addresses would be on the same network as Host-A? (Choose all that apply)",
        "answers": [
          "192.168.1.1",
          "192.168.1.100"
        ]
      }
    ],
    "11.3.8": [
      {
        "question": "Which two statements are correct about private IPv4 addresses? (Choose two.)",
        "answers": [
          "Private IPv4 addresses are assigned to devices within an organization’s intranet (internal network).",
          "Any organization (home, school, office, company) can use the 10.0.0.0/8 address."
        ]
      },
      {
        "question": "Which two statements are correct about public IPv4 addresses? (Choose two.)",
        "answers": [
          "To access a device over the internet, the destination IPv4 address must be a public address.",
          "Public IPv4 address exhaustion is a reason why there are private IPv4 addresses and why organizations are transitioning to IPv6."
        ]
      },
      {
        "question": "Which organization or group of organizations receives IP addresses from IANA and is responsible for allocating these addresses to ISPs and some organizations?",
        "answers": [
          "RIRs"
        ]
      }
    ],
    "11.4.4": [
      {
        "question": "Which devices will not forward an IPv4 broadcast packet by default?",
        "answers": [
          "router"
        ]
      },
      {
        "question": "Which two situations are the result of excessive broadcast traffic? (Choose two)",
        "answers": [
          "slow network operations",
          "slow device operations"
        ]
      }
    ],
    "12.1.3": [
      {
        "question": "What is the most important motivating factor for moving to IPv6?",
        "answers": [
          "depletion of IPv4 addresses"
        ]
      },
      {
        "question": "True or False: 4 out of 5 RIRs no longer have enough IPv4 addresses to allocate to customers on a regular basis.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which of the following techniques use native IPv6 connectivity?",
        "answers": [
          "dual stack"
        ]
      }
    ],
    "12.3.8": [
      {
        "question": "What is the recommended prefix length for most IPv6 subnets?",
        "answers": [
          "/64"
        ]
      },
      {
        "question": "Which part of a GUA is assigned by the ISP?",
        "answers": [
          "Global Routing Prefix"
        ]
      },
      {
        "question": "Which type of IPv6 unicast address is not routable between networks?",
        "answers": [
          "LLA"
        ]
      },
      {
        "question": "True or False: The Subnet ID field in an GUA must borrow bits from the interface ID.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "What type of IPv6 address begins with fe80?",
        "answers": [
          "LLA"
        ]
      }
    ],
    "12.5.8": [
      {
        "question": "True or False. RA messages are sent to all IPv6 routers by hosts requesting addressing information.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which dynamic addressing method for GUAs is the one where devices rely solely on the contents of the RA message for their addressing information?",
        "answers": [
          "Method 1: SLAAC"
        ]
      },
      {
        "question": "Which dynamic addressing method for GUAs is the one where devices rely solely on a DHCPv6 server for their addressing information?",
        "answers": [
          "Method 3: Stateful DHCPv6"
        ]
      },
      {
        "question": "Which dynamic addressing method for GUAs is the one where devices get their IPv6 configuration in a RA message and request DNS information from a DHCPv6 server?",
        "answers": [
          "Method 2: SLAAC and Stateless DHCPv6"
        ]
      },
      {
        "question": "What are the two methods a device can use to generate its own IPv6 interface ID?",
        "answers": [
          "EUI-64",
          "randomly generated"
        ]
      }
    ],
    "12.8.5": [
      {
        "question": "True or False? IPv6 was designed with subnetting in mind.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "Which field in an IPv6 GUA is used for subnetting?",
        "answers": [
          "Subnet ID"
        ]
      },
      {
        "question": "Given a /48 Global Routing Prefix and a /64 prefix, what is the subnet portion of the following address: 2001:db8:cafe:1111:2222:3333:4444:5555",
        "answers": [
          "1111"
        ]
      },
      {
        "question": "Given a /32 Global Routing Prefix and a /64 prefix, how many bits would be allocated for the Subnet ID?",
        "answers": [
          "32"
        ]
      }
    ],
    "13.1.6": [
      {
        "question": "Which two types of ICMP messages are common to both ICMPv4 and ICMPv6? (Choose two.)",
        "answers": [
          "Destination or Service Unreachable",
          "Time exceeded"
        ]
      },
      {
        "question": "Which type of ICMPv6 message would a host send to acquire an IPv6 configuration when booting up?",
        "answers": [
          "Router Solicitation (RS) message"
        ]
      }
    ],
    "14.1.7": [
      {
        "question": "Which layer is responsible for establishing a temporary communication session between the source and destination host applications?",
        "answers": [
          "transport layer"
        ]
      },
      {
        "question": "Which three are transport layer responsibilities? (Choose three.)",
        "answers": [
          "conversation multiplexing",
          "segmenting data and reassembling segments",
          "tracking individual conversations"
        ]
      },
      {
        "question": "Which transport layer protocol statement is true?",
        "answers": [
          "UDP is a best-effort delivery protocol."
        ]
      },
      {
        "question": "Which transport layer protocol would be used for VoIP applications?",
        "answers": [
          "User Datagram Protocol (UDP)"
        ]
      }
    ],
    "14.2.5": [
      {
        "question": "Which transport layer protocol ensures reliable same-order delivery?",
        "answers": [
          "TCP"
        ]
      },
      {
        "question": "Which TCP header statement is true?",
        "answers": [
          "It consists of 10 fields in a 20-byte header."
        ]
      },
      {
        "question": "Which two applications would use the TCP transport layer protocol? (Choose two.)",
        "answers": [
          "FTP",
          "HTTP"
        ]
      }
    ],
    "14.3.5": [
      {
        "question": "Which of the following is a stateless best-effort delivery transport layer protocol?",
        "answers": [
          "UDP"
        ]
      },
      {
        "question": "Which UDP header statement is true?",
        "answers": [
          "It consists of 4 fields in an 8-byte header."
        ]
      },
      {
        "question": "Which two applications would use the UDP transport layer protocol? (Choose two.)",
        "answers": [
          "TFTP",
          "VoIP"
        ]
      },
      {
        "question": "Which two fields are the same in a TCP and UDP header? (Choose two.)",
        "answers": [
          "Destination port number",
          "Source port number"
        ]
      }
    ],
    "14.4.5": [
      {
        "question": "Assume a host with IP address 10.1.1.10 wants to request web services from a server at 10.1.1.254. Which of the following would display the correct socket pair?",
        "answers": [
          "10.1.1.10:1099, 10.1.1.254:80"
        ]
      },
      {
        "question": "Which port group includes port numbers for FTP, HTTP, and TFTP applications?",
        "answers": [
          "well-known ports"
        ]
      },
      {
        "question": "Which Windows command would display the protocols in use, the local address and port numbers, the foreign address and port numbers, and the connection state?",
        "answers": [
          "netstat"
        ]
      }
    ],
    "14.5.6": [
      {
        "question": "Which of the following would be valid source and destination ports for a host connecting to an email server?",
        "answers": [
          "Source: 49152, Destination: 25"
        ]
      },
      {
        "question": "Which control bit flags are used during the three-way handshake?",
        "answers": [
          "SYN and ACK"
        ]
      },
      {
        "question": "How many exchanges are needed to end both sessions between two hosts?",
        "answers": [
          "four exchanges"
        ]
      }
    ],
    "14.6.8": [
      {
        "question": "What field is used by the destination host to reassemble segments into the original order?",
        "answers": [
          "Sequence Number"
        ]
      },
      {
        "question": "What field is used to provide flow control?",
        "answers": [
          "Window Size"
        ]
      },
      {
        "question": "What happens when a sending host senses there is congestion?",
        "answers": [
          "The sending host reduces the number of bytes it sends before receiving an acknowledgment from the destination host."
        ]
      }
    ],
    "14.7.5": [
      {
        "question": "Why is UDP desirable for protocols that make a simple request and reply transactions?",
        "answers": [
          "Low overhead"
        ]
      },
      {
        "question": "Which UDP datagram reassembly statement is true?",
        "answers": [
          "UDP reassembles the data in the order that it was received."
        ]
      },
      {
        "question": "Which of the following would be valid source and destination ports for a host connecting to a DNS server?",
        "answers": [
          "Source: 49152, Destination: 53"
        ]
      }
    ],
    "15.1.4": [
      {
        "question": "This layer of the OSI model is concerned with the protocols that exchange data between programs running on hosts.",
        "answers": [
          "application"
        ]
      },
      {
        "question": "MKV, GIF, and JPG standards are associated with which OSI layer?",
        "answers": [
          "presentation"
        ]
      },
      {
        "question": "These three OSI layers define the same functions as the TCP/IP model application layer.",
        "answers": [
          "application",
          "presentation",
          "session"
        ]
      },
      {
        "question": "Which two are protocols that belong in the OSI application layer?",
        "answers": [
          "DNS",
          "SMTP"
        ]
      },
      {
        "question": "This is a function of the OSI session layer.",
        "answers": [
          "exchange of information to initiate dialog between peers"
        ]
      }
    ],
    "15.2.5": [
      {
        "question": "True or false? The peer-to-peer networking model requires the implementation of a dedicated server for data access.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "True or false? In a peer-to-peer network environment every peer can function as both a client and a server.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "Which peer-to-peer application allows users to share pieces of many files with each other at the same time?",
        "answers": [
          "BitTorrent"
        ]
      },
      {
        "question": "Which of the following is a feature of the Gnutella protocol?",
        "answers": [
          "Users can share whole files with other users."
        ]
      }
    ],
    "15.3.5": [
      {
        "question": "This message type is used when uploading data files to a web server.",
        "answers": [
          "POST"
        ]
      },
      {
        "question": "This protocol is used by a web browser to establish a connection to a web server.",
        "answers": [
          "HTTP"
        ]
      },
      {
        "question": "This protocol is used by a client to send email to a mail server.",
        "answers": [
          "SMTP"
        ]
      },
      {
        "question": "Which is a feature of IMAP?",
        "answers": [
          "It downloads a copy of email messages leaving the original on the server."
        ]
      },
      {
        "question": "True or false? HTTP is a secure protocol.",
        "answers": [
          "False"
        ]
      }
    ],
    "15.4.9": [
      {
        "question": "Which of the following DNS record types is used to resolve IPv6 addresses?",
        "answers": [
          "AAAA"
        ]
      },
      {
        "question": "True or false? A DNS server that receives a request for a name resolution that is not within its DNS zone will send a failure message to the requesting client.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which of the following is displayed by the nslookup utility?",
        "answers": [
          "the configured default DNS server"
        ]
      },
      {
        "question": "Which of the following DNS resource record types resolves authoritative name servers?",
        "answers": [
          "NS"
        ]
      }
    ],
    "15.5.3": [
      {
        "question": "How many connections are required by FTP between client and server?",
        "answers": [
          "2"
        ]
      },
      {
        "question": "True or false? FTP data transfers take place from client to server (push) and from server to client (pull).",
        "answers": [
          "True"
        ]
      },
      {
        "question": "Which of these ports are used by FTP? (Choose two.)",
        "answers": [
          "20",
          "21"
        ]
      },
      {
        "question": "True or false? Resource sharing over SMB is only supported on Microsoft operating systems.",
        "answers": [
          "False"
        ]
      }
    ],
    "16.1.4": [
      {
        "question": "What kind of threat is described when a threat actor sends you a virus that can reformat your hard drive?",
        "answers": [
          "data loss or manipulation"
        ]
      },
      {
        "question": "What kind of threat is described when a threat actor makes illegal online purchases using stolen credit information?",
        "answers": [
          "identify theft"
        ]
      },
      {
        "question": "What kind of threat is described when a threat actor prevents legal users from accessing data services?",
        "answers": [
          "disruption of service"
        ]
      },
      {
        "question": "What kind of threat is described when a threat actor steals scientific research data?",
        "answers": [
          "information theft"
        ]
      },
      {
        "question": "What kind of threat is described when a threat actor overloads a network to deny other users network access?",
        "answers": [
          "disruption of service"
        ]
      },
      {
        "question": "What kind of threat is described when a threat actor alters data records?",
        "answers": [
          "data loss or manipulation"
        ]
      },
      {
        "question": "What kind of threat is described when a threat actor is stealing the user database of a company?",
        "answers": [
          "information theft"
        ]
      },
      {
        "question": "What kind of threat is described when a threat actor impersonates another person to obtain credit information about that person?",
        "answers": [
          "identify theft"
        ]
      }
    ],
    "16.2.5": [
      {
        "question": "Angela, an IT staff member at ACME Inc., notices that communication with the company’s web server is very slow. After investigating, she determines that the cause of the slow response is a computer on the internet sending a very large number of malformed web requests to ACME’S web server. What type of attack is described in this scenario?",
        "answers": [
          "denial of service (DoS) attack"
        ]
      },
      {
        "question": "George needed to share a video with a co-worker. Because of the large size of the video file, he decided to run a simple FTP server on his workstation to serve the video file to his co-worker. To make things easier, George created an account with the simple password of “file” and provided it to his co-worker on Friday. Without the proper security measures or a strong password, the IT staff was not surprised to learn on Monday that George’s workstation had been compromised and was trying to upload work related documents to the internet. What type of attack is described in this scenario?",
        "answers": [
          "access attack"
        ]
      },
      {
        "question": "Jeremiah was browsing the internet from his personal computer when a random website offered a free program to clean his system. After the executable was downloaded and running, the operating system crashed. Crucial operating system related files had been corrupted and Jeremiah’s computer required a full disk format and operating system re-installation. What type of attack is described in this scenario?",
        "answers": [
          "malware attack"
        ]
      },
      {
        "question": "Arianna found a flash drive lying on the pavement of a mall parking lot. She asked around but could not find the owner. She decided to keep it and plugged it into her laptop, only to find a photo folder. Feeling curious, Arianna opened a few photos before formatting the flash drive for her own use. Afterwards, Arianna noticed that her laptop camera was active. What type of attack is described in this scenario?",
        "answers": [
          "malware attack"
        ]
      },
      {
        "question": "A computer is used as a print server for ACME Inc. The IT staff failed to apply security updates to this computer for over 60 days. Now the print server is operating slowly, and sending a high number of malicious packets to its NIC. What type of attack is described in this scenario?",
        "answers": [
          "denial of service (DoS) attack"
        ]
      },
      {
        "question": "Sharon, an IT intern at ACME Inc., noticed some strange packets while revising the security logs generated by the firewall. A handful of IP addresses on the internet were sending malformed packets to several different IP addresses, at several different random port numbers inside ACME Inc. What type of attack is described in this scenario?",
        "answers": [
          "reconnaissance attack"
        ]
      }
    ],
    "16.3.8": [
      {
        "question": "Which device controls traffic between two or more networks to help prevent unauthorized access?",
        "answers": [
          "firewall"
        ]
      },
      {
        "question": "Which device is used by other network devices to authenticate and authorize management access?",
        "answers": [
          "AAA Server"
        ]
      },
      {
        "question": "Which backup policy consideration is concerned with using strong passwords to protect the backups and for restoring data?",
        "answers": [
          "security"
        ]
      },
      {
        "question": "This zone is used to house servers that should be accessible to outside users.",
        "answers": [
          "DMZ"
        ]
      },
      {
        "question": "Which is appropriate for providing endpoint security?",
        "answers": [
          "antivirus software"
        ]
      }
    ],
    "17.1.6": [
      {
        "question": "Which statement correctly relates to a small network?",
        "answers": [
          "The majority of businesses are small."
        ]
      },
      {
        "question": "Which factor must be considered when selecting network devices?",
        "answers": [
          "cost"
        ]
      },
      {
        "question": "What is necessary to plan and use when implementing a network?",
        "answers": [
          "IP addressing scheme"
        ]
      },
      {
        "question": "What is required to maintain a high degree of reliability and eliminate single points of failure?",
        "answers": [
          "redundancy"
        ]
      },
      {
        "question": "What is required to classify traffic according to priority?",
        "answers": [
          "quality of service (QoS)"
        ]
      }
    ],
    "17.2.4": [
      {
        "question": "What are two forms of software programs or processes that provide access to the network? (Choose two.)",
        "answers": [
          "application layer services",
          "network applications"
        ]
      },
      {
        "question": "Which two network protocols are used to establish a remote access network connection to a device? (Choose two.)",
        "answers": [
          "Secure Shell (SSH)",
          "Telnet"
        ]
      }
    ],
    "17.3.4": [
      {
        "question": "Which elements are required to scale to a larger network? (Choose two.)",
        "answers": [
          "budget",
          "network documentation"
        ]
      },
      {
        "question": "Which software installed on key hosts can reveal the types of network traffic flowing through the network?",
        "answers": [
          "Wireshark"
        ]
      },
      {
        "question": "What Windows 10 tool is useful to determine which applications are using network services on a host?",
        "answers": [
          "Data Usage"
        ]
      }
    ],
    "17.6.5": [
      {
        "question": "A technician is troubleshooting a network problem and has just established a theory of probable causes. What would be the next step in the troubleshooting process?",
        "answers": [
          "Test the theory to determine cause."
        ]
      },
      {
        "question": "A technician is troubleshooting a network problem. After troubleshooting, the technician concludes that a switch should be replaced. What should the technician do next?",
        "answers": [
          "Escalate the trouble ticket to the manager to approve the change."
        ]
      },
      {
        "question": "A technician is using the debug ip icmp privileged EXEC command to capture live router output. Which commands would stop this debug command on a Cisco router? (Choose two.)",
        "answers": [
          "no debug ip icmp",
          "undebug all"
        ]
      },
      {
        "question": "A technician has established a remote connection to router R1 to observe debug output. The technician enters the debug ip icmp command then pings a remote destination. However, no output is displayed. Which command would the technician have to enter to display log messages on a remote connection?",
        "answers": [
          "terminal monitor"
        ]
      }
    ]
};

const CHECKPOINT_DB = {
    "1-3": [
      {
        "question": "During a routine inspection, a technician discovered that software that was installed on a computer was secretly collecting data about websites that were visited by users of the computer. Which type of threat is affecting this computer?",
        "answers": [
          "spyware"
        ]
      },
      {
        "question": "Which term refers to a network that provides secure access to the corporate offices by suppliers, customers and collaborators?",
        "answers": [
          "extranet"
        ]
      },
      {
        "question": "A large corporation has modified its network to allow users to access network resources from their personal laptops and smart phones. Which networking trend does this describe?",
        "answers": [
          "bring your own device"
        ]
      },
      {
        "question": "What is an ISP?",
        "answers": [
          "It is an organization that enables individuals and businesses to connect to the Internet."
        ]
      },
      {
        "question": "Match the requirements of a reliable network with the supporting network architecture. (Not all options are used.)",
        "answers": [
          "fault tolerance -> Provide redundant links and devices.",
          "scalability -> Expand the network without degrading the service for existing users.",
          "security -> Protect the network from unauthorized access."
        ]
      },
      {
        "question": "An employee at a branch office is creating a quote for a customer. In order to do this, the employee needs to access confidential pricing information from internal servers at the Head Office. What type of network would the employee access?",
        "answers": [
          "an intranet"
        ]
      },
      {
        "question": "Which statement describes the use of powerline networking technology?",
        "answers": [
          "A device connects to an existing home LAN using an adapter and an existing electrical outlet."
        ]
      },
      {
        "question": "A networking technician is working on the wireless network at a medical clinic. The technician accidentally sets up the wireless network so that patients can see the medical records data of other patients. Which of the four network characteristics has been violated in this situation?",
        "answers": [
          "security"
        ]
      },
      {
        "question": "Match each characteristic to its corresponding Internet connectivity type. (Not all options are used.)",
        "answers": [
          "uses coaxial cable as a medium -> cable",
          "not suited for heavily wooded areas -> satellite",
          "typically has very low bandwidth -> dialup telephone",
          "high bandwidth connection that runs over telephone line -> DSL"
        ]
      },
      {
        "question": "What two criteria are used to help select a network medium from various network media? (Choose two.)",
        "answers": [
          "the distance the selected medium can successfully carry a signal",
          "the environment where the selected medium is to be installed"
        ]
      },
      {
        "question": "What type of network traffic requires QoS?",
        "answers": [
          "video conferencing"
        ]
      },
      {
        "question": "A user is implementing security on a small office network. Which two actions would provide the minimum security requirements for this network? (Choose two.)",
        "answers": [
          "implementing a firewall",
          "installing antivirus software"
        ]
      },
      {
        "question": "Passwords can be used to restrict access to all or parts of the Cisco IOS. Select the modes and interfaces that can be protected with passwords. (Choose three.)",
        "answers": [
          "VTY interface",
          "console interface",
          "privileged EXEC mode"
        ]
      },
      {
        "question": "Which interface allows remote management of a Layer 2 switch?",
        "answers": [
          "the switch virtual interface"
        ]
      },
      {
        "question": "What function does pressing the Tab key have when entering a command in IOS?",
        "answers": [
          "It completes the remainder of a partially typed word in a command."
        ]
      },
      {
        "question": "While trying to solve a network issue, a technician made multiple changes to the current router configuration file. The changes did not solve the problem and were not saved. What action can the technician take to discard the changes and work with the file in NVRAM?",
        "answers": [
          "Issue the reload command without saving the running configuration."
        ]
      },
      {
        "question": "An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?",
        "answers": [
          "to interrupt the ping process"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses a console connection to connect to the switch, which password is needed to access user EXEC mode?",
        "answers": [
          "lineconin"
        ]
      },
      {
        "question": "A technician configures a switch with these commands:",
        "answers": [
          "SVI"
        ]
      },
      {
        "question": "Which command or key combination allows a user to return to the previous level in the command hierarchy?",
        "answers": [
          "exit"
        ]
      },
      {
        "question": "What are two characteristics of RAM on a Cisco device? (Choose two.)",
        "answers": [
          "The configuration that is actively running on the device is stored in RAM.",
          "The contents of RAM are lost during a power cycle."
        ]
      },
      {
        "question": "Which two host names follow the guidelines for naming conventions on Cisco IOS devices? (Choose two.)",
        "answers": [
          "RM-3-Switch-2A4",
          "SwBranch799"
        ]
      },
      {
        "question": "How is SSH different from Telnet?",
        "answers": [
          "SSH provides security to remote sessions by encrypting messages and using user authentication. Telnet is considered insecure and sends messages in plaintext."
        ]
      },
      {
        "question": "An administrator is configuring a switch console port with a password. In what order will the administrator travel through the IOS modes of operation in order to reach the mode in which the configuration commands will be entered? (Not all options are used.)",
        "answers": [
          "first mode -> user EXEC mode",
          "second mode -> privileged EXEC mode",
          "third mode -> global configuration mode",
          "final mode -> line configuration mode"
        ]
      },
      {
        "question": "What are three characteristics of an SVI? (Choose three.)",
        "answers": [
          "It is not associated with any physical interface on a switch.",
          "It provides a means to remotely manage a switch.",
          "It is associated with VLAN1 by default."
        ]
      },
      {
        "question": "What command is used to verify the condition of the switch interfaces, including the status of the interfaces and a configured IP address?",
        "answers": [
          "show ip interface brief"
        ]
      },
      {
        "question": "Match the description with the associated IOS mode. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2020-03-08_184953.jpg"
      },
      {
        "question": "Match the definitions to their respective CLI hot keys and shortcuts. (Not all options are used.)",
        "answers": [
          "provides context-sensitive help -> ?",
          "displays the next screen -> Space bar",
          "completes abbreviated commands and parameters -> Tab",
          "scrolls backwards through previously entered commands -> Up Arrow",
          "aborts commands such as trace and ping -> Ctrl-Shift-6"
        ]
      },
      {
        "question": "In the show running-config command, which part of the syntax is represented by running-config ?",
        "answers": [
          "a keyword"
        ]
      },
      {
        "question": "After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?",
        "answers": [
          "The new configuration will be loaded if the switch is restarted."
        ]
      },
      {
        "question": "What command will prevent all unencrypted passwords from displaying in plain text in a configuration file?",
        "answers": [
          "(config)# service password-encryption"
        ]
      },
      {
        "question": "A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?",
        "answers": [
          "This command prevents someone from viewing the running configuration passwords."
        ]
      },
      {
        "question": "What method can be used by two computers to ensure that packets are not dropped because too much data is being sent too quickly?",
        "answers": [
          "flow control"
        ]
      },
      {
        "question": "Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?",
        "answers": [
          "Segments are sent from the transport layer to the internet layer."
        ]
      },
      {
        "question": "What three application layer protocols are part of the TCP/IP protocol suite? (Choose three.)",
        "answers": [
          "DHCP",
          "DNS",
          "FTP"
        ]
      },
      {
        "question": "Match the description to the organization. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2020-04-23_200939.jpg"
      },
      {
        "question": "Which name is assigned to the transport layer PDU?",
        "answers": [
          "segment"
        ]
      },
      {
        "question": "When IPv4 addressing is manually configured on a web server, which property of the IPv4 configuration identifies the network and host portion for an IPv4 address?",
        "answers": [
          "subnet mask"
        ]
      },
      {
        "question": "What process involves placing one PDU inside of another PDU?",
        "answers": [
          "encapsulation"
        ]
      },
      {
        "question": "What layer is responsible for routing messages through an internetwork in the TCP/IP model?",
        "answers": [
          "internet"
        ]
      },
      {
        "question": "For the TCP/IP protocol suite, what is the correct order of events when a Telnet message is being prepared to be sent over the network?",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_084235.jpg"
      },
      {
        "question": "Which PDU format is used when bits are received from the network medium by the NIC of a host?",
        "answers": [
          "frame"
        ]
      },
      {
        "question": "Refer to the exhibit. ServerB is attempting to contact HostA. Which two statements correctly identify the addressing that ServerB will generate in the process? (Choose two.)",
        "answers": [
          "ServerB will generate a frame with the destination MAC address of RouterB.",
          "ServerB will generate a packet with the destination IP address of HostA."
        ]
      },
      {
        "question": "Which method allows a computer to react accordingly when it requests data from a server and the server takes too long to respond?",
        "answers": [
          "response timeout"
        ]
      },
      {
        "question": "A web client is receiving a response for a web page from a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to decode the received transmission?",
        "answers": [
          "Ethernet, IP, TCP, HTTP"
        ]
      },
      {
        "question": "Which two OSI model layers have the same functionality as a single layer of the TCP/IP model? (Choose two.)",
        "answers": [
          "data link",
          "physical"
        ]
      },
      {
        "question": "At which layer of the OSI model would a logical address be added during encapsulation?",
        "answers": [
          "network layer"
        ]
      },
      {
        "question": "What is a characteristic of multicast messages?",
        "answers": [
          "They are sent to a select group of hosts."
        ]
      },
      {
        "question": "Which statement is correct about network protocols?",
        "answers": [
          "They define how messages are exchanged between the source and the destination."
        ]
      },
      {
        "question": "What is an advantage of network devices using open standard protocols?",
        "answers": [
          "A client host and a server running different operating systems can successfully exchange data."
        ]
      },
      {
        "question": "Which device performs the function of determining the path that messages should take through internetworks?",
        "answers": [
          "a router"
        ]
      },
      {
        "question": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.",
        "answers": [
          "192.168.5.10"
        ]
      },
      {
        "question": "Why would a Layer 2 switch need an IP address?",
        "answers": [
          "to enable the switch to be managed remotely"
        ]
      },
      {
        "question": "Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?",
        "answers": [
          "The administrator must first enter privileged EXEC mode before issuing the command."
        ]
      },
      {
        "question": "What term describes a network owned by one organization that provides safe and secure access to individuals who work for a different organization?",
        "answers": [
          "extranet"
        ]
      },
      {
        "question": "What term describes storing personal files on servers over the internet to provide access anywhere, anytime, and on any device?",
        "answers": [
          "cloud"
        ]
      },
      {
        "question": "What term describes a network where one computer can be both client and server?",
        "answers": [
          "peer-to-peer"
        ]
      },
      {
        "question": "What term describes a type of network used by people who work from home or from a small remote office?",
        "answers": [
          "SOHO network"
        ]
      },
      {
        "question": "What term describes a computing model where server software runs on dedicated computers?",
        "answers": [
          "client/server"
        ]
      },
      {
        "question": "What term describes a technology that allows devices to connect to the LAN using an electrical outlet?",
        "answers": [
          "powerline networking"
        ]
      },
      {
        "question": "What term describes a policy that allows network devices to manage the flow of data to give priority to voice and video?",
        "answers": [
          "quality of service"
        ]
      },
      {
        "question": "What term describes a private collection of LANs and WANs that belongs to an organization?",
        "answers": [
          "intranet"
        ]
      },
      {
        "question": "What term describes the ability to use personal devices across a business or campus network?",
        "answers": [
          "BYOD"
        ]
      },
      {
        "question": "At which OSI layer is a source IP address added to a PDU during the encapsulation process?",
        "answers": [
          "network layer"
        ]
      },
      {
        "question": "At which OSI layer is a destination port number added to a PDU during the encapsulation process?",
        "answers": [
          "transport layer"
        ]
      },
      {
        "question": "At which OSI layer is data added to a PDU during the encapsulation process?",
        "answers": [
          "application layer"
        ]
      },
      {
        "question": "At which OSI layer is a source IP address added to a PDU during the encapsulation process?",
        "answers": [
          "network layer"
        ]
      },
      {
        "question": "Which of the following is the name for all computers connected to a network that participate directly in network communication?",
        "answers": [
          "Host"
        ]
      },
      {
        "question": "At which OSI layer is a destination IP address added to a PDU during the encapsulation process?",
        "answers": [
          "network layer"
        ]
      },
      {
        "question": "At which OSI layer is a source MAC address added to a PDU during the encapsulation process?",
        "answers": [
          "data link layer"
        ]
      },
      {
        "question": "At which OSI layer is a source port number added to a PDU during the encapsulation process?",
        "answers": [
          "transport layer"
        ]
      },
      {
        "question": "At which OSI layer is a destination MAC address added to a PDU during the encapsulation process?",
        "answers": [
          "data link layer"
        ]
      },
      {
        "question": "When data is encoded as pulses of light, which media is being used to transmit the data?",
        "answers": [
          "Fire optic cable"
        ]
      },
      {
        "question": "Which two devices are intermediary devices? (Choose two)",
        "answers": [
          "Router",
          "Switch"
        ]
      },
      {
        "question": "A college is building a new dormitory on its campus. Workers are digging in the ground to install a new water pipe for the dormitory. A worker accidentally damages a fiber optic cable that connects two of the existing dormitories to the campus data center. Although the cable has been cut, students in the dormitories only experience a very short interruption of network services. What characteristic of the network is shown here?",
        "answers": [
          "fault tolerance"
        ]
      }
    ],
    "4-7": [
      {
        "question": "What is the purpose of the OSI physical layer?",
        "answers": [
          "transmitting bits across the local media"
        ]
      },
      {
        "question": "Why are two strands of fiber used for a single fiber optic connection?",
        "answers": [
          "They allow for full-duplex connectivity."
        ]
      },
      {
        "question": "Which characteristic describes crosstalk?",
        "answers": [
          "the distortion of the transmitted messages from signals carried in adjacent wires"
        ]
      },
      {
        "question": "Which procedure is used to reduce the effect of crosstalk in copper cables?",
        "answers": [
          "twisting opposing circuit wire pairs together"
        ]
      },
      {
        "question": "Match the situation with the appropriate use of network media.",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2024-12-25_150053.jpg"
      },
      {
        "question": "A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)",
        "answers": [
          "the amount of traffic that is currently crossing the network",
          "the type of traffic that is crossing the network",
          "the latency that is created by the number of network devices that the data is crossing"
        ]
      },
      {
        "question": "What are two characteristics of fiber-optic cable? (Choose two.)",
        "answers": [
          "It is not affected by EMI or RFI.",
          "It is more expensive than UTP cabling is."
        ]
      },
      {
        "question": "What is a primary role of the Physical layer in transmitting data on the network?",
        "answers": [
          "create the signals that represent the bits in each frame on to the media"
        ]
      },
      {
        "question": "With the use of unshielded twisted-pair copper wire in a network, what causes crosstalk within the cable pairs?",
        "answers": [
          "the magnetic field around the adjacent pairs of wire"
        ]
      },
      {
        "question": "Refer to the graphic. What type of cabling is shown?",
        "answers": [
          "fiber"
        ]
      },
      {
        "question": "In addition to the cable length, what two factors could interfere with the communication carried over UTP cables? (Choose two.)",
        "answers": [
          "crosstalk",
          "electromagnetic interference"
        ]
      },
      {
        "question": "Which two devices commonly affect wireless networks? (Choose two.)",
        "answers": [
          "cordless phones",
          "microwaves"
        ]
      },
      {
        "question": "Which two statements describe the services provided by the data link layer? (Choose two.)",
        "answers": [
          "It manages the access of frames to the network media.",
          "It packages various Layer 3 PDUs into a frame format that is compatible with the network interface."
        ]
      },
      {
        "question": "What is the function of the CRC value that is found in the FCS field of a frame?",
        "answers": [
          "to verify the integrity of the received frame"
        ]
      },
      {
        "question": "What is contained in the trailer of a data-link frame?",
        "answers": [
          "error detection"
        ]
      },
      {
        "question": "Which statement describes a characteristic of the frame header fields of the data link layer?",
        "answers": [
          "They vary depending on protocols."
        ]
      },
      {
        "question": "A network team is comparing physical WAN topologies for connecting remote sites to a headquarters building. Which topology provides high availability and connects some, but not all, remote sites?",
        "answers": [
          "partial mesh"
        ]
      },
      {
        "question": "Which two fields or features does Ethernet examine to determine if a received frame is passed to the data link layer or discarded by the NIC? (Choose two.)",
        "answers": [
          "Frame Check Sequence",
          "minimum frame size"
        ]
      },
      {
        "question": "Which media communication type does not require media arbitration in the data link layer?",
        "answers": [
          "full-duplex"
        ]
      },
      {
        "question": "Which statement describes an extended star topology?",
        "answers": [
          "End devices connect to a central intermediate device, which in turn connects to other central intermediate devices."
        ]
      },
      {
        "question": "What is a characteristic of the LLC sublayer?",
        "answers": [
          "It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media."
        ]
      },
      {
        "question": "What are three ways that media access control is used in networking? (Choose three.)",
        "answers": [
          "Ethernet utilizes CSMA/CD.",
          "Media access control provides placement of data frames onto the media.",
          "Data link layer protocols define the rules for access to different media."
        ]
      },
      {
        "question": "During the encapsulation process, what occurs at the data link layer for a PC connected to an Ethernet network?",
        "answers": [
          "The physical address is added."
        ]
      },
      {
        "question": "What three items are contained in an Ethernet header and trailer? (Choose three.)",
        "answers": [
          "source MAC address",
          "destination MAC address",
          "error-checking information"
        ]
      },
      {
        "question": "What type of communication rule would best describe CSMA/CD?",
        "answers": [
          "access method"
        ]
      },
      {
        "question": "Which three basic parts are common to all frame types supported by the data link layer? (Choose three.)",
        "answers": [
          "header",
          "data",
          "trailer"
        ]
      },
      {
        "question": "Which statement is true about the CSMA/CD access method that is used in Ethernet?",
        "answers": [
          "All network devices must listen before transmitting."
        ]
      },
      {
        "question": "What is the auto-MDIX feature on a switch?",
        "answers": [
          "the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection"
        ]
      },
      {
        "question": "Refer to the exhibit. What is the destination MAC address of the Ethernet frame as it leaves the web server if the final destination is PC1?",
        "answers": [
          "00-60-2F-3A-07-CC"
        ]
      },
      {
        "question": "A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?",
        "answers": [
          "shared memory buffering"
        ]
      },
      {
        "question": "What are two examples of the cut-through switching method? (Choose two.)",
        "answers": [
          "fast-forward switching",
          "fragment-free switching"
        ]
      },
      {
        "question": "Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?",
        "answers": [
          "store-and-forward switching"
        ]
      },
      {
        "question": "What is the purpose of the FCS field in a frame?",
        "answers": [
          "to determine if errors occurred in the transmission and reception"
        ]
      },
      {
        "question": "Which switching method has the lowest level of latency?",
        "answers": [
          "fast-forward"
        ]
      },
      {
        "question": "A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)",
        "answers": [
          "The link between the switches will work at the fastest speed that is supported by both switches.",
          "The link between switches will work as full-duplex.",
          "The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable."
        ]
      },
      {
        "question": "Which advantage does the store-and-forward switching method have compared with the cut-through switching method?",
        "answers": [
          "frame error checking"
        ]
      },
      {
        "question": "When the store-and-forward method of switching is in use, what part of the Ethernet frame is used to perform an error check?",
        "answers": [
          "CRC in the trailer"
        ]
      },
      {
        "question": "Which switching method uses the CRC value in a frame?",
        "answers": [
          "store-and-forward"
        ]
      },
      {
        "question": "What are two actions performed by a Cisco switch? (Choose two.)",
        "answers": [
          "using the source MAC addresses of frames to build and maintain a MAC address table",
          "utilizing the MAC address table to forward frames via the destination MAC address"
        ]
      },
      {
        "question": "Which two statements describe features or functions of the logical link control sublayer in Ethernet standards? (Choose two.)",
        "answers": [
          "Logical link control is implemented in software.",
          "The data link layer uses LLC to communicate with the upper layers of the protocol suite."
        ]
      },
      {
        "question": "What is the auto-MDIX feature?",
        "answers": [
          "It enables a device to automatically configure an interface to use a straight-through or a crossover cable."
        ]
      },
      {
        "question": "What is one advantage of using the cut-through switching method instead of the store-and-forward switching method?",
        "answers": [
          "has a lower latency appropriate for high-performance computing applications​"
        ]
      },
      {
        "question": "Which is a multicast MAC address?",
        "answers": [
          "01-00-5E-00-00-03"
        ]
      },
      {
        "question": "Refer to the exhibit. What is wrong with the displayed termination?",
        "answers": [
          "The untwisted length of each wire is too long."
        ]
      },
      {
        "question": "Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?​",
        "answers": [
          "1 - rollover, 2 - straight-through, 3 - crossover"
        ]
        },
      {
        "question": "Which port does Switch0 use to send frames to the host with the IPv4 address 10.1.1.5?",
        "answers": [
          "Fa0/11"
        ]
      },
      {
        "question": "What does the term “attenuation” mean in data communication?",
        "answers": [
          "loss of signal strength as distance increases"
        ]
      },
      {
        "question": "What makes fiber preferable to copper cabling for interconnecting buildings? (Choose three.)",
        "answers": [
          "greater distances per cable run",
          "limited susceptibility to EMI/RFI",
          "greater bandwidth potential"
        ]
      },
      {
        "question": "What OSI physical layer term describes the process by which one wave modifies another wave?",
        "answers": [
          "modulation"
        ]
      },
      {
        "question": "What OSI physical layer term describes the capacity at which a medium can carry data?",
        "answers": [
          "bandwidth"
        ]
      },
      {
        "question": "What OSI physical layer term describes the measure of the transfer of bits across a medium over a given period of time?",
        "answers": [
          "throughput"
        ]
      },
      {
        "question": "What OSI physical layer term describes the amount of time, including delays, for data to travel from one point to another?",
        "answers": [
          "latency"
        ]
      },
      {
        "question": "What OSI physical layer term describes the amount of time, including delays, for data to travel from one point to another?",
        "answers": [
          "latency"
        ]
      },
      {
        "question": "What OSI physical layer term describes the measure of usable data transferred over a given period of time?",
        "answers": [
          "goodput"
        ]
      },
      {
        "question": "What OSI physical layer term describes the physical medium which uses electrical pulses?",
        "answers": [
          "copper cable"
        ]
      },
      {
        "question": "What OSI physical layer term describes the physical medium that uses the propagation of light?",
        "answers": [
          "fiber-optic cable"
        ]
      },
      {
        "question": "What OSI physical layer term describes the physical medium for microwave transmissions?",
        "answers": [
          "air"
        ]
      },
      {
        "question": "Which two functions are performed at the MAC sublayer of the OSI data link layer? (Choose two.)",
        "answers": [
          "Controls the NIC responsible for sending and receiving data on the physical medium.",
          "Implements a trailer to detect transmission errors.",
          "Provides synchronization between source and target nodes.",
          "Integrates various physical technologies.",
          "Provides synchronization between source and target nodes.",
          "Implements a trailer to detect transmission errors.",
          "Integrates various physical technologies.",
          "Provides synchronization between source and target nodes.",
          "Integrates various physical technologies.",
          "Controls the NIC responsible for sending and receiving data on the physical medium.",
          "Controls the NIC responsible for sending and receiving data on the physical medium",
          "Provides a mechanism to allow multiple devices to communicate over a shared medium."
        ]
      },
      {
        "question": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
        "answers": [
          "Enables IPv4 and IPv6 to utilize the same network interface and media.",
          "Places information in the frame that identifies which network layer protocol is being used for the frame."
        ]
      },
      {
        "question": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
        "answers": [
          "Adds Layer 2 control information to network protocol data.",
          "Places information in the frame that identifies which network layer protocol is being used for the frame."
        ]
      },
      {
        "question": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
        "answers": [
          "Adds Layer 2 control information to network protocol data.",
          "Enables IPv4 and IPv6 to utilize the same network interface and media."
        ]
      },
      {
        "question": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
        "answers": [
          "Enables IPv4 and IPv6 to utilize the same network interface and media.",
          "Adds Layer 2 control information to network protocol data."
        ]
      },
      {
        "question": "What action will occur if a switch receives a frame with the destination MAC address FF:FF:FF:FF:FF:FF?",
        "answers": [
          "The switch forwards it out all ports except the ingress port."
        ]
      },
      {
        "question": "What action will occur if a switch receives a frame with the destination MAC address 01:00:5E:00:00:D9?",
        "answers": [
          "The switch forwards it out all ports except the ingress port."
        ]
      },
      {
        "question": "What action will occur if a host receives a frame with a destination MAC address of FF:FF:FF:FF:FF:FF?",
        "answers": [
          "The host will process the frame."
        ]
      },
      {
        "question": "What action will occur if a switch receives a frame and does have the source MAC address in the MAC table?",
        "answers": [
          "The switch refreshes the timer on that entry."
        ]
      },
      {
        "question": "What action will occur if a host receives a frame with a destination MAC address of FF:FF:FF:FF:FF:FF?",
        "answers": [
          "The host will process the frame."
        ]
      },
      {
        "question": "What action will occur if a host receives a frame with a destination MAC address it does not recognize?",
        "answers": [
          "The host will discard the frame."
        ]
      },
      {
        "question": "Which type of UTP cable is used to connect a PC to a switch port?",
        "answers": [
          "straight-through"
        ]
      }
    ],
    "8-10": [
      {
        "question": "Which information is used by routers to forward a data packet toward its destination?",
        "answers": [
          "destination IP address"
        ]
      },
      {
        "question": "A computer has to send a packet to a destination host in the same LAN. How will the packet be sent?",
        "answers": [
          "The packet will be sent directly to the destination host."
        ]
      },
      {
        "question": "A router receives a packet from the Gigabit 0/0 interface and determines that the packet needs to be forwarded out the Gigabit 0/1 interface. What will the router do next?",
        "answers": [
          "create a new Layer 2 Ethernet frame to be sent to the destination"
        ]
      },
      {
        "question": "Which IPv4 address can a host use to ping the loopback interface?",
        "answers": [
          "127.0.0.1"
        ]
      },
      {
        "question": "A computer can access devices on the same network but cannot access devices on other networks. What is the probable cause of this problem?",
        "answers": [
          "The computer has an invalid default gateway address."
        ]
      },
      {
        "question": "Which statement describes a feature of the IP protocol?",
        "answers": [
          "IP relies on upper layer services to handle situations of missing or out-of-order packets."
        ]
      },
      {
        "question": "Why is NAT not needed in IPv6?​",
        "answers": [
          "Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.​"
        ]
      },
      {
        "question": "Which parameter does the router use to choose the path to the destination when there are multiple routes available?",
        "answers": [
          "the lower metric value that is associated with the destination network"
        ]
      },
      {
        "question": "What are two services provided by the OSI network layer? (Choose two.)",
        "answers": [
          "routing packets toward the destination",
          "encapsulating PDUs from the transport layer"
        ]
      },
      {
        "question": "Within a production network, what is the purpose of configuring a switch with a default gateway address?",
        "answers": [
          "The default gateway address is used to forward packets originating from the switch to remote networks."
        ]
      },
      {
        "question": "What is a basic characteristic of the IP protocol?",
        "answers": [
          "connectionless"
        ]
      },
      {
        "question": "Which field in the IPv4 header is used to prevent a packet from traversing a network endlessly?",
        "answers": [
          "Time-to-Live"
        ]
      },
      {
        "question": "What is one advantage that the IPv6 simplified header offers over IPv4?",
        "answers": [
          "efficient packet handling"
        ]
      },
      {
        "question": "What IPv4 header field identifies the upper layer protocol carried in the packet?",
        "answers": [
          "Protocol"
        ]
      },
      {
        "question": "Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router. (Not all targets are used.)",
        "manual": true,
        "answers": []
      },
      {
        "question": "What information does the loopback test provide?",
        "answers": [
          "The TCP/IP stack on the device is working correctly."
        ]
      },
      {
        "question": "What routing table entry has a next hop address associated with a destination network?",
        "answers": [
          "remote routes"
        ]
      },
      {
        "question": "How do hosts ensure that their packets are directed to the correct network destination?",
        "answers": [
          "They have to keep their own local routing table that contains a route to the loopback interface, a local network route, and a remote default route.​"
        ]
      },
      {
        "question": "When transporting data from real-time applications, such as streaming audio and video, which field in the IPv6 header can be used to inform the routers and switches to maintain the same path for the packets in the same conversation?",
        "answers": [
          "Flow Label"
        ]
      },
      {
        "question": "What statement describes the function of the Address Resolution Protocol?",
        "answers": [
          "ARP is used to discover the MAC address of any host on the local network."
        ]
      },
      {
        "question": "Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)",
        "answers": [
          "The frame has the broadcast address as the destination address.",
          "The destination address is unknown to the switch."
        ]
      },
      {
        "question": "Which statement describes the treatment of ARP requests on the local link?",
        "answers": [
          "They are received and processed by every device on the local network."
        ]
      },
      {
        "question": "Which destination address is used in an ARP request frame?",
        "answers": [
          "FFFF.FFFF.FFFF"
        ]
      },
      {
        "question": "A network technician issues the arp -d * command on a PC after the router that is connected to the LAN is reconfigured. What is the result after this command is issued?",
        "answers": [
          "The ARP cache is cleared."
        ]
      },
      {
        "question": "Refer to the exhibit. The exhibit shows a small switched network and the contents of the MAC address table of the switch. PC1 has sent a frame addressed to PC3. What will the switch do with the frame?",
        "answers": [
          "The switch will forward the frame to all ports except port 4."
        ]
      },
      {
        "question": "Which two types of IPv6 messages are used in place of ARP for address resolution?",
        "answers": [
          "neighbor solicitation",
          "neighbor advertisement"
        ]
      },
      {
        "question": "What is the aim of an ARP spoofing attack?",
        "answers": [
          "to associate IP addresses to the wrong MAC address"
        ]
      },
      {
        "question": "Refer to the exhibit. PC1 attempts to connect to File_server1 and sends an ARP request to obtain a destination MAC address. Which MAC address will PC1 receive in the ARP reply?",
        "answers": [
          "the MAC address of the G0/0 interface on R1"
        ]
      },
      {
        "question": "Where are IPv4 address to Layer 2 Ethernet address mappings maintained on a host computer?",
        "answers": [
          "ARP cache"
        ]
      },
      {
        "question": "What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?",
        "answers": [
          "destination MAC address"
        ]
      },
      {
        "question": "Match the commands to the correct actions. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_144554.jpg"
      },
      {
        "question": "A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?",
        "answers": [
          "Exit privileged EXEC mode and press Enter."
        ]
      },
      {
        "question": "A network administrator requires access to manage routers and switches locally and remotely. Match the description to the access method. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/03/CCNA1-v7-ITN-Communicating-Between-Networks-Exam-Answers-003-3-1.png"
      },
      {
        "question": "Match the phases to the functions during the boot up process of a Cisco router. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2024-09-17_145029.jpg"
      },
      {
        "question": "Match the command with the device mode at which the command is entered. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2016/03/2017-05-23_115945-1.jpg"
      },
      {
        "question": "What are two functions of NVRAM? (Choose two.)",
        "answers": [
          "to retain contents when power is removed",
          "to store the startup configuration file"
        ]
      },
      {
        "question": "A router boots and enters setup mode. What is the reason for this?",
        "answers": [
          "The configuration file is missing from NVRAM."
        ]
      },
      {
        "question": "The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect of this command?",
        "answers": [
          "The switch can be remotely managed from a host on another network."
        ]
      },
      {
        "question": "What happens when the transport input ssh command is entered on the switch vty lines?",
        "answers": [
          "Communication between the switch and remote users is encrypted."
        ]
      },
      {
        "question": "Refer to the exhibit. A user PC has successfully transmitted packets to www.cisco.com. Which IP address does the user PC target in order to forward its data off the local network?",
        "answers": [
          "172.20.0.254"
        ]
      },
      {
        "question": "Match the configuration mode with the command that is available in that mode. (Not all options are used.)",
        "answers": [
          "R1> -> enable",
          "R1# -> copy running-config startup-config",
          "R1(config-line)# -> login",
          "R1(config)# -> interface fastethernet 0/0"
        ]
      },
      {
        "question": "Which three commands are used to set up secure access to a router through a connection to the console interface? (Choose three.)",
        "answers": [
          "line console 0",
          "login",
          "password cisco"
        ]
      },
      {
        "question": "Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?",
        "answers": [
          "It is the IP address of the Router1 interface that connects the PC1 LAN to Router1."
        ]
      },
      {
        "question": "Which two functions are primary functions of a router? (Choose two.)",
        "answers": [
          "packet forwarding",
          "path selection"
        ]
      },
      {
        "question": "What is the effect of using the Router# copy running-config startup-config command on a router?",
        "answers": [
          "The contents of NVRAM will change."
        ]
      },
      {
        "question": "What will happen if the default gateway address is incorrectly configured on a host?",
        "answers": [
          "The host cannot communicate with hosts in other networks."
        ]
      },
      {
        "question": "What are two potential network problems that can result from ARP operation? (Choose two.)",
        "answers": [
          "On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.",
          "Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic."
        ]
      },
      {
        "question": "Open the PT activity. Perform the tasks in the activity instructions and then answer the question.",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/CCNA-1-v7-Modules-8-10-Communicating-Between-Networks-Exam.jpg"
      },
      {
        "question": "Which term describes a field in the IPv4 packet header used to identify the next level protocol?",
        "answers": [
          "protocol"
        ]
      },
      {
        "question": "Which term describes a field in the IPv4 packet header that contains an 8-bit binary value used to determine the priority of each packet?",
        "answers": [
          "differentiated services"
        ]
      },
      {
        "question": "Which term describes a field in the IPv4 packet header that contains a 32-bit binary value associated with an interface on the sending device?",
        "answers": [
          "source IPv4 address"
        ]
      },
      {
        "question": "Which term describes a field in the IPv4 packet header used to detect corruption in the IPv4 header?",
        "answers": [
          "header checksum"
        ]
      },
      {
        "question": "Which term describes a field in the IPv4 packet header that contains a unicast, multicast, or broadcast address?",
        "answers": [
          "destination IPv4 address"
        ]
      },
      {
        "question": "Which term describes a field in the IPv4 packet header used to limit the lifetime of a packet?",
        "answers": [
          "TTL"
        ]
      },
      {
        "question": "Which term describes a field in the IPv4 packet header that contains a 4-bit binary value set to 0100?",
        "answers": [
          "version"
        ]
      },
      {
        "question": "Which term describes a field in the IPv4 packet header used to identify the next level protocol?",
        "answers": [
          "protocol"
        ]
      },
      {
        "question": "Which term describes a field in the IPv4 packet header that contains a 4-bit binary value set to 0100?",
        "answers": [
          "version"
        ]
      },
      {
        "question": "What property of ARP causes cached IP-to-MAC mappings to remain in memory longer?",
        "answers": [
          "Entries in an ARP table are time-stamped and are purged after the timeout expires."
        ]
      },
      {
        "question": "What property of ARP allows MAC addresses of frequently used servers to be fixed in the ARP table?",
        "answers": [
          "A static IP-to-MAC address entry can be entered manually into an ARP table."
        ]
      },
      {
        "question": "What property of ARP allows MAC addresses of frequently used servers to be fixed in the ARP table?",
        "answers": [
          "A static IP-to-MAC address entry can be entered manually into an ARP table."
        ]
      },
      {
        "question": "What property of ARP allows hosts on a LAN to send traffic to remote networks?",
        "answers": [
          "Local hosts learn the MAC address of the default gateway."
        ]
      },
      {
        "question": "What property of ARP forces all Ethernet NICs to process an ARP request?",
        "answers": [
          "The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame."
        ]
      },
      {
        "question": "What property of ARP causes a reply only to the source sending an ARP request?",
        "answers": [
          "The source MAC address appears in the header of the Ethernet frame."
        ]
      },
      {
        "question": "What property of ARP causes the request to be flooded out all ports of a switch except for the port receiving the ARP request?",
        "answers": [
          "The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame."
        ]
      },
      {
        "question": "What property of ARP causes the NICs receiving an ARP request to pass the data portion of the Ethernet frame to the ARP process?",
        "answers": [
          "The type field 0x806 appears in the header of the Ethernet frame."
        ]
      },
      {
        "question": "What property of ARP causes the NICs receiving an ARP request to pass the data portion of the Ethernet frame to the ARP process?",
        "answers": [
          "The type field 0x806 appears in the header of the Ethernet frame."
        ]
      }
    ],
    "11-13": [
      {
        "question": "What is the prefix length notation for the subnet mask 255.255.255.224?",
        "answers": [
          "/27"
        ]
      },
      {
        "question": "How many valid host addresses are available on an IPv4 subnet that is configured with a /26 mask?",
        "answers": [
          "62"
        ]
      },
      {
        "question": "Which subnet mask would be used if 5 host bits are available?",
        "answers": [
          "255.255.255.224​"
        ]
      },
      {
        "question": "A network administrator subnets the 192.168.10.0/24 network into subnets with /26 masks. How many equal-sized subnets are created?",
        "answers": [
          "4"
        ]
      },
      {
        "question": "Match the subnetwork to a host address that would be included within the subnetwork. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA1-v7-ITN-IP-Addressing-Exam-Answers-001-1536x942-1.png"
      },
      {
        "question": "An administrator wants to create four subnetworks from the network address 192.168.1.0/24. What is the network address and subnet mask of the second useable subnet?",
        "answers": [
          "subnetwork 192.168.1.64 subnet mask 255.255.255.192"
        ]
      },
      {
        "question": "How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?",
        "answers": [
          "three"
        ]
      },
      {
        "question": "How many host addresses are available on the 192.168.10.128/26 network?",
        "answers": [
          "62"
        ]
      },
      {
        "question": "How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?",
        "answers": [
          "1022"
        ]
      },
      {
        "question": "Match each IPv4 address to the appropriate address category. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA1-v7-ITN-IP-Addressing-Exam-Answers-002-1536x1013-1.png"
      },
      {
        "question": "What three blocks of addresses are defined by RFC 1918 for private network use? (Choose three.)",
        "answers": [
          "10.0.0.0/8",
          "172.16.0.0/12",
          "192.168.0.0/16"
        ]
      },
      {
        "question": "Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?",
        "answers": [
          "172.16.19.255"
        ]
      },
      {
        "question": "A site administrator has been told that a particular network at the site must accommodate 126 hosts. Which subnet mask would be used that contains the required number of host bits?",
        "answers": [
          "255.255.255.128"
        ]
      },
      {
        "question": "Refer to the exhibit. Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?",
        "answers": [
          "10.16.10.64/27"
        ]
      },
      {
        "question": "What is the usable number of host IP addresses on a network that has a /26 mask?",
        "answers": [
          "62"
        ]
      },
      {
        "question": "Which address prefix range is reserved for IPv4 multicast?",
        "answers": [
          "224.0.0.0 – 239.255.255.255"
        ]
      },
      {
        "question": "Refer to the exhibit. Match the network with the correct IP address and prefix that will satisfy the usable host addressing requirements for each network.",
        "manual": true,
        "answers": []
      },
      {
        "question": "A high school in New York (school A) is using videoconferencing technology to establish student interactions with another high school (school B) in Russia. The videoconferencing is conducted between two end devices through the Internet. The network administrator of school A configures the end device with the IP address 209.165.201.10. The administrator sends a request for the IP address for the end device in school B and the response is 192.168.25.10. Neither school is using a VPN. The administrator knows immediately that this IP will not work. Why?",
        "answers": [
          "This is a private IP address."
        ]
      },
      {
        "question": "Which three addresses are valid public addresses? (Choose three.)",
        "answers": [
          "198.133.219.17",
          "128.107.12.117",
          "64.104.78.227"
        ]
      },
      {
        "question": "A message is sent to all hosts on a remote network. Which type of message is it?",
        "answers": [
          "directed broadcast"
        ]
      },
      {
        "question": "A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)",
        "answers": [
          "192.168.1.64/27",
          "192.168.1.96/28"
        ]
      },
      {
        "question": "Which address is a valid IPv6 link-local unicast address?",
        "answers": [
          "FE80::1:4545:6578:ABC1"
        ]
      },
      {
        "question": "Which of these addresses is the shortest abbreviation for the IP address:\n3FFE:1044:0000:0000:00AB:0000:0000:0057?",
        "answers": [
          "3FFE:1044:0:0:AB::57"
        ]
      },
      {
        "question": "A network administrator has received the IPv6 prefix 2001:DB8::/48 for subnetting. Assuming the administrator does not subnet into the interface ID portion of the address space, how many subnets can the administrator create from the /48 prefix?",
        "answers": [
          "65536"
        ]
      },
      {
        "question": "Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?",
        "answers": [
          "2001:db8:0:f000::/52"
        ]
      },
      {
        "question": "Consider the following range of addresses:",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "What type of IPv6 address is FE80::1?",
        "answers": [
          "link-local"
        ]
      },
      {
        "question": "Refer to the exhibit. A company is deploying an IPv6 addressing scheme for its network. The company design document indicates that the subnet portion of the IPv6 addresses is used for the new hierarchical network design, with the site subsection to represent multiple geographical sites of the company, the sub-site section to represent multiple campuses at each site, and the subnet section to indicate each network segment separated by routers. With such a scheme, what is the maximum number of subnets achieved per sub-site?",
        "answers": [
          "16"
        ]
      },
      {
        "question": "What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?",
        "answers": [
          "the MAC address of the IPv6 enabled interface"
        ]
      },
      {
        "question": "What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?",
        "answers": [
          "2001:DB8:BC15:A"
        ]
      },
      {
        "question": "An IPv6 enabled device sends a data packet with the destination address of FF02::1. What is the target of this packet?​",
        "answers": [
          "all IPv6 enabled devices on the local link​ or network"
        ]
      },
      {
        "question": "Match the IPv6 address with the IPv6 address type. (Not all options are used.)",
        "answers": [
          "::1 -> loopback",
          "FF02::1 -> all node multicast",
          "FF02::1:FFAE:F85F -> solicited node multicast",
          "2001:DB8::BAF:3F57:FE94 -> global unicast"
        ]
      },
      {
        "question": "Which IPv6 prefix is reserved for communication between devices on the same link?",
        "answers": [
          "FE80::/10"
        ]
      },
      {
        "question": "Which type of IPv6 address refers to any unicast address that is assigned to multiple hosts?",
        "answers": [
          "anycast"
        ]
      },
      {
        "question": "What are two types of IPv6 unicast addresses? (Choose two.)",
        "answers": [
          "loopback",
          "link-local"
        ]
      },
      {
        "question": "Which service provides dynamic global IPv6 addressing to end devices without using a server that keeps a record of available IPv6 addresses?",
        "answers": [
          "SLAAC"
        ]
      },
      {
        "question": "Which protocol supports Stateless Address Autoconfiguration (SLAAC) for dynamic assignment of IPv6 addresses to a host?",
        "answers": [
          "ICMPv6"
        ]
      },
      {
        "question": "Three methods allow IPv6 and IPv4 to co-exist. Match each method with its description. (Not all options are used.)",
        "answers": [
          "The IPv4 packets and IPv6 packets coexist in the same network. -> dual-stack",
          "The IPv6 packet is transported inside an IPv4 packet. -> tunneling",
          "IPv6 packets are converted into IPv4 packets, and vice versa. -> translation"
        ]
      },
      {
        "question": "A technician uses the ping 127.0.0.1 command. What is the technician testing?",
        "answers": [
          "the TCP/IP stack on a network host"
        ]
      },
      {
        "question": "Refer to the exhibit. An administrator is trying to troubleshoot connectivity between PC1 and PC2 and uses the tracert command from PC1 to do it. Based on the displayed output, where should the administrator begin troubleshooting?",
        "answers": [
          "R1"
        ]
      },
      {
        "question": "Which protocol is used by the traceroute command to send and receive echo-requests and echo-replies?",
        "answers": [
          "ICMP"
        ]
      },
      {
        "question": "Which ICMPv6 message is sent when the IPv6 hop limit field of a packet is decremented to zero and the packet cannot be forwarded?",
        "answers": [
          "time exceeded"
        ]
      },
      {
        "question": "A user executes a traceroute over IPv6. At what point would a router in the path to the destination device drop the packet?",
        "answers": [
          "when the value of the Hop Limit field reaches zero"
        ]
      },
      {
        "question": "What is the purpose of ICMP messages?",
        "answers": [
          "to provide feedback of IP packet transmissions"
        ]
      },
      {
        "question": "What source IP address does a router use by default when the traceroute command is issued?",
        "answers": [
          "the IP address of the outbound interface"
        ]
      },
      {
        "question": "Match each description with an appropriate IP address. (Not all options are used.)",
        "answers": [
          "a link-local address -> 169.254.1.5",
          "a TEST-NET address -> 192.0.2.123",
          "an experimental address -> 240.2.6.255",
          "a private address -> 172.19.20.5",
          "a loopback address -> 127.0.0.1"
        ]
      },
      {
        "question": "A user issues a ping 192.135.250.103 command and receives a response that includes a code of 1. What does this code represent?",
        "answers": [
          "host unreachable"
        ]
      },
      {
        "question": "Which subnet would include the address 192.168.1.96 as a usable host address?",
        "answers": [
          "192.168.1.64/26"
        ]
      },
      {
        "question": "What are the three IPv6 addresses displayed when the route from PC1 to PC2 is traced? (Choose three.)",
        "answers": [
          "2001:DB8:1:1::1",
          "2001:DB8:1:2::1",
          "2001:DB8:1:3::2"
        ]
      },
      {
        "question": "A host is transmitting a broadcast. Which host or hosts will receive it?",
        "answers": [
          "all hosts in the same subnet"
        ]
      },
      {
        "question": "A host is transmitting a unicast. Which host or hosts will receive it?",
        "answers": [
          "one specific host"
        ]
      },
      {
        "question": "A user issues a ping 2001:db8:FACE:39::10 command and receives a response that includes a code of 3. What does this code represent?",
        "answers": [
          "address unreachable"
        ]
      },
      {
        "question": "A host is transmitting a multicast. Which host or hosts will receive it?",
        "answers": [
          "a specially defined group of hosts"
        ]
      },
      {
        "question": "Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001?",
        "answers": [
          "2001:db8::a0b0:8:1"
        ]
      },
      {
        "question": "Which is the compressed format of the IPv6 address fe80:09ea:0000:2200:0000:0000:0fe0:0290?",
        "answers": [
          "fe80:9ea:0:2200::fe0:290"
        ]
      },
      {
        "question": "Which is the compressed format of the IPv6 address 2002:0042:0010:c400:0000:0000:0000:0909?",
        "answers": [
          "2002:42:10:c400::909"
        ]
      },
      {
        "question": "Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0ab8:0001:0000:1000?",
        "answers": [
          "2001:db8::ab8:1:0:1000"
        ]
      },
      {
        "question": "Which is the compressed format of the IPv6 address 2002:0420:00c4:1008:0025:0190:0000:0990?",
        "answers": [
          "2002:420:c4:1008:25:190::990"
        ]
      },
      {
        "question": "Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001?",
        "answers": [
          "2001:db8::a0b0:8:1"
        ]
      },
      {
        "question": "Which is the compressed format of the IPv6 address fe80:0000:0000:0000:0220:0b3f:f0e0:0029?",
        "answers": [
          "fe80::220:b3f:f0e0:29"
        ]
      },
      {
        "question": "Which is the compressed format of the IPv6 address 2001:0db8:0000:0000:0000:a0b0:0008:0001?",
        "answers": [
          "2001:db8::a0b0:8:1"
        ]
      },
      {
        "question": "Which is the compressed format of the IPv6 address 2002:0042:0010:c400:0000:0000:0000:0909?",
        "answers": [
          "2002:42:10:c400::909"
        ]
      },
      {
        "question": "Which is the compressed format of the IPv6 address fe80:09ea:0000:2200:0000:0000:0fe0:0290?",
        "answers": [
          "fe80:9ea:0:2200::fe0:290"
        ]
      },
      {
        "question": "A user issues a ping 2001:db8:FACE:39::10 command and receives a response that includes a code of 2. What does this code represent?",
        "answers": [
          "beyond scope of the source address"
        ]
      },
      {
        "question": "A user issues a ping 192.135.250.103 command and receives a response that includes a code of 1. What does this code represent?",
        "answers": [
          "host unreachable"
        ]
      },
      {
        "question": "A user issues a ping fe80:65ab:dcc1::100 command and receives a response that includes a code of 3. What does this code represent?",
        "answers": [
          "address unreachable"
        ]
      },
      {
        "question": "A user issues a ping 10.10.14.67 command and receives a response that includes a code of 0. What does this code represent?",
        "answers": [
          "network unreachable"
        ]
      },
      {
        "question": "A user issues a ping fe80:65ab:dcc1::100 command and receives a response that includes a code of 4. What does this code represent?",
        "answers": [
          "port unreachable"
        ]
      },
      {
        "question": "A user issues a ping 198.133.219.8 command and receives a response that includes a code of 0. What does this code represent?",
        "answers": [
          "network unreachable"
        ]
      },
      {
        "question": "A user issues a ping 2001:db8:3040:114::88 command and receives a response that includes a code of 4. What does this code represent?",
        "answers": [
          "port unreachable"
        ]
      },
      {
        "question": "A user issues a ping 2001:db8:FACE:39::10 command and receives a response that includes a code of 2. What does this code represent?",
        "answers": [
          "beyond scope of the source address"
        ]
      }
    ],
    "14-15": [
      {
        "question": "Which action is performed by a client when establishing communication with a server via the use of UDP at the transport layer?",
        "answers": [
          "The client randomly selects a source port number."
        ]
      },
      {
        "question": "Which transport layer feature is used to guarantee session establishment?",
        "answers": [
          "TCP 3-way handshake"
        ]
      },
      {
        "question": "What is the complete range of TCP and UDP well-known ports?",
        "answers": [
          "0 to 1023"
        ]
      },
      {
        "question": "What is a socket?",
        "answers": [
          "the combination of a source IP address and port number or a destination IP address and port number"
        ]
      },
      {
        "question": "A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?",
        "answers": [
          "10 segments"
        ]
      },
      {
        "question": "Which factor determines TCP window size?",
        "answers": [
          "the amount of data the destination can process at one time"
        ]
      },
      {
        "question": "What does a client do when it has UDP datagrams to send?",
        "answers": [
          "It just sends the datagrams."
        ]
      },
      {
        "question": "Which three fields are used in a UDP segment header? (Choose three.)",
        "answers": [
          "Length",
          "Source Port",
          "Checksum"
        ]
      },
      {
        "question": "What are two roles of the transport layer in data communication on a network? (Choose two.)",
        "answers": [
          "identifying the proper application for each communication stream",
          "tracking the individual communication between applications on the source and destination hosts"
        ]
      },
      {
        "question": "What information is used by TCP to reassemble and reorder received segments?",
        "answers": [
          "sequence numbers"
        ]
      },
      {
        "question": "What important information is added to the TCP/IP transport layer header to ensure communication and connectivity with a remote network device?",
        "answers": [
          "destination and source port numbers"
        ]
      },
      {
        "question": "Which two characteristics are associated with UDP sessions? (Choose two.)",
        "answers": [
          "Destination devices receive traffic with minimal delay.",
          "Received data is unacknowledged."
        ]
      },
      {
        "question": "A client application needs to terminate a TCP communication session with a server. Place the termination process steps in the order that they will occur. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2020-05-19_095505.jpg"
      },
      {
        "question": "Which flag in the TCP header is used in response to a received FIN in order to terminate connectivity between two network devices?",
        "answers": [
          "ACK"
        ]
      },
      {
        "question": "Which protocol or service uses UDP for a client-to-server communication and TCP for server-to-server communication?",
        "answers": [
          "DNS"
        ]
      },
      {
        "question": "What is a characteristic of UDP?",
        "answers": [
          "UDP reassembles the received datagrams in the order they were received."
        ]
      },
      {
        "question": "What kind of port must be requested from IANA in order to be used with a specific application?",
        "answers": [
          "registered port"
        ]
      },
      {
        "question": "Which three application layer protocols use TCP? (Choose three.)",
        "answers": [
          "SMTP",
          "FTP",
          "HTTP"
        ]
      },
      {
        "question": "Which three statements characterize UDP? (Choose three.)",
        "answers": [
          "UDP provides basic connectionless transport layer functions.",
          "UDP relies on application layer protocols for error detection.",
          "UDP is a low overhead protocol that does not provide sequencing or flow control mechanisms."
        ]
      },
      {
        "question": "Which two fields are included in the TCP header but not in the UDP header? (Choose two.)",
        "answers": [
          "window",
          "sequence number"
        ]
      },
      {
        "question": "Which field in the TCP header indicates the status of the three-way handshake process?",
        "answers": [
          "control bits"
        ]
      },
      {
        "question": "Why does HTTP use TCP as the transport layer protocol?",
        "answers": [
          "because HTTP requires reliable delivery"
        ]
      },
      {
        "question": "Which two types of applications are best suited for UDP? (Choose two.)",
        "answers": [
          "applications that handle reliability themselves",
          "applications that can tolerate some data loss, but require little or no delay"
        ]
      },
      {
        "question": "How are port numbers used in the TCP/IP encapsulation process?",
        "answers": [
          "If multiple conversations occur that are using the same service, the source port number is used to track the separate conversations."
        ]
      },
      {
        "question": "In what two situations would UDP be better than TCP as the preferred transport protocol? (Choose two.)",
        "answers": [
          "when a faster delivery mechanism is needed",
          "when applications do not need to guarantee delivery of the data"
        ]
      },
      {
        "question": "What are three responsibilities of the transport layer? (Choose three.)",
        "answers": [
          "meeting the reliability requirements of applications, if any",
          "multiplexing multiple communication streams from many users or applications on the same network",
          "identifying the applications and services on the client and server that should handle transmitted data"
        ]
      },
      {
        "question": "Which three statements describe a DHCP Discover message? (Choose three.)",
        "answers": [
          "The destination IP address is 255.255.255.255.",
          "The message comes from a client seeking an IP address.",
          "All hosts receive the message, but only a DHCP server replies."
        ]
      },
      {
        "question": "Which two protocols may devices use in the application process that sends email? (Choose two.)",
        "answers": [
          "SMTP",
          "DNS"
        ]
      },
      {
        "question": "What is true about the Server Message Block protocol?",
        "answers": [
          "Clients establish a long term connection to servers."
        ]
      },
      {
        "question": "What is the function of the HTTP GET message?",
        "answers": [
          "to request an HTML page from a web server"
        ]
      },
      {
        "question": "Which OSI layer provides the interface between the applications used to communicate and the underlying network over which messages are transmitted?",
        "answers": [
          "application"
        ]
      },
      {
        "question": "Which networking model is being used when an author uploads one chapter document to a file server of a book publisher?",
        "answers": [
          "client/server"
        ]
      },
      {
        "question": "What do the client/server and peer-to-peer network models have in common?",
        "answers": [
          "Both models support devices in server and client roles."
        ]
      },
      {
        "question": "In what networking model would eDonkey, eMule, BitTorrent, Bitcoin, and LionShare be used?",
        "answers": [
          "peer-to-peer"
        ]
      },
      {
        "question": "What is a common protocol that is used with peer-to-peer applications such as WireShare, Bearshare, and Shareaza?",
        "answers": [
          "Gnutella"
        ]
      },
      {
        "question": "What is a key characteristic of the peer-to-peer networking model?",
        "answers": [
          "resource sharing without a dedicated server"
        ]
      },
      {
        "question": "The application layer of the TCP/IP model performs the functions of what three layers of the OSI model? (Choose three.)",
        "answers": [
          "session",
          "presentation",
          "application"
        ]
      },
      {
        "question": "What is an example of network communication that uses the client-server model?",
        "answers": [
          "A workstation initiates a DNS request when the user types www.cisco.com in the address bar of a web browser."
        ]
      },
      {
        "question": "Which layer in the TCP/IP model is used for formatting, compressing, and encrypting data?",
        "answers": [
          "application"
        ]
      },
      {
        "question": "What is an advantage of SMB over FTP?​",
        "answers": [
          "SMB clients can establish a long-term connection to the server.​"
        ]
      },
      {
        "question": "A manufacturing company subscribes to certain hosted services from its ISP. The services that are required include hosted world wide web, file transfer, and e-mail. Which protocols represent these three key applications? (Choose three.)",
        "answers": [
          "FTP",
          "HTTP",
          "SMTP"
        ]
      },
      {
        "question": "Which application layer protocol uses message types such as GET, PUT, and POST?",
        "answers": [
          "HTTP"
        ]
      },
      {
        "question": "What type of information is contained in a DNS MX record?",
        "answers": [
          "the domain name mapped to mail exchange servers"
        ]
      },
      {
        "question": "Which three protocols operate at the application layer of the TCP/IP model? (Choose three.)",
        "answers": [
          "FTP",
          "POP3",
          "DHCP"
        ]
      },
      {
        "question": "Which protocol is used by a client to communicate securely with a web server?",
        "answers": [
          "HTTPS"
        ]
      },
      {
        "question": "Which applications or services allow hosts to act as client and server at the same time?",
        "answers": [
          "P2P applications"
        ]
      },
      {
        "question": "What are two characteristics of peer-to-peer networks? (Choose two.)",
        "answers": [
          "decentralized resources",
          "resource sharing without a dedicated server"
        ]
      },
      {
        "question": "Which scenario describes a function provided by the transport layer?",
        "answers": [
          "A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window."
        ]
      },
      {
        "question": "Which three layers of the OSI model provide similar network services to those provided by the application layer of the TCP/IP model? (Choose three.)",
        "answers": [
          "session layer",
          "application layer",
          "presentation layer"
        ]
      },
      {
        "question": "A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received two packets of data from the PC?",
        "answers": [
          "3001"
        ]
      },
      {
        "question": "A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received three packets of data from the PC?",
        "answers": [
          "4501"
        ]
      },
      {
        "question": "A PC that is communicating with a web server has a TCP window size of 6,000 bytes when sending data and a packet size of 1,500 bytes. Which byte of information will the web server acknowledge after it has received four packets of data from the PC?",
        "answers": [
          "6001"
        ]
      },
      {
        "question": "A client creates a packet to send to a server. The client is requesting TFTP service. What number will be used as the destination port number in the sending packet?",
        "answers": [
          "69"
        ]
      },
      {
        "question": "A client creates a packet to send to a server. The client is requesting FTP service. What number will be used as the destination port number in the sending packet?",
        "answers": [
          "21"
        ]
      },
      {
        "question": "A client creates a packet to send to a server. The client is requesting SSH service. What number will be used as the destination port number in the sending packet?",
        "answers": [
          "22"
        ]
      },
      {
        "question": "A client creates a packet to send to a server. The client is requesting HTTP service. What number will be used as the destination port number in the sending packet?",
        "answers": [
          "80"
        ]
      },
      {
        "question": "A client creates a packet to send to a server. The client is requesting POP3 service. What number will be used as the destination port number in the sending packet?",
        "answers": [
          "110"
        ]
      },
      {
        "question": "A client creates a packet to send to a server. The client is requesting telnet service. What number will be used as the destination port number in the sending packet?",
        "answers": [
          "23"
        ]
      },
      {
        "question": "A client creates a packet to send to a server. The client is requesting SNMP service. What number will be used as the destination port number in the sending packet?",
        "answers": [
          "161"
        ]
      },
      {
        "question": "A client creates a packet to send to a server. The client is requesting SMTP service. What number will be used as the destination port number in the sending packet?",
        "answers": [
          "25"
        ]
      },
      {
        "question": "A client creates a packet to send to a server. The client is requesting HTTPS service. What number will be used as the destination port number in the sending packet?",
        "answers": [
          "443"
        ]
      }
    ],
    "16-17": [
      {
        "question": "Which component is designed to protect against unauthorized communications to and from a computer?",
        "answers": [
          "firewall"
        ]
      },
      {
        "question": "Which command will block login attempts on RouterA for a period of 30 seconds if there are 2 failed login attempts within 10 seconds?",
        "answers": [
          "RouterA(config)# login block-for 30 attempts 2 within 10"
        ]
      },
      {
        "question": "What is the purpose of the network security accounting function?",
        "answers": [
          "to keep track of the actions of a user"
        ]
      },
      {
        "question": "What type of attack may involve the use of tools such as nslookup and fping?",
        "answers": [
          "reconnaissance attack"
        ]
      },
      {
        "question": "Match each weakness with an example. (Not all options are used.)",
        "answers": [
          "security policy weakness -> The network administrator did not fully consider the implications of unauthorized users accessing the network.",
          "configuration weakness -> When implementing an access list on a router, a network engineer did not filter a type of malicous traffic.",
          "technological weakness -> A nework engineer is examining the operating system of a network device for vulnerabilities."
        ]
      },
      {
        "question": "Match the type of information security threat to the scenario. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/03/2020-05-19_111721.jpg"
      },
      {
        "question": "Which example of malicious code would be classified as a Trojan horse?",
        "answers": [
          "malware that was written to look like a video game"
        ]
      },
      {
        "question": "What is the difference between a virus and a worm?",
        "answers": [
          "Worms self-replicate but viruses do not."
        ]
      },
      {
        "question": "Which attack involves a compromise of data that occurs between two end points?",
        "answers": [
          "man-in-the-middle attack"
        ]
      },
      {
        "question": "Which type of attack involves an adversary attempting to gather information about a network to identify vulnerabilities?",
        "answers": [
          "reconnaissance"
        ]
      },
      {
        "question": "Match the description to the type of firewall filtering. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2020-03-18_223435.jpg"
      },
      {
        "question": "What is the purpose of the network security authentication function?",
        "answers": [
          "to require users to prove who they are"
        ]
      },
      {
        "question": "Which firewall feature is used to ensure that packets coming into a network are legitimate responses to requests initiated from internal hosts?",
        "answers": [
          "stateful packet inspection"
        ]
      },
      {
        "question": "When applied to a router, which command would help mitigate brute-force password attacks against the router?",
        "answers": [
          "login block-for 60 attempts 5 within 60"
        ]
      },
      {
        "question": "Identify the steps needed to configure a switch for SSH. The answer order does not matter. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2022-06-25_163318.jpg"
      },
      {
        "question": "What feature of SSH makes it more secure than Telnet for a device management connection?",
        "answers": [
          "login information and data encryption"
        ]
      },
      {
        "question": "What is the advantage of using SSH over Telnet?",
        "answers": [
          "SSH provides secure communications to access hosts."
        ]
      },
      {
        "question": "What is the role of an IPS?",
        "answers": [
          "detecting and blocking of attacks in real time"
        ]
      },
      {
        "question": "A user is redesigning a network for a small company and wants to ensure security at a reasonable price. The user deploys a new application-aware firewall with intrusion detection capabilities on the ISP connection. The user installs a second firewall to separate the company network from the public network. Additionally, the user installs an IPS on the internal network of the company. What approach is the user implementing?",
        "answers": [
          "layered"
        ]
      },
      {
        "question": "What is an accurate description of redundancy?",
        "answers": [
          "designing a network to use multiple paths between switches to ensure there is no single point of failure"
        ]
      },
      {
        "question": "A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services is the network administrator trying to accommodate? (Choose two.)",
        "answers": [
          "voice",
          "video"
        ]
      },
      {
        "question": "What is the purpose of a small company using a protocol analyzer utility to capture network traffic on the network segments where the company is considering a network upgrade?",
        "answers": [
          "to document and analyze network traffic requirements on each network segment"
        ]
      },
      {
        "question": "Refer to the exhibit. An administrator is testing connectivity to a remote device with the IP address 10.1.1.1. What does the output of this command indicate?",
        "answers": [
          "A router along the path did not have a route to the destination."
        ]
      },
      {
        "question": "Which method is used to send a ping message specifying the source address for the ping?",
        "answers": [
          "Issue the ping command without specifying a destination IP address."
        ]
      },
      {
        "question": "A network engineer is analyzing reports from a recently performed network baseline. Which situation would depict a possible latency issue?",
        "answers": [
          "an increase in host-to-host ping response times"
        ]
      },
      {
        "question": "Which statement is true about Cisco IOS ping indicators?​",
        "answers": [
          "‘U’ may indicate that a router along the path did not contain a route to the destination address and that the ping was unsuccessful."
        ]
      },
      {
        "question": "A user reports a lack of network connectivity. The technician takes control of the user machine and attempts to ping other computers on the network and these pings fail. The technician pings the default gateway and that also fails. What can be determined for sure by the results of these tests?",
        "answers": [
          "Nothing can be determined for sure at this point."
        ]
      },
      {
        "question": "A network technician issues the C:> tracert -6 www.cisco.com command on a Windows PC. What is the purpose of the -6 command option?",
        "answers": [
          "It forces the trace to use IPv6."
        ]
      },
      {
        "question": "Why would a network administrator use the tracert utility?",
        "answers": [
          "to identify where a packet was lost or delayed on a network"
        ]
      },
      {
        "question": "A ping fails when performed from router R1 to directly connected router R2. The network administrator then proceeds to issue the show cdp neighbors command. Why would the network administrator issue this command if the ping failed between the two routers?",
        "answers": [
          "The network administrator wants to verify Layer 2 connectivity."
        ]
      },
      {
        "question": "A network engineer is troubleshooting connectivity issues among interconnected Cisco routers and switches. Which command should the engineer use to find the IP address information, host name, and IOS version of neighboring network devices?",
        "answers": [
          "show cdp neighbors detail"
        ]
      },
      {
        "question": "What information about a Cisco router can be verified using the show version command?",
        "answers": [
          "the value of the configuration register"
        ]
      },
      {
        "question": "Which command should be used on a Cisco router or switch to allow log messages to be displayed on remotely connected sessions using Telnet or SSH?",
        "answers": [
          "terminal monitor"
        ]
      },
      {
        "question": "Which command can an administrator issue on a Cisco router to send debug messages to the vty lines?",
        "answers": [
          "terminal monitor"
        ]
      },
      {
        "question": "By following a structured troubleshooting approach, a network administrator identified a network issue after a conversation with the user. What is the next step that the administrator should take?",
        "answers": [
          "Establish a theory of probable causes."
        ]
      },
      {
        "question": "Users are complaining that they are unable to browse certain websites on the Internet. An administrator can successfully ping a web server via its IP address, but cannot browse to the domain name of the website. Which troubleshooting tool would be most useful in determining where the problem is?",
        "answers": [
          "nslookup"
        ]
      },
      {
        "question": "An employee complains that a Windows PC cannot connect to the Internet. A network technician issues the ipconfig command on the PC and is shown an IP address of 169.254.10.3. Which two conclusions can be drawn? (Choose two.)",
        "answers": [
          "The PC cannot contact a DHCP server.",
          "The PC is configured to obtain an IP address automatically."
        ]
      },
      {
        "question": "Refer to the exhibit. Host H3 is having trouble communicating with host H1. The network administrator suspects a problem exists with the H3 workstation and wants to prove that there is no problem with the R2 configuration. What tool could the network administrator use on router R2 to prove that communication exists to host H1 from the interface on R2, which is the interface that H3 uses when communicating with remote networks?",
        "answers": [
          "an extended ping"
        ]
      },
      {
        "question": "Refer to the exhibit. Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?",
        "answers": [
          "Something is causing a time delay between the networks."
        ]
      },
      {
        "question": "Which network service automatically assigns IP addresses to devices on the network?",
        "answers": [
          "DHCP"
        ]
      },
      {
        "question": "Which command can an administrator execute to determine what interface a router will use to reach remote networks?",
        "answers": [
          "show ip route"
        ]
      },
      {
        "question": "On which two interfaces or ports can security be improved by configuring executive timeouts? (Choose two.)",
        "answers": [
          "console ports",
          "vty ports"
        ]
      },
      {
        "question": "When configuring SSH on a router to implement secure network management, a network engineer has issued the login local and transport input ssh line vty commands. What three additional configuration actions have to be performed to complete the SSH configuration? (Choose three.)",
        "answers": [
          "Generate the asymmetric RSA keys.",
          "Configure the correct IP domain name.",
          "Create a valid local username and password database."
        ]
      },
      {
        "question": "What is considered the most effective way to mitigate a worm attack?",
        "answers": [
          "Download security updates from the operating system vendor and patch all vulnerable systems."
        ]
      },
      {
        "question": "Which statement describes the ping and tracert commands?",
        "answers": [
          "Tracert shows each hop, while ping shows a destination reply only."
        ]
      },
      {
        "question": "A technician is to document the current configurations of all network devices in a college, including those in off-site buildings. Which protocol would be best to use to securely access the network devices?",
        "answers": [
          "SSH"
        ]
      },
      {
        "question": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.",
        "answers": [
          "transport input ssh"
        ]
      },
      {
        "question": "An administrator decides to use “WhatAreyouwaiting4” as the password on a newly installed router. Which statement applies to the password choice?",
        "answers": [
          "It is strong because it uses a passphrase."
        ]
      },
      {
        "question": "An administrator decides to use “pR3s!d7n&0” as the password on a newly installed router. Which statement applies to the password choice?",
        "answers": [
          "It is strong because it uses a minimum of 10 numbers, letters and special characters."
        ]
      },
      {
        "question": "An administrator decides to use “5$7*4#033!” as the password on a newly installed router. Which statement applies to the password choice?",
        "answers": [
          "It is strong because it contains 10 numbers and special characters."
        ]
      },
      {
        "question": "An administrator decides to use “pR3s!d7n&0” as the password on a newly installed router. Which statement applies to the password choice?",
        "answers": [
          "It is strong because it uses a minimum of 10 numbers, letters and special characters."
        ]
      },
      {
        "question": "An administrator decides to use “12345678!” as the password on a newly installed router. Which statement applies to the password choice?",
        "answers": [
          "It is weak because it uses a series of numbers or letters."
        ]
      },
      {
        "question": "An administrator decides to use “admin” as the password on a newly installed router. Which statement applies to the password choice?",
        "answers": [
          "It is weak because it is often the default password on new devices."
        ]
      },
      {
        "question": "An administrator decides to use “Feb121978” as the password on a newly installed router. Which statement applies to the password choice?",
        "answers": [
          "It is weak because it uses easily found personal information."
        ]
      },
      {
        "question": "An administrator decides to use “password” as the password on a newly installed router. Which statement applies to the password choice?",
        "answers": [
          "It is weak because it is a commonly used password."
        ]
      },
      {
        "question": "An administrator decides to use “RobErT” as the password on a newly installed router. Which statement applies to the password choice?",
        "answers": [
          "It is weak since it uses easily found personal information."
        ]
      },
      {
        "question": "An administrator decides to use “Elizabeth” as the password on a newly installed router. Which statement applies to the password choice?",
        "answers": [
          "It is weak because it uses easily found personal information."
        ]
      },
      {
        "question": "A network technician is troubleshooting an issue and needs to verify the IP addresses of all interfaces on a router. What is the best command to use to accomplish the task?",
        "answers": [
          "show ip interface brief"
        ]
      },
      {
        "question": "Students who are connected to the same switch are having slower than normal response times. The administrator suspects a duplex setting issue. What is the best command to use to accomplish the task?",
        "answers": [
          "show interfaces"
        ]
      },
      {
        "question": "A user wants to know the IP address of the PC. What is the best command to use to accomplish the task?",
        "answers": [
          "ipconfig"
        ]
      },
      {
        "question": "A student wants to save a router configuration to NVRAM. What is the best command to use to accomplish the task?",
        "answers": [
          "copy running-config startup-config"
        ]
      },
      {
        "question": "A support technician needs to know the IP address of the wireless interface on a MAC. What is the best command to use to accomplish the task?",
        "answers": [
          "ipconfig getifaddr en0"
        ]
      },
      {
        "question": "A network technician is troubleshooting an issue and needs to verify all of the IPv6 interface addresses on a router. What is the best command to use to accomplish the task?",
        "answers": [
          "show ipv6 interface"
        ]
      },
      {
        "question": "A teacher is having difficulties connecting his PC to the classroom network. He needs to verify that a default gateway is configured correctly. What is the best command to use to accomplish the task?",
        "answers": [
          "ipconfig"
        ]
      },
      {
        "question": "Only employees connected to IPv6 interfaces are having difficulty connecting to remote networks. The analyst wants to verify that IPv6 routing has been enabled. What is the best command to use to accomplish the task?",
        "answers": [
          "show running-config"
        ]
      },
      {
        "question": "An administrator is troubleshooting connectivity issues and needs to determine the IP address of a website. What is the best command to use to accomplish the task?",
        "answers": [
          "nslookup"
        ]
      },
      {
        "question": "What is a characteristic of UDP?",
        "answers": [
          "UDP reassembles the received datagrams in the order they were received."
        ]
      }
    ]
};

const QUIZ_DB = {
    "1.10.2": [
      {
        "question": "How does BYOD change the way in which businesses implement networks?​",
        "answers": [
          "BYOD provides flexibility in where and how users can access network resources."
        ]
      },
      {
        "question": "An employee wants to access the network of the organization remotely, in the safest possible way. What network feature would allow an employee to gain secure remote access to a company network?",
        "answers": [
          "VPN"
        ]
      },
      {
        "question": "What is the Internet?",
        "answers": [
          "It provides connections through interconnected global networks."
        ]
      },
      {
        "question": "What are two functions of end devices on a network? (Choose two.)",
        "answers": [
          "They originate the data that flows through the network.",
          "They are the interface between humans and the communication network."
        ]
      },
      {
        "question": "In which scenario would the use of a WISP be recommended?",
        "answers": [
          "a farm in a rural area without wired broadband access"
        ]
      },
      {
        "question": "What characteristic of a network enables it to quickly grow to support new users and applications without impacting the performance of the service being delivered to existing users?",
        "answers": [
          "scalability"
        ]
      },
      {
        "question": "A college is building a new dormitory on its campus. Workers are digging in the ground to install a new water pipe for the dormitory. A worker accidentally damages a fiber optic cable that connects two of the existing dormitories to the campus data center. Although the cable has been cut, students in the dormitories only experience a very short interruption of network services. What characteristic of the network is shown here?",
        "answers": [
          "fault tolerance"
        ]
      },
      {
        "question": "What are two characteristics of a scalable network? (Choose two.)",
        "answers": [
          "grows in size without impacting existing users",
          "suitable for modular devices that allow for expansion"
        ]
      },
      {
        "question": "Which device performs the function of determining the path that messages should take through internetworks?",
        "answers": [
          "a router"
        ]
      },
      {
        "question": "Which two Internet connection options do not require that physical cables be run to the building? (Choose two.)",
        "answers": [
          "cellular",
          "satellite"
        ]
      },
      {
        "question": "What type of network must a home user access in order to do online shopping?",
        "answers": [
          "the Internet"
        ]
      },
      {
        "question": "During a routine inspection, a technician discovered that software that was installed on a computer was secretly collecting data about websites that were visited by users of the computer. Which type of threat is affecting this computer?",
        "answers": [
          "spyware"
        ]
      },
      {
        "question": "Which term refers to a network that provides secure access to the corporate offices by suppliers, customers and collaborators?",
        "answers": [
          "extranet"
        ]
      },
      {
        "question": "A large corporation has modified its network to allow users to access network resources from their personal laptops and smart phones. Which networking trend does this describe?",
        "answers": [
          "bring your own device"
        ]
      },
      {
        "question": "What is an ISP?",
        "answers": [
          "It is an organization that enables individuals and businesses to connect to the Internet."
        ]
      }
    ],
    "2.9.4": [
      {
        "question": "Which functionality is provided by DHCP?",
        "answers": [
          "automatic assignment of an IP address to each host"
        ]
      },
      {
        "question": "Which two functions are provided to users by the context-sensitive help feature of the Cisco IOS CLI? (Choose two.)",
        "answers": [
          "displaying a list of all available commands within the current mode",
          "determining which option, keyword, or argument is available for the entered command"
        ]
      },
      {
        "question": "Which memory location on a Cisco router or switch stores the startup configuration file?",
        "answers": [
          "NVRAM"
        ]
      },
      {
        "question": "To what subnet does the IP address 10.1.100.50 belong if a subnet mask of 255.255.0.0 is used?",
        "answers": [
          "10.1.0.0"
        ]
      },
      {
        "question": "When a hostname is configured through the Cisco CLI, which three naming conventions are part of the guidelines? (Choose three.)",
        "answers": [
          "the hostname should be fewer than 64 characters in length",
          "the hostname should contain no spaces",
          "the hostname should begin with a letter"
        ]
      },
      {
        "question": "What is the function of the shell in an OS?",
        "answers": [
          "It interfaces between the users and the kernel."
        ]
      },
      {
        "question": "A router with a valid operating system contains a configuration file stored in NVRAM. The configuration file has an enable secret password but no console password. When the router boots up, which mode will display?",
        "answers": [
          "user EXEC mode"
        ]
      },
      {
        "question": "An administrator has just changed the IP address of an interface on an IOS device. What else must be done in order to apply those changes to the device?",
        "answers": [
          "Nothing must be done. Changes to the configuration on an IOS device take effect as soon as the command is typed correctly and the Enter key has been pressed."
        ]
      },
      {
        "question": "Which memory location on a Cisco router or switch will lose all content when the device is restarted?",
        "answers": [
          "RAM"
        ]
      },
      {
        "question": "Why would a technician enter the command copy startup-config running-config?",
        "answers": [
          "to copy an existing configuration into RAM"
        ]
      },
      {
        "question": "Which statement is true about the running configuration file in a Cisco IOS device?",
        "answers": [
          "It affects the operation of the device immediately when modified."
        ]
      },
      {
        "question": "Which two statements are true regarding the user EXEC mode? (Choose two.)",
        "answers": [
          "The device prompt for this mode ends with the “>” symbol.",
          "Only some aspects of the router configuration can be viewed."
        ]
      },
      {
        "question": "Which type of access is secured on a Cisco router or switch with the enable secret command?",
        "answers": [
          "privileged EXEC"
        ]
      },
      {
        "question": "What is the default SVI on a Cisco switch?",
        "answers": [
          "VLAN1"
        ]
      }
    ],
    "3.8.2": [
      {
        "question": "What process is used to receive transmitted data and convert it into a readable message?",
        "answers": [
          "decoding"
        ]
      },
      {
        "question": "What is done to an IP packet before it is transmitted over the physical medium?",
        "answers": [
          "It is encapsulated in a Layer 2 frame."
        ]
      },
      {
        "question": "What process is used to place one message inside another message for transfer from the source to the destination?",
        "answers": [
          "encapsulation"
        ]
      },
      {
        "question": "A web client is sending a request for a webpage to a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to prepare the request for transmission?",
        "answers": [
          "HTTP, TCP, IP, Ethernet"
        ]
      },
      {
        "question": "What are two benefits of using a layered network model? (Choose two.)",
        "answers": [
          "It assists in protocol design.",
          "It prevents technology in one layer from affecting other layers."
        ]
      },
      {
        "question": "What is the purpose of protocols in data communications?",
        "answers": [
          "providing the rules required for a specific type of communication to occur"
        ]
      },
      {
        "question": "Which logical address is used for delivery of data to a remote network?",
        "answers": [
          "destination IP address"
        ]
      },
      {
        "question": "What is the general term that is used to describe a piece of data at any layer of a networking model?",
        "answers": [
          "protocol data unit"
        ]
      },
      {
        "question": "Which two protocols function at the internet layer? (Choose two.)",
        "answers": [
          "ICMP",
          "IP"
        ]
      },
      {
        "question": "Which layer of the OSI model defines services to segment and reassemble data for individual communications between end devices?",
        "answers": [
          "transport"
        ]
      },
      {
        "question": "Which type of communication will send a message to a group of host destinations simultaneously?",
        "answers": [
          "multicast"
        ]
      },
      {
        "question": "Which three acronyms/initialisms represent standards organizations? (Choose three.)",
        "answers": [
          "IANA",
          "IEEE",
          "IETF"
        ]
      },
      {
        "question": "What type of communication will send a message to all devices on a local area network?",
        "answers": [
          "broadcast"
        ]
      },
      {
        "question": "In computer communication, what is the purpose of message encoding?",
        "answers": [
          "to convert information to the appropriate form for transmission"
        ]
      },
      {
        "question": "Which message delivery option is used when all devices need to receive the same message simultaneously?",
        "answers": [
          "broadcast"
        ]
      },
      {
        "question": "What three requirements are defined by the protocols used in network communcations to allow message transmission across a network? (Choose three.)",
        "answers": [
          "message encoding",
          "message size",
          "delivery options"
        ]
      },
      {
        "question": "What type of delivery uses data link layer addresses?",
        "answers": [
          "local delivery"
        ]
      },
      {
        "question": "What layer of the TCP/IP protocol model determines the best path through the network?",
        "answers": [
          "internet"
        ]
      }
    ],
    "4.7.4": [
      {
        "question": "Which standards organization oversees development of wireless LAN standards?",
        "answers": [
          "IEEE"
        ]
      },
      {
        "question": "A network administrator is designing a new network infrastructure that includes both wired and wireless connectivity. Under which situation would a wireless connection be recommended?",
        "answers": [
          "The end-user device needs mobility when connecting to the network."
        ]
      },
      {
        "question": "A network administrator is troubleshooting connectivity issues on a server. Using a tester, the administrator notices that the signals generated by the server NIC are distorted and not usable. In which layer of the OSI model is the error categorized?",
        "answers": [
          "physical layer"
        ]
      },
      {
        "question": "What type of cable is used to connect a workstation serial port to a Cisco router console port?",
        "answers": [
          "rollover"
        ]
      },
      {
        "question": "Which type of UTP cable is used to connect a PC to a switch port?",
        "answers": [
          "straight-through"
        ]
      },
      {
        "question": "What is the definition of bandwidth?",
        "answers": [
          "the amount of data that can flow from one place to another in a given amount of time"
        ]
      },
      {
        "question": "Which statement correctly describes frame encoding?",
        "answers": [
          "It converts bits into a predefined code in order to provide a predictable pattern to help distinguish data bits from control bits."
        ]
      },
      {
        "question": "What is a characteristic of UTP cabling?",
        "answers": [
          "cancellation"
        ]
      },
      {
        "question": "A wireless LAN is being deployed inside the new one room office that is occupied by the park ranger. The office is located at the highest part of the national park. After network testing is complete, the technicians report that the wireless LAN signal is occasionally affected by some type of interference. What is a possible cause of the signal distortion? (Choose two.)",
        "answers": [
          "the microwave oven",
          "the cellular phones that are used by the employees"
        ]
      },
      {
        "question": "What is indicated by the term throughput?",
        "answers": [
          "the measure of the bits transferred across the media over a given period of time"
        ]
      },
      {
        "question": "What is one advantage of using fiber optic cabling rather than copper cabling?",
        "answers": [
          "It is able to carry signals much farther than copper cabling."
        ]
      },
      {
        "question": "What is the purpose of the OSI physical layer?",
        "answers": [
          "transmitting bits across the local media"
        ]
      },
      {
        "question": "Why are two strands of fiber used for a single fiber optic connection?",
        "answers": [
          "They allow for full-duplex connectivity."
        ]
      },
      {
        "question": "Which characteristic describes crosstalk?",
        "answers": [
          "the distortion of the transmitted messages from signals carried in adjacent wires"
        ]
      },
      {
        "question": "Which procedure is used to reduce the effect of crosstalk in copper cables?",
        "answers": [
          "twisting opposing circuit wire pairs together"
        ]
      },
      {
        "question": "Which statement describes a characteristic of the frame header fields of the data link layer?",
        "answers": [
          "They vary depending on protocols."
        ]
      },
      {
        "question": "Which two factors influence the method that is used for media access control? (Choose two.)",
        "answers": [
          "how the connection between nodes appears to the data link layer",
          "how nodes share the media"
        ]
      },
      {
        "question": "What is a characteristic of a WAN hub-and-spoke topology?",
        "answers": [
          "The branch sites are connected to a central site through point-to-point links."
        ]
      }
    ],
    "5.3.2": [
      {
        "question": "What is the decimal equivalent of 0xC9?",
        "answers": [
          "201"
        ]
      },
      {
        "question": "Which is a valid hexadecimal number?",
        "answers": [
          "f"
        ]
      },
      {
        "question": "What is the binary representation of 0xCA?",
        "answers": [
          "11001010"
        ]
      },
      {
        "question": "How many bits are in an IPv4 address?",
        "answers": [
          "32"
        ]
      },
      {
        "question": "Which two statements are correct about IPv4 and IPv6 addresses? (Choose two.)",
        "answers": [
          "IPv6 addresses are represented by hexadecimal numbers.",
          "IPv4 addresses are 32 bits in length."
        ]
      },
      {
        "question": "Which IPv4 address format was created for ease of use by people and is expressed as 201.192.1.14?",
        "answers": [
          "dotted decimal"
        ]
      },
      {
        "question": "What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?",
        "answers": [
          "203.0.113.211"
        ]
      },
      {
        "question": "What is the decimal equivalent of the binary number 10010101?",
        "answers": [
          "149"
        ]
      },
      {
        "question": "What is the decimal equivalent of the hex number 0x3F?",
        "answers": [
          "63"
        ]
      },
      {
        "question": "What is the dotted decimal representation of the IPv4 address which is represented as the binary string 00001010.01100100.00010101.00000001?",
        "answers": [
          "10.100.21.1"
        ]
      },
      {
        "question": "What is the binary representation for the decimal number 173?",
        "answers": [
          "10101101"
        ]
      },
      {
        "question": "Given the binary address of 11101100 00010001 00001100 00001010, which address does this represent in dotted decimal format?",
        "answers": [
          "236.17.12.10"
        ]
      },
      {
        "question": "How many binary bits exist within an IPv6 address?",
        "answers": [
          "128"
        ]
      },
      {
        "question": "What is the binary equivalent of the decimal number 232?",
        "answers": [
          "11101000"
        ]
      }
    ],
    "6.4.2": [
      {
        "question": "What are two services performed by the data link layer of the OSI model? (Choose two.)",
        "answers": [
          "It accepts Layer 3 packets and encapsulates them into frames.",
          "It provides media access control and performs error detection."
        ]
      },
      {
        "question": "What does a router do after de-encapsulating a received frame?",
        "answers": [
          "determines the best path"
        ]
      },
      {
        "question": "What attribute of a NIC would place it at the data link layer of the OSI model?",
        "answers": [
          "MAC address"
        ]
      },
      {
        "question": "Although CSMA/CD is still a feature of Ethernet, why is it no longer necessary?",
        "answers": [
          "the use of full-duplex capable Layer 2 switches"
        ]
      },
      {
        "question": "What type of physical topology can be created by connecting all Ethernet cables to a central device?",
        "answers": [
          "star"
        ]
      },
      {
        "question": "A technician has been asked to develop a physical topology for a network that provides a high level of redundancy. Which physical topology requires that every node is attached to every other node on the network?",
        "answers": [
          "mesh"
        ]
      },
      {
        "question": "Which statement describes the half-duplex mode of data transmission?",
        "answers": [
          "Data that is transmitted over the network flows in one direction at a time."
        ]
      },
      {
        "question": "Which is a function of the Logical Link Control (LLC) sublayer?",
        "answers": [
          "to identify which network layer protocol is being used"
        ]
      },
      {
        "question": "Which data link layer media access control method does Ethernet use with legacy Ethernet hubs?",
        "answers": [
          "CSMA/CD"
        ]
      },
      {
        "question": "What are the two sublayers of the OSI model data link layer? (Choose two.)",
        "answers": [
          "LLC",
          "MAC"
        ]
      },
      {
        "question": "What method is used to manage contention-based access on a wireless network?",
        "answers": [
          "CSMA/CA"
        ]
      },
      {
        "question": "What identifier is used at the data link layer to uniquely identify an Ethernet device?",
        "answers": [
          "MAC address"
        ]
      },
      {
        "question": "Which two engineering organizations define open standards and protocols that apply to the data link layer? (Choose two.)",
        "answers": [
          "Institute of Electrical and Electronics Engineers (IEEE)",
          "International Telecommunication Union (ITU)"
        ]
      },
      {
        "question": "Which layer of the OSI model is responsible for specifying the encapsulation method used for specific types of media?",
        "answers": [
          "data link"
        ]
      },
      {
        "question": "What is true concerning physical and logical topologies?",
        "answers": [
          "Logical topologies refer to how a network transfers data between devices."
        ]
      }
    ],
    "7.5.2": [
      {
        "question": "What will a host on an Ethernet network do if it receives a frame with a unicast destination MAC address that does not match its own MAC address?",
        "answers": [
          "It will discard the frame."
        ]
      },
      {
        "question": "What is auto-MDIX?",
        "answers": [
          "a feature that detects Ethernet cable type"
        ]
      },
      {
        "question": "Which two functions or operations are performed by the MAC sublayer? (Choose two.)",
        "answers": [
          "It is responsible for Media Access Control.",
          "It adds a header and trailer to form an OSI Layer 2 PDU."
        ]
      },
      {
        "question": "What type of address is 01-00-5E-0A-00-02?",
        "answers": [
          "an address that reaches a specific group of hosts"
        ]
      },
      {
        "question": "What happens to runt frames received by a Cisco Ethernet switch?",
        "answers": [
          "The frame is dropped."
        ]
      },
      {
        "question": "What are the two sizes (minimum and expected maximum) of an Ethernet frame? (Choose two.)",
        "answers": [
          "64 bytes",
          "1518 bytes"
        ]
      },
      {
        "question": "What addressing information is recorded by a switch to build its MAC address table?",
        "answers": [
          "the source Layer 2 address of incoming frames"
        ]
      },
      {
        "question": "Which two characteristics describe Ethernet technology? (Choose two.)",
        "answers": [
          "It is supported by IEEE 802.3 standards.",
          "It uses unique MAC addresses to ensure that data is sent to the appropriate destination."
        ]
      },
      {
        "question": "What statement describes a characteristic of MAC addresses?",
        "answers": [
          "They must be globally unique."
        ]
      },
      {
        "question": "What is the special value assigned to the first 24 bits of a multicast MAC address transporting an IPv4 packet?",
        "answers": [
          "01-00-5E"
        ]
      },
      {
        "question": "Which network device makes forwarding decisions based on the destination MAC address that is contained in the frame?",
        "answers": [
          "switch"
        ]
      },
      {
        "question": "Which network device has the primary function to send data to a specific destination based on the information found in the MAC address table?",
        "answers": [
          "switch"
        ]
      },
      {
        "question": "Which function or operation is performed by the LLC sublayer?",
        "answers": [
          "It communicates with upper protocol layers."
        ]
      },
      {
        "question": "Which statement is true about MAC addresses?",
        "answers": [
          "The first three bytes are used by the vendor assigned OUI."
        ]
      }
    ],
    "8.6.2": [
      {
        "question": "Which command can be used on a Windows host to display the routing table?",
        "answers": [
          "netstat -r"
        ]
      },
      {
        "question": "What information is added during encapsulation at OSI Layer 3?",
        "answers": [
          "source and destination IP address"
        ]
      },
      {
        "question": "How does the network layer use the MTU value?",
        "answers": [
          "The MTU is passed to the network layer by the data link layer."
        ]
      },
      {
        "question": "Which characteristic describes an IPv6 enhancement over IPv4?​",
        "answers": [
          "The IPv6 header is simpler than the IPv4 header is, which improves packet handling."
        ]
      },
      {
        "question": "When a connectionless protocol is in use at a lower layer of the OSI model, how is missing data detected and retransmitted if necessary?",
        "answers": [
          "Upper-layer connection-oriented protocols keep track of the data received and can request retransmission from the upper-level protocols on the sending host."
        ]
      },
      {
        "question": "What was the reason for the creation and implementation of IPv6?",
        "answers": [
          "to relieve IPv4 address depletion"
        ]
      },
      {
        "question": "Which statement accurately describes a characteristic of IPv4?",
        "answers": [
          "IPv4 has a 32-bit address space."
        ]
      },
      {
        "question": "Which field in an IPv4 packet header will typically stay the same during its transmission?",
        "answers": [
          "Destination Address"
        ]
      },
      {
        "question": "When a router receives a packet, what information must be examined in order for the packet to be forwarded to a remote destination?",
        "answers": [
          "destination IP address"
        ]
      },
      {
        "question": "Which field in an IPv6 packet is used by the router to determine if a packet has expired and should be dropped?",
        "answers": [
          "Hop Limit"
        ]
      },
      {
        "question": "Which information is used by routers to forward a data packet toward its destination?",
        "answers": [
          "destination IP address"
        ]
      },
      {
        "question": "A computer has to send a packet to a destination host in the same LAN. How will the packet be sent?",
        "answers": [
          "The packet will be sent directly to the destination host."
        ]
      },
      {
        "question": "A router receives a packet from the Gigabit 0/0 interface and determines that the packet needs to be forwarded out the Gigabit 0/1 interface. What will the router do next?",
        "answers": [
          "create a new Layer 2 Ethernet frame to be sent to the destination"
        ]
      },
      {
        "question": "Which IPv4 address can a host use to ping the loopback interface?",
        "answers": [
          "127.0.0.1"
        ]
      }
    ],
    "9.4.2": [
      {
        "question": "Which destination address is used in an ARP request frame?",
        "answers": [
          "FFFF.FFFF.FFFF"
        ]
      },
      {
        "question": "What addresses are mapped by ARP?",
        "answers": [
          "IPv4 address to a destination MAC address"
        ]
      },
      {
        "question": "What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?",
        "answers": [
          "It forwards the frame out of all ports except for the port at which the frame was received."
        ]
      },
      {
        "question": "Which two ICMPv6 messages are used during the Ethernet MAC address resolution process? (Choose two.)",
        "answers": [
          "router solicitation",
          "neighbor advertisement"
        ]
      },
      {
        "question": "Which router component holds the routing table, ARP cache, and running configuration file?",
        "answers": [
          "RAM"
        ]
      },
      {
        "question": "What type of information is contained in an ARP table?",
        "answers": [
          "IPv4 address to MAC address mappings"
        ]
      },
      {
        "question": "A PC is configured to obtain an IPv4 address automatically from network 192.168.1.0/24. The network administrator issues the arp -a command and notices an entry of 192.168.1.255 ff-ff-ff-ff-ff-ff. Which statement describes this entry?",
        "answers": [
          "This is a static map entry."
        ]
      },
      {
        "question": "A cybersecurity analyst believes an attacker is spoofing the MAC address of the default gateway to perform a man-in-the-middle attack. Which command should the analyst use to view the MAC address a host is using to reach the default gateway?",
        "answers": [
          "arp -a"
        ]
      },
      {
        "question": "What is a function of ARP?",
        "answers": [
          "resolving IPv4 addresses to MAC addresses"
        ]
      },
      {
        "question": "What is the purpose of ARP in an IPv4 network?",
        "answers": [
          "to obtain a specific MAC address when an IP address is known"
        ]
      },
      {
        "question": "Which action is taken by a Layer 2 switch when it receives a Layer 2 broadcast frame?",
        "answers": [
          "It sends the frame to all ports except the port on which it received the frame."
        ]
      },
      {
        "question": "When an IPv4 packet is sent to a host on a remote network, what information is provided by ARP?",
        "answers": [
          "the MAC address of the router interface closest to the sending host"
        ]
      },
      {
        "question": "How does the ARP process use an IPv4 address?",
        "answers": [
          "to determine the MAC address of a device on the same network"
        ]
      },
      {
        "question": "The ARP table in a switch maps which two types of address together?",
        "answers": [
          "Layer 3 address to a Layer 2 address"
        ]
      },
      {
        "question": "What is one function of the ARP protocol?",
        "answers": [
          "resolving an IPv4 address to a MAC address"
        ]
      }
    ],
    "10.4.6": [
      {
        "question": "What is the purpose of the banner motd command?",
        "answers": [
          "It provides a way to make announcements to those who log in to a router."
        ]
      },
      {
        "question": "A technician is configuring a router to allow for all forms of management access. As part of each different type of access, the technician is trying to type the command login. Which configuration mode should be entered to do this task?",
        "answers": [
          "any line configuration mode"
        ]
      },
      {
        "question": "What is stored in the NVRAM of a Cisco router?",
        "answers": [
          "the startup configuration"
        ]
      },
      {
        "question": "Which statement regarding the service password-encryption command is true?",
        "answers": [
          "As soon as the service password-encryption command is entered, all currently set passwords formerly displayed in plain text are encrypted."
        ]
      },
      {
        "question": "An administrator is configuring a new router to permit out-of-band management access. Which set of commands will allow the required login using a password of cisco?",
        "answers": [
          "Router(config)# line console 0 Router(config-line)# password cisco Router(config-line)# login"
        ]
      },
      {
        "question": "Which command can be used on a Cisco router to display all interfaces, the IPv4 address assigned, and the current status?",
        "answers": [
          "show ip interface brief"
        ]
      },
      {
        "question": "Which CLI mode allows users to access all device commands, such as those used for configuration, management, and troubleshooting?",
        "answers": [
          "privileged EXEC mode"
        ]
      },
      {
        "question": "What is the purpose of the startup configuration file on a Cisco router?",
        "answers": [
          "to contain the commands that are used to initially configure a router on startup"
        ]
      },
      {
        "question": "Which characteristic describes the default gateway of a host computer?",
        "answers": [
          "the logical address of the router interface on the same network as the host computer"
        ]
      },
      {
        "question": "A router boots and enters setup mode. What is the reason for this?",
        "answers": [
          "The configuration file is missing from NVRAM."
        ]
      },
      {
        "question": "Which command is used to encrypt all passwords in a router configuration file?",
        "answers": [
          "Router_A (config) # service password-encryption"
        ]
      },
      {
        "question": "Company policy requires using the most secure method to safeguard access to the privileged exec and configuration mode on the routers. The privileged exec password is trustknow1. Which of the following router commands achieves the goal of providing the highest level of security?",
        "answers": [
          "enable secret trustknow1"
        ]
      },
      {
        "question": "What will be the response from the router after the command, “router(config)# hostname portsmouth” is entered?",
        "answers": [
          "portsmouth(config)#"
        ]
      }
    ],
    "11.10.4": [
      {
        "question": "What does the IP address 172.17.4.250/24 represent?",
        "answers": [
          "host address"
        ]
      },
      {
        "question": "If a network device has a mask of /28, how many IP addresses are available for hosts on this network?",
        "answers": [
          "14"
        ]
      },
      {
        "question": "What is the purpose of the subnet mask in conjunction with an IP address?",
        "answers": [
          "to determine the subnet to which the host belongs"
        ]
      },
      {
        "question": "A network administrator is variably subnetting a network. The smallest subnet has a mask of 255.255.255.224. How many usable host addresses will this subnet provide?​",
        "answers": [
          "30"
        ]
      },
      {
        "question": "What subnet mask is represented by the slash notation /20?",
        "answers": [
          "255.255.240.0"
        ]
      },
      {
        "question": "Which statement is true about variable-length subnet masking?",
        "answers": [
          "The size of each subnet may be different, depending on requirements."
        ]
      },
      {
        "question": "Why does a Layer 3 device perform the ANDing process on a destination IP address and subnet mask?",
        "answers": [
          "to identify the network address of the destination network"
        ]
      },
      {
        "question": "How many usable IP addresses are available on the 192.168.1.0/27 network?",
        "answers": [
          "30"
        ]
      },
      {
        "question": "Which subnet mask would be used if exactly 4 host bits are available?",
        "answers": [
          "255.255.255.240"
        ]
      },
      {
        "question": "Which two parts are components of an IPv4 address? (Choose two.)",
        "answers": [
          "network portion",
          "host portion"
        ]
      },
      {
        "question": "If a network device has a mask of /26, how many IP addresses are available for hosts on this network?",
        "answers": [
          "62"
        ]
      },
      {
        "question": "What is the prefix length notation for the subnet mask 255.255.255.224?",
        "answers": [
          "/27"
        ]
      },
      {
        "question": "How many valid host addresses are available on an IPv4 subnet that is configured with a /26 mask?",
        "answers": [
          "62"
        ]
      },
      {
        "question": "Which subnet mask would be used if 5 host bits are available?",
        "answers": [
          "255.255.255.224"
        ]
      },
      {
        "question": "A network administrator subnets the 192.168.10.0/24 network into subnets with /26 masks. How many equal-sized subnets are created?",
        "answers": [
          "4"
        ]
      }
    ],
    "12.9.4": [
      {
        "question": "What is the subnet address for the IPv6 address 2001:D12:AA04:B5::1/64?",
        "answers": [
          "2001:D12:AA04:B5::/64"
        ]
      },
      {
        "question": "Which type of IPv6 address is not routable and used only for communication on a single subnet?",
        "answers": [
          "link-local address"
        ]
      },
      {
        "question": "Which address type is not supported in IPv6?",
        "answers": [
          "broadcast"
        ]
      },
      {
        "question": "What is the minimum configuration for a router interface that is enabled for IPv6?",
        "answers": [
          "To have a link-local IPv6 address"
        ]
      },
      {
        "question": "What is the interface ID of the IPv6 address 2001:DB8::1000:A9CD:47FF:FE57:FE94/64?",
        "answers": [
          "A9CD:47FF:FE57:FE94"
        ]
      },
      {
        "question": "What are three parts of an IPv6 global unicast address? (Choose three.)",
        "answers": [
          "a global routing prefix that is used to identify the network portion of the address that has been provided by an ISP",
          "a subnet ID that is used to identify networks inside of the local enterprise site",
          "an interface ID that is used to identify the local host on the network"
        ]
      },
      {
        "question": "What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?",
        "answers": [
          "2001:DB8:0:AB00::1234"
        ]
      },
      {
        "question": "What is the prefix associated with the IPv6 address 2001:CA48:D15:EA:CC44::1/64?",
        "answers": [
          "2001:CA48:D15:EA::/64"
        ]
      },
      {
        "question": "What type of address is automatically assigned to an interface when IPv6 is enabled on that interface?",
        "answers": [
          "link-local"
        ]
      },
      {
        "question": "Which IPv6 network prefix is only intended for local links and can not be routed?",
        "answers": [
          "FE80::/10"
        ]
      },
      {
        "question": "Your organization is issued the IPv6 prefix of 2001:0000:130F::/48 by your service provider. With this prefix, how many bits are available for your organization to create subnetworks if interface ID bits are not borrowed?",
        "answers": [
          "16"
        ]
      },
      {
        "question": "What is indicated by a successful ping to the ::1 IPv6 address?",
        "answers": [
          "IP is properly installed on the host."
        ]
      },
      {
        "question": "What is the most compressed representation of the IPv6 address 2001:0000:0000:abcd:0000:0000:0000:0001?",
        "answers": [
          "2001:0:0:abcd::1"
        ]
      },
      {
        "question": "What is the purpose of the command ping ::1?",
        "answers": [
          "It tests the internal configuration of an IPv6 host."
        ]
      },
      {
        "question": "At a minimum, which address is required on IPv6-enabled interfaces?",
        "answers": [
          "link-local"
        ]
      },
      {
        "question": "What is the most compressed representation of the IPv6 address 2001:0db8:0000:abcd:0000:0000:0000:0001?",
        "answers": [
          "2001:db8:0:abcd::1"
        ]
      },
      {
        "question": "What is the prefix associated with the IPv6 address 2001:DB8:D15:EA:CC44::1/64?",
        "answers": [
          "2001:DB8:D15:EA::/64​"
        ]
      },
      {
        "question": "What is the network address for the IPv6 address 2001:DB8:AA04:B5::1/64?",
        "answers": [
          "2001:DB8:AA04:B5::/64​"
        ]
      },
      {
        "question": "Your organization is issued the IPv6 prefix of 2001:db8:130f::/48 by your service provider. With this prefix, how many bits are available for your organization to create /64 subnetworks if interface ID bits are not borrowed?",
        "answers": [
          "16"
        ]
      }
    ],
    "13.3.4": [
      {
        "question": "What is a function of the tracert command that differs from the ping command when they are used on a workstation?",
        "answers": [
          "The tracert command shows the information of routers in the path."
        ]
      },
      {
        "question": "Which ICMP message is used by the traceroute utility during the process of finding the path between two end hosts?",
        "answers": [
          "time exceeded"
        ]
      },
      {
        "question": "Which two things can be determined by using the ping command? (Choose two.)",
        "answers": [
          "the average time it takes a packet to reach the destination and for the response to return to the source",
          "the destination device is reachable through the network"
        ]
      },
      {
        "question": "Which statement describes a characteristic of the traceroute utility?",
        "answers": [
          "It identifies the routers in the path from a source host to a destination host."
        ]
      },
      {
        "question": "Which utility uses the Internet Control Messaging Protocol (ICMP)?",
        "answers": [
          "ping"
        ]
      },
      {
        "question": "A network administrator can successfully ping the server at www.cisco.com, but cannot ping the company web server located at an ISP in another city. Which tool or command would help identify the specific router where the packet was lost or delayed?",
        "answers": [
          "traceroute"
        ]
      },
      {
        "question": "Which protocol is used by IPv4 and IPv6 to provide error messaging?",
        "answers": [
          "ICMP"
        ]
      },
      {
        "question": "What message is sent by a host to check the uniqueness of an IPv6 address before using that address?",
        "answers": [
          "neighbor solicitation"
        ]
      },
      {
        "question": "A technician is troubleshooting a network where it is suspected that a defective node in the network path is causing packets to be dropped. The technician only has the IP address of the end point device and does not have any details of the intermediate devices. What command can the technician use to identify the faulty node?",
        "answers": [
          "tracert"
        ]
      },
      {
        "question": "A user who is unable to connect to the file server contacts the help desk. The helpdesk technician asks the user to ping the IP address of the default gateway that is configured on the workstation. What is the purpose for this ping command?",
        "answers": [
          "to test that the host has the capability to reach hosts on other networks"
        ]
      },
      {
        "question": "A user calls to report that a PC cannot access the internet. The network technician asks the user to issue the command ping 127.0.0.1 in a command prompt window. The user reports that the result is four positive replies. What conclusion can be drawn based on this connectivity test?",
        "answers": [
          "The TCP/IP implementation is functional."
        ]
      },
      {
        "question": "Which command can be used to test connectivity between two devices using echo request and echo reply messages?",
        "answers": [
          "ping"
        ]
      },
      {
        "question": "What field content is used by ICMPv6 to determine that a packet has expired?",
        "answers": [
          "Hop Limit field"
        ]
      },
      {
        "question": "Which protocol provides feedback from the destination host to the source host about errors in packet delivery?",
        "answers": [
          "ICMP"
        ]
      },
      {
        "question": "A network administrator is testing network connectivity by issuing the ping command on a router. Which symbol will be displayed to indicate that a time expired during the wait for an ICMP echo reply message?",
        "answers": [
          "."
        ]
      }
    ],
    "14.8.3": [
      {
        "question": "Network congestion has resulted in the source learning of the loss of TCP segments that were sent to the destination. What is one way that the TCP protocol addresses this?",
        "answers": [
          "The source decreases the amount of data that it transmits before it receives an acknowledgement from the destination."
        ]
      },
      {
        "question": "Which two operations are provided by TCP but not by UDP? (Choose two.)",
        "answers": [
          "acknowledging received data",
          "retransmitting any unacknowledged data"
        ]
      },
      {
        "question": "What is the TCP mechanism used in congestion avoidance?",
        "answers": [
          "sliding window"
        ]
      },
      {
        "question": "What is a responsibility of transport layer protocols?",
        "answers": [
          "tracking individual conversations"
        ]
      },
      {
        "question": "How does a networked server manage requests from multiple clients for different services?",
        "answers": [
          "Each request has a combination of source and destination port numbers, coming from a unique IP address."
        ]
      },
      {
        "question": "Which two services or protocols use the preferred UDP protocol for fast transmission and low overhead? (Choose two)",
        "answers": [
          "DNS",
          "VoIP"
        ]
      },
      {
        "question": "What is the purpose of using a source port number in a TCP communication?",
        "answers": [
          "to keep track of multiple conversations between devices"
        ]
      },
      {
        "question": "Which number or set of numbers represents a socket?",
        "answers": [
          "192.168.1.1:80"
        ]
      },
      {
        "question": "Which two flags in the TCP header are used in a TCP three-way handshake to establish connectivity between two network devices? (Choose two.)",
        "answers": [
          "ACK",
          "SYN"
        ]
      },
      {
        "question": "What happens if part of an FTP message is not delivered to the destination?",
        "answers": [
          "The part of the FTP message that was lost is re-sent."
        ]
      },
      {
        "question": "What type of applications are best suited for using UDP?",
        "answers": [
          "applications that are sensitive to delay"
        ]
      },
      {
        "question": "Which action is performed by a client when establishing communication with a server via the use of UDP at the transport layer?",
        "answers": [
          "The client randomly selects a source port number."
        ]
      },
      {
        "question": "Which transport layer feature is used to guarantee session establishment?",
        "answers": [
          "TCP 3-way handshake"
        ]
      },
      {
        "question": "What is the complete range of TCP and UDP well-known ports?",
        "answers": [
          "0 to 1023"
        ]
      },
      {
        "question": "What is a socket?",
        "answers": [
          "the combination of a source IP address and port number or a destination IP address and port number"
        ]
      },
      {
        "question": "Which transport layer feature is used to establish a connection-oriented session?",
        "answers": [
          "TCP 3-way handshake"
        ]
      },
      {
        "question": "What TCP mechanism is used to enhance performance by allowing a device to continuously send a steady stream of segments as long as the device is also receiving necessary acknowledgements?",
        "answers": [
          "Sliding window"
        ]
      }
    ],
    "15.6.2": [
      {
        "question": "On a home network, which device is most likely to provide dynamic IPv4 addressing to clients on the home network?",
        "answers": [
          "a home router"
        ]
      },
      {
        "question": "What part of the URL, ht​tp://ww​w.cisco.com/index.html, represents the top-level DNS domain?",
        "answers": [
          ".com"
        ]
      },
      {
        "question": "What are two characteristics of the application layer of the TCP/IP model? (Choose two.)",
        "answers": [
          "the creation and maintenance of dialogue between source and destination applications",
          "closest to the end user"
        ]
      },
      {
        "question": "What message type is used by an HTTP client to request data from a web server?",
        "answers": [
          "GET"
        ]
      },
      {
        "question": "Which statement is true about FTP?",
        "answers": [
          "The client can download data from or upload data to the server."
        ]
      },
      {
        "question": "A wireless host needs to request an IPv4 address. What protocol would be used to process the request?",
        "answers": [
          "DHCP"
        ]
      },
      {
        "question": "Which TCP/IP model layer is closest to the end user?",
        "answers": [
          "application"
        ]
      },
      {
        "question": "Which three protocols or standards are used at the application layer of the TCP/IP model? (Choose three.)",
        "answers": [
          "HTTP",
          "MPEG",
          "GIF"
        ]
      },
      {
        "question": "Which protocol uses encryption?",
        "answers": [
          "HTTPS"
        ]
      },
      {
        "question": "Why is DHCP for IPv4 preferred for use on large networks?",
        "answers": [
          "It is a more efficient way to manage IPv4 addresses than static address assignment is."
        ]
      },
      {
        "question": "Which two tasks can be performed by a local DNS server? (Choose two.)",
        "answers": [
          "mapping name-to-IP addresses for internal hosts",
          "forwarding name resolution requests between servers"
        ]
      },
      {
        "question": "Which protocol can be used to transfer messages from an email server to an email client?",
        "answers": [
          "POP3"
        ]
      },
      {
        "question": "When retrieving email messages, which protocol allows for easy, centralized storage and backup of emails that would be desirable for a small- to medium-sized business?",
        "answers": [
          "IMAP"
        ]
      },
      {
        "question": "Which application layer protocol is used to provide file-sharing and print services to Microsoft applications?",
        "answers": [
          "SMB"
        ]
      },
      {
        "question": "An author is uploading one chapter document from a personal computer to a file server of a book publisher. What role is the personal computer assuming in this network model?",
        "answers": [
          "client"
        ]
      }
    ],
    "16.5.4": [
      {
        "question": "What three configuration steps must be performed to implement SSH access to a router? (Choose three.)",
        "answers": [
          "an IP domain name",
          "a user account",
          "a unique hostname"
        ]
      },
      {
        "question": "What is the objective of a network reconnaissance attack?",
        "answers": [
          "discovery and mapping of systems"
        ]
      },
      {
        "question": "For security reasons a network administrator needs to ensure that local computers cannot ping each other. Which settings can accomplish this task?",
        "answers": [
          "firewall settings"
        ]
      },
      {
        "question": "A network administrator establishes a connection to a switch via SSH. What characteristic uniquely describes the SSH connection?",
        "answers": [
          "remote access to a switch where data is encrypted during the session"
        ]
      },
      {
        "question": "Which benefit does SSH offer over Telnet for remotely managing a router?",
        "answers": [
          "encryption"
        ]
      },
      {
        "question": "What is one of the most effective security tools available for protecting users from external threats?",
        "answers": [
          "firewalls"
        ]
      },
      {
        "question": "Which type of network threat is intended to prevent authorized users from accessing resources?",
        "answers": [
          "DoS attacks"
        ]
      },
      {
        "question": "Which three services are provided by the AAA framework? (Choose three.)",
        "answers": [
          "accounting",
          "authorization",
          "authentication"
        ]
      },
      {
        "question": "Which malicious code attack is self-contained and tries to exploit a specific vulnerability in a system being attacked?",
        "answers": [
          "worm"
        ]
      },
      {
        "question": "Some routers and switches in a wiring closet malfunctioned after an air conditioning unit failed. What type of threat does this situation describe?",
        "answers": [
          "environmental"
        ]
      },
      {
        "question": "What does the term vulnerability mean?",
        "answers": [
          "a weakness that makes a target susceptible to an attack"
        ]
      },
      {
        "question": "Which component is designed to protect against unauthorized communications to and from a computer?",
        "answers": [
          "firewall"
        ]
      },
      {
        "question": "Which command will block login attempts on RouterA for a period of 30 seconds if there are 2 failed login attempts within 10 seconds?",
        "answers": [
          "RouterA(config)# login block-for 30 attempts 2 within 10"
        ]
      },
      {
        "question": "What is the purpose of the network security accounting function?",
        "answers": [
          "to keep track of the actions of a user"
        ]
      },
      {
        "question": "What type of attack may involve the use of tools such as nslookup and fping?",
        "answers": [
          "reconnaissance attack"
        ]
      }
    ],
    "17.8.5": [
      {
        "question": "Which two traffic types require delay sensitive delivery? (Choose two.)",
        "answers": [
          "voice",
          "video"
        ]
      },
      {
        "question": "A network technician suspects that a particular network connection between two Cisco switches is having a duplex mismatch. Which command would the technician use to see the Layer 1 and Layer 2 details of a switch port?",
        "answers": [
          "show interfaces"
        ]
      },
      {
        "question": "Which statement is true about CDP on a Cisco device?​",
        "answers": [
          "CDP can be disabled globally or on a specific interface."
        ]
      },
      {
        "question": "What factor should be considered in the design of a small network when devices are being chosen?",
        "answers": [
          "cost of devices"
        ]
      },
      {
        "question": "A user is unable to reach the website when typing ht​tp://ww​w.cisco.com in a web browser, but can reach the same site by typing ht​tp://72.163.4.161. What is the issue?",
        "answers": [
          "DNS"
        ]
      },
      {
        "question": "Where are Cisco IOS debug output messages sent by default?",
        "answers": [
          "console line"
        ]
      },
      {
        "question": "Which element of scaling a network involves identifying the physical and logical topologies?",
        "answers": [
          "network documentation"
        ]
      },
      {
        "question": "What mechanism can be implemented in a small network to help minimize network latency for real-time streaming applications?",
        "answers": [
          "QoS"
        ]
      },
      {
        "question": "Which process failed if a computer cannot access the internet and received an IP address of 169.254.142.5?",
        "answers": [
          "DHCP"
        ]
      },
      {
        "question": "A small company has only one router as the exit point to its ISP. Which solution could be adopted to maintain connectivity if the router itself, or its connection to the ISP, fails?",
        "answers": [
          "Have a second router that is connected to another ISP."
        ]
      },
      {
        "question": "When should an administrator establish a network baseline?",
        "answers": [
          "at regular intervals over a period of time"
        ]
      },
      {
        "question": "Which network design consideration would be more important to a large corporation than to a small business?",
        "answers": [
          "redundancy"
        ]
      },
      {
        "question": "A newly hired network technician is given the task of ordering new hardware for a small business with a large growth forecast. Which primary factor should the technician be concerned with when choosing the new devices?",
        "answers": [
          "devices with support for modularity"
        ]
      },
      {
        "question": "What type of traffic would most likely have the highest priority through the network?",
        "answers": [
          "voice"
        ]
      },
      {
        "question": "A network technician is investigating network connectivity from a PC to a remote host with the address 10.1.1.5. Which command, when issued on a Windows PC, will display the path to the remote host?",
        "answers": [
          "tracert 10.1.1.5"
        ]
      }
    ]
};

const PRACTICE_EXAM_DB = [
    {
      "question": "A client packet is received by a server. The packet has a destination port number of 22. What service is the client requesting?",
      "answers": [
        "SSH"
      ]
    },
    {
      "question": "Refer to the exhibit. What does the value of the window size specify?",
      "answers": [
        "the amount of data that can be sent before an acknowledgment is required"
      ]
    },
    {
      "question": "To which TCP port group does the port 414 belong?",
      "answers": [
        "well-known"
      ]
    },
    {
      "question": "Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?",
      "answers": [
        "The administrator must first enter privileged EXEC mode before issuing the command."
      ]
    },
    {
      "question": "What is a user trying to determine when issuing a ping 10.1.1.1 command on a PC?",
      "answers": [
        "if there is connectivity with the destination device"
      ]
    },
    {
      "question": "What is a characteristic of a switch virtual interface (SVI)?​",
      "answers": [
        "An SVI is created in software and requires a configured IP address and a subnet mask in order to provide remote access to the switch."
      ]
    },
    {
      "question": "Match the descriptions to the terms. (Not all options are used.)",
      "answers": [
        "the part of the operating system that interfaces with applications and the user -> shell",
        "users interact with the operating system by typing commands -> CLI",
        "enables the user to interact with the operating system by pointing and clicking -> GUI",
        "the part of the OS that interacts directly with the device hardware -> kernel"
      ]
    },
    {
      "question": "What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?",
      "answers": [
        "The switch drops the frame."
      ]
    },
    {
      "question": "Two network engineers are discussing the methods used to forward frames through a switch. What is an important concept related to the cut-through method of switching?",
      "answers": [
        "Packets can be relayed with errors when fast-forward switching is used."
      ]
    },
    {
      "question": "Which two issues can cause both runts and giants in Ethernet networks? (Choose two.)",
      "answers": [
        "half-duplex operations",
        "a malfunctioning NIC"
      ]
    },
    {
      "question": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
      "answers": [
        "enables IPv4 and IPv6 to utilize the same physical medium",
        "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
        "enables IPv4 and IPv6 to utilize the same physical medium",
        "handles communication between upper layer networking software and Ethernet NIC hardware",
        "adds Ethernet control information to network protocol data",
        "enables IPv4 and IPv6 to utilize the same physical medium",
        "adds Ethernet control information to network protocol data",
        "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame"
      ]
    },
    {
      "question": "Which two commands could be used to check if DNS name resolution is working properly on a Windows PC? (Choose two.)",
      "answers": [
        "nslookup cisco.com",
        "ping cisco.com"
      ]
    },
    {
      "question": "A small advertising company has a web server that provides critical business service. The company connects to the Internet through a leased line service to an ISP. Which approach best provides cost effective redundancy for the Internet connection?",
      "answers": [
        "Add a connection to the Internet via a DSL line to another ISP."
      ]
    },
    {
      "question": "Only employees connected to IPv6 interfaces are having difficulty connecting to remote networks. The analyst wants to verify that IPv6 routing has been enabled. What is the best command to use to accomplish the task?",
      "answers": [
        "show running-config"
      ]
    },
    {
      "question": "Refer to the exhibit. A network administrator is connecting a new host to the Registrar LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
      "answers": [
        "192.168.235.234"
      ]
    },
    {
      "question": "Match the command with the device mode at which the command is entered. (Not all options are used.)",
      "answers": [
        "login -> R1(config-line)#",
        "ip address 192.168.4.4 255.255.255.0 -> R1(config-if)#",
        "service password-encryption -> R1(config)#",
        "enable -> R1>",
        "copy running-config startup-config -> R1#"
      ]
    },
    {
      "question": "A router boots and enters setup mode. What is the reason for this?",
      "answers": [
        "The configuration file is missing from NVRAM."
      ]
    },
    {
      "question": "What service is provided by POP3?",
      "answers": [
        "Retrieves email from the server by downloading the email to the local mail application of the client."
      ]
    },
    {
      "question": "Two students are working on a network design project. One student is doing the drawing, while the other student is writing the proposal. The drawing is finished and the student wants to share the folder that contains the drawing so that the other student can access the file and copy it to a USB drive. Which networking model is being used?",
      "answers": [
        "peer-to-peer"
      ]
    },
    {
      "question": "Which command is used to manually query a DNS server to resolve a specific host name?",
      "answers": [
        "nslookup"
      ]
    },
    {
      "question": "Which PDU is processed when a host computer is de-encapsulating a message at the transport layer of the TCP/IP model?",
      "answers": [
        "segment"
      ]
    },
    {
      "question": "Which two OSI model layers have the same functionality as two layers of the TCP/IP model? (Choose two.)",
      "answers": [
        "network",
        "transport"
      ]
    },
    {
      "question": "Which three layers of the OSI model are comparable in function to the application layer of the TCP/IP model? (Choose three.)",
      "answers": [
        "presentation",
        "application",
        "session"
      ]
    },
    {
      "question": "Network information:",
      "answers": [
        "verifying that there is connectivity to the internet"
      ]
    },
    {
      "question": "Which two ICMP messages are used by both IPv4 and IPv6 protocols? (Choose two.)​",
      "answers": [
        "protocol unreachable",
        "route redirection"
      ]
    },
    {
      "question": "A network technician types the command ping 127.0.0.1 at the command prompt on a computer. What is the technician trying to accomplish?",
      "answers": [
        "testing the integrity of the TCP/IP stack on the local machine"
      ]
    },
    {
      "question": "Although CSMA/CD is still a feature of Ethernet, why is it no longer necessary?",
      "answers": [
        "the use of full-duplex capable Layer 2 switches"
      ]
    },
    {
      "question": "What does a router do when it receives a Layer 2 frame over the network medium?",
      "answers": [
        "de-encapsulates the frame"
      ]
    },
    {
      "question": "Which two acronyms represent the data link sublayers that Ethernet relies upon to operate? (Choose two.)",
      "answers": [
        "LLC",
        "MAC"
      ]
    },
    {
      "question": "A network team is comparing topologies for connecting on a shared media. Which physical topology is an example of a hybrid topology for a LAN?",
      "answers": [
        "extended star"
      ]
    },
    {
      "question": "Given network 172.18.109.0, which subnet mask would be used if 6 host bits were available?",
      "answers": [
        "255.255.255.192"
      ]
    },
    {
      "question": "Three devices are on three different subnets. Match the network address and the broadcast address with each subnet where these devices are located. (Not all options are used.)",
      "answers": [
        "Subnet 2 network number -> 192.168.10.16",
        "Subnet 1 broadcast address -> 192.168.10.79",
        "Subnet 3 broadcast address -> 192.168.10.39",
        "Subnet 2 broadcast address -> 192.168.10.19",
        "Subnet 1 network number -> 192.168.10.64",
        "Subnet 3 network number -> 192.168.10.32"
      ]
    },
    {
      "question": "What type of address is 198.133.219.162?",
      "answers": [
        "public"
      ]
    },
    {
      "question": "What does the IP address 192.168.1.15/29 represent?",
      "answers": [
        "broadcast address"
      ]
    },
    {
      "question": "Why is NAT not needed in IPv6?​",
      "answers": [
        "Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.​"
      ]
    },
    {
      "question": "What routing table entry has a next hop address associated with a destination network?",
      "answers": [
        "remote routes"
      ]
    },
    {
      "question": "Which term describes a field in the IPv4 packet header that contains a unicast, multicast, or broadcast address?",
      "answers": [
        "destination IPv4 address"
      ]
    },
    {
      "question": "If the default gateway is configured incorrectly on the host, what is the impact on communications?",
      "answers": [
        "The host can communicate with other hosts on the local network, but is unable to communicate with hosts on remote networks."
      ]
    },
    {
      "question": "Which is the compressed format of the IPv6 address fe80:0000:0000:0000:0220:0b3f:f0e0:0029?",
      "answers": [
        "fe80::220:b3f:f0e0:29"
      ]
    },
    {
      "question": "Refer to the exhibit. A user issues the command netstat –r on a workstation. Which IPv6 address is one of the link-local addresses of the workstation?",
      "answers": [
        "fe80::30d0:115:3f57:fe4c/128"
      ]
    },
    {
      "question": "What type of IPv6 address is represented by ::1/128?",
      "answers": [
        "loopback"
      ]
    },
    {
      "question": "Which statement describes network security?",
      "answers": [
        "It ensures sensitive corporate data is available for authorized users."
      ]
    },
    {
      "question": "Which two devices would be described as intermediary devices? (Choose two.)",
      "answers": [
        "wireless LAN controller",
        "IPS"
      ]
    },
    {
      "question": "What characteristic describes spyware?",
      "answers": [
        "software that is installed on a user device and collects information about the user"
      ]
    },
    {
      "question": "Refer to the exhibit. The exhibit shows a small switched network and the contents of the MAC address table of the switch. PC1 has sent a frame addressed to PC3. What will the switch do with the frame?",
      "answers": [
        "The switch will forward the frame to all ports except port 4."
      ]
    },
    {
      "question": "Which destination address is used in an ARP request frame?",
      "answers": [
        "FFFF.FFFF.FFFF"
      ]
    },
    {
      "question": "Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC3. In this scenario, what will happen next?",
      "answers": [
        "RT1 will send an ARP reply with its own Fa0/0 MAC address."
      ]
    },
    {
      "question": "A network administrator is issuing the login block-for 180 attempts 2 within 30 command on a router. Which threat is the network administrator trying to prevent?",
      "answers": [
        "a user who is trying to guess a password to access the router"
      ]
    },
    {
      "question": "Which statement describes the characteristics of packet-filtering and stateful firewalls as they relate to the OSI model?",
      "answers": [
        "A packet-filtering firewall typically can filter up to the transport layer, whereas a stateful firewall can filter up to the session layer."
      ]
    },
    {
      "question": "What are two ways to protect a computer from malware? (Choose two.)",
      "answers": [
        "Use antivirus software.",
        "Keep software up to date."
      ]
    },
    {
      "question": "The employees and residents of Ciscoville cannot access the Internet or any remote web-based services. IT workers quickly determine that the city firewall is being flooded with so much traffic that a breakdown of connectivity to the Internet is occurring. Which type of attack is being launched at Ciscoville?",
      "answers": [
        "DoS"
      ]
    },
    {
      "question": "Which two statements describe the characteristics of fiber-optic cabling? (Choose two.)",
      "answers": [
        "Fiber-optic cabling does not conduct electricity.",
        "Fiber-optic cabling is primarily used as backbone cabling."
      ]
    },
    {
      "question": "What OSI physical layer term describes the measure of the transfer of bits across a medium over a given period of time?",
      "answers": [
        "throughput"
      ]
    },
    {
      "question": "Refer to the exhibit. What is the maximum possible throughput between the PC and the server?",
      "answers": [
        "128 kb/s"
      ]
    },
    {
      "question": "Match the description with the media. (Not all options are used.)",
      "answers": [
        "wireless -> This type of media provides the most mobility options.",
        "coaxial -> Traditionally used for television but can now be used in a network to connect the customer location to the wiring of the customer premises.",
        "optical fiber -> This type of media is used for high transmission speed and can also transfer data over long distances.",
        "STP -> This type of copper media is used in industrial or similar environments where there is a lot of interference."
      ]
    },
    {
      "question": "A Wireshark capture is shown with the Transmission Control Protocol section expanded. The item highlighted states Window size: 9017.",
      "answers": [
        "testing the integrity of the TCP/IP stack on the local machine"
      ]
    }
];

const FINAL_EXAM_DB = [
  {
    "question": "Which two traffic types use the Real-Time Transport Protocol (RTP)? (Choose two.)",
    "answers": [
      "video",
      "voice"
    ]
  },
  {
    "question": "Which wireless technology has low-power and data rate requirements making it popular in home automation applications?",
    "answers": [
      "ZigBee"
    ]
  },
  {
    "question": "Which layer of the TCP/IP model provides a route to forward messages through an internetwork?",
    "answers": [
      "internet"
    ]
  },
  {
    "question": "Which type of server relies on record types such as A, NS, AAAA, and MX in order to provide services?",
    "answers": [
      "DNS"
    ]
  },
  {
    "question": "What are proprietary protocols?",
    "answers": [
      "protocols developed by organizations who have control over their definition and operation"
    ]
  },
  {
    "question": "What service is provided by DNS?",
    "answers": [
      "Resolves domain names, such as cisco.com, into IP addresses."
    ]
  },
  {
    "question": "A client packet is received by a server. The packet has a destination port number of 110. What service is the client requesting?",
    "answers": [
      "POP3"
    ]
  },
  {
    "question": "What command can be used on a Windows PC to see the IP configuration of that computer?",
    "answers": [
      "ipconfig"
    ]
  },
  {
    "question": "A wired laser printer is attached to a home computer. That printer has been shared so that other computers on the home network can also use the printer. What networking model is in use?",
    "answers": [
      "peer-to-peer (P2P)"
    ]
  },
  {
    "question": "What characteristic describes a virus?",
    "answers": [
      "malicious software or code running on an end device"
    ]
  },
  {
    "question": "Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?",
    "answers": [
      "audio conference, financial transactions, web page"
    ]
  },
  {
    "question": "Match the description to the IPv6 addressing component. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/2020-03-26_171754.png"
  },
  {
    "question": "Refer to the exhibit. If Host1 were to transfer a file to the server, what layers of the TCP/IP model would be used?",
    "answers": [
      "application, transport, Internet, and network access layers"
    ]
  },
  {
    "question": "Match the characteristic to the forwarding method. (Not all options are used.)",
    "answers": [
      "Cut-through -> Store-and-forward",
      "low latency -> always stores the entire frame",
      "may forward runt frames -> checks the CRC before forwarding",
      "begins forwarding when the destination address is received -> checks the frame length before forwarding"
    ]
  },
  {
    "question": "Refer to the exhibit. The IP address of which device interface should be used as the default gateway setting of host H1?",
    "answers": [
      "R1: G0/0"
    ]
  },
  {
    "question": "What service is provided by Internet Messenger?",
    "answers": [
      "An application that allows real-time chatting among remote users."
    ]
  },
  {
    "question": "Refer to the exhibit. Match the network with the correct IP address and prefix that will satisfy the usable host addressing requirements for each network.",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/i304956v6n1_207918.png"
  },
  {
    "question": "Refer to the exhibit. Which protocol was responsible for building the table that is shown?",
    "answers": [
      "ARP"
    ]
  },
  {
    "question": "A network administrator notices that some newly installed Ethernet cabling is carrying corrupt and distorted data signals. The new cabling was installed in the ceiling close to fluorescent lights and electrical equipment. Which two factors may interfere with the copper cabling and result in signal distortion and data corruption? (Choose two.)",
    "answers": [
      "RFI",
      "EMI"
    ]
  },
  {
    "question": "A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in its ARP cache. How will the device obtain a destination MAC address?",
    "answers": [
      "It will send an ARP request for the MAC address of the default gateway."
    ]
  },
  {
    "question": "A client packet is received by a server. The packet has a destination port number of 53. What service is the client requesting?",
    "answers": [
      "DNS"
    ]
  },
  {
    "question": "A network administrator is adding a new LAN to a branch office. The new LAN must support 25 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
    "answers": [
      "255.255.255.224"
    ]
  },
  {
    "question": "What characteristic describes a Trojan horse?",
    "answers": [
      "malicious software or code running on an end device"
    ]
  },
  {
    "question": "What service is provided by HTTPS?",
    "answers": [
      "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web."
    ]
  },
  {
    "question": "A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?",
    "answers": [
      "The data flow is being tracked based on the source port number that is used by each application."
    ]
  },
  {
    "question": "A network administrator is adding a new LAN to a branch office. The new LAN must support 61 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
    "answers": [
      "255.255.255.192"
    ]
  },
  {
    "question": "Refer to the exhibit. Match the network with the correct IP address and prefix that will satisfy the usable host addressing requirements for each network. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2016/03/i207918v1n1_207918-1-1.jpg"
  },
  {
    "question": "What characteristic describes a DoS attack?",
    "answers": [
      "an attack that slows or crashes a device or network service"
    ]
  },
  {
    "question": "Match the application protocols to the correct transport protocols.",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2023-04-11_151037.jpg"
  },
  {
    "question": "What service is provided by SMTP?",
    "answers": [
      "Allows clients to send email to a mail server and the servers to send email to other servers."
    ]
  },
  {
    "question": "Which scenario describes a function provided by the transport layer?",
    "answers": [
      "A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window."
    ]
  },
  {
    "question": "Refer to the exhibit. Host B on subnet Teachers transmits a packet to host D on subnet Students. Which Layer 2 and Layer 3 addresses are contained in the PDUs that are transmitted from host B to the router?",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/i204796v11n1_204796-TOPOLOGY-ARP.png"
  },
  {
    "question": "What does the term “attenuation” mean in data communication?",
    "answers": [
      "loss of signal strength as distance increases"
    ]
  },
  {
    "question": "Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?",
    "answers": [
      "The administrator must first enter privileged EXEC mode before issuing the command."
    ]
  },
  {
    "question": "Which two protocols operate at the top layer of the TCP/IP protocol suite? (Choose two.)",
    "answers": [
      "POP",
      "DNS"
    ]
  },
  {
    "question": "A company has a file server that shares a folder named Public. The network security policy specifies that the Public folder is assigned Read-Only rights to anyone who can log into the server while the Edit rights are assigned only to the network admin group. Which component is addressed in the AAA network service framework?",
    "answers": [
      "authorization"
    ]
  },
  {
    "question": "What three requirements are defined by the protocols used in network communcations to allow message transmission across a network? (Choose three.)",
    "answers": [
      "message size",
      "message encoding",
      "delivery options"
    ]
  },
  {
    "question": "What are two characteristics of IP? (Choose two.)",
    "answers": [
      "does not require a dedicated end-to-end connection",
      "operates independently of the network media"
    ]
  },
  {
    "question": "An employee of a large corporation remotely logs into the company using the appropriate username and password. The employee is attending an important video conference with a customer concerning a large sale. It is important for the video quality to be excellent during the meeting. The employee is unaware that after a successful login, the connection to the company ISP failed. The secondary connection, however, activated within seconds. The disruption was not noticed by the employee or other employees.\nWhat three network characteristics are described in this scenario? (Choose three.)",
    "answers": [
      "security",
      "quality of service",
      "fault tolerance"
    ]
  },
  {
    "question": "What are two common causes of signal degradation when using UTP cabling? (Choose two.)",
    "answers": [
      "improper termination",
      "low-quality cable or connectors"
    ]
  },
  {
    "question": "Which subnet would include the address 192.168.1.96 as a usable host address?",
    "answers": [
      "192.168.1.64/26"
    ]
  },
  {
    "question": "Refer to the exhibit. On the basis of the output, which two statements about network connectivity are correct? (Choose two.)",
    "answers": [
      "There are 4 hops between this device and the device at 192.168.100.1.",
      "There is connectivity between this device and the device at 192.168.100.1."
    ]
  },
  {
    "question": "Which two statements describe how to assess traffic flow patterns and network traffic types using a protocol analyzer? (Choose two.)",
    "answers": [
      "Capture traffic during peak utilization times to get a good representation of the different traffic types.",
      "Perform the capture on different network segments."
    ]
  },
  {
    "question": "What is the consequence of configuring a router with the ipv6 unicast-routing global configuration command?​",
    "answers": [
      "The IPv6 enabled router interfaces begin sending ICMPv6 Router Advertisement messages."
    ]
  },
  {
    "question": "Which three layers of the OSI model map to the application layer of the TCP/IP model? (Choose three.)",
    "answers": [
      "application",
      "session",
      "presentation"
    ]
  },
  {
    "question": "Refer to the exhibit. If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?",
    "answers": [
      "remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0"
    ]
  },
  {
    "question": "What will happen if the default gateway address is incorrectly configured on a host?",
    "answers": [
      "The host cannot communicate with hosts in other networks."
    ]
  },
  {
    "question": "What are two features of ARP? (Choose two.)",
    "answers": [
      "If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.",
      "If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply."
    ]
  },
  {
    "question": "A network administrator is adding a new LAN to a branch office. The new LAN must support 90 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
    "answers": [
      "255.255.255.128"
    ]
  },
  {
    "question": "What are two ICMPv6 messages that are not present in ICMP for IPv4? (Choose two.)",
    "answers": [
      "Neighbor Solicitation",
      "Router Advertisement"
    ]
  },
  {
    "question": "A client packet is received by a server. The packet has a destination port number of 80. What service is the client requesting?",
    "answers": [
      "HTTP"
    ]
  },
  {
    "question": "What is an advantage for small organizations of adopting IMAP instead of POP?",
    "answers": [
      "Messages are kept in the mail servers until they are manually deleted from the email client."
    ]
  },
  {
    "question": "A technician can ping the IP address of the web server of a remote company but cannot successfully ping the URL address of the same web server. Which software utility can the technician use to diagnose the problem?",
    "answers": [
      "nslookup"
    ]
  },
  {
    "question": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
    "answers": [
      "enables IPv4 and IPv6 to utilize the same physical medium",
      "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
      "handles communication between upper layer networking software and Ethernet NIC hardware",
      "adds Ethernet control information to network protocol data",
      "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
      "adds Ethernet control information to network protocol data",
      "enables IPv4 and IPv6 to utilize the same physical medium",
      "adds Ethernet control information to network protocol data",
      "enables IPv4 and IPv6 to utilize the same physical medium",
      "handles communication between upper layer networking software and Ethernet NIC hardware"
    ]
  },
  {
    "question": "The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect of this command?",
    "answers": [
      "The switch can be remotely managed from a host on another network."
    ]
  },
  {
    "question": "What happens when the transport input ssh command is entered on the switch vty lines?",
    "answers": [
      "Communication between the switch and remote users is encrypted."
    ]
  },
  {
    "question": "Match the type of threat with the cause. (Not all options are used.)",
    "answers": [
      "electrical threats -> voltage spikes, insufficient supply voltage (brownouts), unconditioned power (noise), and total power loss",
      "hardware threats -> physical damage to servers, routers, switches, cabling plant, and workstations",
      "environmental threats -> temperature extremes (too hot or too cold) or humidity extremes (too wet or too dry)",
      "maintenance threats -> poor handling of key electrical components (electrostatic discharge), lack of critical spare parts, poor cabling, and poor labeling"
    ]
  },
  {
    "question": "A disgruntled employee is using some free wireless networking tools to determine information about the enterprise wireless networks. This person is planning on using this information to hack the wireless network. What type of attack is this?",
    "answers": [
      "reconnaissance"
    ]
  },
  {
    "question": "What service is provided by HTTP?",
    "answers": [
      "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web."
    ]
  },
  {
    "question": "A client packet is received by a server. The packet has a destination port number of 67. What service is the client requesting?",
    "answers": [
      "DHCP"
    ]
  },
  {
    "question": "What are two problems that can be caused by a large number of ARP request and reply messages? (Choose two.)",
    "answers": [
      "The ARP request is sent as a broadcast, and will flood the entire subnet.",
      "All ARP request messages must be processed by all nodes on the local network."
    ]
  },
  {
    "question": "A group of Windows PCs in a new subnet has been added to an Ethernet network. When testing the connectivity, a technician finds that these PCs can access local network resources but not the Internet resources. To troubleshoot the problem, the technician wants to initially confirm the IP address and DNS configurations on the PCs, and also verify connectivity to the local router. Which three Windows CLI commands and utilities will provide the necessary information? (Choose three.)",
    "answers": [
      "ping",
      "ipconfig",
      "nslookup"
    ]
  },
  {
    "question": "During the process of forwarding traffic, what will the router do immediately after matching the destination IP address to a network on a directly connected routing table entry?",
    "answers": [
      "switch the packet to the directly connected interface"
    ]
  },
  {
    "question": "What characteristic describes antispyware?",
    "answers": [
      "applications that protect end devices from becoming infected with malicious software"
    ]
  },
  {
    "question": "A network administrator needs to keep the user ID, password, and session contents private when establishing remote CLI connectivity with a switch to manage it. Which access method should be chosen?",
    "answers": [
      "SSH"
    ]
  },
  {
    "question": "What are the two most effective ways to defend against malware? (Choose two.)",
    "answers": [
      "Update the operating system and other application software.",
      "Install and update antivirus software."
    ]
  },
  {
    "question": "Which type of security threat would be responsible if a spreadsheet add-on disables the local software firewall?",
    "answers": [
      "Trojan horse"
    ]
  },
  {
    "question": "Which frame field is created by a source node and used by a destination node to ensure that a transmitted data signal has not been altered by interference, distortion, or signal loss?",
    "answers": [
      "frame check sequence field"
    ]
  },
  {
    "question": "A network administrator is adding a new LAN to a branch office. The new LAN must support 4 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
    "answers": [
      "255.255.255.248"
    ]
  },
  {
    "question": "What service is provided by POP3?",
    "answers": [
      "Retrieves email from the server by downloading the email to the local mail application of the client."
    ]
  },
  {
    "question": "What two security solutions are most likely to be used only in a corporate environment? (Choose two.)",
    "answers": [
      "virtual private networks",
      "intrusion prevention systems"
    ]
  },
  {
    "question": "What characteristic describes antivirus software?",
    "answers": [
      "applications that protect end devices from becoming infected with malicious software"
    ]
  },
  {
    "question": "What mechanism is used by a router to prevent a received IPv4 packet from traveling endlessly on a network?",
    "answers": [
      "It decrements the value of the TTL field by 1 and if the result is 0, it discards the packet and sends a Time Exceeded message to the source host."
    ]
  },
  {
    "question": "A client packet is received by a server. The packet has a destination port number of 69. What service is the client requesting?",
    "answers": [
      "TFTP"
    ]
  },
  {
    "question": "An administrator defined a local user account with a secret password on router R1 for use with SSH. Which three additional steps are required to configure R1 to accept only encrypted SSH connections? (Choose three.)",
    "answers": [
      "Configure the IP domain name on the router.",
      "Generate the SSH keys.",
      "Enable inbound vty SSH sessions."
    ]
  },
  {
    "question": "Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
    "answers": [
      "implements trailer with frame check sequence for error detection",
      "implements a process to delimit fields within an Ethernet 2 frame"
    ]
  },
  {
    "question": "An IPv6 enabled device sends a data packet with the destination address of FF02::2. What is the target of this packet?​",
    "answers": [
      "all IPv6 configured routers on the local link​"
    ]
  },
  {
    "question": "What are the three parts of an IPv6 global unicast address? (Choose three.)",
    "answers": [
      "subnet ID",
      "global routing prefix",
      "interface ID"
    ]
  },
  {
    "question": "A network administrator is designing the layout of a new wireless network. Which three areas of concern should be accounted for when building a wireless network? (Choose three.)",
    "answers": [
      "interference",
      "security",
      "coverage area"
    ]
  },
  {
    "question": "A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?",
    "answers": [
      "Exit privileged EXEC mode and press Enter ."
    ]
  },
  {
    "question": "What method is used to manage contention-based access on a wireless network?",
    "answers": [
      "CSMA/CA"
    ]
  },
  {
    "question": "What is a function of the data link layer?",
    "answers": [
      "provides for the exchange of frames over a common local media"
    ]
  },
  {
    "question": "What is the purpose of the TCP sliding window?",
    "answers": [
      "to request that a source decrease the rate at which it transmits data"
    ]
  },
  {
    "question": "What characteristic describes spyware?",
    "answers": [
      "software that is installed on a user device and collects information about the user"
    ]
  },
  {
    "question": "Which switching method drops frames that fail the FCS check?",
    "answers": [
      "store-and-forward switching"
    ]
  },
  {
    "question": "Which range of link-local addresses can be assigned to an IPv6-enabled interface?",
    "answers": [
      "FE80::/10"
    ]
  },
  {
    "question": "What service is provided by FTP?",
    "answers": [
      "Allows for data transfers between a client and a file server."
    ]
  },
  {
    "question": "A user is attempting to access http://www.cisco.com/ without success. Which two configuration values must be set on the host to allow this access? (Choose two.)",
    "answers": [
      "DNS server",
      "default gateway"
    ]
  },
  {
    "question": "Which two statements accurately describe an advantage or a disadvantage when deploying NAT for IPv4 in a network? (Choose two.)",
    "answers": [
      "NAT introduces problems for some applications that require end-to-end connectivity.",
      "NAT provides a solution to slow down the IPv4 address depletion."
    ]
  },
  {
    "question": "What would be the interface ID of an IPv6 enabled interface with a MAC address of 1C-6F-65-C2-BD-F8 when the interface ID is generated by using the EUI-64 process?",
    "answers": [
      "1E6F:65FF:FEC2:BDF8"
    ]
  },
  {
    "question": "Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC2. In this scenario, what will happen next?",
    "answers": [
      "PC2 will send an ARP reply with the PC2 MAC address."
    ]
  },
  {
    "question": "What service is provided by BOOTP?",
    "answers": [
      "Legacy application that enables a diskless workstation to discover its own IP address and find a BOOTP server on the network."
    ]
  },
  {
    "question": "What characteristic describes adware?",
    "answers": [
      "software that is installed on a user device and collects information about the user"
    ]
  },
  {
    "question": "When a switch configuration includes a user-defined error threshold on a per-port basis, to which switching method will the switch revert when the error threshold is reached?",
    "answers": [
      "store-and-forward"
    ]
  },
  {
    "question": "Match a statement to the related network model. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/2022-05-12_101113.jpg"
  },
  {
    "question": "What are two primary responsibilities of the Ethernet MAC sublayer? (Choose two.)",
    "answers": [
      "accessing the media",
      "data encapsulation"
    ]
  },
  {
    "question": "Refer to the exhibit. What three facts can be determined from the viewable output of the show ip interface brief command? (Choose three.)",
    "answers": [
      "The switch can be remotely managed.",
      "One device is attached to a physical interface.",
      "The default SVI has been configured."
    ]
  },
  {
    "question": "Match each type of frame field to its function. (Not all options are used.)",
    "answers": [
      "addressing -> This field helps to direct the frame toward its destination.",
      "error detection -> This field checks if the frame has been damaged during the transfer.",
      "type -> This field is used by the LLC to identify the Layer 3 protocol.",
      "frame start -> This field identifies the beginning of a frame."
    ]
  },
  {
    "question": "What is the subnet ID associated with the IPv6 address 2001:DA48:FC5:A4:3D1B::1/64?",
    "answers": [
      "2001:DA48:FC5:A4::/64​"
    ]
  },
  {
    "question": "Match the firewall function to the type of threat protection it provides to the network. (Not all options are used.)",
    "answers": [
      "prevents access by port number -> application filtering",
      "prevents access based on IP or MAC address -> packet filtering",
      "prevents unsolicited incoming sessions -> stateful packet inspection",
      "prevents access to websites -> URL filtering"
    ]
  },
  {
    "question": "Users are reporting longer delays in authentication and in accessing network resources during certain time periods of the week. What kind of information should network engineers check to find out if this situation is part of a normal network behavior?",
    "answers": [
      "the network performance baseline"
    ]
  },
  {
    "question": "How does the service password-encryption command enhance password security on Cisco routers and switches?",
    "answers": [
      "It encrypts passwords that are stored in router or switch configuration files."
    ]
  },
  {
    "question": "Which two statements are correct in a comparison of IPv4 and IPv6 packet headers? (Choose two.)",
    "answers": [
      "The Source Address field name from IPv4 is kept in IPv6.",
      "The Time-to-Live field from IPv4 has been replaced by the Hop Limit field in IPv6."
    ]
  },
  {
    "question": "A network administrator wants to have the same network mask for all networks at a particular small site. The site has the following networks and number of devices:\nIP phones – 22 addresses\nPCs – 20 addresses needed\nPrinters – 2 addresses needed\nScanners – 2 addresses needed",
    "answers": [
      "255.255.255.224"
    ]
  },
  {
    "question": "What characteristic describes identity theft?",
    "answers": [
      "the use of stolen credentials to access private data"
    ]
  },
  {
    "question": "A network administrator is adding a new LAN to a branch office. The new LAN must support 200 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
    "answers": [
      "255.255.255.0"
    ]
  },
  {
    "question": "What are three commonly followed standards for constructing and installing cabling? (Choose three.)",
    "answers": [
      "cable lengths",
      "pinouts",
      "connector types"
    ]
  },
  {
    "question": "Refer to the exhibit. What is wrong with the displayed termination?",
    "answers": [
      "The untwisted length of each wire is too long."
    ]
  },
  {
    "question": "Match the characteristic to the category. (Not all options are used.)",
    "answers": [
      "IP address -> MAC address",
      "contained in the Layer 3 header -> contained in the Layer 2 header",
      "separated into a network portion and a unique identifier -> separated into OUI and a unique identifier",
      "32 or 128 bits -> 48 bits"
    ]
  },
  {
    "question": "A client packet is received by a server. The packet has a destination port number of 143. What service is the client requesting?",
    "answers": [
      "IMAP"
    ]
  },
  {
    "question": "What are two characteristics shared by TCP and UDP? (Choose two.)",
    "answers": [
      "port numbering",
      "use of checksum"
    ]
  },
  {
    "question": "Refer to the exhibit. Which two network addresses can be assigned to the network containing 10 hosts? Your answers should waste the fewest addresses, not reuse addresses that are already assigned, and stay within the 10.18.10.0/24 range of addresses. (Choose two.)",
    "answers": [
      "10.18.10.208/28",
      "10.18.10.224/28"
    ]
  },
  {
    "question": "A client packet is received by a server. The packet has a destination port number of 21. What service is the client requesting?",
    "answers": [
      "FTP"
    ]
  },
  {
    "question": "What attribute of a NIC would place it at the data link layer of the OSI model?",
    "answers": [
      "MAC address"
    ]
  },
  {
    "question": "A network administrator is adding a new LAN to a branch office. The new LAN must support 10 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
    "answers": [
      "255.255.255.240"
    ]
  },
  {
    "question": "What technique is used with UTP cable to help protect against signal interference from crosstalk?",
    "answers": [
      "twisting the wires together into pairs"
    ]
  },
  {
    "question": "Refer to the exhibit. The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?",
    "answers": [
      "IP address: 192.168.10.38 subnet mask: 255.255.255.248, default gateway: 192.168.10.33"
    ]
  },
  {
    "question": "Refer to the exhibit. The switches are in their default configuration. Host A needs to communicate with host D, but host A does not have the MAC address for its default gateway. Which network hosts will receive the ARP request sent by host A?",
    "answers": [
      "only hosts B, C, and router R1"
    ]
  },
  {
    "question": "Match a statement to the related network model. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/2022-05-12_101113.jpg"
  },
  {
    "question": "Refer to the exhibit. A network engineer has been given the network address of 192.168.99.0 and a subnet mask of 255.255.255.192 to subnet across the four networks shown. How many total host addresses are unused across all four subnets?",
    "answers": [
      "200"
    ]
  },
  {
    "question": "Which connector is used with twisted-pair cabling in an Ethernet LAN?",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/06/i192179v1n1_LC-connector.png"
  },
  {
    "question": "A client packet is received by a server. The packet has a destination port number of 22. What service is the client requesting?",
    "answers": [
      "SSH"
    ]
  },
  {
    "question": "What characteristic describes an IPS?",
    "answers": [
      "software that identifies fast-spreading threats"
    ]
  },
  {
    "question": "What service is provided by DHCP?",
    "answers": [
      "Dynamically assigns IP addresses to end and intermediary devices."
    ]
  },
  {
    "question": "Match the header field with the appropriate layer of the OSI model. (Not all options are used.)",
    "answers": [
      "Layer 2 -> Layer 3",
      "802.2 header -> source IP address",
      "FCS (frame check sequence) -> TTL"
    ]
  },
  {
    "question": "Refer to the exhibit. The switches have a default configuration. Host A needs to communicate with host D, but host A does not have the MAC address for the default gateway. Which network devices will receive the ARP request sent by host A?",
    "answers": [
      "only hosts B, C, and router R1"
    ]
  },
  {
    "question": "Which wireless technology has low-power and low-data rate requirements making it popular in IoT environments?",
    "answers": [
      "Zigbee"
    ]
  },
  {
    "question": "What two ICMPv6 message types must be permitted through IPv6 access control lists to allow resolution of Layer 3 addresses to Layer 2 MAC addresses? (Choose two.)",
    "answers": [
      "neighbor solicitations",
      "neighbor advertisements"
    ]
  },
  {
    "question": "A client is using SLAAC to obtain an IPv6 address for its interface. After an address has been generated and applied to the interface, what must the client do before it can begin to use this IPv6 address?",
    "answers": [
      "It must send an ICMPv6 Neighbor Solicitation message to ensure that the address is not already in use on the network."
    ]
  },
  {
    "question": "Two pings were issued from a host on a local network. The first ping was issued to the IP address of the default gateway of the host and it failed. The second ping was issued to the IP address of a host outside the local network and it was successful. What is a possible cause for the failed ping?",
    "answers": [
      "Security rules are applied to the default gateway device, preventing it from processing ping requests."
    ]
  },
  {
    "question": "An organization is assigned an IPv6 address block of 2001:db8:0:ca00::/56. How many subnets can be created without using bits in the interface ID space?",
    "answers": [
      "256"
    ]
  },
  {
    "question": "What subnet mask is needed if an IPv4 network has 40 devices that need IP addresses and address space is not to be wasted?",
    "answers": [
      "255.255.255.192"
    ]
  },
  {
    "question": "Refer to the exhibit. If host A sends an IP packet to host B, what will the destination address be in the frame when it leaves host A?",
    "answers": [
      "BB:BB:BB:BB:BB:BB"
    ]
  },
  {
    "question": "What is a benefit of using cloud computing in networking?",
    "answers": [
      "Network capabilities are extended without requiring investment in new infrastructure, personnel, or software."
    ]
  },
  {
    "question": "Which two statements are correct about MAC and IP addresses during data transmission if NAT is not involved? (Choose two.)",
    "answers": [
      "Destination IP addresses in a packet header remain constant along the entire path to a target host.",
      "Destination and source MAC addresses have local significance and change every time a frame goes from one LAN to another."
    ]
  },
  {
    "question": "What is one main characteristic of the data link layer?",
    "answers": [
      "It shields the upper layer protocol from being aware of the physical medium to be used in the communication."
    ]
  },
  {
    "question": "What are three characteristics of the CSMA/CD process? (Choose three.)",
    "answers": [
      "A device listens and waits until the media is not busy before transmitting.",
      "After detecting a collision, hosts can attempt to resume transmission after a random time delay has expired.",
      "All of the devices on a segment see data that passes on the network medium."
    ]
  },
  {
    "question": "Which information does the show startup-config command display?",
    "answers": [
      "the contents of the saved configuration file in the NVRAM"
    ]
  },
  {
    "question": "Which two commands can be used on a Windows host to display the routing table? (Choose two.)",
    "answers": [
      "route print",
      "netstat -r"
    ]
  },
  {
    "question": "What are two functions that are provided by the network layer? (Choose two.)",
    "answers": [
      "directing data packets to destination hosts on other networks",
      "providing end devices with a unique network identifier"
    ]
  },
  {
    "question": "Which two statements describe features of an IPv4 routing table on a router? (Choose two.)​",
    "answers": [
      "It stores information about routes derived from the active router interfaces.",
      "If a default static route is configured in the router, an entry will be included in the routing table with source code S .",
      "The routing table stores information about routes derived from the active router interfaces.",
      "If a default static route is configured in the router, an entry will be included in the routing table with source code S"
    ]
  },
  {
    "question": "What characteristic describes a VPN?",
    "answers": [
      "a tunneling protocol that provides remote users with secure access into the network of an organization"
    ]
  },
  {
    "question": "Why would a Layer 2 switch need an IP address?",
    "answers": [
      "to enable the switch to be managed remotely"
    ]
  },
  {
    "question": "Match each description to its corresponding term. (Not all options are used.)",
    "answers": [
      "message encapsulation -> the process of placing one message format inside another message format",
      "message sizing -> the process of breaking up a long message into individual pieces before being sent over the network",
      "message encoding -> the process of converting information from one format into another acceptable for transmission"
    ]
  },
  {
    "question": "A user sends an HTTP request to a web server on a remote network. During encapsulation for this request, what information is added to the address field of a frame to indicate the destination?",
    "answers": [
      "the MAC address of the default gateway"
    ]
  },
  {
    "question": "What is an advantage to using a protocol that is defined by an open standard?",
    "answers": [
      "It encourages competition and promotes choices."
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
    "question": "Match each description with the corresponding TCP mechanism. (Not all options are used.)",
    "answers": [
      "number of bytes a destination device can accept and process at one time -> window size",
      "used to identify missing segments of data -> sequence numbers",
      "method of managing segments of data loss -> retransmission",
      "received by a sender before transmitting more segments in a session -> acknowledgment"
    ]
  },
  {
    "question": "Refer to the exhibit. A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?",
    "answers": [
      "255.255.255.128"
    ]
  },
  {
    "question": "A network administrator wants to have the same subnet mask for three subnetworks at a small site. The site has the following networks and numbers of devices:",
    "answers": [
      "255.255.255.240"
    ]
  },
  {
    "question": "Match each item to the type of topology diagram on which it is typically identified. (Not all options are used.)",
    "answers": [
      "physical topology diagram -> logical topology diagram",
      "location of a desktop PC in a classroom -> IP address of a server"
    ]
  },
  {
    "question": "What two pieces of information are displayed in the output of the show ip interface brief command? (Choose two.)",
    "answers": [
      "IP addresses",
      "Layer 1 statuses"
    ]
  },
  {
    "question": "A user is complaining that an external web page is taking longer than normal to load.The web page does eventually load on the user machine. Which tool should the technician use with administrator privileges in order to locate where the issue is in the network?",
    "answers": [
      "tracert"
    ]
  },
  {
    "question": "Which value, that is contained in an IPv4 header field, is decremented by each router that receives a packet?",
    "answers": [
      "Time-to-Live"
    ]
  },
  {
    "question": "A network technician is researching the use of fiber optic cabling in a new technology center. Which two issues should be considered before implementing fiber optic media? (Choose two.)",
    "answers": [
      "Fiber optic cabling requires different termination and splicing expertise from what copper cabling requires.",
      "Fiber optic provides higher data capacity but is more expensive than copper cabling."
    ]
  },
  {
    "question": "Match each description with an appropriate IP address. (Not all options are used.)",
    "answers": [
      "an experimental address -> 240.2.6.255",
      "a link-local address -> 169.254.1.5",
      "a public address -> 198.133.219.2",
      "a loopback address -> 127.0.0.1"
    ]
  },
  {
    "question": "A user is executing a tracert to a remote device. At what point would a router, which is in the path to the destination device, stop forwarding the packet?",
    "answers": [
      "when the value in the TTL field reaches zero"
    ]
  },
  {
    "question": "Users report that the network access is slow. After questioning the employees, the network administrator learned that one employee downloaded a third-party scanning program for the printer. What type of malware might be introduced that causes slow performance of the network?",
    "answers": [
      "worm"
    ]
  }
];