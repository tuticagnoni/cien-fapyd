//CONSTANTES SVG
const svgMargin = 200;
const svgPadding = 200;
const svgWidth = 10700;
const svgHeight = 1000;

// Set up the SVG container
const svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("margin", svgMargin)
  .attr("padding", svgPadding)
  .attr("class", "svg")
  .attr("id", "my-svg");

//DATA
const dEgHom = [
  { x: 1923, y: 0 },
{ x: 1924, y: 0 },
{ x: 1925, y: 0 },
{ x: 1926, y: 0 },
{ x: 1927, y: 0 },
{ x: 1928, y: 0 },
{ x: 1929, y: 5 },
{ x: 1930, y: 5 },
{ x: 1931, y: 13 },
{ x: 1932, y: 8 },
{ x: 1933, y: 12 },
{ x: 1934, y: 17 },
{ x: 1935, y: 19 },
{ x: 1936, y: 6 },
{ x: 1937, y: 5 },
{ x: 1938, y: 9 },
{ x: 1939, y: 4 },
{ x: 1940, y: 21 },
{ x: 1941, y: 12 },
{ x: 1942, y: 7 },
{ x: 1943, y: 13 },
{ x: 1944, y: 20 },
{ x: 1945, y: 4 },
{ x: 1946, y: 8 },
{ x: 1947, y: 9 },
{ x: 1948, y: 10 },
{ x: 1949, y: 7 },
{ x: 1950, y: 21 },
{ x: 1951, y: 19 },
{ x: 1952, y: 14 },
{ x: 1953, y: 15 },
{ x: 1954, y: 25 },
{ x: 1955, y: 22 },
{ x: 1956, y: 26 },
{ x: 1957, y: 27 },
{ x: 1958, y: 12 },
{ x: 1959, y: 26 },
{ x: 1960, y: 23 },
{ x: 1961, y: 22 },
{ x: 1962, y: 20 },
{ x: 1963, y: 32 },
{ x: 1964, y: 25 },
{ x: 1965, y: 43 },
{ x: 1966, y: 39 },
{ x: 1967, y: 36 },
{ x: 1968, y: 23 },
{ x: 1969, y: 33 },
{ x: 1970, y: 29 },
{ x: 1971, y: 35 },
{ x: 1972, y: 142 },
{ x: 1973, y: 97 },
{ x: 1974, y: 113 },
{ x: 1975, y: 121 },
{ x: 1976, y: 103 },
{ x: 1977, y: 43 },
{ x: 1978, y: 41 },
{ x: 1979, y: 66 },
{ x: 1980, y: 42 },
{ x: 1981, y: 90 },
{ x: 1982, y: 80 },
{ x: 1983, y: 74 },
{ x: 1984, y: 87 },
{ x: 1985, y: 85 },
{ x: 1986, y: 66 },
{ x: 1987, y: 86 },
{ x: 1988, y: 74 },
{ x: 1989, y: 93 },
{ x: 1990, y: 86 },
{ x: 1991, y: 120 },
{ x: 1992, y: 107 },
{ x: 1993, y: 128 },
{ x: 1994, y: 98 },
{ x: 1995, y: 56 },
{ x: 1996, y: 61 },
{ x: 1997, y: 77 },
{ x: 1998, y: 72 },
{ x: 1999, y: 77 },
{ x: 2000, y: 92 },
{ x: 2001, y: 92 },
{ x: 2002, y: 78 },
{ x: 2003, y: 72 },
{ x: 2004, y: 64 },
{ x: 2005, y: 63 },
{ x: 2006, y: 79 },
{ x: 2007, y: 78 },
{ x: 2008, y: 77 },
{ x: 2009, y: 70 },
{ x: 2010, y: 74 },
{ x: 2011, y: 73 },
{ x: 2012, y: 55 },
{ x: 2013, y: 99 },
{ x: 2014, y: 80 },
{ x: 2015, y: 85 },
{ x: 2016, y: 71 },
{ x: 2017, y: 93 },
{ x: 2018, y: 88 },
{ x: 2019, y: 116 },
{ x: 2020, y: 59 },
{ x: 2021, y: 87 },
{ x: 2022, y: 87 },
{ x: 2023, y: 87 },

];
const  dEgMuj = [
      { x: 1923, y: 0 },
{ x: 1924, y: 0 },
{ x: 1925, y: 0 },
{ x: 1926, y: 0 },
{ x: 1927, y: 0 },
{ x: 1928, y: 0 },
{ x: 1929, y: 0 },
{ x: 1930, y: 0 },
{ x: 1931, y: 0 },
{ x: 1932, y: 0 },
{ x: 1933, y: 0 },
{ x: 1934, y: 0 },
{ x: 1935, y: 0 },
{ x: 1936, y: 0 },
{ x: 1937, y: 0 },
{ x: 1938, y: -1 },
{ x: 1939, y: -1 },
{ x: 1940, y: 0 },
{ x: 1941, y: 0 },
{ x: 1942, y: 0 },
{ x: 1943, y: 0 },
{ x: 1944, y: -1 },
{ x: 1945, y: -2 },
{ x: 1946, y: -5 },
{ x: 1947, y: -3 },
{ x: 1948, y: 0 },
{ x: 1949, y: -2 },
{ x: 1950, y: -3 },
{ x: 1951, y: -6 },
{ x: 1952, y: -3 },
{ x: 1953, y: -2 },
{ x: 1954, y: -9 },
{ x: 1955, y: -3 },
{ x: 1956, y: -16 },
{ x: 1957, y: -5 },
{ x: 1958, y: -4 },
{ x: 1959, y: -5 },
{ x: 1960, y: -12 },
{ x: 1961, y: -13 },
{ x: 1962, y: -6 },
{ x: 1963, y: -15 },
{ x: 1964, y: -13 },
{ x: 1965, y: -14 },
{ x: 1966, y: -9 },
{ x: 1967, y: -7 },
{ x: 1968, y: -20 },
{ x: 1969, y: -13 },
{ x: 1970, y: -17 },
{ x: 1971, y: -13 },
{ x: 1972, y: -23 },
{ x: 1973, y: -74 },
{ x: 1974, y: -77 },
{ x: 1975, y: -80 },
{ x: 1976, y: -58 },
{ x: 1977, y: -54 },
{ x: 1978, y: -38 },
{ x: 1979, y: -23 },
{ x: 1980, y: -36 },
{ x: 1981, y: -77 },
{ x: 1982, y: -72 },
{ x: 1983, y: -51 },
{ x: 1984, y: -59 },
{ x: 1985, y: -55 },
{ x: 1986, y: -72 },
{ x: 1987, y: -74 },
{ x: 1988, y: -54 },
{ x: 1989, y: -84 },
{ x: 1990, y: -82 },
{ x: 1991, y: -95 },
{ x: 1992, y: -86 },
{ x: 1993, y: -77 },
{ x: 1994, y: -85 },
{ x: 1995, y: -58 },
{ x: 1996, y: -61 },
{ x: 1997, y: -70 },
{ x: 1998, y: -87 },
{ x: 1999, y: -99 },
{ x: 2000, y: -101 },
{ x: 2001, y: -125 },
{ x: 2002, y: -112 },
{ x: 2003, y: -98 },
{ x: 2004, y: -83 },
{ x: 2005, y: -95 },
{ x: 2006, y: -104 },
{ x: 2007, y: -93 },
{ x: 2008, y: -82 },
{ x: 2009, y: -109 },
{ x: 2010, y: -107 },
{ x: 2011, y: -123 },
{ x: 2012, y: -84 },
{ x: 2013, y: -154 },
{ x: 2014, y: -163 },
{ x: 2015, y: -155 },
{ x: 2016, y: -130 },
{ x: 2017, y: -183 },
{ x: 2018, y: -190 },
{ x: 2019, y: -171 },
{ x: 2020, y: -111 },
{ x: 2021, y: -108 },
{ x: 2022, y: -109 },
{ x: 2023, y: -109 },
];
const dInHom = [
  { x: 1923, y: 0 },
  { x: 1924, y: 0 },
  { x: 1925, y: 0 },
  { x: 1926, y: 0 },
  { x: 1927, y: 0 },
  { x: 1928, y: 0 },
  { x: 1929, y: 0 },
  { x: 1930, y: 0 },
  { x: 1931, y: 0 },
  { x: 1932, y: 0 },
  { x: 1933, y: 0 },
  { x: 1934, y: 0 },
  { x: 1935, y: 0 },
  { x: 1936, y: 0 },
  { x: 1937, y: 0 },
  { x: 1938, y: 0 },
  { x: 1939, y: 0 },
  { x: 1940, y: 0 },
  { x: 1941, y: 0 },
  { x: 1942, y: 0 },
  { x: 1943, y: 0 },
  { x: 1944, y: 0 },
  { x: 1945, y: 0 },
  { x: 1946, y: 0 },
  { x: 1947, y: 0 },
  { x: 1948, y: 0 },
  { x: 1949, y: 0 },
  { x: 1950, y: 0 },
  { x: 1951, y: 0 },
  { x: 1952, y: 0 },
  { x: 1953, y: 0 },
  { x: 1954, y: 0 },
  { x: 1955, y: 0 },
  { x: 1956, y: 0 },
  { x: 1957, y: 0 },
  { x: 1958, y: 0 },
  { x: 1959, y: 0 },
  { x: 1960, y: 0 },
  { x: 1961, y: 0 },
  { x: 1962, y: 0 },
  { x: 1963, y: 0 },
  { x: 1964, y: 0 },
  { x: 1965, y: 0 },
  { x: 1966, y: 0 },
  { x: 1967, y: 0 },
  { x: 1968, y: 0 },
  { x: 1969, y: 0 },
  { x: 1970, y: 0 },
  { x: 1971, y: 0 },
  { x: 1972, y: 0 },
  { x: 1973, y: 0 },
  { x: 1974, y: 0 },
  { x: 1975, y: 0 },
  { x: 1976, y: 0 },
  { x: 1977, y: 0 },
  { x: 1978, y: 0 },
  { x: 1979, y: 0 },
  { x: 1980, y: 0 },
  { x: 1981, y: 0 },
  { x: 1982, y: 85 },
  { x: 1983, y: 127 },
  { x: 1984, y: 359 },
  { x: 1985, y: 524 },
  { x: 1986, y: 395 },
  { x: 1987, y: 387 },
  { x: 1988, y: 316 },
  { x: 1989, y: 325 },
  { x: 1990, y: 334 },
  { x: 1991, y: 284 },
  { x: 1992, y: 315 },
  { x: 1993, y: 290 },
  { x: 1994, y: 316 },
  { x: 1995, y: 266 },
  { x: 1996, y: 265 },
  { x: 1997, y: 290 },
  { x: 1998, y: 261 },
  { x: 1999, y: 296 },
  { x: 2000, y: 315 },
  { x: 2001, y: 307 },
  { x: 2002, y: 345 },
  { x: 2003, y: 320 },
  { x: 2004, y: 368 },
  { x: 2005, y: 428 },
  { x: 2006, y: 382 },
  { x: 2007, y: 445 },
  { x: 2008, y: 417 },
  { x: 2009, y: 349 },
  { x: 2010, y: 384 },
  { x: 2011, y: 386 },
  { x: 2012, y: 370 },
  { x: 2013, y: 327 },
  { x: 2014, y: 407 },
  { x: 2015, y: 343 },
  { x: 2016, y: 376 },
  { x: 2017, y: 393 },
  { x: 2018, y: 360 },
  { x: 2019, y: 364 },
  { x: 2020, y: 334 },
  { x: 2021, y: 293 },
  { x: 2022, y: 293 },
  { x: 2023, y: 293 },
];
const  dInMuj = [
{ x: 1923, y: 0 },
{ x: 1924, y: 0 },
{ x: 1925, y: 0 },
{ x: 1926, y: 0 },
{ x: 1927, y: 0 },
{ x: 1928, y: 0 },
{ x: 1929, y: 0 },
{ x: 1930, y: 0 },
{ x: 1931, y: 0 },
{ x: 1932, y: 0 },
{ x: 1933, y: 0 },
{ x: 1934, y: 0 },
{ x: 1935, y: 0 },
{ x: 1936, y: 0 },
{ x: 1937, y: 0 },
{ x: 1938, y: 0 },
{ x: 1939, y: 0 },
{ x: 1940, y: 0 },
{ x: 1941, y: 0 },
{ x: 1942, y: 0 },
{ x: 1943, y: 0 },
{ x: 1944, y: 0 },
{ x: 1945, y: 0 },
{ x: 1946, y: 0 },
{ x: 1947, y: 0 },
{ x: 1948, y: 0 },
{ x: 1949, y: 0 },
{ x: 1950, y: 0 },
{ x: 1951, y: 0 },
{ x: 1952, y: 0 },
{ x: 1953, y: 0 },
{ x: 1954, y: 0 },
{ x: 1955, y: 0 },
{ x: 1956, y: 0 },
{ x: 1957, y: 0 },
{ x: 1958, y: 0 },
{ x: 1959, y: 0 },
{ x: 1960, y: 0 },
{ x: 1961, y: 0 },
{ x: 1962, y: 0 },
{ x: 1963, y: 0 },
{ x: 1964, y: 0 },
{ x: 1965, y: 0 },
{ x: 1966, y: 0 },
{ x: 1967, y: 0 },
{ x: 1968, y: 0 },
{ x: 1969, y: 0 },
{ x: 1970, y: 0 },
{ x: 1971, y: 0 },
{ x: 1972, y: 0 },
{ x: 1973, y: 0 },
{ x: 1974, y: 0 },
{ x: 1975, y: 0 },
{ x: 1976, y: 0 },
{ x: 1977, y: 0 },
{ x: 1978, y: 0 },
{ x: 1979, y: 0 },
{ x: 1980, y: 0 },
{ x: 1981, y: 0 },
{ x: 1982, y: -70 },
{ x: 1983, y: -146 },
{ x: 1984, y: -197 },
{ x: 1985, y: -289 },
{ x: 1986, y: -257 },
{ x: 1987, y: -251 },
{ x: 1988, y: -265 },
{ x: 1989, y: -259 },
{ x: 1990, y: -266 },
{ x: 1991, y: -248 },
{ x: 1992, y: -298 },
{ x: 1993, y: -291 },
{ x: 1994, y: -294 },
{ x: 1995, y: -304 },
{ x: 1996, y: -238 },
{ x: 1997, y: -270 },
{ x: 1998, y: -229 },
{ x: 1999, y: -269 },
{ x: 2000, y: -257 },
{ x: 2001, y: -266 },
{ x: 2002, y: -272 },
{ x: 2003, y: -290 },
{ x: 2004, y: -301 },
{ x: 2005, y: -391 },
{ x: 2006, y: -360 },
{ x: 2007, y: -477 },
{ x: 2008, y: -368 },
{ x: 2009, y: -452 },
{ x: 2010, y: -436 },
{ x: 2011, y: -418 },
{ x: 2012, y: -431 },
{ x: 2013, y: -419 },
{ x: 2014, y: -418 },
{ x: 2015, y: -416 },
{ x: 2016, y: -385 },
{ x: 2017, y: -387 },
{ x: 2018, y: -358 },
{ x: 2019, y: -360 },
{ x: 2020, y: -324 },
{ x: 2021, y: -396 },
{ x: 2022, y: -396 },
{ x: 2023, y: -396 },
];
  

