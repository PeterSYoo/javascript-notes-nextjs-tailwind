import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const GraphMD = () => {
  const c1 = `
  class Graph:
    def __init__(self):
        self.adj_list = {}

    def add_vertex(self, vertex):
        if vertex not in self.adj_list:
            self.adj_list[vertex] = []

    def add_edge(self, vertex1, vertex2):
        self.adj_list[vertex1].append(vertex2)
        self.adj_list[vertex2].append(vertex1)

    def print_graph(self):
        for vertex in self.adj_list:
            print(vertex, "->", " -> ".join(self.adj_list[vertex]))

  g = Graph()
  g.add_vertex("A")
  g.add_vertex("B")
  g.add_vertex("C")
  g.add_edge("A", "B")
  g.add_edge("A", "C")
  g.print_graph()
  `;
  const c2 = `
  class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjList.get(vertex1).push(vertex2);
      this.adjList.get(vertex2).push(vertex1);
    }
  
    printGraph() {
      for (const [vertex, adjacents] of this.adjList) {
        console.log(vertex, "->", adjacents.join(" -> "));
      }
    }
  }
  
  const g = new Graph();
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.printGraph();  
  `;

  return (
    <>
      <p>
        In data structures and algorithms, a graph is a non-linear data
        structure that consists of a finite set of vertices (or nodes) and a set
        of edges connecting these vertices. These edges can be directed or
        undirected, and they can also have weights associated with them. Graphs
        can be used to represent a wide variety of real-world problems, such as
        networks, roads, relationships, and more.
      </p>
      <p>
        In terms of what happens in the memory, when a graph is implemented in a
        computer program, the vertices of the graph are typically represented
        using objects, and the edges are represented using pointers or
        references that connect the objects. The memory used by the graph is
        typically allocated dynamically, as the graph grows and changes over
        time. The amount of memory used by a graph will depend on the specific
        implementation, as well as the number of vertices and edges in the
        graph.
      </p>
      <p>
        Here is an example of how you might implement a simple graph data
        structure in Python:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This code defines a Graph class, which has methods for adding vertices
        and edges to the graph, and for printing the graph. The graph is stored
        as an adjacency list, which is a dictionary where each key is a vertex
        and the value is a list of adjacent vertices.
      </p>
      <p>
        Here&apos;s an example of how you might implement a simple graph data
        structure in JavaScript:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        The javascript code defines a Graph class, which has similar methods as
        the Python code, like adding vertices and edges to the graph, and for
        printing the graph, but the javascript code uses a Map() data structure
        to store the adjacency list of the graph, the rest of the code is
        similar to the Python code.
      </p>
      <p>
        Please note that in both examples, this is a simple undirected graph
        representation and not a weighted graph representation.
      </p>
    </>
  );
};
