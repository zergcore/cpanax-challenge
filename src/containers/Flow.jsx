import React, { useState, useCallback }  from 'react'
import ReactFlow, { 
                    Controls, 
                    Background, 
                    applyNodeChanges,
                    applyEdgeChanges,
                    addEdge,
                    ReactFlowProvider, 
                    useReactFlow
                   } from 'reactflow';

import TextUpdaterNode from '../components/TextUpdaterNode';

import 'reactflow/dist/style.css';
import '../styles/Flow.scss'
import '../styles/TextUpdaterNode.scss'

const defaultNodes = [
  {
    id: 'a',
    type: 'input',
    data: { label: 'Node A' },
    position: { x: -10, y: 0 },
  },

  {
    id: 'b',
    data: { label: 'Node B' },
    position: { x: -10, y: 75 },
  },
  {
    id: 'c',
    type: 'output',
    data: { label: 'Node C' },
    position: { x: -10, y: 125 },
  },
];

const defaultEdges = [{ id: 'ea-b', source: 'a', target: 'b' }];

const edgeOptions = {
  animated: true,
  style: {
    stroke: 'white',
  },
};

const connectionLineStyle = { stroke: 'white' };

let nodeId = 0;

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const initialNodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextUpdaterNode };


function Flow() {

  const reactFlowInstance = useReactFlow();
  const onClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);


  // const [nodes, setNodes] = useState(initialNodes);
  // const [edges, setEdges] = useState([]);

  // const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );
  // const onEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
  // const onConnect = useCallback(
  //   (connection) => setEdges((eds) => addEdge(connection, eds)),
  //   [setEdges]
  // );

  
  return (
    <div style={{ height: '80vh', width:'80vh', right:'0' }}>
      
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        defaultEdgeOptions={edgeOptions}
        fitView
        style={{
          backgroundColor: '#D3D2E5',
        }}
        connectionLineStyle={connectionLineStyle}
      />
      <button onClick={onClick} className="btn-add">
        Agregar
      </button>
    

      {/* <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      style={rfStyle}
    /> */}
    </div>
  )
}

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}