//AREA CHARTS - INGRESANTES Y EGRESADOS ONLY
//Declarando las escalas para que esten disponibles para todas las funciones de manera global
const xScale = d3.scaleLinear()
  .domain([1923, 2023]) //numeros del eje x
  .range([50, 2000]);
//ticks intermedios - no van a mostrarse
const xScaleLines = d3.scaleLinear()
  .domain([1923, 2023])
  .range([50, 2000]);
//escala eje y
const yScale = d3.scaleLinear()
  .domain([0, 800]) //el 200 es el numero del eje y
  .range([450, 50]); 
//escala eje yBottom
const yScaleBottom = d3.scaleLinear()
  .domain([0, 800]) //desde que numero a que numero va la ybottomaxis
  .range([50, 450]);

//creacion del grafico vacio - solo ejes
function createAxis() {
  // Crear los ejes x, x lineas intermedias, xLine -el del medio- y and yBottom functions
  const xAxis = d3.axisBottom(xScale).ticks(20).tickFormat(d3.format("d")).tickSize(10);
  const xAxisLines = d3.axisBottom(xScaleLines).ticks(99).tickSize(-10).tickFormat("");
  const yAxis = d3.axisLeft(yScale).ticks(5).tickFormat(d => (d === 0 ? "" : d));
  const yAxisBottom = d3.axisLeft(yScaleBottom).ticks(5).tickFormat(d => (d === 0 ? "" : d));
    // Creacion de los ejes
    function drawAxis() {
      // Draw the x axis
      svg.append("g")
        .attr("transform", "translate(0, 850)") //el 850 hace que el x axis se vea abajo de los dos graficos.
        .call(xAxis)
        .selectAll("text")

      // Draw the x axis intermediate lines
      //   svg.append("g")
      // .attr("transform", "translate(0, 850)")
      // .call(xAxisLines);

      // Draw the y axis
      svg.append("g")
        .attr("transform", "translate(50, 0)")
        .call(yAxis);

      // Draw botton axis
      svg.append("g")
        .attr("transform", "translate(50, 400)")
        .call(yAxisBottom);
    }
    drawAxis();
  // Make the horizontal axis larger
  svg.select("g.xAxis")
    .attr("width", 10000);
  svg.selectAll('text') 
    .style('font-size', '20px')
    .style('font-family', 'Ruda, sans-serif');  
  }
