import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const PeerToPeerArchitectureMD = () => {
  const c1 = `
  import socket

  class P2P:
      def __init__(self, port):
          self.peers = []
          self.port = port
  
      def start(self):
          s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
          s.bind(("0.0.0.0", self.port))
          s.listen(5)
          while True:
              c, addr = s.accept()
              print(f'Connected with {addr}')
              c.send(b'Welcome to the P2P network')
              self.peers.append(c)
  
  p2p = P2P(5555)
  p2p.start()  
  `;
  const c2 = `
  class P2P:
      def __init__(self, port):
          self.peers = []
          self.port = port

      def broadcast(self, data):
          for peer in self.peers:
              peer.send(data)

  p2p = P2P(5555)
  p2p.start()
  p2p.broadcast(b'Hello from peer 1')
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Peer-to-peer (P2P) architecture is a decentralized network structure in
        which each node (peer) acts as both a client and a server, allowing for
        the direct exchange of data between peers without the need for a central
        server.
      </p>
      <p>
        An analogy for Peer-to-Peer architecture is a group of friends sharing a
        music playlist. Each friend has their own collection of music, but they
        all share and exchange songs with each other directly, without the need
        for a central music library or server. This is similar to how in a P2P
        network, each node has its own resources and data, but can share and
        exchange those resources directly with other nodes without the need for
        a central server.
      </p>
      <p>
        Peer-to-Peer (P2P) architecture is a decentralized network structure in
        which each node (peer) acts as both a client and a server, allowing for
        the direct exchange of data between peers without the need for a central
        server. In P2P systems, peers can share, exchange and distribute data
        and resources among themselves.
      </p>
      <p>Here is an example of a simple P2P network using Python:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This code creates a P2P class with a constructor that initializes an
        empty list of peers and a port number. The start() method creates a
        socket and binds it to the IP address &quot;0.0.0.0&quot; and the port
        number passed to the constructor. It then listens for incoming
        connections and when a connection is established, it welcomes the peer
        and adds it to the list of peers.
      </p>
      <p>
        Once a peer is connected, it can then send and receive data from the
        other peers in the network. Here is an example of how a peer can send
        data to all other peers in the network:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This code creates a broadcast method that sends the data passed to it to
        all the peers in the network. When the broadcast method is called and
        sends the data &quot;Hello from peer 1&quot; to all the peers.
      </p>
      <p>
        This is just a simple example of how a P2P network can be implemented.
        Real-world P2P systems are more complex and use techniques like
        Distributed Hash Tables (DHTs), peer discovery, and content distribution
        to efficiently share and distribute data among peers.
      </p>
    </>
  );
};
