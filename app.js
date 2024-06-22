

const parents=  React.createElement("div",{id:parent},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am h1 tag"),React.createElement('h2',{},"this is h2 tag")]))

// const heading =  React.createElement("h1",{id:"heading"},"helloo world using react");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parents);