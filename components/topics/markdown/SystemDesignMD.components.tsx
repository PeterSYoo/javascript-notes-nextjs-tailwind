export const SystemDesignMD = () => {
  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        System design refers to the process of defining the architecture,
        components, modules, interfaces, and data for a system to satisfy
        specific requirements and constraints.
      </p>

      <p>
        System design refers to the process of defining the architecture,
        components, modules, interfaces, and data for a system to satisfy
        specific requirements and constraints. It involves identifying the
        system&apos;s components, their relationships and interactions, and the
        overall system&apos;s architecture. There are several types of system
        design architectures, including:
      </p>
      <ol className="list-decimal ml-5">
        <li>
          Monolithic Architecture: A monolithic architecture is a single,
          unified application that is built as a single unit. It is a
          traditional way of building software systems, where all components are
          tightly coupled and the entire system is built and deployed as a
          single unit.
        </li>
        <li>
          Microservices Architecture: Microservices architecture is an approach
          where a large application is broken down into a collection of small,
          independent services that communicate with each other using APIs. It
          allows for greater flexibility and scalability, as services can be
          developed, deployed, and scaled independently.
        </li>
        <li>
          Service-Oriented Architecture (SOA): A service-oriented architecture
          is an approach where the system is built as a collection of services
          that communicate with each other using a well-defined interface. It
          allows for a more modular and flexible approach to building systems,
          as services can be reused and combined in different ways.
        </li>
        <li>
          Event-Driven Architecture: An event-driven architecture is an approach
          where the system is built around the concept of events and
          event-driven communication. This allows for a more dynamic and
          responsive system, as components can respond to events in real-time.
        </li>
        <li>
          Client-Server Architecture: A client-server architecture is an
          approach where the system is divided into two parts, the client and
          the server. The client makes requests to the server, which processes
          the requests and returns the results. This allows for a more
          distributed and scalable approach to building systems.
        </li>
        <li>
          Peer-to-Peer Architecture: In a peer-to-peer architecture, each node
          in the system functions both as a client and a server. This allows for
          a more decentralized and fault-tolerant approach to building systems,
          as no single point of failure exists.
        </li>
      </ol>
      <p>
        These are some common architectures of system design, it is important to
        note that choosing an architecture depends on the requirements of the
        system and the constraints it operates under.
      </p>
    </>
  );
};
