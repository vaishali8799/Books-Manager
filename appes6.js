class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }
}
class UI{
    addBooktoList(book){
        const list=document.getElementById('book-list');
        const row =document.createElement('tr');
        row.innerHTML=`
        <td> ${book.title}</td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td> <a href="#" class="delete">x</a></td>
        `;
        list.appendChild(row);

    }
    showAlert(message,className){
         //make div
    const div=document.createElement('div');
    //give it class
    div.className=`alert ${className}`;
    //add text

    div.appendChild(document.createTextNode(message));
    //get parent
    const container=document.querySelector('.container');
    const form=document.querySelector('#book-form');
    //insert alert div in container before form
    container.insertBefore(div,form);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);

    }
    deleteBook(target){

        if(target.className==='delete'){
            target.parentElement.parentElement.remove();
        }
    }
    clearFeilds(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';

    }

}
document.getElementById('book-form').addEventListener('submit',function(e){
    const title= document.getElementById('title').value,
          author=document.getElementById('author').value,
          isbn= document.getElementById('isbn').value 
    const book= new Book(title,author,isbn);
    const ui = new UI();

    //validate
    if(title===''|| author===''|| isbn===''){
     //ui alert not window alert
     ui.showAlert ('Please fill in all the feilds','error');
    }
    else{
    ui.addBooktoList(book);

    ui.showAlert('Book added!','success');

    ui.clearFeilds()};

 e.preventDefault();

});
document.getElementById('book-list').addEventListener('click',function(e){
    const ui=new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book deleted.','success');
    e.preventDefault();
});