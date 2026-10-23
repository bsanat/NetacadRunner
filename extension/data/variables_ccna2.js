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

const QUIZ_DB = {
    "1.6.4": [
      {
        "question": "Which tasks can be accomplished by using the command history feature? (Choose two.)",
        "answers": [
          "Set the command history buffer size.",
          "Recall previously entered commands."
        ]
      },
      {
        "question": "Which statement describes the system LED operation on Cisco Catalyst switches? (Choose two.)",
        "answers": [
          "If the LED is amber, the system is receiving power but it is not functioning properly.",
          "If the LED is blinking green, the system is operating normally."
        ]
      },
      {
        "question": "What type of Ethernet cable would be used to connect one switch to another switch when neither switch supports the auto-MDIX feature?",
        "answers": [
          "crossover"
        ]
      },
      {
        "question": "What advantage does SSH offer over Telnet?",
        "answers": [
          "encryption"
        ]
      },
      {
        "question": "A network administrator has configured ​VLAN 99 as the management VLAN and has configured it with an IP address and subnet mask. The administrator issues the show interface vlan 99 command and notices that the line protocol is down. Which action can change the state of the line protocol to up?",
        "answers": [
          "Connect a host to an interface associated with VLAN 99."
        ]
      },
      {
        "question": "Which statement describes SVIs?",
        "answers": [
          "A default SVI is created for VLAN 1 for switch administration."
        ]
      },
      {
        "question": "Which prompt is displayed when a network administrator successfully accesses the boot loader on a switch to recover from a system crash?",
        "answers": [
          "switch:"
        ]
      },
      {
        "question": "Which router bootup sequence is correct?​",
        "answers": [
          "1 – perform the POST and load the bootstrap program\n2 – locate and load the Cisco IOS software\n3 – locate and load the startup configuration file or enter setup mode"
        ]
      },
      {
        "question": "What is the first action in the boot sequence when a switch is powered on?",
        "answers": [
          "load a power-on self-test program"
        ]
      },
      {
        "question": "What must an administrator have in order to reset a lost password on a router?",
        "answers": [
          "physical access to the router"
        ]
      },
      {
        "question": "When configuring a switch for SSH access, what other command that is associated with the login local command is required to be entered on the switch?",
        "answers": [
          "username username secret secret"
        ]
      },
      {
        "question": "Which command will provide information about the status of all interfaces including the number of giants, runts, and collisions on the interface?",
        "answers": [
          "show interfaces"
        ]
      },
      {
        "question": "Which interface is used by default to manage a Cisco Catalyst 2960 switch?",
        "answers": [
          "The VLAN 1 interface"
        ]
      },
      {
        "question": "A production switch is reloaded and finishes with a Switch> prompt. What two facts can be determined? (Choose two.)",
        "answers": [
          "A full version of the Cisco IOS was located and loaded.",
          "POST occurred normally."
        ]
      },
      {
        "question": "Which two statements are true about using full-duplex Fast Ethernet? (Choose two.)",
        "answers": [
          "Full-duplex Fast Ethernet offers 100 percent efficiency in both directions.",
          "Performance is improved with bidirectional data flow."
        ]
      },
      {
        "question": "Which statement describes the port speed LED on the Cisco Catalyst 2960 switch?",
        "answers": [
          "If the LED is green, the port is operating at 100 Mbps."
        ]
      },
      {
        "question": "What is a function of the switch boot loader?",
        "answers": [
          "To provide an environment to operate in when the switch operating system cannot be found"
        ]
      },
      {
        "question": "In which situation would a technician use the show interfaces command?",
        "answers": [
          "When packets are being dropped from a particular directly attached host"
        ]
      },
      {
        "question": "What is one difference between using Telnet or SSH to connect to a network device for management purposes?",
        "answers": [
          "Telnet sends a username and password in plain text, whereas SSH encrypts the username and password."
        ]
      },
      {
        "question": "What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?",
        "answers": [
          "It is a logical interface internal to the router."
        ]
      },
      {
        "question": "What two pieces of information are displayed in the output of the show ip interface brief command? (Choose two.)",
        "answers": [
          "Interface descriptions",
          "IPv4 addresses"
        ]
      },
      {
        "question": "What type of cable would be used to connect a router to a switch when neither supports the auto-MDIX feature?",
        "answers": [
          "Straight-through"
        ]
      },
      {
        "question": "Which statement regarding a loopback interface is true?",
        "answers": [
          "It is an internal virtual interface used for testing purposes."
        ]
      },
      {
        "question": "You are implementing remote access to the VTY lines of a switch using SSH and the login local line vty command. Which other command must be entered to avoid being locked out of the switch?",
        "answers": [
          "username username secret password"
        ]
      }
    ],
    "2.3.2": [
      {
        "question": "Which statement is true about broadcast and collision domains?",
        "answers": [
          "Adding a switch to a network will increase the size of the broadcast domain."
        ]
      },
      {
        "question": "What is one function of a Layer 2 switch?",
        "answers": [
          "determines which interface is used to forward a frame based on the destination MAC address"
        ]
      },
      {
        "question": "What is the significant difference between a hub and a Layer 2 LAN switch?",
        "answers": [
          "A switch creates many smaller collision domains, and a hub increases the size of a single collision domain."
        ]
      },
      {
        "question": "What will a Cisco LAN switch do if it receives an incoming frame and the destination MAC address is not listed in the MAC address table?",
        "answers": [
          "Forward the frame out all ports except the port where the frame is received."
        ]
      },
      {
        "question": "Which switch characteristic helps alleviate network congestion when a 10 Gbps port is forwarding data to a 1 Gbps port?",
        "answers": [
          "frame buffering"
        ]
      },
      {
        "question": "Which switching method makes use of the FCS value?",
        "answers": [
          "store-and-forward"
        ]
      },
      {
        "question": "What does the term “port density” represent for an Ethernet switch?",
        "answers": [
          "the number of available ports"
        ]
      },
      {
        "question": "Which information does a switch use to keep the MAC address table information current?",
        "answers": [
          "the source MAC address and the incoming port"
        ]
      },
      {
        "question": "Which two statements are true about half-duplex and full-duplex communications? (Choose two.)",
        "answers": [
          "Full duplex increases the effective bandwidth.",
          "Full duplex allows both ends to transmit and receive simultaneously."
        ]
      },
      {
        "question": "Which type of address does a switch use to build the MAC address table?",
        "answers": [
          "source MAC address"
        ]
      },
      {
        "question": "Which option correctly describes a switching method?",
        "answers": [
          "store-and-forward: ensures that the frame is free of physical and data-link errors"
        ]
      },
      {
        "question": "Which network device can serve as a boundary to divide a Layer 2 broadcast domain?",
        "answers": [
          "router"
        ]
      },
      {
        "question": "What is the purpose of frame buffers on a switch?",
        "answers": [
          "They hold traffic, thus alleviating network congestion."
        ]
      },
      {
        "question": "Which network device can be used to eliminate collisions on an Ethernet network?",
        "answers": [
          "switch"
        ]
      },
      {
        "question": "What criteria is used by a Cisco LAN switch to decide how to forward Ethernet frames?",
        "answers": [
          "Destination MAC address"
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
        "question": "A switch has received a frame on an ingress port. What will the switch do if the unicast destination MAC address is in the MAC address table?",
        "answers": [
          "It will forward the frame out of the specified port in the MAC address table."
        ]
      },
      {
        "question": "A switch has received a frame on an ingress port. What will the switch do if the unicast destination MAC address is not in the MAC address table?",
        "answers": [
          "It will forward the frame out all ports except the incoming port."
        ]
      },
      {
        "question": "A switch has received a frame on an ingress port. What will the switch do if the destination MAC address is a broadcast address?",
        "answers": [
          "It will forward the frame out all ports except the incoming port."
        ]
      },
      {
        "question": "Which switching method forwards the frame immediately after examining the destination MAC address?",
        "answers": [
          "Cut-though"
        ]
      },
      {
        "question": "Which statement about half-duplex and full-duplex communication is true?",
        "answers": [
          "Full-duplex communication is bidirectional."
        ]
      }
    ],
    "3.6.4": [
      {
        "question": "What happens to a port that is associated with VLAN 10 when the administrator deletes VLAN 10 from the switch?",
        "answers": [
          "The port becomes inactive."
        ]
      },
      {
        "question": "In which memory location are the VLAN configurations of normal range VLANs stored on a Catalyst switch?",
        "answers": [
          "flash"
        ]
      },
      {
        "question": "An administrator is investigating a failure on a trunk link between a Cisco switch and a switch from another vendor. After a few show commands, the administrator notices that the switches are not negotiating a trunk. What is a probable cause for this issue?",
        "answers": [
          "Switches from other vendors do not support DTP."
        ]
      },
      {
        "question": "What is the purpose of the vlan.dat file on a switch?",
        "answers": [
          "It holds the VLAN database."
        ]
      },
      {
        "question": "What is the purpose of setting the native VLAN separate from data VLANs?",
        "answers": [
          "A separate VLAN should be used to carry uncommon untagged frames to avoid bandwidth contention on data VLANS."
        ]
      },
      {
        "question": "When a Cisco switch receives untagged frames on a 802.1Q trunk port, which VLAN ID is the traffic switched to by default?",
        "answers": [
          "native VLAN ID"
        ]
      },
      {
        "question": "A network administrator is determining the best placement of VLAN trunk links. Which two types of point-to-point connections utilize VLAN trunking?​ (Choose two.)",
        "answers": [
          "between two switches that utilize multiple VLANs",
          "between a switch and a server that has an 802.1Q NIC"
        ]
      },
      {
        "question": "What are three primary benefits of using VLANs? (Choose three.)",
        "answers": [
          "security",
          "cost reduction",
          "improved IT staff efficiency"
        ]
      },
      {
        "question": "On a Cisco switch, where is extended range VLAN information stored?",
        "answers": [
          "running configuration file"
        ]
      },
      {
        "question": "In which location are the normal range VLANs stored on a Cisco switch by default?",
        "answers": [
          "flash memory"
        ]
      },
      {
        "question": "Which distinct type of VLAN is used by an administrator to access and configure a switch?",
        "answers": [
          "management VLAN"
        ]
      },
      {
        "question": "For what reason would a network administrator use the show interfaces trunk command on a switch?",
        "answers": [
          "to view the native VLAN"
        ]
      },
      {
        "question": "Where is the vlan.dat file stored on a switch?",
        "answers": [
          "in flash memory"
        ]
      },
      {
        "question": "If an organization is changing to include Cisco IP phones in its network, what design feature must be considered to ensure voice quality?",
        "answers": [
          "A separate VLAN is needed for voice traffic."
        ]
      },
      {
        "question": "A Cisco switch currently allows traffic tagged with VLANs 10 and 20 across trunk port Fa0/5. What is the effect of issuing a switchport trunk allowed vlan 30 command on Fa0/5?",
        "answers": [
          "It allows only VLAN 30 on Fa0/5."
        ]
      },
      {
        "question": "Which three statements accurately describe VLAN types? (Choose three).",
        "answers": [
          "A management VLAN is any VLAN that is configured to access management features of the switch.",
          "After the initial boot of an unconfigured switch, all ports are members of the default VLAN.",
          "An 802.1Q trunk port, with a native VLAN assigned, supports both tagged and untagged traffic."
        ]
      },
      {
        "question": "Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port?",
        "answers": [
          "Native"
        ]
      },
      {
        "question": "What are two primary benefits of using VLANs? (Choose two.)",
        "answers": [
          "Cost reduction",
          "Improved IT staff efficiency"
        ]
      },
      {
        "question": "Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?",
        "answers": [
          "show interfaces Fa0/1 switchport"
        ]
      },
      {
        "question": "What must the network administrator do to remove FastEthernet 0/1 from VLAN 2 and assign it to VLAN 3?",
        "answers": [
          "Enter the switchport access vlan 3 interface config command on Fa0/1."
        ]
      },
      {
        "question": "A Cisco Catalyst switch has been added to support the use of multiple VLANs as part of an enterprise network. The network technician finds it necessary to clear all VLAN information from the switch in order to incorporate a new network design. What should the technician do to accomplish this task?",
        "answers": [
          "Delete the startup configuration and the vlan.dat file in the flash memory of the switch and reboot the switch."
        ]
      },
      {
        "question": "Which two characteristics match extended range VLANs? (Choose two.)",
        "answers": [
          "They are saved in the running-config file by default.",
          "VLAN IDs exist between 1006 to 4094."
        ]
      },
      {
        "question": "What happens to switch ports after the VLAN to which they are assigned is deleted?",
        "answers": [
          "The ports stop communicating with the attached devices."
        ]
      },
      {
        "question": "You must configure a trunk link between a Cisco Catalyst 2960 switch to another vendor Layer 2 switch. Which two commands should be configured to enable the trunk link? (Choose two.)",
        "answers": [
          "switchport mode trunk",
          "switchport nonegotiate"
        ]
      }
    ],
    "4.5.4": [
      {
        "question": "A PC is to access a web server on another network. Which inter-VLAN method will provide the highest bandwidth at Layer 3 and also provide a default gateway for the PC?",
        "answers": [
          "multilayer switch with routing enabled"
        ]
      },
      {
        "question": "Which scalable method must be implemented in order to provide inter-VLAN routing on a switched network with more than 1000 VLANs?",
        "answers": [
          "routing traffic internally to a Layer 3 switch device"
        ]
      },
      {
        "question": "When configuring a router as part of a router-on-a-stick inter-VLAN routing topology, where should the IP address be assigned?",
        "answers": [
          "to the subinterface"
        ]
      },
      {
        "question": "A small college uses VLAN 10 for the classroom network and VLAN 20 for the office network. What is needed to enable communication between these two VLANs while using legacy inter-VLAN routing?",
        "answers": [
          "A router with at least two LAN interfaces should be used."
        ]
      },
      {
        "question": "What is a disadvantage of using multilayer switches for inter-VLAN routing?",
        "answers": [
          "Multilayer switches are more expensive than router-on-a-stick implementations."
        ]
      },
      {
        "question": "Which type of inter-VLAN communication design requires the configuration of multiple subinterfaces?",
        "answers": [
          "router on a stick"
        ]
      },
      {
        "question": "What is a disadvantage of using router-on-a-stick inter-VLAN routing?",
        "answers": [
          "does not scale well beyond 50 VLANs"
        ]
      },
      {
        "question": "What is the meaning of the number 10 in the encapsulation dot1Q 10 native router subinterface command?​",
        "answers": [
          "the VLAN ID"
        ]
      },
      {
        "question": "While configuring inter-VLAN routing on a multilayer switch, a network administrator issues the no switchport command on an interface that is connected to another switch. What is the purpose of this command?",
        "answers": [
          "to create a routed port for a single network"
        ]
      },
      {
        "question": "A network administrator enters the following command sequence on a Cisco 3560 switch. What is the purpose of these commands?",
        "answers": [
          "to make the Gi0/1 port a routed port"
        ]
      },
      {
        "question": "What operational mode should be used on a switch port to connect it to a router for router-on-a-stick inter-VLAN routing?",
        "answers": [
          "trunk"
        ]
      },
      {
        "question": "Which sentence correctly describes the SVI inter-VLAN routing method?",
        "answers": [
          "An SVI is needed for each VLAN."
        ]
      },
      {
        "question": "How is traffic routed between multiple VLANs on a multilayer switch?",
        "answers": [
          "Traffic is routed via internal VLAN interfaces."
        ]
      },
      {
        "question": "What is required to perform router-on-a-stick inter-VLAN routing?",
        "answers": [
          "a router that is configured with multiple subinterfaces"
        ]
      },
      {
        "question": "An administrator was troubleshooting a router-on-a-stick topology and concluded that the problem was related to the configuration of VLANs on the router subinterfaces. Which two commands can the administrator use in the router to identify the problem? (Choose two.)",
        "answers": [
          "show ip interface",
          "show running-config"
        ]
      },
      {
        "question": "A router has two FastEthernet interfaces and needs to connect to four VLANs in the local network. How can this be accomplished using the fewest number of physical interfaces without unnecessarily decreasing network performance?",
        "answers": [
          "Implement a router-on-a-stick configuration."
        ]
      },
      {
        "question": "What distinguishes traditional legacy inter-VLAN routing from router-on-a-stick?",
        "answers": [
          "Traditional routing uses one port per logical network, whereas a router-on-a-stick uses subinterfaces to connect multiple logical networks to a single router port."
        ]
      },
      {
        "question": "Subinterface G0/1.10 on R1 must be configured as the default gateway for the VLAN 10 192.168.10.0/24 network. Which command should be configured on the subinterface to enable inter-VLAN routing for VLAN 10?",
        "answers": [
          "encapsulation dot1q 10"
        ]
      },
      {
        "question": "What is important to consider while configuring the subinterfaces of a router when implementing inter-VLAN routing?",
        "answers": [
          "The IP address of each subinterface must be the default gateway address for each VLAN subnet."
        ]
      },
      {
        "question": "What are the steps that must be completed in order to enable inter-VLAN routing using router-on-a-stick?",
        "answers": [
          "Create the VLANs on the switch to include port membership assignment and configure subinterfaces on the router matching the VLANs."
        ]
      },
      {
        "question": "What two statements are true regarding the use of subinterfaces for inter-VLAN routing? (Choose two.)",
        "answers": [
          "Fewer router Ethernet ports required than in traditional inter-VLAN routing",
          "Less complex physical connection than in traditional inter-VLAN routing"
        ]
      },
      {
        "question": "Which router-on-a-stick command and prompt on R1 correctly encapsulates 802.1Q traffic for VLAN 20?",
        "answers": [
          "R1(config-subif)# encapsulation dot1q 20"
        ]
      },
      {
        "question": "What are two disadvantages of using the router-on-a-stick inter-VLAN routing method in a large network? (Choose two.)",
        "answers": [
          "A dedicated router is required.",
          "It does not scale well."
        ]
      },
      {
        "question": "What is a characteristic of a routed port on a Layer 3 switch? (Choose two.)",
        "answers": [
          "It requires the switchport mode access interface config command.",
          "It requires the no switchport interface config command."
        ]
      },
      {
        "question": "What are two advantages of using a Layer 3 switch with SVIs for inter-VLAN routing? (Choose two.)",
        "answers": [
          "A router is not required.",
          "It switches packets faster than using the router-on-a-stick method."
        ]
      }
    ],
    "5.4.2": [
      {
        "question": "Which port state will switch ports immediately transition to when configured for PortFast?",
        "answers": [
          "forwarding"
        ]
      },
      {
        "question": "After the election of the root bridge has been completed, how will switches find the best paths to the root bridge?",
        "answers": [
          "Each switch will analyze the sum of all port costs to reach the root and use the path with the lowest cost."
        ]
      },
      {
        "question": "Which is the default STP operation mode on Cisco Catalyst switches?",
        "answers": [
          "PVST+"
        ]
      },
      {
        "question": "What value determines the root bridge when all switches connected by trunk links have default STP configurations?",
        "answers": [
          "MAC address"
        ]
      },
      {
        "question": "During the implementation of Spanning Tree Protocol, all switches are rebooted by the network administrator. What is the first step of the spanning-tree election process?",
        "answers": [
          "All the switches send out BPDUs advertising themselves as the root bridge."
        ]
      },
      {
        "question": "Which two concepts relate to a switch port that is intended to have only end devices attached and intended never to be used to connect to another switch? (Choose two.)",
        "answers": [
          "PortFast",
          "edge port"
        ]
      },
      {
        "question": "Which three port states are used by Rapid PVST+? (Choose three.)",
        "answers": [
          "learning",
          "forwarding",
          "discarding"
        ]
      },
      {
        "question": "When PVST is running over a switched network, which port state can participate in BPDU frame forwarding based on BPDUs received, but does not forward data frames?",
        "answers": [
          "listening"
        ]
      },
      {
        "question": "Which STP port role is adopted by a switch port if there is no other port with a lower cost to the root bridge?",
        "answers": [
          "root port"
        ]
      },
      {
        "question": "Which two statements describe a switch port that is configured with PortFast? (Choose two.)",
        "answers": [
          "The switch port immediately transitions from blocking to the forwarding state.",
          "The switch port should never receive BPDUs."
        ]
      },
      {
        "question": "What is one way to correct a spanning tree failure?",
        "answers": [
          "Manually remove redundant links in the switched network."
        ]
      },
      {
        "question": "What additional information is contained in the 12-bit extended system ID of a BPDU?",
        "answers": [
          "VLAN ID"
        ]
      },
      {
        "question": "An administrator is troubleshooting a switch and wants to verify if it is a root bridge. What command can be used to do this?",
        "answers": [
          "show spanning-tree"
        ]
      },
      {
        "question": "What is an accurate description of redundancy?",
        "answers": [
          "designing a network to use multiple paths between switches to ensure there is no single point of failure"
        ]
      },
      {
        "question": "Which three components are combined to form a bridge ID? (Choose three.)",
        "answers": [
          "Bridge priority",
          "Extended system ID",
          "MAC address"
        ]
      },
      {
        "question": "What is an advantage of PVST+?",
        "answers": [
          "PVST+ optimizes performance on the network through load sharing using multiple root bridges."
        ]
      },
      {
        "question": "In which two port states does a switch learn MAC addresses and process BPDUs in a PVST network? (Choose two.)",
        "answers": [
          "Forwarding",
          "Learning"
        ]
      },
      {
        "question": "What two features does Spanning Tree Protocol (STP) provide to ensure proper network operations? (Choose two.)",
        "answers": [
          "Redundant links between Layer 2 switches",
          "Removing single points of failure with multiple Layer 2 switches"
        ]
      },
      {
        "question": "Which PVST+ feature ensures that configured switch edge ports do not cause Layer 2 loops if a port is mistakenly connected to another switch?",
        "answers": [
          "BPDU guard"
        ]
      },
      {
        "question": "What is an advantage of using STP in a LAN?",
        "answers": [
          "It temporarily disables redundant paths to stop Layer 2 loops."
        ]
      },
      {
        "question": "Which two statements regarding a PortFast enabled switch port are true? (Choose two.)",
        "answers": [
          "The port immediately transitions from blocking to forwarding state.",
          "The port should never receive BPDUs."
        ]
      }
    ],
    "6.4.4": [
      {
        "question": "An EtherChannel link using LACP was formed between two switches, S1 and S2. While verifying the configuration, which mode combination could be utilized on both switches?​",
        "answers": [
          "S1-passive and S2-active"
        ]
      },
      {
        "question": "When a range of ports is being configured for EtherChannel, which mode will configure PAgP so that it initiates the EtherChannel negotiation?",
        "answers": [
          "desirable"
        ]
      },
      {
        "question": "Which three interface parameters must match for an EtherChannel to form? (Choose three.)",
        "answers": [
          "allowed VLANs",
          "native VLAN",
          "trunking mode"
        ]
      },
      {
        "question": "What are three advantages of using EtherChannel technology? (Choose three.)",
        "answers": [
          "Configuration tasks can be done on the EtherChannel interface.",
          "A spanning tree recalculation is not required when a single link within the channel goes down.",
          "There is no need to upgrade links to faster connections to increase bandwidth."
        ]
      },
      {
        "question": "A network administrator is configuring an EtherChannel link between two physical ports on a switch. Which statement describes the result when one of the physical ports fails?",
        "answers": [
          "The EtherChannel continues transmitting data with reduced bandwidth."
        ]
      },
      {
        "question": "When EtherChannel is implemented, multiple physical interfaces are bundled into which type of logical connection?",
        "answers": [
          "port channel"
        ]
      },
      {
        "question": "When a range of ports is being configured for EtherChannel by the use of PAgP, which mode will form the bundled channel only if the port receives PAgP packets from another device?",
        "answers": [
          "auto"
        ]
      },
      {
        "question": "Which two load balancing methods can be implemented with EtherChannel technology? (Choose two.)",
        "answers": [
          "source IP to destination IP",
          "source MAC to destination MAC"
        ]
      },
      {
        "question": "Which function is provided by EtherChannel?",
        "answers": [
          "creating one logical link by using multiple physical links between two LAN switches"
        ]
      },
      {
        "question": "Which statement is true about EtherChannel technology?",
        "answers": [
          "EtherChannel uses existing switch ports."
        ]
      },
      {
        "question": "Which two mode combinations would result in the successful negotiation of an EtherChannel? (Choose two.)",
        "answers": [
          "desirable; desirable",
          "active; passive"
        ]
      },
      {
        "question": "Which two protocols are link aggregation protocols? (Choose two.)",
        "answers": [
          "PAgP",
          "802.3ad"
        ]
      },
      {
        "question": "When a range of ports is being configured for EtherChannel, which mode will configure LACP so that it initiates the EtherChannel negotiation?",
        "answers": [
          "active"
        ]
      },
      {
        "question": "What will happen if a network administrator puts a port that is part of an EtherChannel bundle into a different VLAN than the other ports in that bundle?",
        "answers": [
          "The EtherChannel will fail."
        ]
      },
      {
        "question": "When a range of ports is being configured for EtherChannel, which mode will configure LACP on a port only if the port receives LACP packets from another device?",
        "answers": [
          "passive"
        ]
      },
      {
        "question": "There has been an increase in network traffic between two Catalyst 2960 switches, and their FastEthernet trunk link has reached its capacity. How can traffic flow be improved?",
        "answers": [
          "Bundle physical ports using EtherChannel."
        ]
      },
      {
        "question": "Which statement is true regarding the use of PAgP to create EtherChannels?",
        "answers": [
          "It is Cisco proprietary."
        ]
      },
      {
        "question": "Which combination of channel-group modes will establish an EtherChannel?",
        "answers": [
          "Switch 1 set to desirable; switch 2 set to desirable."
        ]
      },
      {
        "question": "Which interface configuration command will enable the port to initiate an LACP EtherChannel?",
        "answers": [
          "channel-group mode active"
        ]
      },
      {
        "question": "Which interface configuration command will enable the port to establish an EtherChannel only if it receives PAgP packets from the other switch?",
        "answers": [
          "channel-group mode auto"
        ]
      },
      {
        "question": "Which statement describes a characteristic of EtherChannel?",
        "answers": [
          "It is made by combining multiple physical links that are seen as one link between two switches."
        ]
      },
      {
        "question": "What are two advantages of using LACP? (Choose two.)",
        "answers": [
          "LACP allows automatic formation of EtherChannel links.",
          "LACP allows use of multivendor devices."
        ]
      },
      {
        "question": "Which three settings must match in order for switch ports to form an EtherChannel? (Choose three.)",
        "answers": [
          "Non-trunk ports must belong to the same VLAN.",
          "The duplex settings on interconnecting ports must match.",
          "The speed settings on interconnecting ports must match."
        ]
      }
    ],
    "7.4.4": [
      {
        "question": "A DHCP-enabled client PC has just booted. During which two steps will the client PC use broadcast messages when communicating with a DHCP server? (Choose two.)",
        "answers": [
          "DHCPREQUEST",
          "DHCPDISCOVER"
        ]
      },
      {
        "question": "An administrator issues the commands:",
        "answers": [
          "configuring the router to obtain IP parameters from a DHCPv4 server"
        ]
      },
      {
        "question": "When a client is requesting an initial address lease from a DHCP server, why is the DHCPREQUEST message sent as a broadcast?",
        "answers": [
          "The client may have received offers from multiple servers, and the broadcast serves to implicitly decline those other offers."
        ]
      },
      {
        "question": "Which DHCP IPv4 message contains the following information?",
        "answers": [
          "DHCPDISCOVER"
        ]
      },
      {
        "question": "What kind of message is sent by a DHCPv4 client requesting an IP address?",
        "answers": [
          "DHCPDISCOVER broadcast message"
        ]
      },
      {
        "question": "As a DHCPv4 client lease is about to expire, what is the message that the client sends the DHCP server?",
        "answers": [
          "DHCPREQUEST"
        ]
      },
      {
        "question": "What is the destination IP address when an IPv4 host sends a DHCPDISCOVER message?",
        "answers": [
          "255.255.255.255"
        ]
      },
      {
        "question": "If more than one DHCP server is available on the local network, in which order will DHCP messages be sent between a host and a DHCP server?",
        "answers": [
          "discover, offer, request, acknowledgment"
        ]
      },
      {
        "question": "What is the most likely scenario in which the WAN interface of a router would be configured as a DHCP client to be assigned a dynamic IP address from an ISP?",
        "answers": [
          "It is a SOHO or home broadband router."
        ]
      },
      {
        "question": "Which is a DHCPv4 address allocation method that assigns IPv4 addresses for a limited lease period?",
        "answers": [
          "dynamic allocation"
        ]
      },
      {
        "question": "What is the reason why the DHCPREQUEST message is sent as a broadcast during the DHCPv4 process?",
        "answers": [
          "to notify other DHCP servers on the subnet that the IP address was leased"
        ]
      },
      {
        "question": "How is a DHCPDISCOVER transmitted on a network to reach a DHCP server?",
        "answers": [
          "A DHCPDISCOVER message is sent with the broadcast IP address as the destination address."
        ]
      },
      {
        "question": "Which destination IPv4 address does a DHCPv4 client use to send the initial DHCP Discover packet when the client is looking for a DHCP server?",
        "answers": [
          "255.255.255.255"
        ]
      },
      {
        "question": "Under which two circumstances would a router usually be configured as a DHCPv4 client? (Choose two.)",
        "answers": [
          "This is an ISP requirement.",
          "The router is intended to be used as a SOHO gateway."
        ]
      },
      {
        "question": "Which address does a DHCPv4 server target when sending a DHCPOFFER message to a client that makes an address request?",
        "answers": [
          "client hardware address"
        ]
      },
      {
        "question": "Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?",
        "answers": [
          "Broadcast DHCPREQUEST"
        ]
      },
      {
        "question": "What is an advantage of configuring a Cisco router as a relay agent?",
        "answers": [
          "It can provide relay services for multiple UDP services."
        ]
      },
      {
        "question": "A host on the 10.10.100.0/24 LAN is not being assigned an IPv4 address by an enterprise DHCP server with the address 10.10.200.10/24. What is the best way for the network engineer to resolve this problem?",
        "answers": [
          "Issue the ip helper-address 10.10.200.10 command on the router interface that is the 10.10.100.0/24 gateway."
        ]
      },
      {
        "question": "What is accomplished by the ip dhcp excluded-address 10.10.4.1 10.10.4.5 command?",
        "answers": [
          "The DHCP server will not issue IPv4 addresses ranging from 10.10.4.1 to 10.10.4.5."
        ]
      },
      {
        "question": "Which Windows command combination would enable a DHCPv4 client to reinstate its IPv4 configuration?",
        "answers": [
          "Enter ipconfig /release and then ipconfig /renew"
        ]
      },
      {
        "question": "Which command issued on R1 can be used to verify the current IPv4 address and MAC address binding?",
        "answers": [
          "R1# show ip dhcp binding"
        ]
      },
      {
        "question": "Which DHCP operation statement is true?",
        "answers": [
          "When a DHCP client boots, it broadcasts a DHCPDISCOVER message to identify an available DHCP server on the network."
        ]
      }
    ],
    "8.5.3": [
      {
        "question": "How does an IPv6 client ensure that it has a unique address after it configures its IPv6 address using the SLAAC allocation method?",
        "answers": [
          "It sends an ICMPv6 Neighbor Solicitation message with the IPv6 address as the target IPv6 address."
        ]
      },
      {
        "question": "Which method would an IPv6-enabled host using SLAAC employ to learn the address of the default gateway?",
        "answers": [
          "router advertisements that are received from the link router"
        ]
      },
      {
        "question": "What two methods can be used to generate an interface ID by an IPv6 host that is using SLAAC? (Choose two.)",
        "answers": [
          "random generation",
          "EUI-64"
        ]
      },
      {
        "question": "A client is using SLAAC to obtain an IPv6 address for its interface. After an address has been generated and applied to the interface, what must the client do before it can begin to use this IPv6 address?",
        "answers": [
          "It must send an ICMPv6 Neighbor Solicitation message to ensure that the address is not already in use on the network."
        ]
      },
      {
        "question": "Which command should be configured on a router interface to set the router as a stateful DHCPv6 client?",
        "answers": [
          "ipv6 address dhcp"
        ]
      },
      {
        "question": "What message informs IPv6 enabled interfaces to use stateful DHCPv6 for obtaining an IPv6 address?",
        "answers": [
          "the ICMPv6 Router Advertisement"
        ]
      },
      {
        "question": "Which destination IP address is used when an IPv6 host sends a DHCPv6 SOLICIT message to locate a DHCPv6 server?",
        "answers": [
          "FF02::1:2"
        ]
      },
      {
        "question": "In which alternative to DHCPv6 does a router dynamically provide IPv6 configuration information to hosts?",
        "answers": [
          "SLAAC"
        ]
      },
      {
        "question": "A company implements the stateless DHCPv6 method for configuring IPv6 addresses on employee workstations. After a workstation receives messages from multiple DHCPv6 servers to indicate their availability for DHCPv6 service, which message does it send to a server for configuration information?",
        "answers": [
          "DHCPv6 INFORMATION-REQUEST"
        ]
      },
      {
        "question": "What process is used in ICMPv6 for a host to verify that an IPv6 address is unique before configuring it on an interface?",
        "answers": [
          "DAD"
        ]
      },
      {
        "question": "What are two characteristics of the SLAAC method for IPv6 address configuration? (Choose two.)",
        "answers": [
          "The default gateway of an IPv6 client on a LAN will be the link-local address of the router interface attached to the LAN.",
          "IPv6 addressing is dynamically assigned to clients through the use of ICMPv6."
        ]
      },
      {
        "question": "After booting, a client receives an ICMPv6 RA message with the M flag set to 0 and the O flag set to 1. What does this indicate?",
        "answers": [
          "The client should automatically configure an IPv6 address and then contact a DHCPv6 server for more information."
        ]
      },
      {
        "question": "A network administrator is entering the command ipv6 unicast-routing to start configuring DHCPv6 operation on a router. Which statement describes the function of this command?",
        "answers": [
          "It is required for sending ICMPv6 RA messages."
        ]
      },
      {
        "question": "A company uses the SLAAC method to configure IPv6 addresses for the employee workstations. Which address will a client use as its default gateway?",
        "answers": [
          "The link-local address of the router interface that is attached to the network"
        ]
      },
      {
        "question": "A network administrator configures a router to send RA messages with the A flag and O flag set to 1. The M flag is set to 0. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?",
        "answers": [
          "It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information."
        ]
      },
      {
        "question": "An administrator wants to configure hosts to automatically assign IPv6 addresses to themselves by the use of Router Advertisement messages, but also to obtain the DNS server address from a DHCPv6 server. Which address assignment method should be configured?",
        "answers": [
          "SLAAC and stateless DHCPv6"
        ]
      },
      {
        "question": "What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?",
        "answers": [
          "The MAC address of an Ethernet interface"
        ]
      },
      {
        "question": "A network administrator is implementing DHCPv6 for the company. The administrator configures a router to send RA messages with M flag as 1 by using the ipv6 nd managed-config-flag interface command, and the A flag is set to 0 using the ipv6 nd prefix default no-autoconfig command. What effect will this configuration have on the operation of the clients?",
        "answers": [
          "Clients must use all configuration information that is provided by a DHCPv6 server."
        ]
      },
      {
        "question": "An organization requires that LAN clients generate their IPv6 configuration using SLAAC. You have configured the IPv6 GUA on the router LAN interface and verified that the interface is UP. However, hosts are not generating an IPv6 GUA. Which other command should be configured to enable SLAAC?",
        "answers": [
          "R1(config)# ipv6 unicast-routing"
        ]
      },
      {
        "question": "A network administrator configures a router to send RA messages with M flag as 0 and O flag as 1. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?",
        "answers": [
          "It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information."
        ]
      },
      {
        "question": "When SLAAC is used, which address will a client use as its default gateway?",
        "answers": [
          "The connecting router link-local address"
        ]
      }
    ],
    "9.3.2": [
      {
        "question": "What is the purpose of HSRP?",
        "answers": [
          "It provides a continuous network connection when a router fails."
        ]
      },
      {
        "question": "Which nonproprietary protocol provides router redundancy for a group of routers which support IPv4 LANs?",
        "answers": [
          "VRRPv2"
        ]
      },
      {
        "question": "A network administrator is analyzing first-hop router redundancy protocols. What is a characteristic of VRRPv3?",
        "answers": [
          "It supports IPv6 and IPv4 addressing."
        ]
      },
      {
        "question": "What is a potential disadvantage when implementing HSRP as compared to GLBP?",
        "answers": [
          "HSRP does not provide load balancing with multiple active routers."
        ]
      },
      {
        "question": "A network engineer is configuring a LAN with a redundant first hop to make better use of the available network resources. Which protocol should the engineer implement?",
        "answers": [
          "GLBP"
        ]
      },
      {
        "question": "When first hop redundancy protocols are used, which two items will be shared by a set of routers that are presenting the illusion of being a single router? (Choose two.)",
        "answers": [
          "IP address",
          "MAC address"
        ]
      },
      {
        "question": "In FHRP terminology, what represents a set of routers that present the illusion of a single router to hosts?",
        "answers": [
          "virtual router"
        ]
      },
      {
        "question": "A user needs to add redundancy to the routers in a company. What are the three options the user can use? (Choose three.)",
        "answers": [
          "HSRP",
          "VRRP",
          "GLBP"
        ]
      },
      {
        "question": "Which two protocols provide gateway redundancy at Layer 3? (Choose two.)",
        "answers": [
          "HSRP",
          "VRRP"
        ]
      },
      {
        "question": "A network administrator is overseeing the implementation of first hop redundancy protocols. Which two protocols are Cisco proprietary? (Choose two.)",
        "answers": [
          "GLBP",
          "HSRP"
        ]
      },
      {
        "question": "Which statement describes a characteristic of GLBP?",
        "answers": [
          "It provides automatic rerouting if any router in the group fails."
        ]
      },
      {
        "question": "A network administrator is analyzing the features that are supported by different first-hop router redundancy protocols. Which statement is a feature that is associated with GLBP?",
        "answers": [
          "GLBP allows load balancing between routers."
        ]
      },
      {
        "question": "Which statement about HSRP operation is true?",
        "answers": [
          "The active router responds to requests for the virtual MAC and virtual IP address."
        ]
      },
      {
        "question": "Which HSRP preemption statement is true?",
        "answers": [
          "It is enabled using the standby preempt interface command."
        ]
      },
      {
        "question": "Which statement regarding VRRP is true?",
        "answers": [
          "VRRP elects a master router and one or more other routers as backup routers."
        ]
      },
      {
        "question": "A network administrator is overseeing the implementation of first hop redundancy protocols. Which protocol is a Cisco proprietary protocol?",
        "answers": [
          "HSRP"
        ]
      },
      {
        "question": "Which is a characteristic of the HSRP Learn state?",
        "answers": [
          "The router knows the virtual IP address."
        ]
      },
      {
        "question": "A network administrator is analyzing the features that are supported by different first-hop router redundancy protocols. Which statement describes a feature that is associated with VRRP?",
        "answers": [
          "VRRP is a non-proprietary protocol."
        ]
      },
      {
        "question": "When HSRP is used in a network, what destination MAC address is used in frames that are sent from the workstation to the default gateway?",
        "answers": [
          "MAC address of the virtual router"
        ]
      },
      {
        "question": "What happens to a host in an HSRP network when the active router fails?",
        "answers": [
          "The host will notice little or no disruption of service."
        ]
      },
      {
        "question": "Which of the following correctly describes GLBP?",
        "answers": [
          "It is a Cisco proprietary FHRP and provides redundancy and load sharing."
        ]
      }
    ],
    "10.6.2": [
      {
        "question": "What two protocols are supported on Cisco devices for AAA communications? (Choose two.)",
        "answers": [
          "RADIUS",
          "TACACS+"
        ]
      },
      {
        "question": "Which service is enabled on a Cisco router by default that can reveal significant information about the router and potentially make it more vulnerable to attack?",
        "answers": [
          "CDP"
        ]
      },
      {
        "question": "When security is a concern, which OSI Layer is considered to be the weakest link in a network system?​",
        "answers": [
          "Layer 2"
        ]
      },
      {
        "question": "Which Layer 2 attack will result in a switch flooding incoming frames to all ports?",
        "answers": [
          "MAC address overflow"
        ]
      },
      {
        "question": "Why is authentication with AAA preferred over a local database method?",
        "answers": [
          "It provides a fallback authentication method if the administrator forgets the username or password."
        ]
      },
      {
        "question": "In a server-based AAA implementation, which protocol will allow the router to successfully communicate with the AAA server?",
        "answers": [
          "RADIUS"
        ]
      },
      {
        "question": "Which Cisco solution helps prevent MAC and IP address spoofing attacks?",
        "answers": [
          "IP Source Guard"
        ]
      },
      {
        "question": "What is the purpose of AAA accounting?",
        "answers": [
          "to collect and report application usage"
        ]
      },
      {
        "question": "Which Layer 2 attack will result in legitimate users not getting valid IP addresses?",
        "answers": [
          "DHCP starvation"
        ]
      },
      {
        "question": "Which three Cisco products focus on endpoint security solutions? (Choose three.)",
        "answers": [
          "NAC Appliance",
          "Web Security Appliance",
          "Email Security Appliance"
        ]
      },
      {
        "question": "True or False?",
        "answers": [
          "true"
        ]
      },
      {
        "question": "What is involved in an IP address spoofing attack?",
        "answers": [
          "A legitimate network IP address is hijacked by a rogue node."
        ]
      },
      {
        "question": "What three services are provided by the AAA framework? (Choose three.)",
        "answers": [
          "authentication",
          "authorization",
          "accounting"
        ]
      },
      {
        "question": "Because of implemented security controls, a user can only access a server with FTP. Which AAA component accomplishes this?",
        "answers": [
          "authorization"
        ]
      },
      {
        "question": "What mitigation plan is best for thwarting a DoS attack that is creating a MAC address table overflow?",
        "answers": [
          "Enable port security."
        ]
      },
      {
        "question": "Which of the following encrypts the data on end-devices, which can be decrypted only if a payment is made?",
        "answers": [
          "Ransomware"
        ]
      },
      {
        "question": "Which network security device monitors and encrypts SMTP traffic to block threats and prevent data loss?",
        "answers": [
          "ESA"
        ]
      },
      {
        "question": "Which AAA component is responsible for determining what access is permitted?",
        "answers": [
          "Authorization"
        ]
      },
      {
        "question": "Which small network router authentication method authenticates device access by referring to local usernames and passwords?",
        "answers": [
          "Local AAA authentication"
        ]
      },
      {
        "question": "Which 802.1X term is used to describe the device that is responsible for relaying 802.1X responses?",
        "answers": [
          "Authenticator"
        ]
      },
      {
        "question": "Which 802.1X term is used to describe the device that is requesting authentication?",
        "answers": [
          "Supplicant"
        ]
      },
      {
        "question": "Which mitigation technique prevents MAC address table overflow attacks?",
        "answers": [
          "Port security"
        ]
      },
      {
        "question": "Which mitigation technique prevents ARP spoofing and ARP poisoning attacks?",
        "answers": [
          "DAI"
        ]
      },
      {
        "question": "Which type of attack does IPSG mitigate?",
        "answers": [
          "It prevents MAC and IP address spoofing."
        ]
      },
      {
        "question": "What happens to a compromised switch during a MAC address table attack?",
        "answers": [
          "The switch will flood all incoming frames to all other ports in the VLAN."
        ]
      },
      {
        "question": "Why would a threat actor launch a MAC address overflow attack on a small network?",
        "answers": [
          "To capture frames destined for other LAN devices"
        ]
      },
      {
        "question": "Which is an example of a DHCP starvation attack?",
        "answers": [
          "A threat actor leases all the available IP addresses on a subnet to deny legitimate clients DHCP resources."
        ]
      },
      {
        "question": "Which is an example of an STP attack?",
        "answers": [
          "A threat actor sends a BPDU message with priority 0."
        ]
      },
      {
        "question": "Which is an example of an address spoofing attack?",
        "answers": [
          "A threat actor changes the MAC address of the threat actor’s device to the MAC address of the default gateway."
        ]
      },
      {
        "question": "Which is an example of an ARP spoofing attack?",
        "answers": [
          "A threat actor sends a message that causes all other devices to believe the MAC address of the threat actor’s device is the default gateway."
        ]
      },
      {
        "question": "Which is an example of a CDP reconnaissance attack?",
        "answers": [
          "A threat actor discovers the IOS version and IP addresses of the local switch."
        ]
      }
    ],
    "11.6.4": [
      {
        "question": "What is a recommended best practice when dealing with the native VLAN?",
        "answers": [
          "Assign it to an unused VLAN."
        ]
      },
      {
        "question": "On what switch ports should PortFast be enabled to enhance STP stability?",
        "answers": [
          "all end-user ports"
        ]
      },
      {
        "question": "Which command would be best to use on an unused switch port if a company adheres to the best practices as recommended by Cisco?",
        "answers": [
          "shutdown"
        ]
      },
      {
        "question": "Which two features on a Cisco Catalyst switch can be used to mitigate DHCP starvation and DHCP spoofing attacks? (Choose two.)",
        "answers": [
          "port security",
          "DHCP snooping"
        ]
      },
      {
        "question": "What is the best way to prevent a VLAN hopping attack?",
        "answers": [
          "Disable trunk negotiation for trunk ports and statically set nontrunk ports as access ports."
        ]
      },
      {
        "question": "Which procedure is recommended to mitigate the chances of ARP spoofing?",
        "answers": [
          "Enable DHCP snooping on selected VLANs."
        ]
      },
      {
        "question": "What are two types of switch ports that are used on Cisco switches as part of the defense against DHCP spoofing attacks? (Choose two.)",
        "answers": [
          "trusted DHCP port",
          "untrusted port"
        ]
      },
      {
        "question": "Which two commands can be used to enable PortFast on a switch? (Choose two.)",
        "answers": [
          "S1(config-if)# spanning-tree portfast",
          "S1(config)# spanning-tree portfast default"
        ]
      },
      {
        "question": "An administrator who is troubleshooting connectivity issues on a switch notices that a switch port configured for port security is in the err-disabled state. After verifying the cause of the violation, how should the administrator re-enable the port without disrupting network operation?",
        "answers": [
          "Issue the shutdown command followed by the no shutdown command on the interface."
        ]
      },
      {
        "question": "A network administrator is configuring DHCP snooping on a switch. Which configuration command should be used first?",
        "answers": [
          "ip dhcp snooping"
        ]
      },
      {
        "question": "A network administrator is configuring DAI on a switch with the command ip arp inspection validate dst-mac. What is the purpose of this configuration command?",
        "answers": [
          "to check the destination MAC address in the Ethernet header against the target MAC address in the ARP body"
        ]
      },
      {
        "question": "Which security feature should be enabled in order to prevent an attacker from overflowing the MAC address table of a switch?",
        "answers": [
          "port security"
        ]
      },
      {
        "question": "What Layer 2 attack is mitigated by disabling Dynamic Trunking Protocol?",
        "answers": [
          "VLAN hopping"
        ]
      },
      {
        "question": "A network administrator is configuring DAI on a switch. Which command should be used on the uplink interface that connects to a router?",
        "answers": [
          "ip arp inspection trust"
        ]
      },
      {
        "question": "Where are dynamically learned MAC addresses stored when sticky learning is enabled with the switchport port-security mac-address sticky command?",
        "answers": [
          "RAM"
        ]
      },
      {
        "question": "Which method would mitigate a MAC address flooding attack?",
        "answers": [
          "Configuring port security"
        ]
      },
      {
        "question": "Which action will bring an error-disabled switch port back to an operational state?",
        "answers": [
          "Issue the shutdown and no shutdown interface config commands."
        ]
      },
      {
        "question": "Which two statements are true regarding switch port security? (Choose two.)",
        "answers": [
          "Dynamically learned secure MAC addresses are lost when the switch reboots.",
          "If fewer than the maximum number of MAC addresses for a port are configured statically, dynamically learned addresses are added to CAM until the maximum number is reached."
        ]
      },
      {
        "question": "Port security has been enabled on access ports to allow a maximum of two MAC addresses. Which port security violation would drop the frame and send a notification to the syslog server if the maximum number of MAC addresses is exceeded?",
        "answers": [
          "Restrict"
        ]
      },
      {
        "question": "Which feature should be configured on PortFast enabled switches to prevent rogue switches from being added to a network?",
        "answers": [
          "BPDU guard"
        ]
      },
      {
        "question": "Which port security feature enables switches to automatically learn and retain MAC addresses for each port?",
        "answers": [
          "Sticky secure MAC addresses"
        ]
      },
      {
        "question": "Assume that BPDU Guard has been enabled globally on all access ports. However, one port must not be configured with the feature. Which command would explicitly disable BPDU Guard on that switch port?",
        "answers": [
          "S1(config-if)# no spanning-tree bpduguard enable"
        ]
      },
      {
        "question": "Which DAI command checks the source MAC address in the Ethernet header against the target MAC address in the ARP body?",
        "answers": [
          "ip arp inspection validate src-mac"
        ]
      },
      {
        "question": "What is the result of entering the ip dhcp snooping limit rate 4 interface configuration command?",
        "answers": [
          "The port can receive up to 4 DHCP discovery messages per second."
        ]
      },
      {
        "question": "Port security has been enabled on a switch port. What is the default violation mode in use by default?",
        "answers": [
          "Shutdown"
        ]
      },
      {
        "question": "What techniques should be done to mitigate VLAN attacks? (Choose three.)",
        "answers": [
          "Disable DTP.",
          "Enable trunking manually.",
          "Set the native VLAN to an unused VLAN."
        ]
      },
      {
        "question": "Port security has been enabled on interface Fa0/1 and the show port-security interface fa0/1 command has been entered. What does the Port Status “Secure-up” message indicate?",
        "answers": [
          "There is a host connected to the secured Fa0/1 port."
        ]
      }
    ],
    "12.8.2": [
      {
        "question": "In the context of mobile devices, what does the term tethering involve?",
        "answers": [
          "connecting a mobile device to another mobile device or computer to share a network connection"
        ]
      },
      {
        "question": "Which feature of 802.11n wireless access points allows them to transmit data at faster speeds than previous versions of 802.11 Wi-Fi standards did?",
        "answers": [
          "MIMO"
        ]
      },
      {
        "question": "Which method of wireless authentication is currently considered to be the strongest?",
        "answers": [
          "WPA2"
        ]
      },
      {
        "question": "Which parameter is commonly used to identify a wireless network name when a home wireless AP is being configured?",
        "answers": [
          "SSID"
        ]
      },
      {
        "question": "Which characteristic describes a wireless client operating in active mode?",
        "answers": [
          "must know the SSID to connect to an AP"
        ]
      },
      {
        "question": "Which IEEE standard operates at wireless frequencies in both the 5 GHz and 2.4 GHz ranges?",
        "answers": [
          "802.11n"
        ]
      },
      {
        "question": "Which statement describes an autonomous access point?",
        "answers": [
          "It is a standalone access point."
        ]
      },
      {
        "question": "Which two roles are typically performed by a wireless router that is used in a home or small business? (Choose two.)",
        "answers": [
          "Ethernet switch",
          "access point"
        ]
      },
      {
        "question": "Which protocol and port numbers are used by both IPv4 and IPv6 CAPWAP tunnels? (Choose two.)",
        "answers": [
          "UDP",
          "5246 and 5247"
        ]
      },
      {
        "question": "If three 802.11b access points need to be deployed in close proximity, which three frequency channels should be used? (Choose three.)",
        "answers": [
          "1",
          "11",
          "6"
        ]
      },
      {
        "question": "Which type of telecommunication technology is used to provide Internet access to vessels at sea?",
        "answers": [
          "satellite"
        ]
      },
      {
        "question": "Which wireless network topology is being configured by a technician who is installing a keyboard, a mouse, and headphones, each of which uses Bluetooth?",
        "answers": [
          "ad hoc mode"
        ]
      },
      {
        "question": "Which type of wireless topology is created when two or more Basic Service Sets are interconnected by Ethernet?",
        "answers": [
          "ESS"
        ]
      },
      {
        "question": "What Wi-Fi management frame is regularly broadcast by APs to announce their presence?",
        "answers": [
          "beacon"
        ]
      },
      {
        "question": "An AP regularly broadcasts which type of management frame?",
        "answers": [
          "Beacon"
        ]
      },
      {
        "question": "What type of wireless antenna is best suited for providing coverage in large open spaces, such as hallways or large conference rooms?",
        "answers": [
          "Omnidirectional"
        ]
      },
      {
        "question": "Which wireless security method requires clients to manually identify the SSID to connect to the WLAN?",
        "answers": [
          "SSID cloaking"
        ]
      },
      {
        "question": "What are the two methods that a wireless client can use to discover an AP? (Choose two.)",
        "answers": [
          "Receiving a broadcast beacon frame probe response",
          "Transmitting a probe request"
        ]
      },
      {
        "question": "What type of wireless network topology would be used in a medium to large organization?",
        "answers": [
          "Infrastructure"
        ]
      },
      {
        "question": "What IEEE 802.11 wireless standards operate only in the 2.4 GHz range? (Choose two.)",
        "answers": [
          "802.11b",
          "802.11g"
        ]
      },
      {
        "question": "Which IEEE wireless standard is backward compatible with older wireless protocols and supports data rates up to 1.3 Gb/s?",
        "answers": [
          "802.11ac"
        ]
      },
      {
        "question": "In a 2.4 GHz wireless network, which three channels should be used to avoid interference from nearby wireless devices? (Choose three.)",
        "answers": [
          "1",
          "6",
          "11"
        ]
      },
      {
        "question": "Which authentication method is more secure but requires the services of a RADIUS server?",
        "answers": [
          "WPA Enterprise"
        ]
      },
      {
        "question": "Which option correctly describes when an AP openly advertises its service by periodically sending broadcast beacon frames containing the SSID, supported standards, and security settings?",
        "answers": [
          "Passive mode"
        ]
      }
    ],
    "13.5.4": [
      {
        "question": "A user is configuring a wireless access point and wants to prevent any neighbors from discovering the network. What action does the user need to take?",
        "answers": [
          "Disable SSID broadcast."
        ]
      },
      {
        "question": "When a wireless network in a small office is being set up, which type of IP addressing is typically used on the networked devices?",
        "answers": [
          "private"
        ]
      },
      {
        "question": "A user has just purchased a generic home router and would like to secure it. What should be done to help secure the wireless home router?",
        "answers": [
          "Change the default administrator password."
        ]
      },
      {
        "question": "Which protocol could be used by a company to monitor devices such as a wireless LAN controller (WLC)?",
        "answers": [
          "SNMP"
        ]
      },
      {
        "question": "When configuring a Cisco 3500 series wireless LAN controller (WLC) for a WPA2 Enterprise WLAN, what has to be created on the WLC before creating the new WLAN?",
        "answers": [
          "a VLAN for the wireless network"
        ]
      },
      {
        "question": "What is a DHCP scope as it relates to a WLAN configured on the WLC controller?",
        "answers": [
          "a pool of IP addresses for WLAN clients"
        ]
      },
      {
        "question": "Why would a technician configure a passphrase for a WLAN on a wireless router?",
        "answers": [
          "to configure wireless client authentication"
        ]
      },
      {
        "question": "A customer installs a wireless access point at home in the closet next to the kitchen. The customer mentions that the wireless communication performance seems degraded when the cordless phone or the microwave oven is in use. What is the possible reason for this degradation?",
        "answers": [
          "The wireless signal is in the same radio frequency range as the household devices are in."
        ]
      },
      {
        "question": "What functionality is required on routers to provide remote workers with VoIP and videoconferencing capabilities?",
        "answers": [
          "QoS"
        ]
      },
      {
        "question": "A wireless router is displaying the IP address of 192.168.0.1. What could this mean?",
        "answers": [
          "The wireless router still has the factory default IP address."
        ]
      },
      {
        "question": "A laptop cannot connect to a wireless access point. Which two troubleshooting steps should be taken first? (Choose two.)",
        "answers": [
          "Ensure that the wireless SSID is chosen.",
          "Ensure that the wireless NIC is enabled."
        ]
      },
      {
        "question": "In setting up a small office network, the network administrator decides to assign private IP addresses dynamically to workstations and mobile devices. Which feature must be enabled on the company router in order for office devices to access the internet?",
        "answers": [
          "NAT"
        ]
      },
      {
        "question": "What is a difference between autonomous APs that operate in a home environment and controller-based APs that operate in a corporate environment?",
        "answers": [
          "Controller-based APs can be automatically configured and managed by a WLAN controller."
        ]
      },
      {
        "question": "Which WLC tab would a network administrator typically use to see a summary view of the most heavily used WLANs including the number of clients using a particular WLAN?",
        "answers": [
          "Monitor"
        ]
      },
      {
        "question": "Users on an IEEE 802.11n network are complaining of slow speeds. The network administrator checks the AP and verifies it is operating properly. What can be done to improve the wireless performance in the network?",
        "answers": [
          "Split the wireless traffic between the 802.11n 2.4 GHz band and the 5 GHz band."
        ]
      },
      {
        "question": "What is the first security setting that should be applied when connecting a wireless router in a small network?",
        "answers": [
          "Change the default administrative username and password."
        ]
      },
      {
        "question": "Which option is an easy way to improve wireless performance on an 802.11n wireless router?",
        "answers": [
          "Use different SSID names for the 2.4 GHz and 5 GHz bands."
        ]
      },
      {
        "question": "Which Cisco 3504 WLC dashboard menu option provides an overview of the number of configured wireless networks, associated access points (APs), and active clients?",
        "answers": [
          "Network Summary"
        ]
      },
      {
        "question": "Which protocol is used to monitor a network?",
        "answers": [
          "SNMP"
        ]
      },
      {
        "question": "Which service on a wireless router enables a host with an internal private IPv4 address to access an outside network using a public IPv4 address?",
        "answers": [
          "NAT"
        ]
      },
      {
        "question": "Which service available on some wireless routers can be used to prioritize email over web data traffic?",
        "answers": [
          "QoS"
        ]
      },
      {
        "question": "What must be done before creating a new WLAN on a Cisco 3500 series WLC?",
        "answers": [
          "Create a new VLAN interface."
        ]
      },
      {
        "question": "Which frequency band SSID name should users with time-sensitive applications connect to?",
        "answers": [
          "The 5 GHz band, because it has more channels than the 2.4 GHz band."
        ]
      },
      {
        "question": "A Cisco 3500 series WLC is configured to access a RADIUS server. The configuration requires a shared secret password. What is the purpose for the shared secret password?",
        "answers": [
          "It is used to encrypt messages between the WLC and the server."
        ]
      },
      {
        "question": "Which type of WLAN extends wireless coverage using a few APs controlled using a smartphone app?",
        "answers": [
          "Wireless Mesh Network (WMN)"
        ]
      }
    ],
    "14.6.2": [
      {
        "question": "Which feature on a Cisco router permits the forwarding of traffic for which there is no specific route?",
        "answers": [
          "gateway of last resort"
        ]
      },
      {
        "question": "Which three advantages are provided by static routing? (Choose three.)",
        "answers": [
          "Static routing does no advertise over the network, thus providing better security.",
          "The path a static route uses to send data is known.",
          "Static routing typically uses less network bandwidth and fewer CPU operations than dynamic routing does."
        ]
      },
      {
        "question": "What are two functions of dynamic routing protocols? (Choose two.)",
        "answers": [
          "to discover the network",
          "to maintain routing tables"
        ]
      },
      {
        "question": "What is an advantage of using dynamic routing protocols instead of static routing?",
        "answers": [
          "ability to actively search for new routes if the current path becomes unavailable"
        ]
      },
      {
        "question": "Which value represents the “trustworthiness” of a route and is used to determine which route to install into the routing table when there are multiple routes toward the same destination?",
        "answers": [
          "administrative distance"
        ]
      },
      {
        "question": "Which packet-forwarding method does a router use to make switching decisions when it is using a forwarding information base and an adjacency table?",
        "answers": [
          "Cisco Express Forwarding"
        ]
      },
      {
        "question": "Which type of route would typically be used on a border router so that devices inside the company could access the Internet?",
        "answers": [
          "default"
        ]
      },
      {
        "question": "What are two functions of a router? (Choose two.)",
        "answers": [
          "A router connects multiple IP networks.",
          "It determines the best path to send packets."
        ]
      },
      {
        "question": "When a router learns that multiple paths are available to a destination network from the same routing protocol, which factor is considered by a router to choose the best path to forward a packet?",
        "answers": [
          "the lowest metric"
        ]
      },
      {
        "question": "Which two route source codes are automatically created within a routing table whenever a router interface is configured with an IP address and activated? (Choose two.)",
        "answers": [
          "C",
          "L"
        ]
      },
      {
        "question": "The output of the show ip route command contains the following entry:",
        "answers": [
          "administrative distance"
        ]
      },
      {
        "question": "Which type of static route creates a gateway of last resort?",
        "answers": [
          "default static route"
        ]
      },
      {
        "question": "What are two common types of static routes in routing tables? (Choose two)",
        "answers": [
          "a static route to a specific network",
          "a default static route"
        ]
      },
      {
        "question": "What are two reasons why an administrator might choose to use static routing rather than dynamic routing? (Choose two.)",
        "answers": [
          "Static routing uses less router processing and bandwidth.",
          "Static routing is more secure."
        ]
      },
      {
        "question": "What address and prefix length is used when configuring an IPv6 default static route?",
        "answers": [
          "::/0"
        ]
      },
      {
        "question": "What are two advantages of static routing over dynamic routing? (Choose two.)",
        "answers": [
          "Static routing is more secure because it does not advertise routes to other routers.",
          "Static routing uses fewer router resources than dynamic routing."
        ]
      },
      {
        "question": "What type of route allows a router to forward packets even though its routing table contains no specific route to the destination network?",
        "answers": [
          "default route"
        ]
      },
      {
        "question": "The network administrator configures the router with the ip route 172.16.1.0 255.255.255.0 172.16.2.2 command. How will this route appear in the routing table?",
        "answers": [
          "S 172.16.1.0 [1/0] via 172.16.2.2"
        ]
      },
      {
        "question": "R1 is configured with the ip route 10.1.0.0 255.255.0.0 g0/0/0 command. What happens if the G0/0/0 interface goes down?",
        "answers": [
          "The static route is removed from the routing table."
        ]
      },
      {
        "question": "What static route identifies the gateway IP address to which the router sends all IP packets for which it does not have a learned route?",
        "answers": [
          "Default static route"
        ]
      },
      {
        "question": "On which type of network would a dynamic routing protocol be implemented in?",
        "answers": [
          "On a network that commonly experiences topology changes."
        ]
      },
      {
        "question": "Which value in a routing table is used to compare routes received from a routing protocol?",
        "answers": [
          "metric"
        ]
      },
      {
        "question": "A network administrator configures the G0/0/0 interface with the ip address 10.1.1.0 255.255.255.0 command. However, when the administrator issues the show ip route command, the routing table does not show the directly connected network. What is the possible cause of the problem?",
        "answers": [
          "The G0/0/0 interface has not been activated."
        ]
      }
    ],
    "15.6.4": [
      {
        "question": "A network administrator configures a router by the command ip route 0.0.0.0 0.0.0.0 209.165.200.226. What is the purpose of this command?",
        "answers": [
          "to provide a route to forward packets for which there is no route in the routing table"
        ]
      },
      {
        "question": "Which type of static route that is configured on a router uses only the exit interface?",
        "answers": [
          "directly connected static route"
        ]
      },
      {
        "question": "A network administrator uses the command ip route 172.18.0.0 255.255.0.0 S0/0/1 to configure a floating static route on a router. That route will function as a backup route to reach the EIGRP learned network 172.18.0.0/16. After this configuration, the EIGRP route is removed from the routing table even though EIGRP is still functioning properly. Why is the static route not functioning as intended?",
        "answers": [
          "The administrative distance value is not high enough on the static route."
        ]
      },
      {
        "question": "What type of static route is created when the next-hop IP address and exit interface are specified?",
        "answers": [
          "fully specified static route"
        ]
      },
      {
        "question": "What is the correct syntax of a floating static route?",
        "answers": [
          "ip route 209.165.200.228 255.255.255.248 10.0.0.1 120"
        ]
      },
      {
        "question": "Which static route statement shows a recursive IPv6 static route?",
        "answers": [
          "ipv6 route 2001:db8:cafe:1::/56 2001:db8:1000:10::1"
        ]
      },
      {
        "question": "A network administrator is configuring a route to forward packets to a specific web server. What type of route should be configured by the administrator?",
        "answers": [
          "a host route"
        ]
      },
      {
        "question": "Which command would create a valid IPv6 default route?",
        "answers": [
          "ipv6 route ::/o 2001:db8:acad:2::a"
        ]
      },
      {
        "question": "What is a characteristic of a default static route? ​",
        "answers": [
          "It identifies the gateway IP address to which the router sends all IP packets for which it does not have a learned or static route."
        ]
      },
      {
        "question": "What is the purpose of a floating static route?",
        "answers": [
          "It allows an alternate connection to be used when the preferred link fails."
        ]
      },
      {
        "question": "Which IPv6 static route would serve as a backup route to a dynamic route learned through OSPF?",
        "answers": [
          "Router1 (config)# ipv6 route 2001:db8:acad:1::/32 2001:db8:acad:6::2 200"
        ]
      },
      {
        "question": "What command, or set of commands, would be used to determine if the following configuration on router HQ works as designed?",
        "answers": [
          "HQ(config)# interface serial 0/1/0\nHQ(config-if)# shutdown\nHQ(config-if)# end\nHQ# show ip route"
        ]
      },
      {
        "question": "Which type of static route typically uses the distance parameter in the ip route global configuration command?",
        "answers": [
          "floating static route"
        ]
      },
      {
        "question": "Why would a floating static route be configured with an administrative distance that is higher than the administrative distance of a dynamic routing protocol that is running on the same router?",
        "answers": [
          "to be used as a backup route"
        ]
      },
      {
        "question": "What network address and subnet mask combination would be used to create a default static route that matches any IPv4 destination?",
        "answers": [
          "0.0.0.0 0.0.0.0"
        ]
      },
      {
        "question": "Assume the administrator has entered the ip route 192.168.10.0 255.255.255.0 10.10.10.2 5 command. How would an administrator test this configuration?",
        "answers": [
          "Manually shut down the router interface used as a primary route."
        ]
      },
      {
        "question": "What route has the highest administrative distance?",
        "answers": [
          "A route received through the OSPF routing protocol"
        ]
      },
      {
        "question": "Which route would be used to forward a packet with a source IP address of 10.10.10.1 and a destination IP address of 172.16.1.1?",
        "answers": [
          "S 172.16.0.0/16 is directly connected, GigabitEthernet 0/0"
        ]
      },
      {
        "question": "Which static route is a fully specified static route?",
        "answers": [
          "ip route 10.1.1.0 255.255.0.0 G0/0/1 172.16.2.2"
        ]
      },
      {
        "question": "Which type of route could be configured to be a backup route for a dynamic routing protocol?",
        "answers": [
          "Floating static route"
        ]
      },
      {
        "question": "On which router would a default static route be configured?",
        "answers": [
          "A stub router connecting to a service provider."
        ]
      },
      {
        "question": "What network prefix and prefix-length combination is used to create a default static route that will match any IPv6 destination?",
        "answers": [
          "ipv6 route ::/0 2001:db8:acad:2::2"
        ]
      },
      {
        "question": "How would you test a floating static route?",
        "answers": [
          "Manually shut down the router interface used as a primary route."
        ]
      }
    ],
    "16.3.4": [
      {
        "question": "Which sequence correctly identifies the order of the steps that a router will perform when it receives a packet on an Ethernet interface?",
        "answers": [
          "1. The router examines the destination MAC address.\n2. The router identifies the Ethernet Type field.\n3. The router de-encapsulates the Ethernet frame.\n4. The router examines the destination IP address."
        ]
      },
      {
        "question": "Which three IOS troubleshooting commands can help to isolate problems with a static route? (Choose three.)",
        "answers": [
          "show ip interface brief",
          "show ip route",
          "ping"
        ]
      },
      {
        "question": "A network administrator has entered a static route to an Ethernet LAN that is connected to an adjacent router. However, the route is not shown in the routing table. Which command would the administrator use to verify that the exit interface is up?",
        "answers": [
          "show ip interface brief"
        ]
      },
      {
        "question": "A static route has been configured on a router. However, the destination network no longer exists. What should an administrator do to remove the static route from the routing table?",
        "answers": [
          "Remove the route using the no ip route command."
        ]
      },
      {
        "question": "Which statement describes the sequence of processes executed by a router when it receives a packet from a host to be delivered to a host on another network?",
        "answers": [
          "It de-encapsulates the packet, selects the appropriate path, and encapsulates the packet to forward it toward the destination host."
        ]
      },
      {
        "question": "A network engineer issues the show cdp neighbor command on several network devices during the process of network documentation. What is the purpose of performing this command?",
        "answers": [
          "to obtain information about directly connected Cisco devices"
        ]
      },
      {
        "question": "A network administrator notices that a correctly entered static route is not in the routing table. What two router commands would an administrator use to determine if the exit interface was up and the next hop address is available? (Choose two.)",
        "answers": [
          "show ip interface brief",
          "ping"
        ]
      },
      {
        "question": "A network administrator has entered the following command:",
        "answers": [
          "Verify that the serial 0/0/1 interface is active and available."
        ]
      },
      {
        "question": "What will a router do if it does not have a default route configured and a packet needs to be forwarded to a destination network that is not listed in the routing table?",
        "answers": [
          "drop it"
        ]
      },
      {
        "question": "What does the letter C mean next to an entry in the output of the show ip route command?",
        "answers": [
          "It identifies a network that is directly connected to the router."
        ]
      },
      {
        "question": "What happens to a static route entry in a routing table when the outgoing interface associated with that route goes into the down state?",
        "answers": [
          "The static route is removed from the routing table."
        ]
      },
      {
        "question": "What action will a router take to forward a frame if it does not have an entry in the ARP table to resolve a destination MAC address?",
        "answers": [
          "Sends an ARP request"
        ]
      },
      {
        "question": "You cannot ping a directly connected host. Which IOS command can be used to validate Layer 1 and Layer 2 connectivity?",
        "answers": [
          "show cdp neighbors detail"
        ]
      }
    ],
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
    ]
};

