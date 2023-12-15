const root=document.getElementById('root');
//<a href="https://google.com" target="_blank">Welcome To google</a>
//In react the above HTML tag is parsed as give below
const reactElement={
    type: 'a',
    works: {
        href: 'https://google.com',
        target: '_blank'
    },
    child: 'Welcome To google'
}

//Element we get from App.jsx file is rendered the same way in main.jsx as below
function renderer(root, reactElement){
    // const anchorElement=document.createElement()
    // const anchorElement=document.createElement(customDOM.type);
    // anchorElement.setAttribute('href',customDOM.work.href);
    // anchorElement.setAttribute('target',customDOM.work.target);
    // anchorElement.innerHTML=customDOM.child;
    // root.appendChild(anchorElement);

    //Within react also there is a method that continously creates an element
    //And every time a tree of element is made just like above reactElement
    //At the end we inject it in the HTML
    const ElementInsideRootId=document.createElement(reactElement.type);
    for (const work in customDOM.works) {
        if(work==='child')   continue;//before the developers used to write child property within the works object, but in our case it is not there
       ElementInsideRootId.setAttribute(work,reactElement.works[work]);
    }                       
    ElementInsideRootId.innerHTML=reactElement.child;
    root.appendChild(ElementInsideRootId)
}
renderer(root,reactElement);