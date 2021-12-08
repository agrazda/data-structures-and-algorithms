'use script';

describe('Graph', () => {


    it('vertex can be successfully added to the graph', () => {
        let graph = new Graph();
        let vertex1 = graph.addVertex(1);
        expect(graph.edges.has(vertex1)).toBeTruthy();
    });

    it('An edge can be successfully added to the graph', () => {
        let graph = new Graph();
        let vertex1 = graph.addVertex(1);
        let vertex2 = graph.addVertex(2);
        graph.addDirectedEdge(vertex1, vertex2);
        let vertex1edges = graph.edges.get(vertex1).length;
        expect(vertex1edges).toBe(1);
      });
    
      it('A collection of all vertices can be properly retrieved from the graph', () => {
        let graph = new Graph();
        graph.addVertex(1);
        graph.addVertex(2);
        graph.addVertex(3);
        let vertices = graph.vertices;
        expect(vertices.size).toBe(3);
        expect(graph.getVertices()).toBeTruthy();
      });
    
      it('All appropriate neighbors can be retrieved from the graph', () => {
        let graph = new Graph();
        let vertex1 = graph.addVertex(1);
        let vertex2 = graph.addVertex(2);
        let vertex3 = graph.addVertex(3);
        let vertex4 = graph.addVertex(4);
        let vertex5 = graph.addVertex(5);
        let vertex6 = graph.addVertex(6);
        graph.addDirectedEdge(vertex1, vertex3);
        graph.addDirectedEdge(vertex1, vertex5);
        graph.addDirectedEdge(vertex1, vertex6);
        graph.addDirectedEdge(vertex1, vertex2);
        graph.addDirectedEdge(vertex1, vertex4);
        const vertex1edges = graph.getNeighbors(vertex1);
        expect(vertex1edges.length).toBe(5);
      });
    
      it('Neighbors are returned with the weight between vertices included', () => {
        let graph = new Graph();
        let vertex1 = graph.addVertex(1);
        let vertex2 = graph.addVertex(2);
        let vertex3 = graph.addVertex(3);
        graph.addDirectedEdge(vertex1, vertex2, 1);
        graph.addDirectedEdge(vertex1, vertex3, 3);
        const vertex1edges = graph.edges.get(vertex1);
        expect(vertex1edges[0].weight).toBe(1);
        expect(vertex1edges[1].weight).toBe(3);
      });
    
      it('The proper size is returned, representing the number of vertices in the graph', () => {
        let graph = new Graph();
        graph.addVertex(1);
        graph.addVertex(2);
        graph.addVertex(3);
        graph.addVertex(4);
        graph.addVertex(5);
        graph.addVertex(6);
        let size = graph.getSize();
        expect(size).toBe(6);
      });
    
      it('A graph with only one vertex and edge can be properly returned', () => {
        let graph = new Graph();
        graph.addVertex(1);
        expect(graph.vertices.size).toBe(1);
        expect(graph.edges.size).toBe(1);
        expect(graph).toBeTruthy();
      });
    
      it('An error is thrown when invalid vertices are passed into addDirectedEdge', () => {
        let graph = new Graph();
        let vertex1 = graph.addVertex(1);
        let vertex2;
        let vertex3 = 'not a vertex';
        expect(() => graph.addDirectedEdge(vertex1, vertex3)).toThrowError('invalid vertices');
        expect(() => graph.addDirectedEdge(vertex1, vertex2)).toThrowError('invalid vertices');
      });
    
    });

});