createAxis()

//variables 
let graphDrawnIn = false; // drawGraph()
let graphDrawnEg = false; // drawGraph()
let graphIds = []; // drawGraph()
//variable para el tema de la raya del medio
let areaChartsCount = 0;
let middleLine = null; // createMiddleLine()
let wordsShown = false;  //showWords()

//dibuja areacharts
function drawGraph(data1, data2, color, prefix) {
  // Check if a graph with this prefix has already been drawn
  if (graphIds.some(id => id.startsWith(prefix))) {
    clearGraph(prefix);
  }

  // Generate unique ID for the graph
  const graphId = prefix + "-graph";
  graphIds.push(graphId);
  
  //Create the top area function
  const areaTop = d3.area()
  .x(d => xScale(d.x))
  .y0(d => yScale(d.y))
  .y1(450);

  //Create the bottom area function
  const areaBottom = d3.area()
  .x(d => xScale(d.x))
  .y0(d => yScale(d.y))
  .y1(450);

  //Render the top area 
  svg.append("path")
  .datum(data1)
  .attr("d", areaTop)
  .attr("fill", color)
  .style("opacity", 0)
  .attr("id", graphId + "-top")
  .transition()
  .duration(500)
  .style("opacity", 0.7);
  

  // Render the bottom area
  svg.append("path")
  .datum(data2)
  .attr("d", areaBottom)
  .attr("fill", color)
  .style("opacity", 0)
  .attr("id", graphId + "-bottom")
  .transition()
  .duration(500)
  .style("opacity", 0.7);

  // Agregar el ID del gráfico a la lista de IDs
  graphIds.push(graphId);

  // Check if graphDrawn is false
  if (prefix === "in" && !graphDrawnIn) {
    graphDrawnIn = true;
    showWords();
  } else if (prefix === "eg" && !graphDrawnEg) {
    graphDrawnEg = true;
    showWords();
  } else {
    return;
  }
  areaChartsCount++;
}
//elimina areacharts
function clearGraph(prefix) {
  // Iterate over all graph ids and remove the corresponding paths
  console.log(prefix)
  graphIds.forEach(id => {
    if (id.startsWith(prefix)) {
      d3.select("#" + id + "-top")
      .transition()
      .duration(700)
      .style("opacity", 0)
      .remove();

      d3.select("#" + id + "-bottom")
      .transition()
      .duration(500)
      .style("opacity", 0)
      .remove();
    }
  });
  graphIds = graphIds.filter(id => !id.startsWith(prefix));
  graphDrawn = false;
  console.log(graphDrawn)
  console.log(graphIds)

  // Eliminar el ID del gráfico de la lista de IDs
  graphIds = graphIds.filter(id => !id.startsWith(prefix));
  hideWords(); 
  areaChartsCount--;
}

