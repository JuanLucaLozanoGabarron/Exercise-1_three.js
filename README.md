# Realize3D

## Overview

Realize3D is on online platform where you can found objects and see an 3D preview of it. 

## Installation

```bash
npm install
```

## Used packages

### React Router Dom
```bash
npm i react-router-dom
```
### Three.js
```bash
npm install @react-three/drei
```

### From glb to gltf (used npx)
```bash
npx gltfjsx model.glb
```

## Sources
- https://dev.to/nourdinedev/how-to-use-threejs-and-react-to-render-a-3d-model-of-your-self-4kkf
- https://www.npmjs.com/package/@react-three/drei
- https://www.framer.com/motion/
- https://sketchfab.com/feed

## Documentation
For this assignment, I first looked for a method for placing 3D objects on my website. I then chose to combine three.js with react. 

I first created a component to create an infobox for each object. These boxes show the name and an image of the object. 

I then went looking for objects that I could use on my website. I found these on the following website: https://sketchfab.com/tags/glb.

When adding these objects, I had trouble. I encountered an error. I had a CAP file, but it couldn't be read. I then looked for a method to read it. Adv chatgpt I found a solution. I was apparently able to convert my GLB file into a GTLF. By writing the following code in my terminal, my file was converted; npx gltfjsx jouwModel.glb.

My next bug was that my objects were too far or too close to the camera. By changing my camera positions, I could then change their position and rotate them in preview mode. 


So I had difficulties in adding, converting and correctly placing my objects.

## Author
Juan-Luca Lozano



