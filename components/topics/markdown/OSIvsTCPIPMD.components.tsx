import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const OSIvsTCPIPMD = () => {
  return (
    <>
      <p>
        The OSI (Open Systems Interconnection) model and the TCP/IP
        (Transmission Control Protocol/Internet Protocol) model are both
        reference models used to describe how communication networks work.
      </p>
      <p>
        The OSI model is a seven-layer model that describes how data is
        transmitted between different devices on a network. Each layer of the
        OSI model has a specific function, such as error-checking or network
        addressing. The OSI model is designed to be a general model that can be
        applied to any type of network, and it provides a clear separation
        between different aspects of network communication.
      </p>
      <p>
        The TCP/IP model is a four-layer model that is most commonly used to
        describe the architecture of the internet. Like the OSI model, each
        layer of the TCP/IP model has a specific function, such as data transfer
        or routing. The TCP/IP model is designed to be a practical model that
        can be easily implemented in real-world networks, and it has been widely
        adopted as the standard for internet communication.
      </p>
      <h2 className="font-semibold">Advantages of OSI Model:</h2>
      <ul className="list-disc ml-5">
        <li>It provides a clear separation of concerns.</li>
        <li>It allows for easier troubleshooting and problem-solving.</li>
        <li>It makes it easier to add new protocols to a network.</li>
      </ul>
      <h2 className="font-semibold">Disadvantages of OSI Model:</h2>
      <ul className="list-disc ml-5">
        <li>It is not as widely used as the TCP/IP model.</li>
        <li>It can be difficult to implement in real-world networks.</li>
      </ul>
      <h2 className="font-semibold">Advantages of TCP/IP Model:</h2>
      <ul className="list-disc ml-5">
        <li>It is widely used on the internet.</li>
        <li>It is easy to implement in real-world networks.</li>
        <li>It has a simple and straightforward architecture</li>
      </ul>
      <h2 className="font-semibold">Disadvantages of TCP/IP Model:</h2>
      <ul className="list-disc ml-5">
        <li>
          It doesn&apos;t provide as clear separation of concerns as OSI Model.
        </li>
        <li>It can make troubleshooting and problem-solving more difficult.</li>
      </ul>
    </>
  );
};