const CHECKPOINT_DB = {
    "1-4": [
      {
        "question": "Which tasks can be accomplished by using the command history feature? (Choose two.)",
        "answers": [
          "Set the command history buffer size.",
          "Recall previously entered commands."
        ]
      },
      {
        "question": "What is the first action in the boot sequence when a switch is powered on?",
        "answers": [
          "load a power-on self-test program"
        ]
      },
      {
        "question": "What must an administrator have in order to reset a lost password on a router?",
        "answers": [
          "physical access to the router"
        ]
      },
      {
        "question": "When configuring a switch for SSH access, what other command that is associated with the login local command is required to be entered on the switch?",
        "answers": [
          "username username secret secret"
        ]
      },
      {
        "question": "Which command displays information about the auto-MDIX setting for a specific interface?​",
        "answers": [
          "show controllers"
        ]
      },
      {
        "question": "If one end of an Ethernet connection is configured for full duplex and the other end of the connection is configured for half duplex, where would late collisions be observed?",
        "answers": [
          "on the half-duplex end of the connection"
        ]
      },
      {
        "question": "Which command is used to set the BOOT environment variable that defines where to find the IOS image file on a switch?",
        "answers": [
          "boot system"
        ]
      },
      {
        "question": "What does a switch use to locate and load the IOS image?",
        "answers": [
          "BOOT environment variable"
        ]
      },
      {
        "question": "Which protocol adds security to remote connections?",
        "answers": [
          "SSH"
        ]
      },
      {
        "question": "What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?​",
        "answers": [
          "It is a logical interface internal to the router."
        ]
      },
      {
        "question": "What is the minimum Ethernet frame size that will not be discarded by the receiver as a runt frame?",
        "answers": [
          "64 bytes"
        ]
      },
      {
        "question": "After which step of the switch bootup sequence is the boot loader executed?",
        "answers": [
          "after POST execution"
        ]
      },
      {
        "question": "Which impact does adding a Layer 2 switch have on a network?",
        "answers": [
          "an increase in the size of the broadcast domain"
        ]
      },
      {
        "question": "Which characteristic describes cut-through switching?",
        "answers": [
          "Frames are forwarded without any error checking."
        ]
      },
      {
        "question": "What is the significant difference between a hub and a Layer 2 LAN switch?",
        "answers": [
          "A hub extends a collision domain, and a switch divides collision domains."
        ]
      },
      {
        "question": "Which statement is correct about Ethernet switch frame forwarding decisions?",
        "answers": [
          "Frame forwarding decisions are based on MAC address and port mappings in the CAM table."
        ]
      },
      {
        "question": "How do switch buffers affect network performance?",
        "answers": [
          "They store frames received, thus preventing premature frame discarding when network congestion occurs."
        ]
      },
      {
        "question": "Which switch characteristic helps keep traffic local and alleviates network congestion?",
        "answers": [
          "high port density"
        ]
      },
      {
        "question": "Which switch component reduces the amount of packet handling time inside the switch?",
        "answers": [
          "ASIC"
        ]
      },
      {
        "question": "Refer to the exhibit. A switch receives a Layer 2 frame that contains a source MAC address of 000b.a023.c501 and a destination MAC address of 0050.0fae.75aa. Place the switch steps in the order they occur. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/Modules-1-4-Switching-Concepts-VLANs-and-InterVLAN-Routing-Exam.png"
      },
      {
        "question": "What information is added to the switch table from incoming frames?",
        "answers": [
          "source MAC address and incoming port number"
        ]
      },
      {
        "question": "Which switching method ensures that the incoming frame is error-free before forwarding?",
        "answers": [
          "store-and-forward"
        ]
      },
      {
        "question": "Refer to the exhibit. How many broadcast domains are displayed?",
        "answers": [
          "8"
        ]
      },
      {
        "question": "Under which two occasions should an administrator disable DTP while managing a local area network? (Choose two.)",
        "answers": [
          "when connecting a Cisco switch to a non-Cisco switch",
          "on links that should not be trunking"
        ]
      },
      {
        "question": "Which two characteristics describe the native VLAN? (Choose two.)",
        "answers": [
          "The native VLAN traffic will be untagged across the trunk link.",
          "The native VLAN provides a common identifier to both ends of a trunk."
        ]
      },
      {
        "question": "On a switch that is configured with multiple VLANs, which command will remove only VLAN 100 from the switch?",
        "answers": [
          "Switch(config)# no vlan 100"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is reviewing port and VLAN assignments on switch S2 and notices that interfaces Gi0/1 and Gi0/2 are not included in the output. Why would the interfaces be missing from the output?",
        "answers": [
          "They are configured as trunk interfaces."
        ]
      },
      {
        "question": "A network contains multiple VLANs spanning multiple switches. What happens when a device in VLAN 20 sends a broadcast Ethernet frame?",
        "answers": [
          "Only devices in VLAN 20 see the frame."
        ]
      },
      {
        "question": "Refer to the exhibit. All workstations are configured correctly in VLAN 20. Workstations that are connected to switch SW1 are not able to send traffic to workstations on SW2. What could be done to remedy the problem?",
        "answers": [
          "Allow VLAN 20 on the trunk link."
        ]
      },
      {
        "question": "What happens to switch ports after the VLAN to which they are assigned is deleted?",
        "answers": [
          "The ports stop communicating with the attached devices."
        ]
      },
      {
        "question": "Match the IEEE 802.1Q standard VLAN tag field with the description. (Not all options are used.)",
        "answers": [
          "Type",
          "User priority",
          "Canonical Format Identifier (CFI)",
          "VLAN ID (VID)"
        ]
      },
      {
        "question": "Refer to the exhibit. In what switch mode should port G0/1 be assigned if Cisco best practices are being used?",
        "answers": [
          "trunk"
        ]
      },
      {
        "question": "Match the DTP mode with its function. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2024-10-08_141221.jpg"
      },
      {
        "question": "Port Fa0/11 on a switch is assigned to VLAN 30. If the command no switchport access vlan 30 is entered on the Fa0/11 interface, what will happen?",
        "answers": [
          "Port Fa0/11 will be returned to VLAN 1."
        ]
      },
      {
        "question": "Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?",
        "answers": [
          "show interfaces Fa0/1 switchport"
        ]
      },
      {
        "question": "Refer to the exhibit. A technician is programming switch SW3 to manage voice and data traffic through port Fa0/20. What, if anything, is wrong with the configuration?",
        "answers": [
          "The command used to assign the voice VLAN to the switch port is incorrect."
        ]
      },
      {
        "question": "Which four steps are needed to configure a voice VLAN on a switch port? (Choose four).",
        "answers": [
          "Assign the voice VLAN to the switch port.",
          "Ensure that voice traffic is trusted and tagged with a CoS priority value.",
          "Add a voice VLAN.",
          "Configure the switch port in access mode."
        ]
      },
      {
        "question": "Refer to the exhibit. PC1 is unable to communicate with server 1. The network administrator issues the show interfaces trunk command to begin troubleshooting. What conclusion can be made based on the output of this command?",
        "answers": [
          "Interface G0/2 is not configured as a trunk."
        ]
      },
      {
        "question": "Refer to the exhibit. What is the cause of the error that is displayed in the configuration of inter-VLAN routing on router CiscoVille?",
        "answers": [
          "The encapsulation dot1Q 20 command has not been configured.​"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator has configured router CiscoVille with the above commands to provide inter-VLAN routing. What command will be required on a switch that is connected to the Gi0/0 interface on router CiscoVille to allow inter-VLAN routing?​",
        "answers": [
          "switchport mode trunk"
        ]
      },
      {
        "question": "A high school uses VLAN15 for the laboratory network and VLAN30 for the faculty network. What is required to enable communication between these two VLANs while using the router-on-a-stick approach?",
        "answers": [
          "A switch with a port that is configured as a trunk is needed when connecting to the router."
        ]
      },
      {
        "question": "When routing a large number of VLANs, what are two disadvantages of using the router-on-a-stick inter-VLAN routing method rather than the multilayer switch inter-VLAN routing method? (Choose two.)",
        "answers": [
          "A dedicated router is required.",
          "Multiple subinterfaces may impact the traffic flow speed."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PCs on different VLANs cannot communicate. Based on the output, what are two configuration errors on switch interface Gi1/1? (Choose two.)",
        "answers": [
          "Gi1/1 is in the default VLAN.",
          "Gi1/1 is configured as trunk mode."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with PC1. Based on the output, what is the possible cause of the problem?",
        "answers": [
          "The encapsulation dot1Q 5 command contains the wrong VLAN."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator has configured router CiscoVille with the above commands to provide inter-VLAN routing. What type of port will be required on a switch that is connected to Gi0/0 on router CiscoVille to allow inter-VLAN routing?",
        "answers": [
          "trunk port"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is configuring RT1 for inter-VLAN routing. The switch is configured correctly and is functional. Host1, Host2, and Host3 cannot communicate with each other. Based on the router configuration, what is causing the problem?",
        "answers": [
          "IP addresses on the subinterfaces are incorrectly matched to the VLANs."
        ]
      },
      {
        "question": "Refer to the exhibit. A router-on-a-stick configuration was implemented for VLANs 15, 30, and 45, according to the show running-config command output. PCs on VLAN 45 that are using the 172.16.45.0 /24 network are having trouble connecting to PCs on VLAN 30 in the 172.16.30.0 /24 network. Which error is most likely causing this problem?​",
        "answers": [
          "There is an incorrect IP address configured on GigabitEthernet 0/0.30."
        ]
      },
      {
        "question": "What is a characteristic of a routed port on a Layer 3 switch?",
        "answers": [
          "It is not assigned to a VLAN."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator needs to configure router-on-a-stick for the networks that are shown. How many subinterfaces will have to be created on the router if each VLAN that is shown is to be routed and each VLAN has its own subinterface?",
        "answers": [
          "4"
        ]
      },
      {
        "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# mdix auto command?",
        "answers": [
          "It automatically adjusts the port to allow device connections to use either a straight-through or a crossover cable."
        ]
      },
      {
        "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# ip address 172.18.33.88 255.255.255.0 command?",
        "answers": [
          "It applies an IPv4 address to the virtual interface."
        ]
      },
      {
        "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw# configure terminal command?",
        "answers": [
          "It enters the global configuration mode."
        ]
      },
      {
        "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw# configure terminal command?",
        "answers": [
          "It enters the global configuration mode."
        ]
      },
      {
        "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# shutdown command?",
        "answers": [
          "It disables a virtual or physical switch interface."
        ]
      },
      {
        "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# shutdown command?",
        "answers": [
          "It disables a virtual or physical switch interface."
        ]
      },
      {
        "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# ipv6 address 2001:db8:a2b4:88::1/64 command?",
        "answers": [
          "It applies an IPv6 address to the virtual interface."
        ]
      },
      {
        "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config-if)# exit command?",
        "answers": [
          "It returns to global configuration mode."
        ]
      },
      {
        "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw> enable command?",
        "answers": [
          "It enters privileged mode."
        ]
      },
      {
        "question": "What type of VLAN should not carry voice and network management traffic?",
        "answers": [
          "data VLAN"
        ]
      },
      {
        "question": "What type of VLAN is designed to reserve bandwidth to ensure IP Phone quality?",
        "answers": [
          "voice VLAN"
        ]
      },
      {
        "question": "What type of VLAN is initially the management VLAN?",
        "answers": [
          "default VLAN"
        ]
      },
      {
        "question": "What type of VLAN is designed to have a delay of less than 150 ms across the network?",
        "answers": [
          "voice VLAN"
        ]
      },
      {
        "question": "What type of VLAN is used to separate the network into groups of users or devices?",
        "answers": [
          "data VLAN"
        ]
      },
      {
        "question": "What type of VLAN is configured specifically for network traffic such as SSH, Telnet, HTTPS, HTTP, and SNMP?",
        "answers": [
          "management VLAN"
        ]
      },
      {
        "question": "What type of VLAN supports untagged traffic?",
        "answers": [
          "native VLAN"
        ]
      },
      {
        "question": "What type of VLAN supports untagged traffic?",
        "answers": [
          "native VLAN"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator has configured R1 as shown. When the administrator checks the status of the serial interface, the interface is shown as being administratively down. What additional command must be entered on the serial interface of R1 to bring the interface up?",
        "answers": [
          "no shutdown"
        ]
      },
      {
        "question": "Refer to the exhibit. The network administrator wants to configure Switch1 to allow SSH connections and prohibit Telnet connections. How should the network administrator change the displayed configuration to satisfy the requirement?",
        "answers": [
          "Modify the transport input command."
        ]
      },
      {
        "question": "Which solution would help a college alleviate network congestion due to collisions?",
        "answers": [
          "a high port density switch"
        ]
      },
      {
        "question": "Which two statements are correct with respect to SVI inter-VLAN routing? (Choose two.)",
        "answers": [
          "Switching packets is faster with SVI.",
          "There is no need for a connection to a router."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is configuring inter-VLAN routing on a network. For now, only one VLAN is being used, but more will be added soon. What is the missing parameter that is shown as the highlighted question mark in the graphic?",
        "answers": [
          "It identifies the VLAN number."
        ]
      },
      {
        "question": "Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port?",
        "answers": [
          "native"
        ]
      },
      {
        "question": "A network administrator issues the show vlan brief command while troubleshooting a user support ticket. What output will be displayed?",
        "answers": [
          "the VLAN assignment and membership for all switch ports"
        ]
      },
      {
        "question": "Which message is displayed when 10.10.10.1 is entered into the PC1 Web Browser address bar?",
        "answers": [
          "File Server"
        ]
      },
      {
        "question": "Match each DHCP message type with its description. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-20_225135.jpg"
      },
      {
        "question": "What type of VLAN is configured specifically for network traffic such as SSH, Telnet, HTTPS, HHTP, and SNMP?",
        "answers": [
          "management VLAN"
        ]
      }
    ],
    "5-6": [
      {
        "question": "What additional information is contained in the 12-bit extended system ID of a BPDU?",
        "answers": [
          "VLAN ID"
        ]
      },
      {
        "question": "During the implementation of Spanning Tree Protocol, all switches are rebooted by the network administrator. What is the first step of the spanning-tree election process?",
        "answers": [
          "All the switches send out BPDUs advertising themselves as the root bridge."
        ]
      },
      {
        "question": "Which STP port role is adopted by a switch port if there is no other port with a lower cost to the root bridge?",
        "answers": [
          "root port"
        ]
      },
      {
        "question": "Which two concepts relate to a switch port that is intended to have only end devices attached and intended never to be used to connect to another switch? (Choose two.)",
        "answers": [
          "edge port",
          "PortFast"
        ]
      },
      {
        "question": "Which three components are combined to form a bridge ID?",
        "answers": [
          "extended system ID",
          "bridge priority",
          "MAC address"
        ]
      },
      {
        "question": "Match the STP protocol with the correct description. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2024-10-08_145807.jpg"
      },
      {
        "question": "In which two port states does a switch learn MAC addresses and process BPDUs in a PVST network? (Choose two.)",
        "answers": [
          "forwarding",
          "learning"
        ]
      },
      {
        "question": "If no bridge priority is configured in PVST, which criteria is considered when electing the root bridge?",
        "answers": [
          "lowest MAC address"
        ]
      },
      {
        "question": "Match the spanning-tree feature with the protocol type. (Not all options are used.)",
        "answers": [
          "RSTP -> Cisco implementation of IEEE 802.1D",
          "MSTP -> Fast converging enhancement of IEEE 802.1D",
          "MST -> IEEE standard that reduces the number of STP instances",
          "PVST+ -> Proprietary per VLAN implementation of IEEE 802.1w"
        ]
      },
      {
        "question": "When the show spanning-tree vlan 33 command is issued on a switch, three ports are shown in the forwarding state. In which two port roles could these interfaces function while in the forwarding state? (Choose two.)",
        "answers": [
          "designated",
          "root"
        ]
      },
      {
        "question": "What is the function of STP in a scalable network?",
        "answers": [
          "It disables redundant paths to eliminate Layer 2 loops."
        ]
      },
      {
        "question": "What is a characteristic of spanning tree?",
        "answers": [
          "It is enabled by default on Cisco switches."
        ]
      },
      {
        "question": "Which spanning tree standard supports only one root bridge so that traffic from all VLANs flows over the same path?",
        "answers": [
          "802.1D"
        ]
      },
      {
        "question": "What is the purpose of the Spanning Tree Protocol (STP)?",
        "answers": [
          "prevents Layer 2 loops"
        ]
      },
      {
        "question": "What is the value used to determine which port on a non-root bridge will become a root port in a STP network?",
        "answers": [
          "the path cost"
        ]
      },
      {
        "question": "Refer to the exhibit. Which switch will be the root bridge after the election process is complete?",
        "answers": [
          "S2"
        ]
      },
      {
        "question": "What are two drawbacks to turning spanning tree off and having multiple paths through the Layer 2 switch network? (Choose two.)",
        "answers": [
          "The MAC address table becomes unstable.",
          "Broadcast frames are transmitted indefinitely."
        ]
      },
      {
        "question": "A small company network has six interconnected Layer 2 switches. Currently all switches are using the default bridge priority value. Which value can be used to configure the bridge priority of one of the switches to ensure that it becomes the root bridge in this design?",
        "answers": [
          "28672"
        ]
      },
      {
        "question": "Refer to the exhibit. The administrator tried to create an EtherChannel between S1 and the other two switches via the commands that are shown, but was unsuccessful. What is the problem?",
        "answers": [
          "Traffic cannot be sent to two different switches through the same EtherChannel link."
        ]
      },
      {
        "question": "Which statement is true regarding the use of PAgP to create EtherChannels?",
        "answers": [
          "It is Cisco proprietary."
        ]
      },
      {
        "question": "What are two requirements to be able to configure an EtherChannel between two switches? (Choose two.)",
        "answers": [
          "All the interfaces need to work at the same speed.",
          "All the interfaces need to be working in the same duplex mode."
        ]
      },
      {
        "question": "Refer to the exhibit. On the basis of the output that is shown, what can be determined about the EtherChannel bundle?",
        "answers": [
          "A Cisco proprietary protocol was used to negotiate the EtherChannel link."
        ]
      },
      {
        "question": "Which two parameters must match on the ports of two switches to create a PAgP EtherChannel between the switches? (Choose two.)",
        "answers": [
          "speed",
          "VLAN information"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is configuring an EtherChannel link between two switches, SW1 and SW2. Which statement describes the effect after the commands are issued on SW1 and SW2?",
        "answers": [
          "The EtherChannel fails to establish."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is configuring an EtherChannel link between two switches, SW1 and SW2. However, the EtherChannel link fails to establish. What change in configuration would correct the problem?",
        "answers": [
          "Configure SW2 EtherChannel mode to desirable."
        ]
      },
      {
        "question": "A network administrator configured an EtherChannel link with three interfaces between two switches. What is the result if one of the three interfaces is down?",
        "answers": [
          "The remaining two interfaces continue to load balance traffic."
        ]
      },
      {
        "question": "A network administrator is configuring an EtherChannel link between switches SW1 and SW2 by using the command SW1(config-if-range)# channel-group 1 mode auto. Which command must be used on SW2 to enable this EtherChannel?",
        "answers": [
          "SW2(config-if-range)# channel-group 1 mode desirable"
        ]
      },
      {
        "question": "Which technology is an open protocol standard that allows switches to automatically bundle physical ports into a single logical link?",
        "answers": [
          "LACP"
        ]
      },
      {
        "question": "What is a requirement to configure a trunking EtherChannel between two switches?",
        "answers": [
          "The allowed range of VLANs must be the same on both switches."
        ]
      },
      {
        "question": "What are two advantages of using LACP? (Choose two.)",
        "answers": [
          "It allows directly connected switches to negotiate an EtherChannel link.",
          "It allows the use of multivendor devices."
        ]
      },
      {
        "question": "A switch is configured to run STP. What term describes a non-root port that is permitted to forward traffic on the network?",
        "answers": [
          "designated port"
        ]
      },
      {
        "question": "What are two advantages of EtherChannel? (Choose two.)",
        "answers": [
          "Spanning Tree Protocol views the physical links in an EtherChannel as one logical connection.",
          "Configuring the EtherChannel interface provides consistency in the configuration of the physical links."
        ]
      },
      {
        "question": "Refer to the exhibit. What are the possible port roles for ports A, B, C, and D in this RSTP-enabled network?",
        "answers": [
          "alternate, designated, root, root"
        ]
      },
      {
        "question": "Refer to the exhibit. Which switching technology would allow each access layer switch link to be aggregated to provide more bandwidth between each Layer 2 switch and the Layer 3 switch?",
        "answers": [
          "EtherChannel"
        ]
      },
      {
        "question": "Refer to the exhibit. An administrator wants to form an EtherChannel between the two switches by using the Port Aggregation Protocol. If switch S1 is configured to be in auto mode, which mode should be configured on S2 to form the EtherChannel?",
        "answers": [
          "desirable"
        ]
      },
      {
        "question": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.",
        "answers": [
          "interface GigabitEthernet0/1"
        ]
      },
      {
        "question": "A set of switches is being connected in a LAN topology. Which STP bridge priority value will make it least likely for the switch to be selected as the root?",
        "answers": [
          "61440"
        ]
      },
      {
        "question": "In which two PVST+ port states are MAC addresses learned? (Choose two.)",
        "answers": [
          "learning",
          "forwarding"
        ]
      },
      {
        "question": "Which port role is assigned to the switch port that has the lowest cost to reach the root bridge?",
        "answers": [
          "root port"
        ]
      },
      {
        "question": "A switch is configured to run STP. What term describes the switch port closest, in terms of overall cost, to the root bridge?",
        "answers": [
          "root port"
        ]
      },
      {
        "question": "A switch is configured to run STP. What term describes a field used to specify a VLAN ID?",
        "answers": [
          "extended system ID"
        ]
      },
      {
        "question": "A switch is configured to run STP. What term describes the reference point for all path calculations?",
        "answers": [
          "root bridge"
        ]
      },
      {
        "question": "A switch is configured to run STP. What term describes a field that has a default value of 32,768 and is the initial deciding factor when electing a root bridge?",
        "answers": [
          "bridge priority"
        ]
      },
      {
        "question": "Which statement describes an EtherChannel implementation?",
        "answers": [
          "A trunked port can be part of an EtherChannel bundle."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator issued the show etherchannel summary command on the switch S1. What conclusion can be drawn?",
        "answers": [
          "The EtherChannel is not functional."
        ]
      },
      {
        "question": "Which statement describes a characteristic of EtherChannel?",
        "answers": [
          "It is made by combining multiple physical links that are seen as one link between two switches."
        ]
      },
      {
        "question": "Which two channel group modes would place an interface in a negotiating state using PAgP? (Choose two.)",
        "answers": [
          "desirable",
          "auto"
        ]
      },
      {
        "question": "Which mode configuration setting would allow formation of an EtherChannel link between switches SW1 and SW2 without sending negotiation traffic?",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "Refer to the exhibit. An EtherChannel was configured between switches S1 and S2, but the interfaces do not form an EtherChannel. What is the problem?",
        "answers": [
          "The EtherChannel was not configured with the same allowed range of VLANs on each interface."
        ]
      },
      {
        "question": "When EtherChannel is configured, which mode will force an interface into a port channel without exchanging aggregation protocol packets?",
        "answers": [
          "on"
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
        "question": "Which protocol provides up to 16 instances of RSTP, combines many VLANs with the same physical and logical topology into a common RSTP instance, and provides support for PortFast, BPDU guard, BPDU filter, root guard, and loop guard?",
        "answers": [
          "MST"
        ]
      },
      {
        "question": "What is the outcome of a Layer 2 broadcast storm?",
        "answers": [
          "New traffic is discarded by the switch because it is unable to be processed."
        ]
      },
      {
        "question": "Which two network design features require Spanning Tree Protocol (STP) to ensure correct network operation? (Choose two.)",
        "answers": [
          "redundant links between Layer 2 switches",
          "removing single points of failure with multiple Layer 2 switches"
        ]
      },
      {
        "question": "A network administrator has configured an EtherChannel between two switches that are connected via four trunk links. If the physical interface for one of the trunk links changes to a down state, what happens to the EtherChannel?",
        "answers": [
          "The EtherChannel will remain functional."
        ]
      }
    ],
    "7-9": [
      {
        "question": "A DHCP-enabled client PC has just booted. During which two steps will the client PC use broadcast messages when communicating with a DHCP server? (Choose two.)",
        "answers": [
          "DHCPDISCOVER",
          "DHCPREQUEST"
        ]
      },
      {
        "question": "An administrator issues the commands:",
        "answers": [
          "configuring the router to obtain IP parameters from a DHCPv4 server"
        ]
      },
      {
        "question": "When a client is requesting an initial address lease from a DHCP server, why is the DHCPREQUEST message sent as a broadcast?",
        "answers": [
          "The client may have received offers from multiple servers, and the broadcast serves to implicitly decline those other offers."
        ]
      },
      {
        "question": "Which DHCP IPv4 message contains the following information?",
        "answers": [
          "DHCPDISCOVER"
        ]
      },
      {
        "question": "Place the options in the following order:",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "Which protocol automates assignment of IP addresses on a network, and which port number does it use? (Choose two.)",
        "answers": [
          "DHCP",
          "67"
        ]
      },
      {
        "question": "Refer to the exhibit. PC1 is configured to obtain a dynamic IP address from the DHCP server. PC1 has been shut down for two weeks. When PC1 boots and tries to request an available IP address, which destination IP address will PC1 place in the IP header?",
        "answers": [
          "255.255.255.255"
        ]
      },
      {
        "question": "Which message does an IPv4 host use to reply when it receives a DHCPOFFER message from a DHCP server?",
        "answers": [
          "DHCPREQUEST"
        ]
      },
      {
        "question": "Which command, when issued in the interface configuration mode of a router, enables the interface to acquire an IPv4 address automatically from an ISP, when that link to the ISP is enabled?",
        "answers": [
          "ip address dhcp"
        ]
      },
      {
        "question": "Which kind of message is sent by a DHCP client when its IP address lease has expired?​",
        "answers": [
          "a DHCPREQUEST unicast message​"
        ]
      },
      {
        "question": "A host PC is attempting to lease an address through DHCP. What message is sent by the server to let the client know it is able to use the provided IP information?",
        "answers": [
          "DHCPACK"
        ]
      },
      {
        "question": "What is one indication that a Windows computer did not receive an IPv4 address from a DHCP server?",
        "answers": [
          "The computer receives an IP address that starts with 169.254."
        ]
      },
      {
        "question": "Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?",
        "answers": [
          "broadcast DHCPREQUEST"
        ]
      },
      {
        "question": "A small coffee shop is offering free Wi-Fi to customers. The network includes a wireless router and a DSL modem that is connected to the local phone company. What method is typically used to configure the connection to the phone company?",
        "answers": [
          "Set the WAN connection in the wireless router as a DHCP client."
        ]
      },
      {
        "question": "A company uses DHCP to manage IP address deployment for employee workstations. The IT department deploys multiple DHCP servers in the data center and uses DHCP relay agents to facilitate the DHCP requests from workstations. Which two UDP ports are used to forward DHCP traffic? (Choose two.)",
        "answers": [
          "67",
          "68"
        ]
      },
      {
        "question": "A client device on an Ethernet segment needs an IP address in order to communicate on the network. A DHCP server with IP address 192.168.1.1 has been configured and enabled on the network. How will a client device obtain a usable IP address for this network?",
        "answers": [
          "Send a DHCPDISCOVER message to physical address FF-FF-FF-FF-FF-FF."
        ]
      },
      {
        "question": "What is an advantage of configuring a Cisco router as a relay agent?",
        "answers": [
          "It can provide relay services for multiple UDP services."
        ]
      },
      {
        "question": "Which statement is true about DHCP operation?​",
        "answers": [
          "When a device that is configured to use DHCP boots, the client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the network.​"
        ]
      },
      {
        "question": "Order the DHCP message types as they would occur between a DHCP client and a DHCP server.",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/349.jpg"
      },
      {
        "question": "A network administrator configures a router to send RA messages with M flag as 0 and O flag as 1. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?",
        "answers": [
          "It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information."
        ]
      },
      {
        "question": "Refer to the exhibit. What should be done to allow PC-A to receive an IPv6 address from the DHCPv6 server?",
        "answers": [
          "Add the ipv6 dhcp relay command to interface Fa0/0."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is implementing the stateless DHCPv6 operation for the company. Clients are configuring IPv6 addresses as expected. However, the clients are not getting the DNS server address and the domain name information configured in the DHCP pool. What could be the cause of the problem?",
        "answers": [
          "The router is configured for SLAAC operation."
        ]
      },
      {
        "question": "Question as presented:",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "A company uses the SLAAC method to configure IPv6 addresses for the employee workstations. Which address will a client use as its default gateway?​",
        "answers": [
          "the link-local address of the router interface that is attached to the network"
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is configuring a router for DHCPv6 operation. Which conclusion can be drawn based on the commands?",
        "answers": [
          "The router is configured for stateless DHCPv6 operation."
        ]
      },
      {
        "question": "A network administrator is analyzing the features that are supported by different first-hop router redundancy protocols. Which statement describes a feature that is associated with HSRP?",
        "answers": [
          "HSRP uses active and standby routers."
        ]
      },
      {
        "question": "Refer to the exhibit. What protocol can be configured on gateway routers R1 and R2 that will allow traffic from the internal LAN to be load balanced across the two gateways to the Internet?",
        "answers": [
          "GLBP"
        ]
      },
      {
        "question": "Refer to the exhibit. A network engineer is troubleshooting host connectivity on a LAN that uses a first hop redundancy protocol. Which IPv4 gateway address should be configured on the host?",
        "answers": [
          "192.168.2.100"
        ]
      },
      {
        "question": "Refer to the exhibit. Which destination MAC address is used when frames are sent from the workstation to the default gateway?",
        "answers": [
          "MAC address of the virtual router"
        ]
      },
      {
        "question": "Question as presented:",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "Which FHRP implementation is a Cisco-proprietary protocol that suppports IPv4 load sharing?",
        "answers": [
          "GLBP"
        ]
      },
      {
        "question": "The address pool of a DHCP server is configured with 10.92.71.0/25. The network administrator reserves 8 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
        "answers": [
          "118"
        ]
      },
      {
        "question": "Question as presented:",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "After a host has generated an IPv6 address by using the DHCPv6 or SLAAC process, how does the host verify that the address is unique and therefore usable?",
        "answers": [
          "The host sends an ICMPv6 neighbor solicitation message to the DHCP or SLAAC-learned address and if no neighbor advertisement is returned, the address is considered unique."
        ]
      },
      {
        "question": "Which statement describes HSRP?​",
        "answers": [
          "It is used within a group of routers for selecting an active device and a standby device to provide gateway services to a LAN."
        ]
      },
      {
        "question": "What is the keyword that is displayed on www.netacad.com?",
        "answers": [
          "Router"
        ]
      },
      {
        "question": "Match each DHCP message type with its description. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-20_231506.jpg"
      },
      {
        "question": "Match the purpose with its DHCP message type. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/1905334006.webp"
      },
      {
        "question": "Match the DHCP message types to the order of the stateful DHCPv6 process when a client first connects to an IPv6 network. (Not all options are used.)",
        "answers": [
          "Step 1 -> DHCPv6 SOLICIT",
          "Step 2 -> DHCPv6 ADVERTISE",
          "Step 3 -> DHCPv6 REQUEST",
          "Step 4 -> DHCPv6 REPLY"
        ]
      },
      {
        "question": "Match the step number to the sequence of stages that occur during the HSRP failover process. (Not all options are used.)",
        "answers": [
          "Step 1 -> The forwarding router fails.",
          "Step 2 -> The standby router stops seeing hello messages from the forwarding router.",
          "Step 3 -> The standby router assumes the role of the forwarding router.",
          "Step 4 -> The new forwarding router assumes both the IP and MAC addresses of the virtual router."
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
        "question": "Match the DHCP message types to the order of the DHCPv4 process. (Not all options are used.)",
        "answers": [
          "Step 1 -> DHCPDISCOVER",
          "Step 2 -> DHCPOFFER",
          "Step 3 -> DHCPREQUEST",
          "Step 4 -> DHCPACK"
        ]
      },
      {
        "question": "The address pool of a DHCP server is configured with 192.168.234.0/27. The network administrator reserves 22 IP addresses for IP phones. How many IP addresses are left in the pool to be assigned to other hosts?",
        "answers": [
          "8"
        ]
      },
      {
        "question": "A company uses DHCP servers to dynamically assign IPv4 addresses to employee workstations. The address lease duration is set as 5 days. An employee returns to the office after an absence of one week. When the employee boots the workstation, it sends a message to obtain an IP address. Which Layer 2 and Layer 3 destination addresses will the message contain?",
        "answers": [
          "FF-FF-FF-FF-FF-FF and 255.255.255.255"
        ]
      },
      {
        "question": "Which command will allow a network administrator to check the IP address that is assigned to a particular MAC address?",
        "answers": [
          "Router# show ip dhcp binding"
        ]
      },
      {
        "question": "What is the reason that an ISP commonly assigns a DHCP address to a wireless router in a SOHO environment?",
        "answers": [
          "easy IP address management"
        ]
      },
      {
        "question": "What information can be verified through the show ip dhcp binding command?",
        "answers": [
          "the IPv4 addresses that are assigned to hosts by the DHCP server"
        ]
      },
      {
        "question": "What is the result of a network technician issuing the command ip dhcp excluded-address 10.0.15.1 10.0.15.15 on a Cisco router?",
        "answers": [
          "The Cisco router will exclude 15 IP addresses from being leased to DHCP clients."
        ]
      },
      {
        "question": "Match the descriptions to the corresponding DHCPv6 server type. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-22_235504.jpg"
      },
      {
        "question": "Refer to the exhibit. Based on the output that is shown, what kind of IPv6 addressing is being configured?",
        "answers": [
          "stateless DHCPv6"
        ]
      },
      {
        "question": "Which FHRP implementation is a Cisco-proprietary protocol that suppports IPv6 load balancing?",
        "answers": [
          "GLBP for IPv6"
        ]
      },
      {
        "question": "Which set of commands will configure a router as a DHCP server that will assign IPv4 addresses to the 192.168.100.0/23 LAN while reserving the first 10 and the last addresses for static assignment?",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "What is a result when the DHCP servers are not operational in a network?",
        "answers": [
          "Workstations are assigned with IP addresses in the 169.254.0.0/16 network."
        ]
      },
      {
        "question": "A company uses the method SLAAC to configure IPv6 addresses for the workstations of the employees. A network administrator configured the IPv6 address on the LAN interface of the router. The interface status is UP. However, the workstations on the LAN segment did not obtain the correct prefix and prefix length. What else should be configured on the router that is attached to the LAN segment for the workstations to obtain the information?​",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "Which FHRP implementation is a nonproprietary protocol which relies on ICMP to provide IPv4 redundancy?",
        "answers": [
          "IRDP"
        ]
      },
      {
        "question": "Refer to the exhibit. PC-A is unable to receive an IPv6 address from the stateful DHCPv6 server. What is the problem?",
        "answers": [
          "The ipv6 dhcp relay command should be applied to interface Gig0/0."
        ]
      },
      {
        "question": "Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?",
        "answers": [
          "The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation."
        ]
      },
      {
        "question": "Which FHRP implementation is Cisco-proprietary and permits only one router in a group to forward IPv6 packets?",
        "answers": [
          "HSRP for IPv6"
        ]
      },
      {
        "question": "The address pool of a DHCP server is configured with 10.3.2.0/24. The network administrator reserves 3 IP addresses for printers. How many IP addresses are left in the pool to be assigned to other hosts?",
        "answers": [
          "251"
        ]
      },
      {
        "question": "The address pool of a DHCP server is configured with 172.23.143.0/26. The network administrator reserves 14 IP addresses for file servers. How many IP addresses are left in the pool to be assigned to other hosts?",
        "answers": [
          "48"
        ]
      },
      {
        "question": "The address pool of a DHCP server is configured with 10.7.30.0/24. The network administrator reserves 5 IP addresses for printers. How many IP addresses are left in the pool to be assigned to other hosts?",
        "answers": [
          "249"
        ]
      },
      {
        "question": "Which FHRP implementation is a nonproprietary IPv4-only election protocol with limited scalability?",
        "answers": [
          "VRRPv2"
        ]
      },
      {
        "question": "The address pool of a DHCP server is configured with 10.19.44.0/24. The network administrator reserves 6 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
        "answers": [
          "248"
        ]
      },
      {
        "question": "The address pool of a DHCP server is configured with 172.21.121.0/25. The network administrator reserves 12 IP addresses for web servers. How many IP addresses are left in the pool to be assigned to other hosts?",
        "answers": [
          "114"
        ]
      },
      {
        "question": "Which kind of message is sent by a DHCP client when its IP address lease is about to expire?​",
        "answers": [
          "a DHCPREQUEST unicast message​"
        ]
      }
    ],
    "10-13": [
      {
        "question": "Which Layer 2 attack will result in legitimate users not getting valid IP addresses?",
        "answers": [
          "DHCP starvation"
        ]
      },
      {
        "question": "What mitigation plan is best for thwarting a DoS attack that is creating a MAC address table overflow?",
        "answers": [
          "Enable port security."
        ]
      },
      {
        "question": "Which three Cisco products focus on endpoint security solutions? (Choose three.)",
        "answers": [
          "Web Security Appliance",
          "Email Security Appliance",
          "NAC Appliance"
        ]
      },
      {
        "question": "True or False?",
        "answers": [
          "true"
        ]
      },
      {
        "question": "Which authentication method stores usernames and passwords in the router and is ideal for small networks?",
        "answers": [
          "local AAA"
        ]
      },
      {
        "question": "What represents a best practice concerning discovery protocols such as CDP and LLDP on network devices?",
        "answers": [
          "Disable both protocols on all interfaces where they are not required."
        ]
      },
      {
        "question": "Which protocol should be used to mitigate the vulnerability of using Telnet to remotely manage network devices?",
        "answers": [
          "SSH"
        ]
      },
      {
        "question": "Which statement describes the behavior of a switch when the MAC address table is full?",
        "answers": [
          "It treats frames as unknown unicast and floods all incoming frames to all ports within the local VLAN."
        ]
      },
      {
        "question": "What device is considered a supplicant during the 802.1X authentication process?",
        "answers": [
          "the client that is requesting authentication"
        ]
      },
      {
        "question": "Refer to the exhibit. Port Fa0/2 has already been configured appropriately. The IP phone and PC work properly. Which switch configuration would be most appropriate for port Fa0/2 if the network administrator has the following goals?",
        "answers": [
          "SWA(config-if)# switchport port-security"
        ]
      },
      {
        "question": "Refer to the exhibit. Port security has been configured on the Fa 0/12 interface of switch S1. What action will occur when PC1 is attached to switch S1 with the applied configuration?",
        "answers": [
          "Frames from PC1 will cause the interface to shut down immediately, and a log entry will be made."
        ]
      },
      {
        "question": "Which type of VLAN-hopping attack may be prevented by designating an unused VLAN as the native VLAN?",
        "answers": [
          "VLAN double-tagging"
        ]
      },
      {
        "question": "A network administrator is configuring DAI on a switch with the command ip arp inspection validate src-mac. What is the purpose of this configuration command?",
        "answers": [
          "It checks the source MAC address in the Ethernet header against the sender MAC address in the ARP body."
        ]
      },
      {
        "question": "Which two commands can be used to enable BPDU guard on a switch? (Choose two.)",
        "answers": [
          "S1(config)# spanning-tree portfast bpduguard default",
          "S1(config-if)# spanning-tree bpduguard enable"
        ]
      },
      {
        "question": "As part of the new security policy, all switches on the network are configured to automatically learn MAC addresses for each port. All running configurations are saved at the start and close of every business day. A severe thunderstorm causes an extended power outage several hours after the close of business. When the switches are brought back online, the dynamically learned MAC addresses are retained. Which port security configuration enabled this?",
        "answers": [
          "sticky secure MAC addresses"
        ]
      },
      {
        "question": "Which type of management frame may regularly be broadcast by an AP?",
        "answers": [
          "beacon"
        ]
      },
      {
        "question": "What are the two methods that are used by a wireless NIC to discover an AP? (Choose two.)",
        "answers": [
          "receiving a broadcast beacon frame",
          "transmitting a probe request"
        ]
      },
      {
        "question": "A technician is configuring the channel on a wireless router to either 1, 6, or 11. What is the purpose of adjusting the channel?",
        "answers": [
          "to avoid interference from nearby wireless devices"
        ]
      },
      {
        "question": "While attending a conference, participants are using laptops for network connectivity. When a guest speaker attempts to connect to the network, the laptop fails to display any available wireless networks. The access point must be operating in which mode?",
        "answers": [
          "active"
        ]
      },
      {
        "question": "A network administrator is required to upgrade wireless access to end users in a building. To provide data rates up to 1.3 Gb/s and still be backward compatible with older devices, which wireless standard should be implemented?",
        "answers": [
          "802.11ac"
        ]
      },
      {
        "question": "A technician is about to install and configure a wireless network at a small branch office. What is the first security measure the technician should apply immediately upon powering up the wireless router?",
        "answers": [
          "Change the default user-name and password of the wireless router."
        ]
      },
      {
        "question": "On a Cisco 3504 WLC dashboard, which option provides access to the full menu of features?",
        "answers": [
          "Advanced"
        ]
      },
      {
        "question": "Which step is required before creating a new WLAN on a Cisco 3500 series WLC?",
        "answers": [
          "Create a new VLAN interface."
        ]
      },
      {
        "question": "A network engineer is troubleshooting a newly deployed wireless network that is using the latest 802.11 standards. When users access high bandwidth services such as streaming video, the wireless network performance is poor. To improve performance the network engineer decides to configure a 5 Ghz frequency band SSID and train users to use that SSID for streaming media services. Why might this solution improve the wireless network performance for that type of service?",
        "answers": [
          "The 5 GHz band has more channels and is less crowded than the 2.4 GHz band, which makes it more suited to streaming multimedia."
        ]
      },
      {
        "question": "A network administrator is configuring a RADIUS server connection on a Cisco 3500 series WLC. The configuration requires a shared secret password. What is the purpose for the shared secret password?",
        "answers": [
          "It is used to encrypt the messages between the WLC and the RADIUS server."
        ]
      },
      {
        "question": "Which three parameters would need to be changed if best practices are being implemented for a home wireless AP? (Choose three.)",
        "answers": [
          "wireless network password",
          "AP password",
          "SSID"
        ]
      },
      {
        "question": "Which access control component, implementation, or protocol is based upon usernames and passwords?",
        "answers": [
          "authentication"
        ]
      },
      {
        "question": "Which type of wireless network is based on the 802.11 standard and a 2.4-GHz or 5-GHz radio frequency?",
        "answers": [
          "wireless local-area network"
        ]
      },
      {
        "question": "Which two Cisco solutions help prevent DHCP starvation attacks? (Choose two.)",
        "answers": [
          "DHCP Snooping",
          "Port Security"
        ]
      },
      {
        "question": "What are three techniques for mitigating VLAN attacks? (Choose three.)",
        "answers": [
          "Enable trunking manually.",
          "Disable DTP.",
          "Set the native VLAN to an unused VLAN."
        ]
      },
      {
        "question": "Refer to the exhibit. What can be determined about port security from the information that is shown?",
        "answers": [
          "The port violation mode is the default for any port that has port security enabled."
        ]
      },
      {
        "question": "A network administrator of a college is configuring the WLAN user authentication process. Wireless users are required to enter username and password credentials that will be verified by a server. Which server would provide such service?",
        "answers": [
          "RADIUS"
        ]
      },
      {
        "question": "A technician is troubleshooting a slow WLAN that consists of 802.11b and 802.11g devices. A new 802.11n/ac dual-band router has been deployed on the network to replace the old 802.11g router. What can the technician do to address the slow wireless speed?",
        "answers": [
          "Split the wireless traffic between the 802.11n 2.4 GHz band and the 5 GHz band."
        ]
      },
      {
        "question": "The company handbook states that employees cannot have microwave ovens in their offices. Instead, all employees must use the microwave ovens located in the employee cafeteria. What wireless security risk is the company trying to avoid?",
        "answers": [
          "accidental interference"
        ]
      },
      {
        "question": "What is the function provided by CAPWAP protocol in a corporate wireless network?",
        "answers": [
          "CAPWAP provides the encapsulation and forwarding of wireless user traffic between an access point and a wireless LAN controller."
        ]
      },
      {
        "question": "Which event will take place if there is a port security violation on switch S1 interface Fa0/1?",
        "answers": [
          "Packets with unknown source addresses will be dropped."
        ]
      },
      {
        "question": "Match each functional component of AAA with its description. (Not all options are used.)",
        "answers": [
          "Authorization -> Determines what resources users can access or the operations they are allowed to perform",
          "Authentication -> Proves that users are who they say they are",
          "Accounting -> Records what users do and what they access"
        ]
      },
      {
        "question": "What are two protocols that are used by AAA to authenticate users against a central database of usernames and password? (Choose two.)",
        "answers": [
          "TACACS+",
          "RADIUS"
        ]
      },
      {
        "question": "What is the result of a DHCP starvation attack?",
        "answers": [
          "Legitimate clients are unable to lease IP addresses."
        ]
      },
      {
        "question": "Which feature or configuration on a switch makes it vulnerable to VLAN double-tagging attacks?",
        "answers": [
          "the native VLAN of the trunking port being the same as a user VLAN"
        ]
      },
      {
        "question": "Which component of AAA allows an administrator to track individuals who access network resources and any changes that are made to those resources?",
        "answers": [
          "accounting"
        ]
      },
      {
        "question": "Refer to the exhibit. PC1 and PC2 should be able to obtain IP address assignments from the DHCP server. How many ports among switches should be assigned as trusted ports as part of the DHCP snooping configuration?",
        "answers": [
          "7"
        ]
      },
      {
        "question": "An IT security specialist enables port security on a switch port of a Cisco switch. What is the default violation mode in use until the switch port is configured to use a different violation mode?",
        "answers": [
          "shutdown"
        ]
      },
      {
        "question": "A laptop cannot connect to a wireless access point. Which two troubleshooting steps should be taken first? (Choose two.)",
        "answers": [
          "Ensure that the wireless NIC is enabled.",
          "Ensure that the wireless SSID is chosen."
        ]
      },
      {
        "question": "What is an advantage of SSID cloaking?​",
        "answers": [
          "Clients will have to manually identify the SSID to connect to the network.​"
        ]
      },
      {
        "question": "What is a wireless security mode that requires a RADIUS server to authenticate wireless users?",
        "answers": [
          "enterprise"
        ]
      },
      {
        "question": "A company has recently implemented an 802.11n wireless network. Some users are complaining that the wireless network is too slow. Which solution is the best method to enhance the performance of the wireless network?",
        "answers": [
          "Split the traffic between the 2.4 GHz and 5 GHz frequency bands."
        ]
      },
      {
        "question": "Which protocol can be used to monitor the network?",
        "answers": [
          "SNMP"
        ]
      },
      {
        "question": "A network administrator deploys a wireless router in a small law firm. Employee laptops join the WLAN and receive IP addresses in the 10.0.10.0/24 network. Which service is used on the wireless router to allow the employee laptops to access the internet?",
        "answers": [
          "NAT"
        ]
      },
      {
        "question": "Which service can be used on a wireless router to prioritize network traffic among different types of applications so that voice and video data are prioritized over email and web data?",
        "answers": [
          "QoS"
        ]
      },
      {
        "question": "Which access control component, implementation, or protocol is based on device roles of supplicant, authenticator, and authentication server?",
        "answers": [
          "802.1X"
        ]
      },
      {
        "question": "Which type of wireless network is suitable for national and global communications?",
        "answers": [
          "wireless wide-area network"
        ]
      },
      {
        "question": "Which feature on a switch makes it vulnerable to VLAN hopping attacks?",
        "answers": [
          "the automatic trunking port feature enabled for all ports by default"
        ]
      },
      {
        "question": "Which component of AAA is used to determine which resources a user can access and which operations the user is allowed to perform?",
        "answers": [
          "authorization"
        ]
      },
      {
        "question": "Refer to the exhibit. The Fa0/2 interface on switch S1 has been configured with the switchport port-security mac-address 0023.189d.6456 command and a workstation has been connected. What could be the reason that the Fa0/2 interface is shutdown?",
        "answers": [
          "The MAC address of PC1 that connects to the Fa0/2 interface is not the configured MAC address."
        ]
      },
      {
        "question": "A network administrator enters the following commands on the switch SW1.",
        "answers": [
          "FastEthernet ports 5 through 10 can receive up to 6 DHCP discovery messages per second."
        ]
      },
      {
        "question": "A network administrator is configuring port security on a Cisco switch. The company security policy specifies that when a violation occurs, packets with unknown source addresses should be dropped and no notification should be sent. Which violation mode should be configured on the interfaces?",
        "answers": [
          "protect"
        ]
      },
      {
        "question": "A network administrator is working to improve WLAN performance on a dual-band wireless router. What is a simple way to achieve a split-the-traffic result?",
        "answers": [
          "Make sure that different SSIDs are used for the 2.4 GHz and 5 GHz bands."
        ]
      },
      {
        "question": "Which access control component, implementation, or protocol controls what users can do on the network?",
        "answers": [
          "authorization"
        ]
      },
      {
        "question": "Which type of wireless network is suitable for providing wireless access to a city or district?",
        "answers": [
          "wireless metropolitan-area network"
        ]
      },
      {
        "question": "On a Cisco 3504 WLC Summary page ( Advanced > Summary ), which tab allows a network administrator to access and configure a WLAN for a specific security option such as WPA2?",
        "answers": [
          "WLANs"
        ]
      },
      {
        "question": "What type of wireless antenna is best suited for providing coverage in large open spaces, such as hallways or large conference rooms?",
        "answers": [
          "omnidirectional"
        ]
      },
      {
        "question": "What security benefit is gained from enabling BPDU guard on PortFast enabled interfaces?",
        "answers": [
          "preventing rogue switches from being added to the network"
        ]
      },
      {
        "question": "Which access control component, implementation, or protocol logs EXEC and configuration commands configured by a user?",
        "answers": [
          "accounting"
        ]
      },
      {
        "question": "Which type of wireless network uses transmitters to provide coverage over an extensive geographic area?",
        "answers": [
          "wireless wide-area network"
        ]
      },
      {
        "question": "Which access control component, implementation, or protocol controls who is permitted to access a network?",
        "answers": [
          "authentication"
        ]
      },
      {
        "question": "What two IEEE 802.11 wireless standards operate only in the 5 GHz range? (Choose two.)",
        "answers": [
          "802.11ac",
          "802.11a"
        ]
      },
      {
        "question": "Which type of wireless network uses low powered transmitters for a short-range network, usually 20 to 30 ft. (6 to 9 meters)?",
        "answers": [
          "wireless personal-area network"
        ]
      },
      {
        "question": "Which wireless network topology would be used by network engineers to provide a wireless network for an entire college building?",
        "answers": [
          "infrastructure"
        ]
      },
      {
        "question": "Which type of wireless network uses transmitters to provide wireless service over a large urban region?",
        "answers": [
          "wireless metropolitan-area network"
        ]
      },
      {
        "question": "Which type of wireless network is suitable for use in a home or office?",
        "answers": [
          "wireless local-area network"
        ]
      },
      {
        "question": "Which access control component, implementation, or protocol indicates success or failure of a client-requested service with a PASS or FAIL message?",
        "answers": [
          "authorization"
        ]
      },
      {
        "question": "Which type of wireless network often makes use of devices mounted on buildings?",
        "answers": [
          "wireless metropolitan-area network"
        ]
      },
      {
        "question": "A network administrator is configuring DAI on a switch with the command ip arp inspection validate src-mac. What is the purpose of this configuration command?",
        "answers": [
          "It checks the source MAC address in the Ethernet header against the sender MAC address in the ARP body."
        ]
      },
      {
        "question": "Which access control component, implementation, or protocol collects and reports usage data?",
        "answers": [
          "accounting"
        ]
      },
      {
        "question": "Which type of wireless network uses transmitters to cover a medium-sized network, usually up to 300 feet (91.4 meters)?",
        "answers": [
          "wireless local-area network"
        ]
      },
      {
        "question": "A technician is troubleshooting a slow WLAN and decides to use the split-the-traffic approach. Which two parameters would have to be configured to do this? (Choose two.)",
        "answers": [
          "Configure the 5 GHz band for streaming multimedia and time sensitive traffic.",
          "Configure the 2.4 GHz band for basic internet traffic that is not time sensitive."
        ]
      },
      {
        "question": "Which access control component, implementation, or protocol restricts LAN access through publicly accessible switch ports?",
        "answers": [
          "802.1X"
        ]
      }
    ],
    "14-16": [
      {
        "question": "Which feature on a Cisco router permits the forwarding of traffic for which there is no specific route?",
        "answers": [
          "gateway of last resort"
        ]
      },
      {
        "question": "Which three advantages are provided by static routing? (Choose three.)",
        "answers": [
          "Static routing does not advertise over the network, thus providing better security.",
          "Static routing typically uses less network bandwidth and fewer CPU operations than dynamic routing does.",
          "The path a static route uses to send data is known."
        ]
      },
      {
        "question": "What are two functions of dynamic routing protocols? (Choose two.)",
        "answers": [
          "to maintain routing tables",
          "to discover the network"
        ]
      },
      {
        "question": "What is an advantage of using dynamic routing protocols instead of static routing?",
        "answers": [
          "ability to actively search for new routes if the current path becomes unavailable​"
        ]
      },
      {
        "question": "What happens to a static route entry in a routing table when the outgoing interface associated with that route goes into the down state?",
        "answers": [
          "The static route is removed from the routing table."
        ]
      },
      {
        "question": "What is a characteristic of a static route that matches all packets?",
        "answers": [
          "It identifies the gateway IP address to which the router sends all IP packets for which it does not have a learned or static route."
        ]
      },
      {
        "question": "When would it be more beneficial to use a dynamic routing protocol instead of static routing?",
        "answers": [
          "on a network where there is a lot of topology changes"
        ]
      },
      {
        "question": "Which route would be used to forward a packet with a source IP address of 192.168.10.1 and a destination IP address of 10.1.1.1?",
        "answers": [
          "O 10.1.1.0/24 [110/65] via 192.168.200.2, 00:01:20, Serial0/1/0"
        ]
      },
      {
        "question": "Refer to the exhibit. What is the administrative distance value of the route for router R1 to reach the destination IPv6 address of 2001:DB8:CAFE:4::A?",
        "answers": [
          "120"
        ]
      },
      {
        "question": "Which value in a routing table represents trustworthiness and is used by the router to determine which route to install into the routing table when there are multiple routes toward the same destination?",
        "answers": [
          "administrative distance"
        ]
      },
      {
        "question": "Refer to the graphic. Which command would be used on router A to configure a static route to direct traffic from LAN A that is destined for LAN C?",
        "answers": [
          "A(config)# ip route 192.168.4.0 255.255.255.0 192.168.3.2"
        ]
      },
      {
        "question": "On which two routers would a default static route be configured? (Choose two.)",
        "answers": [
          "stub router connection to the rest of the corporate or campus network",
          "edge router connection to the ISP"
        ]
      },
      {
        "question": "Refer to the exhibit. This network has two connections to the ISP, one via router C and one via router B. The serial link between router A and router C supports EIGRP and is the primary link to the Internet. If the primary link fails, the administrator needs a floating static route that avoids recursive route lookups and any potential next-hop issues caused by the multiaccess nature of the Ethernet segment with router B. What should the administrator configure?",
        "answers": [
          "Create a fully specified static route pointing to Fa0/0 with an AD of 95."
        ]
      },
      {
        "question": "What is a characteristic of a floating static route?",
        "answers": [
          "It is configured with a higher administrative distance than the original dynamic routing protocol has."
        ]
      },
      {
        "question": "What network prefix and prefix-length combination is used to create a default static route that will match any IPv6 destination?",
        "answers": [
          "::/0"
        ]
      },
      {
        "question": "Consider the following command:",
        "answers": [
          "administrative distance"
        ]
      },
      {
        "question": "Refer to the exhibit. The routing table for R2 is as follows:",
        "answers": [
          "send the packet out interface Serial0/0/1"
        ]
      },
      {
        "question": "An administrator issues the ipv6 route 2001:db8:acad:1::/32 gigabitethernet0/0 2001:db8:acad:6::1 100 command on a router. What administrative distance is assigned to this route?",
        "answers": [
          "100"
        ]
      },
      {
        "question": "Refer to the exhibit. Which default static route command would allow R1 to potentially reach all unknown networks on the Internet?",
        "answers": [
          "R1(config)# ipv6 route ::/0 G0/1 fe80::2"
        ]
      },
      {
        "question": "Refer to the exhibit. The network engineer for the company that is shown wants to use the primary ISP connection for all external connectivity. The backup ISP connection is used only if the primary ISP connection fails. Which set of commands would accomplish this goal?",
        "answers": [
          "ip route 0.0.0.0 0.0.0.0 s0/0/0"
        ]
      },
      {
        "question": "Refer to the exhibit. Which set of commands will configure static routes that will allow the Park and the Alta routers to a) forward packets to each LAN and b) direct all other traffic to the Internet?",
        "answers": [
          "Park(config)# ip route 0.0.0.0 0.0.0.0 192.168.14.1"
        ]
      },
      {
        "question": "Refer to the exhibit. The small company shown uses static routing. Users on the R2 LAN have reported a problem with connectivity. What is the issue?",
        "answers": [
          "R1 needs a static route to the R2 LAN."
        ]
      },
      {
        "question": "Refer to the exhibit. An administrator is attempting to install an IPv6 static route on router R1 to reach the network attached to router R2. After the static route command is entered, connectivity to the network is still failing. What error has been made in the static route configuration?",
        "answers": [
          "The interface is incorrect."
        ]
      },
      {
        "question": "Refer to the exhibit. How was the host route 2001:DB8:CAFE:4::1/128 installed in the routing table?",
        "answers": [
          "The route was manually entered by an administrator."
        ]
      },
      {
        "question": "Refer to the exhibit. HostA is attempting to contact ServerB. Which two statements correctly describe the addressing that HostA will generate in the process? (Choose two.)",
        "answers": [
          "A packet with the destination IP address of ServerB.",
          "A frame with the destination MAC address of RouterA."
        ]
      },
      {
        "question": "Refer to the exhibit. A ping from R1 to 10.1.1.2 is successful, but a ping from R1 to any address in the 192.168.2.0 network fails. What is the cause of this problem?",
        "answers": [
          "The static route for 192.168.2.0 is incorrectly configured."
        ]
      },
      {
        "question": "Refer to the exhibit. An administrator is attempting to install a default static route on router R1 to reach the Site B network on router R2. After entering the static route command, the route is still not showing up in the routing table of router R1. What is preventing the route from installing in the routing table?",
        "answers": [
          "The next hop address is incorrect."
        ]
      },
      {
        "question": "Refer to the exhibit. The Branch Router has an OSPF neighbor relationship with the HQ router over the 198.51.0.4/30 network. The 198.51.0.8/30 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/1/1 100 was issued on Branch and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?",
        "answers": [
          "Change the administrative distance to 120."
        ]
      },
      {
        "question": "What characteristic completes the following statement?",
        "answers": [
          "an IPv6 link-local address on the adjacent router."
        ]
      },
      {
        "question": "Gateway of last resort is not set.",
        "answers": [
          "GigabitEthernet0/0"
        ]
      },
      {
        "question": "Refer to the exhibit. What routing solution will allow both PC A and PC B to access the Internet with the minimum amount of router CPU and network bandwidth utilization?",
        "answers": [
          "Configure a static default route from R1 to Edge, a default route from Edge to the Internet, and a static route from Edge to R1."
        ]
      },
      {
        "question": "Refer to the exhibit. What would happen after the IT administrator enters the new static route?",
        "answers": [
          "The 172.16.1.0 route learned from RIP would be replaced with the 172.16.1.0 static route."
        ]
      },
      {
        "question": "What two pieces of information are needed in a fully specified static route to eliminate recursive lookups? (Choose two.)",
        "answers": [
          "the interface ID exit interface",
          "the IP address of the next-hop neighbor"
        ]
      },
      {
        "question": "Refer to the exhibit. Which command will properly configure an IPv6 static route on R2 that will allow traffic from PC2 to reach PC1 without any recursive lookups by router R2?",
        "answers": [
          "R2(config)# ipv6 route 2001:db8:10:12::/64 S0/0/0"
        ]
      },
      {
        "question": "Refer to the exhibit. Which static route would an IT technician enter to create a backup route to the 172.16.1.0 network that is only used if the primary RIP learned route fails?",
        "answers": [
          "ip route 172.16.1.0 255.255.255.0 s0/0/0 121"
        ]
      },
      {
        "question": "A user reports that PC0 cannot visit the web server www.server.com. Troubleshoot the network configuration to identify the problem.",
        "answers": [
          "Routing between HQ and Branch is configured incorrectly."
        ]
      },
      {
        "question": "Match the routing table entry to the corresponding function. (Not all options are used.)",
        "manual": true,
        "answers": [],
        "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-22_110729.jpg"
      },
      {
        "question": "Refer to the exhibit. PC A sends a request to Server B. What IPv4 address is used in the destination field in the packet as the packet leaves PC A?",
        "answers": [
          "192.168.12.16"
        ]
      },
      {
        "question": "What does R1 use as the MAC address of the destination when constructing the frame that will go from R1 to Server B?",
        "answers": [
          "If the destination MAC address that corresponds to the IPv4 address is not in the ARP cache, R1 sends an ARP request."
        ]
      },
      {
        "question": "What route would have the lowest administrative distance?",
        "answers": [
          "a directly connected network"
        ]
      },
      {
        "question": "What characteristic completes the following statement?\nWhen an IPv6 static route is configured, as a backup route to a static route in the routing table, the “distance” command is used with ……",
        "answers": [
          "an administrative distance of 2."
        ]
      },
      {
        "question": "A router has used the OSPF protocol to learn a route to the 172.16.32.0/19 network. Which command will implement a backup floating static route to this network?",
        "answers": [
          "ip route 172.16.32.0 255.255.224.0 S0/0/0 200"
        ]
      },
      {
        "question": "Consider the following command:",
        "answers": [
          "Manually shut down the router interface used as a primary route."
        ]
      },
      {
        "question": "Refer to the exhibit. Which type of IPv6 static route is configured in the exhibit?",
        "answers": [
          "recursive static route"
        ]
      },
      {
        "question": "What characteristic completes the following statement?",
        "answers": [
          "the “ipv6 unicast-routing” command."
        ]
      },
      {
        "question": "Gateway of last resort is not set.",
        "answers": [
          "Serial0/0/0"
        ]
      },
      {
        "question": "Consider the following command:",
        "answers": [
          "a static route to the 192.168.10.0/24 network"
        ]
      },
      {
        "question": "What are two advantages of static routing over dynamic routing? (Choose two.)",
        "answers": [
          "Static routing is more secure because it does not advertise over the network.",
          "Static routing uses fewer router resources than dynamic routing."
        ]
      },
      {
        "question": "What characteristic completes the following statement?\nWhen an IPv6 static route is configured, it is possible that the same IPv6 link-local address is used for …",
        "answers": [
          "the next-hop address of two different adjacent routers."
        ]
      },
      {
        "question": "A network administrator configures the interface fa0/0 on the router R1 with the command ip address 172.16.1.254 255.255.255.0. However, when the administrator issues the command show ip route, the routing table does not show the directly connected network. What is the possible cause of the problem?",
        "answers": [
          "The interface fa0/0 has not been activated."
        ]
      },
      {
        "question": "Refer to the exhibit. What command would be used to configure a static route on R1 so that traffic from both LANs can reach the 2001:db8:1:4::/64 remote network?",
        "answers": [
          "ipv6 route 2001:db8:1:4::/64 2001:db8:1:3::2"
        ]
      },
      {
        "question": "Refer to the exhibit. What two commands will change the next-hop address for the 10.0.0.0/8 network from 172.16.40.2 to 192.168.1.2? (Choose two.)",
        "answers": [
          "A(config)# ip route 10.0.0.0 255.0.0.0 192.168.1.2",
          "A(config)# no ip route 10.0.0.0 255.0.0.0 172.16.40.2"
        ]
      },
      {
        "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 192.168.139.244?",
        "answers": [
          "GigabitEthernet0/1"
        ]
      },
      {
        "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 10.3.86.2?",
        "answers": [
          "Serial0/0/0"
        ]
      },
      {
        "question": "Match the characteristic to the corresponding type of routing. (Not all options are used.)",
        "answers": [
          "static routing -> dynamic routing",
          "typically used on stub networks -> new networks are added automatically to the routing table",
          "less routing overhead -> best choice for large networks"
        ]
      }
    ]
};

const RAW_DB = {
    "1.5.11": [
      {
        "question": "Which command will display a summary of all IPv6-enabled interfaces on a router that includes the IPv6 address and operational status?",
        "answers": [
          "show ipv6 interface brief"
        ]
      },
      {
        "question": "When verifying routes, what code is used to identify directly connected routes in the routing table?",
        "answers": [
          "C"
        ]
      },
      {
        "question": "Which command will display packet flow counts, collisions, and buffer failures on an interface?",
        "answers": [
          "show interface"
        ]
      },
      {
        "question": "An IPv6-enabled interface is required to have which type of address?",
        "answers": [
          "link-local"
        ]
      },
      {
        "question": "What character is used to enable the filtering of commands?",
        "answers": [
          "pipe |"
        ]
      },
      {
        "question": "Which filtering expression will show all output lines starting from the line matching the filtering expression?",
        "answers": [
          "begin"
        ]
      }
    ],
    "2.2.4": [
      {
        "question": "Which port speed will be autonegotiated between a host with a 1 Gbps NIC connecting to a Cisco Catalyst 2960 switch with a 100 Mbps port?",
        "answers": [
          "100 Mbps"
        ]
      },
      {
        "question": "Which device separates broadcast domains?",
        "answers": [
          "router"
        ]
      },
      {
        "question": "Which two special characteristics do LAN switches use to alleviate network congestion? (Choose two.)",
        "answers": [
          "fast port speeds",
          "fast internal switching"
        ]
      }
    ],
    "3.1.5": [
      {
        "question": "True or False? VLANs improve network performance by segmenting broadcast domains.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "True or False? VLANs can improve security by isolating sensitive data from the rest of the network.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "Which type of VLAN is assigned to 802.1Q trunk ports to carry untagged traffic?",
        "answers": [
          "native"
        ]
      },
      {
        "question": "True or False? It is a best practice to configure the native VLAN as VLAN 1.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which is true of VLAN 1? (Choose all that apply.)",
        "answers": [
          "All switch ports are assigned to VLAN 1 by default.",
          "The native VLAN is VLAN 1 by default.",
          "The management VLAN is VLAN 1 by default.",
          "VLAN 1 cannot be renamed or deleted."
        ]
      }
    ],
    "3.2.9": [
      {
        "question": "Refer to the exhibit Question 1 Topology. PC1 sends an ARP broadcast frame. Which PC will receive the ARP broadcast frame?",
        "answers": [
          "PC4"
        ]
      },
      {
        "question": "Refer to the exhibit Question 2 Topology. PC2 sends an ARP broadcast frame. Which PCs will receive the ARP broadcast frame? (Choose all that apply.)",
        "answers": [
          "PC3",
          "PC4",
          "PC6"
        ]
      },
      {
        "question": "Refer to the exhibit Question 3 Topology. PC3 sends an ARP broadcast frame. Which PC will receive the ARP broadcast frame?",
        "answers": [
          "PC5"
        ]
      }
    ],
    "3.5.6": [
      {
        "question": "True or false? DTP is an open standard IEEE protocol that specifies auto negotiation of switch trunk links.",
        "answers": [
          "false"
        ]
      },
      {
        "question": "What is the default switchport mode for Cisco Catalyst switches?",
        "answers": [
          "dynamic auto"
        ]
      },
      {
        "question": "True or false? Two switchports on a link both configured as dynamic auto will successfully negotiate a trunk.",
        "answers": [
          "false"
        ]
      },
      {
        "question": "Which two DTP modes will form a trunk with an interface that is configured as dynamic auto? (Choose two.)",
        "answers": [
          "trunk",
          "dynamic desirable"
        ]
      }
    ],
    "4.1.5": [],
    "4.4.7": [
      {
        "question": "You are troubleshooting an inter-VLAN issue on a switch and need to verify that the subinterfaces are in the routing table. Which inter-VLAN routing troubleshooting command would you use to do this?",
        "answers": [
          "show ip route"
        ]
      },
      {
        "question": "You are troubleshooting an inter-VLAN issue on a switch and need to check the list of VLANs and their assigned ports. Which inter-VLAN routing troubleshooting command would you use to do this?",
        "answers": [
          "show vlan"
        ]
      },
      {
        "question": "You are troubleshooting an inter-VLAN issue on a switch and need to verify the status of an access port and its access mode VLAN. Which troubleshooting command would you use to do this?",
        "answers": [
          "show interfaces interface-id switchport"
        ]
      },
      {
        "question": "You are troubleshooting an inter-VLAN issue on a router and need to verify the status and IP address of all interfaces in a condensed format. Which inter-VLAN routing troubleshooting command would you use to do this?",
        "answers": [
          "show ip interface brief"
        ]
      }
    ],
    "5.1.10": [
      {
        "question": "Which statement describes STP?",
        "answers": [
          "STP is a Layer 2 loop prevention protocol for Ethernet LANs."
        ]
      },
      {
        "question": "Without STP on the Ethernet LAN, which three types of frames could cause a catastrophic loop in the network? (Choose three.)",
        "answers": [
          "Unknown unicast",
          "Multicast",
          "Broadcast"
        ]
      },
      {
        "question": "What device is elected by the Spanning Tree Algorithm? All other switches determine a single least-cost path to this device.",
        "answers": [
          "root bridge"
        ]
      }
    ],
    "5.2.12": [
      {
        "question": "By default (without any configuration on a switch), what will determine which switch is the root bridge?",
        "answers": [
          "The MAC address of the switch"
        ]
      },
      {
        "question": "The root bridge will be the switch with the:",
        "answers": [
          "Lowest bridge ID"
        ]
      },
      {
        "question": "The port closest to the root bridge in terms of least overall cost (best path) to the root bridge is the:",
        "answers": [
          "Root port"
        ]
      },
      {
        "question": "The port on the segment (with two switches) that has the lowest path cost to the root bridge is the:",
        "answers": [
          "Designated port"
        ]
      },
      {
        "question": "Which of the following ports will forward Ethernet frames? (Choose two.)",
        "answers": [
          "Designated port",
          "Root port"
        ]
      },
      {
        "question": "The sum of individual port costs along the path from the switch to the root bridge is known as the:",
        "answers": [
          "Root path cost"
        ]
      },
      {
        "question": "How often does a switch send a BPDU?",
        "answers": [
          "Every 2 seconds"
        ]
      }
    ],
    "5.3.6": [
      {
        "question": "Which three STP port states are merged into the RSTP discarding port state? (Choose three.)",
        "answers": [
          "disabled",
          "blocking",
          "listening"
        ]
      },
      {
        "question": "Which protocol was designed to bring faster convergence to STP?",
        "answers": [
          "RSTP"
        ]
      },
      {
        "question": "Which technology solves the problem of a device being unable to get an IPv4 address from a DHCP server due to STP forwarding delay timers?",
        "answers": [
          "PortFast"
        ]
      }
    ],
    "6.1.10": [
      {
        "question": "Which are benefits of EtherChannel technology? (Choose all that apply.)",
        "answers": [
          "fault-tolerance",
          "load sharing",
          "increased bandwidth",
          "link redundancy"
        ]
      },
      {
        "question": "True or False? FastEthernet and GigabitEthernet links can be combined into a single EtherChannel.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "True or False? PAgP and LACP are both Cisco-proprietary link aggregation protocols.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which three are PAgP interface modes? (Choose three.)",
        "answers": [
          "on",
          "auto",
          "desirable"
        ]
      },
      {
        "question": "Which PAgP interface mode will initiate negotiation with other interfaces?",
        "answers": [
          "desirable"
        ]
      },
      {
        "question": "Which combinations of PAgP modes will form an EtherChannel? (Choose all that apply.)",
        "answers": [
          "auto > desirable",
          "on > on"
        ]
      }
    ],
    "7.1.5": [
      {
        "question": "Which message is sent by a DHCPv4 client to initiate the lease obtaining process?",
        "answers": [
          "DHCPDISCOVER"
        ]
      },
      {
        "question": "Which two DHCPv4 messages are sent by the server in the lease obtaining process? (Choose two.)",
        "answers": [
          "DCHPOFFER",
          "DHCPACK"
        ]
      },
      {
        "question": "Which two DHCPv4 messages are used in the lease renewal process? (Choose two.)",
        "answers": [
          "DHCPREQUEST",
          "DHCPACK"
        ]
      }
    ],
    "8.1.5": [
      {
        "question": "Which address type is automatically created by default on a host interface when no RAs are received?",
        "answers": [
          "link-local address"
        ]
      },
      {
        "question": "Which method best describes stateless DHCP?",
        "answers": [
          "SLAAC with stateless DHCPv6 Server"
        ]
      }
    ],
    "8.2.7": [
      {
        "question": "Which two ICMPv6 messages are used in the SLAAC process? (Choose two.)",
        "answers": [
          "Router Solicitation (RS)",
          "Router Advertisements (RA)"
        ]
      },
      {
        "question": "Which command must be configured on a router to enable it to join the IPv6 all-routers multicast address ff02::2?",
        "answers": [
          "ipv6 unicast-routing"
        ]
      },
      {
        "question": "What are the flag settings when a host should use the SLAAC only option?",
        "answers": [
          "A=1, M=0, O=0"
        ]
      },
      {
        "question": "Which ICMPv6 message is sent by a host in an attempt to locate an online IPv6enabled router to obtain IPv6 addressing information?",
        "answers": [
          "Router Solicitation (RS)"
        ]
      },
      {
        "question": "What method is used by a host to verify an IPv6 address is unique on the local network before assigning that address to an interface?",
        "answers": [
          "DAD"
        ]
      }
    ],
    "8.3.6": [
      {
        "question": "What destination UDP port do DHCPv6 clients use to send DHCPv6 messages?",
        "answers": [
          "546"
        ]
      },
      {
        "question": "What DHCPv6 message does a host send to look for a DHCPv6 server?",
        "answers": [
          "SOLICIT"
        ]
      },
      {
        "question": "What DHCPv6 message does a host send to the DHCPv6 server if it is using stateful DHCPv6?",
        "answers": [
          "REQUEST"
        ]
      },
      {
        "question": "What flag settings combination is used for stateless DHCP?",
        "answers": [
          "A=1, M=0, O=1"
        ]
      },
      {
        "question": "What M flag setting indicates that stateful DHCPv6 is used?",
        "answers": [
          "M=1"
        ]
      }
    ],
    "8.4.9": [
      {
        "question": "Which three DHCPv6 roles can a router perform? (Choose all that apply.)",
        "answers": [
          "DHCPv6 client",
          "DHCPv6 relay agent",
          "DHCPv6 server"
        ]
      },
      {
        "question": "Which command is not configured in stateless DHCPv6?",
        "answers": [
          "address prefix ipv6-address/prefix"
        ]
      },
      {
        "question": "An IPv6-enabled router is to acquire its IPv6 GUA from another IPv6 router using SLAAC. Which interface configuration command should be configured on the client router?",
        "answers": [
          "ipv6 address autoconfig"
        ]
      },
      {
        "question": "A router is to provide DHCPv6 server services. Which command should be configured on the client facing interface?",
        "answers": [
          "ipv6 dhcp server POOL-NAME"
        ]
      },
      {
        "question": "An IPv6-enabled router is to acquire its IPv6 GUA from a DHCPv6 server. Which interface configuration command should be configured on client router?",
        "answers": [
          "ipv6 address dhcp"
        ]
      },
      {
        "question": "Which DHCPv6 verification command would display the link-local and GUA assigned address for each active client?",
        "answers": [
          "show ipv6 dhcp binding"
        ]
      },
      {
        "question": "Which command is configured on the client LAN interface of the DHCPv6 relay agent?",
        "answers": [
          "ipv6 dhcp relay destination"
        ]
      }
    ],
    "9.1.5": [
      {
        "question": "What type of device routes traffic destined to network segments beyond the source network segment for which the sending node may not have explicit routing information?",
        "answers": [
          "default gateway"
        ]
      },
      {
        "question": "What device presents the illusion of a single router to hosts on a LAN segment but actually represents a set of routers working together?",
        "answers": [
          "virtual router"
        ]
      },
      {
        "question": "What device is part of a virtual router group assigned the role of alternate default gateway?",
        "answers": [
          "standby router"
        ]
      },
      {
        "question": "What device that is part of a virtual router group assigned to the role of default gateway?",
        "answers": [
          "forwarding router"
        ]
      },
      {
        "question": "Which FHRPs are Cisco-proprietary? (Choose two.)",
        "answers": [
          "HSRP",
          "HSRP for IPv6"
        ]
      }
    ],
    "9.2.4": [
      {
        "question": "What is the default HSRP priority?",
        "answers": [
          "100"
        ]
      },
      {
        "question": "True or False? If a router with a higher HSRP priority joins the network, it will take over the active router roll from an existing active router which has a lower priority.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "During which HSRP state does an interface begin sending periodic hello messages?",
        "answers": [
          "speak"
        ]
      },
      {
        "question": "Which is a characteristic of the HSRP learn state?",
        "answers": [
          "the router has not determined the virtual IP address"
        ]
      }
    ],
    "10.1.6": [
      {
        "question": "Which attack encrypts the data on hosts in an attempt to extract a monetary payment from the victim?",
        "answers": [
          "Ransomware"
        ]
      },
      {
        "question": "Which devices are specifically designed for network security? (Choose three)",
        "answers": [
          "VPN-enabled router",
          "NGFW",
          "NAC"
        ]
      },
      {
        "question": "Which device monitors SMTP traffic to block threats and encrypt outgoing messages to prevent data loss?",
        "answers": [
          "ESA"
        ]
      },
      {
        "question": "Which device monitors HTTP traffic to block access to risky sites and encrypt outgoing messages?",
        "answers": [
          "WSA"
        ]
      }
    ],
    "10.2.7": [
      {
        "question": "Which AAA component is responsible for collecting and reporting usage data for auditing and billing purposes?",
        "answers": [
          "Accounting"
        ]
      },
      {
        "question": "Which AAA component is responsible for controlling who is permitted to access the network?",
        "answers": [
          "Authentication"
        ]
      },
      {
        "question": "Which AAA component is responsible for determining what the user can access?",
        "answers": [
          "Authorization"
        ]
      },
      {
        "question": "In an 802.1X implementation, which device is responsible for relaying responses?",
        "answers": [
          "Authenticator"
        ]
      }
    ],
    "10.3.4": [
      {
        "question": "Which of the following mitigation techniques are used to protect Layer 3 through Layer 7 of the OSI Model? (Choose three.)",
        "answers": [
          "VPN",
          "Firewalls",
          "IPS devices"
        ]
      },
      {
        "question": "Which of the following mitigation techniques prevents many types of attacks including MAC address table overflow and DHCP starvation attacks?",
        "answers": [
          "Port security"
        ]
      },
      {
        "question": "Which of the following mitigation techniques prevents MAC and IP address spoofing?",
        "answers": [
          "IPSG"
        ]
      },
      {
        "question": "Which of the following mitigation techniques prevents ARP spoofing and ARP poisoning attacks?",
        "answers": [
          "DAI"
        ]
      },
      {
        "question": "Which of the following mitigation techniques prevents DHCP starvation and DHCP spoofing attacks?",
        "answers": [
          "DHCP snooping"
        ]
      }
    ],
    "10.4.4": [
      {
        "question": "What is the behavior of a switch as a result of a successful MAC address table attack?",
        "answers": [
          "The switch will forward all received frames to all other ports within the VLAN."
        ]
      },
      {
        "question": "What would be the primary reason a threat actor would launch a MAC address overflow attack?",
        "answers": [
          "So that the threat actor can see frames that are destined for other devices."
        ]
      },
      {
        "question": "What mitigation technique must be implemented to prevent MAC address overflow attacks?",
        "answers": [
          "Port security"
        ]
      }
    ],
    "10.5.11": [
      {
        "question": "A threat actor changes the MAC address of the threat actor’s device to the MAC address of the default gateway. What type of attack is this?",
        "answers": [
          "Address spoofing"
        ]
      },
      {
        "question": "A threat actor sends a BPDU message with priority 0. What type of attack is this?",
        "answers": [
          "STP attack"
        ]
      },
      {
        "question": "A threat actor leases all the available IP addresses on a subnet. What type of attack is this?",
        "answers": [
          "DHCP starvation"
        ]
      },
      {
        "question": "A threat actor sends a message that causes all other devices to believe the MAC address of the threat actor’s device is the default gateway. What type of attack is this?",
        "answers": [
          "ARP spoofing"
        ]
      },
      {
        "question": "A threat actor configures a host with the 802.1Q protocol and forms a trunk with the connected switch. What type of attack is this?",
        "answers": [
          "VLAN hopping"
        ]
      },
      {
        "question": "A threat actor discovers the IOS version and IP addresses of the local switch. What type of attack is this?",
        "answers": [
          "CDP reconnaissance"
        ]
      }
    ],
    "12.1.7": [
      {
        "question": "Which of the following wireless networks typically uses lower powered transmitters for short ranges?",
        "answers": [
          "WPAN"
        ]
      },
      {
        "question": "Which of the following wireless networks are specified in the IEEE 802.11 standards for the 2.4 GHz and 5 GHz radio frequencies?",
        "answers": [
          "WLAN"
        ]
      },
      {
        "question": "Which of the following is an IEEE 802.15 WPAN standard that uses a device-pairing process to communicate?",
        "answers": [
          "Bluetooth"
        ]
      },
      {
        "question": "Which 802.11 standards exclusively use the 5 GHz radio frequency? (Choose 2)",
        "answers": [
          "802.11a",
          "802.11ac"
        ]
      },
      {
        "question": "Which standards organization is responsible for allocating radio frequencies?",
        "answers": [
          "ITU-R"
        ]
      }
    ],
    "12.2.7": [
      {
        "question": "True or False: Laptops that do not have an integrated wireless NIC can only be attached to the network through a wired connection.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which of the following components are integrated in a wireless home router? (Choose three.)",
        "answers": [
          "Access point",
          "Switch",
          "Router"
        ]
      },
      {
        "question": "True or False: When you need to expand the coverage of a small network, the best solution is to use a range extender.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which of the following is a standalone device, like a home router, where the entire WLAN configuration resides on the device?",
        "answers": [
          "Autonomous AP"
        ]
      },
      {
        "question": "Which of the following antennas provide 360 degrees of coverage?",
        "answers": [
          "Omnidirectional"
        ]
      }
    ],
    "12.3.8": [
      {
        "question": "Which wireless topology mode is used by two devices to connect in a peer-to-peer network?",
        "answers": [
          "Ad hoc"
        ]
      },
      {
        "question": "True or False: An ESS is created when two or more BSSs need to be joined to support roaming clients.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "How many",
        "answers": [
          "4"
        ]
      },
      {
        "question": "What is the term for an AP that openly advertises its service periodically?",
        "answers": [
          "Passive"
        ]
      },
      {
        "question": "What is the term for an AP that does not send a beacon, but waits for clients to send probes?",
        "answers": [
          "Active"
        ]
      }
    ],
    "12.4.6": [
      {
        "question": "What IP versions does CAPWAP support?",
        "answers": [
          "IPv4 by default, but can configure IPv6"
        ]
      },
      {
        "question": "What UDP ports and IP protocols are used by CAPWAP for IPv4? (Choose three.)",
        "answers": [
          "17",
          "5246",
          "5247"
        ]
      },
      {
        "question": "What UDP ports and IP protocols are used by CAPWAP for IPv6? (Choose three.)",
        "answers": [
          "136",
          "5246",
          "5247"
        ]
      },
      {
        "question": "In the split MAC architecture for CAPWAP, which of the following are the responsibility of the AP? (Choose four.)",
        "answers": [
          "Packet acknowledgments and retransmissions",
          "Beacons and probe responses",
          "MAC layer data encryption and decryption",
          "Frame queueing and packet prioritization"
        ]
      },
      {
        "question": "In the split MAC architecture for CAPWAP, which of the following are the responsibility of the WLC? (Choose four.)",
        "answers": [
          "Authentication",
          "Association and re-association of roaming clients",
          "Termination of 802.11 traffic on a wired interface",
          "Frame translation to other protocols"
        ]
      },
      {
        "question": "True or False: DTLS is enabled by default on the control and data CAPWAP tunnels.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "Which of the following statements are true about modes of operation for a FlexConnect AP? (Choose two.)",
        "answers": [
          "In standalone mode, the WLC is unreachable and the AP switches local traffic and performs client authentication locally.",
          "In connect mode, the WLC is reachable and performs all its CAPWAP functions."
        ]
      }
    ],
    "12.5.4": [
      {
        "question": "Which of the following modulation techniques rapidly switches a signal among frequency channels?",
        "answers": [
          "FHSS"
        ]
      },
      {
        "question": "Which of the following modulation techniques spreads a signal over a larger frequency band?",
        "answers": [
          "DSSS"
        ]
      },
      {
        "question": "Which of the following modulation techniques is used in the new 802.11ax standard?",
        "answers": [
          "OFDMA"
        ]
      },
      {
        "question": "How many channels are available for the 2.4 GHz band in Europe?",
        "answers": [
          "13"
        ]
      },
      {
        "question": "How many channels are available for the 5 GHz band?",
        "answers": [
          "24"
        ]
      }
    ],
    "12.6.6": [
      {
        "question": "Which of the following is most likely NOT the source of a wireless DoS attack?",
        "answers": [
          "Rogue AP"
        ]
      },
      {
        "question": "True or False: A rogue AP is a misconfigured AP connected to the network and a possible source of DoS attacks.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "What type of attack is an “evil twin AP” attack?",
        "answers": [
          "MITM"
        ]
      }
    ],
    "12.7.9": [
      {
        "question": "What are the best ways to secure WLANs? (Choose two.)",
        "answers": [
          "Authentication",
          "Encryption"
        ]
      },
      {
        "question": "Which of the following authentication methods does not use a password shared between the wireless client and the AP?",
        "answers": [
          "Open"
        ]
      },
      {
        "question": "Which encryption method is used by the original 802.11 specification?",
        "answers": [
          "RC4"
        ]
      },
      {
        "question": "Which of the following encryption methods uses CCMP to recognize if the encrypted and non-encrypted bits have been altered?",
        "answers": [
          "AES"
        ]
      },
      {
        "question": "Which of the following authentication methods has the user enter a pre-shared password? (Choose two)",
        "answers": [
          "WPA Personal",
          "WPA2 Personal"
        ]
      }
    ],
    "14.1.7": [
      {
        "question": "What table does a router use to determine how to forward an IP packet?",
        "answers": [
          "routing table"
        ]
      },
      {
        "question": "What action will a router take on a packet with a destination IP address that is on a remote network?",
        "answers": [
          "It will forward the packet to a next-hop router."
        ]
      },
      {
        "question": "Which of the following routes may be found in a routing table? (Choose all that apply.)",
        "answers": [
          "directly connected networks",
          "static routes",
          "dynamic routing protocol routes",
          "default route"
        ]
      },
      {
        "question": "What is used to determine the minimum number of far-left bits that must match between the prefix in the route entry and the destination IP address.",
        "answers": [
          "prefix length in the routing table entry"
        ]
      }
    ],
    "14.2.4": [
      {
        "question": "If a router needs to send an ARP Request for the destination IPv4 address of the packet, this means the packet will be forwarded:",
        "answers": [
          "To the device with the destination IPv4 address of the packet"
        ]
      },
      {
        "question": "If a router needs to send an ARP Request for the IPv4 address in one of its route entries, this means the packet will be forwarded:",
        "answers": [
          "To a next-hop router"
        ]
      },
      {
        "question": "Which packet forwarding method is used by default on Cisco routers?",
        "answers": [
          "Cisco Express Forwarding"
        ]
      }
    ],
    "14.4.13": [
      {
        "question": "Which routing table principle is not correct?",
        "answers": [
          "Routing information about a path from one network to another also provides routing information about the reverse, or return, path."
        ]
      },
      {
        "question": "Which route entry would be used for a packet with a destination IP address that matches an IP address of one of the router interfaces?",
        "answers": [
          "L for Local"
        ]
      },
      {
        "question": "What type of network is accessed by a single route and the router has only one neighbor?",
        "answers": [
          "Stub network"
        ]
      },
      {
        "question": "Which two route sources have the ability to automatically discover a new best path when there is a change in the topology? (Choose two.)",
        "answers": [
          "OSPF",
          "EIGRP"
        ]
      },
      {
        "question": "True or False? A default route can only be a static route.",
        "answers": [
          "False"
        ]
      },
      {
        "question": "A network administrator configures a static route for the same destination network that was learned automatically by the router using OSPF. Which route will be installed and why?",
        "answers": [
          "Static route because it has a lower administrative distance"
        ]
      }
    ],
    "14.5.6": [
      {
        "question": "Which type of routing automatically adapts to topology changes?",
        "answers": [
          "dynamic routing protocols"
        ]
      },
      {
        "question": "What type of routing is typically used with a stub network?",
        "answers": [
          "static routes"
        ]
      },
      {
        "question": "What metric is used by OSPF to determine the best path?",
        "answers": [
          "cost"
        ]
      },
      {
        "question": "What term is used to describe routing over two or more paths to a destination with equal cost metrics?",
        "answers": [
          "equal cost load balancing"
        ]
      }
    ],
    "15.1.8": [
      {
        "question": "Which two methods can be used to identify the next hop in a static route? (Choose two.)",
        "answers": [
          "next hop IP address",
          "exit interface"
        ]
      },
      {
        "question": "Which IPv4 static route statement is true?",
        "answers": [
          "Using the exit interface only is common in a point-to-point configuration."
        ]
      },
      {
        "question": "How is the destination network in an IPv6 static route identified?",
        "answers": [
          "using an IPv6 prefix and prefix length"
        ]
      }
    ],
    "16.1.2": [
      {
        "question": "Refer to the exhibit. True or False? R1 must encapsulate received packets into new frames before forwarding them to R2.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "Refer to the exhibit. True or False? R2 will forward frames to R3 with an all 1s Layer 2 address.",
        "answers": [
          "True"
        ]
      },
      {
        "question": "Refer to the exhibit. What action will R3 take to forward a frame if it does not have an entry in the ARP table to resolve a destination MAC address?",
        "answers": [
          "sends an ARP request"
        ]
      }
    ]
};

const PRACTICE_EXAM_DB = [
    {
      "question": "A network administrator is using the router-on-a-stick method to configure inter-VLAN routing. Switch port Gi1/1 is used to connect to the router. Which command should be entered to prepare this port for the task?",
      "manual": true,
      "answers": [],
      "missingAnswers": true
    },
    {
      "question": "Refer to the exhibit. The configuration shows commands entered by a network administrator for inter-VLAN routing. However, host H1 cannot communicate with H2. Which part of the inter-VLAN configuration causes the problem?",
      "answers": [
        "VLAN configuration"
      ]
    },
    {
      "question": "Refer to the exhibit. Inter-VLAN communication between VLAN 10, VLAN 20, and VLAN 30 is not successful. What is the problem?",
      "answers": [
        "The switch interface FastEthernet0/1 is configured as an access interface and should be configured as a trunk interface."
      ]
    },
    {
      "question": "An employee connects wirelessly to the company network using a cell phone. The employee then configures the cell phone to act as a wireless access point that will allow new employees to connect to the company network. Which type of security threat best describes this situation?",
      "answers": [
        "rogue access point"
      ]
    },
    {
      "question": "Which combination of WLAN authentication and encryption is recommended as a best practice for home users?",
      "answers": [
        "WPA2 and AES"
      ]
    },
    {
      "question": "What are the two methods that a wireless NIC can use to discover an AP? (Choose two.)",
      "answers": [
        "transmitting a probe request",
        "receiving a broadcast beacon frame"
      ]
    },
    {
      "question": "What address and prefix length is used when configuring an IPv6 default static route?",
      "answers": [
        "::/0"
      ]
    },
    {
      "question": "Refer to the exhibit. Match the description with the routing table entries. (Not all options are used.)",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2017/06/i283589v1n1_209391-1.gif"
    },
    {
      "question": "Refer to the exhibit. Which interface will be the exit interface to forward a data packet that has the destination IP address 172.18.109.152?",
      "answers": [
        "Serial0/0/0"
      ]
    },
    {
      "question": "Match the dynamic routing protocol component to the characteristic. (Not all options are used.)",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/1905334004.webp"
    },
    {
      "question": "Which statement describes the behavior of a switch when the MAC address table is full?",
      "answers": [
        "It treats frames as unknown unicast and floods all incoming frames to all ports within the local VLAN."
      ]
    },
    {
      "question": "Which term describes the role of a Cisco switch in the 802.1X port-based access control?",
      "answers": [
        "authenticator"
      ]
    },
    {
      "question": "What is a result of connecting two or more switches together?",
      "answers": [
        "The size of the broadcast domain is increased."
      ]
    },
    {
      "question": "A small publishing company has a network design such that when a broadcast is sent on the LAN, 200 devices receive the transmitted broadcast. How can the network administrator reduce the number of devices that receive broadcast traffic?",
      "answers": [
        "Segment the LAN into smaller LANs and route between them."
      ]
    },
    {
      "question": "Refer to the exhibit. How is a frame sent from PCA forwarded to PCC if the MAC address table on switch SW1 is empty?",
      "answers": [
        "SW1 floods the frame on all ports on SW1, excluding the port through which the frame entered the switch."
      ]
    },
    {
      "question": "What are two switch characteristics that could help alleviate network congestion? (Choose two.)",
      "answers": [
        "fast internal switching",
        "large frame buffers"
      ]
    },
    {
      "question": "A network engineer is configuring a LAN with a redundant first hop to make better use of the available network resources. Which protocol should the engineer implement?",
      "answers": [
        "GLBP"
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
      "question": "After sticky learning of MAC addresses is enabled, what action is needed to prevent dynamically learned MAC addresses from being lost in the event that an associated interface goes down?",
      "answers": [
        "Copy the running configuration to the startup configuration."
      ]
    },
    {
      "question": "A small coffee shop is offering free Wi-Fi to customers. The network includes a wireless router and a DSL modem that is connected to the local phone company. What method is typically used to configure the connection to the phone company?",
      "answers": [
        "Set the WAN connection in the wireless router as a DHCP client."
      ]
    },
    {
      "question": "Match the purpose with its DHCP message type. (Not all options are used.)",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/1905334006.webp"
    },
    {
      "question": "Match the spanning-tree feature with the protocol type. (Not all options are used.)",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/1905334005.webp"
    },
    {
      "question": "What is an advantage of PVST+?",
      "answers": [
        "PVST+ optimizes performance on the network through load sharing."
      ]
    },
    {
      "question": "Which problem is evident if the show ip interface command shows that the interface is down and the line protocol is down?",
      "answers": [
        "A cable has not been attached to the port."
      ]
    },
    {
      "question": "A technician is configuring a new Cisco 2960 switch. What is the effect of issuing the BranchSw(config)#interface VLAN88 command?",
      "answers": [
        "It enters configuration mode for a switch virtual interface."
      ]
    },
    {
      "question": "In what situation would a Layer 2 switch have an IP address configured?",
      "answers": [
        "when the Layer 2 switch needs to be remotely managed"
      ]
    },
    {
      "question": "Which command would create a valid IPv6 default route?",
      "answers": [
        "ipv6 route ::/0 2001:db8:acad:2::a"
      ]
    },
    {
      "question": "Refer to the exhibit. The routing table for R2 is as follows:",
      "answers": [
        "send the packet out interface Serial0/0/1"
      ]
    },
    {
      "question": "Refer to the exhibit. Router R1 has an OSPF neighbor relationship with the ISP router over the 192.168.0.32 network. The 192.168.0.36 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/0/1 100 was issued on R1 and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?",
      "answers": [
        "Change the administrative distance to 120."
      ]
    },
    {
      "question": "A junior technician was adding a route to a LAN router. A traceroute to a device on the new network revealed a wrong path and unreachable status. What should be done or checked?",
      "answers": [
        "Check the configuration of the exit interface on the new static route."
      ]
    },
    {
      "question": "Refer to the exhibit. When a packet arrives on interface Serial0/0/0 on R1, with a destination IP address of PC1, which two events occur? (Choose two)",
      "answers": [
        "Router R1 will forward the packet out Gig0/1.",
        "Router R1 will de-encapsulate the packet and encapsulate it in an Ethernet frame."
      ]
    },
    {
      "question": "Refer to the exhibit. How was the host route 2001:DB8:CAFE:4::1/128 installed in the routing table?",
      "answers": [
        "The route was manually entered by an administrator."
      ]
    },
    {
      "question": "Which command will start the process to bundle two physical interfaces to create an EtherChannel group via LACP?",
      "answers": [
        "interface range GigabitEthernet 0/4 – 5"
      ]
    },
    {
      "question": "Refer to the exhibit. Based on the command output shown, what is the status of the EtherChannel?",
      "answers": [
        "The EtherChannel is in use and functional as indicated by the SU and P flags in the command output."
      ]
    },
    {
      "question": "Refer to the exhibit. DLS1 is connected to another switch, DLS2, via a trunk link. A host that is connected to DLS1 is not able to communicate to a host that is connected to DLS2, even though they are both in VLAN 99. Which command should be added to Fa0/1 on DLS1 to correct the problem?",
      "answers": [
        "switchport trunk native vlan 66"
      ]
    },
    {
      "question": "Which type of traffic is designed for a native VLAN?",
      "answers": [
        "untagged"
      ]
    },
    {
      "question": "Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?",
      "answers": [
        "The VLAN that is used by PC-A is not in the list of allowed VLANs on the trunk."
      ]
    },
    {
      "question": "Question as presented: Match the DTP mode with its function. (Not all options are used.)",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/19053340031.webp"
    },
    {
      "question": "What type of VLAN is configured specifically for network traffic such as SSH, Telnet, HTTPS, HTTP, and SNMP?",
      "answers": [
        "management VLAN"
      ]
    },
    {
      "question": "Refer to the exhibit. The users on the LAN network of R1 cannot receive an IPv6 address from the configured stateful DHCPv6 server. What is missing from the stateful DHCPv6 configuration on router R1?",
      "answers": [
        "The FA0/0 interface is missing the command that informs the clients to use stateful DHCPv6."
      ]
    },
    {
      "question": "A network administrator is implementing DHCPv6 for the company. The administrator configures a router to send RA messages with M flag as 1 by using the interface command ipv6 nd managed-config-flag. What effect will this configuration have on the operation of the clients?",
      "answers": [
        "Clients must use all configuration information that is provided by a DHCPv6 server."
      ]
    },
    {
      "question": "Refer to the exhibit. A network administrator is troubleshooting a problem with EtherChannel. What command was used to produce the exhibited output?",
      "answers": [
        "show interfaces fastethernet 0/11 etherchannel"
      ]
    },
    {
      "question": "Refer to the exhibit. The administrator wants to enable port security on an interface on switch S1, but the command was rejected. Which conclusion can be drawn?",
      "answers": [
        "The interface must be initially configured with the switchport mode access command."
      ]
    },
    {
      "question": "On which port should Dynamic ARP Inspection (DAI) be configured on a switch?",
      "answers": [
        "an uplink port to another switch"
      ]
    },
    {
      "question": "Refer to the exhibit. A network administrator is configuring DAI on switch SW1. What is the result of entering the exhibited commands?",
      "answers": [
        "DAI will validate only the destination MAC addresses."
      ]
    },
    {
      "question": "Which Cisco solution helps prevent ARP spoofing and ARP poisoning attacks?",
      "answers": [
        "Dynamic ARP Inspection"
      ]
    },
    {
      "question": "What is the reason for disabling SSID broadcasting and changing the default SSID on a wireless access point?",
      "answers": [
        "Wireless clients must then have the SSID manually configured to connect to the wireless network."
      ]
    },
    {
      "question": "What are two characteristics of Cisco Express Forwarding (CEF)? (Choose two.)",
      "answers": [
        "This is the fastest forwarding mechanism on Cisco routers and multilayer switches.",
        "Packets are forwarded based on information in the FIB and an adjacency table."
      ]
    },
    {
      "question": "A network administrator of a college is configuring WLAN security with WPA2 Enterprise authentication. Which server is required when deploying this type of authentication?",
      "answers": [
        "RADIUS"
      ]
    },
    {
      "question": "What is a potential issue when using the WLC to upgrade and deploy the latest firmware image to all APs?",
      "answers": [
        "Users will not be able to use the WLAN."
      ]
    },
    {
      "question": "A network administrator is configuring a WLC to provide WLAN access to users in an office building. When testing the newly created WLAN, the administrator does not see the SSID from a wireless device. What is a possible cause?",
      "answers": [
        "The new WLAN needs to be enabled."
      ]
    },
    {
      "question": "What is the best way to prevent a VLAN hopping attack?",
      "answers": [
        "Disable trunk negotiation for trunk ports and statically set nontrunk ports as access ports."
      ]
    },
    {
      "question": "An administrator has configured a DHCPv4 relay router and issued these commands:",
      "answers": [
        "The ip helper-address command is missing."
      ]
    },
    {
      "question": "Consider the following command:",
      "answers": [
        "administrative distance"
      ]
    },
    {
      "question": "Which three components are combined to form a bridge ID? (Choose three.)",
      "answers": [
        "extended system ID",
        "bridge priority",
        "MAC address"
      ]
    }
];

const FINAL_EXAM_DB = [
  {
    "question": "Refer to the exhibit. What will router R1 do with a packet that has a destination IPv6 address of 2001:db8:cafe:5::1?",
    "answers": [
      "forward the packet out Serial0/0/0"
    ]
  },
  {
    "question": "Refer to the exhibit. Currently router R1 uses an EIGRP route learned from Branch2 to reach the 10.10.0.0/16 network. Which floating static route would create a backup route to the 10.10.0.0/16 network in the event that the link between R1 and Branch2 goes down?",
    "answers": [
      "ip route 10.10.0.0 255.255.0.0 209.165.200.225 100"
    ]
  },
  {
    "question": "Refer to the exhibit. R1 was configured with the static route command ip route 209.165.200.224 255.255.255.224 S0/0/0 and consequently users on network 172.16.0.0/16 are unable to reach resources on the Internet. How should this static route be changed to allow user traffic from the LAN to reach the Internet?",
    "answers": [
      "Change the destination network and mask to 0.0.0.0 0.0.0.0"
    ]
  },
  {
    "question": "Which option shows a correctly configured IPv4 default static route?",
    "answers": [
      "ip route 0.0.0.0 0.0.0.0 S0/0/0"
    ]
  },
  {
    "question": "Refer to the exhibit. Which static route command can be entered on R1 to forward traffic to the LAN connected to R2?",
    "answers": [
      "ipv6 route 2001:db8:12:10::/64 S0/0/1 fe80::2"
    ]
  },
  {
    "question": "What is a method to launch a VLAN hopping attack?",
    "answers": [
      "introducing a rogue switch and enabling trunking"
    ]
  },
  {
    "question": "A cybersecurity analyst is using the macof tool to evaluate configurations of switches deployed in the backbone network of an organization. Which type of LAN attack is the analyst targeting during this evaluation?",
    "answers": [
      "MAC address table overflow"
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?",
    "answers": [
      "The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation."
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator configured routers R1 and R2 as part of HSRP group 1. After the routers have been reloaded, a user on Host1 complained of lack of connectivity to the Internet The network administrator issued the show standby brief command on both routers to verify the HSRP operations. In addition, the administrator observed the ARP table on Host1. Which entry should be seen in the ARP table on Host1 in order to gain connectivity to the Internet?",
    "answers": [
      "the virtual IP address and the virtual MAC address for the HSRP group 1"
    ]
  },
  {
    "question": "Match the forwarding characteristic to its type. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA-2-v7-final-exam-answers-10.png"
  },
  {
    "question": "Which statement is correct about how a Layer 2 switch determines how to forward frames?",
    "answers": [
      "Frame forwarding decisions are based on MAC address and port mappings in the CAM table."
    ]
  },
  {
    "question": "Which statement describes a result after multiple Cisco LAN switches are interconnected?",
    "answers": [
      "The broadcast domain expands to all switches."
    ]
  },
  {
    "question": "Match the link state to the interface and protocol status. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA-2-v7-final-exam-answers-13.png"
  },
  {
    "question": "Refer to the exhibit. How is a frame sent from PCA forwarded to PCC if the MAC address table on switch SW1 is empty?",
    "answers": [
      "SW1 floods the frame on all ports on SW1, excluding the port through which the frame entered the switch."
    ]
  },
  {
    "question": "An administrator is trying to remove configurations from a switch. After using the command erase startup-config and reloading the switch, the administrator finds that VLANs 10 and 100 still exist on the switch. Why were these VLANs not removed?",
    "answers": [
      "Because these VLANs are stored in a file that is called vlan.dat that is located in flash memory, this file must be manually deleted."
    ]
  },
  {
    "question": "Match the description to the correct VLAN type. (Not all options are used.)",
    "answers": [
      "Native VLAN -> Carries untagged traffic",
      "Management VLAN -> An IP address and subnet mask are assigned to this VLAN, allowing the switch to be accessed by HTTP, Telnet, SSH, or SNMP",
      "Default VLAN -> All switch ports are assigned to this VLAN after initial bootup of the switch",
      "Data VLANs -> Configured to carry user generated traffic"
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator has connected two switches together using EtherChannel technology. If STP is running, what will be the end result?",
    "answers": [
      "STP will block one of the redundant links."
    ]
  },
  {
    "question": "What is a secure configuration option for remote access to a network device?",
    "answers": [
      "Configure SSH."
    ]
  },
  {
    "question": "Which wireless encryption method is the most secure?",
    "answers": [
      "WPA2 with AES"
    ]
  },
  {
    "question": "After attaching four PCs to the switch ports, configuring the SSID and setting authentication properties for a small office network, a technician successfully tests the connectivity of all PCs that are connected to the switch and WLAN. A firewall is then configured on the device prior to connecting it to the Internet. What type of network device includes all of the described features?",
    "answers": [
      "wireless router"
    ]
  },
  {
    "question": "Refer to the exhibit. Host A has sent a packet to host B. What will be the source MAC and IP addresses on the packet when it arrives at host B?",
    "answers": [
      "Source MAC: 00E0.FE91.7799"
    ]
  },
  {
    "question": "Refer to the exhibit. In addition to static routes directing traffic to networks 10.10.0.0/16 and 10.20.0.0/16, Router HQ is also configured with the following command:",
    "answers": [
      "Packets with a destination network that is not 10.10.0.0/16 or is not 10.20.0.0/16 or is not a directly connected network will be forwarded to the Internet."
    ]
  },
  {
    "question": "What protocol or technology disables redundant paths to eliminate Layer 2 loops?",
    "answers": [
      "STP"
    ]
  },
  {
    "question": "Refer to the exhibit. Based on the exhibited configuration and output, why is VLAN 99 missing?",
    "answers": [
      "because VLAN 99 has not yet been created"
    ]
  },
  {
    "question": "Which two VTP modes allow for the creation, modification, and deletion of VLANs on the local switch? (Choose two.)",
    "answers": [
      "server",
      "transparent"
    ]
  },
  {
    "question": "Which three steps should be taken before moving a Cisco switch to a new VTP management domain? (Choose three.)",
    "answers": [
      "Configure the switch with the name of the new management domain.",
      "Select the correct VTP mode and version.",
      "Reboot the switch."
    ]
  },
  {
    "question": "A network administrator is preparing the implementation of Rapid PVST+ on a production network. How are the Rapid PVST+ link types determined on the switch interfaces?",
    "answers": [
      "Link types are determined automatically."
    ]
  },
  {
    "question": "Refer to the exhibit. All the displayed switches are Cisco 2960 switches with the same default priority and operating at the same bandwidth. Which three ports will be STP designated ports? (Choose three.)",
    "answers": [
      "fa0/13",
      "fa0/10",
      "fa0/21"
    ]
  },
  {
    "question": "How will a router handle static routing differently if Cisco Express Forwarding is disabled?",
    "answers": [
      "Ethernet multiaccess interfaces will require fully specified static routes to avoid routing inconsistencies."
    ]
  },
  {
    "question": "Compared with dynamic routes, what are two advantages of using static routes on a router? (Choose two.)",
    "answers": [
      "They improve netw​ork security.",
      "They use fewer router resources."
    ]
  },
  {
    "question": "Refer to the exhibit. Which route was configured as a static route to a specific network using the next-hop address?",
    "answers": [
      "S 10.17.2.0/24 [1/0] via 10.16.2.2"
    ]
  },
  {
    "question": "What is the effect of entering the spanning-tree portfast configuration command on a switch?",
    "answers": [
      "It enables portfast on a specific switch interface."
    ]
  },
  {
    "question": "What is the IPv6 prefix that is used for link-local addresses?",
    "answers": [
      "FE80::/10"
    ]
  },
  {
    "question": "Which two statements are characteristics of routed ports on a multilayer switch? (Choose two.)​",
    "answers": [
      "In a switched network, they are mostly configured between switches at the core and distribution layers.",
      "They are not associated with a particular VLAN."
    ]
  },
  {
    "question": "Successful inter-VLAN routing has been operating on a network with multiple VLANs across multiple switches for some time. When an inter-switch trunk link fails and Spanning Tree Protocol brings up a backup trunk link, it is reported that hosts on two VLANs can access some, but not all the network resources that could be accessed previously. Hosts on all other VLANS do not have this problem. What is the most likely cause of this problem?",
    "answers": [
      "The allowed VLANs on the backup link were not configured correctly."
    ]
  },
  {
    "question": "Which command will start the process to bundle two physical interfaces to create an EtherChannel group via LACP?",
    "answers": [
      "interface range GigabitEthernet 0/4 – 5"
    ]
  },
  {
    "question": "What action takes place when a frame entering a switch has a multicast destination MAC address?",
    "answers": [
      "The switch will forward the frame out all ports except the incoming port."
    ]
  },
  {
    "question": "A junior technician was adding a route to a LAN router. A traceroute to a device on the new network revealed a wrong path and unreachable status. What should be done or checked?",
    "answers": [
      "Check the configuration of the exit interface on the new static route."
    ]
  },
  {
    "question": "Select the three PAgP channel establishment modes. (Choose three.)",
    "answers": [
      "auto",
      "desirable",
      "on"
    ]
  },
  {
    "question": "A static route has been configured on a router. However, the destination network no longer exists. What should an administrator do to remove the static route from the routing table?",
    "answers": [
      "Remove the route using the no ip route command."
    ]
  },
  {
    "question": "Refer to the exhibit. What can be concluded about the configuration shown on R1?",
    "answers": [
      "R1 is configured as a DHCPv4 relay agent."
    ]
  },
  {
    "question": "Match the step to each switch boot sequence description. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/2021-11-15_105846-ans.jpg"
  },
  {
    "question": "Refer to the exhibit. R1 has been configured as shown. However, PC1 is not able to receive an IPv4 address. What is the problem?​",
    "answers": [
      "The ip helper-address command was applied on the wrong interface."
    ]
  },
  {
    "question": "What two default wireless router settings can affect network security? (Choose two.)",
    "answers": [
      "The SSID is broadcast.",
      "A well-known administrator password is set."
    ]
  },
  {
    "question": "What is the common term given to SNMP log messages that are generated by network devices and sent to the SNMP server?",
    "answers": [
      "traps"
    ]
  },
  {
    "question": "A network administrator is adding a new WLAN on a Cisco 3500 series WLC. Which tab should the administrator use to create a new VLAN interface to be used for the new WLAN?",
    "answers": [
      "CONTROLLER"
    ]
  },
  {
    "question": "A network administrator is configuring a WLAN. Why would the administrator change the default DHCP IPv4 addresses on an AP?",
    "answers": [
      "to reduce outsiders intercepting data or accessing the wireless network by using a well-known address range"
    ]
  },
  {
    "question": "Which two functions are performed by a WLC when using split media access control (MAC)? (Choose two.)",
    "answers": [
      "frame translation to other protocols",
      "association and re-association of roaming clients"
    ]
  },
  {
    "question": "On what switch ports should BPDU guard be enabled to enhance STP stability?",
    "answers": [
      "all PortFast-enabled ports"
    ]
  },
  {
    "question": "Which network attack is mitigated by enabling BPDU guard?",
    "answers": [
      "rogue switches on a network"
    ]
  },
  {
    "question": "Why is DHCP snooping required when using the Dynamic ARP Inspection feature?",
    "answers": [
      "It uses the MAC-address-to-IP-address binding database to validate an ARP packet."
    ]
  },
  {
    "question": "Refer to the exhibit. Router R1 has an OSPF neighbor relationship with the ISP router over the 192.168.0.32 network. The 192.168.0.36 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/0/1 100 was issued on R1 and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?​",
    "answers": [
      "Change the administrative distance to 120."
    ]
  },
  {
    "question": "Refer to the exhibit. What is the metric to forward a data packet with the IPv6 destination address 2001:DB8:ACAD:E:240:BFF:FED4:9DD2?",
    "answers": [
      "2682112"
    ]
  },
  {
    "question": "A network administrator is configuring a new Cisco switch for remote management access. Which three items must be configured on the switch for the task? (Choose three.)",
    "answers": [
      "IP address",
      "vty lines",
      "default gateway"
    ]
  },
  {
    "question": "Refer to the exhibit. Which statement shown in the output allows router R1 to respond to stateless DHCPv6 requests?",
    "answers": [
      "ipv6 nd other-config-flag​"
    ]
  },
  {
    "question": "Refer to the exhibit. A Layer 3 switch routes for three VLANs and connects to a router for Internet connectivity. Which two configurations would be applied to the switch? (Choose two.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2020/01/CCNA-2-v7-exam-answers-57.png"
  },
  {
    "question": "A technician is troubleshooting a slow WLAN and decides to use the split-the-traffic approach. Which two parameters would have to be configured to do this? (Choose two.)",
    "answers": [
      "Configure the 5 GHz band for streaming multimedia and time sensitive traffic.",
      "Configure the 2.4 GHz band for basic internet traffic that is not time sensitive."
    ]
  },
  {
    "question": "A company has just switched to a new ISP. The ISP has completed and checked the connection from its site to the company. However, employees at the company are not able to access the internet. What should be done or checked?",
    "answers": [
      "Ensure that the old default route has been removed from the company edge routers."
    ]
  },
  {
    "question": "Which information does a switch use to populate the MAC address table?",
    "answers": [
      "the source MAC address and the incoming port"
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator is reviewing the configuration of switch S1. Which protocol has been implemented to group multiple physical ports into one logical link?",
    "answers": [
      "PAgP"
    ]
  },
  {
    "question": "Which type of static route is configured with a greater administrative distance to provide a backup route to a route learned from a dynamic routing protocol?",
    "answers": [
      "floating static route"
    ]
  },
  {
    "question": "What action takes place when a frame entering a switch has a unicast destination MAC address appearing in the MAC address table?",
    "answers": [
      "The switch forwards the frame out of the specified port."
    ]
  },
  {
    "question": "The exhibit shows two PCs called PC A and PC B, two routes called R1 and R2, and two switches. PC A has the address 172.16.1.1/24 and is connected to a switch and into an interface on R1 that has the IP address 172.16.1.254. PC B has the address 172.16.2.1/24 and is connected to a switch that is connected to another interface on R1 with the IP address 172.16.2.254. The serial interface on R1 has the address 172.16.3.1 and is connected to the serial interface on R2 that has the address 172.16.3.2/24. R2 is connected to the internet cloud. Which command will create a static route on R2 in order to reach PC B?",
    "answers": [
      "R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1"
    ]
  },
  {
    "question": "What protocol or technology allows data to transmit over redundant switch links?",
    "answers": [
      "EtherChannel"
    ]
  },
  {
    "question": "Refer to the exhibit. Which three hosts will receive ARP requests from host A, assuming that port Fa0/4 on both switches is configured to carry traffic for multiple VLANs? (Choose three.)",
    "answers": [
      "host C",
      "host D",
      "host F"
    ]
  },
  {
    "question": "Refer to the exhibit. The network administrator configures both switches as displayed. However, host C is unable to ping host D and host E is unable to ping host F. What action should the administrator take to enable this communication?",
    "answers": [
      "Configure either trunk port in the dynamic desirable mode."
    ]
  },
  {
    "question": "What is the effect of entering the shutdown configuration command on a switch?",
    "answers": [
      "It disables an unused port."
    ]
  },
  {
    "question": "What would be the primary reason an attacker would launch a MAC address overflow attack?",
    "answers": [
      "so that the attacker can see frames that are destined for other hosts"
    ]
  },
  {
    "question": "During the AAA process, when will authorization be implemented?",
    "answers": [
      "Immediately after successful authentication against an AAA data source"
    ]
  },
  {
    "question": "A company security policy requires that all MAC addressing be dynamically learned and added to both the MAC address table and the running configuration on each switch. Which port security configuration will accomplish this?",
    "answers": [
      "sticky secure MAC addresses"
    ]
  },
  {
    "question": "Which three Wi-Fi standards operate in the 2.4GHz range of frequencies? (Choose three.)",
    "answers": [
      "802.11b",
      "802.11g",
      "802.11n"
    ]
  },
  {
    "question": "To obtain an overview of the spanning tree status of a switched network, a network engineer issues the show spanning-tree command on a switch. Which two items of information will this command display? (Choose two.)",
    "answers": [
      "The root bridge BID.",
      "The role of the ports in all VLANs."
    ]
  },
  {
    "question": "Refer to the exhibit. Which trunk link will not forward any traffic after the root bridge election process is complete?",
    "answers": [
      "Trunk2"
    ]
  },
  {
    "question": "Which method of IPv6 prefix assignment relies on the prefix contained in RA messages?",
    "answers": [
      "SLAAC"
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
    "question": "A network administrator is configuring a WLAN. Why would the administrator disable the broadcast feature for the SSID?",
    "answers": [
      "to eliminate outsiders scanning for available SSIDs in the area"
    ]
  },
  {
    "question": "Which mitigation technique would prevent rogue servers from providing false IP configuration parameters to clients?",
    "answers": [
      "turning on DHCP snooping"
    ]
  },
  {
    "question": "A network administrator configures the port security feature on a switch. The security policy specifies that each access port should allow up to two MAC addresses. When the maximum number of MAC addresses is reached, a frame with the unknown source MAC address is dropped and a notification is sent to the syslog server. Which security violation mode should be configured for each access port?",
    "answers": [
      "restrict"
    ]
  },
  {
    "question": "What protocol or technology defines a group of routers, one of them defined as active and another one as standby?",
    "answers": [
      "HSRP"
    ]
  },
  {
    "question": "Refer to the exhibit. After attempting to enter the configuration that is shown in router RTA, an administrator receives an error and users on VLAN 20 report that they are unable to reach users on VLAN 30. What is causing the problem?",
    "answers": [
      "RTA is using the same subnet for VLAN 20 and VLAN 30."
    ]
  },
  {
    "question": "Which three pairs of trunking modes will establish a functional trunk link between two Cisco switches? (Choose three.)",
    "manual": true,
    "answers": [],
    "missingAnswers": true
  },
  {
    "question": "A technician is configuring a router for a small company with multiple WLANs and doesn’t need the complexity of a dynamic routing protocol. What should be done or checked?",
    "answers": [
      "Create static routes to all internal networks and a default route to the internet."
    ]
  },
  {
    "question": "A company is deploying a wireless network in the distribution facility in a Boston suburb. The warehouse is quite large and it requires multiple access points to be used. Because some of the company devices still operate at 2.4GHz, the network administrator decides to deploy the 802.11g standard. Which channel assignments on the multiple access points will make sure that the wireless channels are not overlapping?",
    "answers": [
      "channels 1, 6, and 11"
    ]
  },
  {
    "question": "A network administrator of a small advertising company is configuring WLAN security by using the WPA2 PSK method. Which credential do office users need in order to connect their laptops to the WLAN?",
    "answers": [
      "a key that matches the key on the AP"
    ]
  },
  {
    "question": "Refer to the exhibit. What are the possible port roles for ports A, B, C, and D in this RSTP-enabled network?",
    "answers": [
      "alternate, designated, root, root"
    ]
  },
  {
    "question": "Refer to the exhibit. Which static route would an IT technician enter to create a backup route to the 172.16.1.0 network that is only used if the primary RIP learned route fails?",
    "answers": [
      "ip route 172.16.1.0 255.255.255.0 s0/0/0 121"
    ]
  },
  {
    "question": "What mitigation plan is best for thwarting a DoS attack that is creating a MAC address table overflow?",
    "answers": [
      "Enable port security."
    ]
  },
  {
    "question": "A network engineer is troubleshooting a newly deployed wireless network that is using the latest 802.11 standards. When users access high bandwidth services such as streaming video, the wireless network performance is poor. To improve performance the network engineer decides to configure a 5 Ghz frequency band SSID and train users to use that SSID for streaming media services. Why might this solution improve the wireless network performance for that type of service?",
    "answers": [
      "The 5 GHz band has more channels and is less crowded than the 2.4 GHz band, which makes it more suited to streaming multimedia."
    ]
  },
  {
    "question": "Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?",
    "answers": [
      "broadcast DHCPREQUEST"
    ]
  },
  {
    "question": "Refer to the exhibit. Which destination MAC address is used when frames are sent from the workstation to the default gateway?",
    "answers": [
      "MAC address of the virtual router"
    ]
  },
  {
    "question": "After a host has generated an IPv6 address by using the DHCPv6 or SLAAC process, how does the host verify that the address is unique and therefore usable?",
    "answers": [
      "The host sends an ICMPv6 neighbor solicitation message to the DHCP or SLAAC-learned address and if no neighbor advertisement is returned, the address is considered unique."
    ]
  },
  {
    "question": "Match the purpose with its DHCP message type. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/1905334006.webp"
  },
  {
    "question": "Which protocol adds security to remote connections?",
    "answers": [
      "SSH"
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with PC1. Based on the output, what is the possible cause of the problem?",
    "answers": [
      "The encapsulation dot1Q 5 command contains the wrong VLAN."
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator is configuring inter-VLAN routing on a network. For now, only one VLAN is being used, but more will be added soon. What is the missing parameter that is shown as the highlighted question mark in the graphic?",
    "answers": [
      "It identifies the VLAN number."
    ]
  },
  {
    "question": "Match each DHCP message type with its description. (Not all options are used.)",
    "manual": true,
    "answers": [],
    "imageUrl": "https://itexamanswers.net/wp-content/uploads/2019/12/2020-01-20_225135.jpg"
  },
  {
    "question": "What network attack seeks to create a DoS for clients by preventing them from being able to obtain a DHCP lease?",
    "answers": [
      "DHCP starvation"
    ]
  },
  {
    "question": "Refer to the exhibit. If the IP addresses of the default gateway router and the DNS server are correct, what is the configuration problem?",
    "answers": [
      "The IP address of the default gateway router is not contained in the excluded address list."
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator has added a new subnet to the network and needs hosts on that subnet to receive IPv4 addresses from the DHCPv4 server.\nWhat two commands will allow hosts on the new subnet to receive addresses from the DHCP4 server? (Choose two.)",
    "answers": [
      "R1(config-if)# ip helper-address 10.2.0.250",
      "R1(config)# interface G0/0"
    ]
  },
  {
    "question": "What protocol or technology uses source IP to destination IP as a load-balancing mechanism?",
    "answers": [
      "EtherChannel"
    ]
  },
  {
    "question": "What protocol should be disabled to help mitigate VLAN attacks?",
    "answers": [
      "DTP"
    ]
  },
  {
    "question": "What protocol or technology requires switches to be in server mode or client mode?",
    "answers": [
      "VTP"
    ]
  },
  {
    "question": "What are two reasons a network administrator would segment a network with a Layer 2 switch? (Choose two.)",
    "answers": [
      "to enhance user bandwidth",
      "to isolate traffic between segments"
    ]
  },
  {
    "question": "What command will enable a router to begin sending messages that allow it to configure a link-local address without using an IPv6 DHCP server?",
    "answers": [
      "the ipv6 unicast-routing command"
    ]
  },
  {
    "question": "A network administrator is using the router-on-a-stick model to configure a switch and a router for inter-VLAN routing. What configuration should be made on the switch port that connects to the router?",
    "answers": [
      "Configure the port as an 802.1q trunk port."
    ]
  },
  {
    "question": "What are three techniques for mitigating VLAN attacks? (Choose three.)",
    "answers": [
      "Enable trunking manually",
      "Disable DTP.",
      "Set the native VLAN to an unused VLAN."
    ]
  },
  {
    "question": "Match the DHCP message types to the order of the DHCPv4 process. (Not all options are used.)",
    "answers": [
      "Step 1 -> DHCPDISCOVER",
      "Step 2 -> DHCPOFFER",
      "Step 3 -> DHCPREQUEST",
      "Step 4 -> DHCPACK"
    ]
  },
  {
    "question": "In which situation would a technician use the show interfaces switch command?",
    "answers": [
      "when packets are being dropped from a particular directly attached host"
    ]
  },
  {
    "question": "What is a drawback of the local database method of securing device access that can be solved by using AAA with centralized servers?",
    "answers": [
      "User accounts must be configured locally on each device, which is an unscalable authentication solution."
    ]
  },
  {
    "question": "What action does a DHCPv4 client take if it receives more than one DHCPOFFER from multiple DHCP servers?",
    "answers": [
      "It sends a DHCPREQUEST that identifies which lease offer the client is accepting."
    ]
  },
  {
    "question": "Refer to the exhibit. The network administrator is configuring the port security feature on switch SWC. The administrator issued the command show port-security interface fa 0/2 to verify the configuration. What can be concluded from the output that is shown? (Choose three.)",
    "answers": [
      "This port is currently up.",
      "Security violations will cause this port to shut down immediately.",
      "The switch port mode for this interface is access mode."
    ]
  },
  {
    "question": "What method of wireless authentication is dependent on a RADIUS authentication server?",
    "answers": [
      "WPA2 Enterprise"
    ]
  },
  {
    "question": "A network administrator has found a user sending a double-tagged 802.1Q frame to a switch. What is the best solution to prevent this type of attack?",
    "answers": [
      "The VLANs for user access ports should be different VLANs than any native VLANs used on trunk ports."
    ]
  },
  {
    "question": "Refer to the exhibit. Which two conclusions can be drawn from the output? (Choose two.)",
    "answers": [
      "The EtherChannel is down.",
      "The port channel ID is 2."
    ]
  },
  {
    "question": "Refer to the exhibit. A network administrator is configuring the router R1 for IPv6 address assignment. Based on the partial configuration, which IPv6 global unicast address assignment scheme does the administrator intend to implement?",
    "answers": [
      "stateful"
    ]
  },
  {
    "question": "A WLAN engineer deploys a WLC and five wireless APs using the CAPWAP protocol with the DTLS feature to secure the control plane of the network devices. While testing the wireless network, the WLAN engineer notices that data traffic is being exchanged between the WLC and the APs in plain-text and is not being encrypted. What is the most likely reason for this?",
    "answers": [
      "Although DTLS is enabled by default to secure the CAPWAP control channel, it is disabled by default for the data channel."
    ]
  },
  {
    "question": "A new switch is to be added to an existing network in a remote office. The network administrator does not want the technicians in the remote office to be able to add new VLANs to the switch, but the switch should receive VLAN updates from the VTP domain. Which two steps must be performed to configure VTP on the new switch to meet these conditions? (Choose two.)",
    "answers": [
      "Configure the new switch as a VTP client.",
      "Configure the existing VTP domain name on the new switch."
    ]
  },
  {
    "question": "Refer to the exhibit. Consider that the main power has just been restored. PC3 issues a broadcast IPv4 DHCP request. To which port will SW1 forward this request?​",
    "answers": [
      "to Fa0/1, Fa0/2, and Fa0/3 only"
    ]
  },
  {
    "question": "What action takes place when the source MAC address of a frame entering a switch is not in the MAC address table?",
    "answers": [
      "The switch adds the MAC address and incoming port number to the table.",
      "The switch adds the MAC address and incoming port number to the table."
    ]
  },
  {
    "question": "What is the effect of entering the ip dhcp snooping configuration command on a switch?",
    "answers": [
      "It enables DHCP snooping globally on a switch."
    ]
  },
  {
    "question": "What is a result of connecting two or more switches together?",
    "answers": [
      "The size of the broadcast domain is increased."
    ]
  },
  {
    "question": "Branch users were able to access a site in the morning but have had no connectivity with the site since lunch time. What should be done or checked?",
    "answers": [
      "Verify that the static route to the server is present in the routing table."
    ]
  },
  {
    "question": "What is the effect of entering the switchport port-security configuration command on a switch?",
    "answers": [
      "It enables port security on an interface."
    ]
  },
  {
    "question": "A network administrator is configuring a WLAN. Why would the administrator use multiple lightweight APs?",
    "answers": [
      "to facilitate group configuration and management of multiple WLANs through a WLC"
    ]
  },
  {
    "question": "Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?",
    "answers": [
      "The VLAN that is used by PC-A is not in the list of allowed VLANs on the trunk."
    ]
  },
  {
    "question": "A network administrator is configuring a WLAN. Why would the administrator use RADIUS servers on the network?",
    "answers": [
      "to restrict access to the WLAN by authorized, authenticated users only"
    ]
  },
  {
    "question": "Refer to the exhibit. An administrator is attempting to install an IPv6 static route on router R1 to reach the network attached to router R2. After the static route command is entered, connectivity to the network is still failing. What error has been made in the static route configuration?",
    "answers": [
      "The interface is incorrect."
    ]
  },
  {
    "question": "What action takes place when a frame entering a switch has a unicast destination MAC address that is not in the MAC address table?",
    "answers": [
      "The switch will forward the frame out all ports except the incoming port."
    ]
  },
  {
    "question": "A network administrator is configuring a WLAN. Why would the administrator apply WPA2 with AES to the WLAN?",
    "answers": [
      "to provide privacy and integrity to wireless traffic by using encryption"
    ]
  },
  {
    "question": "Users on a LAN are unable to get to a company web server but are able to get elsewhere. What should be done or checked?",
    "answers": [
      "Verify that the static route to the server is present in the routing table."
    ]
  },
  {
    "question": "What IPv6 prefix is designed for link-local communication?",
    "answers": [
      "fe80::/10"
    ]
  },
  {
    "question": "What is the effect of entering the ip dhcp snooping limit rate 6 configuration command on a switch?",
    "answers": [
      "It restricts the number of discovery messages, per second, to be received on the interface."
    ]
  },
  {
    "question": "A network administrator is configuring a WLAN. Why would the administrator change the default DHCP IPv4 addresses on an AP?",
    "answers": [
      "to reduce outsiders intercepting data or accessing the wireless network by using a well-known address range"
    ]
  },
  {
    "question": "What is the effect of entering the ip arp inspection validate src-mac configuration command on a switch?",
    "answers": [
      "It checks the source L2 address in the Ethernet header against the sender L2 address in the ARP body."
    ]
  },
  {
    "question": "What protocol or technology is a Cisco proprietary protocol that is automatically enabled on 2960 switches?",
    "answers": [
      "DTP"
    ]
  },
  {
    "question": "What address and prefix length is used when configuring an IPv6 default static route?",
    "answers": [
      "::/0"
    ]
  },
  {
    "question": "What are two characteristics of Cisco Express Forwarding (CEF)? (Choose two.)",
    "answers": [
      "This is the fastest forwarding mechanism on Cisco routers and multilayer switches.",
      "Packets are forwarded based on information in the FIB and an adjacency table."
    ]
  },
  {
    "question": "Which term describes the role of a Cisco switch in the 802.1X port-based access control?",
    "answers": [
      "authenticator"
    ]
  },
  {
    "question": "Which Cisco solution helps prevent ARP spoofing and ARP poisoning attacks?",
    "answers": [
      "Dynamic ARP Inspection"
    ]
  },
  {
    "question": "What is an advantage of PVST+?",
    "answers": [
      "PVST+ optimizes performance on the network through load sharing."
    ]
  },
  {
    "question": "What protocol or technology uses a standby router to assume packet-forwarding responsibility if the active router fails?",
    "answers": [
      "HSRP"
    ]
  },
  {
    "question": "A small publishing company has a network design such that when a broadcast is sent on the LAN, 200 devices receive the transmitted broadcast. How can the network administrator reduce the number of devices that receive broadcast traffic?",
    "answers": [
      "Segment the LAN into smaller LANs and route between them."
    ]
  },
  {
    "question": "What else is required when configuring an IPv6 static route using a next-hop link-local address?",
    "answers": [
      "interface number and type"
    ]
  },
  {
    "question": "A technician is configuring a wireless network for a small business using a SOHO wireless router. Which two authentication methods are used, if the router is configured with WPA2? (Choose two.)",
    "answers": [
      "personal",
      "enterprise"
    ]
  },
  {
    "question": "Which mitigation technique would prevent rogue servers from providing false IPv6 configuration parameters to clients?",
    "answers": [
      "enabling DHCPv6 Guard"
    ]
  },
  {
    "question": "A PC has sent an RS message to an IPv6 router attached to the same network. Which two pieces of information will the router send to the client? (Choose two.)",
    "answers": [
      "prefix length",
      "prefix"
    ]
  },
  {
    "question": "While attending a conference, participants are using laptops for network connectivity. When a guest speaker attempts to connect to the network, the laptop fails to display any available wireless networks. The access point must be operating in which mode?",
    "answers": [
      "active"
    ]
  },
  {
    "question": "Which three components are combined to form a bridge ID?",
    "answers": [
      "extended system ID",
      "bridge priority",
      "MAC address"
    ]
  },
  {
    "question": "On a Cisco 3504 WLC Summary page (Advanced > Summary), which tab allows a network administrator to configure a particular WLAN with a WPA2 policy?",
    "answers": [
      "WLANs"
    ]
  }
];