function updateMiddleLine() {
  if (areaChartsCount > 0) {
    if (!middleLine) {
      createMiddleLine(); // Crear la línea del medio si no existe
    }
  } else {
    deleteMiddleLine(); // Eliminar la línea del medio si no hay area charts presentes
  }
}
//dibuja linea del medio del area chart
function createMiddleLine() {
  deleteMiddleLine();
  middleLine = svg.append("line")
    .attr("x1", xScale(xScale.domain()[0]))
    .attr("y1", yScale(0))
    .attr("x2", xScale(xScale.domain()[1]))
    .attr("y2", yScale(0))
    .style("stroke-width", 2)
    .style("stroke", "black");
}
//elimina linea del medio del area chart
function deleteMiddleLine() {
  if (middleLine) {
    middleLine.remove(); // Eliminar específicamente la línea del medio
    middleLine = null; // Restablecer la variable a null
  }
}
//agregar palabras hombres y mujeres al area chart
function showWords() {
  if (!wordsShown) {
    svg.append("text")
      .attr("class", "word")
      .attr("x", 150)  // Posición en el eje x
      .attr("y", 440)  // Posición en el eje y
      .attr("text-anchor", "end")  // Alineación del texto a la derecha del punto
      .text("HOMBRES")
      .style("font-size", "20px")
      .style("font-weight", "bold");

    svg.append("text")
      .attr("class", "word")
      .attr("x", 145)  // Posición en el eje x
      .attr("y", 470)  // Posición en el eje y
      .attr("text-anchor", "end")  // Alineación del texto a la derecha del punto
      .text("MUJERES")
      .style("font-size", "20px")
      .style("font-weight", "bold");

    wordsShown = true;
  }
}
function hideWords() {
  if (wordsShown && graphIds.length === 0) {
    // Eliminar las palabras "Hombres" y "Mujeres"
    svg.selectAll(".word")
      .remove();

    wordsShown = false;
  }
}

