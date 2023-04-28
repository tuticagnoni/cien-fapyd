// Set up the SVG container
const svg = d3.select("body")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000)
  .attr("class", "svg");

  //data
  const dEgHom = [
    { x: 1923, y: 0 },
    { x: 1924, y: 0 },
    { x: 1925, y: 0 },
    { x: 1926, y: 0 },
    { x: 1927, y: 0 },
    { x: 1928, y: 5 },
    { x: 1929, y: 5 },
    { x: 1930, y: 13 },
    { x: 1931, y: 8 },
    { x: 1932, y: 12 },
    { x: 1933, y: 17 },
    { x: 1934, y: 19 },
    { x: 1935, y: 6 },
    { x: 1936, y: 5 },
    { x: 1937, y: 9 },
    { x: 1938, y: 4 },
    { x: 1939, y: 21 },
    { x: 1940, y: 12 },
    { x: 1941, y: 7 },
    { x: 1942, y: 13 },
    { x: 1943, y: 20 },
    { x: 1944, y: 4 },
    { x: 1945, y: 8 },
    { x: 1946, y: 9 },
    { x: 1947, y: 10 },
    { x: 1948, y: 7 },
    { x: 1949, y: 21 },
    { x: 1950, y: 19 },
    { x: 1951, y: 14 },
    { x: 1952, y: 15 },
    { x: 1953, y: 25 },
    { x: 1954, y: 22 },
    { x: 1955, y: 26 },
    { x: 1956, y: 27 },
    { x: 1957, y: 12 },
    { x: 1958, y: 26 },
    { x: 1959, y: 23 },
    { x: 1960, y: 22 },
    { x: 1961, y: 20 },
    { x: 1962, y: 32 },
    { x: 1963, y: 25 },
    { x: 1964, y: 43 },
    { x: 1965, y: 39 },
    { x: 1966, y: 36 },
    { x: 1967, y: 23 },
    { x: 1968, y: 33 },
    { x: 1969, y: 29 },
    { x: 1970, y: 35 },
    { x: 1971, y: 142 },
    { x: 1972, y: 97 },
    { x: 1973, y: 113 },
    { x: 1974, y: 121 },
    { x: 1975, y: 103 },
    { x: 1976, y: 43 },
    { x: 1977, y: 41 },
    { x: 1978, y: 66 },
    { x: 1979, y: 42 },
    { x: 1980, y: 55 },
    { x: 1981, y: 65 },
    { x: 1982, y: 85 },
    { x: 1983, y: 25 },
    { x: 1984, y: 111 },
    { x: 1985, y: 160 },
    { x: 1986, y: 110 },
    { x: 1987, y: 165 },
    { x: 1988, y: 195 },
    { x: 1989, y: 185 },
    { x: 1990, y: 169 },
    { x: 1991, y: 144 },
    { x: 1992, y: 112 },
    { x: 1993, y: 86 },
  { x: 1994, y: 74 },
  { x: 1995, y: 93 },
  { x: 1996, y: 86 },
  { x: 1997, y: 120 },
  { x: 1998, y: 107 },
  { x: 1999, y: 128 },
  { x: 2000, y: 98 },
  { x: 2001, y: 56 },
  { x: 2002, y: 61 },
  { x: 2003, y: 77 },
  { x: 2004, y: 72 },
  { x: 2005, y: 77 },
  { x: 2006, y: 92 },
  { x: 2007, y: 92 },
  { x: 2008, y: 78 },
  { x: 2009, y: 72 },
  { x: 2010, y: 64 },
  { x: 2011, y: 63 },
  { x: 2012, y: 79 },
  { x: 2013, y: 78 },
  { x: 2014, y: 77 },
  { x: 2015, y: 70 },
  { x: 2016, y: 74 },
  { x: 2017, y: 73 },
  { x: 2018, y: 55 },
  { x: 2019, y: 99 },
  { x: 2020, y: 80 },
  { x: 2021, y: 85 },
  { x: 2022, y: 71 },
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
    { x: 1937, y: -1 },
    { x: 1938, y: -1 },
    { x: 1939, y: 0 },
    { x: 1940, y: 0 },
    { x: 1941, y: 0 },
    { x: 1942, y: 0 },
    { x: 1943, y: -1 },
    { x: 1944, y: -2 },
    { x: 1945, y: -5 },
    { x: 1946, y: -3 },
    { x: 1947, y: 0 },
    { x: 1948, y: -2 },
    { x: 1949, y: -3 },
    { x: 1950, y: -6 },
    { x: 1951, y: -3 },
    { x: 1952, y: -2 },
    { x: 1953, y: -9 },
    { x: 1954, y: -3 },
    { x: 1955, y: -16 },
    { x: 1956, y: -5 },
    { x: 1957, y: -4 },
    { x: 1958, y: -5 },
    { x: 1959, y: -12 },
    { x: 1960, y: -13 },
    { x: 1961, y: -6 },
    { x: 1962, y: -15 },
    { x: 1963, y: -13 },
    { x: 1964, y: -14 },
    { x: 1965, y: -9 },
    { x: 1966, y: -7 },
    { x: 1967, y: -20 },
    { x: 1968, y: -13 },
    { x: 1969, y: -17 },
    { x: 1970, y: -13 },
    { x: 1971, y: -23 },
    { x: 1972, y: -74 },
    { x: 1973, y: -77 },
    { x: 1974, y: -80 },
    { x: 1975, y: -58 },
    { x: 1976, y: -54 },
    { x: 1977, y: -38 },
    { x: 1978, y: -23 },
    { x: 1979, y: -36 },
    { x: 1980, y: -77 },
    { x: 1981, y: -72 },
    { x: 1982, y: -51 },
    { x: 1983, y: -59 },
    { x: 1984, y: -55 },
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
  { x: 2022, y: -140 }
  ];
  const dInHom = [
    { x: 1923, y: 0 },
    { x: 1924, y: 0 },
    { x: 1925, y: 0 },
    { x: 1926, y: 0 },
    { x: 1927, y: 0 },
    { x: 1928, y: 15 },
    { x: 1929, y: 15 },
    { x: 1930, y: 23 },
    { x: 1931, y: 28 },
    { x: 1932, y: 22 },
    { x: 1933, y: 17 },
    { x: 1934, y: 19 },
    { x: 1935, y: 60 },
    { x: 1936, y: 50 },
    { x: 1937, y: 90 },
    { x: 1938, y: 40 },
    { x: 1939, y: 52 },
    { x: 1940, y: 25 },
    { x: 1941, y: 70 },
    { x: 1942, y: 130 },
    { x: 1943, y: 200 },
    { x: 1944, y: 400 },
    { x: 1945, y: 855 },
    { x: 1946, y: 952 },
    { x: 1947, y: 140 },
    { x: 1948, y: 757 },
    { x: 1949, y: 214 },
    { x: 1950, y: 194 },
    { x: 1951, y: 144 },
    { x: 1952, y: 153 },
    { x: 1953, y: 225 },
    { x: 1954, y: 292 },
    { x: 1955, y: 296 },
    { x: 1956, y: 276 },
    { x: 1957, y: 128 },
    { x: 1958, y: 262 },
    { x: 1959, y: 235 },
    { x: 1960, y: 224 },
    { x: 1961, y: 205 },
    { x: 1962, y: 322 },
    { x: 1963, y: 258 },
    { x: 1964, y: 438 },
    { x: 1965, y: 389 },
    { x: 1966, y: 368 },
    { x: 1967, y: 233 },
    { x: 1968, y: 330 },
    { x: 1969, y: 209 },
    { x: 1970, y: 350 },
    { x: 1971, y: 142 },
    { x: 1972, y: 970 },
    { x: 1973, y: 113 },
    { x: 1974, y: 121 },
    { x: 1975, y: 103 },
    { x: 1976, y: 430 },
    { x: 1977, y: 410 },
    { x: 1978, y: 660 },
    { x: 1979, y: 420 },
    { x: 1980, y: 550 },
    { x: 1981, y: 650 },
    { x: 1982, y: 850 },
    { x: 1983, y: 250 },
    { x: 1984, y: 111 },
    { x: 1985, y: 160 },
    { x: 1986, y: 110 },
    { x: 1987, y: 165 },
    { x: 1988, y: 195 },
    { x: 1989, y: 185 },
    { x: 1990, y: 169 },
    { x: 1991, y: 144 },
    { x: 1992, y: 112 },
    { x: 1993, y: 860 },
  { x: 1994, y: 740 },
  { x: 1995, y: 930 },
  { x: 1996, y: 860 },
  { x: 1997, y: 120 },
  { x: 1998, y: 107 },
  { x: 1999, y: 128 },
  { x: 2000, y: 908 },
  { x: 2001, y: 506 },
  { x: 2002, y: 610 },
  { x: 2003, y: 770 },
  { x: 2004, y: 720 },
  { x: 2005, y: 707 },
  { x: 2006, y: 902 },
  { x: 2007, y: 920 },
  { x: 2008, y: 780 },
  { x: 2009, y: 702 },
  { x: 2010, y: 640 },
  { x: 2011, y: 630 },
  { x: 2012, y: 790 },
  { x: 2013, y: 780 },
  { x: 2014, y: 770 },
  { x: 2015, y: 700 },
  { x: 2016, y: 740 },
  { x: 2017, y: 730 },
  { x: 2018, y: 550 },
  { x: 2019, y: 990 },
  { x: 2020, y: 800 },
  { x: 2021, y: 850 },
  { x: 2022, y: 710 },
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
    { x: 1937, y: -1 },
    { x: 1938, y: -1 },
    { x: 1939, y: 0 },
    { x: 1940, y: 0 },
    { x: 1941, y: 0 },
    { x: 1942, y: 0 },
    { x: 1943, y: -1 },
    { x: 1944, y: -2 },
    { x: 1945, y: -5 },
    { x: 1946, y: -3 },
    { x: 1947, y: 0 },
    { x: 1948, y: -2 },
    { x: 1949, y: -3 },
    { x: 1950, y: -6 },
    { x: 1951, y: -3 },
    { x: 1952, y: -2 },
    { x: 1953, y: -9 },
    { x: 1954, y: -3 },
    { x: 1955, y: -16 },
    { x: 1956, y: -5 },
    { x: 1957, y: -4 },
    { x: 1958, y: -5 },
    { x: 1959, y: -12 },
    { x: 1960, y: -13 },
    { x: 1961, y: -6 },
    { x: 1962, y: -15 },
    { x: 1963, y: -13 },
    { x: 1964, y: -14 },
    { x: 1965, y: -9 },
    { x: 1966, y: -7 },
    { x: 1967, y: -20 },
    { x: 1968, y: -13 },
    { x: 1969, y: -17 },
    { x: 1970, y: -13 },
    { x: 1971, y: -23 },
    { x: 1972, y: -74 },
    { x: 1973, y: -77 },
    { x: 1974, y: -80 },
    { x: 1975, y: -58 },
    { x: 1976, y: -54 },
    { x: 1977, y: -38 },
    { x: 1978, y: -23 },
    { x: 1979, y: -36 },
    { x: 1980, y: -77 },
    { x: 1981, y: -72 },
    { x: 1982, y: -51 },
    { x: 1983, y: -59 },
    { x: 1984, y: -55 },
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
  { x: 2022, y: -140 }
  ];
  //Declarando las escalas para que esten disponibles para todas las funciones de manera global
   const xScale = d3.scaleLinear()
   .domain([1923, 2022]) //numeros del eje x
   .range([50, 1000]);
   //escala eje y
   const yScale = d3.scaleLinear()
   .domain([0, 1000]) //el 200 es el numero del eje y
   .range([450, 50]); 
   //escala eje yBottom
   const yScaleBottom = d3.scaleLinear()
   .domain([0, 1000]) //desde que numero a que numero va la ybottomaxis
   .range([50, 450]);

