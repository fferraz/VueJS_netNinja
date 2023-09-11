const app = Vue.createApp({
    data(){
        return {
            url: 'http://www.google.com',
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img:'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'Brandon rothfuss', img:'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'Brandon rothfuss', img:'assets/3.jpg', isFav: true}
            ],
            //title: 'The Final Empire',
            //author: 'Brandon Sanderson',
            //age: 45,
            showBooks: true,
            x: 0,
            y: 0
        }
    },
    methods:{
        //changeTitle(title){
            // this.title = 'Something else'
            // this.title = title
        //},
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toggleFav(book){
            book.isFav = !book.isFav;
            //console.log(this.books[index].isFav)
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
   // template: '<h2> I am the template </h2>'
})
app.mount('#app')