d3.select("#inButton").on("click", function() {
  if (graphDrawnIn === true) {
  clearGraph("in");
  graphDrawnIn = false;
} else { 
  drawGraph(dInHom, dInMuj, "#6e65fb", "in");
  console.log("se dibujo el grafico -in")
  console.log(graphDrawnIn)
  console.log(graphIds)
  graphDrawnIn = true;
}
updateMiddleLine();
});

d3.select("#egButton").on("click", function() {
  if (graphDrawnEg === true) {
    clearGraph("eg");
    graphDrawnEg = false;

  } else {
    drawGraph(dEgHom, dEgMuj, "#5a0cad", "eg");
    graphDrawnEg = true;
  }
  updateMiddleLine();
});


//SEDES
const rectGroup = svg.append("g")
  .attr("id", "rect-group")
  //.style("display", "none");  Inicialmente, ocultar el grupo de rectángulos
  .style("opacity", 0);

const rectanglesData = [
  { x: 52, y: 730, width: 105, height: 30, anos: "1923-1928" , link: "../assets/files/sedes/Sede 1923-1928.pdf", color: "#d7d5db"},
  { x: 157, y: 730, width: 826, height: 30, anos: "1928-1971", link:"../assets/files/sedes/Sede 1928-1971.pdf", color: "#5a5a5b"},
  { x: 983, y: 730, width: 325, height: 30, anos: "1971-1987", link:"../assets/files/sedes/Sede 1971-1987.pdf", color: "#97979b"},
  { x: 1304, y: 730, width: 682, height: 30, anos: "1987-2023", link:"../assets/files/sedes/Sede 1987-2023.pdf", color: "#c0c0c3"}
];

