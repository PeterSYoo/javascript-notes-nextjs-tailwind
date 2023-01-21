import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const OSIModelMD = () => {
  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        The OSI (Open Systems Interconnection) model is a framework for
        understanding how different protocols in a network work together,
        divided into seven layers that each handle a specific set of functions.
      </p>
      <p>
        The OSI (Open Systems Interconnection) model is a framework that
        describes how different communication protocols interact with each
        other. It is often compared to a layered cake, with each layer
        representing a different aspect of communication.
      </p>
      <p>
        One analogy for the OSI model is to think of a recipe for baking a cake.
        Each layer of the cake corresponds to a layer in the OSI model, and each
        ingredient corresponds to a protocol.
      </p>
      <p>
        For example, the bottom layer of the cake, the crust, corresponds to the
        Physical Layer in the OSI model. This layer is responsible for
        transmitting the raw bits of data over a physical medium, such as a wire
        or a radio signal. In code, this might look like sending a stream of
        bytes over a serial port or a USB connection.
      </p>
      <p>
        The next layer of the cake, the filling, corresponds to the Data Link
        Layer. This layer is responsible for ensuring that the data is properly
        formatted and error-free, and for addressing the data so it gets to the
        right place. In code, this might look like using a protocol like
        Ethernet to encapsulate the data in packets and add a header with the
        destination address.
      </p>
      <p>
        The next layer of the cake, the frosting, corresponds to the Network
        Layer. This layer is responsible for routing the data through the
        network, so it gets to the right place. In code, this might look like
        using the IP protocol to add a source and destination address and send
        the data through routers.
      </p>
      <p>
        And so on, up to the top layer, the decorations, corresponding to the
        Application Layer, where the data is delivered to the application and
        interpreted. In code, this might look like using HTTP or FTP protocol to
        request a file from a server, or sending a message to a chat
        application.
      </p>
      <p>
        This analogy helps to understand how different protocols work together
        to allow communication between different systems, and how each protocol
        is responsible for a different aspect of the communication process.
      </p>
      <h2 className="font-semibold">
        The OSI model is divided into seven layers, each with a specific
        function:
      </h2>
      <ol className="list-decimal ml-5">
        <li>
          Application Layer: This is the topmost layer and is responsible for
          providing a user interface and network services to the end user.
          Examples include email clients, web browsers, and file transfer
          applications.
        </li>
        <li>
          Presentation Layer: This layer is responsible for formatting and
          encrypting data before it is sent over the network. It also handles
          data compression and decompression.
        </li>
        <li>
          Session Layer: This layer establishes, manages, and terminates
          connections between different devices on the network. It also helps to
          synchronize communication between devices.
        </li>
        <li>
          Transport Layer: This layer is responsible for ensuring that data is
          delivered reliably and in the correct order. It also helps to segment
          and reassemble data as needed.
        </li>
        <li>
          Network Layer: This layer is responsible for routing data packets to
          their destination. It also handles addressing and routing decisions.
        </li>
        <li>
          Data Link Layer: This layer is responsible for creating a reliable
          link between two devices on the same network. It also handles error
          detection and correction.
        </li>
        <li>
          Physical Layer: This is the bottommost layer and is responsible for
          transmitting the actual bits of data over the network. It deals with
          the physical connectivity and transmission of data over the network.
        </li>
      </ol>
      <p>
        Each layer of the OSI model communicates with the layer directly above
        and below it, but not with layers that are more than one level away.
        This modular design allows for flexibility and ease of troubleshooting.
      </p>
      <div className="flex justify-center w-full mt-5">
        <iframe
          height="315"
          src="https://www.youtube.com/embed/oVVlMqsLdro"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="max-w-[560px] w-full"
        ></iframe>
      </div>
    </>
  );
};
