Here are some commonly used networking commands in Linux along with examples:

1. **ifconfig**: Display or configure network interfaces.

   Example:
   ```
   ifconfig
   ```
   This command displays the configuration of all network interfaces on the system.

2. **ip**: Versatile command for configuring network interfaces, routing tables, and more.

   Example:
   ```
   ip addr show
   ```
   This command shows the IP addresses associated with all network interfaces.

3. **route**: Display or manipulate the IP routing table.

   Example:
   ```
   route -n
   ```
   This command displays the kernel routing table in a numeric format.

4. **netstat**: Display network connections, routing tables, interface statistics, and more.

   Example:
   ```
   netstat -tuln
   ```
   This command shows all listening TCP and UDP sockets along with their port numbers.

5. **ss**: Investigate sockets, similar to netstat.

   Example:
   ```
   ss -lntu
   ```
   This command shows listening TCP and UDP sockets in numeric format.

6. **ping**: Send ICMP ECHO_REQUEST packets to network hosts.

   Example:
   ```
   ping google.com
   ```
   This command sends ICMP echo requests to the specified host (google.com in this example) to check for network connectivity.

7. **traceroute**: Print the route packets take to a network host.

   Example:
   ```
   traceroute google.com
   ```
   This command traces the route that packets take from your computer to the specified host (google.com in this example).

8. **dig**: DNS lookup utility for querying DNS servers.

   Example:
   ```
   dig example.com
   ```
   This command queries DNS servers for information about the domain example.com.

9. **host**: DNS lookup utility.

   Example:
   ```
   host example.com
   ```
   This command performs a DNS lookup for the domain example.com.

10. **nmap**: Network exploration tool and security scanner.

    Example:
    ```
    nmap -sP 192.168.1.0/24
    ```
    This command scans the specified network (192.168.1.0/24) to discover live hosts.

11. **tcpdump**: Network packet analyzer that captures packets flowing through a network interface.

    Example:
    ```
    tcpdump -i eth0
    ```
    This command captures and displays packets on the network interface eth0.

These are just a few examples of the many networking commands available in Linux. Each command provides valuable information or performs specific tasks related to networking and network management.


Here are some common routing commands in Linux along with their purposes:

1. **route**: This command is used to view and manipulate the IP routing table. It can add, delete, or modify routes in the kernel routing table.

   Example:
   ```
   route -n
   ```

2. **ip route**: This is a more modern and powerful command for viewing and managing the IP routing table. It provides more functionality compared to the traditional route command.

   Example:
   ```
   ip route show
   ```

3. **netstat -r**: This command displays the IP routing table similar to the route command but also provides additional network-related information.

   Example:
   ```
   netstat -r
   ```

4. **traceroute**: This command is used to trace the route that packets take from the source to the destination by sending packets with increasing TTL values.

   Example:
   ```
   traceroute google.com
   ```

5. **ip route add**: This command is used to add a new route to the kernel routing table.

   Example:
   ```
   ip route add 192.168.1.0/24 via 192.168.0.1 dev eth0
   ```

6. **ip route del**: This command is used to delete an existing route from the kernel routing table.

   Example:
   ```
   ip route del 192.168.1.0/24 via 192.168.0.1 dev eth0
   ```

7. **ip route change**: This command is used to change the attributes of an existing route in the kernel routing table.

   Example:
   ```
   ip route change 192.168.1.0/24 via 192.168.0.1 dev eth0
   ```

These commands are essential for managing routing in Linux systems. They allow administrators to view the routing table, add or remove routes, and troubleshoot network connectivity issues. Each command serves a specific purpose and provides different levels of functionality for routing management.