const rects = rectGroup
  .selectAll("rect")
  .data(rectanglesData)
  .enter()
  .append("rect")
  .attr("x", d => d.x)
  .attr("y", d => d.y)
  .attr("width", d => d.width)
  .attr("height", d => d.height)
  .attr("fill", d => d.color);

  const foreignObjects = rectGroup
  .selectAll("foreignObject")
  .data(rectanglesData)
  .enter()
  .append("foreignObject")
  .attr("x", d => d.x + d.width / 2 - 100)
  .attr("y", d => d.y + (d.height - 165))
  .attr("width", 200)
  .attr("height", 500)
  .style("opacity", 0)
  .style("display", "flex")
  .style("align-items", "center")
  .style("justify-content", "center")
  .style("text-align", "center")
  .append("xhtml:div");

foreignObjects.append("xhtml:p")
  .style("font-size", "20px")
  .style("margin-top", "170px")
  .html(d => `<a href="${d.link}" style="color: black; font-weight: bold" target="_blank">Sede<br>${d.anos}</a>`);


d3.select("#showSedesButton").on("click", function() {
  const rectGroup = d3.select("#rect-group");
  const isVisible = rectGroup.style("opacity") === "1";

  rectGroup
    .style("display", "block") // Mostrar el grupo de rectángulos antes de la transición
    .transition()
    .duration(500) // Duración de la transición en milisegundos
    .style("opacity", isVisible ? 0 : 1) // Cambiar la opacidad según la visibilidad actual

    .on("end", function() {
      if (!isVisible) {
        rectGroup.selectAll("foreignObject") // Asegurarse de que los elementos estén visibles
          .style("opacity", 0)
          .transition()
          .duration(500)
          .style("opacity", 1);
      }
    });
  // const rectGroup = d3.select("#rect-group");
  // const isVisible = rectGroup.style("display") !== "none";

  // if (isVisible) {
  //   rectGroup.style("display", "none");
  // } else {
  //   rectGroup.style("display", "block");
  // }
});



