import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ProtocolsListMD = () => {
  const c1 = `

  `;
  const c2 = `

  `;

  return (
    <>
      <h2 className="font-semibold">
        There are many different protocols used in various fields, including but
        not limited to:
      </h2>
      <ul className="list-disc ml-5">
        <li>
          Internet protocols: TCP, UDP, IP, HTTP, HTTPS, FTP, SMTP, POP, IMAP,
          DNS, DHCP, ARP, VPN
        </li>
        <li>
          Wireless protocols: Wi-Fi, Bluetooth, Zigbee, LoRa, NFC, GSM, CDMA
        </li>
        <li>
          Network protocols: Ethernet, Token Ring, FDDI, ATM, SONET, Frame Relay
        </li>
        <li>Transport protocols: TCP, UDP</li>
        <li>File transfer protocols: FTP, SFTP, SCP</li>
        <li>Routing protocols: OSPF, BGP, IS-IS, RIP</li>
        <li>Voice and video protocols: SIP, RTP, H.323, RTSP</li>
        <li>Security protocols: SSL, TLS, SSH, IPSec</li>
        <li>Streaming protocols: RTMP, HLS, DASH</li>
        <li>Database protocols: JDBC, ODBC, OLEDB, ADO.NET</li>
        <li>IoT protocols: MQTT, CoAP, AMQP, XMPP</li>
        <li>
          many more protocols are used in different fields such as industrial
          control, medical, automotive and many more.
        </li>
      </ul>
      <h2 className="font-semibold">Which Protocol Does WebSockets use?</h2>
      <p>
        WebSockets uses the WebSocket protocol, which is an application protocol
        that runs over the transport protocol (TCP). WebSockets allows for
        real-time, bidirectional communication between a client (such as a web
        browser) and a server. The WebSocket protocol uses a handshake mechanism
        to establish a connection, after which point data can be transmitted in
        both directions as a stream of binary or text messages.
      </p>
      <p>
        WebSocket is an independent TCP-based protocol, but it is designed to
        work over HTTP/HTTPS ports 80/443. WebSocket is designed to work over
        the same ports as HTTP and HTTPS, which allows it to pass through
        firewalls and proxy servers that would normally block raw TCP
        connections.
      </p>
    </>
  );
};
