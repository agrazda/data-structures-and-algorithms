"use strict";

const Vertex = require("./vertex");
const Edge = require("./edge");

/**
 * Implements an adjacency list to store Vertices and edges
 */
class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.numNodes = 0;
  }

  size() {
    return this.numNodes++;
  }

  getVertex() {
    return this.getVertex
  }
    

  // adding a value to our adjency
  addVertex(value) {
    let payload = new Vertex(value);
    this.adjacencyList.set(payload, []);

    return payload;
  }

  // add method should specify direct vs undirected, adding a connection between vertices
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    // check if the vertex exists in our list of vertices.
    if (
      !this.adjacencyList.has(startVertex) &&
      !this.adjacencyList.has(endVertex)
    ) {
      throw new Error("Vertex Error");
    }

    // what should do to add them to our adjacency values?

    // grab all edges connected to the starting vertex
    let neighbors = this.adjacencyList.get(startVertex);

    // create a new edge from our ending vertex and push it into the list of neighbors.
    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error("GET NEIGHBOR ERROR :: Invalid vertex");
    }

    // I don't want mutate this array
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(startVertex) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift();

      // I need to see all of current nodes adjecneies
      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {
        let neighbor = edge.vertex;

        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else {
          continue;
        }
      }
    }

    return visitedNodes;
  }
}

module.export = Graph

let graph = new Graph();

let A = graph.addVertex("A");
let B = graph.addVertex("B");
let C = graph.addVertex("C");
let D = graph.addVertex("D");
let E = graph.addVertex("E");
let F = graph.addVertex("F");
let G = graph.addVertex("G");
let H = graph.addVertex("H");

graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(A, B);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, E);
graph.addDirectedEdge(C, F);
graph.addDirectedEdge(C, E);
graph.addDirectedEdge(C, B);
graph.addDirectedEdge(F, G);
graph.addDirectedEdge(G, H);
graph.addDirectedEdge(H, F);

console.log("Number of VERTEX", graph.size());
console.log(graph.breadthFirst(A));
