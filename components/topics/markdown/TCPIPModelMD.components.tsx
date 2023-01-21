import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const TCPIPModelMD = () => {
  const c1 = `
  const net = require('net');

  const client = new net.Socket();
  
  // Connect to the server
  client.connect(80, 'example.com', function() {
      console.log('Connected');
      // send data using TCP
      client.write('Hello, World!');
  });  
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        The TCP/IP model is a set of protocols that define the communication
        between devices on a network, and it is the foundation of the internet.
      </p>
      <p>
        The TCP/IP model can be thought of as a set of instructions for sending
        a letter in the mail. The &quot;Transmission Control Protocol&quot;
        (TCP) would be like the addressing on the envelope, making sure the
        letter gets to the right place by breaking it up into smaller packets
        and reassembling them at the destination. The &quot;Internet
        Protocol&quot; (IP) would be like the post office, routing the packets
        to the correct destination. In JavaScript, you can use the net module to
        create a TCP connection and send data over it.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        It&apos;s important to note that, in JavaScript, the net module is part
        of the Node.js platform and is not available in web-browsers.
      </p>
      <h2 className="font-semibold">
        The TCP/IP model consists of four layers:
      </h2>
      <ol className="list-decimal ml-5">
        <li>
          The Application Layer: This is the topmost layer and it is responsible
          for providing the interface between the application and the network.
          Examples of protocols at this layer include HTTP, FTP, and DNS.
        </li>
        <li>
          The Transport Layer: This layer is responsible for the end-to-end
          delivery of data. The two main protocols at this layer are TCP and
          UDP. TCP ensures that data is delivered reliably, while UDP is a
          connectionless protocol that is faster but less reliable.
        </li>
        <li>
          The Internet Layer: This layer is responsible for routing packets of
          data from one network to another. The main protocol at this layer is
          IP.
        </li>
        <li>
          The Link Layer: This is the bottom layer and it is responsible for the
          delivery of data over a single link of a network. Examples of
          protocols at this layer include Ethernet, WiFi, and PPP.
        </li>
      </ol>
      <p>
        Each layer of the TCP/IP model has a specific function and protocols
        that are designed to perform that function. The layers are designed to
        be independent of each other, so that changes to one layer do not affect
        the others. This modular design allows for flexibility, scalability, and
        ease of troubleshooting.
      </p>
      <div className="flex justify-center w-full mt-5">
        <iframe
          height="315"
          src="https://www.youtube.com/embed/OTwp3xtd4dg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="max-w-[560px] w-full"
        ></iframe>
      </div>
    </>
  );
};
