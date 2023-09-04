export default function (selector) {
    document.querySelector('#epjs-print')?.remove();

    const elements = document.querySelectorAll(selector);


    const container = document.createElement('div');
    container.id = "epjsprint";

    elements.forEach(element => {
        const theElement = element.cloneNode(true);
        container.appendChild(theElement);
    });

    document.body.insertAdjacentElement('afterend', container);

    window.print();
}
