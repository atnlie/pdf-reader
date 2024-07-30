import {readPdfPages, readPdfText} from 'pdf-text-reader';

async function readPDF() {
    const pages = await readPdfText({url: './harga.pdf'});
    console.info(pages);
}

async function readLinesPDF() {
    const pageLines = await readPdfPages({url:'./harga.pdf'});
    console.info(pageLines[0]?.lines?.map(
        (val, idx) => idx + " -> " + val + "\n"
    )
    );
    // console.info(pageLines[0]?.lines[0]);

    for (var key in pageLines[0]?.lines) {
        var value = pageLines[0]?.lines[key];
        // var key_arr = Object.keys(cons);
        console.info(key + ' -> ' + value);
    }
}

readPDF();
readLinesPDF();
