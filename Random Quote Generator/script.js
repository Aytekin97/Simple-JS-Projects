function callQuote(){
    var quotes = {
        "- Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
        "-Madeline Miller": '"Bury us, and mark our names above. Let us be free."',
        "-Ludwig von Mises": '"Socialism is an alternative to capitalism as potassium cyanide is an alternative to water."',
        "-Stefan Molyneux": '"Socialism, or communism as it is sometimes called, is merely a secular religion, where the State becomes a god."',
        "Gustave de Molinari": '"Just as war is the natural consequence of monopoly, peace is the natural consequence of liberty."'
    };

    var authors = Object.keys(quotes);
    console.log(authors);
    var randomNumber = Math.floor(Math.random() * authors.length);
    console.log(randomNumber);
    var author = authors[randomNumber];
    console.log(author);

    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}