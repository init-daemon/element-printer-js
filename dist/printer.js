export default function (selecteur, title = "") {
    const element2print = document.querySelector(selecteur);

    if (element2print) {
        const head = document.querySelector('head').cloneNode(true);
        const cloneElement = element2print.cloneNode(true);
        const windowPrint = window.open('', '', );
        
        windowPrint.document.write('<html>');
        windowPrint.document.querySelector('html').appendChild(head);
        windowPrint.document.write('<body>');

        windowPrint.document.body.appendChild(cloneElement);
        
        if (title !== "") {
            const existingTitle = windowPrint.document.querySelector('title');
            if (existingTitle) {
                existingTitle.textContent = title;
            } else {
                const newTitle = windowPrint.document.createElement('title');
                newTitle.textContent = title;
                windowPrint.document.querySelector('head').appendChild(newTitle);
            }
        }

        windowPrint.document.write('</body></html>');
        windowPrint.document.close();

        windowPrint.onload = function () {
            windowPrint.print();
            windowPrint.close();
        };
    } else {
        alert("Cannot find the element.");
    }
}
