'use script';

describe('Graph', () => {


    it('vertex can be successfully added to the graph', () => {
        let graph = new Graph();
        let vertex1 = graph.addVertex(1);
        expect(graph.edges.has(vertex1)).toBeTruthy();
    });

    

});