//creacion del grafico vacio - solo ejes
function createAxis() {
    // Crear los ejes x, xLine -el del medio- y and yBottom functions
    const xAxis = d3.axisBottom(xScale).ticks(30).tickFormat(d3.format("d"));
    const yAxis = d3.axisLeft(yScale).ticks(30).tickFormat(d3.format("d"));
    const yAxisBottom = d3.axisLeft(yScaleBottom).ticks(30).tickFormat(d3.format("d"));

        // Create a function to draw the axis
        function drawAxis() {
          // Draw the x axis
          svg.append("g")
            .attr("transform", "translate(0, 850)") //el 850 hace que el x axis se vea abajo de los dos graficos.
            .call(xAxis);
          // Draw the y axis
          svg.append("g")
            .attr("transform", "translate(50, 0)")
            .call(yAxis);
        // botton axis
            svg.append("g")
            .attr("transform", "translate(50, 400)")
            .call(yAxisBottom);
        }
        drawAxis();
      
  }
createAxis()

//variables necesarias de drawGraph()
let graphDrawn = false;
let graphIds = [];
console.log(graphDrawn)


function drawGraph(data1, data2, color, prefix) {
  // Check if a graph with this prefix has already been drawn
  if (graphIds.some(id => id.startsWith(prefix))) {
    return;
  }

  // Generate unique ID for the graph
  const graphId = prefix + "-graph";
  graphIds.push(graphId);
  
  //Create the top area function
  const areaTop = d3.area()
  .x(d => xScale(d.x))
  .y0(d => yScale(d.y))
  .y1(450);
  //Render the top area
  svg.append("path")
  .datum(data1)
  .attr("d", areaTop)
  .attr("fill", color)
  .style("opacity", 0.7)
  .attr("id", graphId + "-top");
  
  //Create the bottom area function
  const areaBottom = d3.area()
  .x(d => xScale(d.x))
  .y0(d => yScale(d.y))
  .y1(450);
  // Render the bottom area
  svg.append("path")
  .datum(data2)
  .attr("d", areaBottom)
  .attr("fill", color)
  .style("opacity", 0.7)
  .attr("id", graphId + "-bottom");

  graphDrawn = true;
}

