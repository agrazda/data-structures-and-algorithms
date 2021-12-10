'use strict';

const businessTrip = require("../businessTrip.js")

describe("Business trip", () => {
  let graph = new Graph()

  let Pandora = new Vertex("Pandora")
  let Narnia = new Vertex("Narnia")
  let Metroville = new Vertex("Metroville")
  let Arendelle = new Vertex("Arendelle")
  let Monstropolis = new Vertex("Monstropolis")
  let Naboo = new Vertex("Naboo")

  graph.addVertex(Pandora)
  graph.addVertex(Narnia)
  graph.addVertex(Metroville)
  graph.addVertex(Arendelle)
  graph.addVertex(Monstropolis)
  graph.addVertex(Naboo)

  graph.addDirectedEdge(Pandora, Arendelle, 150)
  graph.addDirectedEdge(Pandora, Metroville, 82)
  graph.addDirectedEdge(Narnia, Naboo, 250)
  graph.addDirectedEdge(Narnia, Metroville, 37)
  graph.addDirectedEdge(Naboo, Metroville, 26)
  graph.addDirectedEdge(Naboo, Narnia, 250)
  graph.addDirectedEdge(Naboo, Monstropolis, 73)
  graph.addDirectedEdge(Monstropolis, Naboo, 73)
  graph.addDirectedEdge(Monstropolis, Arendelle, 42)
  graph.addDirectedEdge(Monstropolis, Metroville, 105)
  graph.addDirectedEdge(Arendelle, Pandora, 150)
  graph.addDirectedEdge(Arendelle, Monstropolis, 42)
  graph.addDirectedEdge(Arendelle, Metroville, 99)
  graph.addDirectedEdge(Metroville, Pandora, 82)
  graph.addDirectedEdge(Metroville, Narnia, 37)
  graph.addDirectedEdge(Metroville, Monstropolis, 105)
  graph.addDirectedEdge(Metroville, Arendelle, 99)
  graph.addDirectedEdge(Metroville, Naboo, 26)