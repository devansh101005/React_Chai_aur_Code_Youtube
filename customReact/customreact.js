function customRender(reactElement,container) {
    // const domElement=document.createElement
    // (reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    //  container.appendChild(domElement)
 
    //ye upar wala code is too bulky like baar baar likhna pdefa aisa 
    //so we will take help of loop

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement={
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

//upar ek element ban gya 
//aur ek root bhi hai hamare pass 
//now we want to render that elememt to root
//to uska function sbse upar bnaya hai
customRender(reactElement,mainContainer)