function clearGraph(prefix) {
  // Iterate over all graph ids and remove the corresponding paths
  graphIds.forEach(id => {
    if (id.startsWith(prefix)) {
      d3.select("#" + id + "-top").remove();
      d3.select("#" + id + "-bottom").remove();
    }
  });
  graphIds = graphIds.filter(id => !id.startsWith(prefix));
  graphDrawn = false;
  console.log(graphDrawn)
}

function createMiddleLine() {
  svg.append("line")
  .attr("x1", xScale(xScale.domain()[0]))
  .attr("y1", yScale(0)) // Puedes ajustar el valor y según tus necesidades
  .attr("x2", xScale(xScale.domain()[1]))
  .attr("y2", yScale(0)) // Puedes ajustar el valor y según tus necesidades
  .style("stroke-width", 2)
  .style("stroke", "black");
}

function deleteMiddleLine() {
  d3.select("line").remove();
}


d3.select("#egButton").on("click", function() {
  if (graphDrawn === true) {
    clearGraph("eg");
    deleteMiddleLine()
    console.log("se borro el grafico -eg")
    console.log(graphDrawn)
  } else {
    drawGraph(dEgHom, dEgMuj, "blue", "eg");
    createMiddleLine();
    console.log("se dibujo el grafico -eg")
    console.log(graphDrawn)
  }
});
d3.select("#inButton").on("click", function() {
    if (graphDrawn === true) {
    clearGraph("in");
    deleteMiddleLine()
    console.log("se borro el grafico -in")
    console.log(graphDrawn)
  } else { 
    drawGraph(dInHom, dInMuj, "red", "in");
    createMiddleLine();
    console.log("se dibujo el grafico -in")
    console.log(graphDrawn)
  }
});

